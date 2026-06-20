/* ═══════════════════════════════════════════════
   LANGUAGE
═══════════════════════════════════════════════ */
const T={
  en:{badge:"🇮🇳 AI-Powered · 502 Schemes · Free Forever"},
  ta:{badge:"🇮🇳 AI-ஆல் இயங்கும் · 502+ திட்டங்கள் · இலவசம்"},
  hi:{badge:"🇮🇳 AI-संचालित · 502+ योजनाएं · निःशुल्क"},
};
function setLang(l,btn){
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  applyTranslations(l);
  showToast(l==='ta'?'தமிழ் தேர்ந்தெடுக்கப்பட்டது ✓':l==='hi'?'हिंदी चुना गया ✓':'English selected ✓');
}

/* ═══════════════════════════════════════════════
   MODAL
═══════════════════════════════════════════════ */
function closeModal(){document.getElementById('modalOverlay').classList.add('hidden');}

/* ═══════════════════════════════════════════════
   TOAST
═══════════════════════════════════════════════ */
function showToast(msg){
  const t=document.getElementById('toast');
  if(!t) return;
  t.textContent=msg;t.style.display='block';
  clearTimeout(t._t);t._t=setTimeout(()=>t.style.display='none',2800);
}


/* ═══════════════════════════════════════════════
   COUNTER ANIMATION
═══════════════════════════════════════════════ */
function animateCounter(el,target,suffix=''){
  let v=0;const dur=1600;const step=16;const inc=Math.ceil(target/(dur/step));
  const t=setInterval(()=>{v=Math.min(v+inc,target);el.textContent=v.toLocaleString('en-IN')+suffix;if(v>=target)clearInterval(t);},step);
}

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
window.addEventListener('DOMContentLoaded',()=>{
  renderSchemes(SCHEMES);
  setTimeout(()=>{
    animateCounter(document.getElementById('stat1'),502);

    animateCounter(document.getElementById('stat3'),28);
    animateCounter(document.getElementById('stat4'),96,'%');
  },300);
});


