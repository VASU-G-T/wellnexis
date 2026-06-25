/* ═══════════════════════════════════════════════
   SHOP REGISTRATION SYSTEM
═══════════════════════════════════════════════ */

/* ── State → Districts map ── */
const DISTRICT_MAP = {
  'Tamil Nadu':['Chennai','Coimbatore','Madurai','Salem','Tiruchirappalli','Tirunelveli','Vellore','Erode','Thoothukudi','Kanchipuram','Tiruppur','Dindigul','Thanjavur','Ranipet','Namakkal','Virudhunagar','Karur','Nagapattinam','Cuddalore','Villupuram','Tiruvannamalai','Krishnagiri','Dharmapuri','Perambalur','Ariyalur','Pudukkottai','Sivagangai','Ramanathapuram','Tenkasi','Chengalpattu','Kallakurichi','Tirupattur','Mayiladuthurai','Nilgiris'],
  'Maharashtra':['Mumbai','Pune','Nagpur','Nashik','Aurangabad','Solapur','Kolhapur','Ahmednagar','Amravati','Nanded'],
  'Karnataka':['Bengaluru','Mysuru','Hubli','Mangaluru','Belagavi','Kalaburagi','Davangere','Ballari','Vijayapura','Shivamogga'],
  'Uttar Pradesh':['Lucknow','Agra','Varanasi','Kanpur','Prayagraj','Ghaziabad','Meerut','Noida','Aligarh','Bareilly'],
  'Rajasthan':['Jaipur','Jodhpur','Udaipur','Kota','Ajmer','Bikaner','Bharatpur','Alwar','Sikar','Bhilwara'],
  'West Bengal':['Kolkata','Howrah','Asansol','Siliguri','Durgapur','Bardhaman','Malda','Cooch Behar','Jalpaiguri','Murshidabad'],
  'Gujarat':['Ahmedabad','Surat','Vadodara','Rajkot','Bhavnagar','Jamnagar','Junagadh','Gandhinagar','Anand','Nadiad'],
  'Andhra Pradesh':['Visakhapatnam','Vijayawada','Guntur','Nellore','Kurnool','Rajahmundry','Kadapa','Kakinada','Tirupati','Eluru'],
  'Kerala':['Thiruvananthapuram','Kochi','Kozhikode','Thrissur','Kollam','Palakkad','Alappuzha','Kannur','Kottayam','Malappuram'],
  'Odisha':['Bhubaneswar','Cuttack','Rourkela','Brahmapur','Sambalpur','Puri','Balasore','Bhadrak','Baripada','Jharsuguda'],
  'Bihar':['Patna','Gaya','Bhagalpur','Muzaffarpur','Darbhanga','Ara','Begusarai','Katihar','Munger','Chhapra'],
  'Madhya Pradesh':['Bhopal','Indore','Gwalior','Jabalpur','Ujjain','Sagar','Dewas','Satna','Ratlam','Rewa'],
  'Punjab':['Ludhiana','Amritsar','Jalandhar','Patiala','Bathinda','Hoshiarpur','Pathankot','Mohali','Moga','Firozpur'],
  'Haryana':['Faridabad','Gurgaon','Panipat','Ambala','Yamunanagar','Rohtak','Hisar','Karnal','Sonipat','Panchkula'],
  'Assam':['Guwahati','Silchar','Dibrugarh','Jorhat','Nagaon','Tinsukia','Tezpur','Bongaigaon','Dhubri','Karimganj'],
  'Telangana':['Hyderabad','Warangal','Nizamabad','Karimnagar','Ramagundam','Khammam','Mahbubnagar','Nalgonda','Adilabad','Suryapet'],
  'Jharkhand':['Ranchi','Jamshedpur','Dhanbad','Bokaro','Deoghar','Phusro','Hazaribagh','Giridih','Ramgarh','Medininagar'],
  'Chhattisgarh':['Raipur','Bhilai','Bilaspur','Korba','Durg','Rajnandgaon','Jagdalpur','Ambikapur','Chirmiri','Dhamtari'],
  'Uttarakhand':['Dehradun','Haridwar','Roorkee','Haldwani','Rudrapur','Kashipur','Rishikesh','Kotdwar','Ramnagar','Almora'],
  'Himachal Pradesh':['Shimla','Dharamshala','Solan','Mandi','Kullu','Baddi','Nahan','Palampur','Sundarnagar','Chamba'],
};

/* ── App State ── */
let shopCurrentStep = 1;
let shopOTP = '';
let shopOtpVerified = false; // must verify email OTP before proceeding to step 2
let shopOtpTimer = null;
let shopLat = null;
let shopLng = null;

/* ── Open / Close Modal ── */
function openShopModal(){
  document.getElementById('shopOverlay').classList.remove('hidden');
  document.body.style.overflow='hidden';
  shopResetForm();
}
function closeShopModal(){
  document.getElementById('shopOverlay').classList.add('hidden');
  document.body.style.overflow='';
}

/* ── Reset Form ── */
function shopResetForm(){
  shopCurrentStep=1; shopOTP=''; shopOtpVerified=false; shopLat=null; shopLng=null;
  clearTimeout(shopOtpTimer);
  window._ownerPhotoB64 = '';
  ['sShopName','sOwnerName','sPhone1','sPhone2','sEmail','sVillage','sAddress'].forEach(id=>{
    const el=document.getElementById(id); if(el){el.value='';el.classList.remove('error','valid');}
  });
  document.getElementById('sState').value='';
  document.getElementById('sDistrict').innerHTML='<option value="">— Select District —</option>';
  // Reset OTP UI
  document.getElementById('otpVerifyRow').classList.remove('show');
  document.getElementById('otpVerifiedBadge').classList.remove('show');
  const _sb = document.getElementById('sendOtpBtn');
  if(_sb){ _sb.disabled=false; _sb.textContent='Send OTP'; }
  document.getElementById('otpTimer').innerHTML='';
  document.getElementById('errOtp').classList.remove('show');
  document.getElementById('locInfo').classList.remove('show');
  document.getElementById('shopMap').classList.remove('show');
  document.getElementById('shopSuccess').classList.remove('show');
  document.getElementById('shopSuccess').style.display='none';
  for(let i=0;i<6;i++){const d=document.getElementById('otp'+i);if(d)d.value='';}
  // errOtp removed
  // Reset step panels
  [1,2,3].forEach(s=>{
    document.getElementById('shopPanel'+s).classList.remove('active');
    const tab=document.getElementById('stepTab'+s);
    tab.classList.remove('active','done');
  });
  // Show home panel, hide steps & nav
  document.getElementById('shopHomePanel').classList.add('active');
  document.getElementById('shopSteps').style.display='none';
  document.getElementById('shopNavRow').style.display='none';
  // Reset Leaflet map instances on form reset
  if(window._shopMap){ try{ window._shopMap.remove(); }catch(e){} window._shopMap=null; _shopMap=null; _shopMarker=null; }
  if(window._revMap){ try{ window._revMap.remove(); }catch(e){} window._revMap=null; }
  const addrBox=document.getElementById('locAddressBox'); if(addrBox) addrBox.style.display='none';
  const hint=document.getElementById('mapDragHint'); if(hint) hint.style.display='none';
}

/* ── Shop Start Registration (from Home Panel) ── */
function shopStartRegistration(){
  document.getElementById('shopHomePanel').classList.remove('active');
  document.getElementById('shopSteps').style.display='';
  document.getElementById('shopNavRow').style.display='';
  shopGoToStep(1);
}

/* ── Step Navigation ── */
function shopGoToStep(step){
  shopCurrentStep=step;
  [1,2,3].forEach(s=>{
    document.getElementById('shopPanel'+s).classList.toggle('active',s===step);
    const tab=document.getElementById('stepTab'+s);
    tab.classList.remove('active','done');
    if(s<step) tab.classList.add('done');
    else if(s===step) tab.classList.add('active');
  });
  [1,2].forEach(s=>{
    document.getElementById('stepLine'+s).classList.toggle('done',s<step);
  });
  const backBtn=document.getElementById('shopBtnBack');
  const nextBtn=document.getElementById('shopBtnNext');
  backBtn.style.visibility=step>1?'visible':'hidden';
  if(step===3){
    nextBtn.className='shop-btn-submit';
    nextBtn.innerHTML='✅ Submit Registration';
    nextBtn.onclick=submitShopRegistration;
    populateReviewPanel();
  } else {
    nextBtn.className='shop-btn-next';
    nextBtn.innerHTML='Next →';
    nextBtn.onclick=shopStepNext;
  }
}
function shopStepNext(){
  if(shopCurrentStep===1 && !validateStep1()) return;
  if(shopCurrentStep===2 && !validateStep2()) return;
  if(shopCurrentStep<3) shopGoToStep(shopCurrentStep+1);
}
function shopStepBack(){
  if(shopCurrentStep>1) shopGoToStep(shopCurrentStep-1);
}

/* ── Validation ── */
function validateStep1(){
  let ok=true;
  const fields=[
    {id:'sShopName',err:'errShopName',check:v=>v.trim().length>1},
    {id:'sOwnerName',err:'errOwnerName',check:v=>v.trim().length>1},
    {id:'sPhone1',err:'errPhone1',check:v=>/^\d{10}$/.test(v.trim())},
    {id:'sEmail',err:'errEmail',check:v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())},
  ];
  fields.forEach(f=>{
    const val=document.getElementById(f.id).value;
    const valid=f.check(val);
    document.getElementById(f.id).classList.toggle('error',!valid);
    document.getElementById(f.err).classList.toggle('show',!valid);
    if(!valid) ok=false;
  });
  // Duplicate email check
  if(ok){
    const email=document.getElementById('sEmail').value.trim().toLowerCase();
    const existing=getShops().find(s=>s.email.toLowerCase()===email);
    if(existing){
      showToast('⚠️ This email is already registered!');
      document.getElementById('sEmail').classList.add('error');
      document.getElementById('errEmail').textContent='Email already registered';
      document.getElementById('errEmail').classList.add('show');
      ok=false;
    }
  }
  // OTP verification gate — must verify email before moving to step 2
  if(ok && !shopOtpVerified){
    showToast('📧 Please verify your email with OTP before continuing');
    const sendBtn = document.getElementById('sendOtpBtn');
    if(sendBtn){ sendBtn.style.animation='pulse .4s 3'; setTimeout(()=>sendBtn.style.animation='',1200); }
    // Auto-send OTP if not yet sent
    if(!shopOTP){ sendShopOTP(); }
    ok=false;
  }
  return ok;
}
/* Reset OTP state when user changes email after OTP was sent */
function resetOtpOnEmailChange(){
  if(shopOtpVerified){
    shopOtpVerified=false; shopOTP='';
    document.getElementById('otpVerifiedBadge').classList.remove('show');
    document.getElementById('otpVerifyRow').classList.remove('show');
    const sendBtn=document.getElementById('sendOtpBtn');
    if(sendBtn){sendBtn.disabled=false;sendBtn.textContent='Send OTP';}
    for(let i=0;i<6;i++){const d=document.getElementById('otp'+i);if(d)d.value='';}
  }
}
function validateStep2(){
  let ok=true;
  const fields=[
    {id:'sState',err:'errState',check:v=>v.trim()!==''},
    {id:'sDistrict',err:'errDistrict',check:v=>v.trim()!==''},
    {id:'sVillage',err:'errVillage',check:v=>v.trim().length>0},
    {id:'sAddress',err:'errAddress',check:v=>v.trim().length>4},
  ];
  fields.forEach(f=>{
    const val=document.getElementById(f.id).value;
    const valid=f.check(val);
    document.getElementById(f.id).classList.toggle('error',!valid);
    document.getElementById(f.err).classList.toggle('show',!valid);
    if(!valid) ok=false;
  });
  // Live location is required
  if(!shopLat || !shopLng){
    showToast('📍 Please tap \"Get Live Location\" before continuing');
    const btn=document.getElementById('locBtn');
    if(btn){ btn.style.border='2px solid #D4402A'; btn.style.color='#D4402A'; setTimeout(()=>{ btn.style.border=''; btn.style.color=''; },3000); }
    ok=false;
  }
  return ok;
}
function clearShopErr(el){ el.classList.remove('error'); const err=document.getElementById('err'+el.id.replace('s','').charAt(0).toUpperCase()+el.id.slice(2)); if(err) err.classList.remove('show'); }
function validatePhone(el,errId){
  const v=el.value.replace(/\D/g,''); el.value=v;
  const valid=/^\d{10}$/.test(v)||v===''
  el.classList.toggle('error',!valid&&v!=='');
  document.getElementById(errId).classList.toggle('show',!valid&&v!=='');
}
function validatePhone2(el){
  const v=el.value.replace(/\D/g,''); el.value=v;
  if(v===''){ el.classList.remove('error'); document.getElementById('errPhone2').classList.remove('show'); return;}
  const valid=/^\d{10}$/.test(v);
  el.classList.toggle('error',!valid); document.getElementById('errPhone2').classList.toggle('show',!valid);
}

/* ── OTP System ── */
function sendShopOTP(){
  const email = document.getElementById('sEmail').value.trim();
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    document.getElementById('sEmail').classList.add('error');
    document.getElementById('errEmail').textContent = 'Enter a valid email address';
    document.getElementById('errEmail').classList.add('show');
    return;
  }

  // Check EmailJS is configured
  const notConfigured =
    EMAILJS_PUBLIC_KEY  === 'YOUR_PUBLIC_KEY'  ||
    EMAILJS_SERVICE_ID  === 'YOUR_SERVICE_ID'  ||
    EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID';

  if(notConfigured){
    // Fallback: show OTP in toast for developer testing
    shopOTP = String(Math.floor(100000 + Math.random() * 900000));
    console.warn('[Wellnexis] EmailJS not configured. OTP for testing: ' + shopOTP);
    showToast('⚠️ EmailJS not set up yet. Dev OTP: ' + shopOTP);
    document.getElementById('otpVerifyRow').classList.add('show');
    document.getElementById('sendOtpBtn').disabled = true;
    document.getElementById('sendOtpBtn').textContent = 'Sent ✓';
    document.getElementById('otp0').focus();
    startOtpTimer();
    return;
  }

  // Generate a fresh 6-digit OTP
  shopOTP = String(Math.floor(100000 + Math.random() * 900000));

  // Show sending state on the button
  const sendBtn = document.getElementById('sendOtpBtn');
  sendBtn.disabled = true;
  sendBtn.textContent = 'Sending…';

  // Shop name for the email (may be empty at this point — that's fine)
  const shopName = (document.getElementById('sShopName')?.value || 'your shop').trim() || 'your shop';

  // Send via EmailJS
  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    to_email  : email,
    otp_code  : shopOTP,
    shop_name : shopName
  })
  .then(function(){
    sendBtn.textContent = 'Sent ✓';
    showToast('📧 OTP sent to ' + email + ' — check your inbox!');
    document.getElementById('otpVerifyRow').classList.add('show');
    document.getElementById('otp0').focus();
    startOtpTimer();
  })
  .catch(function(err){
    console.error('[Wellnexis] EmailJS error:', err);
    sendBtn.disabled = false;
    sendBtn.textContent = 'Send OTP';
    showToast('❌ Failed to send OTP. Check EmailJS setup or internet.');
  });
}
function startOtpTimer(){
  let sec=30; clearInterval(shopOtpTimer);
  const timerEl=document.getElementById('otpTimer');
  timerEl.innerHTML='Resend OTP in <span>'+sec+'s</span>';
  shopOtpTimer=setInterval(()=>{
    sec--;
    if(sec<=0){
      clearInterval(shopOtpTimer);
      timerEl.innerHTML='<span style="cursor:pointer;text-decoration:underline" onclick="resendShopOTP()">Resend OTP</span>';
    } else {
      timerEl.innerHTML='Resend OTP in <span>'+sec+'s</span>';
    }
  },1000);
}
function resendShopOTP(){
  const sb=document.getElementById('sendOtpBtn');
  if(sb){sb.disabled=false;sb.textContent='Send OTP';}
  for(let i=0;i<6;i++){const d=document.getElementById('otp'+i);if(d)d.value='';}
  document.getElementById('errOtp').classList.remove('show');
  sendShopOTP();
}
function otpMove(el, nextIdx){
  el.value=el.value.replace(/\D/g,'');
  if(el.value && nextIdx<=5){ document.getElementById('otp'+nextIdx).focus(); }
}
function otpBack(e,el,prevIdx){
  if(e.key==='Backspace'&&!el.value&&prevIdx!==null){ document.getElementById('otp'+prevIdx).focus(); }
}
function otpAutoVerify(){
  const code=[0,1,2,3,4,5].map(i=>document.getElementById('otp'+i).value).join('');
  if(code.length===6) verifyShopOTP();
}
function verifyShopOTP(){
  const code=[0,1,2,3,4,5].map(i=>document.getElementById('otp'+i).value).join('');
  if(code===shopOTP){
    shopOtpVerified=true;
    // otpVerifyRow removed
    document.getElementById('otpVerifiedBadge').classList.add('show');
    document.getElementById('sEmail').classList.remove('error');
    document.getElementById('sEmail').classList.add('valid');
    document.getElementById('errEmail').classList.remove('show');
    clearInterval(shopOtpTimer);
    showToast('✅ Email verified!');
  } else {
    document.getElementById('errOtp').classList.add('show');
    [0,1,2,3,4,5].forEach(i=>{
      const d=document.getElementById('otp'+i);
      if(d){d.classList.add('error');setTimeout(()=>d.classList.remove('error'),800);}
    });
  }
}

/* ══════════════════════════════════════════════════
   INTERACTIVE LOCATION — Leaflet.js + OSM Nominatim
   • Get GPS → drop draggable pin on Leaflet map
   • Drag pin to exact shop location
   • Reverse-geocode on every drag/click via Nominatim
   • Coords + detected address saved to shopLat/shopLng
══════════════════════════════════════════════════ */

let _shopMap = null;   // Leaflet map instance
let _shopMarker = null; // Draggable marker

/* Initialize or re-use the Leaflet map */
function _initLeafletMap(lat, lng){
  const mapEl = document.getElementById('shopLeafletMap');
  if(!mapEl) return;

  // If map already exists just re-centre it
  if(_shopMap){
    _shopMap.setView([lat, lng], 17);
    _shopMarker.setLatLng([lat, lng]);
    _reverseGeocode(lat, lng);
    return;
  }

  // Create map
  _shopMap = L.map('shopLeafletMap', { zoomControl: true, attributionControl: true })
              .setView([lat, lng], 17);

  // OpenStreetMap tile layer (free, no API key)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(_shopMap);

  // Custom red pin icon
  const pinIcon = L.divIcon({
    className: '',
    html: `<div style="
      width:32px;height:42px;position:relative;cursor:grab;">
      <svg viewBox="0 0 32 42" xmlns="http://www.w3.org/2000/svg" style="width:32px;height:42px;filter:drop-shadow(0 2px 4px rgba(0,0,0,.35))">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 10.5 16 26 16 26S32 26.5 32 16C32 7.163 24.837 0 16 0z" fill="#e53935"/>
        <circle cx="16" cy="16" r="7" fill="#fff"/>
        <circle cx="16" cy="16" r="4" fill="#e53935"/>
      </svg>
    </div>`,
    iconSize: [32, 42],
    iconAnchor: [16, 42],
    popupAnchor: [0, -44]
  });

  // Draggable marker
  _shopMarker = L.marker([lat, lng], { icon: pinIcon, draggable: true }).addTo(_shopMap);
  _shopMarker.bindPopup('<b>🏪 Your Shop</b><br>Drag to exact location').openPopup();

  // On drag end — update coords + reverse geocode
  _shopMarker.on('dragend', function(e){
    const pos = e.target.getLatLng();
    _updateShopCoords(pos.lat, pos.lng);
    showToast('📍 Pin moved — detecting address…');
  });

  // Also allow clicking the map to move the pin
  _shopMap.on('click', function(e){
    _shopMarker.setLatLng(e.latlng);
    _updateShopCoords(e.latlng.lat, e.latlng.lng);
    showToast('📍 Location updated');
  });

  // Show drag hint
  const hint = document.getElementById('mapDragHint');
  if(hint) hint.style.display = 'block';

  // Force Leaflet to recalculate size (modal may be animating)
  setTimeout(()=>{ if(_shopMap) _shopMap.invalidateSize(); }, 350);
}

/* Update coords display + reverse geocode */
function _updateShopCoords(lat, lng){
  shopLat = parseFloat(lat).toFixed(6);
  shopLng = parseFloat(lng).toFixed(6);
  document.getElementById('locLat').textContent = shopLat;
  document.getElementById('locLng').textContent = shopLng;
  document.getElementById('locInfo').classList.add('show');
  _reverseGeocode(shopLat, shopLng);
  autoDetectState(shopLat, shopLng);
}

/* Reverse geocode using OpenStreetMap Nominatim (free, no API key) */
async function _reverseGeocode(lat, lng){
  const addrBox = document.getElementById('locAddressBox');
  const addrVal = document.getElementById('locAddressVal');
  if(!addrBox || !addrVal) return;
  addrBox.style.display = 'block';
  addrVal.textContent = 'Detecting address…';
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&addressdetails=1`,
      { headers: { 'Accept-Language': 'en' } }
    );
    const data = await res.json();
    if(data && data.display_name){
      addrVal.textContent = data.display_name;
      // Auto-fill village/city field if empty
      const villageEl = document.getElementById('sVillage');
      if(villageEl && !villageEl.value){
        const a = data.address || {};
        villageEl.value = a.village || a.town || a.suburb || a.city_district || a.city || '';
      }
      // Auto-fill district if empty
      const distEl = document.getElementById('sDistrict');
      if(distEl && !distEl.value){
        const a = data.address || {};
        const distName = a.county || a.state_district || '';
        if(distName){
          // Try to match option
          const opts = Array.from(distEl.options).map(o=>o.value.toLowerCase());
          const match = Array.from(distEl.options).find(o=>
            o.value.toLowerCase().includes(distName.toLowerCase()) ||
            distName.toLowerCase().includes(o.value.toLowerCase())
          );
          if(match) distEl.value = match.value;
        }
      }
    } else {
      addrVal.textContent = 'Address not found — please verify manually';
    }
  } catch(e){
    addrVal.textContent = 'Could not detect address (offline?)';
  }
}

/* Main entry — called by the Get My Location button */
function getShopLocation(){
  if(!navigator.geolocation){ showToast('⚠️ Geolocation not supported by this browser'); return; }
  const btn = document.getElementById('locBtn');
  btn.classList.add('loading');
  btn.innerHTML = '<span>⏳</span> Detecting your location…';

  navigator.geolocation.getCurrentPosition(
    pos => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      // Show map container
      const mapEl = document.getElementById('shopMap');
      mapEl.classList.add('show');

      // Init / update Leaflet map
      _initLeafletMap(lat, lng);
      _updateShopCoords(lat, lng);

      btn.classList.remove('loading');
      btn.innerHTML = '<span>✅</span> Location found — drag pin to exact spot';
      showToast('📍 Location found! Drag the pin to your exact shop location.');
    },
    err => {
      btn.classList.remove('loading');
      btn.innerHTML = '<span>📍</span> Get My Location';
      const msgs = {
        1: 'Location permission denied. Please allow location access.',
        2: 'Location unavailable. Check your GPS/network.',
        3: 'Location timed out. Please try again.'
      };
      showToast('⚠️ ' + (msgs[err.code] || err.message));
    },
    { timeout: 15000, enableHighAccuracy: true, maximumAge: 0 }
  );
}
function autoDetectState(lat,lng){
  // Simple fallback using known coordinate bounds for Indian states
  const lat_n=parseFloat(lat), lng_n=parseFloat(lng);
  let detected='';
  if(lat_n>=8&&lat_n<=13.5&&lng_n>=76.7&&lng_n<=80.3) detected='Tamil Nadu';
  else if(lat_n>=14&&lat_n<=22&&lng_n>=72.5&&lng_n<=80.9) detected='Andhra Pradesh';
  else if(lat_n>=11.5&&lat_n<=18.5&&lng_n>=74&&lng_n<=78.6) detected='Karnataka';
  else if(lat_n>=18&&lat_n<=22.1&&lng_n>=72.7&&lng_n<=80.9) detected='Maharashtra';
  else if(lat_n>=23&&lat_n<=30.4&&lng_n>=69.5&&lng_n<=79) detected='Rajasthan';
  else if(lat_n>=23.8&&lat_n<=30.4&&lng_n>=77&&lng_n<=84.7) detected='Uttar Pradesh';
  if(detected){
    const sel=document.getElementById('sState');
    const opts=Array.from(sel.options).map(o=>o.value);
    if(opts.includes(detected)){ sel.value=detected; populateDistricts(); showToast('🌍 State auto-detected: '+detected); }
  }
}

/* ── District Dropdown ── */
function populateDistricts(){
  const state=document.getElementById('sState').value;
  const sel=document.getElementById('sDistrict');
  sel.innerHTML='<option value="">— Select District —</option>';
  (DISTRICT_MAP[state]||[]).forEach(d=>{
    const opt=document.createElement('option'); opt.value=d; opt.textContent=d; sel.appendChild(opt);
  });
}

/* ── Review Panel ── */
function populateReviewPanel(){
  document.getElementById('rev_shopName').textContent=document.getElementById('sShopName').value;
  document.getElementById('rev_ownerName').textContent=document.getElementById('sOwnerName').value;
  // Owner profile review fields
  const _rName    = document.getElementById('sOwnerName').value || '—';
  const _rGender  = document.getElementById('sOwnerGender').value || '—';
  const _rAge     = document.getElementById('sOwnerAge').value || '—';
  const _rLangs   = document.getElementById('sOwnerLanguages').value || '—';
  const _rAbout   = document.getElementById('sOwnerAbout').value || '—';
  document.getElementById('rev_ownerNameBig').textContent = _rName;
  document.getElementById('rev_ownerMeta').textContent = [_rGender !== '—' ? _rGender : null, _rAge !== '—' ? _rAge + ' yrs' : null].filter(Boolean).join(' · ') || '—';
  document.getElementById('rev_ownerGender').textContent    = _rGender;
  document.getElementById('rev_ownerAge').textContent       = _rAge !== '—' ? _rAge + ' years' : '—';
  document.getElementById('rev_ownerLanguages').textContent = _rLangs;
  document.getElementById('rev_ownerAbout').textContent     = _rAbout;
  // Photo preview in review panel
  if(window._ownerPhotoB64){
    const img=document.createElement('img');
    img.src=window._ownerPhotoB64;
    img.style.cssText='width:100%;height:100%;object-fit:cover;';
    const wrap=document.getElementById('rev_ownerPhotoWrap');
    wrap.innerHTML=''; wrap.appendChild(img);
  }
  document.getElementById('rev_phone1').textContent=document.getElementById('sPhone1').value;
  document.getElementById('rev_phone2').textContent=document.getElementById('sPhone2').value||'—';
  document.getElementById('rev_email').textContent=document.getElementById('sEmail').value;
  document.getElementById('rev_state').textContent=document.getElementById('sState').value;
  document.getElementById('rev_district').textContent=document.getElementById('sDistrict').value;
  document.getElementById('rev_village').textContent=document.getElementById('sVillage').value;
  document.getElementById('rev_address').textContent=document.getElementById('sAddress').value;
  if(shopLat&&shopLng){
    document.getElementById('rev_coords').textContent=shopLat+', '+shopLng;
    const revMap=document.getElementById('revMap');
    revMap.style.display='block';
    // Use Leaflet for review map too
    const revMapEl = document.getElementById('revLeafletMap');
    if(revMapEl){
      if(window._revMap){ window._revMap.setView([shopLat,shopLng],17); window._revMarker.setLatLng([shopLat,shopLng]); }
      else {
        window._revMap = L.map('revLeafletMap',{zoomControl:false,attributionControl:false,dragging:false,scrollWheelZoom:false,doubleClickZoom:false}).setView([shopLat,shopLng],17);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19}).addTo(window._revMap);
        const revIcon = L.divIcon({className:'',html:`<div style="font-size:28px;line-height:1;margin-top:-14px;margin-left:-8px;">📍</div>`,iconSize:[24,28],iconAnchor:[8,28]});
        window._revMarker = L.marker([shopLat,shopLng],{icon:revIcon}).addTo(window._revMap);
        setTimeout(()=>window._revMap.invalidateSize(),200);
      }
    }
  } else {
    document.getElementById('rev_coords').textContent='Not captured';
    document.getElementById('revMap').style.display='none';
  }
}

/* ── Owner Photo Preview & Compress ── */
function previewOwnerPhoto(input){
  const file = input.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = function(e){
    const img = new Image();
    img.onload = function(){
      // Compress to max 120x120 JPEG thumbnail
      const canvas = document.createElement('canvas');
      const MAX = 120;
      let w = img.width, h = img.height;
      if(w > h){ h = Math.round(h * MAX / w); w = MAX; }
      else      { w = Math.round(w * MAX / h); h = MAX; }
      canvas.width = w; canvas.height = h;
      canvas.getContext('2d').drawImage(img, 0, 0, w, h);
      const b64 = canvas.toDataURL('image/jpeg', 0.75);
      window._ownerPhotoB64 = b64;
      // Update preview circle in form
      const prev = document.getElementById('ownerPhotoPreview');
      if(prev){
        const pi = document.createElement('img');
        pi.src = b64;
        pi.style.cssText = 'width:100%;height:100%;object-fit:cover;';
        prev.innerHTML = ''; prev.appendChild(pi);
      }
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

/* ── Submit Registration ── */
async function submitShopRegistration(){
  // ── Get the actual submit button (id=shopBtnNext, changes to Submit on step 3) ──
  const btn = document.getElementById('shopBtnNext');
  if(btn){ btn.disabled = true; btn.innerHTML = '⏳ Saving…'; }

  // ── Build shop data (serverTimestamp only added when fbReady) ──
  const shopData = {
    shopName    : (document.getElementById('sShopName')?.value   || '').trim(),
    shopType    : (document.getElementById('sShopType')?.value   || 'General Shop'),
    ownerName   : (document.getElementById('sOwnerName')?.value  || '').trim(),
    phone1      : (document.getElementById('sPhone1')?.value     || '').trim(),
    phone2      : (document.getElementById('sPhone2')?.value     || '').trim(),
    email       : (document.getElementById('sEmail')?.value      || '').trim().toLowerCase(),
    state       : (document.getElementById('sState')?.value      || ''),
    district    : (document.getElementById('sDistrict')?.value   || ''),
    village     : (document.getElementById('sVillage')?.value    || '').trim(),
    address     : (document.getElementById('sAddress')?.value    || '').trim(),
    lat         : shopLat  || null,
    lng         : shopLng  || null,
    ownerGender    : (document.getElementById('sOwnerGender')?.value    || ''),
    ownerAge       : (document.getElementById('sOwnerAge')?.value       || ''),
    ownerLanguages : (document.getElementById('sOwnerLanguages')?.value || '').trim(),
    ownerAbout     : (document.getElementById('sOwnerAbout')?.value     || '').trim(),
    ownerPhotoB64  : window._ownerPhotoB64 || '',
    ownerId     : sdCurrentUser ? sdCurrentUser.uid   : 'guest',
    ownerEmail  : sdCurrentUser ? sdCurrentUser.email : '',
    status      : 'Pending',
    isApproved  : false,
    rating      : 0,
    reviewCount : 0,
  };

  // Validate required fields
  if(!shopData.shopName || !shopData.ownerName || !shopData.phone1) {
    showToast('⚠️ Shop name, owner name and phone are required');
    if(btn){ btn.disabled=false; btn.innerHTML='✅ Submit Registration'; }
    return;
  }

  let shopId = 'SHOP-' + Date.now();

  try {
    // ── Use ShopDB unified save (Firestore + localStorage) ──
    shopId = await ShopDB.save(shopData);
    showToast(fbReady ? '🎉 Shop registered and saved to Firebase!' : '⚠️ Saved locally — Firebase offline');
  } catch(e) {
    console.error('❌ Shop save error:', e.code, e.message);
    showToast('❌ Save failed: ' + e.message);
    if(btn){ btn.disabled=false; btn.innerHTML='✅ Submit Registration'; }
    return;
  }

  // ── Show success screen immediately — never blocked by reload ──
  document.getElementById('shopPanel3')?.classList.remove('active');
  document.getElementById('shopNavRow').style.display = 'none';
  const succ = document.getElementById('shopSuccess');
  if(succ){ succ.style.display='block'; setTimeout(()=>succ.classList.add('show'), 10); }
  const badge = document.getElementById('shopIdBadge');
  if(badge) badge.textContent = shopId;

  // NOTE: New shop is Pending (isApproved:false) — do NOT push to public ShopState.
  // Only the owner can see it via their account panel (My Shops).
  // Reload the owner's own view only.
  ShopState.isLoading = false;

  // Reload directory & browse in background (will correctly show only approved shops)
  Promise.allSettled([
    loadDirectory().catch(()=>{}),
    loadBrowsePage().catch(()=>{})
  ]).catch(()=>{});
}

/* ── Shop fetch helper (delegates to ShopDB → IDB) ── */
async function getShops(){
  return ShopDB.fetchAll();
}

/* ── Haversine distance ── */
function haversine(lat1,lng1,lat2,lng2){
  if(!lat1||!lat2) return null;
  const R=6371,dLat=(lat2-lat1)*Math.PI/180,dLng=(lng2-lng1)*Math.PI/180;
  const a=Math.sin(dLat/2)**2+Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLng/2)**2;
  return (R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))).toFixed(1);
}

/* ── Render Shops Section — loads from Firestore, falls back to localStorage ── */
let userLat=null,userLng=null;
async function renderShopsSection(){
  // Delegate to ShopDB and also prime ShopState for browse page
  const sec = document.getElementById('shopsSection');
  try {
    const _allShops = await ShopDB.fetchAll();
    // Public home widget: only show approved shops
    const shops = _allShops.filter(s => s.isApproved === true);
    // Prime browse state with approved shops only
    if (!ShopState.allShops.length) ShopState.allShops = shops;
    if (!sec) return;
    if (!shops.length) { sec.style.display='none'; return; }
    sec.style.display = 'block';
    if(navigator.geolocation && !userLat){
      navigator.geolocation.getCurrentPosition(
        p=>{ userLat=p.coords.latitude; userLng=p.coords.longitude; renderShopCards(shops); },
        ()=>{}, { timeout:3000 }
      );
    }
    const distSel = document.getElementById('shopsDistrictFilter');
    if(distSel){
      const existing = Array.from(distSel.options).map(o=>o.value);
      shops.forEach(s=>{ if(s.district&&!existing.includes(s.district)){
        const o=document.createElement('option'); o.value=s.district; o.textContent=s.district; distSel.appendChild(o);
      }});
    }
    renderShopCards(shops);
  } catch(e){ if(sec) sec.style.display='none'; }
}
function renderShopCards(shops){
  const search=document.getElementById('shopsSearchInput').value.toLowerCase();
  const district=document.getElementById('shopsDistrictFilter').value;
  let filtered=shops.filter(s=>{
    // Public homepage widget: only approved shops
    if(!s.isApproved) return false;
    const nameMatch=s.shopName.toLowerCase().includes(search)||s.ownerName.toLowerCase().includes(search)||s.village.toLowerCase().includes(search);
    const distMatch=!district||s.district===district;
    return nameMatch&&distMatch;
  });
  document.getElementById('shopsCountBadge').textContent=filtered.length;
  const grid=document.getElementById('shopsGrid');
  if(filtered.length===0){
    grid.innerHTML='<div class="shops-empty"><span class="shops-empty-icon">🔍</span>No shops found matching your search</div>';
    return;
  }
  grid.innerHTML=filtered.map(s=>{
    const dist=haversine(userLat,userLng,parseFloat(s.lat),parseFloat(s.lng));
    const distBadge=dist?`<span class="shop-card-distance">📍 ${dist} km</span>`:'';
    const mapsUrl=s.lat&&s.lng?`https://maps.google.com/?q=${s.lat},${s.lng}`:`https://maps.google.com/?q=${encodeURIComponent(s.address+', '+s.village+', '+s.district)}`;
    return `<div class="shop-card">
      <div class="shop-card-header">
        <div class="shop-card-icon">🛍️</div>
        <span class="shop-card-badge ${s.status==='Verified'?'badge-verified':'badge-pending'}">${s.status==='Verified'?'✅ Verified':'⏳ Pending'}</span>
      </div>
      <h4>${s.shopName}</h4>
      <div class="shop-card-owner">👤 ${s.ownerName}</div>
      <div class="shop-card-loc">📍 ${s.village}, ${s.district}${distBadge}</div>
      <div class="shop-card-actions">
        <button class="shop-action-btn btn-call" onclick="event.stopPropagation();window.location.href='tel:${s.phone1}'">📞 Call</button>
        <button class="shop-action-btn btn-map" onclick="event.stopPropagation();window.open('${mapsUrl}','_blank')">🗺️ Maps</button>
      </div>
    </div>`;
  }).join('');
}
function filterShops(){ renderShopCards(getShops()); }

/* ── Init on page load ── */
window.addEventListener('DOMContentLoaded',()=>{ renderShopsSection().catch(()=>{}); }, {passive:true});

// Range slider sync
document.addEventListener('DOMContentLoaded',()=>{
  const range=document.querySelector('#page-check input[type=range]');
  if(range)range.addEventListener('input',function(){
    document.getElementById('ageLabel').textContent=this.value;
    if(document.getElementById('ageValDisp'))document.getElementById('ageValDisp').textContent=this.value;
  });
});

