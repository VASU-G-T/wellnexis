/* ═══════════════════════════════════════════════
   ELIGIBILITY CHECKER
═══════════════════════════════════════════════ */

/* ── Populate form from saved user profile ── */
function populateEligibilityFromProfile() {
  try {
    const raw = localStorage.getItem('welfareUserProfile');
    if (!raw) return;
    const p = JSON.parse(raw);

    // Full Name (not stored in onboarding profile, but check anyway)
    if (p.name) {
      const nameEl = document.getElementById('fname');
      if (nameEl && !nameEl.value) nameEl.value = p.name;
    }

    // Gender — onboarding stores "Male" / "Female" / "Other"
    if (p.gender) {
      const genderSel = document.getElementById('fgender');
      if (genderSel) {
        const genderMap = { male: 'Male', female: 'Female', other: 'Transgender',
                            'male': 'Male', 'female': 'Female', 'transgender': 'Transgender' };
        const normalised = (p.gender || '').toLowerCase().replace(/[^\x20-\x7E]/g,'').trim();
        const mapped = genderMap[normalised] || p.gender;
        for (let i = 0; i < genderSel.options.length; i++) {
          if (genderSel.options[i].value.toLowerCase() === mapped.toLowerCase()) {
            genderSel.selectedIndex = i; break;
          }
        }
      }
    }

    // Age
    if (p.age) {
      const age = parseInt(p.age);
      if (!isNaN(age) && age >= 1 && age <= 120) {
        const rangeEl = document.getElementById('ageRange');
        const labelEl = document.getElementById('ageLabel');
        const dispEl  = document.getElementById('ageValDisp');
        if (rangeEl) rangeEl.value = age;
        if (labelEl) labelEl.textContent = age;
        if (dispEl)  dispEl.textContent  = age;
      }
    }

    // State
    if (p.state) {
      const stateSel = document.getElementById('fstate');
      if (stateSel) {
        for (let i = 0; i < stateSel.options.length; i++) {
          if (stateSel.options[i].text.trim().toLowerCase() === p.state.toLowerCase()) {
            stateSel.selectedIndex = i; break;
          }
        }
      }
    }

    // Caste — onboarding stores e.g. "General (UR)" or "OBC"; normalise to select values
    if (p.caste) {
      const casteSel = document.getElementById('fcaste');
      if (casteSel) {
        const casteRaw = p.caste.replace(/[^\x20-\x7E]/g,'').trim();
        const casteMap = [
          { keys: ['general','ur'], val: 'General' },
          { keys: ['obc'], val: 'OBC' },
          { keys: ['sc','scheduled caste'], val: 'SC' },
          { keys: ['st','scheduled tribe'], val: 'ST' },
          { keys: ['ews'], val: 'General' },
          { keys: ['mbc','bc','dnt','nt'], val: 'OBC' },
        ];
        const lower = casteRaw.toLowerCase();
        let matched = null;
        for (const cm of casteMap) {
          if (cm.keys.some(k => lower.includes(k))) { matched = cm.val; break; }
        }
        if (matched) {
          for (let i = 0; i < casteSel.options.length; i++) {
            if (casteSel.options[i].value === matched) { casteSel.selectedIndex = i; break; }
          }
        }
      }
    }

    // Special Status / disability
    if (p.physicallychallenged) {
      const disSel = document.getElementById('fdis');
      if (disSel) {
        const isPC = (p.physicallychallenged || '').toLowerCase().includes('yes');
        if (isPC) {
          const disType = (p.disabilityType || '').replace(/[^\x20-\x7E]/g,'').trim().toLowerCase();
          let targetIdx = 1; // default: "Physically Disabled"
          if (disType.includes('visual')) targetIdx = 2;
          disSel.selectedIndex = targetIdx;
        }
      }
    }

    // Occupation — try to match against current option texts
    if (p.occupation) {
      const occuSel = document.getElementById('foccu');
      if (occuSel) {
        const occuLower = p.occupation.toLowerCase();
        for (let i = 0; i < occuSel.options.length; i++) {
          if (occuSel.options[i].text.toLowerCase().includes(occuLower) ||
              occuLower.includes(occuSel.options[i].text.toLowerCase())) {
            occuSel.selectedIndex = i; break;
          }
        }
      }
    }

    // Income
    if (p.income !== undefined) {
      const incomeSel = document.getElementById('fincome');
      if (incomeSel) {
        const incomeVal = String(p.income);
        for (let i = 0; i < incomeSel.options.length; i++) {
          if (incomeSel.options[i].value === incomeVal) { incomeSel.selectedIndex = i; break; }
        }
      }
    }

    // Land Holding
    if (p.land) {
      const landSel = document.getElementById('fland');
      if (landSel) {
        const landLower = p.land.toLowerCase();
        const landMap = [
          { key: 'no land', idx: 0 },
          { key: 'below 2', idx: 1 },
          { key: '2', idx: 2 },
          { key: 'above 5', idx: 3 },
        ];
        for (const lm of landMap) {
          if (landLower.includes(lm.key)) { landSel.selectedIndex = lm.idx; break; }
        }
      }
    }

  } catch (e) {
    console.warn('populateEligibilityFromProfile: could not load profile', e);
  }
}

/* ── Save current form values back to profile ── */
function saveEligibilityToProfile() {
  try {
    const raw = localStorage.getItem('welfareUserProfile');
    const p = raw ? JSON.parse(raw) : {};

    const nameEl   = document.getElementById('fname');
    const ageLbl   = document.getElementById('ageLabel');
    const genderSel = document.getElementById('fgender');
    const incomeSel = document.getElementById('fincome');
    const stateSel  = document.getElementById('fstate');
    const casteSel  = document.getElementById('fcaste');
    const occuSel   = document.getElementById('foccu');
    const landSel   = document.getElementById('fland');
    const disSel    = document.getElementById('fdis');

    if (nameEl)    p.name   = nameEl.value.trim();
    if (ageLbl)    p.age    = ageLbl.textContent.trim();
    if (genderSel) p.gender = genderSel.value;
    if (incomeSel) p.income = incomeSel.value;
    if (stateSel)  p.state  = stateSel.value;
    if (casteSel)  p.caste  = casteSel.value;
    if (occuSel)   p.occupation = occuSel.options[occuSel.selectedIndex].text;
    if (landSel)   p.land   = landSel.options[landSel.selectedIndex].text;
    if (disSel) {
      const disText = disSel.options[disSel.selectedIndex].text;
      p.physicallychallenged = disSel.selectedIndex > 0 ? 'Yes' : 'No';
      p.disabilityType = disSel.selectedIndex > 0 ? disText : '';
    }

    localStorage.setItem('welfareUserProfile', JSON.stringify(p));
  } catch (e) {
    console.warn('saveEligibilityToProfile: could not save profile', e);
  }
}

/* ── Auto-populate when the eligibility page is shown ── */
(function() {
  // Wait for the navigation system to expose a hook, or observe page activation
  function tryAttach() {
    const pageEl = document.getElementById('page-check');
    if (!pageEl) { setTimeout(tryAttach, 300); return; }

    // MutationObserver: fires when page-check gains the 'active' class
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(m) {
        if (m.type === 'attributes' && m.attributeName === 'class') {
          if (pageEl.classList.contains('active')) {
            populateEligibilityFromProfile();
          }
        }
      });
    });
    observer.observe(pageEl, { attributes: true });

    // Also run immediately in case the page is already active on first load
    if (pageEl.classList.contains('active')) {
      populateEligibilityFromProfile();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', tryAttach);
  } else {
    tryAttach();
  }
})();

function runEligibility(){
  // Save any edits the user made back to their profile first
  saveEligibilityToProfile();

  const name=document.getElementById('fname').value||'Applicant';
  const income=parseInt(document.getElementById('fincome').value);
  const occu=document.getElementById('foccu').value;
  const age=parseInt(document.getElementById('ageLabel').textContent);
  const caste=document.getElementById('fcaste').value;

  // Separate matched vs not-matched
  const matched=SCHEMES.filter(s=>{
    let score=0;
    if(income<=s.incomeMax)score++;
    if(s.eligibleFor.includes('all'))score++;
    if(s.eligibleFor.includes(occu))score++;
    if(caste==='SC'||caste==='ST')score+=0.5;
    return score>=1.5;
  });
  const notMatched=SCHEMES.filter(s=>!matched.includes(s));
  const eligible=matched.filter(s=>s.eligible==='yes');
  const partial=matched.filter(s=>s.eligible==='partial');

  function schemeRow(s, type){
    const isElig = type==='yes';
    const isPartial = type==='partial';
    const isNo = type==='no';
    const bgColor = isElig ? 'rgba(29,155,94,.06)' : isPartial ? 'rgba(245,166,35,.06)' : 'rgba(212,64,42,.05)';
    const borderColor = isElig ? 'rgba(29,155,94,.25)' : isPartial ? 'rgba(245,166,35,.3)' : 'rgba(212,64,42,.2)';
    const icon = isElig ? '✅' : isPartial ? '⚠️' : '❌';
    const badgeStyle = isElig
      ? 'background:rgba(29,155,94,.12);color:#1D9B5E'
      : isPartial
      ? 'background:rgba(245,166,35,.15);color:#B8750A'
      : 'background:rgba(212,64,42,.1);color:#D4402A';
    const badgeText = isElig ? 'Fully Eligible' : isPartial ? 'Partial' : 'Not Eligible';
    const btnStyle = isElig
      ? 'background:var(--primary);color:#fff'
      : isPartial
      ? 'background:var(--accent);color:#fff'
      : 'background:var(--border2);color:var(--text2)';
    return `<div style="display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:10px;background:${bgColor};border:1px solid ${borderColor};margin-bottom:8px;transition:box-shadow .2s" onmouseover="this.style.boxShadow='0 2px 10px rgba(0,0,0,.08)'" onmouseout="this.style.boxShadow='none'">
      <div style="font-size:1.1rem;flex-shrink:0">${s.icon||'📋'}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:.85rem;font-weight:700;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${icon} ${s.name}</div>
        <div style="font-size:.72rem;color:var(--text3);margin-top:2px">${s.cat||''}</div>
      </div>
      <span style="padding:3px 9px;border-radius:20px;font-size:.65rem;font-weight:700;white-space:nowrap;${badgeStyle}">${badgeText}</span>
      <button onclick="showSchemeDetail(${s.id})" style="padding:5px 12px;border-radius:16px;border:none;font-family:var(--font);font-size:.7rem;font-weight:700;cursor:pointer;white-space:nowrap;flex-shrink:0;${btnStyle}">View →</button>
    </div>`;
  }

  function buildTab(type){
    const list = type==='yes' ? eligible : type==='partial' ? partial : notMatched;
    if(!list.length) return `<div style="text-align:center;padding:32px;color:var(--text3)"><span style="font-size:2rem;display:block;margin-bottom:8px">${type==='no'?'🎉':'📭'}</span>${type==='no'?'No schemes are ineligible for you!':'No schemes in this category.'}</div>`;
    return list.map(s=>schemeRow(s,type)).join('');
  }

  const panel=document.getElementById('resultPanel');
  panel.style.display='block';
  panel.innerHTML=`
    <!-- Header -->
    <div style="text-align:center;margin-bottom:20px;padding-bottom:16px;border-bottom:1px solid var(--border)">
      <div style="font-size:2.5rem;margin-bottom:8px">🎉</div>
      <div style="font-size:1.2rem;font-weight:800;color:var(--green)">${t('elig_great')} ${name}!</div>
      <div style="font-size:.85rem;color:var(--text2);margin-top:4px">${t('elig_summary')}</div>
    </div>

    <!-- Summary Cards -->
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:20px">
      <div onclick="switchEligTab('yes')" id="eligCard_yes" style="border-radius:10px;padding:14px;text-align:center;border:2px solid var(--green);background:rgba(29,155,94,.08);cursor:pointer;transition:all .2s">
        <div style="font-size:1.5rem;font-weight:900;color:var(--green)">${eligible.length}</div>
        <div style="font-size:.68rem;color:var(--green);font-weight:700;margin-top:3px">✅ Fully Eligible</div>
      </div>
      <div onclick="switchEligTab('partial')" id="eligCard_partial" style="border-radius:10px;padding:14px;text-align:center;border:2px solid #F5A623;background:rgba(245,166,35,.08);cursor:pointer;transition:all .2s">
        <div style="font-size:1.5rem;font-weight:900;color:#B8750A">${partial.length}</div>
        <div style="font-size:.68rem;color:#B8750A;font-weight:700;margin-top:3px">⚠️ Partial Eligibility</div>
      </div>
      <div onclick="switchEligTab('no')" id="eligCard_no" style="border-radius:10px;padding:14px;text-align:center;border:2px solid var(--border);background:rgba(212,64,42,.05);cursor:pointer;transition:all .2s">
        <div style="font-size:1.5rem;font-weight:900;color:var(--secondary)">${notMatched.length}</div>
        <div style="font-size:.68rem;color:var(--secondary);font-weight:700;margin-top:3px">❌ Not Eligible</div>
      </div>
    </div>

    <!-- Tab Bar -->
    <div style="display:flex;gap:6px;margin-bottom:14px;background:var(--bg);border-radius:30px;padding:4px;border:1px solid var(--border)">
      <button id="eligTab_yes" onclick="switchEligTab('yes')" style="flex:1;padding:8px 10px;border-radius:24px;border:none;font-family:var(--font);font-size:.76rem;font-weight:700;cursor:pointer;background:var(--green);color:#fff;box-shadow:0 2px 8px rgba(29,155,94,.3);transition:all .2s">✅ Eligible (${eligible.length})</button>
      <button id="eligTab_partial" onclick="switchEligTab('partial')" style="flex:1;padding:8px 10px;border-radius:24px;border:none;font-family:var(--font);font-size:.76rem;font-weight:700;cursor:pointer;background:transparent;color:var(--text2);transition:all .2s">⚠️ Partial (${partial.length})</button>
      <button id="eligTab_no" onclick="switchEligTab('no')" style="flex:1;padding:8px 10px;border-radius:24px;border:none;font-family:var(--font);font-size:.76rem;font-weight:700;cursor:pointer;background:transparent;color:var(--text2);transition:all .2s">❌ Not Eligible (${notMatched.length})</button>
    </div>

    <!-- Scheme Lists -->
    <div id="eligList_yes" class="elig-list-panel" style="display:block;max-height:460px;overflow-y:auto;padding-right:4px">${buildTab('yes')}</div>
    <div id="eligList_partial" class="elig-list-panel" style="display:none;max-height:460px;overflow-y:auto;padding-right:4px">${buildTab('partial')}</div>
    <div id="eligList_no" class="elig-list-panel" style="display:none;max-height:460px;overflow-y:auto;padding-right:4px">${buildTab('no')}</div>

    <!-- Footer -->
    <div style="margin-top:16px;padding-top:14px;border-top:1px solid var(--border);display:flex;gap:10px;flex-wrap:wrap">
      <button class="check-btn" style="flex:1;min-width:180px" onclick="navigate('schemes')">${t('btn_view_all')}</button>
    </div>`;

  panel.scrollIntoView({behavior:'smooth',block:'nearest'});
  showToast(t('toast_elig'));
}

function switchEligTab(type){
  ['yes','partial','no'].forEach(tp=>{
    const tab=document.getElementById('eligTab_'+tp);
    const list=document.getElementById('eligList_'+tp);
    const card=document.getElementById('eligCard_'+tp);
    if(!tab||!list) return;
    const isActive = tp===type;
    list.style.display = isActive ? 'block' : 'none';
    if(isActive){
      if(tp==='yes'){tab.style.cssText='flex:1;padding:8px 10px;border-radius:24px;border:none;font-family:var(--font);font-size:.76rem;font-weight:700;cursor:pointer;background:var(--green);color:#fff;box-shadow:0 2px 8px rgba(29,155,94,.3);transition:all .2s';}
      else if(tp==='partial'){tab.style.cssText='flex:1;padding:8px 10px;border-radius:24px;border:none;font-family:var(--font);font-size:.76rem;font-weight:700;cursor:pointer;background:var(--accent);color:#fff;box-shadow:0 2px 8px rgba(245,166,35,.3);transition:all .2s';}
      else{tab.style.cssText='flex:1;padding:8px 10px;border-radius:24px;border:none;font-family:var(--font);font-size:.76rem;font-weight:700;cursor:pointer;background:var(--secondary);color:#fff;box-shadow:0 2px 8px rgba(212,64,42,.3);transition:all .2s';}
    } else {
      tab.style.cssText='flex:1;padding:8px 10px;border-radius:24px;border:none;font-family:var(--font);font-size:.76rem;font-weight:700;cursor:pointer;background:transparent;color:var(--text2);transition:all .2s';
    }
  });
}
