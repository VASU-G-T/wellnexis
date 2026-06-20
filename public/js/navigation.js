/* ═══════════════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════════════ */
let currentPage='home';

/* Map page ids to nav button ids where they differ */
const NAV_ID_MAP = { check: 'check' };

function navigate(page){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  const el=document.getElementById('page-'+page);
  if(el){el.classList.add('active');currentPage=page;}
  const navId = NAV_ID_MAP[page] || page;
  const navEl=document.getElementById('nav-'+navId);
  if(navEl)navEl.classList.add('active');
  if(page==='schemes'){
    if(typeof renderAllSchemes==='function' && typeof SCHEMES!=='undefined'){
      renderAllSchemes(SCHEMES);
      const sc=document.getElementById('schemeCount');
      if(sc) sc.textContent=SCHEMES.length+t('scheme_count_suffix');
    }
  }
  if(page==='docs'){if(typeof renderDocs==='function' && typeof GOV_DOCS!=='undefined') renderDocs(GOV_DOCS);}
  window.scrollTo({top:0,behavior:'smooth'});
}
function setNavTab(btn){
  document.querySelectorAll('.nav-tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
}

