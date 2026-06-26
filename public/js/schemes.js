/* ═══════════════════════════════════════════════
   SCHEME RENDERING  –  v2 (Grid + List + Search)
═══════════════════════════════════════════════ */

let currentSchemeView = 'grid';
let currentCat2 = 'All';
let currentSearchQ = '';

const CAT_META = {
  'All':          {icon:'🌐', color:'var(--primary)'},
  'Agriculture':  {icon:'🌾', color:'#1d9b5e'},
  'Education':    {icon:'📚', color:'#1b4fcc'},
  'Health':       {icon:'🏥', color:'#d4402a'},
  'Housing':      {icon:'🏠', color:'#4a6fa5'},
  'Women':        {icon:'👩', color:'#ba40d4'},
  'Business':     {icon:'💼', color:'#1b78b4'},
  'Labour':       {icon:'🔧', color:'#786428'},
  'Pension':      {icon:'🧓', color:'#b48200'},
  'Social':       {icon:'🤝', color:'#009688'},
  'Financial':    {icon:'💰', color:'#1d9b5e'},
  'Infrastructure':{icon:'⚡', color:'#ff5722'},
  'Science':      {icon:'🔬', color:'#7856cc'},
};

function schemeCardHTML(s,onclick=''){
  return `<div class="scheme-card glass-card" onclick="${onclick||'showSchemeDetail('+s.id+')'}">
    <div class="scheme-icon-wrap" style="background:${s.iconBg}">${s.icon}</div>
    <h3>${s.name}</h3>
    <p>${s.desc}</p>
    <div class="scheme-tags">${s.tags.slice(0,3).map(tg=>`<span class="tag tag-blue">${tg}</span>`).join('')}</div>
    <div class="scheme-footer">
      <span class="eligible-badge ${s.eligible==='yes'?'elig-yes':s.eligible==='partial'?'elig-partial':'elig-no'}">
        ${s.eligible==='yes'?t('elig_badge_yes'):s.eligible==='partial'?t('elig_badge_partial'):t('elig_badge_no')}
      </span>
      <div style="display:flex;align-items:center;gap:6px">
        ${s.pdfUrl?`<span class="pdf-badge">📄 PDF</span>`:''}
        ${s.daysLeft?`<span class="deadline-pill">⏰ ${s.daysLeft}d left</span>`:`<button class="apply-btn" onclick="event.stopPropagation();showSchemeDetail(${s.id})">Details →</button>`}
      </div>
    </div>
  </div>`;
}

function schemeListRowHTML(s){
  const meta = CAT_META[s.cat] || CAT_META['All'];
  return `<div class="scheme-list-row" onclick="showSchemeDetail(${s.id})">
    <div class="slr-icon" style="background:${s.iconBg}">${s.icon}</div>
    <div class="slr-body">
      <div class="slr-top">
        <span class="slr-name">${s.name}</span>
        <span class="slr-cat" style="color:${meta.color};font-size:.7rem;font-weight:700">${meta.icon} ${s.cat}</span>
      </div>
      <p class="slr-desc">${s.desc.length>110?s.desc.substring(0,110)+'…':s.desc}</p>
      <div class="slr-footer">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${s.tags.slice(0,3).map(tg=>`<span class="tag tag-blue">${tg}</span>`).join('')}</div>
        <div style="display:flex;gap:6px;align-items:center">
          ${s.eligible==='yes'?'<span style="color:#1d9b5e;font-size:.7rem;font-weight:700">✅ Eligible</span>':'<span style="color:#b48200;font-size:.7rem;font-weight:700">⚡ Check</span>'}
          ${s.website?`<a style="color:var(--primary);font-size:.7rem;font-weight:600;text-decoration:none" href="${s.website}" target="_blank" rel="noopener" onclick="event.stopPropagation()">🔗 Apply</a>`:''}
        </div>
      </div>
    </div>
    <div style="font-size:1.2rem;color:var(--text3);padding-left:8px">›</div>
  </div>`;
}

function setSchemeView(mode, btn){
  currentSchemeView = mode;
  document.querySelectorAll('.view-toggle-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  applySchemeFilters();
}

function applySchemeFilters(){
  let list = currentCat2==='All' ? SCHEMES : SCHEMES.filter(s=>s.cat===currentCat2);
  if(currentSearchQ){
    const lq=currentSearchQ.toLowerCase();
    list=list.filter(s=>
      s.name.toLowerCase().includes(lq)||
      s.desc.toLowerCase().includes(lq)||
      s.cat.toLowerCase().includes(lq)||
      s.tags.some(tg=>tg.toLowerCase().includes(lq))
    );
  }
  list=[...list].sort((a,b)=>a.name.localeCompare(b.name));
  const cnt=document.getElementById('schemeCount');
  if(cnt) cnt.textContent=list.length+(t('scheme_count_suffix')||' schemes');

  const gridEl=document.getElementById('allSchemesGrid');
  const listEl=document.getElementById('allSchemesList');
  if(!gridEl||!listEl) return;

  if(currentSchemeView==='grid'){
    gridEl.style.display='';
    listEl.style.display='none';
    renderAllSchemes(list);
  } else {
    gridEl.style.display='none';
    listEl.style.display='';
    listEl.innerHTML=list.length
      ? list.map(s=>schemeListRowHTML(s)).join('')
      : `<div class="empty-state"><span class="empty-icon">🔍</span>${t('empty_schemes')||'No schemes found'}</div>`;
  }
}

function filterCat2(cat,btn){
  currentCat2=cat;
  document.querySelectorAll('#schemeCatChips .chip').forEach(c=>c.classList.remove('active'));
  if(btn) btn.classList.add('active');
  applySchemeFilters();
}

function filterSchemesSearch(q){
  currentSearchQ=q.trim();
  applySchemeFilters();
}

function renderSchemes(list){
  const g=document.getElementById('schemesGrid');
  if(!g) return;
  g.innerHTML=list.length?list.slice(0,8).map(s=>schemeCardHTML(s)).join(''):`<div class="empty-state"><span class="empty-icon">🔍</span>${t('empty_schemes')||'No schemes'}</div>`;
}
function renderAllSchemes(list){
  const g=document.getElementById('allSchemesGrid');
  if(!g) return;
  g.innerHTML=list.length?list.map(s=>schemeCardHTML(s)).join(''):`<div class="empty-state"><span class="empty-icon">🔍</span>${t('empty_schemes')||'No schemes'}</div>`;
}
function filterCat(cat,btn){
  currentCat=cat;
  document.querySelectorAll('#chipRow .chip').forEach(c=>c.classList.remove('active'));
  btn.classList.add('active');
  renderSchemes(cat==='All'?SCHEMES:SCHEMES.filter(s=>s.cat===cat));
}
function filterSchemes(q){
  if(!q){renderSchemes(SCHEMES);return;}
  const lq=q.toLowerCase();
  renderSchemes(SCHEMES.filter(s=>s.name.toLowerCase().includes(lq)||s.desc.toLowerCase().includes(lq)||s.cat.toLowerCase().includes(lq)||s.tags.some(tg=>tg.toLowerCase().includes(lq))));
}

/* ═══ SCHEME DETAIL ═══ */
function showSchemeDetail(id){
  const s=SCHEMES.find(x=>x.id===id);
  if(!s) return;
  navigate('detail');
  const d=s.fullDetails||{};
  const docs=(d.documents||['Aadhaar Card','Income Certificate','Bank Passbook','Passport Photo','Address Proof']);
  document.getElementById('detailContent').innerHTML=`
    <div class="scheme-detail">
      <div class="detail-hero">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
          <div style="width:56px;height:56px;border-radius:14px;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;font-size:1.8rem">${s.icon}</div>
          <div>
            <h2>${s.name}</h2>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:6px">
              ${s.tags.map(tg=>`<span style="background:rgba(255,255,255,.2);padding:2px 10px;border-radius:20px;font-size:.65rem;font-weight:700">${tg}</span>`).join('')}
            </div>
          </div>
        </div>
        <p>${s.desc}</p>
        ${d.ministry?`<p style="font-size:.75rem;opacity:.7;margin-top:8px">📌 ${d.ministry} ${d.launched?'| Launched: '+d.launched:''}</p>`:''}
      </div>
      <div class="detail-body">
        ${d.benefit?`<div class="detail-section">
          <h4>${t('det_benefits')||'Benefits'}</h4>
          <div style="background:rgba(29,155,94,.06);border:1px solid rgba(29,155,94,.2);border-radius:10px;padding:14px;font-weight:700;color:var(--green);font-size:.9rem">${d.benefit}</div>
          ${d.beneficiaries?`<p style="font-size:.78rem;color:var(--text3);margin-top:8px">👥 Beneficiaries: ${d.beneficiaries}</p>`:''}
        </div>`:''}
        ${d.eligibility?`<div class="detail-section">
          <h4>${t('det_elig')||'Eligibility'}</h4>
          <ul class="detail-list">${d.eligibility.map(e=>`<li>${e}</li>`).join('')}</ul>
          ${d.notEligible?`<div style="margin-top:10px"><div style="font-size:.78rem;font-weight:700;color:var(--secondary);margin-bottom:6px">❌ Not Eligible If:</div><ul class="detail-list" style="border-top:none">${d.notEligible.map(e=>`<li style="color:var(--secondary)">${e}</li>`).join('')}</ul></div>`:''}
        </div>`:''}
        <div class="detail-section">
          <h4>${t('det_docs')||'Required Documents'}</h4>
          <ul class="detail-docs-list">
            ${docs.map((doc,i)=>`<li>
              <div class="doc-icon">📄</div>
              <span>${doc}</span>
              <div class="doc-check-box" id="dochk-${id}-${i}" onclick="toggleDocCheck(this)"></div>
            </li>`).join('')}
          </ul>
        </div>
        ${d.applyProcess?`<div class="detail-section">
          <h4>${t('det_apply')||'How to Apply'}</h4>
          <ol style="padding-left:20px;list-style:decimal">
            ${d.applyProcess.map(step=>`<li style="padding:6px 0;font-size:.82rem;color:var(--text2);line-height:1.5">${step}</li>`).join('')}
          </ol>
        </div>`:''}
        <div class="detail-kv">
          ${s.website?`<div class="kv-item"><div class="kv-label">${t('det_website')||'Official Website'}</div><div class="kv-val"><a href="${s.website}" target="_blank" rel="noopener" style="color:var(--primary);font-size:.75rem">${s.website}</a></div></div>`:''}
          ${s.pdfUrl?`<div class="kv-item" style="border:1px solid rgba(29,155,94,.25);background:rgba(29,155,94,.05)"><div class="kv-label" style="color:var(--green)">📄 Official Application Form</div><div class="kv-val" style="font-size:.72rem;color:var(--green)">Official PDF available ↓</div></div>`:''}
          <div class="kv-item"><div class="kv-label">${t('det_cat')||'Category'}</div><div class="kv-val">${s.cat}</div></div>
          <div class="kv-item"><div class="kv-label">${t('det_deadline')||'Deadline'}</div><div class="kv-val">${s.deadline}</div></div>
        </div>
        ${s.youtube ? `<div class="detail-section"><h4>?? Video Tutorial</h4><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;background:#000"><iframe src="https://www.youtube.com/embed/${s.youtube.includes('youtu.be/') ? s.youtube.split('youtu.be/')[1].split('?')[0] : s.youtube.includes('v=') ? s.youtube.split('v=')[1].split('&')[0] : s.youtube}" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allowfullscreen loading="lazy"></iframe></div></div>` : ""}<div class="detail-action-row">
          ${s.pdfUrl
            ? `<a class="btn-primary" href="${s.pdfUrl}" target="_blank" rel="noopener" style="text-decoration:none">📥 Download Official PDF Form</a>`
            : `<button class="btn-primary" onclick="downloadSchemeForm('${s.name.replace(/'/g,"\\'")}')">📥 Download Application Form</button>`
          }
          <button class="btn-outline" onclick="navigate('check')">✅ Check Eligibility</button>
          <button class="btn-green" onclick="openChat('Tell me about ${s.name.replace(/'/g,"\\'")}')">🤖 Ask AI</button>
        </div>
      </div>
    </div>`;
}

function toggleDocCheck(el){
  el.classList.toggle('checked');
  el.textContent=el.classList.contains('checked')?'✓':'';
}

/* ═══ DOCUMENTS PAGE ═══ */
function renderDocs(list){
  const g=document.getElementById('docsGrid');
  if(!g) return;
  document.getElementById('docCount').textContent=list.length+t('doc_count_suffix');
  g.innerHTML=list.map(d=>`
    <div class="doc-card" onclick="showDocDetail('${d.id}')">
      <div class="doc-card-icon" style="background:${d.iconBg}">${d.icon}</div>
      <h4>${d.name}</h4>
      <p>${d.desc}</p>
      <div class="doc-card-footer">
        <span class="doc-type-badge">${d.type}</span>
        <button class="doc-download-btn" onclick="event.stopPropagation();downloadDocPDF('${d.id}')">${t('btn_dl_doc')}</button>
      </div>
    </div>`).join('');
}
function filterDocs(type,btn){
  currentDocType=type;
  document.querySelectorAll('#docChipRow .chip').forEach(c=>c.classList.remove('active'));
  btn.classList.add('active');
  renderDocs(type==='All'?GOV_DOCS:GOV_DOCS.filter(d=>d.type===type));
}
function showDocDetail(id){
  const d=GOV_DOCS.find(x=>x.id===id);
  if(!d) return;
  document.getElementById('modalTitle').textContent=d.name;
  document.getElementById('modalContent').innerHTML=`
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">
      <span class="badge badge-blue">${d.type}</span>
      <span class="badge badge-green">Issued by: ${d.issuedBy}</span>
      <span class="badge badge-amber">${t('doc_valid')}${d.validFor}</span>
    </div>
    <p style="font-size:.83rem;color:var(--text2);margin-bottom:16px">${d.desc}</p>
    <div class="pdf-panel">
      <div class="pdf-toolbar">
        <h3>📄 ${d.name}</h3>
        <button class="btn-primary" style="padding:8px 16px;font-size:.75rem" onclick="downloadDocPDF('${d.id}')">${t('btn_dl_txt')}</button>
      </div>
      <div class="pdf-preview">
        <div class="pdf-watermark">${t('watermark')}</div>
        <pre style="font-family:'Courier New',monospace;font-size:.77rem;white-space:pre-wrap">${d.content}</pre>
      </div>
    </div>`;
  document.getElementById('modalOverlay').classList.remove('hidden');
}
function downloadDocPDF(id){
  const d=GOV_DOCS.find(x=>x.id===id);
  if(!d) return;
  showToast(t('toast_dl'));
  setTimeout(()=>{
    const header=`GOVERNMENT OF INDIA\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n${d.name.toUpperCase()}\nIssued by: ${d.issuedBy}\nValid For: ${d.validFor}\nDownloaded from: Wellnexis | Date: ${new Date().toLocaleDateString('en-IN')}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    const blob=new Blob([header+d.content],{type:'text/plain;charset=utf-8'});
    const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=d.id+'_'+d.name.replace(/[\s/]+/g,'_')+'.txt';a.click();
    showToast(t('toast_dl_ok'));
  },800);
}
function downloadSchemeForm(name){
  showToast(t('toast_gen'));
  setTimeout(()=>{
    const today=new Date().toLocaleDateString('en-IN');
    const content=`GOVERNMENT OF INDIA\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nAPPLICATION FORM\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nScheme: ${name}\nApplication Date: ${today}\nDownloaded from: Wellnexis (AI-Powered Govt Scheme Assistant)\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nAPPLICANT PERSONAL DETAILS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nFull Name:           _______________________________\nFather/Spouse Name:  _______________________________\nDate of Birth:       ______________  Age: ___\nGender:   □ Male  □ Female  □ Transgender\nCategory: □ SC  □ ST  □ OBC  □ General  □ EWS\n\nAADHAAR NUMBER:  ____  ____  ____\nPAN NUMBER:      ____________________\nMobile Number:   ____________________\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nADDRESS DETAILS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nDoor No / Plot:   _______________________________\nStreet / Village: _______________________________\nTaluk / Block:    _______________________________\nDistrict:         _______________________________\nState:            _______________________________\nPIN Code:         _______\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nBANK ACCOUNT DETAILS (for DBT)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nBank Name:     _______________________________\nBranch Name:   _______________________________\nAccount No:    _______________________________\nIFSC Code:     _______________________________\nAccount Holder:_______________________________\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nINCOME DETAILS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nAnnual Income: ₹ ________________\nOccupation:    _______________________________\nIncome Source: □ Agriculture  □ Employment  □ Business  □ Other\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nDOCUMENTS CHECKLIST\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n□ Aadhaar Card (Original + 2 Photocopies)\n□ Income Certificate (Current Year)\n□ Caste / Community Certificate\n□ Bank Passbook (First Page Photocopy)\n□ Passport Size Photo (4 Copies)\n□ Land Records / Patta (if applicable)\n□ Ration Card\n□ Residence Proof\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nDECLARATION\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nI hereby declare that the information furnished above\nis true and correct to the best of my knowledge.\n\nDate:    _______________\nPlace:   _______________\n\nApplicant Signature: _______________________________\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nFOR OFFICE USE ONLY\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nApplication No: _______________ Date: __________\nReceived By:    _______________\nVerified By:    _______________ Date: __________\nApproved / Rejected: ___________ Date: __________\nRemarks: ______________________________________`;
    const blob=new Blob([content],{type:'text/plain;charset=utf-8'});
    const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name.replace(/\s+/g,'_')+'_Application_Form.txt';a.click();
    showToast(t('toast_gen_ok'));
  },1000);
}

