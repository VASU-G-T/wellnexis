/* ════════════════════════════════════════════════════════
   🛠️  UTILITY HELPERS
════════════════════════════════════════════════════════ */
function shopTypeIcon(type) {
  return {'General Shop':'🛍️','CSC Center':'🏛️','Government Service':'🏢',
    'Medical':'💊','Education':'📚','Agriculture':'🌾','Finance':'💰','Other':'📦'}[type]||'🏪';
}
function renderStars(rating) {
  const full=Math.floor(+rating), half=(+rating-full)>=0.5?1:0, empty=5-full-half;
  return '<span style="color:#F59E0B">'+'★'.repeat(full)+(half?'½':'')+'</span>'+'<span style="color:#CBD5E1">'+'☆'.repeat(empty)+'</span>';
}
function escHtml(str) {
  if(typeof str!=='string') return String(str??'');
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function sdToast(msg) {
  const t=document.getElementById('toast');
  if(!t) return;
  t.textContent=msg; t.style.display='block';
  clearTimeout(t._sd); t._sd=setTimeout(()=>t.style.display='none',3000);
}
function shareShop(id, name) {
  const url = window.location.href.split('?')[0]+'?shop='+id;
  if(navigator.share){ navigator.share({title:name, text:'Check out '+name+' on Wellnexis', url}).catch(()=>{}); }
  else { navigator.clipboard?.writeText(url).then(()=>sdToast('📋 Link copied!')).catch(()=>sdToast('📋 '+url)); }
}

/* Haversine — safe alias (main script already defines this) */
if(typeof haversine==='undefined'){
  window.haversine=function(lat1,lng1,lat2,lng2){
    if(!lat1||!lat2) return null;
    const R=6371,dL=(lat2-lat1)*Math.PI/180,dLn=(lng2-lng1)*Math.PI/180;
    const a=Math.sin(dL/2)**2+Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLn/2)**2;
    return (R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))).toFixed(1);
  };
}

/*
══════════════════════════════════════════════════════
  FIRESTORE SECURITY RULES — Deploy these!
  Firebase Console → Firestore → Rules → Paste & Publish
══════════════════════════════════════════════════════

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Users collection
    match /users/{userId} {
      allow read:  if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }

    // Shops collection
    match /shops/{shopId} {
      // Public read only for approved shops
      allow read:   if resource.data.isApproved == true;
      // Authenticated users can create
      allow create: if request.auth != null
        && request.resource.data.ownerId == request.auth.uid;
      // Owner can update own shop; admin fields via Cloud Functions only
      allow update: if request.auth != null
        && resource.data.ownerId == request.auth.uid
        && !request.resource.data.diff(resource.data).affectedKeys()
              .hasAny(['isApproved','status','rating','reviewCount']);
      // Deletion via Admin SDK / Cloud Function only
      allow delete: if false;
    }

    // Reviews collection
    match /reviews/{reviewId} {
      allow read:   if true;
      allow create: if request.auth != null
        && request.resource.data.userId == request.auth.uid
        && request.resource.data.rating is int
        && request.resource.data.rating >= 1
        && request.resource.data.rating <= 5;
      // No editing or deleting reviews
      allow update, delete: if false;
    }
  }
}
══════════════════════════════════════════════════════
*/

/* ── Init ── */
window.addEventListener('DOMContentLoaded',()=>{ renderShopsSection(); });

/* ── Admin overlay: close on Escape or backdrop click ── */
document.addEventListener('keydown', e=>{
  if(e.key==='Escape'){
    const ov = document.getElementById('adminPageOverlay');
    if(ov && !ov.classList.contains('hidden')) closeAdminLoginPage();
  }
});
document.addEventListener('DOMContentLoaded',()=>{
  const ov = document.getElementById('adminPageOverlay');
  if(ov){
    ov.addEventListener('click', e=>{
      if(e.target === ov) closeAdminLoginPage();
    });
  }
});
