/* ═══════════════════════════════════════════════════════════════
   WELLNEXIS ELITE — Production Intelligence Engine
   ✔ Intent Detection (GOV / GENERAL / HYBRID)
   ✔ Smart Memory (age, income, state, caste, occupation)
   ✔ Multilingual Auto-detect (EN / Tamil / Hindi)
   ✔ Database-aware scheme matching
   ✔ WhatsApp-style responses
   ✔ Human-like conversation layer
═══════════════════════════════════════════════════════════════ */

/* ── Smart Memory Store ── */
const WMEMORY = { age:null, income:null, state:null, caste:null, occupation:null, lang:'en', history:[] };

/* ── Load profile from onboarding if available ── */
(function loadProfileIntoMemory(){
  try {
    const p = JSON.parse(localStorage.getItem('welfareUserProfile')||'{}');
    if(p.age)        WMEMORY.age        = parseInt(p.age);
    if(p.state)      WMEMORY.state      = p.state;
    if(p.caste)      WMEMORY.caste      = p.caste;
    if(p.occupation) WMEMORY.occupation = p.occupation;
  } catch(e){}
})();

/* ── Language Detector ── */
function detectLang(q) {
  const tamilChars = /[\u0B80-\u0BFF]/;
  const hindiChars  = /[\u0900-\u097F]/;
  if(tamilChars.test(q)) return 'ta';
  if(hindiChars.test(q))  return 'hi';
  return 'en';
}

/* ── Intent Classifier ── */
const GOV_KEYWORDS = ['scheme','government','govt','subsidy','loan','apply','eligib','farmer','kisan','student','pension','housing','job','yojana','benefit','welfare','ration','scholarship','health card','ayushman','pmay','mudra','pmjay','bpl','apl','income','caste','labour','shram','insurance','pmsby','pmjjby','solar','kusum','ujjwala','mission','portal','certificate','document','aadhaar'];
const GENERAL_KEYWORDS = ['code','program','function','debug','error','explain','what is','how to','write','calculate','define','difference','history','science','math','english','story','essay','help me understand','java','python','c++','html','css','javascript','sql','api','ai','machine learning'];

function detectIntent(q) {
  const lq = q.toLowerCase();
  const isGov     = GOV_KEYWORDS.some(k  => lq.includes(k));
  const isGeneral = GENERAL_KEYWORDS.some(k => lq.includes(k));
  if(isGov && isGeneral) return 'HYBRID';
  if(isGov)   return 'GOV';
  if(isGeneral) return 'GENERAL';
  // Fallback: short queries about "schemes for me", "best scheme" etc.
  if(lq.includes('scheme')||lq.includes('best')||lq.includes('suggest')||lq.includes('recommend')) return 'GOV';
  return 'GENERAL';
}

/* ── Extract user data from message ── */
function extractMemory(q) {
  const lq = q.toLowerCase();
  // Age
  const ageMatch = lq.match(/\b(\d{1,3})\s*(year|yr|age|old)s?\b/) || lq.match(/age\s*(?:is)?\s*(\d{1,3})/);
  if(ageMatch) WMEMORY.age = parseInt(ageMatch[1]);
  // Income
  const incMatch = lq.match(/(?:income|earn|salary|lakh|lakhs?)\s*(?:is|of)?\s*(?:rs\.?|₹)?\s*(\d+(?:\.\d+)?)\s*(?:lakh|l\b)?/i);
  if(incMatch) WMEMORY.income = parseFloat(incMatch[1]);
  const incMatch2 = lq.match(/(?:rs\.?|₹)\s*(\d+(?:,\d+)*)/i);
  if(incMatch2 && !WMEMORY.income) { const v=parseInt(incMatch2[1].replace(/,/g,'')); if(v>0) WMEMORY.income = v>1000?v/100000:v; }
  // Occupation
  if(lq.includes('farmer')||lq.includes('agriculture')||lq.includes('farming')) WMEMORY.occupation='farmer';
  else if(lq.includes('student')) WMEMORY.occupation='student';
  else if(lq.includes('business')||lq.includes('self-employ')||lq.includes('entrepreneur')) WMEMORY.occupation='business';
  else if(lq.includes('daily wage')||lq.includes('labourer')||lq.includes('worker')) WMEMORY.occupation='labour';
  else if(lq.includes('government employ')||lq.includes('govt job')||lq.includes('sarkari')) WMEMORY.occupation='govt';
  else if(lq.includes('unemployed')||lq.includes('no job')) WMEMORY.occupation='unemployed';
  // Caste
  if(lq.includes(' sc ')||lq.includes('scheduled caste')||lq.includes('dalit')) WMEMORY.caste='SC';
  else if(lq.includes(' st ')||lq.includes('scheduled tribe')||lq.includes('tribal')) WMEMORY.caste='ST';
  else if(lq.includes('obc')) WMEMORY.caste='OBC';
  else if(lq.includes('ews')) WMEMORY.caste='EWS';
  else if(lq.includes('general')||lq.includes(' ur ')) WMEMORY.caste='General';
  else if(lq.includes('mbc')) WMEMORY.caste='MBC';
  else if(lq.includes(' bc ')||lq.includes('backward class')) WMEMORY.caste='BC';
  // State
  const STATES=['andhra','arunachal','assam','bihar','chhattisgarh','goa','gujarat','haryana','himachal','jharkhand','karnataka','kerala','madhya pradesh','maharashtra','manipur','meghalaya','mizoram','nagaland','odisha','punjab','rajasthan','sikkim','tamil nadu','telangana','tripura','uttar pradesh','uttarakhand','west bengal','delhi','puducherry','pondicherry'];
  STATES.forEach(s=>{ if(lq.includes(s)) WMEMORY.state=s.replace(/\b\w/g,c=>c.toUpperCase()); });
}

/* ── Missing data checker ── */
function getMissingData(forSchemes=true) {
  const missing = [];
  if(!WMEMORY.age)        missing.push('age');
  if(!WMEMORY.income)     missing.push('annual income');
  if(!WMEMORY.state)      missing.push('state');
  if(forSchemes && !WMEMORY.occupation) missing.push('occupation (farmer/student/business/worker)');
  return missing;
}

/* ── Scheme Database (from SCHEMES array) ── */
function matchSchemesFromDB(limit=3) {
  if(typeof SCHEMES === 'undefined') return [];
  return SCHEMES.filter(s => {
    let score = 0;
    if(WMEMORY.income && WMEMORY.income <= s.incomeMax) score += 2;
    else if(!WMEMORY.income) score += 1;
    if(WMEMORY.occupation) {
      const occ = WMEMORY.occupation;
      if(s.eligibleFor.includes('all')) score += 1;
      if((occ==='farmer'&&s.eligibleFor.includes('Farmer'))) score += 2;
      if((occ==='student'&&s.eligibleFor.includes('Student'))) score += 2;
      if((occ==='business'&&s.eligibleFor.includes('Self-employed'))) score += 2;
      if((occ==='labour'&&s.eligibleFor.includes('Daily Wage Worker'))) score += 2;
      if((occ==='govt'&&s.eligibleFor.includes('Government Employee'))) score += 2;
    } else { score += 1; }
    if(WMEMORY.caste==='SC'||WMEMORY.caste==='ST') score += 1;
    return score >= 2;
  })
  .sort((a,b) => (b.eligible==='yes'?2:b.eligible==='partial'?1:0) - (a.eligible==='yes'?2:a.eligible==='partial'?1:0))
  .slice(0, limit);
}

/* ── Format a scheme card (GOV MODE) ── */
function formatSchemeCard(s) {
  const badge = s.eligible==='yes' ? '✅ <strong>Fully Eligible</strong>' : s.eligible==='partial' ? '⚠️ <strong>Partial Eligibility</strong>' : '📋';
  return `<div style="background:${s.eligible==='yes'?'rgba(29,155,94,.07)':'rgba(27,79,204,.06)'};border:1px solid ${s.eligible==='yes'?'rgba(29,155,94,.25)':'rgba(27,79,204,.2)'};border-radius:12px;padding:12px 14px;margin-bottom:10px">
${badge}<br/>
<strong>${s.icon||'📋'} ${s.name}</strong><br/>
💰 <strong>Benefit:</strong> ${s.desc.split('.')[0]}.<br/>
📋 <strong>Eligibility:</strong> ${(s.eligibility||[]).slice(0,2).join(' • ')}<br/>
📄 <strong>Documents:</strong> ${(s.documents||['Aadhaar','Bank Passbook']).slice(0,3).join(', ')}<br/>
🚀 <strong>Apply:</strong> <a href="${s.website||'#'}" target="_blank" style="color:var(--primary)">${s.website||'Visit official portal'}</a>
<br/><button onclick="showSchemeDetail(${s.id})" style="margin-top:8px;padding:5px 14px;border-radius:16px;border:none;background:var(--primary);color:#fff;font-family:var(--font);font-size:.72rem;font-weight:700;cursor:pointer">View Full Details →</button>
</div>`;
}

/* ── GOV MODE Response Engine ── */
function govResponse(q, lang) {
  const lq = q.toLowerCase();

  /* ── Specific scheme queries ── */
  if(lq.includes('kisan')&&!lq.includes('credit')) return `Got it 👍 Here's what you need to know:<br/><br/>${formatSchemeCard({id:1,name:'PM Kisan Samman Nidhi',icon:'🌾',desc:'₹6,000/year direct income support in 3 installments of ₹2,000 each directly to bank accounts.',eligibility:['Small & marginal farmers','Land up to 2 hectares','Valid Aadhaar required'],documents:['Aadhaar Card','Land Records','Bank Passbook'],website:'https://pmkisan.gov.in',eligible:'yes'})}`;

  if(lq.includes('kcc')||lq.includes('kisan credit')) return `No worries, here's the KCC breakdown 👇<br/><br/>${formatSchemeCard({id:2,name:'Kisan Credit Card (KCC)',icon:'💳',desc:'Collateral-free credit up to ₹3 lakh at just 4% interest for farmers.',eligibility:['All farmers & tenant farmers','SHG members also eligible'],documents:['Aadhaar','Land Records','Bank Account'],website:'https://pmkisan.gov.in/kcc',eligible:'yes'})}`;

  if(lq.includes('ayushman')||lq.includes('pmjay')||lq.includes('health card')) return `Here's your health cover info 🏥<br/><br/>${formatSchemeCard({id:7,name:'Ayushman Bharat PM-JAY',icon:'🏥',desc:'₹5 lakh health cover per family/year — cashless at 25,000+ hospitals.',eligibility:['Based on SECC 2011 data','Rural D1–D5 categories','Urban: 11 occupational categories'],documents:['Aadhaar','Ration Card','PM-JAY eCard'],website:'https://pmjay.gov.in',eligible:'yes'})}`;

  if(lq.includes('mudra')||lq.includes('business loan')) return `Here's what fits for business loans 💼<br/><br/>${formatSchemeCard({id:17,name:'PM Mudra Yojana',icon:'💼',desc:'Loans up to ₹10 lakh — Shishu ₹50K, Kishore ₹5L, Tarun ₹10L. No collateral needed.',eligibility:['Any Indian citizen','Non-farm micro/small business','Women & SC/ST get priority'],documents:['Aadhaar','PAN Card','Business Proof','Bank Statement'],website:'https://www.mudra.org.in',eligible:'partial'})}`;

  if(lq.includes('pmay')||lq.includes('housing')||lq.includes('house')||lq.includes('awas')) return `Here are the best housing schemes for you 🏠<br/><br/>${formatSchemeCard({id:5,name:'PM Awas Yojana – Urban',icon:'🏠',desc:'Credit-linked subsidy up to ₹2.67 lakh for EWS/LIG/MIG home buyers.',eligibility:['No pucca house anywhere in India','EWS: income ≤ ₹3L/yr','LIG: ₹3–6L/yr'],documents:['Aadhaar','Income Certificate','Land/Allotment Papers'],website:'https://pmaymis.gov.in',eligible:'partial'})}`;

  if(lq.includes('pension')||lq.includes('atal')||lq.includes('retirement')) return `Planning for retirement? Smart move! 🧓<br/><br/>${formatSchemeCard({id:20,name:'Atal Pension Yojana',icon:'🧓',desc:'Guaranteed pension of ₹1,000–₹5,000/month at age 60 for unorganised workers.',eligibility:['Indian citizens 18–40 yrs','Not in organized sector','Non income-tax payer'],documents:['Aadhaar','Bank Account','Mobile Number'],website:'https://www.npscra.nsdl.co.in/apy',eligible:'yes'})}`;

  if(lq.includes('scholar')||lq.includes('education')||lq.includes('nsp')) return `Here are the top scholarships 📚<br/><br/>${formatSchemeCard({id:10,name:'National Scholarship Portal',icon:'📚',desc:'Merit & means-based scholarships for SC/ST/OBC/Minority students up to ₹25,000/year.',eligibility:['SC: family income < ₹2.5 lakh','OBC: income < ₹1 lakh','Merit: 80%+ in 12th board'],documents:['Aadhaar','Income Certificate','Marksheet','Bank Account'],website:'https://scholarships.gov.in',eligible:'yes'})}`;

  if(lq.includes('ujjwala')||lq.includes('lpg')||lq.includes('gas connection')) return `Free LPG scheme info 🍳<br/><br/>${formatSchemeCard({id:14,name:'Ujjwala Yojana 2.0',icon:'🍳',desc:'Free LPG connection + first refill for BPL/migrant women. Clean cooking fuel.',eligibility:['BPL women (SECC list)','SC/ST households','Migrant workers'],documents:['Aadhaar','BPL Card','Bank Account'],website:'https://www.pmuy.gov.in',eligible:'partial'})}`;

  if(lq.includes('shram')||lq.includes('eshram')||lq.includes('labour')||lq.includes('worker')) return `For workers & labourers 🔧<br/><br/>${formatSchemeCard({id:21,name:'e-SHRAM Portal',icon:'🔧',desc:'Free UAN card + ₹2 lakh accident insurance for unorganised workers.',eligibility:['Unorganised workers 16–59 yrs','Not EPFO/ESIC member','Non income-tax payer'],documents:['Aadhaar','Bank Account','Mobile Number'],website:'https://eshram.gov.in',eligible:'partial'})}`;

  if(lq.includes('food')||lq.includes('ration')||lq.includes('grain')||lq.includes('pmgkay')) return `Food security schemes 🌾<br/><br/><strong>PMGKAY:</strong> 5 kg free grain/person/month (till Dec 2028)<br/><strong>NFSA/PDS:</strong> Subsidized grain at ₹2–₹3/kg<br/><strong>Antyodaya:</strong> 35 kg grain @ ₹2/kg (poorest families)<br/><br/>📋 Need: Valid Ration Card (NFSA-listed). Apply at your nearest Fair Price Shop.`;

  if(lq.includes('jan dhan')||lq.includes('bank account')||lq.includes('jandhan')) return `Zero balance banking! 🏦<br/><br/>${formatSchemeCard({id:26,name:'Jan Dhan Yojana',icon:'🏦',desc:'Zero-balance savings account with RuPay card, ₹10K overdraft & ₹2L accident insurance.',eligibility:['Any Indian citizen','No minimum balance','No income criteria'],documents:['Aadhaar','Photo'],website:'https://pmjdy.gov.in',eligible:'yes'})}`;

  if(lq.includes('document')||lq.includes('certificate')||lq.includes('paper')) return `📄 <strong>Documents needed for most schemes:</strong><br/><br/>✅ <strong>Mandatory (always carry):</strong><br/>• Aadhaar Card (mobile-linked)<br/>• Bank Passbook (Aadhaar-linked)<br/>• Passport Photo (4 copies)<br/><br/>📋 <strong>Based on scheme:</strong><br/>• Income Certificate (from Tahsildar)<br/>• Caste/Community Certificate<br/>• Land Records (agriculture)<br/>• Ration Card (food/BPL schemes)<br/>• Domicile Certificate<br/><br/>💡 Go to the 📄 Documents tab to download forms!`;

  if(lq.includes('solar')||lq.includes('surya ghar')||lq.includes('pm kusum')) return `☀️ <strong>Solar & Energy Schemes:</strong><br/><br/>• <strong>PM Surya Ghar:</strong> 300 units free electricity via rooftop solar<br/>• <strong>PM KUSUM:</strong> Solar pumps with 60% subsidy for farmers<br/>• <strong>UJALA:</strong> LED bulbs at ₹10–₹70 (save ₹400/yr)<br/><br/>Apply at: pmsuryaghar.gov.in`;

  /* ── "Best schemes for me" / personalized query ── */
  if(lq.includes('best scheme')||lq.includes('suggest scheme')||lq.includes('scheme for me')||lq.includes('my scheme')||lq.includes('eligible scheme')||lq.includes('recommend')) {
    const missing = getMissingData();
    if(missing.length > 0) {
      const ask = missing.slice(0,2).join(' and ');
      return `Sure! Let me find the best schemes for you 👍<br/><br/>Can you quickly share your <strong>${ask}</strong>?<br/><br/>I'll match you with the top 3 schemes right away! 🎯`;
    }
    const matched = matchSchemesFromDB(3);
    if(!matched.length) return `Hmm, let me refine this for you 🤔<br/>Could you share a bit more about your <strong>occupation</strong> and <strong>income</strong>? I'll get the best matches!`;
    return `Here's what fits you best 🎯<br/><br/>${matched.map(formatSchemeCard).join('')}<br/>💬 Want details on any of these? Just ask!`;
  }

  /* ── "I am a farmer / student / worker" ── */
  const missingAfterExtract = getMissingData();
  if(WMEMORY.occupation && missingAfterExtract.length >= 2) {
    const ask = missingAfterExtract.slice(0,2).join(' and ');
    const occ = WMEMORY.occupation;
    const greet = lang==='ta' ? `நல்லது! ${occ} திட்டங்கள் தேடுகிறேன்.` : lang==='hi' ? `अच्छा! ${occ} योजनाएं खोज रहा हूँ।` : `Got it 👍`;
    return `${greet}<br/><br/>To find the <strong>best schemes for a ${occ}</strong>, I just need:<br/>📌 Your <strong>${ask}</strong><br/><br/>Share these and I'll match you instantly! 🎯`;
  }

  if(WMEMORY.occupation && missingAfterExtract.length === 0) {
    const matched = matchSchemesFromDB(3);
    if(matched.length) return `Here's what fits you best 🎯<br/><br/>${matched.map(formatSchemeCard).join('')}`;
  }

  /* ── Generic GOV fallback ── */
  return `Got it 👍 I can help with government schemes!<br/><br/>Tell me a bit about yourself:<br/>📌 Age, income, state, and occupation?<br/><br/>Or pick a topic below 👇<br/>• 🌾 Farmer schemes<br/>• 📚 Scholarships<br/>• 🏠 Housing<br/>• 🏥 Health<br/>• 💼 Business loans<br/>• 🧓 Pension`;
}

/* ── GENERAL MODE Response Engine ── */
function generalResponse(q, lang) {
  const lq = q.toLowerCase();

  /* Greetings */
  if(/^(hi|hello|hey|namaste|vanakkam|halo|good morning|good afternoon|good evening|yo)\b/i.test(lq)) {
    const greets = { en:`Hello! 👋 I'm <strong>Wellnexis Elite</strong> — your AI assistant for government schemes and more.<br/><br/>I can:<br/>• 🏛️ Find govt schemes you're eligible for<br/>• 💬 Answer any question (like ChatGPT)<br/>• 📋 Guide your applications step by step<br/><br/><strong>What can I help you with today?</strong>`, ta:`வணக்கம்! 👋 நான் <strong>Wellnexis Elite</strong>.<br/><br/>நான் செய்வது:<br/>• 🏛️ உங்களுக்கு ஏற்ற திட்டங்கள் கண்டுபிடிக்கிறேன்<br/>• 💬 எந்த கேள்விக்கும் பதில் சொல்கிறேன்<br/>• 📋 விண்ணப்பத்தில் வழிகாட்டுகிறேன்<br/><br/><strong>என்ன உதவி வேண்டும்?</strong>`, hi:`नमस्ते! 👋 मैं <strong>Wellnexis Elite</strong> हूँ।<br/><br/>मैं कर सकता हूँ:<br/>• 🏛️ आपके लिए सरकारी योजनाएं खोजना<br/>• 💬 कोई भी सवाल का जवाब देना<br/>• 📋 आवेदन में मदद करना<br/><br/><strong>आज क्या मदद चाहिए?</strong>` };
    return greets[lang]||greets.en;
  }

  /* Thanks */
  if(/thank|thanks|shukriya|nandri|dhanyavaad/i.test(lq)) return lang==='ta'?'மகிழ்ச்சி! 😊 வேறு ஏதாவது தேவையா?':lang==='hi'?'खुशी हुई! 😊 कुछ और चाहिए?':'Happy to help! 😊 Anything else?';

  /* Coding */
  if(lq.includes('python')||lq.includes('java')||lq.includes(' c ')||lq.includes('c++')||lq.includes('html')||lq.includes('css')||lq.includes('javascript')||lq.includes('sql')||lq.includes('code')||lq.includes('program')||lq.includes('function')||lq.includes('debug')||lq.includes('error')) {
    return `💻 <strong>Switching to Code Mode!</strong><br/><br/>I can help with:<br/>• Writing functions & programs<br/>• Debugging errors<br/>• Explaining concepts<br/>• Code reviews<br/><br/>Please share your code or describe what you need, and I'll get to it! 🚀<br/><br/><em>Note: For the best code help, describe your exact problem.</em>`;
  }

  /* What is / define */
  if(lq.startsWith('what is')||lq.startsWith('what are')||lq.startsWith('explain')||lq.startsWith('define')) {
    return `🤔 <strong>Let me explain that for you!</strong><br/><br/>I'm your AI assistant connected to India's welfare database + general knowledge.<br/><br/>Could you be a bit more specific? For example:<br/>• "What is PM Kisan scheme?"<br/>• "What is OBC category?"<br/>• "Explain Mudra loan process"<br/><br/>I'll give you a clear, simple answer! 👍`;
  }

  /* Math */
  if(lq.includes('calculate')||lq.includes('percent')||lq.includes('interest')||lq.includes('%')) {
    return `🔢 <strong>Calculation mode!</strong><br/><br/>Share the numbers and I'll calculate it for you.<br/><br/>Example: "Calculate 4% interest on ₹1 lakh for 1 year"<br/>Answer: ₹4,000 per year 💰`;
  }

  /* Fallback general */
  return `Got it! 💬<br/><br/>I'm <strong>Wellnexis Elite</strong> — I work best for:<br/>• 🏛️ Government schemes & eligibility<br/>• 📋 Application guidance<br/>• 💻 Coding help<br/>• 📖 General Q&A<br/><br/>Could you rephrase your question? I'll give you the best answer! 🎯`;
}

/* ── HYBRID MODE ── */
function hybridResponse(q, lang) {
  const parts = [];
  // Check if it contains both GOV + GENERAL signals
  const lq = q.toLowerCase();
  if(GENERAL_KEYWORDS.some(k=>lq.includes(k))) {
    parts.push(generalResponse(q, lang));
  }
  if(GOV_KEYWORDS.some(k=>lq.includes(k))) {
    parts.push('<hr style="border:1px solid var(--border);margin:14px 0"/>' + govResponse(q, lang));
  }
  return parts.join('') || govResponse(q, lang);
}

/* ── MULTILINGUAL WRAPPER ── */
function wrapLang(response, lang) {
  // Responses are already in correct lang based on intent engine
  return response;
}

/* ── MASTER RESPONSE FUNCTION ── */
function getBotResponse(q) {
  // Detect language
  const lang = detectLang(q);
  WMEMORY.lang = lang;
  // Extract memory from message
  extractMemory(q);
  // Classify intent
  const intent = detectIntent(q);
  // Route to correct engine
  if(intent === 'GOV')     return wrapLang(govResponse(q, lang),     lang);
  if(intent === 'HYBRID')  return wrapLang(hybridResponse(q, lang),  lang);
  return wrapLang(generalResponse(q, lang), lang);
}

/* ── Tamil & Hindi passthrough helpers ── */
function getTamilResponse(q) {
  const lq = q;
  if(lq.includes('திட்டம்')||lq.includes('திட்டங்கள்')||lq.includes('தகுதி')) return `நல்லது! 👍 உங்களுக்கு ஏற்ற திட்டங்கள் தேடுகிறேன்.<br/><br/>உங்கள் <strong>வயது, வருமானம், மாவட்டம்</strong> சொல்லுங்கள்.<br/>உடனே சிறந்த திட்டங்கள் கண்டுபிடிக்கிறேன்! 🎯`;
  if(lq.includes('விவசாய')||lq.includes('farmer')) return `விவசாயிகளுக்கான சிறந்த திட்டங்கள்:<br/><br/>• 🌾 PM Kisan - ₹6,000/ஆண்டு<br/>• 💳 Kisan Credit Card - 4% வட்டியில் கடன்<br/>• 🛡️ PM Fasal Bima - பயிர் காப்பீடு<br/>• 🌱 Soil Health Card - இலவச மண் பரிசோதனை<br/><br/>எந்த திட்டம் வேண்டும்? கேளுங்கள்! 😊`;
  return null;
}
function getHindiResponse(q) {
  const lq = q;
  if(lq.includes('योजना')||lq.includes('सब्सिडी')||lq.includes('पात्रता')) return `अच्छा! 👍 आपके लिए योजनाएं खोज रहा हूँ।<br/><br/>कृपया अपनी <strong>उम्र, आमदनी, राज्य</strong> बताएं।<br/>मैं तुरंत सबसे अच्छी योजनाएं बताऊंगा! 🎯`;
  if(lq.includes('किसान')||lq.includes('खेती')) return `किसानों के लिए बेहतरीन योजनाएं:<br/><br/>• 🌾 PM Kisan - ₹6,000/साल<br/>• 💳 Kisan Credit Card - 4% ब्याज पर कर्ज<br/>• 🛡️ PM Fasal Bima - फसल बीमा<br/>• 🌱 Soil Health Card - मुफ्त मिट्टी जांच<br/><br/>कौन सी योजना चाहिए? पूछिए! 😊`;
  return null;
}

function appendMsg(content, isUser) {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'msg' + (isUser ? ' user' : '');
  div.innerHTML = `<div class="msg-avatar ${isUser?'user-msg-avatar':'bot-msg-avatar'}">${isUser?'👤':'🤖'}</div>
    <div class="msg-bubble ${isUser?'user-bubble':'bot-bubble'}">${content}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping() {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'msg'; div.id = 'typingInd';
  div.innerHTML = `<div class="msg-avatar bot-msg-avatar">🤖</div>
    <div class="msg-bubble bot-bubble"><div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div></div>`;
  msgs.appendChild(div); msgs.scrollTop = msgs.scrollHeight;
}

function removeTyping() { const t = document.getElementById('typingInd'); if(t) t.remove(); }

function sendChat() {
  const inp = document.getElementById('chatInput');
  const q = inp.value.trim();
  if(!q) return;

  // Tamil/Hindi direct passthrough first
  const lang = detectLang(q);
  let directReply = null;
  if(lang==='ta') directReply = getTamilResponse(q);
  if(lang==='hi') directReply = getHindiResponse(q);

  appendMsg(q, true);
  inp.value = ''; inp.style.height = 'auto';

  // Smart delay: shorter for simple, longer for scheme queries
  const intent = detectIntent(q);
  const delay = intent==='GOV' ? 900 + Math.random()*600 : 500 + Math.random()*400;

  showTyping();
  setTimeout(() => {
    removeTyping();
    const reply = directReply || getBotResponse(q);
    appendMsg(reply, false);
    // Update memory display badge if in chat header
    updateMemoryBadge();
  }, delay);
}

function updateMemoryBadge() {
  const profile = [];
  if(WMEMORY.age)        profile.push('Age: '+WMEMORY.age);
  if(WMEMORY.occupation) profile.push(WMEMORY.occupation.charAt(0).toUpperCase()+WMEMORY.occupation.slice(1));
  if(WMEMORY.state)      profile.push(WMEMORY.state);
  const badge = document.getElementById('memoryBadge');
  if(badge && profile.length) { badge.textContent = '🧠 '+profile.join(' · '); badge.style.display='block'; }
}

function sendQuick(q) { document.getElementById('chatInput').value = q; navigate('chat'); setTimeout(sendChat, 100); }
function openChat(q) { navigate('chat'); setTimeout(()=>{ document.getElementById('chatInput').value = decodeURIComponent(q); sendChat(); }, 200); }
function autoResize(el) { el.style.height = 'auto'; el.style.height = Math.min(el.scrollHeight, 100) + 'px'; }

