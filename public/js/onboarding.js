(function(){
  /* ── District Data ── */
  const OB_DISTRICTS = {
    'Tamil Nadu':['Ariyalur','Chengalpattu','Chennai','Coimbatore','Cuddalore','Dharmapuri','Dindigul','Erode','Kallakurichi','Kancheepuram','Kanyakumari','Karur','Krishnagiri','Madurai','Mayiladuthurai','Nagapattinam','Namakkal','Nilgiris','Perambalur','Pudukkottai','Ramanathapuram','Ranipet','Salem','Sivaganga','Tenkasi','Thanjavur','Theni','Thoothukudi','Tiruchirappalli','Tirunelveli','Tirupathur','Tiruppur','Tiruvallur','Tiruvannamalai','Tiruvarur','Vellore','Villupuram','Virudhunagar'],
    'Maharashtra':['Ahmednagar','Akola','Amravati','Aurangabad','Beed','Bhandara','Buldhana','Chandrapur','Dhule','Gadchiroli','Gondia','Hingoli','Jalgaon','Jalna','Kolhapur','Latur','Mumbai City','Mumbai Suburban','Nagpur','Nanded','Nandurbar','Nashik','Osmanabad','Palghar','Parbhani','Pune','Raigad','Ratnagiri','Sangli','Satara','Sindhudurg','Solapur','Thane','Wardha','Washim','Yavatmal'],
    'Karnataka':['Bagalkot','Ballari','Belagavi','Bengaluru Rural','Bengaluru Urban','Bidar','Chamarajanagar','Chikballapur','Chikkamagaluru','Chitradurga','Dakshina Kannada','Davanagere','Dharwad','Gadag','Hassan','Haveri','Kalaburagi','Kodagu','Kolar','Koppal','Mandya','Mysuru','Raichur','Ramanagara','Shivamogga','Tumakuru','Udupi','Uttara Kannada','Vijayapura','Yadgir'],
    'Uttar Pradesh':['Agra','Aligarh','Ambedkar Nagar','Amethi','Amroha','Auraiya','Ayodhya','Azamgarh','Baghpat','Bahraich','Ballia','Balrampur','Banda','Barabanki','Bareilly','Basti','Bhadohi','Bijnor','Budaun','Bulandshahr','Chandauli','Chitrakoot','Deoria','Etah','Etawah','Farrukhabad','Fatehpur','Firozabad','Gautam Buddh Nagar','Ghaziabad','Ghazipur','Gonda','Gorakhpur','Hamirpur','Hapur','Hardoi','Hathras','Jalaun','Jaunpur','Jhansi','Kannauj','Kanpur Dehat','Kanpur Nagar','Kasganj','Kaushambi','Kushinagar','Lakhimpur Kheri','Lalitpur','Lucknow','Maharajganj','Mahoba','Mainpuri','Mathura','Mau','Meerut','Mirzapur','Moradabad','Muzaffarnagar','Pilibhit','Pratapgarh','Prayagraj','Raebareli','Rampur','Saharanpur','Sambhal','Sant Kabir Nagar','Shahjahanpur','Shamli','Shravasti','Siddharthnagar','Sitapur','Sonbhadra','Sultanpur','Unnao','Varanasi'],
    'Rajasthan':['Ajmer','Alwar','Banswara','Baran','Barmer','Bharatpur','Bhilwara','Bikaner','Bundi','Chittorgarh','Churu','Dausa','Dholpur','Dungarpur','Hanumangarh','Jaipur','Jaisalmer','Jalore','Jhalawar','Jhunjhunu','Jodhpur','Karauli','Kota','Nagaur','Pali','Pratapgarh','Rajsamand','Sawai Madhopur','Sikar','Sirohi','Sri Ganganagar','Tonk','Udaipur'],
    'West Bengal':['Alipurduar','Bankura','Birbhum','Cooch Behar','Dakshin Dinajpur','Darjeeling','Hooghly','Howrah','Jalpaiguri','Jhargram','Kalimpong','Kolkata','Maldah','Murshidabad','Nadia','North 24 Parganas','Paschim Bardhaman','Paschim Medinipur','Purba Bardhaman','Purba Medinipur','Purulia','South 24 Parganas','Uttar Dinajpur'],
    'Gujarat':['Ahmedabad','Amreli','Anand','Aravalli','Banaskantha','Bharuch','Bhavnagar','Botad','Chhota Udaipur','Dahod','Devbhoomi Dwarka','Gandhinagar','Gir Somnath','Jamnagar','Junagadh','Kheda','Kutch','Mahisagar','Mehsana','Morbi','Narmada','Navsari','Panchmahal','Patan','Porbandar','Rajkot','Sabarkantha','Surat','Surendranagar','Tapi','Vadodara','Valsad'],
    'Andhra Pradesh':['Alluri Sitharama Raju','Anakapalli','Ananthapuramu','Annamayya','Bapatla','Chittoor','Dr. B.R. Ambedkar Konaseema','East Godavari','Eluru','Guntur','Kakinada','Krishna','Kurnool','Nandyal','NTR','Palnadu','Parvathipuram Manyam','Prakasam','Sri Potti Sri Ramulu Nellore','Sri Sathya Sai','Srikakulam','Tirupati','Visakhapatnam','Vizianagaram','West Godavari','YSR Kadapa'],
    'Kerala':['Alappuzha','Ernakulam','Idukki','Kannur','Kasaragod','Kollam','Kottayam','Kozhikode','Malappuram','Palakkad','Pathanamthitta','Thiruvananthapuram','Thrissur','Wayanad'],
    'Telangana':['Adilabad','Bhadradri Kothagudem','Hyderabad','Jagtial','Jangaon','Jayashankar Bhupalpally','Jogulamba Gadwal','Kamareddy','Karimnagar','Khammam','Kumuram Bheem Asifabad','Mahabubabad','Mahabubnagar','Mancherial','Medak','Medchal–Malkajgiri','Mulugu','Nagarkurnool','Nalgonda','Narayanpet','Nirmal','Nizamabad','Peddapalli','Rajanna Sircilla','Ranga Reddy','Sangareddy','Siddipet','Suryapet','Vikarabad','Wanaparthy','Warangal Rural','Warangal Urban','Yadadri Bhuvanagiri'],
    'Bihar':['Araria','Arwal','Aurangabad','Banka','Begusarai','Bhagalpur','Bhojpur','Buxar','Darbhanga','East Champaran','Gaya','Gopalganj','Jamui','Jehanabad','Kaimur','Katihar','Khagaria','Kishanganj','Lakhisarai','Madhepura','Madhubani','Munger','Muzaffarpur','Nalanda','Nawada','Patna','Purnia','Rohtas','Saharsa','Samastipur','Saran','Sheikhpura','Sheohar','Sitamarhi','Siwan','Supaul','Vaishali','West Champaran'],
    'Madhya Pradesh':['Agar Malwa','Alirajpur','Anuppur','Ashoknagar','Balaghat','Barwani','Betul','Bhind','Bhopal','Burhanpur','Chhatarpur','Chhindwara','Damoh','Datia','Dewas','Dhar','Dindori','Guna','Gwalior','Harda','Hoshangabad','Indore','Jabalpur','Jhabua','Katni','Khandwa','Khargone','Mandla','Mandsaur','Morena','Narsinghpur','Neemuch','Niwari','Panna','Raisen','Rajgarh','Ratlam','Rewa','Sagar','Satna','Sehore','Seoni','Shahdol','Shajapur','Sheopur','Shivpuri','Sidhi','Singrauli','Tikamgarh','Ujjain','Umaria','Vidisha'],
    'Punjab':['Amritsar','Barnala','Bathinda','Faridkot','Fatehgarh Sahib','Fazilka','Ferozepur','Gurdaspur','Hoshiarpur','Jalandhar','Kapurthala','Ludhiana','Mansa','Moga','Mohali','Muktsar','Pathankot','Patiala','Rupnagar','Sangrur','Shaheed Bhagat Singh Nagar','Tarn Taran'],
    'Haryana':['Ambala','Bhiwani','Charkhi Dadri','Faridabad','Fatehabad','Gurugram','Hisar','Jhajjar','Jind','Kaithal','Karnal','Kurukshetra','Mahendragarh','Nuh','Palwal','Panchkula','Panipat','Rewari','Rohtak','Sirsa','Sonipat','Yamunanagar'],
    'Assam':['Bajali','Baksa','Barpeta','Biswanath','Bongaigaon','Cachar','Charaideo','Chirang','Darrang','Dhemaji','Dhubri','Dibrugarh','Dima Hasao','Goalpara','Golaghat','Hailakandi','Hojai','Jorhat','Kamrup','Kamrup Metropolitan','Karbi Anglong','Karimganj','Kokrajhar','Lakhimpur','Majuli','Morigaon','Nagaon','Nalbari','Sivasagar','Sonitpur','South Salmara-Mankachar','Tinsukia','Udalguri','West Karbi Anglong'],
    'Jharkhand':['Bokaro','Chatra','Deoghar','Dhanbad','Dumka','East Singhbhum','Garhwa','Giridih','Godda','Gumla','Hazaribagh','Jamtara','Khunti','Koderma','Latehar','Lohardaga','Pakur','Palamu','Ramgarh','Ranchi','Sahebganj','Seraikela Kharsawan','Simdega','West Singhbhum'],
    'Chhattisgarh':['Balod','Baloda Bazar','Balrampur','Bastar','Bemetara','Bijapur','Bilaspur','Dantewada','Dhamtari','Durg','Gariaband','Gaurela-Pendra-Marwahi','Janjgir-Champa','Jashpur','Kabirdham','Kanker','Khairagarh','Kondagaon','Korba','Koriya','Mahasamund','Manendragarh','Mohla-Manpur','Mungeli','Narayanpur','Raigarh','Raipur','Rajnandgaon','Sakti','Sarangarh-Bilaigarh','Sukma','Surajpur','Surguja'],
    'Uttarakhand':['Almora','Bageshwar','Chamoli','Champawat','Dehradun','Haridwar','Nainital','Pauri Garhwal','Pithoragarh','Rudraprayag','Tehri Garhwal','Udham Singh Nagar','Uttarkashi'],
    'Himachal Pradesh':['Bilaspur','Chamba','Hamirpur','Kangra','Kinnaur','Kullu','Lahaul and Spiti','Mandi','Shimla','Sirmaur','Solan','Una'],
    'Odisha':['Angul','Balangir','Balasore','Bargarh','Bhadrak','Boudh','Cuttack','Deogarh','Dhenkanal','Gajapati','Ganjam','Jagatsinghpur','Jajpur','Jharsuguda','Kalahandi','Kandhamal','Kendrapara','Kendujhar','Khordha','Koraput','Malkangiri','Mayurbhanj','Nabarangpur','Nayagarh','Nuapada','Puri','Rayagada','Sambalpur','Subarnapur','Sundargarh'],
    'Goa':['North Goa','South Goa'],
    'Arunachal Pradesh':['Anjaw','Changlang','Dibang Valley','East Kameng','East Siang','Kamle','Kra Daadi','Kurung Kumey','Lepa Rada','Lohit','Longding','Lower Dibang Valley','Lower Siang','Lower Subansiri','Namsai','Pakke-Kessang','Papum Pare','Shi Yomi','Siang','Tawang','Tirap','Upper Dibang Valley','Upper Siang','Upper Subansiri','West Kameng','West Siang'],
    'Manipur':['Bishnupur','Chandel','Churachandpur','Imphal East','Imphal West','Jiribam','Kakching','Kamjong','Kangpokpi','Noney','Pherzawl','Senapati','Tamenglong','Tengnoupal','Thoubal','Ukhrul'],
    'Meghalaya':['East Garo Hills','East Jaintia Hills','East Khasi Hills','Eastern West Khasi Hills','North Garo Hills','Ri Bhoi','South Garo Hills','South West Garo Hills','South West Khasi Hills','West Garo Hills','West Jaintia Hills','West Khasi Hills'],
    'Mizoram':['Aizawl','Champhai','Hnahthial','Khawzawl','Kolasib','Lawngtlai','Lunglei','Mamit','Saitual','Serchhip'],
    'Nagaland':['Chumoukedima','Dimapur','Kiphire','Kohima','Longleng','Mokokchung','Mon','Niuland','Noklak','Peren','Phek','Shamator','Tseminyü','Tuensang','Wokha','Zunheboto'],
    'Sikkim':['East Sikkim','North Sikkim','Pakyong','Soreng','South Sikkim','West Sikkim'],
    'Tripura':['Dhalai','Gomati','Khowai','North Tripura','Sepahijala','Sipahijala','South Tripura','Unokoti','West Tripura'],
    'Delhi':['Central Delhi','East Delhi','New Delhi','North Delhi','North East Delhi','North West Delhi','Shahdara','South Delhi','South East Delhi','South West Delhi','West Delhi'],
    'Jammu & Kashmir':['Anantnag','Bandipora','Baramulla','Budgam','Doda','Ganderbal','Jammu','Kathua','Kishtwar','Kulgam','Kupwara','Poonch','Pulwama','Rajouri','Ramban','Reasi','Samba','Shopian','Srinagar','Udhampur'],
    'Ladakh':['Kargil','Leh'],
    'Puducherry':['Karaikal','Mahe','Puducherry','Yanam'],
    'Chandigarh':['Chandigarh'],
    'Andaman & Nicobar Islands':['Nicobars','North & Middle Andaman','South Andaman'],
    'Dadra & Nagar Haveli':['Dadra & Nagar Haveli'],
    'Daman & Diu':['Daman','Diu'],
    'Lakshadweep':['Lakshadweep'],
  };

  let obCurrentStep = 1;
  const OB_TOTAL = 4;

  /* ══════════════════════════════════════════════
     ONBOARDING TRANSLATIONS — EN / TA / HI
  ══════════════════════════════════════════════ */
  const OB_TRANS = {
    en: {
      /* Header */
      welcome: 'Welcome to', subtitle: 'Please provide a few details so we can show the most relevant schemes for you.',
      /* Step titles */
      step1_title: '👤 Basic Information', step1_badge: 'Step 1 of 4',
      step2_title: '♿ Physical Status',   step2_badge: 'Step 2 of 4',
      step3_title: '🏷️ Caste Category',   step3_badge: 'Step 3 of 4',
      step4_title: '📋 Scheme Categories', step4_badge: 'Step 4 of 4',
      /* Step 1 labels */
      lbl_age: 'Age', lbl_gender: 'Gender', lbl_state: 'State', lbl_district: 'District', lbl_area: 'Area Type',
      ph_age: 'e.g. 32', ph_state: '— Select State —', ph_district: '— Select District —',
      btn_male: '♂ Male', btn_female: '♀ Female', btn_other: '⚧ Other',
      btn_urban: '🏙️ Urban', btn_rural: '🌾 Rural', btn_semiurban: '🏘️ Semi-Urban',
      err_age: 'Please enter a valid age (1–120)', err_gender: 'Please select gender',
      err_state: 'Please select a state', err_district: 'Please select a district', err_area: 'Please select area type',
      /* Step 2 */
      info_step2: 'ℹ️ This helps us identify disability benefit schemes, special reservations, and accessibility services available for you.',
      lbl_pc: 'Are you a Physically Challenged person?',
      btn_yes: '♿ Yes', btn_no: '🙆 No',
      lbl_distype: 'Type of Disability',
      err_pc: 'Please select an option', err_distype: 'Please select disability type',
      dis_visual:'👁️ Visual', dis_hearing:'👂 Hearing', dis_locomotor:'🦽 Locomotor',
      dis_intel:'🧠 Intellectual', dis_speech:'🗣️ Speech', dis_mental:'🩺 Mental Illness',
      dis_multi:'🔀 Multiple', dis_other:'📋 Other',
      /* Step 3 */
      info_step3: 'ℹ️ Your caste category determines eligibility for reservations, scholarships, and welfare schemes under Government of India policies.',
      lbl_caste: 'Select Your Category',
      err_caste: 'Please select your caste category',
      caste_gen:'🟡 General (UR)', caste_obc:'🟠 OBC', caste_sc:'🔵 SC (Scheduled Caste)',
      caste_st:'🟢 ST (Scheduled Tribe)', caste_ews:'🔴 EWS (Economically Weaker Section)',
      caste_dnt:'🟣 DNT / NT (Nomadic Tribe)', caste_mbc:'⚪ MBC (Most Backward Class)', caste_bc:'🔘 BC (Backward Class)',
      /* Step 4 */
      info_step4: 'ℹ️ Select all scheme categories you are interested in. You can choose multiple options.',
      lbl_scheme: 'Select Categories of Interest', scheme_multi: '(Multiple allowed)',
      err_scheme: 'Please select at least one scheme category',
      sc_edu:'🎓 Education & Scholarship', sc_health:'🏥 Health & Medical', sc_house:'🏠 Housing & Shelter',
      sc_emp:'💼 Employment & Skill', sc_agri:'🌾 Agriculture & Farming', sc_fin:'💰 Financial Assistance',
      sc_women:'👩 Women & Child Welfare', sc_senior:'👴 Senior Citizen Benefits', sc_dis:'♿ Disability Benefits',
      sc_msme:'🏭 MSME & Business', sc_food:'🍽️ Food & Nutrition', sc_elec:'⚡ Electricity & Water',
      sc_ins:'🛡️ Insurance & Pension', sc_other:'📦 Other Welfare',
      /* Footer */
      btn_back: '← Back', btn_next: 'Next →', btn_enter: '🚀 Enter Portal', step_of: 'of',
    },
    ta: {
      welcome: 'வரவேற்கிறோம்', subtitle: 'உங்களுக்கு மிகவும் பொருத்தமான திட்டங்களை காட்ட சில விவரங்களை வழங்கவும்.',
      step1_title: '👤 அடிப்படை தகவல்', step1_badge: 'படி 1 / 4',
      step2_title: '♿ உடல் நிலை',        step2_badge: 'படி 2 / 4',
      step3_title: '🏷️ சாதி வகை',         step3_badge: 'படி 3 / 4',
      step4_title: '📋 திட்ட வகைகள்',     step4_badge: 'படி 4 / 4',
      lbl_age: 'வயது', lbl_gender: 'பாலினம்', lbl_state: 'மாநிலம்', lbl_district: 'மாவட்டம்', lbl_area: 'பகுதி வகை',
      ph_age: 'எ.கா. 32', ph_state: '— மாநிலம் தேர்ந்தெடுக்கவும் —', ph_district: '— மாவட்டம் தேர்ந்தெடுக்கவும் —',
      btn_male: '♂ ஆண்', btn_female: '♀ பெண்', btn_other: '⚧ மற்றவர்',
      btn_urban: '🏙️ நகரம்', btn_rural: '🌾 கிராமம்', btn_semiurban: '🏘️ அரை நகரம்',
      err_age: 'சரியான வயதை உள்ளிடவும் (1–120)', err_gender: 'பாலினம் தேர்ந்தெடுக்கவும்',
      err_state: 'மாநிலம் தேர்ந்தெடுக்கவும்', err_district: 'மாவட்டம் தேர்ந்தெடுக்கவும்', err_area: 'பகுதி வகை தேர்ந்தெடுக்கவும்',
      info_step2: 'ℹ️ இது உங்களுக்கான மாற்றுத்திறனாளி சலுகைகள், சிறப்பு இடஒதுக்கீடுகள் மற்றும் அணுகல் சேவைகளை அடையாளம் காண உதவுகிறது.',
      lbl_pc: 'நீங்கள் மாற்றுத்திறனாளியா?',
      btn_yes: '♿ ஆம்', btn_no: '🙆 இல்லை',
      lbl_distype: 'மாற்றுத்திறன் வகை',
      err_pc: 'ஒரு விருப்பத்தை தேர்ந்தெடுக்கவும்', err_distype: 'மாற்றுத்திறன் வகை தேர்ந்தெடுக்கவும்',
      dis_visual:'👁️ பார்வை', dis_hearing:'👂 கேட்கும் திறன்', dis_locomotor:'🦽 இயக்கம்',
      dis_intel:'🧠 அறிவுசார்', dis_speech:'🗣️ பேச்சு', dis_mental:'🩺 மனநல நோய்',
      dis_multi:'🔀 பல வகை', dis_other:'📋 மற்றவை',
      info_step3: 'ℹ️ உங்கள் சாதி வகை இட ஒதுக்கீடு, உதவித்தொகை மற்றும் நலத் திட்டங்களுக்கான தகுதியை தீர்மானிக்கிறது.',
      lbl_caste: 'உங்கள் வகையை தேர்ந்தெடுக்கவும்',
      err_caste: 'உங்கள் சாதி வகையை தேர்ந்தெடுக்கவும்',
      caste_gen:'🟡 பொது (UR)', caste_obc:'🟠 OBC', caste_sc:'🔵 SC (பட்டியல் சாதி)',
      caste_st:'🟢 ST (பட்டியல் பழங்குடி)', caste_ews:'🔴 EWS (பொருளாதாரத்தில் பின்தங்கியவர்)',
      caste_dnt:'🟣 DNT / NT (நாடோடி பழங்குடி)', caste_mbc:'⚪ MBC (மிகவும் பிற்படுத்தப்பட்டவர்)', caste_bc:'🔘 BC (பிற்படுத்தப்பட்டவர்)',
      info_step4: 'ℹ️ நீங்கள் ஆர்வமுள்ள அனைத்து திட்ட வகைகளையும் தேர்ந்தெடுக்கவும். பல விருப்பங்களை தேர்வு செய்யலாம்.',
      lbl_scheme: 'ஆர்வமுள்ள வகைகளை தேர்ந்தெடுக்கவும்', scheme_multi: '(பல தேர்வுகள் அனுமதிக்கப்படும்)',
      err_scheme: 'குறைந்தது ஒரு திட்ட வகையையாவது தேர்ந்தெடுக்கவும்',
      sc_edu:'🎓 கல்வி & உதவித்தொகை', sc_health:'🏥 சுகாதாரம் & மருத்துவம்', sc_house:'🏠 வீட்டுவசதி',
      sc_emp:'💼 வேலைவாய்ப்பு & திறன்', sc_agri:'🌾 விவசாயம்', sc_fin:'💰 நிதி உதவி',
      sc_women:'👩 பெண்கள் & குழந்தை நலன்', sc_senior:'👴 முதியோர் சலுகை', sc_dis:'♿ மாற்றுத்திறன் சலுகை',
      sc_msme:'🏭 MSME & வணிகம்', sc_food:'🍽️ உணவு & ஊட்டச்சத்து', sc_elec:'⚡ மின்சாரம் & நீர்',
      sc_ins:'🛡️ காப்பீடு & ஓய்வூதியம்', sc_other:'📦 பிற நலன்கள்',
      btn_back: '← பின்', btn_next: 'அடுத்து →', btn_enter: '🚀 போர்ட்டலில் நுழைய', step_of: '/',
    },
    hi: {
      welcome: 'स्वागत है', subtitle: 'कृपया कुछ विवरण दें ताकि हम आपके लिए सबसे उपयुक्त योजनाएं दिखा सकें।',
      step1_title: '👤 बुनियादी जानकारी', step1_badge: 'चरण 1 / 4',
      step2_title: '♿ शारीरिक स्थिति',    step2_badge: 'चरण 2 / 4',
      step3_title: '🏷️ जाति वर्ग',          step3_badge: 'चरण 3 / 4',
      step4_title: '📋 योजना श्रेणियां',    step4_badge: 'चरण 4 / 4',
      lbl_age: 'आयु', lbl_gender: 'लिंग', lbl_state: 'राज्य', lbl_district: 'जिला', lbl_area: 'क्षेत्र प्रकार',
      ph_age: 'जैसे 32', ph_state: '— राज्य चुनें —', ph_district: '— जिला चुनें —',
      btn_male: '♂ पुरुष', btn_female: '♀ महिला', btn_other: '⚧ अन्य',
      btn_urban: '🏙️ शहरी', btn_rural: '🌾 ग्रामीण', btn_semiurban: '🏘️ अर्ध-शहरी',
      err_age: 'कृपया सही आयु दर्ज करें (1–120)', err_gender: 'कृपया लिंग चुनें',
      err_state: 'कृपया राज्य चुनें', err_district: 'कृपया जिला चुनें', err_area: 'कृपया क्षेत्र प्रकार चुनें',
      info_step2: 'ℹ️ यह हमें आपके लिए विकलांगता लाभ योजनाएं, विशेष आरक्षण और सुलभता सेवाओं की पहचान करने में मदद करता है।',
      lbl_pc: 'क्या आप शारीरिक रूप से अक्षम व्यक्ति हैं?',
      btn_yes: '♿ हाँ', btn_no: '🙆 नहीं',
      lbl_distype: 'विकलांगता का प्रकार',
      err_pc: 'कृपया एक विकल्प चुनें', err_distype: 'कृपया विकलांगता का प्रकार चुनें',
      dis_visual:'👁️ दृष्टि', dis_hearing:'👂 श्रवण', dis_locomotor:'🦽 लोकोमोटर',
      dis_intel:'🧠 बौद्धिक', dis_speech:'🗣️ वाणी', dis_mental:'🩺 मानसिक रोग',
      dis_multi:'🔀 बहु-विकलांगता', dis_other:'📋 अन्य',
      info_step3: 'ℹ️ आपकी जाति श्रेणी आरक्षण, छात्रवृत्ति और सरकारी कल्याण योजनाओं के लिए पात्रता निर्धारित करती है।',
      lbl_caste: 'अपनी श्रेणी चुनें',
      err_caste: 'कृपया अपनी जाति श्रेणी चुनें',
      caste_gen:'🟡 सामान्य (UR)', caste_obc:'🟠 OBC', caste_sc:'🔵 SC (अनुसूचित जाति)',
      caste_st:'🟢 ST (अनुसूचित जनजाति)', caste_ews:'🔴 EWS (आर्थिक रूप से कमजोर वर्ग)',
      caste_dnt:'🟣 DNT / NT (घुमंतू जनजाति)', caste_mbc:'⚪ MBC (अति पिछड़ा वर्ग)', caste_bc:'🔘 BC (पिछड़ा वर्ग)',
      info_step4: 'ℹ️ वे सभी योजना श्रेणियां चुनें जिनमें आप रुचि रखते हैं। आप एकाधिक विकल्प चुन सकते हैं।',
      lbl_scheme: 'रुचि की श्रेणियां चुनें', scheme_multi: '(एकाधिक चयन की अनुमति)',
      err_scheme: 'कृपया कम से कम एक योजना श्रेणी चुनें',
      sc_edu:'🎓 शिक्षा & छात्रवृत्ति', sc_health:'🏥 स्वास्थ्य & चिकित्सा', sc_house:'🏠 आवास & आश्रय',
      sc_emp:'💼 रोजगार & कौशल', sc_agri:'🌾 कृषि & खेती', sc_fin:'💰 वित्तीय सहायता',
      sc_women:'👩 महिला & बाल कल्याण', sc_senior:'👴 वरिष्ठ नागरिक लाभ', sc_dis:'♿ विकलांगता लाभ',
      sc_msme:'🏭 MSME & व्यवसाय', sc_food:'🍽️ भोजन & पोषण', sc_elec:'⚡ बिजली & जल',
      sc_ins:'🛡️ बीमा & पेंशन', sc_other:'📦 अन्य कल्याण',
      btn_back: '← वापस', btn_next: 'अगला →', btn_enter: '🚀 पोर्टल में प्रवेश', step_of: '/',
    }
  };

  function applyObTranslations(lang) {
    const T = OB_TRANS[lang] || OB_TRANS.en;
    const $ = id => document.getElementById(id);
    const setText = (id, text) => { const el=$(id); if(el) el.textContent=text; };
    const setHTML = (id, html) => { const el=$(id); if(el) el.innerHTML=html; };
    const setPlaceholder = (id, text) => { const el=$(id); if(el) el.placeholder=text; };
    const setFirstOption = (id, text) => { const el=$(id); if(el && el.options[0]) el.options[0].text=text; };

    /* ── Header ── */
    const hdr = document.querySelector('#obMainSteps .ob-header');
    if(hdr) {
      hdr.querySelector('h2').innerHTML = T.welcome+' <em style="color:#F5A623">Wellnexis</em>';
      hdr.querySelector('p').textContent = T.subtitle;
    }

    /* ── Step titles ── */
    const s1t = document.querySelector('#obStep1 .ob-step-title');
    if(s1t){ s1t.childNodes[0].textContent = T.step1_title+' '; s1t.querySelector('span').textContent = T.step1_badge; }
    const s2t = document.querySelector('#obStep2 .ob-step-title');
    if(s2t){ s2t.childNodes[0].textContent = T.step2_title+' '; s2t.querySelector('span').textContent = T.step2_badge; }
    const s3t = document.querySelector('#obStep3 .ob-step-title');
    if(s3t){ s3t.childNodes[0].textContent = T.step3_title+' '; s3t.querySelector('span').textContent = T.step3_badge; }
    const s4t = document.querySelector('#obStep4 .ob-step-title');
    if(s4t){ s4t.childNodes[0].textContent = T.step4_title+' '; s4t.querySelector('span').textContent = T.step4_badge; }

    /* ── Step 1 labels ── */
    const setLabel = (forEl, text) => {
      const lbl = document.querySelector('label[for="'+forEl+'"], .ob-field label.ob-label');
    };
    // Age
    const ageLabel = document.querySelector('#obStep1 .ob-field:first-child .ob-label');
    if(ageLabel) ageLabel.innerHTML = T.lbl_age+' <span class="ob-req">*</span>';
    setPlaceholder('obAge', T.ph_age);
    setText('obErrAge', T.err_age);

    // Gender
    const genderLabel = document.querySelector('#obStep1 .ob-row:first-child .ob-field:last-child .ob-label');
    if(genderLabel) genderLabel.innerHTML = T.lbl_gender+' <span class="ob-req">*</span>';
    const gBtns = document.querySelectorAll('#obGenderGroup .ob-radio-btn');
    if(gBtns[0]) gBtns[0].textContent = T.btn_male;
    if(gBtns[1]) gBtns[1].textContent = T.btn_female;
    if(gBtns[2]) gBtns[2].textContent = T.btn_other;
    setText('obErrGender', T.err_gender);

    // State
    const stateLabel = document.querySelector('#obStep1 .ob-row:nth-child(3) .ob-field:first-child .ob-label');
    if(stateLabel) stateLabel.innerHTML = T.lbl_state+' <span class="ob-req">*</span>';
    setFirstOption('obState', T.ph_state);
    setText('obErrState', T.err_state);

    // District
    const distLabel = document.querySelector('#obStep1 .ob-row:nth-child(3) .ob-field:last-child .ob-label');
    if(distLabel) distLabel.innerHTML = T.lbl_district+' <span class="ob-req">*</span>';
    setFirstOption('obDistrict', T.ph_district);
    setText('obErrDistrict', T.err_district);

    // Area
    const areaLabel = document.querySelector('#obStep1 > .ob-field:last-child .ob-label');
    if(areaLabel) areaLabel.innerHTML = T.lbl_area+' <span class="ob-req">*</span>';
    const aBtns = document.querySelectorAll('#obAreaGroup .ob-radio-btn');
    if(aBtns[0]) aBtns[0].textContent = T.btn_urban;
    if(aBtns[1]) aBtns[1].textContent = T.btn_rural;
    if(aBtns[2]) aBtns[2].textContent = T.btn_semiurban;
    setText('obErrArea', T.err_area);

    /* ── Step 2 ── */
    const info2 = document.querySelector('#obStep2 .ob-info-box');
    if(info2) info2.textContent = T.info_step2;
    const pcLabel = document.querySelector('#obStep2 .ob-label');
    if(pcLabel) pcLabel.innerHTML = T.lbl_pc;
    const pcBtns = document.querySelectorAll('#obPCGroup .ob-radio-btn');
    if(pcBtns[0]) pcBtns[0].innerHTML = T.btn_yes;
    if(pcBtns[1]) pcBtns[1].innerHTML = T.btn_no;
    setText('obErrPC', T.err_pc);
    const dtLabel = document.querySelector('#obDisabilityTypeWrap .ob-label');
    if(dtLabel) dtLabel.innerHTML = T.lbl_distype+' <span class="ob-req">*</span>';
    setText('obErrDisabilityType', T.err_distype);
    const dChips = document.querySelectorAll('#obDisabilityChips .ob-chip');
    const dKeys = ['dis_visual','dis_hearing','dis_locomotor','dis_intel','dis_speech','dis_mental','dis_multi','dis_other'];
    dChips.forEach((c,i)=>{ if(dKeys[i]) c.innerHTML='<span class="ob-chip-tick">✓</span> '+T[dKeys[i]]; });

    /* ── Step 3 ── */
    const info3 = document.querySelector('#obStep3 .ob-info-box');
    if(info3) info3.textContent = T.info_step3;
    const casteLabel = document.querySelector('#obStep3 .ob-label');
    if(casteLabel) casteLabel.innerHTML = T.lbl_caste+' <span class="ob-req">*</span>';
    setText('obErrCaste', T.err_caste);
    const cChips = document.querySelectorAll('#obCasteChips .ob-chip');
    const cKeys = ['caste_gen','caste_obc','caste_sc','caste_st','caste_ews','caste_dnt','caste_mbc','caste_bc'];
    cChips.forEach((c,i)=>{ if(cKeys[i]) c.innerHTML='<span class="ob-chip-tick">✓</span> '+T[cKeys[i]]; });

    /* ── Step 4 ── */
    const info4 = document.querySelector('#obStep4 .ob-info-box');
    if(info4) info4.textContent = T.info_step4;
    const schLabel = document.querySelector('#obStep4 .ob-label');
    if(schLabel) schLabel.innerHTML = T.lbl_scheme+' <span class="ob-req">*</span> <small style="font-weight:400;color:#8891AA">('+T.scheme_multi+')</small>';
    setText('obErrScheme', T.err_scheme);
    const sChips = document.querySelectorAll('#obSchemeChips .ob-chip');
    const sKeys = ['sc_edu','sc_health','sc_house','sc_emp','sc_agri','sc_fin','sc_women','sc_senior','sc_dis','sc_msme','sc_food','sc_elec','sc_ins','sc_other'];
    sChips.forEach((c,i)=>{ if(sKeys[i]) c.innerHTML='<span class="ob-chip-tick">✓</span> '+T[sKeys[i]]; });

    /* ── Footer buttons ── */
    const btnBack = $('obBtnBack'); if(btnBack) btnBack.textContent = T.btn_back;
    const btnNext = $('obBtnNext'); if(btnNext) btnNext.textContent = T.btn_next;
    const btnEnter = $('obBtnEnter'); if(btnEnter) btnEnter.textContent = T.btn_enter;
    const stepLabel = $('obCurStep');
    const stepWrap = stepLabel && stepLabel.parentElement;
    if(stepWrap) {
      const cur = stepLabel.textContent;
      stepWrap.innerHTML = `${T.step_of==='of'?'Step ':''}<span id="obCurStep">${cur}</span> ${T.step_of} 4`;
    }
  }

  /* ── Language Selection (Step 0) ── */
  let obSelectedLang = 'en';
  window.obSelectLang = function(lang, btn) {
    obSelectedLang = lang;
    document.querySelectorAll('.ob-lang-btn').forEach(b => b.classList.remove('ob-lang-sel'));
    btn.classList.add('ob-lang-sel');
  };
  window.obProceedFromLang = function() {
    // Apply language to the whole app
    document.querySelectorAll('.lang-btn').forEach(b => {
      b.classList.remove('active');
      if((obSelectedLang==='en'&&b.textContent.trim()==='EN')||
         (obSelectedLang==='ta'&&b.textContent.trim()==='த')||
         (obSelectedLang==='hi'&&b.textContent.trim()==='हि')) {
        b.classList.add('active');
      }
    });
    if(typeof applyTranslations === 'function') applyTranslations(obSelectedLang);
    // Apply OB-specific translations
    applyObTranslations(obSelectedLang);
    // Hide lang step, show main steps
    document.getElementById('obLangStep').style.display = 'none';
    document.getElementById('obMainSteps').style.display = 'block';
  };

  /* Populate districts on state change */
  window.obPopulateDistricts = function() {
    const state = document.getElementById('obState').value;
    const sel = document.getElementById('obDistrict');
    sel.innerHTML = '<option value="">— Select District —</option>';
    if(OB_DISTRICTS[state]) {
      OB_DISTRICTS[state].forEach(d => {
        const o = document.createElement('option');
        o.value = d; o.textContent = d;
        sel.appendChild(o);
      });
    }
  };

  /* Single-select radio buttons */
  window.obRadio = function(groupId, btn, val) {
    document.querySelectorAll('#'+groupId+' .ob-radio-btn').forEach(b => {
      b.classList.remove('ob-sel','ob-sel-yes','ob-sel-no');
    });
    btn.classList.add('ob-sel');
    btn.dataset.val = val;
  };

  /* Physically challenged radio (special colors) */
  window.obRadioPC = function(btn, type) {
    document.querySelectorAll('#obPCGroup .ob-radio-btn').forEach(b => {
      b.classList.remove('ob-sel','ob-sel-yes','ob-sel-no');
    });
    btn.classList.add(type==='yes' ? 'ob-sel-yes' : 'ob-sel-no');
    btn.dataset.val = type;
    document.getElementById('obDisabilityTypeWrap').style.display = type==='yes' ? 'block' : 'none';
  };

  /* Single-select chips */
  window.obChipSingle = function(groupId, chip) {
    document.querySelectorAll('#'+groupId+' .ob-chip').forEach(c => c.classList.remove('ob-chip-sel'));
    chip.classList.add('ob-chip-sel');
  };

  /* Multi-select chips */
  window.obChipMulti = function(chip) {
    chip.classList.toggle('ob-chip-sel');
  };

  /* Show / hide error */
  function obErr(id, show) {
    const el = document.getElementById(id);
    if(el) el.classList.toggle('ob-err-show', show);
  }

  /* Get selected radio value */
  function obGetRadio(groupId) {
    const btn = document.querySelector('#'+groupId+' .ob-radio-btn.ob-sel, #'+groupId+' .ob-radio-btn.ob-sel-yes, #'+groupId+' .ob-radio-btn.ob-sel-no');
    return btn ? (btn.dataset.val || btn.textContent.trim()) : '';
  }

  /* Validate step */
  function obValidate(step) {
    let ok = true;
    if(step === 1) {
      const age = parseInt(document.getElementById('obAge').value);
      const ageOk = !isNaN(age) && age >= 1 && age <= 120;
      obErr('obErrAge', !ageOk); if(!ageOk) ok=false;
      const genderOk = !!obGetRadio('obGenderGroup');
      obErr('obErrGender', !genderOk); if(!genderOk) ok=false;
      const stateOk = !!document.getElementById('obState').value;
      obErr('obErrState', !stateOk); if(!stateOk) ok=false;
      const districtOk = !!document.getElementById('obDistrict').value;
      obErr('obErrDistrict', !districtOk); if(!districtOk) ok=false;
      const areaOk = !!obGetRadio('obAreaGroup');
      obErr('obErrArea', !areaOk); if(!areaOk) ok=false;
    } else if(step === 2) {
      const pcVal = obGetRadio('obPCGroup');
      const pcOk = !!pcVal;
      obErr('obErrPC', !pcOk); if(!pcOk) ok=false;
      if(pcVal === 'yes') {
        const dtOk = !!document.querySelector('#obDisabilityChips .ob-chip-sel');
        obErr('obErrDisabilityType', !dtOk); if(!dtOk) ok=false;
      }
    } else if(step === 3) {
      const casteOk = !!document.querySelector('#obCasteChips .ob-chip-sel');
      obErr('obErrCaste', !casteOk); if(!casteOk) ok=false;
    } else if(step === 4) {
      const schemeOk = !!document.querySelector('#obSchemeChips .ob-chip-sel');
      obErr('obErrScheme', !schemeOk); if(!schemeOk) ok=false;
    }
    return ok;
  }

  /* Update dots and lines */
  function obUpdateProgress(step) {
    for(let i=1; i<=OB_TOTAL; i++) {
      const dot = document.getElementById('obDot'+i);
      if(!dot) continue;
      dot.classList.remove('active','done');
      if(i < step) dot.classList.add('done'), dot.textContent='✓';
      else if(i === step) dot.classList.add('active'), dot.textContent=i;
      else dot.textContent=i;
      if(i < OB_TOTAL) {
        const line = document.getElementById('obLine'+i);
        if(line) line.classList.toggle('done', i < step);
      }
    }
    const curStep = document.getElementById('obCurStep');
    if(curStep) curStep.textContent = step;
    const btnBack = document.getElementById('obBtnBack');
    if(btnBack) btnBack.style.visibility = step > 1 ? 'visible' : 'hidden';
    const isLast = step === OB_TOTAL;
    const btnNext = document.getElementById('obBtnNext');
    if(btnNext) btnNext.style.display = isLast ? 'none' : 'flex';
    const btnEnter = document.getElementById('obBtnEnter');
    if(btnEnter) btnEnter.style.display = isLast ? 'flex' : 'none';
  }

  /* Next */
  window.obNext = function() {
    if(!obValidate(obCurrentStep)) return;
    document.getElementById('obStep'+obCurrentStep).classList.remove('ob-active');
    obCurrentStep++;
    document.getElementById('obStep'+obCurrentStep).classList.add('ob-active');
    obUpdateProgress(obCurrentStep);
  };

  /* Back */
  window.obBack = function() {
    document.getElementById('obStep'+obCurrentStep).classList.remove('ob-active');
    obCurrentStep--;
    document.getElementById('obStep'+obCurrentStep).classList.add('ob-active');
    obUpdateProgress(obCurrentStep);
  };

  /* Enter Portal */
  window.obEnterPortal = function() {
    if(!obValidate(OB_TOTAL)) return;
    // Collect profile data
    const profile = {
      age: document.getElementById('obAge').value,
      gender: obGetRadio('obGenderGroup').replace(/[^\x20-\x7E]/g,'').trim(),
      state: document.getElementById('obState').value,
      district: document.getElementById('obDistrict').value,
      area: obGetRadio('obAreaGroup').replace(/[^\x20-\x7E]/g,'').trim(),
      physicallychallenged: obGetRadio('obPCGroup'),
      disabilityType: (document.querySelector('#obDisabilityChips .ob-chip-sel')?.textContent||'').trim(),
      caste: (document.querySelector('#obCasteChips .ob-chip-sel')?.textContent||'').trim(),
      schemeCategories: [...document.querySelectorAll('#obSchemeChips .ob-chip-sel')].map(c=>c.textContent.trim())
    };
    try { localStorage.setItem('welfareUserProfile', JSON.stringify(profile)); } catch(e){}
    // Hide overlay
    document.getElementById('ob-overlay').classList.add('ob-hidden');
    document.body.style.overflow='';
  };

  /* Block scroll while overlay is shown */
  document.addEventListener('DOMContentLoaded', function() {
    const ov = document.getElementById('ob-overlay');
    if(ov && !ov.classList.contains('ob-hidden')) {
      document.body.style.overflow='hidden';
    }
  });
})();

/* ═══════════════════════════════════════════════════════════════
   🏪 SHOP MODULE — Production-Level, Modular, Clean
   ─────────────────────────────────────────────────────────────
   Sections:
   1. State
   2. navigate() patch — adds 'shops' page support
   3. Browse page — load, filter, render, search
   4. Shop card renderer
   5. Edit shop (modal + save)
   6. Delete shop
   7. Toggle switch (optional shop in Basic Info)
   8. submitOptionalShop() — quick register from Basic Info
   9. ShopDB helper (unified Firestore + localStorage)
═══════════════════════════════════════════════════════════════ */

/* ── 1. Browse-page state ── */
const ShopState = {
  allShops   : [],   // full list loaded from DB
  filtered   : [],   // after search/filter/sort
  isLoading  : false,
};

/* ── 2. Patch navigate() to handle 'shops' page ── */
(function patchNavigate() {
  const _orig = window.navigate;
  window.navigate = function(page) {
    _orig(page);
    if (page === 'shops') loadBrowsePage();
  };
})();

/* ═══════════════════════════════════════
   3. BROWSE PAGE — Load from Firestore + localStorage
═══════════════════════════════════════ */

/**
 * Entry point when Shops tab is opened.
 * Shows skeletons → fetches data → renders cards.
 */
async function loadBrowsePage() {
  if (ShopState.isLoading) return;
  ShopState.isLoading = true;

  renderSkeletons('shopsBrowseGrid', 6);

  try {
    // Fetch approved shops only from Firestore for public browse
    // Also include the current owner's own shops (any status) so they can see/edit
    let approvedShops = [];
    if (fbReady) {
      const snap = await db.collection('shops').where('isApproved', '==', true).get();
      approvedShops = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      // Cache to IDB
      if (approvedShops.length) ShopIDB.putMany(approvedShops).catch(()=>{});
    } else {
      // IDB fallback — filter approved only
      const all = await ShopIDB.getAll();
      approvedShops = all.filter(s => s.isApproved === true);
    }

    // If owner is logged in, merge in their own unapproved shops too
    const _uid = (typeof sdCurrentUser !== 'undefined' && sdCurrentUser)
      ? sdCurrentUser.uid : null;
    if (_uid && fbReady) {
      try {
        const ownSnap = await db.collection('shops').where('ownerId', '==', _uid).get();
        const ownShops = ownSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        // Merge: avoid duplicates (approved shops may already be in approvedShops)
        const approvedIds = new Set(approvedShops.map(s => s.id));
        ownShops.forEach(s => { if (!approvedIds.has(s.id)) approvedShops.push(s); });
      } catch(e) {} // non-critical
    }

    ShopState.allShops = approvedShops.sort((a, b) => {
      const da = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(a.createdAt || 0);
      const db2 = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(b.createdAt || 0);
      return db2 - da;
    });

    populateBrowseDistrictFilter(ShopState.allShops);
    filterBrowseShops();
  } catch(e) {
    console.error('loadBrowsePage error:', e);
    renderBrowseError('shopsBrowseGrid', e.message);
  } finally {
    ShopState.isLoading = false;
  }
}

/** Populate district <select> from shop list */
function populateBrowseDistrictFilter(shops) {
  const sel = document.getElementById('shopsBrowseDistrict');
  if (!sel) return;
  const current = sel.value;
  // Keep first option, clear rest
  while (sel.options.length > 1) sel.remove(1);
  const districts = [...new Set(shops.map(s => s.district).filter(Boolean))].sort();
  districts.forEach(d => {
    const o = document.createElement('option');
    o.value = d; o.textContent = d;
    sel.appendChild(o);
  });
  sel.value = current;
}

/** Filter + sort shops based on toolbar controls */
function filterBrowseShops() {
  const search   = (document.getElementById('shopsBrowseSearch')?.value || '').toLowerCase();
  const category = document.getElementById('shopsBrowseCategory')?.value || '';
  const district = document.getElementById('shopsBrowseDistrict')?.value || '';
  const sort     = document.getElementById('shopsBrowseSort')?.value || 'newest';

  // Determine logged-in owner's UID for showing their own pending shops
  const _browseOwnerUid = (typeof sdCurrentUser !== 'undefined' && sdCurrentUser)
    ? (sdCurrentUser.uid || sdCurrentUser.email || null) : null;

  let list = ShopState.allShops.filter(s => {
    // PUBLIC VISIBILITY RULE:
    // Show shop if (a) it's approved, OR (b) the current user is the shop's owner
    const isOwnShop = _browseOwnerUid && (
      s.ownerId === _browseOwnerUid || s.ownerEmail === _browseOwnerUid
    );
    const isVisible = s.isApproved === true || isOwnShop;
    if (!isVisible) return false;

    const matchSearch =
      !search ||
      (s.shopName   || '').toLowerCase().includes(search) ||
      (s.ownerName  || '').toLowerCase().includes(search) ||
      (s.village    || '').toLowerCase().includes(search) ||
      (s.district   || '').toLowerCase().includes(search) ||
      (s.description|| '').toLowerCase().includes(search);

    const matchCat = !category || s.shopType === category;
    const matchDist = !district || s.district === district;
    return matchSearch && matchCat && matchDist;
  });

  // Sort
  if (sort === 'rating')  list.sort((a,b) => (b.rating||0) - (a.rating||0));
  else if (sort === 'name') list.sort((a,b) => (a.shopName||'').localeCompare(b.shopName||''));
  else list.sort((a,b) => {
    const da = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(a.createdAt || 0);
    const db2 = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(b.createdAt || 0);
    return db2 - da;
  });

  ShopState.filtered = list;

  const countEl = document.getElementById('shopsBrowseCount');
  if (countEl) countEl.textContent = list.length + ' shop' + (list.length !== 1 ? 's' : '');

  renderBrowseGrid(list);
}

/** Render the browse grid */
function renderBrowseGrid(shops) {
  const grid = document.getElementById('shopsBrowseGrid');
  if (!grid) return;

  if (!shops.length) {
    grid.innerHTML = `
      <div class="shops-empty-state">
        <span class="shops-empty-icon">🏪</span>
        <h3>No shops found</h3>
        <p>No shops match your search. Try different keywords or clear filters.</p>
        <button class="shops-empty-cta" onclick="openShopModal()">➕ Be the First to Register</button>
      </div>`;
    return;
  }

  grid.innerHTML = shops.map(s => renderBrowseCard(s)).join('');
}

/* ═══════════════════════════════════════
   4. SHOP CARD RENDERER
═══════════════════════════════════════ */

/** Build a single browse shop card */
function renderBrowseCard(shop) {
  const icon = shopTypeIcon(shop.shopType || 'General Shop');
  const isOwner = sdCurrentUser && (
    sdCurrentUser.uid === shop.ownerId ||
    sdCurrentUser.email === shop.ownerEmail
  );
  // Only show status badge if approved (public) or if owner viewing own pending shop
  const _cardOwnerUid = (typeof sdCurrentUser !== 'undefined' && sdCurrentUser)
    ? (sdCurrentUser.uid || null) : null;
  const _isOwnCard = _cardOwnerUid && (shop.ownerId === _cardOwnerUid || shop.ownerEmail === sdCurrentUser?.email);
  const statusClass = shop.isApproved ? 'sbc-status-verified'
    : (_isOwnCard ? 'sbc-status-pending' : '');
  const statusLabel = shop.isApproved ? '✅ Verified'
    : (_isOwnCard ? '⏳ Pending Approval' : '');

  const lat = parseFloat(shop.lat || 0);
  const lng = parseFloat(shop.lng || 0);
  const hasCoords = !!(lat && lng);
  const mapsUrl = hasCoords
    ? `https://maps.google.com/?q=${lat},${lng}`
    : `https://maps.google.com/?q=${encodeURIComponent([shop.address, shop.village, shop.district].filter(Boolean).join(', '))}`;

  // Embedded mini-map shown only when real GPS coordinates were saved
  const miniMap = hasCoords ? `
    <div class="sbc-map-wrap">
      <iframe
        class="sbc-map-iframe"
        src="https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed"
        allowfullscreen loading="lazy" title="Shop location map">
      </iframe>
      <a class="sbc-map-open-btn" href="${mapsUrl}" target="_blank" rel="noopener">
        📍 Open in Google Maps
      </a>
    </div>` : `
    <div class="sbc-map-wrap sbc-map-noloc">
      <span style="font-size:1.6rem">📍</span>
      <span style="font-size:.75rem;color:var(--text3)">Location not shared</span>
    </div>`;

  const stars = shop.rating
    ? `<span style="color:#F59E0B">${'★'.repeat(Math.round(shop.rating))}</span> ${(+shop.rating).toFixed(1)}`
    : '';

  const ownerActions = isOwner ? `
    <button class="sbc-btn sbc-btn-edit" onclick="openEditShop('${shop.id}')">✏️ Edit</button>
    <button class="sbc-btn sbc-btn-del"  onclick="deleteShop('${shop.id}', '${escHtml(shop.shopName)}')">🗑️</button>
  ` : '';

  // Pending-owner banner shown inside card
  const pendingBanner = (!shop.isApproved && _isOwnCard) ? `
    <div class="sbc-pending-banner">
      🕐 <strong>Awaiting Admin Approval</strong> — Only you can see this shop right now. It will go live once approved.
    </div>` : '';

  return `
  <div class="shop-browse-card${!shop.isApproved && _isOwnCard ? ' sbc-card-pending' : ''}" id="sbCard_${shop.id}">
    ${pendingBanner}
    <div class="sbc-header">
      <div class="sbc-icon-wrap">${icon}</div>
      <div class="sbc-title-wrap">
        <div class="sbc-name" title="${escHtml(shop.shopName)}">${escHtml(shop.shopName || '—')}</div>
        <span class="sbc-category">${escHtml(shop.shopType || 'General')}</span>
      </div>
      <span class="sbc-status-badge ${statusClass}">${statusLabel}</span>
    </div>
    ${miniMap}
    <div class="sbc-body">
      <div class="sbc-detail-row">
        <span class="sbc-detail-icon">👤</span>
        <span>${escHtml(shop.ownerName || '—')}</span>
      </div>
      <div class="sbc-detail-row">
        <span class="sbc-detail-icon">📍</span>
        <span>${escHtml([shop.village, shop.district].filter(Boolean).join(', ') || '—')}</span>
      </div>
      ${(shop.phone1 && (shop.isApproved || _isOwnCard)) ? `
      <div class="sbc-detail-row">
        <span class="sbc-detail-icon">📞</span>
        <a href="tel:${escHtml(shop.phone1)}" style="color:var(--green);text-decoration:none;font-weight:600">${escHtml(shop.phone1)}</a>
      </div>` : ''}
      ${shop.description ? `
      <div class="sbc-detail-row" style="color:var(--text3);font-size:.72rem;margin-top:4px;">
        <span class="sbc-detail-icon">ℹ️</span>
        <span style="overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical">${escHtml(shop.description)}</span>
      </div>` : ''}
      ${stars ? `<div style="margin-top:6px;font-size:.76rem;">${stars} <span style="color:var(--text3)">(${shop.reviewCount||0} reviews)</span></div>` : ''}
    </div>
    <div class="sbc-footer">
      <button class="sbc-btn sbc-btn-profile" onclick="viewShopProfile('${shop.id}')">👤 View Profile</button>
      <button class="sbc-btn sbc-btn-call" onclick="window.location.href='tel:${escHtml(shop.phone1||'')}'">📞 Call</button>
      ${hasCoords ? `<button class="sbc-btn sbc-btn-map" onclick="window.open('${mapsUrl}','_blank')">🗺️ Directions</button>` : ''}
      ${ownerActions}
    </div>
  </div>`;
}

/* Open shop full profile from Browse tab — opens the Shop Directory modal at the detail view */
function viewShopProfile(shopId) {
  openShopDirectory();
  setTimeout(() => openShopDetail(shopId), 200);
}

/* ═══════════════════════════════════════
   5. EDIT SHOP
═══════════════════════════════════════ */

/** Open edit modal pre-filled with shop data */
function openEditShop(shopId) {
  const shop = ShopState.allShops.find(s => s.id === shopId);
  if (!shop) { showToast('⚠️ Shop not found'); return; }

  document.getElementById('editShopId').value       = shopId;
  document.getElementById('editShopName').value     = shop.shopName    || '';
  document.getElementById('editOwnerName').value    = shop.ownerName   || '';
  document.getElementById('editShopType').value     = shop.shopType    || 'General Shop';
  document.getElementById('editPhone1').value       = shop.phone1      || '';
  document.getElementById('editPhone2').value       = shop.phone2      || '';
  document.getElementById('editEmail').value        = shop.email       || '';
  document.getElementById('editDistrict').value     = shop.district    || '';
  document.getElementById('editVillage').value      = shop.village     || '';
  document.getElementById('editAddress').value      = shop.address     || '';
  document.getElementById('editDescription').value  = shop.description || '';

  document.getElementById('editShopOverlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeEditShop() {
  document.getElementById('editShopOverlay').classList.add('hidden');
  document.body.style.overflow = '';
}

/** Save edited shop to Firestore + localStorage */
async function saveEditedShop() {
  const id = document.getElementById('editShopId').value;
  if (!id) return;

  const btn = document.getElementById('editSaveBtn');
  btn.disabled = true; btn.textContent = '⏳ Saving…';

  const updates = {
    shopName    : document.getElementById('editShopName').value.trim(),
    ownerName   : document.getElementById('editOwnerName').value.trim(),
    shopType    : document.getElementById('editShopType').value,
    phone1      : document.getElementById('editPhone1').value.trim(),
    phone2      : document.getElementById('editPhone2').value.trim(),
    email       : document.getElementById('editEmail').value.trim().toLowerCase(),
    district    : document.getElementById('editDistrict').value.trim(),
    village     : document.getElementById('editVillage').value.trim(),
    address     : document.getElementById('editAddress').value.trim(),
    description : document.getElementById('editDescription').value.trim(),
    updatedAt   : fbReady ? firebase.firestore.FieldValue.serverTimestamp() : new Date().toISOString(),
  };

  if (!updates.shopName || !updates.ownerName || !updates.phone1) {
    showToast('⚠️ Shop name, owner name and phone are required');
    btn.disabled = false; btn.textContent = '💾 Save Changes';
    return;
  }

  try {
    await ShopDB.update(id, updates);

    // Update local state
    const idx = ShopState.allShops.findIndex(s => s.id === id);
    if (idx > -1) ShopState.allShops[idx] = { ...ShopState.allShops[idx], ...updates };

    closeEditShop();
    filterBrowseShops();   // re-render with updated data
    showToast('✅ Shop updated successfully!');
  } catch(e) {
    showToast('❌ Update failed: ' + e.message);
  } finally {
    btn.disabled = false; btn.textContent = '💾 Save Changes';
  }
}

/* ═══════════════════════════════════════
   6. DELETE SHOP
═══════════════════════════════════════ */

async function deleteShop(shopId, shopName) {
  if (!confirm(`⚠️ Delete "${shopName}"? This cannot be undone.`)) return;

  try {
    await ShopDB.remove(shopId);
    ShopState.allShops = ShopState.allShops.filter(s => s.id !== shopId);
    filterBrowseShops();
    showToast('🗑️ Shop deleted');
  } catch(e) {
    showToast('❌ Delete failed: ' + e.message);
  }
}

/* ═══════════════════════════════════════
   7. TOGGLE SWITCH — Optional shop in Basic Info
═══════════════════════════════════════ */

function toggleShopSection() {
  const checkbox = document.getElementById('shopToggleInput');
  const section  = document.getElementById('optionalShopSection');
  const row      = document.getElementById('shopToggleRow');
  if (!checkbox || !section) return;

  // Sync checkbox (when label clicked, checkbox may not auto-toggle in all browsers)
  const isOpen = section.classList.contains('open');
  if (isOpen) {
    checkbox.checked = false;
    section.classList.remove('open');
    row.classList.remove('active');
  } else {
    checkbox.checked = true;
    section.classList.add('open');
    row.classList.add('active');
    // Scroll into view smoothly
    setTimeout(() => section.scrollIntoView({ behavior:'smooth', block:'nearest' }), 100);
  }
}

/* ═══════════════════════════════════════
   8. SUBMIT OPTIONAL SHOP (from Basic Info)
═══════════════════════════════════════ */

async function submitOptionalShop() {
  const msgEl = document.getElementById('optShopMsg');

  // Collect & validate
  const shopName  = (document.getElementById('optShopName')?.value   || '').trim();
  const ownerName = (document.getElementById('optOwnerName')?.value  || '').trim();
  const shopType  = document.getElementById('optShopType')?.value    || 'General Shop';
  const phone1    = (document.getElementById('optShopPhone')?.value  || '').trim();
  const district  = (document.getElementById('optShopDistrict')?.value || '').trim();
  const village   = (document.getElementById('optShopVillage')?.value  || '').trim();
  const address   = (document.getElementById('optShopAddress')?.value  || '').trim();
  const description = (document.getElementById('optShopDesc')?.value   || '').trim();

  if (!shopName || !ownerName || !phone1 || !district) {
    showOptShopMsg('⚠️ Please fill in Shop Name, Owner Name, Phone and District.', 'warn');
    return;
  }
  if (!/^[6-9]\d{9}$/.test(phone1)) {
    showOptShopMsg('⚠️ Enter a valid 10-digit Indian mobile number.', 'warn');
    return;
  }

  const btn = document.querySelector('#optionalShopSection .check-btn');
  if (btn) { btn.disabled = true; btn.textContent = '⏳ Saving…'; }

  const shopData = {
    shopName, ownerName, shopType, phone1, phone2: '',
    email: '', district, village, address, description,
    state: '', lat: null, lng: null,
    ownerId    : sdCurrentUser ? sdCurrentUser.uid   : 'guest',
    ownerEmail : sdCurrentUser ? sdCurrentUser.email : '',
    status     : 'Pending',
    isApproved : false,
    rating     : 0,
    reviewCount: 0,
  };

  try {
    const id = await ShopDB.save(shopData);
    shopData.id = id;

    // Update browse state if already loaded
    if (document.getElementById('page-shops')?.classList.contains('active')) {
      ShopState.allShops.unshift({ ...shopData, id });
      if (document.getElementById('page-shops')?.classList.contains('active')) {
        filterBrowseShops();
      }
    }

    showOptShopMsg(`🎉 Shop registered! ID: ${id}`, 'success');

    // Reset form fields
    ['optShopName','optOwnerName','optShopPhone','optShopDistrict',
     'optShopVillage','optShopAddress','optShopDesc'].forEach(id => {
       const el = document.getElementById(id);
       if (el) el.value = '';
     });

  } catch(e) {
    showOptShopMsg('❌ Save failed: ' + e.message, 'error');
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = '🛍️ Register Shop Now'; }
  }
}

function showOptShopMsg(text, type) {
  const el = document.getElementById('optShopMsg');
  if (!el) return;
  const styles = {
    success : 'background:rgba(29,155,94,.1);color:#0F6B3C;border:1px solid rgba(29,155,94,.2)',
    warn    : 'background:rgba(245,166,35,.1);color:#7A4F00;border:1px solid rgba(245,166,35,.2)',
    error   : 'background:rgba(212,64,42,.1);color:var(--secondary);border:1px solid rgba(212,64,42,.2)',
  };
  el.style.cssText = styles[type] || styles.warn;
  el.textContent = text;
  el.style.display = 'block';
  if (type === 'success') setTimeout(() => el.style.display = 'none', 5000);
}

/* ═══════════════════════════════════════
   9. ShopDB — Firestore + IndexedDB (unlimited local cache)
      Supports 100+ shops with no localStorage size limit
═══════════════════════════════════════ */

/* ── IndexedDB wrapper (replaces localStorage for shop cache) ──
   IndexedDB has no practical size limit (GB range) vs localStorage 5MB.
   All IDB ops are async and non-blocking.                              */
const ShopIDB = (() => {
  const DB_NAME    = 'WellnexisShopsDB';
  const DB_VERSION = 2;
  const STORE      = 'shops';
  let _db = null;

  function _open() {
    if (_db) return Promise.resolve(_db);
    return new Promise((res, rej) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = e => {
        const idb = e.target.result;
        if (!idb.objectStoreNames.contains(STORE)) {
          const store = idb.createObjectStore(STORE, { keyPath: 'id' });
          store.createIndex('createdAt',  'createdAt',  { unique: false });
          store.createIndex('district',   'district',   { unique: false });
          store.createIndex('shopType',   'shopType',   { unique: false });
          store.createIndex('isApproved', 'isApproved', { unique: false });
          store.createIndex('ownerId',    'ownerId',    { unique: false });
        }
      };
      req.onsuccess = e => { _db = e.target.result; res(_db); };
      req.onerror   = e => { console.error('IDB open error', e); rej(e); };
    });
  }

  return {
    /** Get all shops from IDB */
    async getAll() {
      try {
        const idb = await _open();
        return new Promise((res, rej) => {
          const tx  = idb.transaction(STORE, 'readonly');
          const req = tx.objectStore(STORE).getAll();
          req.onsuccess = () => res(req.result || []);
          req.onerror   = () => rej(req.error);
        });
      } catch(e) { return []; }
    },

    /** Get shops belonging to a specific owner */
    async getByOwner(ownerId) {
      try {
        const idb = await _open();
        return new Promise((res, rej) => {
          const tx  = idb.transaction(STORE, 'readonly');
          const idx = tx.objectStore(STORE).index('ownerId');
          const req = idx.getAll(ownerId);
          req.onsuccess = () => res(req.result || []);
          req.onerror   = () => rej(req.error);
        });
      } catch(e) { return []; }
    },

    /** Put (insert or update) one shop record */
    async put(shop) {
      try {
        const idb = await _open();
        return new Promise((res, rej) => {
          const tx  = idb.transaction(STORE, 'readwrite');
          const req = tx.objectStore(STORE).put(shop);
          req.onsuccess = () => res(req.result);
          req.onerror   = () => rej(req.error);
        });
      } catch(e) {}
    },

    /** Bulk-put array of shops (used after full Firestore sync) */
    async putMany(shops) {
      if (!shops || !shops.length) return;
      try {
        const idb = await _open();
        return new Promise((res, rej) => {
          const tx    = idb.transaction(STORE, 'readwrite');
          const store = tx.objectStore(STORE);
          shops.forEach(s => store.put(s));
          tx.oncomplete = () => res();
          tx.onerror    = () => rej(tx.error);
        });
      } catch(e) {}
    },

    /** Update specific fields on an existing record */
    async patch(id, updates) {
      try {
        const idb = await _open();
        return new Promise((res, rej) => {
          const tx    = idb.transaction(STORE, 'readwrite');
          const store = tx.objectStore(STORE);
          const getReq = store.get(id);
          getReq.onsuccess = () => {
            const existing = getReq.result;
            if (existing) {
              const putReq = store.put({ ...existing, ...updates });
              putReq.onsuccess = () => res();
              putReq.onerror   = () => rej(putReq.error);
            } else { res(); }
          };
          getReq.onerror = () => rej(getReq.error);
        });
      } catch(e) {}
    },

    /** Delete a shop by id */
    async delete(id) {
      try {
        const idb = await _open();
        return new Promise((res, rej) => {
          const tx  = idb.transaction(STORE, 'readwrite');
          const req = tx.objectStore(STORE).delete(id);
          req.onsuccess = () => res();
          req.onerror   = () => rej(req.error);
        });
      } catch(e) {}
    },

    /** How many shops are cached */
    async count() {
      try {
        const idb = await _open();
        return new Promise((res, rej) => {
          const tx  = idb.transaction(STORE, 'readonly');
          const req = tx.objectStore(STORE).count();
          req.onsuccess = () => res(req.result || 0);
          req.onerror   = () => rej(req.error);
        });
      } catch(e) { return 0; }
    }
  };
})();

/* ── ShopDB public API ── */
const ShopDB = {
  // Legacy LS_KEY kept for one-time migration only
  LS_KEY: 'Wellnexis_shops',

  /** One-time migration: move any old localStorage shops into IDB */
  async _migrateFromLS() {
    try {
      const raw = localStorage.getItem(this.LS_KEY);
      if (!raw) return;
      const arr = JSON.parse(raw);
      if (Array.isArray(arr) && arr.length) {
        await ShopIDB.putMany(arr);
        console.info('%c✅ ShopDB: migrated ' + arr.length + ' shops from localStorage → IndexedDB', 'color:green');
      }
      localStorage.removeItem(this.LS_KEY);
    } catch(e) {}
  },

  /** Fetch ALL shops.
   *  Strategy:
   *  1. Return IDB cache instantly (fast render).
   *  2. Sync from Firestore in background (batched, 500/page).
   *  3. Merge new/updated records back to IDB.
   *  Supports unlimited shops — Firestore handles thousands,
   *  IDB handles the local cache with no size limit.              */
  async fetchAll() {
    // Ensure old LS data is migrated first
    await this._migrateFromLS();

    // 1 — Return cached IDB data immediately
    const cached = await ShopIDB.getAll();

    // 2 — Background sync from Firestore (don't block UI)
    if (fbReady) {
      this._syncFromFirestore().catch(e => console.warn('ShopDB sync error:', e));
    }

    // If IDB has data, return it now; full sync updates it in background
    if (cached.length > 0) {
      return this._sort(cached);
    }

    // First load — wait for Firestore sync
    if (fbReady) {
      const fresh = await this._syncFromFirestore();
      return this._sort(fresh);
    }

    return [];
  },

  /** Full Firestore → IDB sync using batched pagination (500 per page).
   *  Returns all shops after sync.                                        */
  async _syncFromFirestore() {
    const PAGE_SIZE = 500;
    let allRemote   = [];
    let lastDoc     = null;

    try {
      while (true) {
        let query = db.collection('shops')
                      .orderBy('createdAt', 'desc')
                      .limit(PAGE_SIZE);
        if (lastDoc) query = query.startAfter(lastDoc);

        const snap = await query.get();
        if (snap.empty) break;

        const batch = snap.docs.map(d => {
          const data = d.data();
          return {
            ...data,
            id: d.id,
            createdAt: data.createdAt?.toDate
              ? data.createdAt.toDate().toISOString()
              : (data.createdAt || new Date().toISOString())
          };
        });

        allRemote = allRemote.concat(batch);
        await ShopIDB.putMany(batch);

        lastDoc = snap.docs[snap.docs.length - 1];
        if (snap.docs.length < PAGE_SIZE) break; // Last page
      }
      console.info('%c📦 ShopDB: synced ' + allRemote.length + ' shops from Firestore → IDB', 'color:#1B4FCC');
    } catch(e) {
      // Composite index may not exist yet — fall back to unordered fetch
      console.warn('ShopDB paginated sync failed, falling back to full fetch:', e.message);
      try {
        const snap = await db.collection('shops').get();
        allRemote = snap.docs.map(d => {
          const data = d.data();
          return {
            ...data,
            id: d.id,
            createdAt: data.createdAt?.toDate
              ? data.createdAt.toDate().toISOString()
              : (data.createdAt || new Date().toISOString())
          };
        });
        await ShopIDB.putMany(allRemote);
      } catch(e2) {
        console.error('ShopDB full fetch also failed:', e2);
      }
    }

    return allRemote;
  },

  /** Save a new shop to Firestore + IDB cache. Returns document ID. */
  async save(shopData) {
    if (fbReady) {
      shopData.createdAt = firebase.firestore.FieldValue.serverTimestamp();
      const ref  = await db.collection('shops').add(shopData);
      const isoNow = new Date().toISOString();
      await ShopIDB.put({ ...shopData, id: ref.id, createdAt: isoNow });
      console.info('✅ ShopDB: saved shop', ref.id, 'to Firestore + IDB');
      return ref.id;
    } else {
      // Offline mode — IDB only
      const id = 'SHOP-' + Date.now() + '-' + Math.random().toString(36).slice(2,6).toUpperCase();
      shopData.createdAt = new Date().toISOString();
      await ShopIDB.put({ ...shopData, id });
      console.warn('⚠️ ShopDB: saved shop to IDB only (Firebase offline). ID:', id);
      return id;
    }
  },

  /** Update fields on an existing shop */
  async update(id, updates) {
    if (fbReady) {
      await db.collection('shops').doc(id).update(updates);
    }
    await ShopIDB.patch(id, updates);
  },

  /** Delete a shop */
  async remove(id) {
    if (fbReady) {
      await db.collection('shops').doc(id).delete();
    }
    await ShopIDB.delete(id);
  },

  /** Get count of cached shops */
  async count() {
    return ShopIDB.count();
  },

  /** Get all shops owned by a user (fast IDB index lookup) */
  async getByOwner(ownerId) {
    // Try IDB first
    const local = await ShopIDB.getByOwner(ownerId);
    if (local.length) return this._sort(local);
    // Fallback to Firestore
    if (fbReady) {
      try {
        const snap = await db.collection('shops').where('ownerId', '==', ownerId).get();
        const shops = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        if (shops.length) await ShopIDB.putMany(shops);
        return this._sort(shops);
      } catch(e) { return []; }
    }
    return [];
  },

  /** Sort shops newest-first */
  _sort(arr) {
    return [...arr].sort((a, b) => {
      const ta = a.createdAt ? new Date(a.createdAt) : 0;
      const tb = b.createdAt ? new Date(b.createdAt) : 0;
      return tb - ta;
    });
  },

  // ── Keep these stubs so any old code calling _getLocal() doesn't crash ──
  _getLocal()     { return []; },
  _setLocal()     {},
  _appendLocal()  {},
};

// Run migration on page load (silent, one-time)
ShopDB._migrateFromLS().catch(()=>{});

/* ═══════════════════════════════════════
   UI HELPERS
═══════════════════════════════════════ */

/** Show skeleton loading cards */
function renderSkeletons(gridId, count) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = Array(count).fill(`
    <div class="shop-skel-card">
      <div style="display:flex;gap:10px;margin-bottom:12px">
        <div class="skel-line" style="width:46px;height:46px;border-radius:12px;flex-shrink:0"></div>
        <div style="flex:1"><div class="skel-line wide"></div><div class="skel-line short" style="margin-top:6px"></div></div>
      </div>
      <div class="skel-line wide"></div>
      <div class="skel-line med" style="margin-top:6px"></div>
      <div class="skel-line short" style="margin-top:6px"></div>
    </div>`).join('');
}

function renderBrowseError(gridId, msg) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = `
    <div class="shops-empty-state">
      <span class="shops-empty-icon">⚠️</span>
      <h3>Could not load shops</h3>
      <p style="color:var(--secondary);font-size:.78rem">${escHtml(msg)}</p>
      <button class="shops-empty-cta" onclick="loadBrowsePage()">🔄 Retry</button>
    </div>`;
}

/* ── Also patch the old submitShopRegistration to refresh browse page ── */
(function patchSubmitShopRegistration() {
  const _orig = window.submitShopRegistration;
  if (typeof _orig !== 'function') return;
  window.submitShopRegistration = async function() {
    await _orig();
    // After success, reload browse page if it was opened before
    if (document.getElementById('page-shops')?.classList.contains('active')) {
      ShopState.allShops = await ShopDB.fetchAll();
      if (document.getElementById('page-shops')?.classList.contains('active')) {
        filterBrowseShops();
      }
    }
  };
})();

