/* ════════════════════════════════════════════════════════
   🚀 OPEN / CLOSE DIRECTORY
════════════════════════════════════════════════════════ */
function openShopDirectory() {
  document.getElementById('sdOverlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  loadDirectory();
  // Firebase auth state listener
  if(fbReady) {
    auth.onAuthStateChanged(user => {
      sdCurrentUser = user;
      updateAuthUI(user);
    });
  }
}
function closeShopDirectory() {
  document.getElementById('sdOverlay').classList.add('hidden');
  document.body.style.overflow = '';
}

/* ════════════════════════════════════════════════════════
   🔀 TAB SWITCHING
════════════════════════════════════════════════════════ */
function switchSDTab(tab) {
  sdCurrentTab = tab;
  document.querySelectorAll('.sd-tab').forEach(t=>t.classList.remove('active'));
  const tabEl = document.getElementById('sdTab'+tab.charAt(0).toUpperCase()+tab.slice(1));
  if(tabEl) tabEl.classList.add('active');
  document.querySelectorAll('.sd-panel').forEach(p=>p.classList.remove('active'));
  const panelEl = document.getElementById('sdPanel'+tab.charAt(0).toUpperCase()+tab.slice(1));
  if(panelEl) panelEl.classList.add('active');
  // Panel-specific init
  if(tab==='favorites') renderFavorites();
  if(tab==='admin')     loadAdminDashboard();
  if(tab==='account')   updateAccountPanel();
  if(tab==='nearby') {
    if(sdNearbyLat) {
      applyNearbyRadius();
    } else {
      // Auto-prompt for location when user opens Nearby tab for the first time
      loadNearbyShops();
    }
  }
}

/* ════════════════════════════════════════════════════════
   🔐 FIREBASE AUTH
════════════════════════════════════════════════════════ */
function switchAuthTab(type) {
  ['login','signup'].forEach(t=>{
    document.getElementById('authTab'+t.charAt(0).toUpperCase()+t.slice(1)).classList.toggle('active', t===type);
    document.getElementById('authForm'+t.charAt(0).toUpperCase()+t.slice(1)).style.display = t===type?'':'none';
  });
}

async function fbSignIn() {
  if(!fbReady) { sdToast('❌ Firebase not connected. Please try again.'); return; }
  const email = document.getElementById('authLoginEmail').value.trim();
  const pass  = document.getElementById('authLoginPass').value;
  if(!email||!pass) { sdToast('⚠️ Enter email and password'); return; }
  const btn = document.getElementById('loginBtn');
  btn.textContent='Signing in…'; btn.disabled=true;
  try {
    const cred = await auth.signInWithEmailAndPassword(email, pass);
    sdCurrentUser = cred.user;
    updateAuthUI(cred.user);
    sdToast('✅ Welcome back!');
    switchSDTab('browse');
  } catch(e) {
    const msg={
      'auth/wrong-password':'Wrong password. Try again.',
      'auth/user-not-found':'No account with that email.',
      'auth/too-many-requests':'Too many attempts. Try later.',
    }[e.code]||e.message;
    sdToast('❌ '+msg);
  } finally { btn.textContent='Sign In →'; btn.disabled=false; }
}

async function fbSignUp() {
  if(!fbReady) { sdToast('❌ Firebase not connected. Please try again.'); return; }
  const name  = document.getElementById('authSignupName').value.trim();
  const email = document.getElementById('authSignupEmail').value.trim();
  const pass  = document.getElementById('authSignupPass').value;
  if(!name||!email||!pass) { sdToast('⚠️ Fill all fields'); return; }
  if(pass.length<6)        { sdToast('⚠️ Password min 6 characters'); return; }
  const btn=document.getElementById('signupBtn');
  btn.textContent='Creating…'; btn.disabled=true;
  try {
    const cred = await auth.createUserWithEmailAndPassword(email, pass);
    await cred.user.updateProfile({ displayName: name });
    // Save user profile to Firestore
    await db.collection('users').doc(cred.user.uid).set({
      id: cred.user.uid, name, email,
      role: 'user',
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    sdCurrentUser = cred.user;
    updateAuthUI(cred.user);
    sdToast('✅ Account created! Welcome, '+name+'!');
    switchSDTab('browse');
  } catch(e) {
    sdToast('❌ '+(e.code==='auth/email-already-in-use'?'Email already registered':e.message));
  } finally { btn.textContent='Create Account →'; btn.disabled=false; }
}

async function fbGoogleSignIn() {
  if(!fbReady) { sdToast('❌ Firebase not connected. Please try again.'); return; }
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const cred = await auth.signInWithPopup(provider);
    sdCurrentUser = cred.user;
    // Upsert user doc
    await db.collection('users').doc(cred.user.uid).set({
      id: cred.user.uid,
      name: cred.user.displayName,
      email: cred.user.email,
      role: 'user',
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    updateAuthUI(cred.user);
    sdToast('✅ Signed in with Google!');
    switchSDTab('browse');
  } catch(e) { sdToast('❌ '+e.message); }
}

async function fbSignOut() {
  if(fbReady) await auth.signOut();
  sdCurrentUser = null;
  updateAuthUI(null);
  sdToast('👋 Signed out successfully');
}

/** Demo login when Firebase not configured */
function demoLogin() {
  sdCurrentUser = {
    uid:'demo_user',
    displayName:'Demo User',
    email:'demo@wellnexis.in'
  };
  updateAuthUI(sdCurrentUser);
  switchSDTab('browse');
}

function updateAuthUI(user) {
  const out = document.getElementById('sdAuthLoggedOut');
  const inn = document.getElementById('sdAuthLoggedIn');
  if(!out || !inn) return; // elements not in DOM yet
  if(user) {
    out.style.display='none'; inn.style.display='';
    const name = user.displayName||user.email||'User';
    document.getElementById('userAvatar').textContent = name.charAt(0).toUpperCase();
    document.getElementById('userDisplayName').textContent = name;
    document.getElementById('userDisplayEmail').textContent = user.email||'';
    if(sdAdminAuth) document.getElementById('sdTabAdmin').style.display='';
    loadUserStats(user.uid);
    loadMyShops(user.uid);
  } else {
    out.style.display=''; inn.style.display='none';
  }
}
function updateAccountPanel() {
  if(sdCurrentUser) updateAuthUI(sdCurrentUser);
}

async function loadUserStats(uid) {
  if(!fbReady) {
    document.getElementById('userShopCount').textContent = '0';
    document.getElementById('userReviewCount').textContent = '0';
    return;
  }
  try {
    const [shopsSnap, revSnap] = await Promise.all([
      db.collection('shops').where('ownerId','==',uid).get(),
      db.collection('reviews').where('userId','==',uid).get()
    ]);
    document.getElementById('userShopCount').textContent = shopsSnap.size;
    document.getElementById('userReviewCount').textContent = revSnap.size;
  } catch(e) {}
}

async function loadMyShops(uid) {
  const el = document.getElementById('myShopsList');
  if(!el) return;
  // fbReady check removed — will show empty state naturally
  try {
    const snap = await db.collection('shops').where('ownerId','==',uid).get();
    if(snap.empty) { el.innerHTML='<div style="font-size:.8rem;color:var(--text3);text-align:center;padding:20px;">No shops registered yet.</div>'; return; }
    el.innerHTML = snap.docs.map(d=>{
      const s={id:d.id,...d.data()};
      const statusBadge = s.isApproved
        ? '<span class="admin-badge adbadge-approved">✅ Approved</span>'
        : (s.status==="rejected"
            ? '<span class="admin-badge" style="background:rgba(212,64,42,.12);color:#c0392b;border:1px solid rgba(212,64,42,.25);">❌ Rejected</span>'
            : '<span class="admin-badge adbadge-pending">⏳ Pending Review</span>');
      const viewBtn = s.isApproved
        ? `<button onclick="event.stopPropagation();openShopDetail('${s.id}')" style="margin-top:6px;font-size:.7rem;padding:4px 10px;border-radius:20px;background:rgba(27,79,204,.1);color:var(--primary);border:1px solid rgba(27,79,204,.2);cursor:pointer;font-family:var(--font);font-weight:700;">👁️ View Public Page</button>`
        : '<div style="font-size:.68rem;color:var(--text3);margin-top:6px;">🕐 Awaiting admin approval before going public</div>';
      return `<div class="admin-shop-row" style="margin-bottom:10px;flex-wrap:wrap;gap:6px;">
        <div class="admin-shop-icon">${shopTypeIcon(s.shopType)}</div>
        <div class="admin-shop-info" style="flex:1;min-width:120px;">
          <div class="admin-shop-name">${escHtml(s.shopName)}</div>
          <div class="admin-shop-meta">${escHtml(s.village||'')} · ${escHtml(s.district||'')}</div>
          ${viewBtn}
        </div>
        ${statusBadge}
      </div>`;
    }).join('');
  } catch(e) { el.innerHTML='<div style="color:var(--secondary);font-size:.78rem;padding:10px;">'+escHtml(e.message)+'</div>'; }
}

/* ════════════════════════════════════════════════════════
   📂 LOAD DIRECTORY
════════════════════════════════════════════════════════ */
/* ════════════════════════════════════════════════════════
   🏪 SAMPLE SHOPS — shown when Firebase is not connected
════════════════════════════════════════════════════════ */
// Sample shops removed — live Firebase only
const SD_SAMPLE_SHOPS = [];

async function loadDirectory() {
  const grid = document.getElementById('dirGrid');
  if(!grid) return;
  grid.innerHTML = Array(6).fill('<div class="skeleton skel-card"></div>').join('');
  try {
    if(fbReady) {
      // Simple collection fetch — no compound index required
      // PUBLIC VIEW: only show approved shops to all users
      const snap = await db.collection('shops').where('isApproved','==',true).get();
      sdAllShops = snap.docs
        .map(d=>({id:d.id,...d.data()}))
        .sort((a,b)=> {
          const ta = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(a.createdAt||0);
          const tb = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(b.createdAt||0);
          return tb - ta;
        });
    } else {
      // IDB fallback — only show approved shops publicly
      const _allIDB = await ShopIDB.getAll();
      sdAllShops = _allIDB.filter(s => s.isApproved === true);
    }
    populateDistrictFilter(sdAllShops);
    renderDirectory(sdAllShops);
    if (!sdAllShops.length) {
      const grid = document.getElementById('dirGrid');
      if(grid) grid.innerHTML = `<div class="dir-empty" style="grid-column:1/-1">
        <span class="dir-empty-icon">🏪</span>
        <h4>No shops registered yet</h4>
        <p>Be the first to register your shop and reach customers in your area!</p>
        <button class="shop-btn-next" onclick="closeShopDirectory();setTimeout(openShopModal,300)" style="display:inline-flex;margin-top:12px;">➕ Register Your Shop</button>
      </div>`;
    }
  } catch(e) {
    console.warn('Directory load failed:', e.message);
    sdAllShops = [];
    const grid = document.getElementById('dirGrid');
    if(grid) grid.innerHTML = `<div class="dir-empty" style="grid-column:1/-1">
      <span class="dir-empty-icon">⚠️</span>
      <h4>Could not load shops</h4>
      <p style="font-size:.78rem;color:var(--secondary);">${e.message}</p>
    </div>`;
  }
}

function populateDistrictFilter(shops) {
  const sel = document.getElementById('dirFilterDistrict');
  if(!sel) return;
  const existing = Array.from(sel.options).map(o=>o.value);
  [...new Set(shops.map(s=>s.district).filter(Boolean))].forEach(d=>{
    if(!existing.includes(d)) { const o=document.createElement('option'); o.value=d; o.textContent=d; sel.appendChild(o); }
  });
}

function debounceFilter() {
  clearTimeout(sdFilterTimeout);
  sdFilterTimeout = setTimeout(filterDirectory, 280);
}

function filterDirectory() {
  const search    = (document.getElementById('dirSearch')?.value||'').toLowerCase();
  const district  = document.getElementById('dirFilterDistrict')?.value||'';
  const type      = document.getElementById('dirFilterType')?.value||'';
  const minRating = parseFloat(document.getElementById('dirFilterRating')?.value)||0;

  let filtered = sdAllShops.filter(s=>{
    const blob = (s.shopName+' '+s.ownerName+' '+s.village+' '+s.district+' '+s.address).toLowerCase();
    return blob.includes(search)
      && (!district || s.district===district)
      && (!type     || s.shopType===type)
      && (s.rating||0) >= minRating;
  });

  if(sdSortMode==='rating') filtered.sort((a,b)=>(b.rating||0)-(a.rating||0));
  else if(sdSortMode==='az') filtered.sort((a,b)=>a.shopName.localeCompare(b.shopName));

  renderDirectory(filtered);
}

function setSortDir(mode, btn) {
  sdSortMode = mode;
  document.querySelectorAll('.sort-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  filterDirectory();
}

function renderDirectory(shops) {
  const grid = document.getElementById('dirGrid');
  if(!grid) return;
  if(!shops.length) {
    grid.innerHTML=`<div class="dir-empty" style="grid-column:1/-1">
      <span class="dir-empty-icon">🔍</span>
      <h4>No shops found</h4>
      <p>Try adjusting your filters or search terms.</p>
    </div>`;
    return;
  }
  grid.innerHTML = shops.map(s=>renderShopCard(s, sdNearbyLat, sdNearbyLng)).join('');
}

/* ════════════════════════════════════════════════════════
   🃏 SHOP CARD RENDERER
════════════════════════════════════════════════════════ */
function renderShopCard(s, userLat, userLng) {
  const dist = haversine(userLat, userLng, parseFloat(s.lat), parseFloat(s.lng));
  const distBadge = dist ? `<span class="dir-distance">📍 ${dist} km</span>` : '';
  const isFav  = sdUserFavorites.includes(s.id);
  const stars  = renderStars(s.rating||0);
  const icon   = shopTypeIcon(s.shopType);
  const isGov  = s.shopType==='Government Service';
  const isCSC  = s.shopType==='CSC Center';
  const topCls = isGov?'gov':isCSC?'csc':'';
  const icoC   = isGov?'gov-icon':isCSC?'csc-icon':'';
  const govBadge = isCSC ? `<span class="dir-badge dir-badge-csc">🏛️ Govt CSC</span>` :
                   isGov ? `<span class="dir-badge dir-badge-gov">🏢 Govt Service</span>` : '';
  const lat=parseFloat(s.lat), lng=parseFloat(s.lng);
  const mapsUrl = lat&&lng ? `https://maps.google.com/?q=${lat},${lng}` :
    `https://maps.google.com/?q=${encodeURIComponent((s.address||'')+', '+(s.village||'')+', '+(s.district||''))}`;

  return `<div class="dir-card" onclick="openShopDetail('${s.id}')">
    <div class="dir-card-top ${topCls}"></div>
    <div class="dir-card-body">
      <div class="dir-card-header">
        <div class="dir-card-icon-wrap">
          <div class="dir-card-icon ${icoC}">${icon}</div>
        </div>
        <div class="dir-card-badges">
          ${s.isApproved ? '<span class="dir-badge dir-badge-approved">✅ Verified</span>' : '<span class="dir-badge" style="background:rgba(245,166,35,.15);color:#7A4F00;border:1px solid rgba(245,166,35,.3);">⏳ Pending</span>'}
          ${govBadge}
        </div>
      </div>
      <h4>${escHtml(s.shopName)}</h4>
      <div class="dir-card-sub">👤 ${escHtml(s.ownerName)}</div>
      <div class="dir-card-loc">📍 ${escHtml(s.village||'')}${s.district?', '+escHtml(s.district):''} ${distBadge}</div>
      <div class="dir-rating-row">
        <span class="dir-stars">${stars}</span>
        <span class="dir-rating-num">${(s.rating||0).toFixed(1)}</span>
        <span class="dir-review-count">(${s.reviewCount||0} reviews)</span>
      </div>
      <div class="dir-card-actions" onclick="event.stopPropagation()">
        <button class="dir-action-btn dab-call" onclick="window.location.href='tel:${escHtml(s.phone1||'')}'">📞</button>
        <button class="dir-action-btn dab-map" onclick="window.open('${mapsUrl}','_blank')">🗺️</button>
        <button class="dir-action-btn dab-rate" onclick="openShopDetail('${s.id}',true)">⭐ Rate</button>
        <button class="dir-action-btn dab-fav${isFav?' faved':''}" onclick="toggleFavorite('${s.id}',this)">${isFav?'❤️':'🤍'}</button>
      </div>
    </div>
  </div>`;
}


/* ════════════════════════════════════════════════════════
   📍 NEARBY MAP — Google Maps Integration
════════════════════════════════════════════════════════ */
let sdGMap = null;
let sdGMapReady = false;
let sdNearbyMarkers = [];
let sdNearbyView = 'map'; // 'map' | 'list'
let sdNearbyInfoWindow = null;

// Called by Google Maps API once loaded
function initNearbyMapApi() {
  sdGMapReady = true;
}

function setNearbyView(view) {
  sdNearbyView = view;
  const mapCon = document.getElementById('nearbyMapContainer');
  const grid   = document.getElementById('nearbyGrid');
  const btnMap  = document.getElementById('btnToggleMap');
  const btnList = document.getElementById('btnToggleList');
  if(view === 'map') {
    if(mapCon) mapCon.style.display = '';
    if(grid)   grid.style.display = 'none';
    if(btnMap)  { btnMap.style.background='var(--primary)'; btnMap.style.color='#fff'; }
    if(btnList) { btnList.style.background='transparent'; btnList.style.color='var(--text2)'; }
    // Trigger map resize so tiles render correctly
    if(sdGMap) google.maps.event.trigger(sdGMap, 'resize');
  } else {
    if(mapCon) mapCon.style.display = 'none';
    if(grid)   grid.style.display = '';
    if(btnMap)  { btnMap.style.background='transparent'; btnMap.style.color='var(--text2)'; }
    if(btnList) { btnList.style.background='var(--primary)'; btnList.style.color='#fff'; }
  }
}

function onNearbyRadiusChange() {
  // If we already have location, re-run search with new radius
  if(sdNearbyLat && sdNearbyLng) {
    applyNearbyRadius();
  }
}

function applyNearbyRadius() {
  const radius = parseFloat(document.getElementById('nearbyRadius')?.value || 5);
  const nearby = sdAllShops
    .map(s => ({ ...s, dist: haversine(sdNearbyLat, sdNearbyLng, parseFloat(s.lat), parseFloat(s.lng)) }))
    .filter(s => s.dist !== null && parseFloat(s.dist) <= radius)
    .sort((a, b) => parseFloat(a.dist) - parseFloat(b.dist));

  renderNearbyGrid(nearby, radius);
  renderNearbyMap(sdNearbyLat, sdNearbyLng, nearby, radius);
}

function renderNearbyGrid(nearby, radius) {
  const grid = document.getElementById('nearbyGrid');
  if(!grid) return;
  if(!nearby.length) {
    grid.innerHTML = `<div class="dir-empty" style="grid-column:1/-1">
      <span class="dir-empty-icon">📍</span><h4>No shops within ${radius}km</h4>
      <p>Try a larger radius from the dropdown.</p></div>`;
  } else {
    grid.innerHTML = nearby.map(s => renderShopCard(s, sdNearbyLat, sdNearbyLng)).join('');
  }
}

function renderNearbyMap(userLat, userLng, shops, radius) {
  const mapCon = document.getElementById('nearbyMapContainer');
  const overlay = document.getElementById('nearbyMapOverlay');
  const toggle  = document.getElementById('nearbyViewToggle');

  if(mapCon) mapCon.style.display = '';
  if(toggle) toggle.style.display = 'flex';
  if(overlay) overlay.style.display = 'none';

  // Show map view by default when called
  setNearbyView('map');

  if(!window.google || !window.google.maps) {
    // Fallback: open Google Maps in browser with nearby search
    openGoogleMapsFallback(userLat, userLng, shops, radius);
    return;
  }

  const mapEl = document.getElementById('nearbyGMap');
  if(!mapEl) return;

  // Init or reuse map
  if(!sdGMap) {
    sdGMap = new google.maps.Map(mapEl, {
      center: { lat: userLat, lng: userLng },
      zoom: radiusToZoom(radius),
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
      zoomControl: true,
      styles: [
        { featureType:'poi', elementType:'labels', stylers:[{visibility:'off'}] }
      ]
    });
    sdNearbyInfoWindow = new google.maps.InfoWindow();
  } else {
    sdGMap.setCenter({ lat: userLat, lng: userLng });
    sdGMap.setZoom(radiusToZoom(radius));
  }

  // Clear old markers
  sdNearbyMarkers.forEach(m => m.setMap(null));
  sdNearbyMarkers = [];

  // User location marker (blue dot)
  const userMarker = new google.maps.Marker({
    position: { lat: userLat, lng: userLng },
    map: sdGMap,
    title: 'Your Location',
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 10,
      fillColor: '#4285F4',
      fillOpacity: 1,
      strokeColor: '#fff',
      strokeWeight: 3
    },
    zIndex: 999
  });
  sdNearbyMarkers.push(userMarker);

  // Radius circle
  const circle = new google.maps.Circle({
    map: sdGMap,
    center: { lat: userLat, lng: userLng },
    radius: radius * 1000,
    fillColor: '#4285F4',
    fillOpacity: 0.07,
    strokeColor: '#4285F4',
    strokeOpacity: 0.4,
    strokeWeight: 1.5
  });
  sdNearbyMarkers.push({ setMap: (m) => circle.setMap(m) });

  // Shop markers
  const bounds = new google.maps.LatLngBounds();
  bounds.extend({ lat: userLat, lng: userLng });

  shops.forEach(shop => {
    const lat = parseFloat(shop.lat);
    const lng = parseFloat(shop.lng);
    if(!lat || !lng) return;

    const isGov = shop.shopType === 'Government Service';
    const isCSC = shop.shopType === 'CSC Center';
    const color = isGov ? '#E53E3E' : isCSC ? '#805AD5' : '#38A169';
    const emoji = isGov ? '🏢' : isCSC ? '🏛️' : shopTypeIcon(shop.shopType);

    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: sdGMap,
      title: shop.shopName,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 9,
        fillColor: color,
        fillOpacity: 1,
        strokeColor: '#fff',
        strokeWeight: 2
      },
      label: {
        text: emoji,
        fontSize: '13px'
      }
    });

    const mapsUrl = `https://maps.google.com/?q=${lat},${lng}`;
    marker.addListener('click', () => {
      const dist = haversine(userLat, userLng, lat, lng);
      const content = `
        <div style="font-family:system-ui,sans-serif;min-width:180px;padding:4px 0;">
          <div style="font-size:1rem;font-weight:700;margin-bottom:3px;">${escHtml(shop.shopName)}</div>
          <div style="font-size:.75rem;color:#666;margin-bottom:4px;">${escHtml(shop.shopType)}</div>
          <div style="font-size:.75rem;color:#444;margin-bottom:6px;">📍 ${escHtml(shop.village||'')}${shop.district?', '+escHtml(shop.district):''} · ${dist} km</div>
          ${shop.phone1 ? `<a href="tel:${escHtml(shop.phone1)}" style="display:inline-block;margin-right:6px;padding:4px 10px;background:#38A169;color:#fff;border-radius:20px;font-size:.72rem;font-weight:700;text-decoration:none;">📞 Call</a>` : ''}
          <a href="${mapsUrl}" target="_blank" style="display:inline-block;padding:4px 10px;background:#4285F4;color:#fff;border-radius:20px;font-size:.72rem;font-weight:700;text-decoration:none;">🗺️ Directions</a>
        </div>`;
      sdNearbyInfoWindow.setContent(content);
      sdNearbyInfoWindow.open(sdGMap, marker);
    });

    sdNearbyMarkers.push(marker);
    bounds.extend({ lat, lng });
  });

  if(shops.length > 0) sdGMap.fitBounds(bounds, { padding: 40 });
  sdToast(`📍 Found ${shops.length} shop${shops.length !== 1 ? 's' : ''} within ${radius}km`);
}

function radiusToZoom(km) {
  if(km <= 2)  return 14;
  if(km <= 5)  return 13;
  if(km <= 10) return 12;
  return 10;
}

function openGoogleMapsFallback(userLat, userLng, shops, radius) {
  // When Google Maps JS API isn't available, open native Google Maps
  // with all shop locations as waypoints (up to 10)
  const base = `https://www.google.com/maps/search/shops+CSC+government/@${userLat},${userLng},14z`;
  window.open(base, '_blank');
  sdToast('📍 Opening Google Maps in browser');

  // Still render the list
  renderNearbyGrid(shops, radius);
  const toggle = document.getElementById('nearbyViewToggle');
  if(toggle) toggle.style.display = 'flex';
  setNearbyView('list');
}

/* ════════════════════════════════════════════════════════
   📍 NEARBY SHOPS (Haversine GPS-based) — UPDATED
════════════════════════════════════════════════════════ */
async function loadNearbyShops() {
  const btn = document.getElementById('nearbyLoadBtn');
  const placeholder = document.getElementById('nearbyPlaceholder');
  const mapCon = document.getElementById('nearbyMapContainer');
  const overlay = document.getElementById('nearbyMapOverlay');

  if(!navigator.geolocation) { sdToast('⚠️ Geolocation not supported on this device'); return; }

  btn.textContent = '⏳ Locating you…'; btn.disabled = true;
  if(placeholder) placeholder.style.display = 'none';
  if(mapCon) { mapCon.style.display = ''; }
  if(overlay) overlay.style.display = 'flex';

  navigator.geolocation.getCurrentPosition(
    async pos => {
      sdNearbyLat = pos.coords.latitude;
      sdNearbyLng = pos.coords.longitude;
      btn.textContent = '🔄 Refresh'; btn.disabled = false;

      // Ensure shops are loaded
      if(!sdAllShops.length) await loadDirectory();

      applyNearbyRadius();
    },
    err => {
      sdToast('⚠️ Location error: ' + err.message);
      btn.textContent = '📍 Get My Location & Search'; btn.disabled = false;
      if(placeholder) placeholder.style.display = '';
      if(mapCon) mapCon.style.display = 'none';
    },
    { timeout: 10000, enableHighAccuracy: true }
  );
}


/* ════════════════════════════════════════════════════════
   🏪 SHOP DETAIL VIEW
════════════════════════════════════════════════════════ */
async function openShopDetail(shopId, scrollToReviews=false) {
  sdPrevTab = sdCurrentTab;
  sdCurrentShopId = shopId;

  // Find in cache or fetch
  let shop = sdAllShops.find(s=>s.id===shopId);
  if(!shop && fbReady) {
    try {
      const d = await db.collection('shops').doc(shopId).get();
      shop = d.exists ? {id:d.id,...d.data()} : null;
    } catch(e) {}
  }
  // demo fallback removed
  if(!shop) { sdToast('⚠️ Shop not found'); return; }

  // PRIVACY GUARD: Only show approved shops in public detail view.
  // Exception: owner viewing their own shop from Account tab.
  const isOwner = sdCurrentUser && shop.ownerId === sdCurrentUser.uid;
  if(!shop.isApproved && !isOwner) {
    sdToast('⚠️ This shop is not yet publicly listed.');
    return;
  }

  // Switch to detail panel
  document.querySelectorAll('.sd-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.sd-panel').forEach(p=>p.classList.remove('active'));
  document.getElementById('sdPanelDetail').classList.add('active');

  const isGov = shop.shopType==='Government Service';
  const isCSC = shop.shopType==='CSC Center';
  const heroC = isGov?'gov-hero':isCSC?'csc-hero':'';
  const lat=parseFloat(shop.lat||0), lng=parseFloat(shop.lng||0);
  const mapsUrl = lat&&lng ? `https://maps.google.com/?q=${lat},${lng}` :
    `https://maps.google.com/?q=${encodeURIComponent((shop.address||'')+', '+(shop.village||'')+', '+(shop.district||''))}`;
  const govBadge = isCSC ? '<span style="display:inline-block;background:rgba(255,255,255,.2);border-radius:20px;padding:3px 12px;font-size:.7rem;font-weight:700;margin-top:8px;">🏛️ Govt Verified CSC Center</span>' : '';
  const mapEmbed = lat&&lng ?
    `<div class="sd-map-embed"><iframe src="https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed" allowfullscreen loading="lazy"></iframe></div>` : '';
  const distBadge = sdNearbyLat ?
    `<span class="dir-distance">📍 ${haversine(sdNearbyLat,sdNearbyLng,lat,lng)} km away</span>` : '';

  // ── SHOP DETAIL — fully public, all info visible to everyone ──
  document.getElementById('sdDetailContent').innerHTML = `
    <div class="sd-detail-hero ${heroC}">
      <div style="font-size:2.2rem;margin-bottom:8px;">${shopTypeIcon(shop.shopType)}</div>
      <div class="sd-detail-name">${escHtml(shop.shopName)}</div>
      <div class="sd-detail-owner">👤 ${escHtml(shop.ownerName)}</div>
      <div class="sd-detail-loc">📍 ${escHtml(shop.address||'')} ${escHtml(shop.village||'')} ${escHtml(shop.district||'')} ${escHtml(shop.state||'')} ${distBadge}</div>
      ${govBadge}
    </div>
    <div class="sd-detail-body">
      <div class="sd-detail-kv"><div class="sd-detail-kv-label">Shop Type</div><div class="sd-detail-kv-val">${escHtml(shop.shopType||'—')}</div></div>
      <div class="sd-detail-kv"><div class="sd-detail-kv-label">Phone 1</div><div class="sd-detail-kv-val"><a href="tel:${escHtml(shop.phone1||'')}" style="color:var(--green);text-decoration:none;font-weight:700;">${escHtml(shop.phone1||'—')}</a></div></div>
      ${shop.phone2?`<div class="sd-detail-kv"><div class="sd-detail-kv-label">Phone 2</div><div class="sd-detail-kv-val"><a href="tel:${escHtml(shop.phone2)}" style="color:var(--green);text-decoration:none;font-weight:700;">${escHtml(shop.phone2)}</a></div></div>`:''}
      <div class="sd-detail-kv"><div class="sd-detail-kv-label">Email</div><div class="sd-detail-kv-val">${escHtml(shop.email||'—')}</div></div>
      <div class="sd-detail-kv"><div class="sd-detail-kv-label">District</div><div class="sd-detail-kv-val">${escHtml(shop.district||'—')}</div></div>
      <div class="sd-detail-kv"><div class="sd-detail-kv-label">Rating</div><div class="sd-detail-kv-val">${renderStars(shop.rating||0)} ${(shop.rating||0).toFixed(1)} <span style="font-size:.72rem;color:var(--text3)">(${shop.reviewCount||0} reviews)</span></div></div>
    </div>
    <div class="sd-detail-actions">
      <button class="sd-detail-btn sdb-call" onclick="window.location.href='tel:${escHtml(shop.phone1||'')}'">📞 Call Now</button>
      <button class="sd-detail-btn sdb-map" onclick="window.open('${mapsUrl}','_blank')">📍 Open Maps</button>
      <button class="sd-detail-btn sdb-share" onclick="shareShop('${shop.id}','${escHtml(shop.shopName).replace(/'/g,'&apos;')}')">📤 Share</button>
    </div>
    ${mapEmbed}
    <div style="margin:18px 0 0;background:var(--surface);border:1px solid var(--border);border-radius:14px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,var(--primary),var(--teal));padding:11px 16px;">
        <div style="font-size:.7rem;font-weight:800;color:rgba(255,255,255,.85);text-transform:uppercase;letter-spacing:.7px;">👤 Owner Profile</div>
      </div>
      <div style="padding:16px;display:flex;gap:14px;align-items:flex-start;">
        <div style="width:64px;height:64px;border-radius:50%;flex-shrink:0;overflow:hidden;border:2px solid var(--border);background:linear-gradient(135deg,var(--primary),var(--teal));display:flex;align-items:center;justify-content:center;font-size:1.5rem;">
          ${shop.ownerPhotoB64 ? '<img src="'+shop.ownerPhotoB64+'" style="width:100%;height:100%;object-fit:cover"/>' : '👤'}
        </div>
        <div style="flex:1;min-width:0;">
          <div style="font-size:1rem;font-weight:800;color:var(--text);margin-bottom:2px;">${escHtml(shop.ownerName||'—')}</div>
          <div style="font-size:.74rem;color:var(--text3);margin-bottom:8px;">${[shop.ownerGender, shop.ownerAge ? shop.ownerAge+' yrs' : null].filter(Boolean).join(' · ')||''}</div>
          ${shop.ownerLanguages ? '<div style="font-size:.74rem;color:var(--text2);margin-bottom:6px;">🗣️ '+escHtml(shop.ownerLanguages)+'</div>' : ''}
          ${shop.ownerAbout ? '<div style="font-size:.78rem;color:var(--text2);line-height:1.55;white-space:pre-wrap;">'+escHtml(shop.ownerAbout)+'</div>' : ''}
        </div>
      </div>
      <div style="padding:0 16px 14px;display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        <div style="background:var(--bg);border-radius:8px;padding:8px 12px;">
          <div style="font-size:.64rem;color:var(--text3);font-weight:700;text-transform:uppercase;margin-bottom:2px;">📞 Contact</div>
          <a href="tel:${escHtml(shop.phone1||'')}" style="font-size:.82rem;font-weight:700;color:var(--green);text-decoration:none;">${escHtml(shop.phone1||'—')}</a>
        </div>
        <div style="background:var(--bg);border-radius:8px;padding:8px 12px;">
          <div style="font-size:.64rem;color:var(--text3);font-weight:700;text-transform:uppercase;margin-bottom:2px;">✉️ Email</div>
          <div style="font-size:.78rem;color:var(--text2);word-break:break-all;">${escHtml(shop.email||shop.ownerEmail||'—')}</div>
        </div>
      </div>
    </div>
    <div id="reviewsContainer"></div>
  `;

  loadReviews(shopId);
  if(scrollToReviews) setTimeout(()=>document.getElementById('reviewsContainer')?.scrollIntoView({behavior:'smooth'}),350);
}

function closeShopDetail() {
  document.getElementById('sdPanelDetail').classList.remove('active');
  document.querySelectorAll('.sd-panel').forEach(p=>p.classList.remove('active'));
  const pid='sdPanel'+sdPrevTab.charAt(0).toUpperCase()+sdPrevTab.slice(1);
  document.getElementById(pid)?.classList.add('active');
  const tid='sdTab'+sdPrevTab.charAt(0).toUpperCase()+sdPrevTab.slice(1);
  document.getElementById(tid)?.classList.add('active');
}

/* ════════════════════════════════════════════════════════
   ⭐ REVIEWS & RATINGS
════════════════════════════════════════════════════════ */
async function loadReviews(shopId) {
  const container = document.getElementById('reviewsContainer');
  if(!container) return;
  container.innerHTML='<div style="padding:20px;text-align:center;color:var(--text3)"><div class="skeleton skel-row" style="width:100%;height:80px;"></div></div>';

  let reviews = [];
  try {
    if(fbReady) {
      const snap = await db.collection('reviews').where('shopId','==',shopId).orderBy('createdAt','desc').get();
      reviews = snap.docs.map(d=>({id:d.id,...d.data()}));
    } else {
      await new Promise(r=>setTimeout(r,300));
      reviews = [];
      }
  } catch(e) {
    reviews = [];
      }

  // Build rating distribution
  const dist={1:0,2:0,3:0,4:0,5:0};
  reviews.forEach(r=>{ if(r.rating>=1&&r.rating<=5) dist[r.rating]++; });

  const shop = sdAllShops.find(s=>s.id===shopId);
  const avgRating = shop?.rating||0;
  const totalReviews = reviews.length;
  const hasUserReviewed = sdCurrentUser && reviews.some(r=>r.userId===sdCurrentUser.uid);

  // Rating bars
  const bars=[5,4,3,2,1].map(n=>{
    const pct = totalReviews ? Math.round((dist[n]/totalReviews)*100) : 0;
    return `<div class="rating-bar-row">
      <span class="rating-bar-label">${n}</span>
      <div class="rating-bar-track"><div class="rating-bar-fill" style="width:${pct}%"></div></div>
      <span class="rating-bar-pct">${pct}%</span>
    </div>`;
  }).join('');

  const writeReviewSection = sdCurrentUser
    ? (hasUserReviewed
        ? `<p style="font-size:.78rem;color:var(--green);background:rgba(29,155,94,.08);border-radius:8px;padding:10px;margin-bottom:14px;">✅ You've already reviewed this shop. Thank you!</p>`
        : `<button class="write-review-btn" onclick="toggleReviewForm('${shopId}')">✍️ Write a Review</button>`)
    : `<p style="font-size:.78rem;color:var(--text3);margin-bottom:12px;">🔐 <a href="javascript:void(0)" onclick="switchSDTab('account')" style="color:var(--primary)">Sign in</a> to write a review.</p>`;

  const reviewItems = reviews.map(r=>{
    const name = r.userName||'Anonymous';
    let dateStr='';
    try { dateStr = r.createdAt?.toDate ? r.createdAt.toDate().toLocaleDateString('en-IN') : new Date().toLocaleDateString('en-IN'); } catch(e){}
    return `<div class="review-item">
      <div class="review-item-header">
        <div class="review-avatar">${name.charAt(0).toUpperCase()}</div>
        <div><div class="review-name">${escHtml(name)}</div></div>
        <span class="review-date">${dateStr}</span>
      </div>
      <div class="review-item-stars">${renderStars(r.rating)}</div>
      ${r.comment?`<div class="review-item-comment">${escHtml(r.comment)}</div>`:''}
    </div>`;
  }).join('');

  container.innerHTML = `
    <div class="reviews-section-title">⭐ Ratings & Reviews</div>
    <div class="rating-summary">
      <div class="rating-big">
        <div class="rating-big-num">${avgRating?(+avgRating).toFixed(1):'—'}</div>
        <div class="rating-big-stars">${renderStars(+avgRating)}</div>
        <div class="rating-big-count">${totalReviews} review${totalReviews!==1?'s':''}</div>
      </div>
      <div class="rating-bars">${bars}</div>
    </div>
    ${writeReviewSection}
    <div id="reviewFormSlot"></div>
    <div class="review-list">${reviewItems||'<p style="font-size:.8rem;color:var(--text3);text-align:center;padding:20px;">No reviews yet. Be the first!</p>'}</div>
  `;
}

function toggleReviewForm(shopId) {
  const slot = document.getElementById('reviewFormSlot');
  if(slot.innerHTML){ slot.innerHTML=''; return; }
  sdSelectedRating=0;
  slot.innerHTML=`
    <div class="review-form-panel">
      <div style="font-size:.8rem;font-weight:700;color:var(--text);margin-bottom:6px;">Your Rating <span style="color:var(--secondary)">*</span></div>
      <div class="star-picker" id="starPicker">
        ${[1,2,3,4,5].map(n=>`<button class="star-btn" data-val="${n}" onclick="setReviewStar(${n})">★</button>`).join('')}
      </div>
      <textarea class="review-textarea" id="reviewText" placeholder="Share your experience (optional)…" rows="3"></textarea>
      <div style="display:flex;gap:8px;margin-top:10px;">
        <button class="review-submit-btn" onclick="submitReview('${shopId}')">Submit Review</button>
        <button class="review-submit-btn" style="background:var(--surface2);color:var(--text2);border:1px solid var(--border);" onclick="document.getElementById('reviewFormSlot').innerHTML=''">Cancel</button>
      </div>
    </div>`;
}

function setReviewStar(n) {
  sdSelectedRating=n;
  document.querySelectorAll('.star-btn').forEach(b=>{
    b.classList.toggle('active', parseInt(b.dataset.val)<=n);
  });
}

async function submitReview(shopId) {
  if(!sdCurrentUser){ sdToast('⚠️ Please sign in to rate'); return; }
  if(!sdSelectedRating){ sdToast('⚠️ Please select at least 1 star'); return; }
  const comment = document.getElementById('reviewText')?.value.trim()||'';
  const reviewData = {
    shopId,
    userId: sdCurrentUser.uid,
    userName: sdCurrentUser.displayName||sdCurrentUser.email||'Anonymous',
    rating: sdSelectedRating,
    comment,
    createdAt: fbReady ? firebase.firestore.FieldValue.serverTimestamp() : { toDate:()=>new Date() }
  };
  try {
    if(fbReady) {
      // Prevent duplicate — check existing
      const dup = await db.collection('reviews').where('shopId','==',shopId).where('userId','==',sdCurrentUser.uid).get();
      if(!dup.empty){ sdToast('⚠️ You already reviewed this shop'); return; }
      // Add review
      await db.collection('reviews').add(reviewData);
      // Update shop avg rating via transaction
      await db.runTransaction(async tx=>{
        const ref  = db.collection('shops').doc(shopId);
        const doc  = await tx.get(ref);
        const data = doc.data()||{};
        const oldC = data.reviewCount||0;
        const oldR = data.rating||0;
        const newC = oldC+1;
        const newR = ((oldR*oldC)+sdSelectedRating)/newC;
        tx.update(ref,{ rating:Math.round(newR*10)/10, reviewCount:newC });
        // Update local cache
        const idx = sdAllShops.findIndex(s=>s.id===shopId);
        if(idx>-1) sdAllShops[idx]={...sdAllShops[idx], rating:Math.round(newR*10)/10, reviewCount:newC};
      });
    } else {
      // demo mode removed — review not saved without Firebase
      const idx=sdAllShops.findIndex(s=>s.id===shopId);
      if(idx>-1){
        const old=sdAllShops[idx];
        const c=(old.reviewCount||0)+1;
        const r=((old.rating||0)*(old.reviewCount||0)+sdSelectedRating)/c;
        sdAllShops[idx]={...old, rating:Math.round(r*10)/10, reviewCount:c};
      }
    }
    sdToast('⭐ Review submitted! Thank you.');
    loadReviews(shopId);
  } catch(e){ sdToast('❌ '+e.message); }
}

/* ════════════════════════════════════════════════════════
   ❤️ FAVORITES SYSTEM (localStorage)
════════════════════════════════════════════════════════ */
function toggleFavorite(shopId, btn) {
  const idx = sdUserFavorites.indexOf(shopId);
  if(idx>-1){ sdUserFavorites.splice(idx,1); btn.innerHTML='🤍'; btn.classList.remove('faved'); sdToast('💔 Removed from saved'); }
  else       { sdUserFavorites.push(shopId); btn.innerHTML='❤️'; btn.classList.add('faved');    sdToast('❤️ Saved to favorites!'); }
  try{ localStorage.setItem('wd_favorites',JSON.stringify(sdUserFavorites)); }catch(e){}
}

function renderFavorites() {
  const grid = document.getElementById('favGrid');
  if(!grid) return;
  // Merge with shops loaded from Firestore/demo
  const favShops = sdUserFavorites
    .map(id => sdAllShops.find(s=>s.id===id))
    .filter(Boolean);
  if(!favShops.length){
    grid.innerHTML=`<div class="dir-empty" style="grid-column:1/-1">
      <span class="dir-empty-icon">❤️</span>
      <h4>No saved shops yet</h4>
      <p>Tap 🤍 on any shop card to save it here for quick access.</p>
    </div>`;
  } else {
    grid.innerHTML=favShops.map(s=>renderShopCard(s,sdNearbyLat,sdNearbyLng)).join('');
  }
}

