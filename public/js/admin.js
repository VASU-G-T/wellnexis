/* ════════════════════════════════════════════════════════
   🛡️ ADMIN MODULE — Separate & Secured
   Admin access: visit /?admin or tap logo 5× fast
════════════════════════════════════════════════════════ */

/* ── Secret access: tap logo 5 times quickly to open admin ── */
(function(){
  let taps = 0, timer;
  document.addEventListener('DOMContentLoaded', ()=>{
    const logo = document.querySelector('.logo');
    if(!logo) return;
    logo.addEventListener('click', ()=>{
      taps++;
      clearTimeout(timer);
      if(taps >= 5){
        taps = 0;
        openAdminLoginPage();
      } else {
        timer = setTimeout(()=>{ taps=0; }, 1500);
      }
    });
  });
})();

/* Also support ?admin URL param */
(function(){
  if(location.search.includes('admin')){
    window.addEventListener('DOMContentLoaded', ()=> setTimeout(openAdminLoginPage, 600));
  }
})();

function openAdminLoginPage(){
  // If already authenticated, open admin panel directly
  if(sdAdminAuth){
    openShopDirectory();
    setTimeout(()=>switchSDTab('admin'), 350);
    return;
  }
  const ov = document.getElementById('adminPageOverlay');
  if(ov){ ov.classList.remove('hidden'); document.body.style.overflow='hidden'; }
  setTimeout(()=>{
    const em = document.getElementById('adminPageEmail');
    const ps = document.getElementById('adminPagePass');
    if(em){ em.value=''; em.focus(); }
    if(ps)  ps.value='';
    const err = document.getElementById('adminPageErr');
    if(err) err.style.display='none';
  }, 50);
}

function closeAdminLoginPage(){
  const ov = document.getElementById('adminPageOverlay');
  if(ov) ov.classList.add('hidden');
  document.body.style.overflow='';
  ['adminPageEmail','adminPagePass'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.value='';
  });
  const err = document.getElementById('adminPageErr');
  if(err) err.style.display='none';
}

function toggleAdminPagePass(){
  const inp = document.getElementById('adminPagePass');
  const eye = document.getElementById('adminPageEye');
  if(!inp) return;
  if(inp.type==='password'){ inp.type='text'; if(eye) eye.textContent='🙈'; }
  else { inp.type='password'; if(eye) eye.textContent='👁️'; }
}

function submitAdminPageLogin(){
  const email  = (document.getElementById('adminPageEmail')?.value||'').trim().toLowerCase();
  const pass   = document.getElementById('adminPagePass')?.value||'';
  const errBox = document.getElementById('adminPageErr');
  const errMsg = document.getElementById('adminPageErrMsg');
  const btn    = document.getElementById('adminPageBtn');

  if(errBox) errBox.style.display='none';
  if(!email){ if(errBox){errBox.style.display='block';if(errMsg)errMsg.textContent='Please enter your admin email.';} document.getElementById('adminPageEmail')?.focus(); return; }
  if(!pass){  if(errBox){errBox.style.display='block';if(errMsg)errMsg.textContent='Please enter your password.';} document.getElementById('adminPagePass')?.focus(); return; }

  if(btn){ btn.disabled=true; btn.innerHTML='⏳ Verifying credentials…'; }

  setTimeout(()=>{
    if(email === ADMIN_EMAIL.toLowerCase() && pass === ADMIN_PASSWORD){
      sdAdminAuth = true;
      closeAdminLoginPage();
      setTimeout(()=>{
        openShopDirectory();
        setTimeout(()=>{
          const tab = document.getElementById('sdTabAdmin');
          if(tab) tab.style.display='';
          switchSDTab('admin');
          sdToast('🛡️ Admin access granted — Welcome!');
        }, 350);
      }, 100);
    } else {
      if(errBox){ errBox.style.display='block'; if(errMsg) errMsg.textContent='Invalid email or password. Please try again.'; }
      const card = document.querySelector('.admin-page-card');
      if(card){
        card.style.animation='none'; card.style.transform='translateX(-8px)';
        setTimeout(()=>{ card.style.transform='translateX(8px)';
          setTimeout(()=>{ card.style.transform='translateX(-4px)';
            setTimeout(()=>{ card.style.transform='translateX(0)'; },80); },80); },80);
      }
      const passEl = document.getElementById('adminPagePass');
      if(passEl){ passEl.value=''; passEl.focus(); }
    }
    if(btn){ btn.disabled=false; btn.innerHTML='🛡️ Sign In to Admin Panel'; }
  }, 700);
}

function toggleAdminPassVis(){
  const inp = document.getElementById('adminPassInput');
  const eye = document.getElementById('adminPassEye');
  if(!inp) return;
  if(inp.type==='password'){ inp.type='text'; if(eye) eye.textContent='🙈'; }
  else { inp.type='password'; if(eye) eye.textContent='👁️'; }
}

function verifyAdminKey() {
  const email  = (document.getElementById('adminEmailInput')?.value||'').trim().toLowerCase();
  const pass   = document.getElementById('adminPassInput')?.value||'';
  const errBox = document.getElementById('adminLoginErr');
  const errMsg = document.getElementById('adminLoginErrMsg');
  const btn    = document.getElementById('adminLoginBtn');

  if(errBox) errBox.style.display='none';
  if(!email){ if(errBox){errBox.style.display='block';if(errMsg)errMsg.textContent='Please enter your admin email.';} return; }
  if(!pass){  if(errBox){errBox.style.display='block';if(errMsg)errMsg.textContent='Please enter your admin password.';} return; }

  if(btn){ btn.disabled=true; btn.textContent='⏳ Verifying…'; }

  setTimeout(()=>{
    if(email === ADMIN_EMAIL.toLowerCase() && pass === ADMIN_PASSWORD){
      sdAdminAuth = true;
      document.getElementById('adminLoginGate').style.display = 'none';
      document.getElementById('adminDashboard').style.display = '';
      // Reveal admin tab in shop directory
      const tab = document.getElementById('sdTabAdmin');
      if(tab) tab.style.display='';
      // Update welcome email label
      const wel = document.getElementById('adminWelcomeEmail');
      if(wel) wel.textContent = 'Logged in as ' + email;
      if(document.getElementById('adminEmailInput')) document.getElementById('adminEmailInput').value='';
      if(document.getElementById('adminPassInput'))  document.getElementById('adminPassInput').value='';
      loadAdminDashboard();
      sdToast('🛡️ Admin dashboard unlocked — Welcome!');
    } else {
      if(errBox){ errBox.style.display='block'; if(errMsg) errMsg.textContent='Invalid email or password. Please try again.'; }
      if(document.getElementById('adminPassInput')) document.getElementById('adminPassInput').value='';
    }
    if(btn){ btn.disabled=false; btn.textContent='🛡️ Access Admin Dashboard'; }
  }, 600);
}

async function loadAdminDashboard() {
  if(!sdAdminAuth) return;
  const listEl=document.getElementById('adminShopsList');
  if(!listEl) return;
  listEl.innerHTML='<div style="display:flex;flex-direction:column;gap:8px;">'+Array(4).fill('<div class="skeleton skel-row" style="height:68px;"></div>').join('')+'</div>';

  let shops=[];
  try {
    if(fbReady){
      const snap=await db.collection('shops').orderBy('createdAt','desc').get();
      shops=snap.docs.map(d=>({id:d.id,...d.data()}));
    } else {
      await new Promise(r=>setTimeout(r,400));
      shops=[...getShops().map(s=>({...s,isApproved:s.status==='Verified'}))];
    }
    document.getElementById('aStatTotal').textContent=shops.length;
    document.getElementById('aStatPending').textContent=shops.filter(s=>!s.isApproved&&s.status!=='Rejected').length;
    document.getElementById('aStatApproved').textContent=shops.filter(s=>s.isApproved).length;
    if(fbReady){ db.collection('reviews').get().then(s=>{ document.getElementById('aStatReviews').textContent=s.size; }); }
    else { document.getElementById('aStatReviews').textContent=0; }

    let filtered=shops;
    if(sdAdminFilter==='pending')  filtered=shops.filter(s=>!s.isApproved&&s.status!=='Rejected');
    if(sdAdminFilter==='approved') filtered=shops.filter(s=>s.isApproved);
    if(sdAdminFilter==='rejected') filtered=shops.filter(s=>s.status==='Rejected'&&!s.isApproved);

    if(!filtered.length){ listEl.innerHTML='<div style="text-align:center;padding:30px;color:var(--text3);font-size:.84rem;">No shops in this category</div>'; return; }

    listEl.innerHTML=filtered.map(s=>`
      <div class="admin-shop-row" id="adminRow_${s.id}">
        <div class="admin-shop-icon">${shopTypeIcon(s.shopType)}</div>
        <div class="admin-shop-info">
          <div class="admin-shop-name">${escHtml(s.shopName)}</div>
          <div class="admin-shop-meta">👤 ${escHtml(s.ownerName)} · ${escHtml(s.district||'')} · ${escHtml(s.shopType||'')}</div>
          <div class="admin-shop-type">📧 ${escHtml(s.email||'')} · 📞 ${escHtml(s.phone1||'')}</div>
        </div>
        <span class="admin-badge ${s.isApproved?'adbadge-approved':s.status==='Rejected'?'adbadge-rejected':'adbadge-pending'}">${s.isApproved?'✅ Approved':s.status==='Rejected'?'❌ Rejected':'⏳ Pending'}</span>
        <div class="admin-actions">
          ${!s.isApproved&&s.status!=='Rejected'?`<button class="admin-action-btn aab-approve" onclick="adminAction('approve','${s.id}')">✅</button>`:''}
          ${s.isApproved?`<button class="admin-action-btn aab-verify" onclick="adminAction('verify','${s.id}')">🏛️ CSC</button>`:''}
          ${!s.isApproved?`<button class="admin-action-btn aab-reject" onclick="adminAction('reject','${s.id}')">❌</button>`:''}
          <button class="admin-action-btn aab-delete" onclick="adminAction('delete','${s.id}')">🗑️</button>
        </div>
      </div>`).join('');
  } catch(e){ listEl.innerHTML=`<div style="color:var(--secondary);padding:16px;font-size:.82rem;">${escHtml(e.message)}</div>`; }
}

function adminSignOut(){
  sdAdminAuth = false;
  // Hide admin tab from all users
  const tab = document.getElementById('sdTabAdmin');
  if(tab) tab.style.display='none';
  // Reset admin panel state
  const dash = document.getElementById('adminDashboard');
  if(dash) dash.style.display='none';
  const gate = document.getElementById('adminLoginGate');
  if(gate) gate.style.display='';
  // Clear all credential fields
  ['adminEmailInput','adminPassInput','adminPageEmail','adminPagePass'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.value='';
  });
  closeShopDirectory();
  sdToast('👋 Admin signed out successfully');
}

function adminFilter(f, btn) {
  sdAdminFilter=f;
  document.querySelectorAll('.admin-filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  loadAdminDashboard();
}

async function adminAction(action, shopId) {
  if(!sdAdminAuth) return;
  if(action==='delete' && !confirm('⚠️ Permanently delete this shop?')) return;

  const updates={
    approve: {isApproved:true, status:'Approved'},
    reject:  {isApproved:false,status:'Rejected'},
    verify:  {isApproved:true, status:'Approved', shopType:'CSC Center'},
  }[action];

  try {
    if(fbReady){
      if(action==='delete') await db.collection('shops').doc(shopId).delete();
      else await db.collection('shops').doc(shopId).update(updates);
    }
    if(action==='delete'){ sdAllShops=sdAllShops.filter(s=>s.id!==shopId); document.getElementById('adminRow_'+shopId)?.remove(); }
    else { const idx=sdAllShops.findIndex(s=>s.id===shopId); if(idx>-1) sdAllShops[idx]={...sdAllShops[idx],...updates}; }
    sdToast({ approve:'✅ Shop approved!', reject:'❌ Shop rejected', verify:'🏛️ Marked as CSC', delete:'🗑️ Shop deleted' }[action]||'Done');
    if(action!=='delete') loadAdminDashboard();
  } catch(e){ sdToast('❌ '+e.message); }
}
