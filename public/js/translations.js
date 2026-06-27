
/* ── SAFE CONSOLE SHIM (some WebViews lack console.info) ── */
(function(){
  ['log','info','warn','error','debug'].forEach(function(m){
    if(typeof console === 'undefined') window.console = {};
    if(typeof console[m] !== 'function') console[m] = console.log || function(){};
  });
})();

/* ═══════════════════════════════════════════════
   FULL TRILINGUAL TRANSLATION SYSTEM
═══════════════════════════════════════════════ */
let currentLang = 'en';

const TRANSLATIONS = {
  en: {
    // Nav
    nav_home: '🏠 Home', nav_schemes: '📋 Schemes', nav_docs: '📄 Documents',
    nav_eligibility: '✅ Eligibility', nav_chat: '🤖 AI Chat',
    nav_home_label: 'Home', nav_schemes_label: 'Schemes', nav_docs_label: 'Documents',
    nav_eligibility_label: 'Eligibility', nav_chat_label: 'AI Chat',
    // Hero
    hero_badge: '🇮🇳 AI-Powered · 502 Schemes · Free Forever',
    hero_h1: 'Find Government Schemes<br/><em>Made for You</em>',
    hero_sub: 'Tell us about yourself once — our AI recommends the right schemes, checks your eligibility, and guides you step by step in applying.',
    search_ph: 'Search schemes, benefits, documents…',
    btn_search: '🔍 Search',
    // Stats
    stat_schemes: 'Total Schemes', stat_users: 'Users Helped',
    stat_states: 'States Covered', stat_success: 'Success Rate',
    // Categories
    cat_browse: 'Browse by Category', cat_recommended: 'Recommended for You',
    schemes_all: 'All Government Schemes',
    chip_all: '🔮 All', chip_all2: 'All',
    chip_agri: '🌾 Agriculture', chip_edu: '📚 Education', chip_health: '🏥 Health',
    chip_housing: '🏠 Housing', chip_women: '👩 Women', chip_biz: '💼 Business',
    chip_labour: '🔧 Labour', chip_pension: '🧓 Pension', chip_social: '🤝 Social',
    chip_financial: '💰 Financial', chip_infra: '⚡ Infrastructure', chip_science: '🔬 Science',
    // Buttons
    btn_seeall: 'See all →', btn_back: '← Back to Schemes',
    // Docs
    docs_title: 'Stationery & Government Documents',
    docs_infobox: 'ℹ️ Download official government application forms, declarations, and certificates. All forms are based on official government templates. Fill & print for submission.',
    dchip_all: 'All Documents', dchip_app: '📝 Application Forms',
    dchip_cert: '📜 Certificates', dchip_decl: '✍️ Declarations',
    dchip_id: '🪪 Identity Proofs', dchip_income: '💰 Income Proofs', dchip_prop: '🏠 Property Docs',
    // Eligibility
    elig_title: 'Eligibility Checker',
    elig_sub: "Fill your profile once — we'll match you with all eligible schemes instantly",
    form_name: 'Full Name', form_name_ph: 'e.g. Rajan Kumar',
    form_gender: 'Gender', form_age: 'Age', form_years: 'years',
    form_income: 'Annual Income (₹)', form_state: 'State',
    form_caste: 'Caste Category', form_occu: 'Occupation',
    form_land: 'Land Holding', form_special: 'Special Status',
    btn_check: '🔍 Check My Eligibility Now',
    opt_female: 'Female', opt_male: 'Male', opt_trans: 'Transgender',
    opt_inc1: 'Below ₹1 Lakh', opt_inc2: '₹1–2 Lakh', opt_inc3: '₹2–5 Lakh',
    opt_inc4: '₹5–10 Lakh', opt_inc5: 'Above ₹10 Lakh',
    opt_land0: 'No Land', opt_land1: 'Below 2 Acres', opt_land2: '2–5 Acres', opt_land3: 'Above 5 Acres',
    opt_sp0: 'None', opt_sp1: 'Physically Disabled', opt_sp2: 'Visually Impaired',
    opt_sp3: 'Pregnant / Lactating', opt_sp4: 'Widow', opt_sp5: 'Senior Citizen (60+)',
    // Chat
    chat_title: 'Wellnexis Assistant',
    chat_sub: 'Online · Powered by AI · Speaks EN / த / हि',
    chat_ph: 'Type your question in English, Tamil, or Hindi…',
    chat_welcome: "👋 நமஸ்காரம்! Hello! I'm <strong>Wellnexis</strong>, your personal government scheme assistant.<br/><br/>I can help you:<br/>• 🔍 Find schemes you're eligible for<br/>• 📋 Check required documents<br/>• 📝 Guide your application step-by-step<br/>• 📊 Track your benefits<br/>• 📄 Download official forms<br/><br/><strong>What would you like to know today?</strong>",
    qr_kisan: '🌾 PM Kisan', qr_women: '👩 Women Schemes', qr_scholar: '📚 Scholarships',
    qr_ayush: '🏥 Ayushman', qr_docs: '📄 Documents', qr_housing: '🏠 Housing', qr_mudra: '💼 Mudra Loan',
    // Dashboard
    dash_title: 'My Dashboard', dash_profile: '✅ Profile Complete',
    dash_progress: 'Application Progress', dash_activity: 'Recent Activity', dash_deadlines: 'Upcoming Deadlines',
    dash_eligible: 'Eligible Schemes', dash_applied: 'Applied',
    dash_benefits: 'Benefits Received', dash_pendingdocs: 'Pending Docs',
    dash_approved: 'Approved ✅', dash_review: 'Under Review', dash_docspending: 'Docs Pending',
    act_kisan: 'PM Kisan benefit credited', act_kisan_sub: '₹2,000 to bank account',
    act_doc: 'Document uploaded', act_doc_sub: 'Aadhaar verified',
    act_scheme: 'New scheme matched', act_deadline: 'Deadline reminder',
    act_deadline_sub: 'PMAY: 12 days left',
    time_2h: '2h ago', time_yest: 'Yesterday', time_3d: '3 days ago', time_5d: '5 days ago',
    // Dynamic JS strings
    modal_title: 'Details',
    elig_great: 'Great news,',
    elig_summary: "Based on your profile, here's your eligibility summary",
    elig_full: 'Fully Eligible', elig_partial: 'Partial Eligibility', elig_total: 'Total Matched',
    elig_schemes: 'Schemes', elig_apply: 'Fully eligible! Apply now →',
    elig_check_crit: 'Check criteria',
    btn_view_all: '🔍 View All Matched Schemes',
    elig_badge_yes: '✅ Eligible', elig_badge_partial: '⚠️ Check Criteria', elig_badge_no: '❌ Not Eligible',
    toast_dl: '📥 Downloading form…', toast_dl_ok: '✅ Form downloaded!',
    toast_gen: '📥 Generating application form…', toast_gen_ok: '✅ Application form downloaded!',
    toast_elig: '✅ Eligibility check complete!',
    toast_voice_err: '⚠️ Voice not supported in this browser', toast_listening: '🎤 Listening…',
    empty_schemes: 'No schemes found', deadline_left: 'left',
    det_benefits: '💰 Benefits', det_elig: '✅ Eligibility Criteria',
    det_docs: '📋 Required Documents', det_apply: '📝 How to Apply',
    det_website: 'Official Website',
    det_cat: 'Category', det_deadline: 'Deadline', det_notelig: '❌ Not Eligible If:',
    btn_dl_form: '📥 Download Application Form',
    btn_check_elig: '✅ Check Eligibility', btn_ask_ai: '🤖 Ask AI',
    doc_issued: 'Issued by: ', doc_valid: 'Valid: ',
    btn_dl_doc: '📥 Download', btn_dl_txt: '📥 Download .txt',
    watermark: 'GOVERNMENT OF INDIA',
    logo_sub: 'GOVERNMENT OF INDIA · SCHEME PORTAL',
    scheme_count_suffix: ' schemes',
    doc_count_suffix: ' documents',
  },
  ta: {
    nav_home: '🏠 முகப்பு', nav_schemes: '📋 திட்டங்கள்', nav_docs: '📄 ஆவணங்கள்',
    nav_eligibility: '✅ தகுதி', nav_chat: '🤖 AI உரையாடல்',
    nav_home_label: 'முகப்பு', nav_schemes_label: 'திட்டங்கள்', nav_docs_label: 'ஆவணங்கள்',
    nav_eligibility_label: 'தகுதி', nav_chat_label: 'AI உரையாடல்',
    hero_badge: '🇮🇳 AI-ஆல் இயங்கும் · 502+ திட்டங்கள் · இலவசம்',
    hero_h1: 'அரசு திட்டங்களை கண்டறியுங்கள்<br/><em>உங்களுக்காக</em>',
    hero_sub: 'உங்களை பற்றி ஒரு முறை சொல்லுங்கள் — எங்கள் AI சரியான திட்டங்களை பரிந்துரைக்கும், தகுதியை சரிபார்க்கும், விண்ணப்பிக்க உதவும்.',
    search_ph: 'திட்டங்கள், நன்மைகள், ஆவணங்கள் தேடுங்கள்…',
    btn_search: '🔍 தேடு',
    stat_schemes: 'மொத்த திட்டங்கள்', stat_users: 'உதவி பெற்றோர்',
    stat_states: 'மாநிலங்கள்', stat_success: 'வெற்றி விகிதம்',
    cat_browse: 'வகை வாரியாக காண்க', cat_recommended: 'உங்களுக்கான பரிந்துரைகள்',
    schemes_all: 'அனைத்து அரசு திட்டங்கள்',
    chip_all: '🔮 அனைத்தும்', chip_all2: 'அனைத்தும்',
    chip_agri: '🌾 விவசாயம்', chip_edu: '📚 கல்வி', chip_health: '🏥 சுகாதாரம்',
    chip_housing: '🏠 வீட்டுவசதி', chip_women: '👩 பெண்கள்', chip_biz: '💼 வணிகம்',
    chip_labour: '🔧 தொழிலாளர்', chip_pension: '🧓 ஓய்வூதியம்', chip_social: '🤝 சமூகம்',
    chip_financial: '💰 நிதி திட்டங்கள்', chip_infra: '⚡ உள்கட்டமைப்பு', chip_science: '🔬 அறிவியல்',
    btn_seeall: 'அனைத்தும் காண →', btn_back: '← திட்டங்களுக்கு திரும்பு',
    docs_title: 'அரசு ஆவணங்கள் & படிவங்கள்',
    docs_infobox: 'ℹ️ அதிகாரப்பூர்வ அரசு விண்ணப்பப் படிவங்கள், அறிவிப்புகள் மற்றும் சான்றிதழ்களை பதிவிறக்குங்கள். அனைத்து படிவங்களும் அதிகாரப்பூர்வ வார்ப்புருக்களை அடிப்படையாகக் கொண்டவை.',
    dchip_all: 'அனைத்து ஆவணங்கள்', dchip_app: '📝 விண்ணப்பப் படிவங்கள்',
    dchip_cert: '📜 சான்றிதழ்கள்', dchip_decl: '✍️ அறிவிப்புகள்',
    dchip_id: '🪪 அடையாள ஆவணங்கள்', dchip_income: '💰 வருமான ஆவணங்கள்', dchip_prop: '🏠 சொத்து ஆவணங்கள்',
    elig_title: 'தகுதி சரிபார்ப்பு',
    elig_sub: "உங்கள் விவரங்களை ஒரு முறை பூர்த்தி செய்யுங்கள் — பொருந்தும் திட்டங்களை உடனே காட்டுவோம்",
    form_name: 'முழு பெயர்', form_name_ph: 'எ.கா. ரஜன் குமார்',
    form_gender: 'பாலினம்', form_age: 'வயது', form_years: 'ஆண்டுகள்',
    form_income: 'வருடாந்திர வருமானம் (₹)', form_state: 'மாநிலம்',
    form_caste: 'சாதி வகை', form_occu: 'தொழில்',
    form_land: 'நிலம் வைத்திருப்பு', form_special: 'சிறப்பு நிலை',
    btn_check: '🔍 என் தகுதியை இப்போது சரிபார்',
    opt_female: 'பெண்', opt_male: 'ஆண்', opt_trans: 'திருநங்கை',
    opt_inc1: '₹1 லட்சத்திற்கு கீழ்', opt_inc2: '₹1–2 லட்சம்', opt_inc3: '₹2–5 லட்சம்',
    opt_inc4: '₹5–10 லட்சம்', opt_inc5: '₹10 லட்சத்திற்கு மேல்',
    opt_land0: 'நிலமில்லை', opt_land1: '2 ஏக்கருக்கு கீழ்', opt_land2: '2–5 ஏக்கர்', opt_land3: '5 ஏக்கருக்கு மேல்',
    opt_sp0: 'எதுவுமில்லை', opt_sp1: 'உடல் ஊனமுற்றோர்', opt_sp2: 'பார்வையற்றோர்',
    opt_sp3: 'கர்ப்பிணி / பாலூட்டும்', opt_sp4: 'விதவை', opt_sp5: 'மூத்த குடிமகன் (60+)',
    chat_title: 'Wellnexis உதவியாளர்',
    chat_sub: 'ஆன்லைன் · AI-ஆல் இயங்கும் · EN / த / हि',
    chat_ph: 'தமிழ், ஆங்கிலம் அல்லது இந்தியில் கேளுங்கள்…',
    chat_welcome: "👋 வணக்கம்! நான் <strong>Wellnexis</strong>, உங்கள் அரசு திட்ட உதவியாளர்.<br/><br/>நான் உதவுவேன்:<br/>• 🔍 தகுதியான திட்டங்களை கண்டறிய<br/>• 📋 தேவையான ஆவணங்களை சரிபார்க்க<br/>• 📝 விண்ணப்ப வழிகாட்டுதல்<br/>• 📊 நலன்களை கண்காணிக்க<br/>• 📄 அதிகாரப்பூர்வ படிவங்களை பதிவிறக்க<br/><br/><strong>இன்று என்ன தெரிந்துகொள்ள விரும்புகிறீர்கள்?</strong>",
    qr_kisan: '🌾 PM கிசான்', qr_women: '👩 பெண்கள் திட்டங்கள்', qr_scholar: '📚 உதவித்தொகைகள்',
    qr_ayush: '🏥 ஆயுஷ்மான்', qr_docs: '📄 ஆவணங்கள்', qr_housing: '🏠 வீட்டுவசதி', qr_mudra: '💼 முத்ரா கடன்',
    dash_title: 'என் டாஷ்போர்டு', dash_profile: '✅ சுயவிவரம் முழுமை',
    dash_progress: 'விண்ணப்ப நிலை', dash_activity: 'சமீபத்திய செயல்பாடு', dash_deadlines: 'வரவிருக்கும் கடைசி தேதிகள்',
    dash_eligible: 'தகுதியான திட்டங்கள்', dash_applied: 'விண்ணப்பித்தவை',
    dash_benefits: 'பெற்ற நலன்கள்', dash_pendingdocs: 'நிலுவையிலுள்ள ஆவணங்கள்',
    dash_approved: 'அனுமதிக்கப்பட்டது ✅', dash_review: 'மதிப்பாய்வில்', dash_docspending: 'ஆவணங்கள் நிலுவை',
    act_kisan: 'PM கிசான் நலன் வரவு வைக்கப்பட்டது', act_kisan_sub: '₹2,000 வங்கி கணக்கில்',
    act_doc: 'ஆவணம் பதிவேற்றப்பட்டது', act_doc_sub: 'ஆதார் சரிபார்க்கப்பட்டது',
    act_scheme: 'புதிய திட்டம் பொருந்தியது', act_deadline: 'கடைசி தேதி நினைவூட்டல்',
    act_deadline_sub: 'PMAY: 12 நாட்கள் மீதம்',
    time_2h: '2 மணி நேரம் முன்', time_yest: 'நேற்று', time_3d: '3 நாட்கள் முன்', time_5d: '5 நாட்கள் முன்',
    modal_title: 'விவரங்கள்',
    elig_great: 'நல்ல செய்தி,',
    elig_summary: 'உங்கள் சுயவிவரத்தின்படி, இது உங்கள் தகுதி சுருக்கம்',
    elig_full: 'முழு தகுதி', elig_partial: 'பகுதி தகுதி', elig_total: 'மொத்தம் பொருந்தியவை',
    elig_schemes: 'திட்டங்கள்', elig_apply: 'முழு தகுதி! இப்போது விண்ணப்பிக்கவும் →',
    elig_check_crit: 'நிபந்தனை சரிபார்க்கவும்',
    btn_view_all: '🔍 பொருந்தும் திட்டங்களை காண',
    elig_badge_yes: '✅ தகுதியானவர்', elig_badge_partial: '⚠️ நிபந்தனை சரிபார்', elig_badge_no: '❌ தகுதியில்லை',
    toast_dl: '📥 படிவம் பதிவிறக்கப்படுகிறது…', toast_dl_ok: '✅ படிவம் பதிவிறக்கப்பட்டது!',
    toast_gen: '📥 விண்ணப்பப் படிவம் உருவாக்கப்படுகிறது…', toast_gen_ok: '✅ விண்ணப்பப் படிவம் பதிவிறக்கப்பட்டது!',
    toast_elig: '✅ தகுதி சரிபார்ப்பு முடிந்தது!',
    toast_voice_err: '⚠️ இந்த உலாவியில் குரல் ஆதரிக்கப்படவில்லை', toast_listening: '🎤 கேட்கிறேன்…',
    empty_schemes: 'திட்டங்கள் எதுவும் கிடைக்கவில்லை', deadline_left: 'மீதம்',
    det_benefits: '💰 நன்மைகள்', det_elig: '✅ தகுதி நிபந்தனைகள்',
    det_docs: '📋 தேவையான ஆவணங்கள்', det_apply: '📝 விண்ணப்பிப்பது எப்படி',
    det_website: 'அதிகாரப்பூர்வ இணையதளம்',
    det_cat: 'வகை', det_deadline: 'கடைசி தேதி', det_notelig: '❌ தகுதியில்லாதோர்:',
    btn_dl_form: '📥 விண்ணப்பப் படிவம் பதிவிறக்கு',
    btn_check_elig: '✅ தகுதி சரிபார்', btn_ask_ai: '🤖 AI-யிடம் கேள்',
    doc_issued: 'வழங்குபவர்: ', doc_valid: 'செல்லுபடியாகும்: ',
    btn_dl_doc: '📥 பதிவிறக்கு', btn_dl_txt: '📥 .txt பதிவிறக்கு',
    watermark: 'இந்திய அரசு',
    logo_sub: 'இந்திய அரசு · திட்ட போர்டல்',
    scheme_count_suffix: ' திட்டங்கள்',
    doc_count_suffix: ' ஆவணங்கள்',
  },
  hi: {
    nav_home: '🏠 होम', nav_schemes: '📋 योजनाएं', nav_docs: '📄 दस्तावेज़',
    nav_eligibility: '✅ पात्रता', nav_chat: '🤖 AI चैट',
    nav_home_label: 'होम', nav_schemes_label: 'योजनाएं', nav_docs_label: 'दस्तावेज़',
    nav_eligibility_label: 'पात्रता', nav_chat_label: 'AI चैट',
    hero_badge: '🇮🇳 AI-संचालित · 502+ योजनाएं · निःशुल्क',
    hero_h1: 'सरकारी योजनाएं खोजें<br/><em>आपके लिए</em>',
    hero_sub: 'एक बार अपने बारे में बताएं — हमारा AI सही योजनाएं सुझाएगा, पात्रता जांचेगा, और आवेदन में मार्गदर्शन करेगा।',
    search_ph: 'योजनाएं, लाभ, दस्तावेज़ खोजें…',
    btn_search: '🔍 खोजें',
    stat_schemes: 'कुल योजनाएं', stat_users: 'लाभार्थी',
    stat_states: 'राज्य', stat_success: 'सफलता दर',
    cat_browse: 'श्रेणी के अनुसार देखें', cat_recommended: 'आपके लिए अनुशंसित',
    schemes_all: 'सभी सरकारी योजनाएं',
    chip_all: '🔮 सभी', chip_all2: 'सभी',
    chip_agri: '🌾 कृषि', chip_edu: '📚 शिक्षा', chip_health: '🏥 स्वास्थ्य',
    chip_housing: '🏠 आवास', chip_women: '👩 महिला', chip_biz: '💼 व्यवसाय',
    chip_labour: '🔧 श्रम', chip_pension: '🧓 पेंशन', chip_social: '🤝 सामाजिक',
    chip_financial: '💰 वित्तीय', chip_infra: '⚡ अवसंरचना', chip_science: '🔬 विज्ञान',
    btn_seeall: 'सभी देखें →', btn_back: '← योजनाओं पर वापस',
    docs_title: 'सरकारी दस्तावेज़ और फॉर्म',
    docs_infobox: 'ℹ️ आधिकारिक सरकारी आवेदन फॉर्म, घोषणाएं और प्रमाण पत्र डाउनलोड करें। सभी फॉर्म आधिकारिक सरकारी टेम्पलेट पर आधारित हैं। भरें और जमा करें।',
    dchip_all: 'सभी दस्तावेज़', dchip_app: '📝 आवेदन फॉर्म',
    dchip_cert: '📜 प्रमाण पत्र', dchip_decl: '✍️ घोषणाएं',
    dchip_id: '🪪 पहचान प्रमाण', dchip_income: '💰 आय प्रमाण', dchip_prop: '🏠 संपत्ति दस्तावेज़',
    elig_title: 'पात्रता जांचकर्ता',
    elig_sub: 'एक बार अपना विवरण भरें — हम तुरंत सभी पात्र योजनाएं दिखाएंगे',
    form_name: 'पूरा नाम', form_name_ph: 'जैसे राजन कुमार',
    form_gender: 'लिंग', form_age: 'आयु', form_years: 'वर्ष',
    form_income: 'वार्षिक आय (₹)', form_state: 'राज्य',
    form_caste: 'जाति वर्ग', form_occu: 'व्यवसाय',
    form_land: 'भूमि धारण', form_special: 'विशेष स्थिति',
    btn_check: '🔍 मेरी पात्रता अभी जांचें',
    opt_female: 'महिला', opt_male: 'पुरुष', opt_trans: 'तृतीय लिंग',
    opt_inc1: '₹1 लाख से कम', opt_inc2: '₹1–2 लाख', opt_inc3: '₹2–5 लाख',
    opt_inc4: '₹5–10 लाख', opt_inc5: '₹10 लाख से अधिक',
    opt_land0: 'भूमि नहीं', opt_land1: '2 एकड़ से कम', opt_land2: '2–5 एकड़', opt_land3: '5 एकड़ से अधिक',
    opt_sp0: 'कोई नहीं', opt_sp1: 'शारीरिक रूप से विकलांग', opt_sp2: 'दृष्टिबाधित',
    opt_sp3: 'गर्भवती / स्तनपान कराने वाली', opt_sp4: 'विधवा', opt_sp5: 'वरिष्ठ नागरिक (60+)',
    chat_title: 'Wellnexis सहायक',
    chat_sub: 'ऑनलाइन · AI-संचालित · EN / த / हि',
    chat_ph: 'अंग्रेजी, तमिल या हिंदी में अपना प्रश्न लिखें…',
    chat_welcome: "👋 नमस्ते! मैं <strong>Wellnexis</strong> हूं, आपका सरकारी योजना सहायक।<br/><br/>मैं आपकी मदद कर सकता हूं:<br/>• 🔍 पात्र योजनाएं खोजने में<br/>• 📋 आवश्यक दस्तावेज़ जांचने में<br/>• 📝 आवेदन में चरण-दर-चरण मार्गदर्शन<br/>• 📊 लाभों को ट्रैक करने में<br/>• 📄 आधिकारिक फॉर्म डाउनलोड करने में<br/><br/><strong>आज आप क्या जानना चाहते हैं?</strong>",
    qr_kisan: '🌾 PM किसान', qr_women: '👩 महिला योजनाएं', qr_scholar: '📚 छात्रवृत्तियां',
    qr_ayush: '🏥 आयुष्मान', qr_docs: '📄 दस्तावेज़', qr_housing: '🏠 आवास', qr_mudra: '💼 मुद्रा ऋण',
    dash_title: 'मेरा डैशबोर्ड', dash_profile: '✅ प्रोफ़ाइल पूर्ण',
    dash_progress: 'आवेदन प्रगति', dash_activity: 'हाल की गतिविधि', dash_deadlines: 'आगामी अंतिम तिथियां',
    dash_eligible: 'पात्र योजनाएं', dash_applied: 'आवेदित',
    dash_benefits: 'प्राप्त लाभ', dash_pendingdocs: 'लंबित दस्तावेज़',
    dash_approved: 'स्वीकृत ✅', dash_review: 'समीक्षाधीन', dash_docspending: 'दस्तावेज़ लंबित',
    act_kisan: 'PM किसान लाभ जमा हुआ', act_kisan_sub: '₹2,000 बैंक खाते में',
    act_doc: 'दस्तावेज़ अपलोड हुआ', act_doc_sub: 'आधार सत्यापित',
    act_scheme: 'नई योजना मिली', act_deadline: 'अंतिम तिथि अनुस्मारक',
    act_deadline_sub: 'PMAY: 12 दिन बचे',
    time_2h: '2 घंटे पहले', time_yest: 'कल', time_3d: '3 दिन पहले', time_5d: '5 दिन पहले',
    modal_title: 'विवरण',
    elig_great: 'अच्छी खबर,',
    elig_summary: 'आपकी प्रोफ़ाइल के आधार पर, यहां आपकी पात्रता सारांश है',
    elig_full: 'पूरी तरह पात्र', elig_partial: 'आंशिक पात्रता', elig_total: 'कुल मिलान',
    elig_schemes: 'योजनाएं', elig_apply: 'पूरी तरह पात्र! अभी आवेदन करें →',
    elig_check_crit: 'मानदंड जांचें',
    btn_view_all: '🔍 सभी मिलान योजनाएं देखें',
    elig_badge_yes: '✅ पात्र', elig_badge_partial: '⚠️ मानदंड जांचें', elig_badge_no: '❌ अपात्र',
    toast_dl: '📥 फॉर्म डाउनलोड हो रहा है…', toast_dl_ok: '✅ फॉर्म डाउनलोड हो गया!',
    toast_gen: '📥 आवेदन फॉर्म बन रहा है…', toast_gen_ok: '✅ आवेदन फॉर्म डाउनलोड हो गया!',
    toast_elig: '✅ पात्रता जांच पूरी हुई!',
    toast_voice_err: '⚠️ इस ब्राउज़र में आवाज़ समर्थित नहीं है', toast_listening: '🎤 सुन रहा हूं…',
    empty_schemes: 'कोई योजना नहीं मिली', deadline_left: 'बाकी',
    det_benefits: '💰 लाभ', det_elig: '✅ पात्रता मानदंड',
    det_docs: '📋 आवश्यक दस्तावेज़', det_apply: '📝 आवेदन कैसे करें',
    det_website: 'आधिकारिक वेबसाइट',
    det_cat: 'श्रेणी', det_deadline: 'अंतिम तिथि', det_notelig: '❌ अपात्र यदि:',
    btn_dl_form: '📥 आवेदन फॉर्म डाउनलोड करें',
    btn_check_elig: '✅ पात्रता जांचें', btn_ask_ai: '🤖 AI से पूछें',
    doc_issued: 'जारी करने वाला: ', doc_valid: 'वैध: ',
    btn_dl_doc: '📥 डाउनलोड', btn_dl_txt: '📥 .txt डाउनलोड',
    watermark: 'भारत सरकार',
    logo_sub: 'भारत सरकार · योजना पोर्टल',
    scheme_count_suffix: ' योजनाएं',
    doc_count_suffix: ' दस्तावेज़',
  }
};

function t(key){ return (TRANSLATIONS[currentLang]||TRANSLATIONS.en)[key] || (TRANSLATIONS.en)[key] || key; }

function applyTranslations(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  // Static data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if(key === 'hero_h1') { el.innerHTML = val; }
    else { el.textContent = val; }
  });
  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  // Update select options
  const optKeys = ['opt_female','opt_male','opt_trans'];
  const genderSel = document.getElementById('fgender');
  if(genderSel){ genderSel.options[0].text=t('opt_female'); genderSel.options[1].text=t('opt_male'); genderSel.options[2].text=t('opt_trans'); }
  const incomeSel = document.getElementById('fincome');
  if(incomeSel){ ['opt_inc1','opt_inc2','opt_inc3','opt_inc4','opt_inc5'].forEach((k,i)=>{ incomeSel.options[i].text=t(k); }); }
  const landSel = document.getElementById('fland');
  if(landSel){ ['opt_land0','opt_land1','opt_land2','opt_land3'].forEach((k,i)=>{ landSel.options[i].text=t(k); }); }
  const disSel = document.getElementById('fdis');
  if(disSel){ ['opt_sp0','opt_sp1','opt_sp2','opt_sp3','opt_sp4','opt_sp5'].forEach((k,i)=>{ disSel.options[i].text=t(k); }); }
  const occuSel = document.getElementById('foccu');
  if(occuSel){ 
    const occuKeys = { en:['Farmer','Student','Self-employed','Daily Wage Worker','Government Employee','Unemployed'],
      ta:['விவசாயி','மாணவர்','சுயதொழில்','நாள் கூலி தொழிலாளர்','அரசு ஊழியர்','வேலையில்லாதவர்'],
      hi:['किसान','छात्र','स्वरोजगार','दिहाड़ी मजदूर','सरकारी कर्मचारी','बेरोजगार'] };
    occuKeys[lang].forEach((v,i)=>{ if(occuSel.options[i]) occuSel.options[i].text=v; });
  }
  const casteSel = document.getElementById('fcaste');
  // Caste stays same in all langs (General/OBC/SC/ST)
  // Update age label suffix
  const ageLabelEl = document.getElementById('ageLabel');
  if(ageLabelEl && ageLabelEl.parentElement) {
    // The label text node after ageLabel span
    const label = ageLabelEl.closest('label');
    if(label) {
      const afterSpan = label.childNodes;
      afterSpan.forEach(n => { if(n.nodeType===3 && n.textContent.trim()) n.textContent = ' '+t('form_years'); });
    }
  }
  // Re-render dynamic sections
  if(document.getElementById('schemesGrid')) renderSchemes(
    document.getElementById('chipRow') ? 
      (currentCat==='All'?SCHEMES:SCHEMES.filter(s=>s.cat===currentCat)) : SCHEMES
  );
  if(document.getElementById('allSchemesGrid') && document.getElementById('page-schemes').classList.contains('active')) {
    renderAllSchemes(currentCat2==='All'?SCHEMES:SCHEMES.filter(s=>s.cat===currentCat2));
    document.getElementById('schemeCount').textContent = (currentCat2==='All'?SCHEMES.length:SCHEMES.filter(s=>s.cat===currentCat2).length)+t('scheme_count_suffix');
  }
  if(document.getElementById('docsGrid') && document.getElementById('page-docs').classList.contains('active')) {
    renderDocs(currentDocType==='All'?GOV_DOCS:GOV_DOCS.filter(d=>d.type===currentDocType));
  }
  // Update logo sub
  const logoSub = document.querySelector('.logo-sub');
  if(logoSub) logoSub.textContent = t('logo_sub');
  // Update chat welcome message if chat messages area only has the first message
  const chatMsgs = document.getElementById('chatMessages');
  if(chatMsgs && chatMsgs.querySelectorAll('.msg').length === 1) {
    const bubble = chatMsgs.querySelector('.bot-bubble');
    if(bubble) bubble.innerHTML = t('chat_welcome');
  }
}

// Track current filter states for re-render on lang switch
let currentCat = 'All';

let currentDocType = 'All';




