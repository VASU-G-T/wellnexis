/* ═══════════════════════════════════════════════
   COMPREHENSIVE GOVERNMENT SCHEMES DATA
═══════════════════════════════════════════════ */
const SCHEMES=[
/* AGRICULTURE */
{id:1,name:"PM Kisan Samman Nidhi",youtube:"https://youtu.be/I0mRbxv-0GE",icon:"🌾",iconBg:"rgba(29,155,94,.12)",cat:"Agriculture",desc:"₹6,000/year direct income support for small & marginal farmers in 3 installments of ₹2,000 each directly to bank accounts.",tags:["Farmer","₹6000/yr","Central","DBT"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open (Ongoing)",daysLeft:null,eligible:"yes",website:"https://pmkisan.gov.in",
  fullDetails:{
    ministry:"Ministry of Agriculture & Farmers Welfare",
    launched:"February 2019",
    benefit:"₹6,000 per year in 3 equal installments of ₹2,000",
    beneficiaries:"14+ Crore farmers",
    eligibility:["Small and marginal farmers","Landholding up to 2 hectares","Valid Aadhaar Card required","Must have active bank account","Land records must be verified by state govt"],
    notEligible:["Institutional land holders","Government employees (State/Central)","Income tax payers","Retired pensioners above ₹10,000/month","Ex-Ministers, MLAs, MPs"],
    applyProcess:["Visit pmkisan.gov.in or CSC Centre","Click on 'Farmers Corner'","Select 'New Farmer Registration'","Enter Aadhaar Number and State","Fill all details and submit","Documents verified by patwari/revenue officer"],
    documents:["Aadhaar Card (mandatory)","Bank Passbook (linked with Aadhaar)","Land Records / Khasra Khatauni","Mobile number linked to Aadhaar","Passport size photograph (2 copies)","Self-declaration form"],
    timeline:"Benefits transferred every 4 months"
  }
},
{id:2,name:"Kisan Credit Card (KCC)",icon:"💳",iconBg:"rgba(29,155,94,.12)",cat:"Agriculture",desc:"Collateral-free short-term credit up to ₹3 lakh for farmers at 4% interest rate for crop, post-harvest & consumption needs.",tags:["Farmer","Credit","4% Interest","Loan"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://pmkisan.gov.in/kcc",pdfUrl:"https://www.pnbindia.in/downloadprocess.aspx?fid=KCC_Application_Form.pdf",
  fullDetails:{
    ministry:"Ministry of Agriculture & RBI",
    launched:"1998 (Revamped 2020)",
    benefit:"Credit up to ₹3 lakh @ 4% interest (7% with 3% subvention)",
    beneficiaries:"7+ Crore farmers",
    eligibility:["All farmers (individual/joint cultivators)","Tenant farmers, oral lessees","Self Help Group farmers","Fishermen and animal husbandry farmers"],
    applyProcess:["Visit nearest bank or PACS","Fill KCC application form","Submit land documents","Bank verifies and issues card","ATM-enabled RuPay card provided"],
    documents:["Aadhaar Card","PAN Card","Land Records / Lease Agreement","Passport size photo","Bank account details","Income Certificate"],
    timeline:"Card issued within 14 working days of application"
  }
},
{id:3,name:"PM Fasal Bima Yojana",icon:"🛡️",iconBg:"rgba(245,166,35,.12)",cat:"Agriculture",desc:"Crop insurance scheme providing financial support to farmers for crop loss/damage due to unforeseen calamities like flood, drought, pest.",tags:["Farmer","Insurance","Crop","Central"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Season-wise",daysLeft:45,eligible:"yes",website:"https://pmfby.gov.in",pdfUrl:"https://pmfby.gov.in/pdf/PMFBY_Application_Form.pdf",
  fullDetails:{
    ministry:"Ministry of Agriculture",
    launched:"February 2016",
    benefit:"Full sum insured for crop loss. Premium: Kharif 2%, Rabi 1.5%, Commercial 5%",
    eligibility:["All farmers growing notified crops","Both loanee and non-loanee farmers","Tenant/share-cropper farmers allowed"],
    documents:["Aadhaar Card","Bank Passbook","Land Records / Sowing Certificate","Crop sowing declaration","Mobile number"],
    applyProcess:["Contact nearest bank or CSC","Fill insurance form before cut-off date","Pay applicable premium","Get policy document","Claim via bank or dedicated app"]
  }
},
{id:4,name:"Soil Health Card Scheme",icon:"🌱",iconBg:"rgba(29,155,94,.12)",cat:"Agriculture",desc:"Free soil testing and health cards to farmers with crop-wise nutrient management recommendations to improve soil health and productivity.",tags:["Farmer","Free","Soil","Testing"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://soilhealth.dac.gov.in",
  fullDetails:{
    ministry:"Ministry of Agriculture",
    launched:"2015",
    benefit:"Free soil health card with nutrient recommendations",
    eligibility:["All farmers across India","Soil test done every 3 years","No income limit"],
    documents:["Aadhaar Card","Land records","Mobile number"],
    applyProcess:["Contact agriculture department office","Request soil sample collection","Soil is tested at lab","Report emailed/SMSed within 30 days","Recommendations for fertilizer use provided"]
  }
},

/* HOUSING */
{id:5,name:"Pradhan Mantri Awas Yojana – Urban",icon:"🏠",iconBg:"rgba(27,79,204,.12)",cat:"Housing",desc:"Affordable housing for EWS/LIG/MIG categories in urban areas. Credit-linked subsidy up to ₹2.67 lakh on home loans.",tags:["Housing","Subsidy","Urban","EWS"],eligibleFor:["all"],incomeMax:18,deadline:"Dec 31, 2025",daysLeft:279,eligible:"partial",website:"https://pmaymis.gov.in",pdfUrl:"https://pmaymis.gov.in/PMAY_Application_Form.pdf",
  fullDetails:{
    ministry:"Ministry of Housing & Urban Affairs",
    launched:"June 2015",
    benefit:"Credit Linked Subsidy: EWS/LIG ₹2.67L, MIG-I ₹2.35L, MIG-II ₹2.30L",
    eligibility:["EWS income up to ₹3 lakh/year","LIG income ₹3–6 lakh/year","MIG-I income ₹6–12 lakh/year","MIG-II income ₹12–18 lakh/year","No pucca house anywhere in India","Beneficiary or spouse should not have owned a house"],
    documents:["Aadhaar Card (all family members)","Income Certificate","EWS/LIG Declaration (Affidavit)","Caste Certificate (if SC/ST)","Property allotment/sale agreement","Bank statement (6 months)","Passport size photo (4 copies)","Salary slips / ITR"],
    applyProcess:["Register at pmaymis.gov.in","Fill application with all details","Submit to Urban Local Body (ULB)","Verification by field officer","CLSS subsidy credited to loan account"]
  }
},
{id:6,name:"PMAY – Gramin (Rural)",icon:"🏡",iconBg:"rgba(27,79,204,.12)",cat:"Housing",desc:"Financial assistance for construction of pucca houses for BPL rural families. ₹1.20 lakh in plains, ₹1.30 lakh in hills/northeast.",tags:["Housing","Rural","BPL","Pucca House"],eligibleFor:["all"],incomeMax:2,deadline:"Open",daysLeft:null,eligible:"partial",website:"https://pmayg.nic.in",
  fullDetails:{
    ministry:"Ministry of Rural Development",
    launched:"April 2016",
    benefit:"₹1.20 lakh (plain) / ₹1.30 lakh (hills/NE) + MGNREGS labour",
    eligibility:["Selected from SECC 2011 database","Houseless or living in 0-1 room","No permanent house anywhere","SC/ST, minorities, ex-bonded labourers prioritised"],
    documents:["Aadhaar Card","Bank Passbook","SECC data verification","Caste certificate","BPL ration card"],
    applyProcess:["Beneficiaries selected from SECC list","GP verifies and recommends","Online application on AwaasSoft","Installments released after completion of stages","Geo-tagged photo of house construction submitted"]
  }
},

/* HEALTH */
{id:7,name:"Ayushman Bharat PM-JAY",icon:"🏥",iconBg:"rgba(212,64,42,.1)",cat:"Health",desc:"₹5 lakh health cover per family per year for secondary & tertiary care hospitalization. Cashless treatment at 25,000+ empanelled hospitals.",tags:["Health","₹5L Cover","Free","Cashless"],eligibleFor:["all"],incomeMax:2,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://pmjay.gov.in",pdfUrl:"https://pmjay.gov.in/sites/default/files/2018-09/PMJAY_Form.pdf",
  fullDetails:{
    ministry:"Ministry of Health & Family Welfare",
    launched:"September 2018",
    benefit:"₹5 lakh health cover per family (floater basis) per year",
    beneficiaries:"55+ Crore people (12 Crore families)",
    eligibility:["Based on SECC 2011 database","Rural: D1-D5 deprived categories","Urban: 11 occupational categories","Any size family covered (no cap)"],
    notEligible:["Government employees","Income taxpayers","Families with 2+ motor vehicles","AC rooms, refrigerators owners (economic criteria)"],
    documents:["Aadhaar Card","PMJAY e-card (downloadable)","Ration Card","Mobile number"],
    applyProcess:["Check eligibility at pmjay.gov.in","Visit nearest CSC or empanelled hospital","Get e-card generated","Use e-card for cashless treatment","No pre-approval needed for most procedures"],
    covers:["1,949+ medical procedures","Pre & post hospitalization (3 days/15 days)","Day care treatments","Follow-up consultations"]
  }
},
{id:8,name:"Janani Suraksha Yojana",icon:"🤱",iconBg:"rgba(212,64,42,.1)",cat:"Health",desc:"Cash assistance to poor pregnant women for institutional delivery to reduce maternal and neonatal mortality. ₹1,400 in rural areas.",tags:["Women","Maternity","Health","Cash"],eligibleFor:["all"],incomeMax:2,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nhm.gov.in/jsy",
  fullDetails:{
    ministry:"Ministry of Health & Family Welfare (NHM)",
    launched:"2005",
    benefit:"Rural LPS: ₹1,400 | Urban LPS: ₹1,000 | HPS States: ₹700",
    eligibility:["BPL pregnant women","Below 19 years of age (all categories)","Up to 2 live births only"],
    documents:["Aadhaar Card","BPL Ration Card","MCH Card","Bank Passbook","Certificate of institutional delivery"],
    applyProcess:["Register at nearest PHC/government hospital","Attend antenatal checkups","Deliver at empanelled institution","Cash transferred to bank after delivery"]
  }
},
{id:9,name:"Pradhan Mantri Matru Vandana Yojana",icon:"👶",iconBg:"rgba(212,64,42,.1)",cat:"Health",desc:"₹5,000 maternity benefit for first live birth to compensate wage loss and improve health practices. Paid in 3 installments.",tags:["Women","Maternity","₹5000","First Child"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://pmmvy.wcd.gov.in",pdfUrl:"https://wcd.nic.in/sites/default/files/PMMVY_Application_Form.pdf",
  fullDetails:{
    ministry:"Ministry of Women & Child Development",
    launched:"January 2017",
    benefit:"₹5,000 in 3 installments + JSY benefit for institutional delivery",
    eligibility:["Pregnant & lactating women","First live birth only","Age 19 years and above","Government employees not eligible"],
    documents:["Aadhaar Card","Bank Passbook (linked to Aadhaar)","MCP Card","Proof of pregnancy (Discharge Card)"],
    applyProcess:["Register at AWC/PHC within 150 days of last menstrual period","Fill PMMVY Form 1A","First installment after registration","Second after first antenatal checkup","Third after delivery and first vaccination"]
  }
},

/* EDUCATION */
{id:10,name:"National Scholarship Portal",icon:"📚",iconBg:"rgba(27,79,204,.12)",cat:"Education",desc:"Merit & means-based scholarships for SC/ST/OBC/Minority students from Class 1 to PhD. Up to ₹25,000 per year for higher studies.",tags:["Student","SC/ST","Scholarship","Central"],eligibleFor:["Student"],incomeMax:2.5,deadline:"Oct 31, 2025",daysLeft:218,eligible:"yes",website:"https://scholarships.gov.in",
  fullDetails:{
    ministry:"Ministry of Electronics & IT (NIC)",
    launched:"2015",
    benefit:"Varies by scheme: ₹1,000–₹25,000/year",
    majorSchemes:["Post-Matric Scholarship for SC (100% fee reimbursement)","Pre-Matric Scholarship for OBC","NSP for Minorities (Maulana Azad)","Merit-cum-Means Scholarship","Central Sector Scholarship (CSSS)"],
    eligibility:["SC students: family income below ₹2.5 lakh","OBC: income below ₹1 lakh","Minorities: income below ₹2 lakh","Merit: 80%+ in 12th board exam","Age: 18–25 for most scholarships"],
    documents:["Aadhaar Card","Income Certificate (current year)","Caste/Community Certificate","Previous year marksheet","Bonafide Certificate from Institute","Bank Passbook (student's own account)","Admission fee receipt"],
    applyProcess:["Register at scholarships.gov.in","Select applicable scholarship","Fill application with all details","Upload required documents","Institute verification","State nodal officer verification","Scholarship disbursed to bank"]
  }
},
{id:11,name:"PM e-VIDYA",icon:"💻",iconBg:"rgba(27,79,204,.12)",cat:"Education",desc:"Multi-mode access to digital/online education using DTH channels, radio, and digital resources for students with limited internet access.",tags:["Student","Digital","Online","Free"],eligibleFor:["Student"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://diksha.gov.in",
  fullDetails:{
    ministry:"Ministry of Education",
    launched:"May 2020",
    benefit:"Free digital education content for Classes 1–12",
    eligibility:["All school students across India","No income or caste criteria"],
    documents:["No documents required","Optional: Aadhaar for personalized services"],
    applyProcess:["Download DIKSHA app","Access e-content for respective class","Watch PM eVIDYA DTH channels","Access SWAYAM platform for higher education"]
  }
},
{id:12,name:"Samagra Shiksha Abhiyan",icon:"🏫",iconBg:"rgba(27,79,204,.12)",cat:"Education",desc:"Free and compulsory education for children 6–14 years under RTE Act. Free textbooks, uniforms, mid-day meals for government school students.",tags:["Student","Free","RTE","School"],eligibleFor:["Student"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://samagra.education.gov.in",
  fullDetails:{
    ministry:"Ministry of Education",
    benefit:"Free textbooks, uniforms, mid-day meals, and education for all",
    eligibility:["All children aged 6–14 years","Attending government/government-aided schools"],
    documents:["Birth Certificate","Proof of residence","Transfer Certificate (if applicable)"],
    applyProcess:["Enroll in nearest government school","Benefits provided automatically by school"]
  }
},

/* WOMEN */
{id:13,name:"Sukanya Samriddhi Yojana",icon:"👧",iconBg:"rgba(212,64,42,.1)",cat:"Women",desc:"Small savings scheme for girl child with 8.2% annual interest (highest among small savings). Tax-free maturity. Tax benefit under 80C.",tags:["Women","Girl Child","8.2% Interest","Tax Free"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://www.indiapost.gov.in",pdfUrl:"https://www.indiapost.gov.in/VAS/DOP_PDFFiles/SSA.pdf",
  fullDetails:{
    ministry:"Ministry of Finance / India Post",
    launched:"January 2015",
    benefit:"8.2% interest (Q1 2025), maturity at 21 years, partial withdrawal at 18",
    eligibility:["Girl child below 10 years of age","Only 2 accounts per family (max 3 for twins/triplets)","Parent/guardian opens account","No income limit"],
    documents:["Girl child's Birth Certificate","Parent/guardian Aadhaar & PAN","Recent passport photos","Address proof"],
    applyProcess:["Visit Post Office or authorized bank","Fill SSY opening form","Minimum deposit ₹250/year","Maximum ₹1.5 lakh/year","Account matures when girl turns 21"]
  }
},
{id:14,name:"Ujjwala Yojana 2.0",icon:"🍳",iconBg:"rgba(245,166,35,.12)",cat:"Women",desc:"Free LPG connection + first refill & stove to BPL/migrant women. Clean cooking fuel for improved health and environment.",tags:["Women","BPL","LPG","Free Connection"],eligibleFor:["all"],incomeMax:1,deadline:"Open",daysLeft:null,eligible:"partial",website:"https://www.pmuy.gov.in",pdfUrl:"https://www.pmuy.gov.in/docs/UjjwalaApplicationForm.pdf",
  fullDetails:{
    ministry:"Ministry of Petroleum & Natural Gas",
    launched:"2016 (Ujjwala 2.0: 2021)",
    benefit:"Free LPG connection + first refill free + stove subsidy",
    beneficiaries:"9.5 Crore connections",
    eligibility:["BPL women (SECC list)","SC/ST households","PM Awas Yojana beneficiaries","PMAY (G)","Antyodaya households","Migrant workers (Ujjwala 2.0)"],
    documents:["Aadhaar Card","BPL Ration Card","Bank Passbook","Passport size photo","Self-declaration (for migrants)"],
    applyProcess:["Visit nearest LPG distributor","Fill Ujjwala application form","Submit documents","Verification done by distributor","Connection provided within 30 days"]
  }
},
{id:15,name:"Beti Bachao Beti Padhao",icon:"🎀",iconBg:"rgba(212,64,42,.1)",cat:"Women",desc:"Mission to address declining Child Sex Ratio and promote welfare and education of girl child. Awareness, scholarships, sports support.",tags:["Women","Girl Child","Education","Awareness"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://wcd.nic.in/bbbp",
  fullDetails:{
    ministry:"Ministry of Women & Child Development",
    launched:"January 2015",
    benefit:"Multiple benefits: scholarships, sports kits, awareness programs",
    eligibility:["All girl children in India","Focus districts with low CSR","Convergence with SSY, JSY, RTE"],
    applyProcess:["Benefits flow through linked schemes","Contact district WCD office for specific benefits"]
  }
},
{id:16,name:"Mahila Shakti Kendra",icon:"💪",iconBg:"rgba(212,64,42,.1)",cat:"Women",desc:"Community empowerment through trained volunteers. Skill development, awareness on government schemes, digital literacy for rural women.",tags:["Women","Skill","Rural","Empowerment"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://wcd.nic.in",
  fullDetails:{
    ministry:"Ministry of Women & Child Development",
    launched:"2017",
    benefit:"Skill training, awareness, digital literacy, legal aid",
    eligibility:["Rural women across India","Focus on 115 aspirational districts"],
    applyProcess:["Contact nearest Anganwadi Centre","Block level Mahila Shakti Kendra office","District WCD office"]
  }
},

/* BUSINESS */
{id:17,name:"PM Mudra Yojana",icon:"💼",iconBg:"rgba(245,166,35,.12)",cat:"Business",desc:"Loans up to ₹10 lakh for non-farm micro & small enterprises. 3 categories: Shishu (₹50K), Kishore (₹5L), Tarun (₹10L). No collateral.",tags:["Business","Loan","No Collateral","Micro"],eligibleFor:["Self-employed"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"partial",website:"https://www.mudra.org.in",pdfUrl:"https://www.mudra.org.in/Forms/MUDRA-Application-Form.pdf",
  fullDetails:{
    ministry:"Ministry of Finance / MUDRA",
    launched:"April 2015",
    benefit:"Shishu: up to ₹50,000 | Kishore: ₹50K–₹5L | Tarun: ₹5L–₹10L",
    beneficiaries:"45+ Crore loans disbursed",
    eligibility:["Any Indian citizen starting/expanding business","Non-farm micro/small enterprises","Women entrepreneurs preferred","SC/ST/OBC encouraged"],
    documents:["Aadhaar Card","PAN Card","Business Plan / Project Report","Bank Statement (6 months)","Identity & Address Proof","Caste Certificate (if applicable)","Passport size photo"],
    applyProcess:["Visit any bank, MFI, or NBFC","Fill MUDRA loan application","Submit business plan","Collateral not required for Shishu","Loan approved within 7–10 days","RuPay MUDRA debit card provided"]
  }
},
{id:18,name:"Stand Up India",icon:"🚀",iconBg:"rgba(11,138,138,.1)",cat:"Business",desc:"Loans ₹10 lakh–₹1 crore for SC/ST and Women entrepreneurs to set up greenfield enterprises in manufacturing, services, trading sector.",tags:["Business","SC/ST","Women","₹1Cr Loan"],eligibleFor:["Self-employed"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"partial",website:"https://www.standupmitra.in",pdfUrl:"https://www.standupmitra.in/Downloads/StandUpIndiaForm.pdf",
  fullDetails:{
    ministry:"Ministry of Finance / SIDBI",
    launched:"April 2016",
    benefit:"Composite loan: ₹10 lakh to ₹1 crore (75% of project cost)",
    eligibility:["SC/ST borrowers","Women entrepreneurs","Above 18 years of age","Greenfield project (first business)"],
    documents:["Aadhaar + PAN Card","Caste Certificate","Business plan with financial projections","Identity/Address proof","Property documents (if any)"],
    applyProcess:["Apply online at standupmitra.in","Or visit any scheduled commercial bank branch","Application reviewed by bank","Site inspection & approval","Loan disbursed in installments"]
  }
},
{id:19,name:"Startup India Initiative",icon:"🌟",iconBg:"rgba(245,166,35,.12)",cat:"Business",desc:"Recognized startups get tax exemptions (3 years), fast track patent processing, relaxed labour compliance, and government procurement priority.",tags:["Business","Startup","Tax Benefit","Recognition"],eligibleFor:["Self-employed"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"partial",website:"https://www.startupindia.gov.in",
  fullDetails:{
    ministry:"DPIIT, Ministry of Commerce",
    launched:"January 2016",
    benefit:"Tax holiday 3 years, patent fee 80% discount, easy winding up",
    eligibility:["Entity incorporated as pvt ltd, LLP, or partnership","Upto 10 years old from incorporation","Annual turnover not exceeding ₹100 crore","Working on innovative solution"],
    documents:["Incorporation Certificate","PAN","Business description","Website/product link"],
    applyProcess:["Apply at startupindia.gov.in","Get DPIIT recognition","Tax exemptions applied automatically","Access fund of funds, credits"]
  }
},

/* LABOUR & PENSION */
{id:20,name:"Atal Pension Yojana",icon:"🧓",iconBg:"rgba(27,79,204,.12)",cat:"Pension",desc:"Guaranteed pension of ₹1,000–₹5,000/month at age 60 for unorganised sector workers. Government co-contributes 50% or ₹1,000/year.",tags:["Pension","Labour","Retirement","Guaranteed"],eligibleFor:["Daily Wage Worker","Self-employed"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://www.npscra.nsdl.co.in/apy",
  fullDetails:{
    ministry:"Ministry of Finance / PFRDA",
    launched:"June 2015",
    benefit:"₹1,000–₹5,000/month pension guaranteed from age 60",
    eligibility:["Indian citizens 18–40 years","Not covered under statutory social security","Must have bank account","Income tax payers not eligible from Oct 2022"],
    documents:["Aadhaar Card","Bank Passbook (savings)","Mobile number (linked to Aadhaar)"],
    applyProcess:["Visit bank or post office","Fill APY enrolment form","Auto-debit mandate setup","Monthly/quarterly premium deducted","NPS PRAN issued"]
  }
},
{id:21,name:"e-SHRAM Portal",icon:"🔧",iconBg:"rgba(27,79,204,.12)",cat:"Labour",desc:"National database for unorganised workers. ₹2 lakh PMSBY accident insurance. Gateway to all social security benefits. Free UAN card.",tags:["Labour","Insurance","Unorganised","UAN Card"],eligibleFor:["Daily Wage Worker"],incomeMax:5,deadline:"Open",daysLeft:null,eligible:"partial",website:"https://eshram.gov.in",
  fullDetails:{
    ministry:"Ministry of Labour & Employment",
    launched:"August 2021",
    benefit:"Free registration, ₹2 lakh PMSBY insurance, priority for other schemes",
    beneficiaries:"28+ Crore workers",
    eligibility:["Unorganised workers 16–59 years","Not a member of EPFO/ESIC","Non-income tax payer"],
    documents:["Aadhaar Card (mobile linked)","Bank Account Number","IFSC Code"],
    applyProcess:["Visit eshram.gov.in or nearest CSC","Self-register using Aadhaar + OTP","Fill occupation and address details","UAN (Universal Account Number) issued","e-SHRAM card can be downloaded"]
  }
},
{id:22,name:"PM Shram Yogi Maan-dhan",icon:"🏗️",iconBg:"rgba(11,138,138,.1)",cat:"Pension",desc:"₹3,000/month guaranteed pension for unorganised sector workers at age 60. Entry age 18–40. Monthly contribution ₹55–₹200.",tags:["Labour","Pension","₹3000/month","Unorganised"],eligibleFor:["Daily Wage Worker","Self-employed"],incomeMax:5,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://maandhan.in",pdfUrl:"https://maandhan.in/shramyogi/downloads/PMSYM_form.pdf",
  fullDetails:{
    ministry:"Ministry of Labour & Employment",
    launched:"March 2019",
    benefit:"₹3,000/month pension at 60; government contributes equal amount",
    eligibility:["Unorganised workers 18–40 years","Monthly income below ₹15,000","Not EPFO/ESIC/NPS member","Not income tax payer"],
    documents:["Aadhaar Card","Savings Bank Account / Jan Dhan Account","Mobile number"],
    applyProcess:["Visit nearest CSC with documents","Enrol with Aadhaar and bank details","Auto-debit for monthly contribution","Pension starts at 60"]
  }
},
{id:23,name:"Employees' Provident Fund (EPFO)",icon:"🏦",iconBg:"rgba(27,79,204,.12)",cat:"Labour",desc:"Mandatory provident fund for organized sector employees. Employer & employee each contribute 12% of basic salary. Tax-free retirement corpus.",tags:["Labour","PF","Retirement","Organized"],eligibleFor:["Government Employee"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"partial",website:"https://www.epfindia.gov.in",
  fullDetails:{
    ministry:"Ministry of Labour & Employment / EPFO",
    benefit:"12% employee + 12% employer contribution to PF. 8.25% interest (2023-24)",
    eligibility:["Employees earning up to ₹15,000/month (mandatory)","Voluntary for higher earners"],
    documents:["Aadhaar Card","PAN Card","Bank Account details","UAN activation"]
  }
},

/* SOCIAL */
{id:24,name:"National Social Assistance Programme",icon:"🤝",iconBg:"rgba(11,138,138,.1)",cat:"Social",desc:"Monthly pension for aged (₹200–₹500), widows (₹300–₹500) and disabled (₹300–₹500) persons below poverty line.",tags:["Pension","BPL","Senior","Widow"],eligibleFor:["all"],incomeMax:1,deadline:"Open",daysLeft:null,eligible:"partial",website:"https://nsap.nic.in",pdfUrl:"https://nsap.nic.in/NSAPForms/nsap_application_form.pdf",
  fullDetails:{
    ministry:"Ministry of Rural Development",
    launched:"1995",
    benefit:"IGNOAPS (60+): ₹200–₹500/month | IGNWPS (Widow): ₹300/month | IGNDPS (Disabled): ₹300/month",
    eligibility:["BPL households only","Aged 60+ (IGNOAPS)","Widows 40–79 years (IGNWPS)","Severely disabled 18–79 years (IGNDPS)","Natural death family member (NFBS): ₹20,000 lump sum"],
    documents:["Aadhaar Card","BPL Ration Card","Age Proof / Disability Certificate","Bank Passbook","Widow Certificate (from gram sabha / revenue dept)"],
    applyProcess:["Apply at gram panchayat/urban local body","Form submitted to block development office","Verification by field officer","Approved by DPC","Pension credited monthly by DBT"]
  }
},
{id:25,name:"Swachh Bharat Mission – Gramin",icon:"🚽",iconBg:"rgba(29,155,94,.12)",cat:"Social",desc:"Financial assistance of ₹12,000 to BPL and SC/ST households for construction of individual household latrines (IHHL).",tags:["Sanitation","BPL","Rural","₹12000"],eligibleFor:["all"],incomeMax:2,deadline:"Open",daysLeft:null,eligible:"partial",website:"https://sbm.gov.in",
  fullDetails:{
    ministry:"Ministry of Jal Shakti",
    launched:"October 2014",
    benefit:"₹12,000 incentive for toilet construction (₹9,000 central + ₹3,000 state)",
    eligibility:["BPL households","SC/ST households","Small & marginal farmers","Households with disabled persons"],
    documents:["Aadhaar Card","BPL Card/Ration Card","Bank Passbook","Geo-tagged photo of toilet construction"],
    applyProcess:["Apply at gram panchayat","Fill SBM application form","Verify eligibility","Construct toilet","Submit geo-tagged photo","₹12,000 credited to bank"]
  }
},
{id:26,name:"Jan Dhan Yojana",icon:"🏦",iconBg:"rgba(29,155,94,.12)",cat:"Social",desc:"Zero-balance savings account with RuPay debit card, ₹10K overdraft, ₹2L accident insurance, and ₹30K life cover.",tags:["Banking","Zero Balance","Insurance","RuPay"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://pmjdy.gov.in",
  fullDetails:{
    ministry:"Ministry of Finance",
    launched:"August 2014",
    benefit:"Zero-balance account + RuPay card + ₹2L accident cover + ₹30K life insurance",
    beneficiaries:"52+ Crore accounts",
    eligibility:["Any Indian citizen","No minimum balance required","No income criteria"],
    documents:["Aadhaar Card (or any official ID)","Address proof (if Aadhaar not updated)","Passport size photo"],
    applyProcess:["Visit nearest bank/post office","Fill PMJDY account opening form","Submit documents","Account opened same day","RuPay card delivered within 15 days"]
  }
},
{id:27,name:"PM Garib Kalyan Anna Yojana",icon:"🌾",iconBg:"rgba(29,155,94,.12)",cat:"Social",desc:"Free food grain – 5 kg per person per month for Antyodaya Anna Yojana and National Food Security Act beneficiaries.",tags:["Food","Free","Ration","BPL"],eligibleFor:["all"],incomeMax:1,deadline:"Dec 2028",daysLeft:1100,eligible:"partial",website:"https://nfsa.gov.in",pdfUrl:"https://nfsa.gov.in/portal/RationCardForm.pdf",
  fullDetails:{
    ministry:"Ministry of Consumer Affairs, Food & PD",
    launched:"April 2020 (extended till Dec 2028)",
    benefit:"5 kg free grain/person/month (wheat or rice)",
    eligibility:["NFSA beneficiaries (Antyodaya & Priority Households)","PHH: Identified by state governments","AAY: Poorest of the poor"],
    documents:["Ration Card (with Aadhaar seeding)","Aadhaar Card for e-KYC"],
    applyProcess:["Collect from ration shop using ration card","Aadhaar-based biometric authentication at PDS outlet"]
  }
},

/* ─── FINANCIAL / BANKING / SAVINGS ─── */
{id:28,name:"Pradhan Mantri Jan Dhan Yojana (PMJDY)",icon:"🏦",iconBg:"rgba(29,155,94,.12)",cat:"Financial",desc:"Zero-balance savings account with RuPay debit card, ₹10K overdraft facility, ₹2 lakh accident insurance and ₹30K life cover for every unbanked Indian.",tags:["Banking","Zero Balance","Insurance","RuPay"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://pmjdy.gov.in",
  fullDetails:{
    ministry:"Ministry of Finance",launched:"August 2014",
    benefit:"Zero-balance account + RuPay card + ₹2L accident cover + ₹30K life insurance + ₹10,000 overdraft",
    beneficiaries:"52+ Crore accounts",
    eligibility:["Any Indian citizen","No minimum balance required","No income criteria","Age 10+ years"],
    documents:["Aadhaar Card (or any official ID)","Address proof (if Aadhaar not updated)","Passport size photo"],
    applyProcess:["Visit nearest bank/post office","Fill PMJDY account opening form","Submit documents","Account opened same day","RuPay card delivered within 15 days"]
  }
},
{id:29,name:"Atal Pension Yojana (APY)",icon:"🧓",iconBg:"rgba(27,79,204,.12)",cat:"Financial",desc:"Guaranteed pension of ₹1,000–₹5,000/month at age 60 for unorganised sector workers. Government co-contributes 50% or ₹1,000/year for eligible subscribers.",tags:["Pension","Savings","Retirement","Guaranteed"],eligibleFor:["Daily Wage Worker","Self-employed"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://www.npscra.nsdl.co.in/apy",pdfUrl:"https://www.npscra.nsdl.co.in/download/APY_Form.pdf",
  fullDetails:{
    ministry:"Ministry of Finance / PFRDA",launched:"June 2015",
    benefit:"₹1,000–₹5,000/month guaranteed pension from age 60; government co-contributes 50%",
    eligibility:["Indian citizens 18–40 years","Not covered under statutory social security","Must have savings bank account","Income tax payers not eligible from Oct 2022"],
    documents:["Aadhaar Card","Bank Passbook","Mobile number linked to Aadhaar"],
    applyProcess:["Visit bank or post office","Fill APY enrolment form","Auto-debit mandate setup","Monthly/quarterly premium deducted","NPS PRAN issued"]
  }
},
{id:30,name:"PM Jeevan Jyoti Bima Yojana (PMJJBY)",icon:"🛡️",iconBg:"rgba(212,64,42,.1)",cat:"Financial",desc:"₹2 lakh life insurance cover at just ₹436/year premium (₹36/month). Renewable annually. For all savings bank account holders aged 18–50.",tags:["Insurance","Life Cover","₹2L","Low Premium"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://jansuraksha.gov.in",pdfUrl:"https://sbi.co.in/documents/16012/76857/PMJJBY_Form.pdf",
  fullDetails:{
    ministry:"Ministry of Finance",launched:"May 2015",
    benefit:"₹2 lakh life insurance on death (any cause). Premium: ₹436/year (auto-debit from bank)",
    beneficiaries:"18+ Crore subscribers",
    eligibility:["Age 18–50 years","Savings bank account holder","Aadhaar linked to bank account"],
    documents:["Aadhaar Card","Bank account details","Nomination form"],
    applyProcess:["Visit bank / net banking / mobile banking","Give consent for auto-debit","Fill PMJJBY form","₹436 auto-debited annually in June","₹2L paid to nominee on death"]
  }
},
{id:31,name:"PM Suraksha Bima Yojana (PMSBY)",icon:"⛑️",iconBg:"rgba(245,166,35,.12)",cat:"Financial",desc:"Accidental death and disability cover of ₹2 lakh at a premium of just ₹20/year. Covers partial disability up to ₹1 lakh. Available to bank account holders 18–70.",tags:["Insurance","Accident","₹2L","₹20/year"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://jansuraksha.gov.in",pdfUrl:"https://sbi.co.in/documents/16012/76857/PMJJBY_Form.pdf",
  fullDetails:{
    ministry:"Ministry of Finance",launched:"May 2015",
    benefit:"₹2 lakh on accidental death/total disability; ₹1 lakh on partial disability. Premium: ₹20/year",
    beneficiaries:"30+ Crore subscribers",
    eligibility:["Age 18–70 years","Savings bank account holder","Aadhaar linked"],
    documents:["Aadhaar Card","Bank details","Nomination declaration"],
    applyProcess:["Opt-in via bank/post office/mobile banking","₹20 auto-debited from account","Claim via bank on accident","Submit FIR + hospital/death certificate"]
  }
},
{id:32,name:"Senior Citizen Savings Scheme (SCSS)",icon:"👴",iconBg:"rgba(27,79,204,.12)",cat:"Financial",desc:"Government-backed savings scheme for senior citizens (60+) offering 8.2% interest per annum quarterly. Max deposit ₹30 lakh. Tax benefit under Sec 80C.",tags:["Senior","Savings","8.2%","Tax Benefit"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://www.nsiindia.gov.in",pdfUrl:"https://www.indiapost.gov.in/VAS/DOP_PDFFiles/SCSS.pdf",
  fullDetails:{
    ministry:"Ministry of Finance / India Post",launched:"2004 (Revised 2023)",
    benefit:"8.2% interest p.a. (quarterly), max ₹30 lakh deposit, 80C tax benefit",
    eligibility:["Age 60+ years","Retirees 55–60 under VRS","Defence retirees 50+"],
    documents:["Age proof (Aadhaar/Passport)","Address proof","PAN Card","Retirement proof (if below 60)","Photo"],
    applyProcess:["Visit post office or authorized bank","Fill SCSS account opening form","Deposit minimum ₹1,000","Account matures in 5 years","Extendable for 3 more years"]
  }
},
{id:33,name:"Public Provident Fund (PPF)",icon:"💰",iconBg:"rgba(29,155,94,.12)",cat:"Financial",desc:"Long-term savings with 7.1% tax-free interest. 15-year tenure, EEE tax status (exempt at all 3 stages). Partial withdrawal allowed after 7 years. Max ₹1.5L/year.",tags:["Savings","Tax Free","7.1%","Long Term"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://www.nsiindia.gov.in",pdfUrl:"https://www.indiapost.gov.in/VAS/DOP_PDFFiles/PPF.pdf",
  fullDetails:{
    ministry:"Ministry of Finance",launched:"1968",
    benefit:"7.1% tax-free interest, EEE status, loan facility from 3rd year, 80C deduction",
    eligibility:["Any Indian resident","One account per individual","Minors via guardian"],
    documents:["Aadhaar Card","PAN Card","Photo","Address proof"],
    applyProcess:["Visit post office or bank","Fill PPF account opening form","Min deposit ₹500/year","Account runs for 15 years","Extendable in 5-year blocks"]
  }
},
{id:34,name:"National Savings Certificate (NSC)",icon:"📜",iconBg:"rgba(27,79,204,.12)",cat:"Financial",desc:"Government savings bond with 7.7% annual interest compounded. 5-year lock-in. Tax deduction under Sec 80C. Available at all post offices.",tags:["Savings","7.7%","Tax Benefit","Post Office"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://www.nsiindia.gov.in",pdfUrl:"https://www.indiapost.gov.in/VAS/DOP_PDFFiles/NSC.pdf",
  fullDetails:{
    ministry:"Ministry of Finance / India Post",launched:"1956",
    benefit:"7.7% compounded annually, 80C deduction on investment, interest reinvested qualifies for 80C",
    eligibility:["Any Indian resident","Single/joint holder","Minors (10+ years) independently"],
    documents:["Aadhaar Card","PAN Card","Photo","Address proof"],
    applyProcess:["Visit post office","Fill NSC purchase form","Min investment ₹1,000","No maximum limit","Matures in 5 years"]
  }
},
{id:35,name:"Mahila Samman Savings Certificate",icon:"👩",iconBg:"rgba(212,64,42,.1)",cat:"Financial",desc:"Special savings scheme for women/girls with 7.5% annual interest. Max ₹2 lakh investment. Partial withdrawal allowed after 1 year. Valid till March 2025.",tags:["Women","Savings","7.5%","Girls"],eligibleFor:["all"],incomeMax:99,deadline:"Mar 2025",daysLeft:null,eligible:"yes",website:"https://www.indiapost.gov.in",
  fullDetails:{
    ministry:"Ministry of Finance",launched:"April 2023",
    benefit:"7.5% annual interest, partial withdrawal after 1 year, max ₹2 lakh",
    eligibility:["Any woman or girl (guardian for minor)","Indian resident","No age restriction"],
    documents:["Aadhaar Card","PAN Card (if >₹50,000)","Photo","Address proof"],
    applyProcess:["Visit post office","Open account with ₹1,000 minimum","Deposit up to ₹2 lakh","Account matures in 2 years","Partial withdrawal allowed after 1 year"]
  }
},

/* ─── AGRICULTURE & RURAL DEVELOPMENT (new additions) ─── */
{id:36,name:"PM Krishi Sinchai Yojana (PMKSY)",icon:"💧",iconBg:"rgba(29,155,94,.12)",cat:"Agriculture",desc:"'Har Khet Ko Pani, More Crop Per Drop' — expand irrigation coverage, improve water use efficiency with micro-irrigation (drip/sprinkler). Subsidy up to 55% for small farmers.",tags:["Farmer","Irrigation","Water","Subsidy"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://pmksy.gov.in",
  fullDetails:{
    ministry:"Ministry of Jal Shakti",launched:"July 2015",
    benefit:"55% subsidy (small/marginal) or 45% (others) on drip/sprinkler irrigation. Convergence with MGNREGS.",
    eligibility:["All farmers with own/leased land","Priority to water-stressed areas","SHGs and FPOs eligible"],
    documents:["Aadhaar Card","Land records","Bank passbook","Photograph"],
    applyProcess:["Apply at district agriculture office","Submit documents","Field verification","Subsidy released through DBT","Install approved micro-irrigation system"]
  }
},
{id:37,name:"PM Matsya Sampada Yojana",icon:"🐟",iconBg:"rgba(11,138,138,.1)",cat:"Agriculture",desc:"₹20,206 crore investment to double fish production to 22 MMT by 2024–25. Subsidies for fisheries infrastructure, aquaculture, cold chain, and insurance for fishermen.",tags:["Fishermen","Aquaculture","Subsidy","Insurance"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://pmmsy.dof.gov.in",
  fullDetails:{
    ministry:"Ministry of Fisheries, Animal Husbandry & Dairying",launched:"September 2020",
    benefit:"40–60% subsidy on fish farming infrastructure; ₹5L life & ₹2.5L disability cover for fishermen",
    eligibility:["Fishermen","Fish farmers","SHGs","Fish workers and vendors"],
    documents:["Aadhaar Card","Bank passbook","Fishing licence","Land/pond documents"],
    applyProcess:["Apply at district fisheries office or state portal","Submit project proposal","Field inspection","Subsidy disbursed to bank account"]
  }
},
{id:38,name:"Atal Bhujal Yojana",icon:"💦",iconBg:"rgba(27,79,204,.12)",cat:"Agriculture",desc:"Sustainable groundwater management in 7 states. Community-based approach for water conservation and efficient use. ₹6,000 crore World Bank assisted scheme.",tags:["Water","Rural","Conservation","Groundwater"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"partial",website:"https://ataljal.mowr.gov.in",
  fullDetails:{
    ministry:"Ministry of Jal Shakti",launched:"December 2019",
    benefit:"Community groundwater management; incentives for reducing groundwater extraction; convergence funds",
    eligibility:["Residents of covered districts in 7 states (Gujarat, Haryana, Karnataka, MP, Maharashtra, Rajasthan, UP)"],
    documents:["Aadhaar Card","Proof of residence in covered area"],
    applyProcess:["Contact Gram Panchayat","Participate in Water Security Plan","Community water monitoring","Benefits flow through village water committee"]
  }
},
{id:39,name:"Sahakar Mitra Scheme",icon:"🤝",iconBg:"rgba(245,166,35,.12)",cat:"Agriculture",desc:"Internship programme for agriculture/rural development graduates to work with cooperative societies. Stipend support and skill building for youth in rural cooperative sector.",tags:["Youth","Cooperative","Agriculture","Internship"],eligibleFor:["Student"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://www.ncdcoop.gov.in",
  fullDetails:{
    ministry:"Ministry of Cooperation / NCDC",launched:"2020",
    benefit:"Stipend of ₹4,000–₹8,000/month during internship; skill development; placement support",
    eligibility:["Graduates/postgraduates in Agriculture/Rural Development/Cooperation","Age below 30 years"],
    documents:["Degree certificates","Aadhaar Card","Bank passbook","Application form"],
    applyProcess:["Apply at NCDC website","Select cooperative society","Complete 6-month internship","Receive stipend monthly","Certificate on completion"]
  }
},
{id:40,name:"PM Kusum Yojana",icon:"☀️",iconBg:"rgba(245,166,35,.12)",cat:"Agriculture",desc:"Solar energy for farmers — solar pumps, solarisation of grid-connected pumps, and small solar power plants on barren land. Subsidy up to 60%. Farmers earn extra income selling surplus solar power.",tags:["Solar","Farmer","Energy","Subsidy"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://pmkusum.mnre.gov.in",
  fullDetails:{
    ministry:"Ministry of New & Renewable Energy",launched:"February 2019",
    benefit:"60% subsidy on solar pumps; 30% bank loan; extra income from surplus solar energy sold to DISCOM",
    beneficiaries:"20 lakh solar pumps target",
    eligibility:["Individual farmers","Water User Associations","Farmer Producer Organisations","Panchayats"],
    documents:["Aadhaar Card","Land records","Bank passbook","Electricity bill (for grid-connected pump)"],
    applyProcess:["Apply through state nodal agency","Select pump capacity","Pay 10% farmer share","Solar pump installed by empanelled vendor","Surplus power sold at fixed tariff"]
  }
},

/* ─── HOUSING & URBAN DEVELOPMENT (new additions) ─── */
{id:41,name:"Smart Cities Mission",icon:"🏙️",iconBg:"rgba(27,79,204,.12)",cat:"Housing",desc:"Urban renewal to make 100 cities smart with better infrastructure, digital governance, smart mobility, clean energy. ₹2.05 lakh crore investment for city transformation.",tags:["Urban","Smart","Infrastructure","City"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://smartcities.gov.in",
  fullDetails:{
    ministry:"Ministry of Housing & Urban Affairs",launched:"June 2015",
    benefit:"Integrated command centres, smart roads, LED streetlights, smart water meters, digital services",
    eligibility:["Residents of 100 selected smart cities"],
    documents:["City-specific applications vary"],
    applyProcess:["Benefits are area-based (citizens automatically benefit)","Individual projects like housing apply through ULB"]
  }
},
{id:42,name:"AMRUT Scheme",icon:"🚰",iconBg:"rgba(11,138,138,.1)",cat:"Housing",desc:"Atal Mission for Rejuvenation and Urban Transformation — water supply, sewerage, urban parks, non-motorised transport for 500 cities. ₹77,640 crore for basic services.",tags:["Urban","Water","Sewerage","Parks"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://amrut.gov.in",
  fullDetails:{
    ministry:"Ministry of Housing & Urban Affairs",launched:"June 2015 (AMRUT 2.0: 2021)",
    benefit:"Clean piped water, sewerage networks, parks, cycling tracks in 500 cities",
    eligibility:["Residents of 500 AMRUT cities"],
    documents:["Water/sewerage connection application at ULB"],
    applyProcess:["Apply at Urban Local Body for water/sewerage connection","Benefits delivered through city infrastructure projects"]
  }
},
{id:43,name:"Svamitva Yojana",icon:"📋",iconBg:"rgba(29,155,94,.12)",cat:"Housing",desc:"Drone survey-based property rights to rural household owners. Provides legal 'Property Card' to 1.5+ crore rural families enabling use of property as financial asset for loans.",tags:["Rural","Property","Rights","Drone Survey"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://svamitva.nic.in",
  fullDetails:{
    ministry:"Ministry of Panchayati Raj",launched:"April 2020",
    benefit:"Legal property card (Adhikar Patra), enables bank loans against property, dispute resolution",
    beneficiaries:"1.5+ crore property cards issued",
    eligibility:["Rural households in abadi (residential) areas","Covered villages in participating states"],
    documents:["Aadhaar Card","Self-declaration","Village records"],
    applyProcess:["Drone survey done by village","Property maps prepared","Boundaries verified with gram sabha","Property card distributed by state govt","Register card with sub-registrar for full rights"]
  }
},
{id:44,name:"PM SVANidhi (Street Vendors)",icon:"🛒",iconBg:"rgba(245,166,35,.12)",cat:"Housing",desc:"Micro-credit for street vendors to resume livelihoods after COVID-19. ₹10,000 → ₹20,000 → ₹50,000 collateral-free loans with 7% interest subsidy. Digital payments rewarded.",tags:["Vendor","Loan","Micro Credit","Street"],eligibleFor:["Self-employed"],incomeMax:5,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://pmsvanidhi.mohua.gov.in",
  fullDetails:{
    ministry:"Ministry of Housing & Urban Affairs",launched:"June 2020",
    benefit:"₹10K → ₹20K → ₹50K loans; 7% interest subsidy; digital transaction cashback up to ₹1,200/year",
    beneficiaries:"50+ lakh vendors",
    eligibility:["Street vendors with vending certificate/LoR","Vendors identified in survey","Urban areas only"],
    documents:["Aadhaar Card","Vendor certificate/Survey letter","Bank account","Photo"],
    applyProcess:["Apply at udyamimitra.in or bank/MFI","Submit vendor certificate","Loan sanctioned within 30 days","Repay on time for enhanced limit"]
  }
},

/* ─── HEALTH & NUTRITION (new additions) ─── */
{id:45,name:"National Health Mission (NHM)",icon:"🏥",iconBg:"rgba(212,64,42,.1)",cat:"Health",desc:"Universal healthcare in rural and urban areas — free medicines, diagnostics, maternal/child health services, ASHA workers. Covers all government health programmes.",tags:["Health","Free","Rural","Universal"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nhm.gov.in",
  fullDetails:{
    ministry:"Ministry of Health & Family Welfare",launched:"2005",
    benefit:"Free OPD/IPD at government facilities, free medicines under NLEM, free diagnostics, ASHA/ANM home visits",
    eligibility:["All Indian citizens","Priority to BPL/rural/tribal populations"],
    documents:["Aadhaar Card (preferred but not mandatory for emergency care)"],
    applyProcess:["Visit nearest government health facility","ASHA/ANM provides home-based care","Medicines provided free at Jan Aushadhi centres"]
  }
},
{id:46,name:"Mission Poshan 2.0",icon:"🍎",iconBg:"rgba(212,64,42,.1)",cat:"Health",desc:"Integrated nutrition support for children (0–6 yrs), pregnant/lactating women and adolescent girls. Supplementary nutrition, ICDS services, and behaviour change communication.",tags:["Nutrition","Children","Women","ICDS"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://poshanabhiyaan.gov.in",
  fullDetails:{
    ministry:"Ministry of Women & Child Development",launched:"2021 (Merged Poshan Abhiyan + ICDS)",
    benefit:"Supplementary nutrition, growth monitoring, health checkups, pre-school education at Anganwadi centres",
    eligibility:["Children 0–6 years","Pregnant and lactating women","Adolescent girls (14–18 years)","Beneficiaries in ICDS covered areas"],
    documents:["Aadhaar Card","Pregnancy registration (for mothers)","Birth certificate (for children)"],
    applyProcess:["Register at nearest Anganwadi Centre","ASHA/AWW registers beneficiary","Regular visits for nutrition supplements","Monthly growth monitoring"]
  }
},
{id:47,name:"PM Swasthya Suraksha Yojana",icon:"🏗️",iconBg:"rgba(27,79,204,.12)",cat:"Health",desc:"Setting up AIIMS and upgrading government medical colleges to provide quality tertiary healthcare in under-served states. Increases specialist doctor availability.",tags:["Hospital","AIIMS","Tertiary","Infrastructure"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://mohfw.gov.in",
  fullDetails:{
    ministry:"Ministry of Health & Family Welfare",launched:"2006",
    benefit:"22 new AIIMS, upgraded medical colleges, more specialist capacity in remote areas",
    eligibility:["All patients seeking treatment at government medical colleges/AIIMS"],
    documents:["Aadhaar/ID card","Referral letter (for AIIMS)"],
    applyProcess:["Seek referral from district hospital for AIIMS","Direct OPD available at AIIMS/medical colleges","Free/subsidised treatment for BPL patients"]
  }
},
{id:48,name:"Bharatiya Janaushadhi Pariyojana",icon:"💊",iconBg:"rgba(29,155,94,.12)",cat:"Health",desc:"Quality generic medicines at 50–90% lower cost than branded drugs. 10,000+ Jan Aushadhi Kendras across India stocking 1,900+ medicines and surgical items.",tags:["Medicine","Generic","Affordable","Jan Aushadhi"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://janaushadhi.gov.in",
  fullDetails:{
    ministry:"Ministry of Chemicals & Fertilizers",launched:"2008 (revamped 2015)",
    benefit:"Medicines at 50–90% less cost; same efficacy as branded drugs; 1,900+ medicines available",
    beneficiaries:"1+ crore patients monthly",
    eligibility:["All citizens can purchase","No prescription required for OTC drugs"],
    documents:["Doctor's prescription for prescription drugs"],
    applyProcess:["Locate nearest Jan Aushadhi Kendra at janaushadhi.gov.in","Purchase medicines with prescription","No eligibility restriction — open to all"]
  }
},

/* ─── EDUCATION & SKILL (new additions) ─── */
{id:49,name:"PM Kaushal Vikas Yojana (PMKVY)",icon:"🔨",iconBg:"rgba(245,166,35,.12)",cat:"Education",desc:"Free skill training with industry-recognised certification for youth. ₹8,000 reward on passing assessment. 300+ job roles across 37 sectors. Placement assistance provided.",tags:["Skill","Free","Youth","Certificate"],eligibleFor:["Student","Unemployed"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://skillindia.gov.in",
  fullDetails:{
    ministry:"Ministry of Skill Development & Entrepreneurship",launched:"2015 (PMKVY 4.0: 2022)",
    benefit:"Free training + ₹8,000 reward on certification + placement assistance + accident insurance during training",
    beneficiaries:"1.4+ crore trained",
    eligibility:["Youth 15–45 years","School dropouts or graduates","Unemployed seeking skills"],
    documents:["Aadhaar Card","Educational certificates","Bank passbook","Photo"],
    applyProcess:["Find training centre at skillindia.gov.in","Enroll in desired job role","Complete training (3–6 months)","Pass assessment by SSC","Receive QP-NOS certificate + reward"]
  }
},
{id:50,name:"PM e-VIDYA",icon:"💻",iconBg:"rgba(27,79,204,.12)",cat:"Education",desc:"One Nation One Digital Platform — 200 TV channels (DIKSHA), DTH-based education, e-content for classes 1–12. Bridges digital divide for students without internet access.",tags:["Digital","Free","Online","School"],eligibleFor:["Student"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://diksha.gov.in",
  fullDetails:{
    ministry:"Ministry of Education",launched:"May 2020",
    benefit:"Free digital content for all grades; DIKSHA app; e-content in 33 languages; TV-based education via Swayam Prabha",
    eligibility:["All students from Class 1 to Class 12","Higher education students via Swayam"],
    documents:["No documents required (open access)"],
    applyProcess:["Download DIKSHA app or visit diksha.gov.in","Access by grade and subject","No registration mandatory","Swayam for college-level courses (free certificates)"]
  }
},
{id:51,name:"Mid-Day Meal Scheme (PM Poshan)",icon:"🍱",iconBg:"rgba(29,155,94,.12)",cat:"Education",desc:"Free nutritious meals for 11.8 crore students in government/government-aided schools (Class 1–8). Reduces dropout, improves attendance and nutrition simultaneously.",tags:["Student","Free Meal","Nutrition","School"],eligibleFor:["Student"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://pmposhan.education.gov.in",
  fullDetails:{
    ministry:"Ministry of Education",launched:"1995 (renamed PM Poshan 2021)",
    benefit:"Daily nutritious cooked meals; calorie targets: 450 kcal (primary), 700 kcal (upper primary)",
    beneficiaries:"11.8 crore students",
    eligibility:["Students in Class 1–8","Government and government-aided schools","Madrasas under Samagra Shiksha"],
    documents:["School enrollment (automatic benefit)"],
    applyProcess:["Automatic benefit on enrollment in government school","No separate application required","Meals provided during school days"]
  }
},
{id:52,name:"Deendayal Grameen Kaushalya Yojana (DDU-GKY)",icon:"🏭",iconBg:"rgba(11,138,138,.1)",cat:"Education",desc:"Placement-linked skill training for rural poor youth (15–35 yrs). Free residential training with stipend, post-placement support for 3 months, and salary tracking.",tags:["Rural","Skill","Youth","Placement"],eligibleFor:["Unemployed","Student"],incomeMax:2,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://ddugky.gov.in",
  fullDetails:{
    ministry:"Ministry of Rural Development",launched:"September 2014",
    benefit:"Free residential training + stipend ₹500–₹1,500/month + placement in formal sector + post-placement support",
    eligibility:["Rural youth 15–35 years (women/PwD 45)","Below poverty line households","MGNREGS worker families"],
    documents:["Aadhaar Card","BPL/NREGA job card","Educational certificate","Bank passbook"],
    applyProcess:["Apply through gram panchayat or district NRO","Training at empanelled PIAs","6-month to 1-year residential course","Mandatory placement assistance","Min wage or above salary"]
  }
},
{id:53,name:"National Education Policy (NEP) Initiatives",icon:"📖",iconBg:"rgba(27,79,204,.12)",cat:"Education",desc:"Transformational reforms: mother tongue medium till Class 5, flexible higher education, vocational integration from Class 6, 5+3+3+4 curriculum, academic bank of credits.",tags:["Education","Reform","NEP","Curriculum"],eligibleFor:["Student"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://education.gov.in/nep",
  fullDetails:{
    ministry:"Ministry of Education",launched:"July 2020",
    benefit:"Mother tongue instruction, flexible degrees (exit/entry), vocational education, multidisciplinary learning",
    eligibility:["All students from pre-primary to higher education"],
    documents:["Standard school/college enrollment"],
    applyProcess:["Benefits automatic through school/college reforms","Students can opt for vocational courses from Class 6","Multiple entry/exit in degree programmes"]
  }
},

/* ─── WOMEN & CHILD (new additions) ─── */
{id:54,name:"Mission Shakti",icon:"💪",iconBg:"rgba(212,64,42,.1)",cat:"Women",desc:"Umbrella mission for women empowerment — Sambal (safety/security) and Samarthya (empowerment) components. Covers One Stop Centres, Nari Adalat, skill training, SHG support.",tags:["Women","Safety","Empowerment","SHG"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://missionshakti.wcd.gov.in",
  fullDetails:{
    ministry:"Ministry of Women & Child Development",launched:"2021",
    benefit:"One Stop Centres (OSC) for survivors; Mahila Police Volunteers; SHG support; skills & livelihood; digital literacy",
    eligibility:["All women (priority to survivors of violence, trafficking)","SHG members for economic components"],
    documents:["Aadhaar Card (for specific benefits)"],
    applyProcess:["Contact One Stop Centre (181) for safety/rescue","Contact Anganwadi/Block office for SHG/skill benefits","Apply through WCD district office for specific schemes"]
  }
},
{id:55,name:"Scheme for Adolescent Girls",icon:"👧",iconBg:"rgba(212,64,42,.1)",cat:"Women",desc:"Nutrition, life skills, vocational training, health education and guidance for out-of-school girls (14–18 yrs) through Anganwadi centres under Samagra Shiksha.",tags:["Girls","Nutrition","Skill","Adolescent"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://icds-wcd.nic.in",
  fullDetails:{
    ministry:"Ministry of Women & Child Development",launched:"2010 (Kishori Shakti Yojana merged)",
    benefit:"IFA supplementation, nutrition supplements, health checkups, life skills training, vocational guidance",
    eligibility:["Girls aged 14–18 years","Out-of-school girls prioritised","Covered areas under ICDS"],
    documents:["Aadhaar Card","Age proof","School leaving certificate"],
    applyProcess:["Register at Anganwadi Centre","Monthly activities and training sessions","Iron-folic acid supplements distributed","Referral to health facilities if needed"]
  }
},

/* ─── EMPLOYMENT / BUSINESS (new additions) ─── */
{id:56,name:"PM Employment Generation Programme (PMEGP)",icon:"🏭",iconBg:"rgba(245,166,35,.12)",cat:"Business",desc:"Credit-linked subsidy for setting up micro enterprises. Subsidy 15–35% (up to ₹25 lakh for manufacturing, ₹10 lakh for service/trading). Rural/SC/ST/women get higher subsidy.",tags:["Business","Loan","Subsidy","Micro Enterprise"],eligibleFor:["Self-employed","Unemployed"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://kviconline.gov.in/pmegp",pdfUrl:"https://www.kviconline.gov.in/pmegpeportal/docs/pmegp_application_form.pdf",
  fullDetails:{
    ministry:"Ministry of MSME / KVIC",launched:"2008",
    benefit:"15–35% subsidy on project cost; 25 lakh max for manufacturing, 10 lakh for service/trade",
    beneficiaries:"8+ lakh units established",
    eligibility:["Age 18+","8th pass for projects above ₹10 lakh","SC/ST/Women/PwD get higher subsidy","No income ceiling"],
    documents:["Aadhaar Card","Project report","Educational certificate","Bank passbook","Caste/category certificate"],
    applyProcess:["Apply online at kviconline.gov.in/pmegp","District KVIC/KVB/KVIB office","EDP training (required)","Bank sanctions loan","Subsidy released after first repayment"]
  }
},
{id:57,name:"PM Vishwakarma Yojana",icon:"🔨",iconBg:"rgba(245,166,35,.12)",cat:"Business",desc:"Recognition and support for 18 traditional artisan/craftsperson trades (blacksmiths, potters, weavers, cobblers, etc.). ₹1 lakh → ₹2 lakh collateral-free credit at 5% interest.",tags:["Artisan","Craft","Loan","Traditional"],eligibleFor:["Self-employed"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://pmvishwakarma.gov.in",
  fullDetails:{
    ministry:"Ministry of MSME",launched:"September 2023",
    benefit:"PM Vishwakarma certificate, ₹1L (1st) + ₹2L (2nd) credit at 5%, skill training ₹500/day stipend, toolkit incentive ₹15,000",
    eligibility:["Artisans/craftspersons in 18 trades","Age 18+ in unorganised sector","One per family"],
    documents:["Aadhaar Card (mobile linked)","Bank passbook","Caste certificate (optional)","Trade proof"],
    applyProcess:["Register at pmvishwakarma.gov.in via CSC","Biometric verification","Skill assessment and training","PM Vishwakarma certificate issued","Apply for collateral-free credit at bank"]
  }
},
{id:58,name:"MSME Development Schemes",icon:"🏢",iconBg:"rgba(27,79,204,.12)",cat:"Business",desc:"Comprehensive support for MSMEs — UDYAM registration, TReDS for invoice financing, ZED certification, cluster development, technology upgradation, export promotion.",tags:["MSME","Business","Export","Technology"],eligibleFor:["Self-employed"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://udyamregistration.gov.in",
  fullDetails:{
    ministry:"Ministry of MSME",launched:"Various schemes",
    benefit:"UDYAM registration benefits, 25% govt procurement reserved, CGTMSE credit guarantee, ZED certification",
    eligibility:["Micro: <₹1Cr investment + <₹5Cr turnover","Small: <₹10Cr + <₹50Cr","Medium: <₹50Cr + <₹250Cr"],
    documents:["Aadhaar Card","PAN","Business registration","Bank statements"],
    applyProcess:["Register on udyamregistration.gov.in","Get UDYAM certificate (free)","Access specific benefits through respective portals","Apply for credit guarantee through banks"]
  }
},

/* ─── PENSION & SOCIAL WELFARE (new additions) ─── */
{id:59,name:"PM Vaya Vandana Yojana",icon:"👴",iconBg:"rgba(27,79,204,.12)",cat:"Pension",desc:"Guaranteed pension of 7.4%/year for senior citizens (60+) investing in this LIC scheme. Max investment ₹15 lakh. Monthly/quarterly/yearly pension options. 10-year tenure.",tags:["Senior","Pension","LIC","Guaranteed"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://licindia.in",
  fullDetails:{
    ministry:"Ministry of Finance / LIC",launched:"2017 (extended)",
    benefit:"7.4% guaranteed pension on investment up to ₹15 lakh; return of purchase price on maturity/death",
    eligibility:["Age 60 years and above","No upper age limit","NRI not eligible"],
    documents:["Age proof","Aadhaar Card","Bank passbook","PAN Card","Photo"],
    applyProcess:["Visit LIC branch or apply online at licindia.in","Fill proposal form","Pay single premium (min ₹1.56 lakh)","Policy issued immediately","Pension credited as per chosen mode"]
  }
},
{id:60,name:"Antyodaya Anna Yojana (AAY)",icon:"🌾",iconBg:"rgba(29,155,94,.12)",cat:"Social",desc:"35 kg food grain at ₹2/kg (wheat) and ₹3/kg (rice) per month for the poorest of the poor BPL families — 'Antyodaya' ration card holders.",tags:["Food","BPL","Ration","Poorest"],eligibleFor:["all"],incomeMax:1,deadline:"Open",daysLeft:null,eligible:"partial",website:"https://dfpd.gov.in",
  fullDetails:{
    ministry:"Ministry of Consumer Affairs, Food & PD",launched:"December 2000",
    benefit:"35 kg grain/month at ₹2/kg wheat + ₹3/kg rice; identified by state as poorest of the poor",
    beneficiaries:"2.50 crore households",
    eligibility:["Poorest of the poor BPL households","Landless labourers","Marginal farmers","Artisans","Primitive tribal groups","Widows/disabled with no support"],
    documents:["Existing BPL Ration Card","Aadhaar Card","Income proof for BPL identification"],
    applyProcess:["Apply at gram panchayat/ward office","State government identifies Antyodaya families","Antyodaya ration card issued","Collect grain monthly from PDS dealer"]
  }
},
{id:61,name:"PM Garib Kalyan Yojana (Broader)",icon:"🤝",iconBg:"rgba(29,155,94,.12)",cat:"Social",desc:"Comprehensive welfare umbrella — free food grain, free gas cylinders, direct cash to farmers, Jan Dhan accounts, free insurance, enhanced MGNREGS wages for poor during COVID and beyond.",tags:["BPL","Free","Multiple Benefits","COVID Relief"],eligibleFor:["all"],incomeMax:2,deadline:"Open",daysLeft:null,eligible:"partial",website:"https://www.india.gov.in/pmgky",
  fullDetails:{
    ministry:"Ministry of Finance (multiple ministries)",launched:"March 2020",
    benefit:"5 kg free grain + PMJJBY/PMSBY premium paid by Govt + PM Kisan installments + Jan Dhan cash transfer",
    eligibility:["Jan Dhan account holders","NFSA beneficiaries","PM Kisan farmers","PMJJBY/PMSBY subscribers"],
    documents:["Aadhaar-linked bank account","Ration card","PM Kisan registration"],
    applyProcess:["Benefits transferred automatically via DBT","No separate application for most components","Ensure Aadhaar is linked to bank account"]
  }
},

/* ─── INFRASTRUCTURE & DEVELOPMENT ─── */
{id:62,name:"Digital India Mission",icon:"📱",iconBg:"rgba(27,79,204,.12)",cat:"Infrastructure",desc:"Transform India into a digitally empowered society — BharatNet broadband, digital locker, e-governance, Common Service Centres (CSCs), digital payments and digital literacy.",tags:["Digital","Internet","Governance","CSC"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://digitalindia.gov.in",
  fullDetails:{
    ministry:"Ministry of Electronics & IT",launched:"July 2015",
    benefit:"High-speed broadband in villages; 5 lakh+ CSCs; DigiLocker; e-Sign; UMANG app; PM-WANI Wi-Fi",
    eligibility:["All citizens"],
    documents:["Aadhaar for DigiLocker","Mobile for digital services"],
    applyProcess:["Access services via umang.gov.in or CSC","Create DigiLocker account at digilocker.gov.in","Use CSC for e-governance services","Apply for PM-WANI Wi-Fi through ISP"]
  }
},
{id:63,name:"Swachh Bharat Mission (Urban+Rural)",icon:"🧹",iconBg:"rgba(11,138,138,.1)",cat:"Infrastructure",desc:"Making India Open Defecation Free — ₹12,000 toilet subsidy for BPL households, solid/liquid waste management, plastic ban, cleanliness campaigns. ₹1.42 lakh crore total outlay.",tags:["Sanitation","Toilet","ODF","Clean"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://swachhbharatmission.gov.in",
  fullDetails:{
    ministry:"Ministry of Jal Shakti / Housing & Urban Affairs",launched:"October 2014",
    benefit:"₹12,000 for individual toilet (BPL); SBM Phase 2: solid waste management, grey/black water treatment",
    eligibility:["BPL households without toilet","SC/ST households","Small/marginal farmers"],
    documents:["Aadhaar Card","BPL/ration card","Bank account","Geo-tagged photo after construction"],
    applyProcess:["Apply at gram panchayat","Fill SBM application","Construct toilet","Submit geo-tagged photo","₹12,000 credited to bank"]
  }
},
{id:64,name:"Jal Jeevan Mission",icon:"🚰",iconBg:"rgba(27,79,204,.12)",cat:"Infrastructure",desc:"Functional household tap connections to 19 crore rural households by 2024. Clean, piped drinking water for every village home. ₹3.6 lakh crore national programme.",tags:["Water","Rural","Tap Connection","Clean"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://jaljeevanmission.gov.in",
  fullDetails:{
    ministry:"Ministry of Jal Shakti",launched:"August 2019",
    benefit:"55 litres clean piped water per person per day; free household tap connection",
    beneficiaries:"14+ crore tap connections provided",
    eligibility:["All rural households","Priority to SC/ST villages, water-stressed areas, Aspirational Districts"],
    documents:["Village council application","Aadhaar/voter ID for household"],
    applyProcess:["Contact gram panchayat for tap connection","Panchayat submits village action plan","Connections laid by Jal Jeevan Mission","Tap water supply commenced","VWSCs manage local water infrastructure"]
  }
},
{id:65,name:"Atmanirbhar Bharat Abhiyan",icon:"🏭",iconBg:"rgba(245,166,35,.12)",cat:"Infrastructure",desc:"₹20 lakh crore package for self-reliant India — MSME loans, migrant workers relief, farmers credit, tribal welfare, PLI for manufacturing. Multiple sector revival programmes.",tags:["Economy","MSME","Manufacturing","PLI"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://www.india.gov.in",
  fullDetails:{
    ministry:"Multiple Ministries (PM-led)",launched:"May 2020",
    benefit:"Emergency credit for MSMEs, PLI incentives for 14 sectors, free food grains, enhanced Mudra loans, agri reform",
    eligibility:["MSMEs for ECLGS credit","Farmers for enhanced KCC","Workers for relief measures","Manufacturers for PLI"],
    documents:["Business registration for MSME benefits","Aadhaar/PAN for individual benefits"],
    applyProcess:["MSME: Apply for ECLGS at bank","PLI: Apply through sector-specific ministry","Individual: Auto-delivery through existing schemes"]
  }
},
{id:66,name:"UDAN Scheme (Air Connectivity)",icon:"✈️",iconBg:"rgba(27,79,204,.12)",cat:"Infrastructure",desc:"Ude Desh ka Aam Naagrik — affordable air travel from tier-2/3 cities. Airfare capped at ₹2,500 for 500 km. 74 airports revived, 425+ routes. Viability gap funding for airlines.",tags:["Aviation","Affordable","Connectivity","Regional"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://udaan.gov.in",
  fullDetails:{
    ministry:"Ministry of Civil Aviation",launched:"October 2016",
    benefit:"Capped airfares ₹2,500 for 500 km, ₹3,500 for 700 km; connectivity to 74+ unserved airports",
    eligibility:["All citizens can book UDAN seats","50% seats on each route at capped price"],
    documents:["Any valid ID for booking"],
    applyProcess:["Book on airline website/agent/ixigo etc.","Look for UDAN-tagged fares","First 50% seats at capped price","Book early for capped price availability"]
  }
},
{id:67,name:"Green India Mission",icon:"🌳",iconBg:"rgba(29,155,94,.12)",cat:"Infrastructure",desc:"Increase forest/tree cover by 5 million hectares and improve quality of another 5 million ha. Enhance ecosystem services, carbon sequestration, and biodiversity by 2030.",tags:["Environment","Forest","Green","Carbon"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://moef.gov.in/green-india-mission",
  fullDetails:{
    ministry:"Ministry of Environment, Forest & Climate Change",launched:"2011 (under NAPCC)",
    benefit:"Employment through plantation drives; ecosystem restoration; payments for ecosystem services to forest-edge communities",
    eligibility:["Forest fringe communities","Joint Forest Management committees","Tribal communities"],
    documents:["Community membership proof","Land documents (for JFM)"],
    applyProcess:["Engage through local forest department","Join JFM committee","Participate in plantation/restoration activities","Receive wages under MGNREGS or scheme funds"]
  }
},

/* ─── SCIENCE / ENVIRONMENT / ENERGY ─── */
{id:68,name:"National Green Hydrogen Mission",icon:"⚗️",iconBg:"rgba(11,138,138,.1)",cat:"Science",desc:"Make India a global hub for green hydrogen production and export. ₹19,744 crore incentive. Target: 5 MMT/year by 2030. Clean fuel for industry, transport, energy storage.",tags:["Green Energy","Hydrogen","Export","Climate"],eligibleFor:["Self-employed"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"partial",website:"https://mnre.gov.in/green-hydrogen",
  fullDetails:{
    ministry:"Ministry of New & Renewable Energy",launched:"January 2023",
    benefit:"₹19,744 crore incentive for green H2 and electrolyser manufacturing; 600,000 jobs by 2030",
    eligibility:["Energy companies","Electrolyser manufacturers","Industrial users of hydrogen","Startups in clean energy"],
    documents:["Company registration","Project proposal","Environmental clearances"],
    applyProcess:["Apply through SECI/MNRE portal","Submit techno-commercial proposal","Bid under SIGHT incentive programme","PLI-like incentives for electrolyser production"]
  }
},
{id:69,name:"PM Surya Ghar Muft Bijli Yojana",icon:"🔆",iconBg:"rgba(245,166,35,.12)",cat:"Science",desc:"Free electricity up to 300 units/month through rooftop solar for 1 crore households. 40% subsidy on 1–2 kW systems, 20% for 2–3 kW. Net metering to earn income from surplus power.",tags:["Solar","Free Electricity","Rooftop","Subsidy"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://pmsuryaghar.gov.in",
  fullDetails:{
    ministry:"Ministry of New & Renewable Energy",launched:"February 2024",
    benefit:"300 units/month free; 40% subsidy (1kW: ₹30K, 2kW: ₹60K, 3kW: ₹78K); net metering income",
    beneficiaries:"1 crore households target",
    eligibility:["All residential electricity consumers","Own house with suitable roof","Grid-connected area"],
    documents:["Aadhaar Card","Electricity bill","Ownership proof","Bank account"],
    applyProcess:["Register at pmsuryaghar.gov.in","Get DISCOMs approval","Install from empanelled vendor","Net meter installation by DISCOM","Subsidy released to bank account"]
  }
},
{id:70,name:"SATAT Scheme (Compressed Biogas)",icon:"🌿",iconBg:"rgba(29,155,94,.12)",cat:"Science",desc:"Sustainable Alternative Towards Affordable Transportation — compressed biogas from agri residue/waste as alternative fuel. Entrepreneurs can set up CBG plants; guaranteed offtake by oil companies.",tags:["Biogas","Clean Energy","Entrepreneur","Agriculture"],eligibleFor:["Self-employed"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"partial",website:"https://satat.co.in",
  fullDetails:{
    ministry:"Ministry of Petroleum & Natural Gas",launched:"October 2018",
    benefit:"Guaranteed purchase of CBG by OMCs; VGF support; bank financing facilitated",
    eligibility:["Entrepreneurs and entities setting up CBG plants","Farmers supplying agri residue get income"],
    documents:["Business plan","Land documents","No Objection Certificates","Bank project finance documents"],
    applyProcess:["Apply to oil marketing companies (IOC/BPCL/HPCL)","Submit letter of intent","Sign CBG purchase agreement","Arrange financing","Commission plant within 2 years"]
  }
},
{id:71,name:"UJALA Scheme (LED Bulbs)",icon:"💡",iconBg:"rgba(245,166,35,.12)",cat:"Science",desc:"Unnat Jyoti by Affordable LEDs — distribute 77 crore LED bulbs at ₹10–₹70 replacing expensive incandescent bulbs. Average household saves ₹400/year on electricity bills.",tags:["LED","Energy Saving","Affordable","Electricity"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://ujala.gov.in",
  fullDetails:{
    ministry:"Ministry of Power / EESL",launched:"January 2015",
    benefit:"LED bulbs at ₹10–₹70 vs ₹350+ market price; average ₹400/year electricity saving per household",
    beneficiaries:"77 crore bulbs distributed",
    eligibility:["All domestic electricity consumers","No income restriction"],
    documents:["Electricity consumer number","Aadhaar Card or ID"],
    applyProcess:["Visit nearest UJALA distribution centre or DISCOM office","Surrender old bulbs if required","Pay subsidised price","Bulbs come with 1-year warranty"]
  }
},
{id:72,name:"Mission COVID Suraksha",icon:"💉",iconBg:"rgba(212,64,42,.1)",cat:"Science",desc:"Accelerate indigenous COVID-19 vaccine development and manufacturing capacity in India. Led to CoVaxin development by Bharat Biotech with DBT/BIRAC support. ₹900 crore allocation.",tags:["Vaccine","COVID","Research","Biotech"],eligibleFor:["all"],incomeMax:99,deadline:"Completed",daysLeft:null,eligible:"yes",website:"https://birac.nic.in",
  fullDetails:{
    ministry:"Department of Biotechnology",launched:"November 2020",
    benefit:"Free COVID vaccination for all Indians under CoWIN; development of Indian vaccines (CoVaxin, ZyCov-D)",
    eligibility:["All Indian citizens (vaccination free for all 18+)"],
    documents:["Aadhaar/ID for CoWIN registration","Mobile number"],
    applyProcess:["Register on cowin.gov.in","Book slot at vaccination centre","Get vaccinated free","Download certificate from CoWIN"]
  }
},
{id:73,name:"Sansad Adarsh Gram Yojana",icon:"🏘️",iconBg:"rgba(27,79,204,.12)",cat:"Housing",desc:"Each MP adopts 1 village for holistic development — roads, schools, health centres, sanitation, wifi, digital literacy. Model villages to inspire replication across India.",tags:["Rural","Development","MP","Village"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://saanjhi.gov.in",
  fullDetails:{
    ministry:"Ministry of Rural Development",launched:"October 2014",
    benefit:"Integrated village development through MP-chosen convergence; all central schemes converge on the village",
    eligibility:["Residents of adopted Adarsh Gram"],
    documents:["Standard application per scheme"],
    applyProcess:["Benefits flow automatically through MP's adoption","Village development plan prepared by GP","All central schemes converge in the village","Contact local MP office for inclusion queries"]
  }
},

/* ══════════════════════════════════════════════════════
   💰 FINANCIAL / BANKING / DIGITAL (IDs 74–85)
══════════════════════════════════════════════════════ */
{id:74,name:"Gold Monetization Scheme",icon:"🥇",iconBg:"rgba(245,166,35,.12)",cat:"Financial",desc:"Earn interest on idle gold held at home. Deposit gold at designated banks and earn 2.25–2.50% interest while gold remains safe.",tags:["Gold","Banking","Interest","Savings"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://www.rbi.org.in/scripts/GoldMonetizationScheme.aspx",
  fullDetails:{
    ministry:"Ministry of Finance / RBI",launched:"November 2015",
    benefit:"Interest of 2.25% (short term) to 2.50% (medium/long term) on gold deposited; gold returned on maturity",
    eligibility:["Resident Indians (individuals, HUFs, trusts, mutual funds, ETFs)","Minimum 30 grams of gold (bars, coins, jewellery)","No maximum limit"],
    documents:["Aadhaar Card","PAN Card","Bank account details","KYC documents at designated bank","Gold purity certificate from BIS-certified hallmarking centre"],
    applyProcess:["Visit designated bank (SBI, Bank of Baroda etc.)","Get gold purity tested at Collection and Purity Testing Centre (CPTC)","Open GMS account","Deposit gold and receive certificate","Interest credited regularly to account"]
  }
},
{id:75,name:"Sovereign Gold Bond Scheme",icon:"📜",iconBg:"rgba(245,166,35,.12)",cat:"Financial",desc:"Government-backed bonds denominated in gold. Earn 2.5% annual interest + capital appreciation. Safe alternative to physical gold.",tags:["Gold","Bond","Interest","Investment"],eligibleFor:["all"],incomeMax:99,deadline:"Tranche-wise",daysLeft:null,eligible:"yes",website:"https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx",
  fullDetails:{
    ministry:"Ministry of Finance / RBI",launched:"November 2015",
    benefit:"2.5% per annum interest (semi-annual); capital gains tax exemption on redemption; tradeable on exchanges",
    eligibility:["Resident individuals, HUFs, Trusts, Universities, Charitable institutions","Minimum 1 gram, Maximum 4 kg/year (individual)","Minors can invest through guardian"],
    documents:["Aadhaar Card","PAN Card","Bank account","KYC at bank/post office/stock broker"],
    applyProcess:["Subscribe during RBI-announced tranche windows","Apply through banks, post offices, NSE/BSE, stock brokers","Pay via cheque/DD/internet banking","Receive bond certificate / credit to demat account","Redeem after 8 years (exit window from 5th year)"]
  }
},
{id:76,name:"India Post Payments Bank (IPPB)",icon:"📮",iconBg:"rgba(27,79,204,.12)",cat:"Financial",desc:"Zero-balance savings account through 1.5 lakh post offices. Provides banking, insurance, and government services at doorstep.",tags:["Banking","Rural","Zero Balance","Payments"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://www.ippbonline.com",
  fullDetails:{
    ministry:"Department of Posts, Ministry of Communications",launched:"September 2018",
    benefit:"Zero-balance savings account, door-step banking, digital payments, AEPS, DBT, micro-insurance, micro-loans",
    eligibility:["All Indian residents","No minimum balance required","KYC-based account"],
    documents:["Aadhaar Card (OTP-based KYC)","Mobile number linked to Aadhaar","PAN Card (optional)"],
    applyProcess:["Visit nearest post office or request Postman home visit","Complete Aadhaar OTP verification","Account opened instantly","Download IPPB mobile app for banking","Link other bank accounts for transfers"]
  }
},
{id:77,name:"Digital Payment Promotion Scheme",icon:"📱",iconBg:"rgba(29,155,94,.12)",cat:"Financial",desc:"Government initiative to promote cashless digital transactions via UPI, BHIM, RuPay. Merchant onboarding and cashback incentives.",tags:["Digital","UPI","Cashless","Payments"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://www.npci.org.in",
  fullDetails:{
    ministry:"Ministry of Finance / NPCI",launched:"2016 (ongoing)",
    benefit:"Merchant onboarding support, subsidised QR codes, transaction incentives for small merchants, consumer cashbacks",
    eligibility:["All merchants and consumers","Small businesses and street vendors","No income limit"],
    documents:["Aadhaar Card","Bank account (any bank)","Mobile number","GST registration (optional for merchants)"],
    applyProcess:["Download BHIM/UPI app from Play Store","Link bank account","Set UPI PIN","Start transacting instantly","Merchants: contact bank for QR code installation"]
  }
},
{id:78,name:"BHIM Cashback Scheme",icon:"💸",iconBg:"rgba(29,155,94,.12)",cat:"Financial",desc:"Cashback and incentives for BHIM UPI transactions. Promotes peer-to-peer and merchant digital payments for new users.",tags:["BHIM","UPI","Cashback","Digital"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://www.bhimupi.org.in",
  fullDetails:{
    ministry:"Ministry of Electronics & IT / NPCI",launched:"2017",
    benefit:"Cashback up to ₹750 for new users; merchant cashback incentives; lucky draw prizes",
    eligibility:["New BHIM UPI users","Merchants onboarding for first time","Mobile number linked to bank account"],
    documents:["Mobile number","Bank account with UPI support","Aadhaar-linked mobile"],
    applyProcess:["Download BHIM app","Register with mobile number","Link bank account","Start making UPI transactions","Cashback auto-credited to account"]
  }
},
{id:79,name:"Financial Literacy Centres Scheme",icon:"📊",iconBg:"rgba(27,79,204,.12)",cat:"Financial",desc:"RBI-sponsored financial literacy camps at rural and semi-urban centres. Free financial education on banking, savings, insurance, credit.",tags:["Education","Literacy","Banking","Free"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://www.rbi.org.in/financialeducation",
  fullDetails:{
    ministry:"Reserve Bank of India",launched:"2007",
    benefit:"Free financial education on banking, credit, savings, insurance, investment and digital payments",
    eligibility:["All citizens, especially rural communities","Women SHGs","Farmers and MSMEs","School children"],
    documents:["No documents required for attending camps"],
    applyProcess:["Locate nearest FLC through RBI website","Attend free seminars and workshops","Access online financial literacy material at rbi.org.in","Contact Lead District Manager for camp schedule"]
  }
},
{id:80,name:"Credit Guarantee Fund Scheme (CGFMU)",icon:"🏦",iconBg:"rgba(245,166,35,.12)",cat:"Financial",desc:"Collateral-free credit guarantee for micro units up to ₹10 lakh. Covers loans given by MFIs, NBFCs to micro entrepreneurs.",tags:["MSME","Credit","Guarantee","Micro"],eligibleFor:["all"],incomeMax:10,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://www.mudra.org.in/cgfmu",
  fullDetails:{
    ministry:"Ministry of Finance / MUDRA",launched:"2016",
    benefit:"Credit guarantee cover up to 75% of loan amount; enables collateral-free loans up to ₹10 lakh for micro units",
    eligibility:["Micro enterprises (non-farm income generating)","Borrowers from eligible MFIs/NBFCs/SFBs","Loan amount up to ₹10 lakh"],
    documents:["Aadhaar Card","Business proof","Bank account","Income proof"],
    applyProcess:["Apply through MUDRA-empanelled MFI/NBFC","Lender covers loan under CGFMU","No separate application needed by borrower","Lender pays guarantee fee to CGFMU"]
  }
},
{id:81,name:"Standby Line of Credit Scheme",icon:"🔐",iconBg:"rgba(27,79,204,.12)",cat:"Financial",desc:"Emergency credit line for Micro Finance Institutions to manage liquidity crisis. Strengthens credit flow to rural micro borrowers.",tags:["MFI","Credit","Liquidity","Emergency"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://www.sidbi.in",
  fullDetails:{
    ministry:"Ministry of Finance / SIDBI / MUDRA",launched:"2016",
    benefit:"Emergency credit line to MFIs maintaining rural lending; ensures uninterrupted credit flow to rural women borrowers",
    eligibility:["Micro Finance Institutions (MFIs)","NBFCs involved in micro lending","Ultimately benefits rural micro borrowers"],
    documents:["For MFIs: financial statements, portfolio details","For borrowers: standard MFI loan application"],
    applyProcess:["MFIs apply to SIDBI/MUDRA for standby line","Approved MFIs draw funds during liquidity stress","Benefits passed to rural micro borrowers","Contact SIDBI for MFI empanelment"]
  }
},
{id:82,name:"Banking Correspondent Model Scheme",icon:"🏪",iconBg:"rgba(29,155,94,.12)",cat:"Financial",desc:"Doorstep banking through agents in unbanked villages. BCs provide account opening, deposits, withdrawals, AEPS, and DBT services.",tags:["Banking","Rural","AEPS","Doorstep"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://www.rbi.org.in/businesscorrespondent",
  fullDetails:{
    ministry:"Reserve Bank of India / Ministry of Finance",launched:"2006 (expanded 2010)",
    benefit:"Banking services at doorstep in remote villages: account opening, cash deposits/withdrawals, remittances, AEPS, micro insurance",
    eligibility:["All citizens in unbanked/underbanked areas","No minimum income or balance required"],
    documents:["Aadhaar Card for AEPS","Bank account number","Mobile number"],
    applyProcess:["Locate nearest Banking Correspondent agent","Use Aadhaar biometric for AEPS transactions","Open accounts through BC","Access DBT credits through BC agent"]
  }
},
{id:83,name:"Jan Suraksha Campaign",icon:"🛡️",iconBg:"rgba(212,64,42,.1)",cat:"Financial",desc:"Three flagship social security schemes: PM Suraksha Bima (accident insurance ₹2L at ₹20/year), PM Jeevan Jyoti (life cover ₹2L at ₹436/year), APY (pension).",tags:["Insurance","Pension","Social Security","₹20/yr"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://jansuraksha.gov.in",
  fullDetails:{
    ministry:"Ministry of Finance",launched:"May 2015",
    benefit:"PMSBY: ₹2L accidental death @ ₹20/yr | PMJJBY: ₹2L life cover @ ₹436/yr | APY: ₹1,000–₹5,000 pension",
    eligibility:["PMSBY: Age 18–70, bank account","PMJJBY: Age 18–50, bank account","APY: Age 18–40, savings bank account"],
    documents:["Aadhaar Card","Bank passbook","Mobile number","Nomination details"],
    applyProcess:["Visit any bank branch or net banking","Select PMSBY/PMJJBY/APY","Fill enrolment form","Auto-debit premium from bank account","Certificate issued immediately"]
  }
},
{id:84,name:"Payment Infrastructure Development Fund (PIDF)",icon:"💳",iconBg:"rgba(27,79,204,.12)",cat:"Financial",desc:"RBI fund to subsidise payment acceptance infrastructure in tier-3 to tier-6 cities and NE states. Supports QR code and POS deployment.",tags:["Digital","Payments","Rural","POS"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://www.rbi.org.in/pidf",
  fullDetails:{
    ministry:"Reserve Bank of India",launched:"January 2021",
    benefit:"Subsidy for deploying payment acceptance devices (POS, QR codes) in underserved areas; reduces cost for merchants",
    eligibility:["Merchants in tier 3–6 cities","Merchants in North-East states","PM SVANidhi beneficiaries","PM WANI WiFi PM beneficiaries"],
    documents:["Business registration proof","Aadhaar/PAN","Bank account","GST number (if applicable)"],
    applyProcess:["Apply through acquiring bank or payment aggregator","Bank applies for PIDF subsidy on behalf of merchant","Device deployed at subsidised cost","Subsidy credited to deploying agency"]
  }
},
{id:85,name:"Account Aggregator Framework",icon:"🔗",iconBg:"rgba(29,155,94,.12)",cat:"Financial",desc:"RBI-regulated data-sharing consent framework. Share your financial data securely across banks, insurers, and lenders for faster loan approvals.",tags:["Data","Fintech","Digital","Consent"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://sahamati.org.in",
  fullDetails:{
    ministry:"Reserve Bank of India / Ministry of Finance",launched:"September 2021",
    benefit:"Instant loan approvals by sharing bank/tax/GST data; no physical documents; faster insurance claims; better credit access",
    eligibility:["All individuals and businesses with bank/financial accounts","Users of AA-registered apps","No income restriction"],
    documents:["No physical documents — digital consent via AA app","Aadhaar or mobile for authentication"],
    applyProcess:["Download an Account Aggregator app (Finvu, OneMoney, CAMS FinServ etc.)","Create AA handle","Link financial accounts (banks, insurers)","Consent to share data with lenders when needed","Revoke consent anytime"]
  }
},

/* ══════════════════════════════════════════════════════
   🌾 AGRICULTURE & FARMERS (IDs 86–99)
══════════════════════════════════════════════════════ */
{id:86,name:"Paramparagat Krishi Vikas Yojana (PKVY)",icon:"🌿",iconBg:"rgba(29,155,94,.12)",cat:"Agriculture",desc:"Promotes organic farming in cluster mode. ₹50,000/hectare assistance to farmer groups over 3 years for certification, inputs, and marketing.",tags:["Organic","Farmer","₹50K","Cluster"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://pgsindia-ncof.gov.in",
  fullDetails:{
    ministry:"Ministry of Agriculture & Farmers Welfare",launched:"2015",
    benefit:"₹50,000/hectare over 3 years: ₹31,000 for organic inputs, ₹8,800 for PGS certification, ₹10,200 for value addition",
    eligibility:["Farmer clusters of minimum 50 farmers","Minimum 50 acres of contiguous land","Willingness for organic certification","All categories of farmers"],
    documents:["Aadhaar Card","Land records","Bank passbook","Cluster group registration"],
    applyProcess:["Form cluster of 50+ farmers","Contact State Agriculture Department","Apply through state portal","Complete PGS India organic certification","Market under India Organic / Jaivik Kheti label"]
  }
},
{id:87,name:"e-NAM (National Agriculture Market)",icon:"🛒",iconBg:"rgba(29,155,94,.12)",cat:"Agriculture",desc:"Online trading portal linking 1,000+ APMCs. Farmers can sell produce online with transparent price discovery and direct payment.",tags:["Market","Online","Price","Trading"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://enam.gov.in",
  fullDetails:{
    ministry:"Ministry of Agriculture & Farmers Welfare (SFAC)",launched:"April 2016",
    benefit:"Transparent electronic bidding, pan-India market access, better price discovery, direct bank payment within 24 hours",
    eligibility:["All farmers with produce to sell","Traders, FPOs, exporters for buying","1,000+ APMC mandis integrated"],
    documents:["Aadhaar Card","Bank account","Land records (for registration)","Mobile number"],
    applyProcess:["Register at enam.gov.in or nearest integrated APMC","Upload produce details and quantity","Participate in electronic bidding","Accept best price","Payment transferred to bank account"]
  }
},
{id:88,name:"Rainfed Area Development Programme",icon:"🌧️",iconBg:"rgba(29,155,94,.12)",cat:"Agriculture",desc:"Integrated farming system for rainfed regions. Supports crop diversification, water harvesting, soil health, and livelihoods in drought-prone areas.",tags:["Rainfed","Drought","Farming","Water"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://rkvy.nic.in",
  fullDetails:{
    ministry:"Ministry of Agriculture & Farmers Welfare",launched:"2011 (under RKVY)",
    benefit:"Cluster-based integrated farming support: seed inputs, water conservation structures, farm equipment, livelihood support up to ₹28,000/cluster",
    eligibility:["Farmers in designated rainfed/drought-prone districts","All land-holding categories","SC/ST farmers prioritised"],
    documents:["Aadhaar Card","Land records","Bank passbook","District agriculture office registration"],
    applyProcess:["Contact District Agriculture Officer","Identify as rainfed zone farmer","Enrol in cluster programme","Receive inputs and training","Participate in water conservation activities"]
  }
},
{id:89,name:"National Food Security Mission (NFSM)",icon:"🌾",iconBg:"rgba(29,155,94,.12)",cat:"Agriculture",desc:"Increase production of rice, wheat, pulses, coarse cereals. Provides seeds, fertilizers, farm equipment at subsidised rates to farmers.",tags:["Crops","Subsidy","Seeds","Production"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nfsm.gov.in",
  fullDetails:{
    ministry:"Ministry of Agriculture & Farmers Welfare",launched:"2007",
    benefit:"Subsidised HYV seeds, micro-nutrients, soil amendments, farm machinery; demonstration plots; training",
    eligibility:["Farmers in NFSM-designated districts","All categories of farmers","Focus on small/marginal farmers"],
    documents:["Aadhaar Card","Land records","Bank passbook","Voter ID"],
    applyProcess:["Contact District Agriculture Officer","Enrol in NFSM intervention","Receive subsidised inputs","Attend demonstration and training camps","Apply online at nfsm.gov.in"]
  }
},
{id:90,name:"National Mission on Oilseeds & Oil Palm",icon:"🌻",iconBg:"rgba(245,166,35,.12)",cat:"Agriculture",desc:"Increase domestic oilseed and oil palm production. Subsidised seeds, planting material, and farm machinery for oilseed farmers.",tags:["Oilseeds","Palm","Subsidy","Crops"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nmoop.gov.in",
  fullDetails:{
    ministry:"Ministry of Agriculture & Farmers Welfare",launched:"2014",
    benefit:"Seed subsidy up to 50%, oil palm planting material, micro-irrigation support, insecticide/fungicide subsidy, machinery at 40% subsidy",
    eligibility:["Farmers growing oilseeds (groundnut, mustard, soybean, sunflower)","Oil palm farmers in designated districts","All land-holding categories"],
    documents:["Aadhaar Card","Land records","Bank passbook","Soil health card"],
    applyProcess:["Contact State Horticulture/Agriculture Department","Enrol in NMOOP programme","Receive subsidised planting material","Attend training on GAP","Sell produce at MSP at procurement centres"]
  }
},
{id:91,name:"Sub-Mission on Agricultural Mechanization",icon:"🚜",iconBg:"rgba(29,155,94,.12)",cat:"Agriculture",desc:"40–50% subsidy on farm machinery like tractors, power tillers, combine harvesters. Custom Hiring Centres for small farmers.",tags:["Machinery","Tractor","Subsidy","Equipment"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://agrimachinery.nic.in",
  fullDetails:{
    ministry:"Ministry of Agriculture & Farmers Welfare",launched:"2014",
    benefit:"40% subsidy for individuals; 80% for SC/ST/small farmers; up to ₹25 lakh for Custom Hiring Centres",
    eligibility:["Individual farmers (40% subsidy)","SC/ST, small & marginal farmers (50% subsidy)","FPOs/cooperatives for Custom Hiring Centres (80%)"],
    documents:["Aadhaar Card","Land records","Bank passbook","Caste certificate (for SC/ST)","Quotation from authorized dealer"],
    applyProcess:["Apply at agrimachinery.nic.in","Select machinery and dealer","Approval by district agriculture officer","Pay remaining amount after subsidy","Subsidy directly to dealer account"]
  }
},
{id:92,name:"National Bamboo Mission",icon:"🎋",iconBg:"rgba(29,155,94,.12)",cat:"Agriculture",desc:"Develop bamboo sector for livelihood and greening. Planting material, nurseries, value-addition units, and market linkages supported.",tags:["Bamboo","Forest","Livelihood","Green"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nbm.nic.in",
  fullDetails:{
    ministry:"Ministry of Agriculture & Farmers Welfare",launched:"2018",
    benefit:"Planting material, bamboo cultivation support ₹5,000–₹12,500/ha, nursery development, processing units support",
    eligibility:["Farmers willing to cultivate bamboo","Tribal and forest-fringe communities","Private land and non-forest government land"],
    documents:["Aadhaar Card","Land records","Bank passbook","Village/district registration"],
    applyProcess:["Contact State Nodal Agency for NBM","Apply for plantation support","Receive subsidised planting material","Plantation verified by block officer","Instalment support released"]
  }
},
{id:93,name:"Blue Revolution Scheme",icon:"🐟",iconBg:"rgba(27,79,204,.12)",cat:"Agriculture",desc:"Integrated fisheries development for fishermen. Aquaculture, inland fisheries, marine fisheries support with 40% subsidy on infrastructure.",tags:["Fisheries","Aquaculture","Subsidy","Fishermen"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://dof.gov.in",
  fullDetails:{
    ministry:"Ministry of Fisheries, Animal Husbandry & Dairying",launched:"2015",
    benefit:"40% subsidy on pond construction, fingerlings, feed, boats, nets; insurance for fishermen; 50% for SC/ST/women",
    eligibility:["Marine and inland fishermen","Aquaculture farmers","Fish farmer producer organisations","SC/ST/women fishermen prioritised"],
    documents:["Aadhaar Card","Fishermen ID card","Land/water body records","Bank passbook","Caste certificate"],
    applyProcess:["Apply at State Fisheries Department","Submit project proposal","Inspection by department officer","Subsidy released in instalments","Insurance enrollment through PMMSY"]
  }
},
{id:94,name:"Rashtriya Krishi Vikas Yojana (RKVY)",icon:"📈",iconBg:"rgba(29,155,94,.12)",cat:"Agriculture",desc:"State-driven agriculture development with flexible funding. Infrastructure, value chain, startups, and district-specific agriculture projects funded.",tags:["Agriculture","State","Flexible","Development"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://rkvy.nic.in",
  fullDetails:{
    ministry:"Ministry of Agriculture & Farmers Welfare",launched:"2007",
    benefit:"Flexible state-driven funding: farm ponds, custom hiring centres, FPO support, agri startups, value chain projects",
    eligibility:["All farmers in RKVY-covered states","FPOs, SHGs, agri entrepreneurs","State-specific eligibility criteria"],
    documents:["Aadhaar Card","Land records","Bank passbook","State-specific application"],
    applyProcess:["Apply through State Agriculture Department","Projects sanctioned at state level","District Agriculture Office for individual schemes","Contact ATMA (Agriculture Technology Management Agency)"]
  }
},
{id:95,name:"Mission Organic Value Chain Development",icon:"🌱",iconBg:"rgba(29,155,94,.12)",cat:"Agriculture",desc:"Develop end-to-end organic value chain in North-East India. Seed to market support including certification, processing, and marketing.",tags:["Organic","NorthEast","Value Chain","Certification"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://movcd.nic.in",
  fullDetails:{
    ministry:"Ministry of Agriculture & Farmers Welfare",launched:"2015",
    benefit:"Cluster-based support: ₹25,000/ha organic inputs, ₹7,500/ha packaging, ₹3,000/ha marketing; PGS certification free",
    eligibility:["Farmers in North-Eastern states (Arunachal, Assam, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, Tripura)","Farmer clusters of 100+ farmers"],
    documents:["Aadhaar Card","Land records","Cluster registration","Bank passbook"],
    applyProcess:["Form cluster with 100+ farmers","Register with State Horticulture Department","Get organic certification (PGS/3rd party)","Receive input support and training","Sell under MOVCDNER brand"]
  }
},
{id:96,name:"National Beekeeping & Honey Mission",icon:"🍯",iconBg:"rgba(245,166,35,.12)",cat:"Agriculture",desc:"Promote scientific beekeeping for honey production and crop pollination. Free beehives, training, processing units, and marketing support.",tags:["Beekeeping","Honey","Livelihood","Training"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nbb.gov.in",
  fullDetails:{
    ministry:"Ministry of Agriculture / National Bee Board",launched:"2020",
    benefit:"Free bee colonies, 50% subsidy on bee boxes, honey processing plant support, training at KVKs, market linkages",
    eligibility:["Farmers and rural unemployed youth","SHGs and FPOs","All categories; women and tribal farmers prioritised"],
    documents:["Aadhaar Card","Bank passbook","Land records or residence proof"],
    applyProcess:["Apply at National Bee Board (nbb.gov.in)","Contact KVK or State Horticulture Department","Attend 5-day beekeeping training","Receive subsidised beehive and colonies","Sell honey through cooperative or NAFED"]
  }
},
{id:97,name:"Agriculture Infrastructure Fund",icon:"🏗️",iconBg:"rgba(27,79,204,.12)",cat:"Agriculture",desc:"₹1 lakh crore fund for post-harvest infrastructure. Low-interest loans for cold storage, warehouses, processing units, and sorting grading.",tags:["Infrastructure","Loan","Cold Storage","Post-harvest"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://agriinfra.dac.gov.in",
  fullDetails:{
    ministry:"Ministry of Agriculture & Farmers Welfare",launched:"August 2020",
    benefit:"Loan up to ₹2 crore at 3% interest subvention; credit guarantee through CGTMSE; viable gap funding",
    eligibility:["Farmers, FPOs, PACS, Marketing Cooperatives","SHGs, Joint Liability Groups","Agri entrepreneurs, startups, AgriTech firms"],
    documents:["Aadhaar Card","PAN Card","Business plan / DPR","Bank account","Land documents","GST registration"],
    applyProcess:["Apply at agriinfra.dac.gov.in","Select eligible activity","Submit DPR to bank","Bank sanctions loan","Interest subvention credited by government","CGTMSE guarantee for collateral-free loans"]
  }
},
{id:98,name:"PMFME Scheme",icon:"🏭",iconBg:"rgba(29,155,94,.12)",cat:"Agriculture",desc:"Formalise micro food processing enterprises. 35% subsidy up to ₹10 lakh for upgrading existing food processing units with technology and market linkage.",tags:["Food Processing","MSME","Subsidy","Micro"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://pmfme.mofpi.gov.in",
  fullDetails:{
    ministry:"Ministry of Food Processing Industries",launched:"June 2020",
    benefit:"35% subsidy (max ₹10 lakh) on plant & machinery upgradation; credit linkage; common facility centres; branding support",
    eligibility:["Existing micro food processing units","Self-employed individuals and SHGs","Food processing startups","Turnover < ₹25 lakh (micro enterprise)"],
    documents:["Aadhaar Card","PAN Card","Business registration","Bank passbook","Land/rent proof","FSSAI license"],
    applyProcess:["Register at pmfme.mofpi.gov.in","Apply in selected food category","Prepare DPR with cost estimates","District Resource Person assists","DIC approval","Subsidy released after bank loan sanction"]
  }
},
{id:99,name:"Integrated Scheme on Agriculture Cooperation",icon:"🤝",iconBg:"rgba(29,155,94,.12)",cat:"Agriculture",desc:"Strengthens agricultural cooperatives through financial assistance. Processing plants, cold chains, and weaker section cooperatives funded.",tags:["Cooperative","Agriculture","Processing","Subsidy"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nafscob.org",
  fullDetails:{
    ministry:"Ministry of Cooperation / Ministry of Agriculture",launched:"2017",
    benefit:"Financial assistance for cooperative storage/processing infrastructure; support to sugar mills; NCDC loans at concessional rates",
    eligibility:["Primary agricultural cooperative societies (PACS)","Cooperative sugar factories","Weaving cooperatives","NCDC member institutions"],
    documents:["Cooperative registration certificate","Audited balance sheet","Project report","Bank account","Member records"],
    applyProcess:["Apply through State Cooperative Department","NCDC channels the assistance","Project appraisal by NCDC team","Loan/grant released in instalments","Repayment linked to project income"]
  }
},

/* ══════════════════════════════════════════════════════
   🏠 HOUSING / RURAL / URBAN (IDs 100–111)
══════════════════════════════════════════════════════ */
{id:100,name:"Deendayal Antyodaya Yojana – NRLM",icon:"🏘️",iconBg:"rgba(27,79,204,.12)",cat:"Housing",desc:"Rural livelihood mission forming 1 crore+ SHGs. Provides revolving funds, training, bank linkage, and market access to rural poor women.",tags:["SHG","Rural","Women","Livelihood"],eligibleFor:["all"],incomeMax:2,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://aajeevika.gov.in",
  fullDetails:{
    ministry:"Ministry of Rural Development",launched:"2011",
    benefit:"Revolving fund ₹10,000–₹15,000 per SHG; bank linkage up to ₹6 lakh; skill training; Community Investment Fund",
    eligibility:["Rural BPL families (women members primarily)","Destitute, differently-abled, tribal women","SECC-identified households"],
    documents:["Aadhaar Card","Ration card","Bank passbook","SHG meeting records"],
    applyProcess:["Join a Self Help Group (SHG) in village","Contact Block Mission Management Unit","Attend regular SHG meetings and savings","Apply for Revolving Fund after 6 months","Graduate to Community Investment Fund"]
  }
},
{id:101,name:"Deendayal Antyodaya Yojana – NULM",icon:"🏙️",iconBg:"rgba(27,79,204,.12)",cat:"Housing",desc:"Urban livelihood mission for poor in cities. Self-employment, SHGs, skill training, shelter for homeless, and street vendor support.",tags:["Urban","SHG","Skills","Livelihood"],eligibleFor:["all"],incomeMax:2,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nulm.gov.in",
  fullDetails:{
    ministry:"Ministry of Housing & Urban Affairs",launched:"2014",
    benefit:"Skill training (free), self-employment loan subsidy 25% (max ₹10,000), shelter for urban homeless, street vendor identity cards",
    eligibility:["Urban poor families","Urban homeless","Street vendors","Women SHGs in urban areas"],
    documents:["Aadhaar Card","Ration card/BPL proof","Bank passbook","Residence proof in urban area"],
    applyProcess:["Apply at Urban Local Body (ULB)","Join Urban SHG","Enrol for skill training at designated centre","Apply for self-employment loan through bank","Receive city livelihood centre services"]
  }
},
{id:102,name:"HRIDAY Scheme",icon:"🏛️",iconBg:"rgba(245,166,35,.12)",cat:"Housing",desc:"Heritage City Development for 12 historic cities. Restoration of ghats, temples, market places, and public spaces with modern infrastructure.",tags:["Heritage","Urban","Restoration","Tourism"],eligibleFor:["all"],incomeMax:99,deadline:"Completed (2019)",daysLeft:null,eligible:"yes",website:"https://hridayscheme.org",
  fullDetails:{
    ministry:"Ministry of Housing & Urban Affairs",launched:"January 2015",
    benefit:"Infrastructure improvement in 12 cities: Varanasi, Mathura, Amritsar, Gaya, Puri, Kanchipuram, Vellankanni, Badami, Warangal, Amaravati, Ajmer, Dwaraka",
    eligibility:["Residents of 12 designated heritage cities","Tourism and cultural stakeholders"],
    documents:["Not applicable (city-level scheme)"],
    applyProcess:["Benefits implemented through Municipal Corporations","Residents benefit from improved public infrastructure","Entrepreneur opportunities in tourism sector"]
  }
},
{id:103,name:"Rurban Mission",icon:"🌇",iconBg:"rgba(27,79,204,.12)",cat:"Housing",desc:"Transform rural clusters with urban amenities. Skills, road, water, sanitation, electricity for 300 rural clusters across India.",tags:["Rural","Urban","Cluster","Infrastructure"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://rurban.gov.in",
  fullDetails:{
    ministry:"Ministry of Rural Development",launched:"February 2016",
    benefit:"Urban facilities (roads, water, sanitation, electricity, skills, healthcare) in rural clusters with economic activity",
    eligibility:["Residents of 300 designated Rurban clusters","All income groups in selected clusters"],
    documents:["Aadhaar Card (for scheme-specific benefits)"],
    applyProcess:["Benefits delivered through Rurban cluster development plan","Contact Gram Panchayat or Block Development Office","Apply for specific component schemes (PMGSY, Jal Jeevan, etc.)"]
  }
},
{id:104,name:"National Urban Housing Fund",icon:"🏢",iconBg:"rgba(27,79,204,.12)",cat:"Housing",desc:"₹60,000 crore fund to accelerate affordable housing construction. Low-cost loans to housing projects targeting EWS/LIG beneficiaries.",tags:["Housing","Fund","Affordable","EWS"],eligibleFor:["all"],incomeMax:6,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://pmaymis.gov.in",
  fullDetails:{
    ministry:"Ministry of Housing & Urban Affairs / NHB",launched:"2018",
    benefit:"Concessional funding to developers for affordable housing; benefits passed as subsidised home prices to EWS/LIG buyers",
    eligibility:["EWS (income up to ₹3 lakh) and LIG (up to ₹6 lakh) buyers","Urban residents without pucca house","First-time home buyers"],
    documents:["Aadhaar Card","Income certificate","EWS/LIG self-declaration","Bank account","Salary slips / ITR"],
    applyProcess:["Apply under PMAY-U CLSS component","Contact any Scheduled Bank or HFC","Loan sanctioned and CLSS subsidy applied","House purchased from approved projects"]
  }
},
{id:105,name:"Affordable Rental Housing Complexes",icon:"🏨",iconBg:"rgba(27,79,204,.12)",cat:"Housing",desc:"Low-rent housing for migrant workers and urban poor. Government buildings converted to rental housing at ₹1,000–₹3,000/month.",tags:["Rental","Migrant","Urban","Housing"],eligibleFor:["all"],incomeMax:6,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://mohua.gov.in/arhc",
  fullDetails:{
    ministry:"Ministry of Housing & Urban Affairs",launched:"July 2020",
    benefit:"Affordable rental accommodation at ₹1,000–₹3,000/month; short-term stay for migrants and urban workers",
    eligibility:["Migrant workers in cities","Urban poor, industrial workers","EWS/LIG households","Students and young professionals"],
    documents:["Aadhaar Card","Employment proof","Bank account","Residence/origin proof"],
    applyProcess:["Apply through Urban Local Body (ULB)","Identify ARHC in your city","Submit application with documents","Allotment based on eligibility","Pay affordable monthly rent"]
  }
},
{id:106,name:"PM Gram Sadak Yojana (PMGSY)",icon:"🛣️",iconBg:"rgba(27,79,204,.12)",cat:"Housing",desc:"All-weather road connectivity to unconnected rural habitations of 250+ population. Over 7 lakh km of roads completed.",tags:["Roads","Rural","Connectivity","Infrastructure"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://pmgsy.nic.in",
  fullDetails:{
    ministry:"Ministry of Rural Development",launched:"December 2000",
    benefit:"All-weather road to connect unconnected habitations; improved market access, healthcare and education connectivity",
    eligibility:["Residents of unconnected habitations (250+ population in plains, 100+ in hilly areas)"],
    documents:["Not applicable (area-based scheme)"],
    applyProcess:["Habitation connectivity identified by State","Road sanctioned and constructed by state agency","Residents benefit automatically from connectivity","Raise road quality issues at pmgsy.nic.in"]
  }
},
{id:107,name:"National Rural Drinking Water Programme",icon:"💧",iconBg:"rgba(27,79,204,.12)",cat:"Housing",desc:"Safe piped drinking water to every rural household. Integrated with Jal Jeevan Mission for Har Ghar Jal (tap water to every home).",tags:["Water","Rural","Drinking","Pipeline"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://jaljeevanmission.gov.in",
  fullDetails:{
    ministry:"Ministry of Jal Shakti",launched:"2009 (evolved to JJM 2019)",
    benefit:"55 litres per person per day of safe piped water; tap connection to every rural home by 2024",
    eligibility:["All rural households","Tribal, SC/ST habitations prioritised","Schools and Anganwadis covered first"],
    documents:["Aadhaar Card (for household connection)","Land/house records","Bank account (for subsidy in some states)"],
    applyProcess:["Contact Gram Panchayat for water connection","Application through State Jal Jeevan portal","Connection provided free/subsidised","Water quality tested regularly","Report issues at jaljeevanmission.gov.in"]
  }
},
{id:108,name:"Urban Rejuvenation Mission (AMRUT)",icon:"🌊",iconBg:"rgba(27,79,204,.12)",cat:"Housing",desc:"Water supply, sewerage, green spaces, and public transport for 500 cities. ₹1 lakh crore investment in urban basic services.",tags:["Urban","Water","Sewerage","Rejuvenation"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://amrut.gov.in",
  fullDetails:{
    ministry:"Ministry of Housing & Urban Affairs",launched:"June 2015 (AMRUT 2.0: 2021)",
    benefit:"Water tap connections for all urban households, sewerage, parks, public transport (buses), water conservation",
    eligibility:["Residents of 500 AMRUT cities","Urban households without water/sewer connection"],
    documents:["Aadhaar Card","Residence proof","Electricity bill","Property tax receipt"],
    applyProcess:["Contact Urban Local Body (ULB)","Apply for water/sewer connection","Connection provided as per AMRUT plan","Report issues to ULB or amrut.gov.in"]
  }
},
{id:109,name:"Jal Shakti Abhiyan",icon:"🚰",iconBg:"rgba(29,155,94,.12)",cat:"Housing",desc:"Water conservation campaign for water-stressed districts. Rainwater harvesting, recharge of traditional water bodies, and watershed development.",tags:["Water","Conservation","Rainwater","Campaign"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://jaljeevanmission.gov.in",
  fullDetails:{
    ministry:"Ministry of Jal Shakti",launched:"July 2019",
    benefit:"Improved groundwater levels, rejuvenated water bodies, rainwater harvesting structures, drought resilience",
    eligibility:["All residents in 255 water-stressed districts","Farmers, communities, village institutions"],
    documents:["No specific documents for participation","Land records for farm water harvesting"],
    applyProcess:["Participate in water conservation drives in village","Contact District Administration for water conservation projects","Farmers: apply for farm ponds under MGNREGS/RKVY","Community: take up water body restoration"]
  }
},
{id:110,name:"Saansad Adarsh Gram Vikas Yojana",icon:"🏡",iconBg:"rgba(27,79,204,.12)",cat:"Housing",desc:"Each MP adopts a village for holistic development. Roads, schools, health centres, digital literacy, sanitation, and livelihood in model villages.",tags:["Village","MP","Development","Rural"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://saanjhi.gov.in",
  fullDetails:{
    ministry:"Ministry of Rural Development",launched:"October 2014",
    benefit:"Integrated development of adopted village: all central government schemes converge; MP personally oversees development",
    eligibility:["Residents of MP-adopted Gram Panchayats","Each MP to adopt 1 village by 2016, then 5 by 2024"],
    documents:["Aadhaar Card for scheme-specific applications"],
    applyProcess:["Contact your area MP office","Residents can suggest development needs","Benefits flow through existing schemes (MGNREGS, PMGSY, etc.)","Participate in Gram Sabha meetings","Monitor development through saanjhi.gov.in"]
  }
},
{id:111,name:"Gram Swaraj Abhiyan",icon:"🗺️",iconBg:"rgba(29,155,94,.12)",cat:"Housing",desc:"Saturate 7 flagship schemes in poor and SC/ST-dominated villages: electricity, LPG, housing, bank accounts, crop insurance, DBT, vaccines.",tags:["Saturation","SC/ST","Rural","7 Schemes"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://gramrajasthan.gov.in",
  fullDetails:{
    ministry:"Ministry of Rural Development",launched:"April 2018",
    benefit:"100% saturation of Saubhagya, Ujjwala, PM Awas, Jan Dhan, Fasal Bima, DBT, and Mission Indradhanush in targeted villages",
    eligibility:["Residents of backward/SC-dominated villages","BPL families","All unbanked, uninsured, unlit households"],
    documents:["Aadhaar Card","Ration card","Bank passbook","Caste certificate (for SC/ST)"],
    applyProcess:["Camp organised at village level by government teams","On-spot enrolment for all 7 schemes","Door-to-door verification","Benefits activated immediately","Follow up with Block Development Officer"]
  }
},

/* ══════════════════════════════════════════════════════
   🏥 HEALTH / MEDICAL (IDs 112–123)
══════════════════════════════════════════════════════ */
{id:112,name:"Rashtriya Swasthya Bima Yojana",icon:"💊",iconBg:"rgba(212,64,42,.1)",cat:"Health",desc:"Smart card-based cashless health insurance of ₹30,000/year for BPL families. Covers hospitalisation at empanelled public and private hospitals.",tags:["Health","BPL","Insurance","Cashless"],eligibleFor:["all"],incomeMax:2,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://rsby.gov.in",
  fullDetails:{
    ministry:"Ministry of Labour & Employment",launched:"April 2008",
    benefit:"₹30,000 annual health cover per family; smart card for cashless treatment; covers pre-existing diseases from day 1",
    eligibility:["BPL families","Unorganised sector workers","Construction, MGNREGS, beedi, domestic workers"],
    documents:["Aadhaar Card","BPL Ration Card","RSBY Smart Card (issued free)","Bank passbook"],
    applyProcess:["BPL families enrolled by State Government","Smart card issued at enrolment camp","Use smart card at empanelled hospital for cashless treatment","Top-up insurance available additionally"]
  }
},
{id:113,name:"National TB Elimination Programme",icon:"🫁",iconBg:"rgba(212,64,42,.1)",cat:"Health",desc:"Free diagnosis, treatment, and nutritional support for TB patients. Nikshay Poshan Yojana gives ₹500/month directly to patients during treatment.",tags:["TB","Free","Treatment","Nutrition"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nikshay.in",
  fullDetails:{
    ministry:"Ministry of Health & Family Welfare",launched:"Revised 2017 (target: TB-free India by 2025)",
    benefit:"Free TB drugs (6–9 months), free diagnosis, ₹500/month nutritional support (Nikshay Poshan Yojana), free transport reimbursement",
    eligibility:["All TB patients regardless of income","Presumptive TB cases for free testing","Drug-resistant TB patients (additional support)"],
    documents:["Aadhaar Card (for Nikshay Poshan DBT)","Bank passbook","TB diagnosis certificate from RNTCP"],
    applyProcess:["Visit government health facility (DOTS centre)","Get tested free (CBNAAT/X-ray)","Registered on Nikshay platform","Receive free medicines","₹500/month credited to bank account monthly"]
  }
},
{id:114,name:"National AIDS Control Programme",icon:"🔴",iconBg:"rgba(212,64,42,.1)",cat:"Health",desc:"Free HIV testing, ART medicines, PPTCT services, and care for PLHIV. 100% free antiretroviral treatment at 700+ ART centres.",tags:["HIV","AIDS","Free","ART"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://naco.gov.in",
  fullDetails:{
    ministry:"Ministry of Health & Family Welfare (NACO)",launched:"1992 (Phase V ongoing)",
    benefit:"Free HIV testing, free ART medicines for life, PPTCT for pregnant women, Link ART centres, nutritional support, legal aid",
    eligibility:["All persons seeking HIV testing (free, anonymous)","HIV-positive individuals","Pregnant women (PPTCT)","High-risk groups"],
    documents:["Aadhaar (for ART registration, not mandatory for testing)","Medical records"],
    applyProcess:["Visit ICTC (Integrated Counselling Testing Centre) — free & anonymous","HIV+ persons registered at ART centre","Free medicines provided monthly","Viral load monitoring free","Contact NACO helpline 1097"]
  }
},
{id:115,name:"National Mental Health Programme",icon:"🧠",iconBg:"rgba(212,64,42,.1)",cat:"Health",desc:"Free mental health services at district hospitals. Trained counsellors, psychiatrists, and medicines available free at District Mental Health Programme centres.",tags:["Mental Health","Free","Counselling","DMHP"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nimhans.ac.in/nmhp",
  fullDetails:{
    ministry:"Ministry of Health & Family Welfare",launched:"1982 (DMHP 1996)",
    benefit:"Free outpatient and inpatient mental health care, free psychiatric medicines, community outreach, crisis helpline (iCall, Vandrevala)",
    eligibility:["All citizens regardless of income","Children, adolescents, elderly, post-trauma patients"],
    documents:["Aadhaar Card (for registration)","Referral letter from PHC (if available)"],
    applyProcess:["Visit District Mental Health Programme (DMHP) centre","Register at district hospital psychiatry OPD","Free assessment and treatment","Free medicines from hospital pharmacy","Crisis helpline: iCall 9152987821"]
  }
},
{id:116,name:"NPCDCS Programme",icon:"❤️",iconBg:"rgba(212,64,42,.1)",cat:"Health",desc:"Free screening and treatment for cancer, diabetes, cardiovascular diseases and stroke at CHCs/DHs. Population-based screening at doorstep.",tags:["Cancer","Diabetes","Heart","Free Screening"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nhm.gov.in/npcdcs",
  fullDetails:{
    ministry:"Ministry of Health & Family Welfare",launched:"2010",
    benefit:"Free screening for oral, breast, cervical cancer, diabetes, hypertension; free medicines; referral to higher centres",
    eligibility:["All adults 30+ years for NCD screening","Specific cancer screenings for women 30+"],
    documents:["Aadhaar Card","Health card at PHC"],
    applyProcess:["Attend population-based screening camp at village level","Register at CHC/PHC for NCD screening","Free blood sugar, BP, and cancer screening","Positive cases referred to district hospital","Free medicines and follow-up"]
  }
},
{id:117,name:"Universal Immunization Programme",icon:"💉",iconBg:"rgba(29,155,94,.12)",cat:"Health",desc:"Free vaccines for children and pregnant women against 12 diseases. Mission Indradhanush covers missed children in unreached areas.",tags:["Vaccine","Children","Free","Immunization"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nhm.gov.in/uip",
  fullDetails:{
    ministry:"Ministry of Health & Family Welfare",launched:"1985",
    benefit:"Free vaccines: BCG, OPV, Pentavalent, PCV, RVV, MR, JE, TT, IPV — 12 diseases prevented; 100% free for all children",
    eligibility:["All children from birth to 5 years","Pregnant women (TT vaccination)","No income limit"],
    documents:["Mother-Child Protection Card","Aadhaar (optional for tracking)"],
    applyProcess:["Visit nearest Anganwadi, PHC or government hospital","Register mother and child","Receive vaccines as per schedule","Mother-Child Protection Card updated","Report missed doses to ASHA worker"]
  }
},
{id:118,name:"Mission Indradhanush",icon:"🌈",iconBg:"rgba(29,155,94,.12)",cat:"Health",desc:"Intensive vaccination drives to reach unvaccinated and partially vaccinated children. 100% immunization target through ASHA and ANM house visits.",tags:["Vaccination","Children","Drive","ASHA"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://missionindradhanush.in",
  fullDetails:{
    ministry:"Ministry of Health & Family Welfare",launched:"December 2014",
    benefit:"All UIP vaccines free at doorstep; special drives in underserved areas; RI gaps filled",
    eligibility:["Children below 2 years who missed vaccination","Pregnant women","Especially in urban slums, tribal areas, migratory populations"],
    documents:["Mother-Child Protection Card","Aadhaar (optional)"],
    applyProcess:["ASHA/ANM worker visits door-to-door during campaign","Parents can bring children to vaccination site","No registration needed","Vaccine certificate updated in MCP card"]
  }
},
{id:119,name:"National Digital Health Mission",icon:"📲",iconBg:"rgba(27,79,204,.12)",cat:"Health",desc:"Create unique Health ID (ABHA) for every citizen. Stores all health records digitally. Enables telemedicine, e-prescription, and health data exchange.",tags:["Digital Health","ABHA","e-Health","Records"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://abdm.gov.in",
  fullDetails:{
    ministry:"Ministry of Health & Family Welfare / NHA",launched:"September 2021",
    benefit:"Free ABHA ID (14-digit), digital health records storage, interoperability across hospitals, e-prescriptions, health locker",
    eligibility:["All citizens of India","No income limit or age restriction"],
    documents:["Aadhaar Card (OTP-based)","Mobile number"],
    applyProcess:["Visit abdm.gov.in or ABHA app","Create ABHA ID using Aadhaar OTP","Link health records from hospitals","Share ABHA ID at doctor visits","Access records anytime on Health Records app"]
  }
},
{id:120,name:"e-Sanjeevani",icon:"🩺",iconBg:"rgba(27,79,204,.12)",cat:"Health",desc:"Free online doctor consultation from home. Government-run telemedicine platform with 1 crore+ consultations. No travel needed.",tags:["Telemedicine","Free","Online","Doctor"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://esanjeevaniopd.in",
  fullDetails:{
    ministry:"Ministry of Health & Family Welfare",launched:"April 2020",
    benefit:"Free video/audio consultation with government doctors; e-prescription; specialist referral; available 9am–6pm daily",
    eligibility:["All citizens of India","No income or age restriction","Available in all 28 states"],
    documents:["Mobile number","Aadhaar (optional)","Previous medical records (if any)"],
    applyProcess:["Visit esanjeevaniopd.in","Register with mobile OTP","Book OPD token","Wait for your turn (online queue)","Video consultation with government doctor","Receive e-prescription on mobile"]
  }
},
{id:121,name:"National Dialysis Programme",icon:"🏥",iconBg:"rgba(212,64,42,.1)",cat:"Health",desc:"Free dialysis up to 3 sessions/week for BPL kidney failure patients at district hospitals. PPP model with 700+ dialysis centres.",tags:["Kidney","Dialysis","Free","BPL"],eligibleFor:["all"],incomeMax:2,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nhm.gov.in/dialysis",
  fullDetails:{
    ministry:"Ministry of Health & Family Welfare",launched:"2016",
    benefit:"Free dialysis (3 sessions/week) for BPL patients; transport reimbursement; annual dialysis cost saving of ₹2–4 lakh",
    eligibility:["Patients with chronic kidney disease","BPL card holders","Ayushman Bharat beneficiaries"],
    documents:["Aadhaar Card","BPL Card or Ayushman card","Nephrologist prescription","Bank account for transport reimbursement"],
    applyProcess:["Contact district hospital nephrology department","Register under NDP with PMJAY/BPL card","Dialysis sessions scheduled free","Transport reimbursement credited monthly","Referral to higher centre if needed"]
  }
},
{id:122,name:"Ayush Grid Scheme",icon:"🌿",iconBg:"rgba(29,155,94,.12)",cat:"Health",desc:"Integrate Ayurveda, Yoga, Unani, Siddha, Homeopathy services with modern health systems. Free AYUSH treatment at 12,500+ AYUSH centres.",tags:["AYUSH","Ayurveda","Free","Yoga"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://ayush.gov.in",
  fullDetails:{
    ministry:"Ministry of AYUSH",launched:"2018",
    benefit:"Free AYUSH consultation and medicines; yoga sessions; wellness centres at schools and workplaces; integration with NHM",
    eligibility:["All citizens","Special focus on chronic disease patients (diabetes, arthritis, stress)"],
    documents:["Aadhaar Card (for registration at AYUSH health centre)"],
    applyProcess:["Visit nearest AYUSH Health & Wellness Centre","Consult Ayurvedic/Homeopathic/Yoga practitioner","Free medicines provided","Online yoga classes at mygov.in/ayush","Locate centre at ayush.gov.in"]
  }
},
{id:123,name:"National Health Stack",icon:"🔒",iconBg:"rgba(27,79,204,.12)",cat:"Health",desc:"Digital backbone for health insurance and records. Claims processing, health ID, health analytics, and fraud prevention through unified health infrastructure.",tags:["Digital","Insurance","Claims","Health IT"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nha.gov.in",
  fullDetails:{
    ministry:"National Health Authority / Ministry of Health",launched:"2019",
    benefit:"Faster insurance claim processing, reduced fraud, portable health records, interoperability of health systems",
    eligibility:["All citizens with PMJAY or health insurance","Healthcare providers and hospitals"],
    documents:["ABHA ID","Aadhaar Card","Health insurance card"],
    applyProcess:["Create ABHA ID at abdm.gov.in","Link health insurance to ABHA","Use ABHA at hospitals for seamless records","Claims processed digitally via NHA systems"]
  }
},

/* ══════════════════════════════════════════════════════
   📚 EDUCATION / STUDENTS (IDs 124–135)
══════════════════════════════════════════════════════ */
{id:124,name:"INSPIRE Scholarship",icon:"🔬",iconBg:"rgba(27,79,204,.12)",cat:"Education",desc:"₹80,000/year scholarship for top 1% students in Class 11–12 to pursue science. Covers BSc, MSc, and integrated science programmes.",tags:["Scholarship","Science","₹80K","Merit"],eligibleFor:["Student"],incomeMax:99,deadline:"Oct 31, 2025",daysLeft:204,eligible:"yes",website:"https://online-inspire.gov.in",
  fullDetails:{
    ministry:"Department of Science & Technology",launched:"2008",
    benefit:"₹80,000/year for B.Sc/Int.M.Sc; summer research internship ₹20,000; PhD fellowship for continuing scholars",
    eligibility:["Top 1% scorers in Class 10 board exam","Enrolled in B.Sc/Int.M.Sc in natural/basic sciences","Age 17–22 at time of application"],
    documents:["Aadhaar Card","Class 10 marksheet","Class 12 marksheet","College enrollment proof","Bank passbook","Merit/rank certificate"],
    applyProcess:["Apply at online-inspire.gov.in","Select INSPIRE-SHE scholarship","Upload documents","Head of Institution endorsement","Scholarship credited annually"]
  }
},
{id:125,name:"KVPY Scheme",icon:"🏆",iconBg:"rgba(27,79,204,.12)",cat:"Education",desc:"Kishore Vaigyanik Protsahan Yojana — fellowship for science aptitude students. Up to ₹7,000/month fellowship with contingency grant.",tags:["Science","Fellowship","Research","Merit"],eligibleFor:["Student"],incomeMax:99,deadline:"Sep 30, 2025",daysLeft:172,eligible:"yes",website:"https://kvpy.iisc.ac.in",
  fullDetails:{
    ministry:"Department of Science & Technology / IISc Bangalore",launched:"1999",
    benefit:"SA stream: ₹5,000/month + ₹20,000 contingency; SX/SB stream: ₹7,000/month + ₹28,000 contingency; up to pre-PhD level",
    eligibility:["SA: Class 11 students with 75% in Class 10 science/math","SX: Class 12 with 75% and enrolled in UG science","SB: 1st year BSc/BS students","OBC: 65%, SC/ST/PWD: 60%"],
    documents:["Aadhaar Card","Marksheets","Enrollment certificate","Bank passbook","Category certificate (if applicable)"],
    applyProcess:["Apply at kvpy.iisc.ac.in","Give KVPY aptitude test","Shortlisted students called for interview","Fellowship awarded to selected students","Annual renewal based on performance"]
  }
},
{id:126,name:"NMMS Scholarship",icon:"🎓",iconBg:"rgba(27,79,204,.12)",cat:"Education",desc:"National Means-Cum-Merit Scholarship for Class 9–12 government school students from low-income families. ₹12,000/year.",tags:["Scholarship","School","₹12K","Merit"],eligibleFor:["Student"],incomeMax:1.5,deadline:"Nov 15, 2025",daysLeft:218,eligible:"yes",website:"https://scholarships.gov.in",
  fullDetails:{
    ministry:"Ministry of Education",launched:"2008",
    benefit:"₹12,000 per year (₹1,000/month) from Class 9 to 12; direct bank transfer",
    eligibility:["Students in Class 8 (to appear in selection test)","Government/government-aided school students","Parental income below ₹1.5 lakh/year","Minimum 55% in Class 7 (50% for SC/ST)"],
    documents:["Aadhaar Card","Income certificate","Mark sheet of Class 7","Bank passbook","Caste certificate (if SC/ST)","School enrollment certificate"],
    applyProcess:["State conducts NMMS examination","Apply through state education department","Clear state selection test","Apply on scholarships.gov.in","Scholarship renewed annually with 55% marks"]
  }
},
{id:127,name:"Pragati Scholarship",icon:"👩‍💼",iconBg:"rgba(27,79,204,.12)",cat:"Education",desc:"AICTE scholarship for girl students in technical education. ₹30,000/year + ₹2,000/month contingency for meritorious girls in degree/diploma.",tags:["Girls","Technical","AICTE","₹30K"],eligibleFor:["Student"],incomeMax:8,deadline:"Oct 31, 2025",daysLeft:204,eligible:"yes",website:"https://www.aicte-pragati-saksham-gov.in",
  fullDetails:{
    ministry:"Ministry of Education / AICTE",launched:"2014",
    benefit:"₹30,000 per year for tuition + ₹2,000/month contingency; max 2 sisters from same family can avail",
    eligibility:["Girl students in 1st year of AICTE-approved degree/diploma","Family income below ₹8 lakh/year","Admission through merit/state counselling"],
    documents:["Aadhaar Card","Income certificate","Admission letter","Marksheet","Bank passbook (student's own)","Gap certificate (if applicable)"],
    applyProcess:["Apply at aicte-pragati-saksham-gov.in","Verify through institution","Documents verified by AICTE","Scholarship credited annually","Renewal based on passing all subjects"]
  }
},
{id:128,name:"Saksham Scholarship",icon:"♿",iconBg:"rgba(27,79,204,.12)",cat:"Education",desc:"AICTE scholarship for differently-abled students in technical education. ₹30,000/year + ₹2,000/month for degree/diploma students.",tags:["Differently Abled","Technical","Scholarship","AICTE"],eligibleFor:["Student"],incomeMax:8,deadline:"Oct 31, 2025",daysLeft:204,eligible:"yes",website:"https://www.aicte-pragati-saksham-gov.in",
  fullDetails:{
    ministry:"Ministry of Education / AICTE",launched:"2014",
    benefit:"₹30,000 per year tuition fee + ₹2,000/month contingency for differently-abled students",
    eligibility:["Differently-abled students (40%+ disability)","1st year AICTE-approved degree or diploma","Family income below ₹8 lakh/year"],
    documents:["Aadhaar Card","Disability certificate (40%+)","Income certificate","Admission letter","Bank passbook"],
    applyProcess:["Apply at aicte-pragati-saksham-gov.in","Select Saksham scholarship","Submit disability certificate","Institution verification","Scholarship credited to account"]
  }
},
{id:129,name:"SWAYAM Scheme",icon:"💻",iconBg:"rgba(27,79,204,.12)",cat:"Education",desc:"Free online courses from IITs, IIMs, and top universities. 1,900+ courses, credit transfer possible. Learn at your pace for free.",tags:["Online","Free","Courses","IIT"],eligibleFor:["Student"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://swayam.gov.in",
  fullDetails:{
    ministry:"Ministry of Education / AICTE",launched:"2017",
    benefit:"Free access to 1,900+ online courses; certificate on completion; credit transfer for university students; industry-recognized",
    eligibility:["Any citizen of India","Students, working professionals, homemakers","No age or income restriction"],
    documents:["No documents for free access","Aadhaar or email for account creation","Documents for exam registration (proctored exam for credit)"],
    applyProcess:["Visit swayam.gov.in","Register with email","Browse and enrol in courses","Complete video lectures and assignments","Register for proctored exam for certificate (nominal fee)"]
  }
},
{id:130,name:"SWAYAM PRABHA",icon:"📡",iconBg:"rgba(27,79,204,.12)",cat:"Education",desc:"32 DTH channels broadcasting high-quality educational content 24x7. Free access via any DTH TV connection. Covers all subjects and levels.",tags:["DTH","Free","Education","TV"],eligibleFor:["Student"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://swayamprabha.gov.in",
  fullDetails:{
    ministry:"Ministry of Education",launched:"2017",
    benefit:"32 DTH channels free via DD Free Dish and all DTH operators; 24-hour educational content for school to PG level",
    eligibility:["All citizens with DTH connection","Students without internet access especially in rural areas"],
    documents:["No documents needed — access via DTH TV"],
    applyProcess:["Add SWAYAM Prabha channels on your DTH (free)","Available on DD Free Dish (Set-top-box)","Browse schedule at swayamprabha.gov.in","Watch live and request archived content online"]
  }
},
{id:131,name:"Vidyanjali Scheme",icon:"🤝",iconBg:"rgba(245,166,35,.12)",cat:"Education",desc:"Volunteerism portal connecting educated citizens with government schools. Volunteers teach, donate equipment, and mentor students.",tags:["Volunteer","School","Mentoring","CSR"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://vidyanjali.education.gov.in",
  fullDetails:{
    ministry:"Ministry of Education",launched:"2021",
    benefit:"Schools receive expert guest lectures, equipment, library books, lab materials; volunteers get recognition certificates",
    eligibility:["Any Indian citizen as volunteer","Corporates under CSR","NRIs and diaspora","Schools across India (government schools)"],
    documents:["Volunteer registration at vidyanjali portal","ID proof","Qualification certificate"],
    applyProcess:["Register at vidyanjali.education.gov.in","Select type of contribution (service/asset/grant)","Choose nearby school","Schedule and complete contribution","Receive digital recognition certificate"]
  }
},
{id:132,name:"Operation Digital Board",icon:"🖥️",iconBg:"rgba(27,79,204,.12)",cat:"Education",desc:"Smart classrooms with interactive digital boards in Class 9–12 government schools. Connects to DIKSHA, SWAYAM Prabha for digital content.",tags:["SmartBoard","School","Digital","Class"],eligibleFor:["Student"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://diksha.gov.in",
  fullDetails:{
    ministry:"Ministry of Education",launched:"2019",
    benefit:"Digital interactive boards in every high school class; access to DIKSHA content, NCERT e-books, SWAYAM Prabha",
    eligibility:["Students in government schools (Class 9–12)","Teachers for digital content delivery"],
    documents:["School enrollment card / Aadhaar"],
    applyProcess:["Students in covered schools benefit automatically","Access DIKSHA platform on mobile: diksha.gov.in","Download DIKSHA app for content offline","Teachers trained for digital board usage"]
  }
},
{id:133,name:"UDISE+",icon:"📋",iconBg:"rgba(27,79,204,.12)",cat:"Education",desc:"Unified District Information System for Education. Tracks every school, student and teacher. Enables data-driven policy and scholarship verification.",tags:["Data","School","Digital","Tracking"],eligibleFor:["Student"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://udiseplus.gov.in",
  fullDetails:{
    ministry:"Ministry of Education",launched:"2018",
    benefit:"Accurate school data for policy; scholarship eligibility verification; school performance tracking; infrastructure tracking",
    eligibility:["All school students (data captured automatically)","Schools for data submission"],
    documents:["School UDISE code (ask school)"],
    applyProcess:["Students don't apply separately","School submits data annually on UDISE+","Students' scholarship applications verified using UDISE data","Parents can find school UDISE code on school certificate"]
  }
},
{id:134,name:"National Apprenticeship Promotion Scheme",icon:"🔧",iconBg:"rgba(245,166,35,.12)",cat:"Education",desc:"Government shares 25% of stipend (max ₹1,500/month) for industry apprentices. Incentivises companies to hire and train youth as apprentices.",tags:["Apprenticeship","Stipend","Industry","Skills"],eligibleFor:["Student"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://apprenticeshipindia.org",
  fullDetails:{
    ministry:"Ministry of Skill Development & Entrepreneurship",launched:"2016",
    benefit:"₹1,500/month stipend contribution by government; recognized certification; employment pathway; basic training reimbursement",
    eligibility:["Youth aged 14–21 years","Passed 5th to 12th class or ITI graduates","Diploma/degree holders eligible for higher apprenticeships"],
    documents:["Aadhaar Card","Educational marksheets","Bank account","Photograph"],
    applyProcess:["Register at apprenticeshipindia.org","Search apprenticeship opportunities","Apply to industry establishments","Contract signed between apprentice and employer","Stipend shared between govt and employer"]
  }
},
{id:135,name:"National Digital Library of India",icon:"📖",iconBg:"rgba(27,79,204,.12)",cat:"Education",desc:"Free access to 75+ million digital books, journals, papers, and educational resources. IIT Kharagpur hosts this national e-library.",tags:["Digital Library","Free","Books","Research"],eligibleFor:["Student"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://ndl.iitkgp.ac.in",
  fullDetails:{
    ministry:"Ministry of Education / IIT Kharagpur",launched:"2016",
    benefit:"Free access to 75+ million books, question papers, journals, audiobooks in 70+ languages; available 24/7",
    eligibility:["Any registered user — students, researchers, general public","No income or age restriction"],
    documents:["Email ID for free registration","Aadhaar optional"],
    applyProcess:["Visit ndl.iitkgp.ac.in","Create free account","Search and read books online","Download selected resources","Request content from NDLI Club (for offline)"]
  }
},

/* ══════════════════════════════════════════════════════
   👩 WOMEN & CHILD WELFARE (IDs 136–147)
══════════════════════════════════════════════════════ */
{id:136,name:"One Stop Centre Scheme",icon:"🏠",iconBg:"rgba(212,64,42,.1)",cat:"Women",desc:"Sakhi Centres provide 24/7 integrated support for women facing violence: medical, legal, police, shelter, and psycho-social support under one roof.",tags:["Women","Violence","Legal","Shelter"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://wcd.nic.in/osc",
  fullDetails:{
    ministry:"Ministry of Women & Child Development",launched:"April 2015",
    benefit:"Free medical aid, FIR assistance, legal counsel, shelter (5 days), psycho-social counselling, video conferencing for court; 24/7 helpline 181",
    eligibility:["All women affected by violence (domestic, sexual, workplace, online)","No income or age restriction","Also serves children in distress"],
    documents:["No documents required to access emergency services","ID proof for prolonged stay"],
    applyProcess:["Call helpline 181 (Women Helpline — free 24/7)","Visit nearest Sakhi Centre (one per district)","Police/hospital can refer you directly","All services provided free","Legal and medical aid arranged immediately"]
  }
},
{id:137,name:"Working Women Hostel",icon:"🏨",iconBg:"rgba(212,64,42,.1)",cat:"Women",desc:"Safe and affordable hostel accommodation for working women in cities. Central subsidy up to ₹1.5 lakh per dwelling unit for construction.",tags:["Women","Hostel","Safe","Accommodation"],eligibleFor:["all"],incomeMax:5,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://wcd.nic.in/wwh",
  fullDetails:{
    ministry:"Ministry of Women & Child Development",launched:"1972 (revised)",
    benefit:"Subsidised hostel accommodation; day care facility for children; safe environment for working women",
    eligibility:["Single working women (govt, NGO, private sector)","Widows and separated women","Students doing vocational training","Family income up to ₹50,000/month"],
    documents:["Aadhaar Card","Employment proof","Income certificate","Photographs"],
    applyProcess:["Find nearest WCD-approved working women hostel","Apply to hostel management","Priority for widows, separated women","Nominal accommodation charges","Day care centre for children available"]
  }
},
{id:138,name:"National Creche Scheme",icon:"👶",iconBg:"rgba(212,64,42,.1)",cat:"Women",desc:"Day care centres for children of working mothers aged 6 months to 6 years. ₹20/day nominal fee; nutrition, health check, and early education.",tags:["Creche","Working Women","Child Care","Free"],eligibleFor:["all"],incomeMax:2,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://wcd.nic.in/creche",
  fullDetails:{
    ministry:"Ministry of Women & Child Development",launched:"2017",
    benefit:"Day care for 6 months–6 years children; supplementary nutrition, health check, immunization, pre-school education at ₹20/day",
    eligibility:["Children of working mothers (BPL/EWS)","Both parents working","Single mothers","Children aged 6 months to 6 years"],
    documents:["Aadhaar Card (mother and child)","Income certificate","Birth certificate of child","Working mother proof"],
    applyProcess:["Locate nearest National Creche at wcd.nic.in","Register child with creche","Submit income and employment proof","Pay nominal fee (₹20/day, free for BPL)","Child care from 8am to 5pm"]
  }
},
{id:139,name:"Mahila Police Volunteers",icon:"👮‍♀️",iconBg:"rgba(212,64,42,.1)",cat:"Women",desc:"Deploy women volunteers as link between community and police. Trained women report crimes, assist distressed women, and prevent gender violence.",tags:["Police","Women","Safety","Volunteer"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://wcd.nic.in/mpv",
  fullDetails:{
    ministry:"Ministry of Women & Child Development / Home Ministry",launched:"2016",
    benefit:"Community-level women safety; trained female volunteers to assist victims; faster police response to gender crimes",
    eligibility:["Women aged 21–50 to become volunteers","Selected from gram panchayat level","Literacy requirement: Class 8"],
    documents:["Aadhaar Card","Educational certificate","Residential proof","Caste certificate (if applicable)"],
    applyProcess:["Apply through District Collectorate / SP Office","Selection by District Level Committee","Training programme provided","Deployed as honorary volunteer","Monthly honorarium paid"]
  }
},
{id:140,name:"Nirbhaya Fund",icon:"🔴",iconBg:"rgba(212,64,42,.1)",cat:"Women",desc:"₹3,000 crore corpus for women safety schemes. Funds CCTV cameras, emergency response vans, forensic labs, One Stop Centres, and helplines.",tags:["Women Safety","Fund","Emergency","Protection"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://wcd.nic.in/nirbhaya",
  fullDetails:{
    ministry:"Ministry of Women & Child Development",launched:"2013",
    benefit:"Funds One Stop Centres, 181 helpline, emergency response vehicles, CCTV in public places, fast track courts for rape cases",
    eligibility:["All women and girls in distress","Violence survivors","Acid attack victims"],
    documents:["No documents needed for emergency helpline access"],
    applyProcess:["Call 112 (emergency) or 181 (women helpline)","Access funded services: One Stop Centre, Fast Track Court","Acid attack victims: apply for compensation through District Legal Services Authority"]
  }
},
{id:141,name:"Scheme for Adolescent Girls",icon:"🌸",iconBg:"rgba(212,64,42,.1)",cat:"Women",desc:"Nutrition, life skills, digital literacy, and vocational training for girls aged 11–14 out of school. Monthly nutritional support through AWC.",tags:["Girls","Nutrition","Life Skills","Adolescent"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://wcd.nic.in/sag",
  fullDetails:{
    ministry:"Ministry of Women & Child Development",launched:"2010 (revised 2017)",
    benefit:"600 cal & 18–20g protein daily through AWC, iron/folic acid supplements, life skills education, digital literacy, referral services",
    eligibility:["Girls aged 11–14 years","Out-of-school girls","Girls from BPL families"],
    documents:["Aadhaar Card (or birth certificate)","School leaving certificate"],
    applyProcess:["Register at nearest Anganwadi Centre","AWW enrolls eligible girls","Daily nutrition provided at AWC","Life skills and vocational training sessions","Mainstreaming to school supported"]
  }
},
{id:142,name:"Widow Pension Scheme",icon:"🕊️",iconBg:"rgba(212,64,42,.1)",cat:"Women",desc:"Monthly pension for widows below poverty line under NSAP. ₹300–₹500/month (state top-up additional). Applied through state welfare departments.",tags:["Pension","Widow","BPL","Monthly"],eligibleFor:["all"],incomeMax:2,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nsap.nic.in",
  fullDetails:{
    ministry:"Ministry of Rural Development (NSAP-IGNWPS)",launched:"2009",
    benefit:"Central: ₹300/month (age 40–79), ₹500 (80+); State adds top-up (total ₹500–₹2,000 depending on state)",
    eligibility:["Widow aged 40 years and above","BPL household","Not receiving any other pension","Residing in India"],
    documents:["Aadhaar Card","Husband death certificate","BPL ration card","Bank passbook","Age proof","Domicile certificate"],
    applyProcess:["Apply at Block Development Office (rural) or Ward Office (urban)","Submit all documents","Verification by local authority","Pension started within 60 days","Amount credited monthly to bank account"]
  }
},
{id:143,name:"National Child Labour Project",icon:"👦",iconBg:"rgba(212,64,42,.1)",cat:"Women",desc:"Rescue and rehabilitate child labourers. Special schools (NCLP schools) provide bridge education, nutrition, and counselling before mainstreaming.",tags:["Child Labour","Rescue","Education","Rehabilitation"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://labour.gov.in/nclp",
  fullDetails:{
    ministry:"Ministry of Labour & Employment",launched:"1988",
    benefit:"Free education, meals, stipend ₹100/month, health check, vocational training at NCLP special schools before mainstreaming",
    eligibility:["Child labourers identified in project districts","Children aged 5–14 in hazardous occupations","Priority to worst forms of child labour"],
    documents:["No documents required (children enrolled on identification)"],
    applyProcess:["Child Labour Inspector or NGO identifies child labourers","Enrolled in NCLP Special Training Centre","6–24 months bridge education","Mainstreamed to formal school","Report child labour: childline 1098"]
  }
},
{id:144,name:"Child Protection Services",icon:"🛡️",iconBg:"rgba(212,64,42,.1)",cat:"Women",desc:"Integrated child protection scheme. Childline 1098, CWCs, JJBs, Shelter homes, Child Tracking System — for abused, abandoned, trafficked children.",tags:["Child","Protection","Shelter","Childline"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://childlineindia.org",
  fullDetails:{
    ministry:"Ministry of Women & Child Development",launched:"2009 (ICPS)",
    benefit:"24/7 emergency helpline (1098), shelter homes, family-based care, legal aid, court-assisted reintegration",
    eligibility:["Children in need of care and protection","Trafficked, abused, abandoned children","Children in conflict with law"],
    documents:["No documents needed for emergency helpline"],
    applyProcess:["Call CHILDLINE 1098 (free, 24/7)","Child Welfare Committee (CWC) takes cognizance","Shelter or family-based care arranged","Legal proceedings if needed","Rehabilitation and reintegration support"]
  }
},
{id:145,name:"Foster Care Scheme",icon:"🏠",iconBg:"rgba(212,64,42,.1)",cat:"Women",desc:"Place orphan and abandoned children in foster families. Foster parents receive ₹2,000–₹4,000/month per child from state government.",tags:["Foster","Orphan","Child","Care"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://wcd.nic.in/schemes/foster-care",
  fullDetails:{
    ministry:"Ministry of Women & Child Development",launched:"2016 (under JJ Act)",
    benefit:"₹2,000–₹4,000/month per foster child (state-wise variation); free education, health, and legal status for child",
    eligibility:["Families willing to foster children","Income criteria as per state policy","CWC/DCPU approved families"],
    documents:["Aadhaar Card","Income certificate","House documents","Health certificate of family members","No criminal record"],
    applyProcess:["Apply to District Child Protection Unit (DCPU)","Home study and vetting by social worker","CWC approval","Child placed in foster care","Monthly support given; regular monitoring"]
  }
},
{id:146,name:"Beti Bachao Incentive Scheme",icon:"👧",iconBg:"rgba(212,64,42,.1)",cat:"Women",desc:"State-linked cash incentive schemes for girl child birth, education and marriage. Sukanya Samriddhi, Cradle Baby, Ladli linked with Beti Bachao campaign.",tags:["Girl Child","Incentive","Savings","State"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://wcd.nic.in/bbbp",
  fullDetails:{
    ministry:"Ministry of Women & Child Development",launched:"2015",
    benefit:"Sukanya Samriddhi: 8.2% interest account; State incentives: ₹2,000–₹50,000 at various milestones (birth, class 1, 6, 10, 12, marriage)",
    eligibility:["Girl child (all states have their own schemes)","BPL/EWS families for cash incentives","All income groups for Sukanya Samriddhi"],
    documents:["Girl child birth certificate","Aadhaar Card","Bank account (for Sukanya Samriddhi at Post Office)","Income certificate (for state cash benefits)"],
    applyProcess:["Open Sukanya Samriddhi Account at Post Office/bank","Deposit minimum ₹250/year; matures at age 21","For state incentives: apply at ICDS AWC","State-specific forms and process"]
  }
},
{id:147,name:"Mahila E-Haat",icon:"🛍️",iconBg:"rgba(212,64,42,.1)",cat:"Women",desc:"Online marketing platform for women entrepreneurs and SHGs. Sell products directly to consumers and exporters without middlemen.",tags:["Women","Entrepreneur","E-Commerce","SHG"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://mahilaehaat-rmk.gov.in",
  fullDetails:{
    ministry:"Ministry of Women & Child Development",launched:"2016",
    benefit:"Free listing of products, direct market access, no commission, link to TRIFED, Amazon, Flipkart through convergence",
    eligibility:["Women entrepreneurs and artisans","Self Help Groups (SHGs)","Women-led small businesses","No income restriction"],
    documents:["Aadhaar Card","Bank account","Product photos and description","Registration on portal"],
    applyProcess:["Register at mahilaehaat-rmk.gov.in","Upload product details and photos","Products verified by WCD field staff","Listed on national platform","Receive orders directly"]
  }
},

/* ══════════════════════════════════════════════════════
   💼 EMPLOYMENT / SKILL / BUSINESS (IDs 148–159)
══════════════════════════════════════════════════════ */
{id:148,name:"National Career Service",icon:"💼",iconBg:"rgba(245,166,35,.12)",cat:"Business",desc:"One-stop portal for job seekers and employers. 1 crore+ job listings, career counselling, skill courses, apprenticeships, and internships.",tags:["Jobs","Career","Portal","Employment"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://www.ncs.gov.in",
  fullDetails:{
    ministry:"Ministry of Labour & Employment",launched:"2015",
    benefit:"Free job matching, career counselling, resume building, interview skills, government job notifications, apprenticeship matching",
    eligibility:["All job seekers — educated and uneducated","Employers for free job posting","Skill centres for listing courses"],
    documents:["Aadhaar Card","Educational certificates","Work experience documents (if any)"],
    applyProcess:["Register at ncs.gov.in","Create profile with skills and preferences","Search and apply for matching jobs","Attend career counselling","Use NCS Mobile App for on-the-go access"]
  }
},
{id:149,name:"PM Rojgar Protsahan Yojana",icon:"🏭",iconBg:"rgba(29,155,94,.12)",cat:"Business",desc:"Government pays 12% EPF (employer contribution) for new employees earning up to ₹15,000/month. Incentivises formal job creation.",tags:["Employment","EPF","Employer","Formal Jobs"],eligibleFor:["all"],incomeMax:1.8,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://pmrpy.gov.in",
  fullDetails:{
    ministry:"Ministry of Labour & Employment",launched:"August 2016",
    benefit:"Employer EPF contribution (12%) paid by government for 3 years for new employees earning ≤₹15,000/month",
    eligibility:["EPFO-registered establishments","New employees (first-time EPFO members)","Employee salary up to ₹15,000/month"],
    documents:["Aadhaar Card (employee)","EPFO UAN number","Bank account"],
    applyProcess:["Employer registers at pmrpy.gov.in","Enrolls new employees on EPFO portal","Government pays 12% EPF share directly to EPFO","Employee's EPF account credited","Employer saves 12% for 3 years per new employee"]
  }
},
{id:150,name:"Atal Innovation Mission",icon:"💡",iconBg:"rgba(245,166,35,.12)",cat:"Business",desc:"NITI Aayog's innovation ecosystem: Atal Tinkering Labs in schools, Atal Incubation Centres for startups. ₹10 crore grant for incubators.",tags:["Innovation","Startup","School","Incubation"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://aim.gov.in",
  fullDetails:{
    ministry:"NITI Aayog",launched:"2016",
    benefit:"ATL: ₹20 lakh grant per school for innovation lab; AIC: ₹10 crore for incubation centres; Atal Community Innovation Centres",
    eligibility:["Schools (ATL): Classes 6–12 government/private","Startups: via Atal Incubation Centres","Innovators: via Atal Community Innovation Centres"],
    documents:["School application for ATL","Startup registration documents for AIC incubation"],
    applyProcess:["ATL: Apply at aim.gov.in for school tinkering lab","AIC: Apply for incubation support","ARISE: Apply for research funding","Join ATL Marathons and innovation challenges"]
  }
},
{id:151,name:"SRMS Scheme",icon:"👥",iconBg:"rgba(27,79,204,.12)",cat:"Business",desc:"Scheme for Rehabilitation of Manual Scavengers. One-time cash assistance ₹40,000, skill training, concessional loans up to ₹15 lakh.",tags:["Manual Scavenging","Rehabilitation","Loan","Skill"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://srms.nic.in",
  fullDetails:{
    ministry:"Ministry of Social Justice & Empowerment / NSKFDC",launched:"2013",
    benefit:"₹40,000 one-time cash; skill training; ₹5,000/month stipend during training; loan up to ₹15 lakh at 4% interest for livelihood",
    eligibility:["Identified manual scavengers and their dependents","All categories — SC/ST/OBC/General (as most are SC)"],
    documents:["Aadhaar Card","Survey identification as manual scavenger","Caste certificate","Bank passbook"],
    applyProcess:["Survey identification through District Collector office","Register at srms.nic.in","Apply for cash grant and training","Concessional loan through NSKFDC","Skill training at designated centre"]
  }
},
{id:152,name:"Coir Udyami Yojana",icon:"🌴",iconBg:"rgba(29,155,94,.12)",cat:"Business",desc:"25% government subsidy for coir industry units. Bank-linked credit subsidy for setting up coir processing, spinning, and weaving units.",tags:["Coir","Subsidy","MSME","Kerala"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://coirboard.gov.in",
  fullDetails:{
    ministry:"Ministry of MSME / Coir Board",launched:"2014",
    benefit:"25% project cost as subsidy (max ₹62,500 for small units, up to ₹2.5 lakh for larger); bank loan for remaining amount",
    eligibility:["Individual entrepreneurs, SHGs, NGOs, cooperatives","Projects related to coir retting, spinning, weaving, products","Focus on coastal states: Kerala, Tamil Nadu, Karnataka, Andhra, Orissa"],
    documents:["Aadhaar Card","PAN Card","Project report","Bank account","Land documents"],
    applyProcess:["Apply to Coir Board regional office or coirboard.gov.in","Submit project report","Approval by Coir Board","Bank loan sanctioned","Subsidy released after first installment"]
  }
},
{id:153,name:"Prime Minister Research Fellowship",icon:"🎓",iconBg:"rgba(27,79,204,.12)",cat:"Business",desc:"Direct PhD admission to IITs/IISc for top BTech graduates. ₹70,000–₹80,000/month fellowship for 5 years for world-class research.",tags:["PhD","Research","IIT","Fellowship"],eligibleFor:["Student"],incomeMax:99,deadline:"Jan 31, 2026",daysLeft:296,eligible:"yes",website:"https://www.pmrf.in",
  fullDetails:{
    ministry:"Ministry of Education",launched:"2018",
    benefit:"₹70,000/month (Yr 1–2), ₹75,000 (Yr 3), ₹80,000 (Yr 4–5); ₹2 lakh annual research grant; direct PhD at IIT/IISc",
    eligibility:["BTech/MTech from NIRF top 25 institutes (IIT, NIT, IISER, BITS, etc.)","CGPA 8.0+ or equivalent","Enrolled/enrolling in PhD at IIT or IISc"],
    documents:["Aadhaar Card","BTech/BE marksheets","GATE score (optional)","Research proposal","Recommendation letters"],
    applyProcess:["Apply at pmrf.in during open window","Shortlisted candidates interviewed","Selected fellows enrolled at IIT/IISc","Fellowship disbursed monthly","Annual review for continuation"]
  }
},
{id:154,name:"ASPIRE Scheme",icon:"🌾",iconBg:"rgba(29,155,94,.12)",cat:"Business",desc:"Agro-based rural incubation scheme. Sets up Technology Business Incubators (LBIs) at KVIC/DIC level. Supports agri-startups and rural entrepreneurs.",tags:["Agri","Startup","Incubation","Rural"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://msme.gov.in/aspire",
  fullDetails:{
    ministry:"Ministry of MSME",launched:"2015",
    benefit:"Technology and business incubation support for agro-based startups; funding up to ₹1 crore per Livelihood Business Incubator",
    eligibility:["Agri entrepreneurs and rural innovators","NGOs, institutions setting up incubators","Farmer groups and FPOs"],
    documents:["Business plan","Aadhaar Card","Bank account","Land/facility proof for incubator"],
    applyProcess:["Apply at msme.gov.in","Institutions apply for LBI setup","Rural entrepreneurs join incubators","Mentoring, funding, and market linkage provided","Contact KVIC for agro-rural specific support"]
  }
},
{id:155,name:"MSME Cluster Development Programme",icon:"🏭",iconBg:"rgba(245,166,35,.12)",cat:"Business",desc:"Upgrade infrastructure of MSME clusters. Common facility centres, worker training, technology adoption — up to ₹10 crore government grant.",tags:["MSME","Cluster","Infrastructure","Grant"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://msme.gov.in/cluster",
  fullDetails:{
    ministry:"Ministry of MSME",launched:"2007",
    benefit:"Soft interventions: ₹25 lakh; Hard interventions (Common Facility Centre): up to ₹10 crore; infrastructure: up to ₹15 crore",
    eligibility:["MSME clusters with 100+ units","Registered associations, cooperatives, SPVs","NE states get higher subsidy"],
    documents:["Cluster association registration","Project report / DPR","Bank account","Industry registration"],
    applyProcess:["Form Special Purpose Vehicle (SPV) of cluster members","Apply through DC-MSME regional office","DPR approved by MSME Ministry","Grant released in instalments","CFC constructed and made operational"]
  }
},
{id:156,name:"ZED Certification Scheme",icon:"⭐",iconBg:"rgba(27,79,204,.12)",cat:"Business",desc:"Zero Defect Zero Effect certification for MSME quality. Free assessment and subsidy on certification costs. Higher quality = better market access.",tags:["Quality","MSME","Certification","Export"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://zed.msme.gov.in",
  fullDetails:{
    ministry:"Ministry of MSME",launched:"2016",
    benefit:"Free self-assessment, 80% subsidy on certification charges for micro units; access to government procurement, export markets",
    eligibility:["All MSMEs (micro, small, medium enterprises)","UDYAM registered businesses","All sectors"],
    documents:["UDYAM Registration","Aadhaar/PAN of proprietor","Bank account","Quality process documentation"],
    applyProcess:["Register at zed.msme.gov.in","Complete self-assessment","Apply for ZED certification","Third-party assessor visits unit","Certification at subsidised cost","Bronze/Silver/Gold/Diamond levels"]
  }
},
{id:157,name:"Startup India Seed Fund Scheme",icon:"🚀",iconBg:"rgba(245,166,35,.12)",cat:"Business",desc:"Seed funding up to ₹50 lakh for DPIIT-recognised startups. Grants up to ₹20 lakh for proof of concept, ₹50 lakh convertible debentures for product launch.",tags:["Startup","Seed Fund","₹50L","Grant"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://seedfund.startupindia.gov.in",
  fullDetails:{
    ministry:"Department for Promotion of Industry and Internal Trade (DPIIT)",launched:"April 2021",
    benefit:"Up to ₹20 lakh grant for proof of concept; up to ₹50 lakh as convertible debentures/debt for market entry",
    eligibility:["DPIIT-recognised startup","Incorporated ≤2 years ago","Not received ₹10L+ from other government schemes","Innovative and scalable product/service"],
    documents:["DPIIT startup recognition certificate","Business plan/pitch deck","Bank account","Company registration (PAN, CIN)","Incorporation certificate"],
    applyProcess:["Register at startupindia.gov.in","Get DPIIT recognition","Apply to SISFS via empanelled incubator","Incubator evaluates startup","Seed grant/debenture disbursed through incubator"]
  }
},
{id:158,name:"Digital MSME Scheme",icon:"📱",iconBg:"rgba(27,79,204,.12)",cat:"Business",desc:"Cloud-based digital tools for MSMEs at subsidised cost. ERP, CRM, and business management software provided free or at 75% subsidy.",tags:["MSME","Digital","Cloud","Software"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://msme.gov.in/digital-msme",
  fullDetails:{
    ministry:"Ministry of MSME",launched:"2017",
    benefit:"75% subsidy on cloud-based ERP/CRM/business tools for first 3 years; digital onboarding support; free training",
    eligibility:["Micro and small enterprises (UDYAM registered)","Preference to artisans and traditional industries","All sectors"],
    documents:["UDYAM Registration","Aadhaar/PAN","Bank account","Business address proof"],
    applyProcess:["Register MSME at udyamregistration.gov.in","Apply at msme.gov.in/digital-msme","Select approved software solution","Pay 25% (75% government pays directly to vendor)","Attend free digital training"]
  }
},
{id:159,name:"Design Clinic Scheme",icon:"🎨",iconBg:"rgba(245,166,35,.12)",cat:"Business",desc:"MSME design improvement programme. Expert design consultants help MSMEs improve product design, packaging, and branding. Up to ₹3.5 lakh subsidy.",tags:["Design","MSME","Branding","Product"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://designclinic.in",
  fullDetails:{
    ministry:"Ministry of MSME",launched:"2009",
    benefit:"Design seminar subsidy (75%), design project subsidy 75% max ₹3.5 lakh for individual unit; cluster design projects up to ₹40 lakh",
    eligibility:["All registered MSMEs","Craft clusters and artisan groups","Design institutions as implementing partners"],
    documents:["UDYAM Registration","Aadhaar/PAN","Business registration","Product samples or photos"],
    applyProcess:["Register at designclinic.in","Attend design seminar (subsidised)","Apply for design project with design expert","NID/NIFT expert assigned","Implement design changes with subsidy"]
  }
},

/* ══════════════════════════════════════════════════════
   🧓 PENSION / SOCIAL SECURITY (IDs 160–169)
══════════════════════════════════════════════════════ */
{id:160,name:"Indira Gandhi Old Age Pension",icon:"🧓",iconBg:"rgba(245,166,35,.12)",cat:"Pension",desc:"Monthly pension for BPL elderly citizens 60+ years. ₹200–₹500/month (central) with state top-up making it ₹500–₹3,000/month.",tags:["Old Age","Pension","BPL","Monthly"],eligibleFor:["all"],incomeMax:2,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nsap.nic.in",
  fullDetails:{
    ministry:"Ministry of Rural Development (NSAP)",launched:"1995",
    benefit:"Central: ₹200/month (age 60–79), ₹500/month (80+); State top-up varies ₹200–₹2,500 extra",
    eligibility:["Age 60 years and above","BPL household","No other pension source","Any caste/religion/gender"],
    documents:["Aadhaar Card","Age proof (birth certificate/school certificate)","BPL card","Bank passbook","Two passport photos"],
    applyProcess:["Apply at BDO office (rural) or Ward Office (urban)","Submit documents for verification","Local authority visits and verifies","Pension started within 60 days","DBT to bank account monthly"]
  }
},
{id:161,name:"Indira Gandhi Widow Pension",icon:"🕊️",iconBg:"rgba(245,166,35,.12)",cat:"Pension",desc:"Monthly pension for BPL widows aged 40+. ₹300/month central + state top-up. Applied through state welfare/rural development offices.",tags:["Widow","Pension","BPL","Women"],eligibleFor:["all"],incomeMax:2,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nsap.nic.in",
  fullDetails:{
    ministry:"Ministry of Rural Development (NSAP)",launched:"2009",
    benefit:"₹300/month (age 40–79), ₹500 (80+) central; state top-up adds ₹200–₹1,500 more",
    eligibility:["Widow aged 40 years and above","BPL household","Not receiving other pension"],
    documents:["Aadhaar Card","Husband death certificate","BPL card","Bank passbook","Age proof"],
    applyProcess:["Apply at BDO/Ward Office","Verification by local panchayat","District office approval","Monthly DBT to bank account","Can also apply at Jan Seva Kendra"]
  }
},
{id:162,name:"Indira Gandhi Disability Pension",icon:"♿",iconBg:"rgba(27,79,204,.12)",cat:"Pension",desc:"Monthly pension for severely disabled BPL persons aged 18–79. ₹300–₹500/month central + state top-up. No age bar for 80%+ disability.",tags:["Disability","Pension","BPL","Monthly"],eligibleFor:["all"],incomeMax:2,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nsap.nic.in",
  fullDetails:{
    ministry:"Ministry of Rural Development (NSAP)",launched:"2009",
    benefit:"₹300/month (age 18–79), ₹500 (80+) central; state top-up varies; 80% disability persons eligible regardless of age",
    eligibility:["Severely disabled person (80%+ disability)","BPL household","Age 18 years and above"],
    documents:["Aadhaar Card","Disability Certificate (80%+ from Civil Surgeon)","BPL card","Bank passbook","Age proof"],
    applyProcess:["Apply at BDO office with disability certificate","District medical board verification","NSAP registration","Monthly DBT to bank account"]
  }
},
{id:163,name:"Employees Pension Scheme",icon:"🏢",iconBg:"rgba(27,79,204,.12)",cat:"Pension",desc:"Defined pension for private sector EPFO members. 8.33% of employer contribution goes to EPS. Pension after 10 years of service.",tags:["Pension","Private","EPFO","Salaried"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://unifiedportal-mem.epfindia.gov.in",
  fullDetails:{
    ministry:"Ministry of Labour & Employment / EPFO",launched:"November 1995",
    benefit:"Monthly pension after retirement (min 10 yrs service); family pension; disability pension; 8.33% employer contribution monthly",
    eligibility:["EPFO member (any private sector employee)","Monthly salary up to ₹15,000 for mandatory enrollment","Voluntary for higher salary employees"],
    documents:["Aadhaar Card","UAN (Universal Account Number)","Bank passbook","Previous service records"],
    applyProcess:["Automatic enrollment on joining EPFO-covered company","Contribution made monthly","At age 58: apply for pension at regional EPFO office","UAN-based online pension application","Pension credited monthly after retirement"]
  }
},
{id:164,name:"EPFO Social Security",icon:"🔐",iconBg:"rgba(27,79,204,.12)",cat:"Pension",desc:"Comprehensive EPF+EPS+EDLI coverage for organised sector workers. PF withdrawal, advances, insurance on death, and pension — unified under EPFO.",tags:["EPF","PF","Insurance","Salaried"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://www.epfindia.gov.in",
  fullDetails:{
    ministry:"Ministry of Labour & Employment",launched:"1952 (EPF Act)",
    benefit:"EPF: retirement savings (24% combined), EPS: monthly pension, EDLI: ₹7 lakh life insurance; partial withdrawal for housing/medical/education",
    eligibility:["Employees of establishments with 20+ workers","Monthly salary up to ₹15,000 (mandatory), higher salary voluntary"],
    documents:["Aadhaar Card","PAN Card","UAN","Bank passbook"],
    applyProcess:["Enrolment automatic by employer","Access UAN portal: unifiedportal-mem.epfindia.gov.in","Apply for PF advances online","Update KYC for seamless claims","Withdraw PF after 2 months of unemployment"]
  }
},
{id:165,name:"National Pension System",icon:"📊",iconBg:"rgba(27,79,204,.12)",cat:"Pension",desc:"Market-linked pension for all citizens. Tax benefit under 80C+80CCD. Government employees and voluntary subscribers. Market-linked returns.",tags:["NPS","Pension","Investment","Tax"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://enps.nsdl.com",
  fullDetails:{
    ministry:"Ministry of Finance / PFRDA",launched:"2004 (private 2009)",
    benefit:"Market-linked pension corpus; additional tax deduction ₹50,000 under 80CCD(1B); government employees get matching 14% contribution",
    eligibility:["Any Indian citizen aged 18–70","Government and private sector employees","Self-employed and NRIs"],
    documents:["Aadhaar Card","PAN Card","Bank passbook","Photograph","KYC documents"],
    applyProcess:["Open NPS account at bank/post office or enps.nsdl.com","Select pension fund manager and asset allocation","Minimum ₹500/contribution, ₹1,000/year","Access PRAN (Permanent Retirement Account Number)","At 60: 60% tax-free withdrawal, 40% annuity"]
  }
},
{id:166,name:"Varishtha Pension Bima Yojana",icon:"👴",iconBg:"rgba(245,166,35,.12)",cat:"Pension",desc:"Senior citizen guaranteed pension scheme through LIC. 7.4% assured return for 10 years. One-time investment, monthly/quarterly pension.",tags:["Senior","LIC","Pension","7.4%"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://licindia.in",
  fullDetails:{
    ministry:"Ministry of Finance / LIC",launched:"2017",
    benefit:"Guaranteed 7.4% annual return; pension options: monthly/quarterly/half-yearly/annual; max investment ₹15 lakh; loan facility after 3 years",
    eligibility:["Senior citizens aged 60 years and above","No maximum age restriction","Single/Joint policy options"],
    documents:["Aadhaar Card","PAN Card","Age proof","Bank passbook","Photograph"],
    applyProcess:["Visit LIC branch or licindia.in","Fill VPBY application form","Pay premium (one-time)","Policy issued with pension start date","Pension credited to bank account as chosen"]
  }
},
{id:167,name:"Atal Pension Lite Scheme",icon:"💰",iconBg:"rgba(29,155,94,.12)",cat:"Pension",desc:"Simplified pension for informal sector workers. ₹42–₹291/month contribution for guaranteed ₹1,000–₹5,000 pension at age 60.",tags:["Pension","Informal","₹1000","Monthly"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://jansuraksha.gov.in/atal-pension-yojana",
  fullDetails:{
    ministry:"Ministry of Finance / PFRDA",launched:"June 2015",
    benefit:"Guaranteed monthly pension ₹1,000–₹5,000 at age 60; government co-contribution 50% (max ₹1,000/yr) for non-income-tax payers",
    eligibility:["Age 18–40 years","Bank/post office savings account","Not an income tax payer","Not covered by statutory pension"],
    documents:["Aadhaar Card","Bank passbook","Mobile number"],
    applyProcess:["Visit bank or post office (any bank)","Fill APY registration form","Set monthly contribution via auto-debit","Choose pension amount (₹1K–5K)","Continue contributions till age 60","Pension starts at 60"]
  }
},
{id:168,name:"Social Security Code Schemes",icon:"📜",iconBg:"rgba(27,79,204,.12)",cat:"Pension",desc:"Unified code covering EPF, ESI, gratuity, maternity, and gig worker benefits. Gig and platform workers now covered under social security.",tags:["Social Security","Gig Workers","ESI","Unified"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://labour.gov.in/socialsecurity",
  fullDetails:{
    ministry:"Ministry of Labour & Employment",launched:"2020 (implementation ongoing)",
    benefit:"Extended social security to gig/platform workers (Swiggy, Uber drivers etc.); unified registration; expanded ESI coverage",
    eligibility:["Organised sector employees (ESI, EPF)","Gig and platform workers","Construction and unorganised workers","Building/contract workers"],
    documents:["Aadhaar Card","PAN Card","Platform account ID (for gig workers)","Bank account"],
    applyProcess:["Register at shramsuvidha.gov.in","Employers enroll employees","Gig workers: registration through platform company","ESIC/EPFO benefits accessed online","eShram card for unorganised workers"]
  }
},
{id:169,name:"PM Laghu Vyapari Maandhan",icon:"🏪",iconBg:"rgba(245,166,35,.12)",cat:"Pension",desc:"Pension for small traders and shopkeepers. Monthly contribution ₹55–₹200 for guaranteed ₹3,000 pension at age 60. Government matches contribution.",tags:["Shopkeeper","Trader","Pension","₹3000"],eligibleFor:["all"],incomeMax:1.5,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://maandhan.in",
  fullDetails:{
    ministry:"Ministry of Labour / CSC e-Governance",launched:"July 2019",
    benefit:"₹3,000/month pension at 60; government matches monthly contribution; family pension on death; lump sum exit option",
    eligibility:["Retail traders, shopkeepers, self-employed","Age 18–40 years","Annual turnover below ₹1.5 crore","Not covered under EPFO/ESIC/NPS"],
    documents:["Aadhaar Card","Bank account / Jan Dhan account","Self-declaration of GST turnover","Mobile number"],
    applyProcess:["Visit CSC centre or maandhan.in","Register with Aadhaar and bank details","Choose monthly contribution (age-based)","Auto-debit from bank account","Government contributes equal amount monthly"]
  }
},

/* ══════════════════════════════════════════════════════
   ⚡ INFRASTRUCTURE / TRANSPORT / DIGITAL (IDs 170–181)
══════════════════════════════════════════════════════ */
{id:170,name:"BharatNet",icon:"🌐",iconBg:"rgba(27,79,204,.12)",cat:"Infrastructure",desc:"Optical fibre internet connectivity to 2.5 lakh Gram Panchayats. Free WiFi hotspots and broadband at ₹1,000/month for villages.",tags:["Internet","Rural","WiFi","Optical Fibre"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://bbnl.nic.in",
  fullDetails:{
    ministry:"Ministry of Electronics & IT / BBNL",launched:"2012",
    benefit:"High-speed broadband to village panchayats; WiFi hotspots; e-services delivery; 100 Mbps speed available",
    eligibility:["All residents of covered Gram Panchayats","Access through PM-WANI WiFi hotspots","Service providers use BharatNet for broadband"],
    documents:["No specific documents for WiFi access","Aadhaar for authentication at some hotspots"],
    applyProcess:["Locate PM-WANI WiFi hotspot in your Gram Panchayat","Connect using OTP-based authentication","Access internet at low cost","ISPs offer broadband plans over BharatNet","Report connectivity issues at bbnl.nic.in"]
  }
},
{id:171,name:"Sagarmala Programme",icon:"⚓",iconBg:"rgba(27,79,204,.12)",cat:"Infrastructure",desc:"Port-led development. Modernise ports, improve connectivity, develop coastal economic zones. ₹6 lakh crore investment in maritime infrastructure.",tags:["Port","Maritime","Coastal","Logistics"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://sagarmala.gov.in",
  fullDetails:{
    ministry:"Ministry of Ports, Shipping & Waterways",launched:"March 2015",
    benefit:"Employment in coastal areas, faster cargo movement, Coastal Economic Zones (CEZ), fishing vessel upgrades, fishermen insurance",
    eligibility:["Coastal communities and fishermen (community benefits)","Logistic companies and exporters","Port workers"],
    documents:["Standard employment/business registration documents"],
    applyProcess:["Employment opportunities at new port projects","Fishermen benefit from vessel and gear support","Apply for Sagarmala coastal livelihood schemes","Visit sagarmala.gov.in for project status"]
  }
},
{id:172,name:"Bharatmala Pariyojana",icon:"🛤️",iconBg:"rgba(27,79,204,.12)",cat:"Infrastructure",desc:"₹5.35 lakh crore national highway development. 34,800 km of economic corridors, ring roads, coastal roads, and border highways.",tags:["Highway","Roads","Transport","NHAI"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://bharatmala.gov.in",
  fullDetails:{
    ministry:"Ministry of Road Transport & Highways / NHAI",launched:"October 2017",
    benefit:"Improved road connectivity, reduced travel time by 40%, employment during construction, lower logistics cost, better market access for farmers",
    eligibility:["General public benefits from improved roads","Land owners eligible for land acquisition compensation"],
    documents:["Land records (for fair compensation for acquisition)"],
    applyProcess:["Land compensation: contact NHAI regional office","Employment: apply to EPC contractors on Bharatmala projects","Project status: bharatmala.gov.in"]
  }
},
{id:173,name:"National Infrastructure Pipeline",icon:"🏗️",iconBg:"rgba(27,79,204,.12)",cat:"Infrastructure",desc:"₹111 lakh crore infrastructure investment 2020–2025. Roads, railways, ports, airports, water, energy — national pipeline for economic growth.",tags:["Infrastructure","Investment","Projects","National"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://indiainvestmentgrid.gov.in",
  fullDetails:{
    ministry:"Ministry of Finance / DEA",launched:"December 2019",
    benefit:"Massive job creation, economic growth, improved logistics, urban infrastructure; investment opportunities for businesses",
    eligibility:["All citizens benefit from infrastructure improvements","Investors and businesses: projects listed on IndiaPIPA portal"],
    documents:["Business registration for investment opportunities"],
    applyProcess:["Track projects at indiainvestmentgrid.gov.in","Investment opportunities open to private sector","Employment on NIP projects through contractors","Citizens benefit from improved infrastructure"]
  }
},
{id:174,name:"Setu Bharatam",icon:"🌉",iconBg:"rgba(27,79,204,.12)",cat:"Infrastructure",desc:"Replace all railway crossings on National Highways with overpasses/underpasses. 208 ROBs and 1,500 RUBs to eliminate accidents.",tags:["Bridge","Highway","Safety","Railway"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://morth.nic.in",
  fullDetails:{
    ministry:"Ministry of Road Transport & Highways",launched:"March 2016",
    benefit:"Elimination of 208 railway level crossings on NHs; reduced road accidents at crossings; faster traffic movement",
    eligibility:["All road users benefit from completed ROBs/RUBs"],
    documents:["Not applicable"],
    applyProcess:["Citizens benefit automatically from completed bridges","Report dangerous crossings at morth.nic.in","Employment opportunities during construction"]
  }
},
{id:175,name:"FASTag Scheme",icon:"🚗",iconBg:"rgba(245,166,35,.12)",cat:"Infrastructure",desc:"RFID-based electronic toll collection. Seamless toll payment, 5% cashback. Mandatory for all vehicles. Saves 8 crore litres fuel annually.",tags:["Toll","Highway","Digital","ETC"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://ihmcl.com",
  fullDetails:{
    ministry:"Ministry of Road Transport / NHAI",launched:"2014 (mandatory 2021)",
    benefit:"No cash toll, 5% cashback on toll payments, faster journey, monthly statement, reloadable wallet",
    eligibility:["All vehicle owners","Mandatory for all 4-wheelers on national highways"],
    documents:["Vehicle Registration Certificate","KYC (Aadhaar/PAN)","Bank account for wallet","Photograph"],
    applyProcess:["Buy FASTag at toll plaza, bank, or online (paytm/amazon)","KYC verification","Affix on windshield","Recharge via UPI/net banking","Toll deducted automatically at plaza"]
  }
},
{id:176,name:"National Logistics Policy",icon:"📦",iconBg:"rgba(29,155,94,.12)",cat:"Infrastructure",desc:"Reduce logistics cost from 14% to 8% of GDP. Unified Logistics Interface Platform (ULIP), e-log, PM GatiShakti integration.",tags:["Logistics","Export","Digital","ULIP"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nlp.gov.in",
  fullDetails:{
    ministry:"Ministry of Commerce & Industry",launched:"September 2022",
    benefit:"Reduced logistics cost for exporters, real-time cargo tracking via ULIP, simplified documentation, faster port clearances",
    eligibility:["All logistics companies, exporters, importers","Truck operators and freight forwarders","MSMEs in manufacturing and export"],
    documents:["Business registration","IEC code for exporters","Vehicle registration for transporters"],
    applyProcess:["Register at ulip.dpiit.gov.in for logistics data","Access 30+ government systems in one platform","Integrate for real-time tracking","Contact DPIIT for logistics partnership"]
  }
},
{id:177,name:"PM GatiShakti",icon:"⚡",iconBg:"rgba(245,166,35,.12)",cat:"Infrastructure",desc:"National Master Plan for multimodal connectivity. GIS-based planning integrating 16 ministries for faster, coordinated infrastructure development.",tags:["Infrastructure","GIS","Planning","Multimodal"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://pmgatishakti.gov.in",
  fullDetails:{
    ministry:"Ministry of Commerce / Cabinet Secretariat",launched:"October 2021",
    benefit:"Integrated infrastructure planning, reduced duplication, faster project clearances, better connectivity for all regions",
    eligibility:["All citizens benefit from coordinated infrastructure","Investors and businesses for project data"],
    documents:["Not applicable for general public"],
    applyProcess:["Track infrastructure projects at pmgatishakti.gov.in","Businesses: use GIS data for location planning","Investment opportunities via IndiaPIPA platform"]
  }
},
{id:178,name:"Inland Waterways Scheme",icon:"🚢",iconBg:"rgba(27,79,204,.12)",cat:"Infrastructure",desc:"Develop 111 National Waterways for cargo and passenger transport. Cheaper than road, lower pollution. Jal Marg Vikas Project on Ganga.",tags:["Waterway","Ganga","Cargo","Shipping"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://iwai.nic.in",
  fullDetails:{
    ministry:"Ministry of Ports, Shipping & Waterways / IWAI",launched:"2016",
    benefit:"Lower-cost cargo movement, tourism by vessel, fishermen's livelihoods, employment in ferry services, flood management",
    eligibility:["Shippers and cargo owners along navigable routes","Tourism operators","Fishing communities"],
    documents:["Standard vessel registration for operators"],
    applyProcess:["Cargo operators: apply for NW1/NW2 vessel permits via IWAI","Passenger ferry services at major waterway terminals","Tourist cruises on NW1 (Ganga) from Varanasi"]
  }
},
{id:179,name:"UDID (Disability ID Project)",icon:"🪪",iconBg:"rgba(27,79,204,.12)",cat:"Infrastructure",desc:"Unique Disability ID card for Persons with Disabilities. One card — access all disability benefits, schemes, reservations, and certificates.",tags:["Disability","ID Card","Benefits","PwD"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://www.swavlambancard.gov.in",
  fullDetails:{
    ministry:"Ministry of Social Justice & Empowerment (DEPwD)",launched:"2016",
    benefit:"Single national disability ID; access to all PwD schemes, 4% reservation in government jobs, travel concession, tax benefits",
    eligibility:["Any person with disability (benchmark disability as per RPWD Act 2016)","40%+ disability for most benefits"],
    documents:["Aadhaar Card","Medical certificate from government hospital","Disability assessment report","Photograph"],
    applyProcess:["Apply at swavlambancard.gov.in","Medical assessment at government hospital","UDID card issued within 30 days","Use card for all disability benefits","Link UDID to Aadhaar for DBT benefits"]
  }
},
{id:180,name:"DigiLocker Scheme",icon:"🔒",iconBg:"rgba(27,79,204,.12)",cat:"Infrastructure",desc:"Store all government documents digitally. Driving licence, RC, Aadhaar, academic certificates — access anytime, anywhere. Legally valid.",tags:["Documents","Digital","Storage","Aadhaar"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://digilocker.gov.in",
  fullDetails:{
    ministry:"Ministry of Electronics & IT",launched:"2015",
    benefit:"1 GB free document storage; legally equivalent to original documents; eliminates physical documents at checkposts, banks, hospitals",
    eligibility:["Any Indian citizen with Aadhaar and mobile number","No income or age restriction"],
    documents:["Aadhaar Card","Mobile number linked to Aadhaar"],
    applyProcess:["Download DigiLocker app or visit digilocker.gov.in","Sign up with Aadhaar OTP","Access issued documents from 1,500+ issuers","Pull Driving Licence, RC, PAN, marksheets","Share documents without carrying originals"]
  }
},
{id:181,name:"MyGov Platform",icon:"🏛️",iconBg:"rgba(27,79,204,.12)",cat:"Infrastructure",desc:"Citizen engagement platform to participate in government. Give ideas, take polls, join discussions, and contribute to policy making.",tags:["Citizen","Governance","Feedback","Digital"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://www.mygov.in",
  fullDetails:{
    ministry:"Cabinet Secretariat / MyGov",launched:"July 2014",
    benefit:"Participate in governance, win contests (cash prizes), contribute to national consultations, volunteer for government campaigns",
    eligibility:["All Indian citizens","NRIs and diaspora","Any age, income or background"],
    documents:["Mobile number / email for registration"],
    applyProcess:["Register at mygov.in","Join tasks and discussions","Submit ideas for policy improvement","Participate in competitions (prizes ₹5,000–₹1 lakh)","Volunteer as MyGov champion"]
  }
},

/* ══════════════════════════════════════════════════════
   🔬 ENVIRONMENT / ENERGY / SCIENCE (IDs 182–193)
══════════════════════════════════════════════════════ */
{id:182,name:"National Solar Mission",icon:"☀️",iconBg:"rgba(245,166,35,.12)",cat:"Science",desc:"100 GW solar energy target. PM Surya Ghar gives ₹30,000–₹78,000 subsidy for rooftop solar. Free electricity up to 300 units/month.",tags:["Solar","Subsidy","Rooftop","Free Electricity"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://pmsuryaghar.gov.in",
  fullDetails:{
    ministry:"Ministry of New and Renewable Energy",launched:"2010 (PM Surya Ghar 2024)",
    benefit:"PM Surya Ghar: ₹30,000 subsidy (1 kW), ₹60,000 (2 kW), ₹78,000 (3 kW); free electricity up to 300 units/month; net metering income",
    eligibility:["All residential consumers","Own house with suitable roof","Having electricity connection","No income restriction"],
    documents:["Aadhaar Card","Electricity consumer number","Bank account","Property proof (Khatian/registry)"],
    applyProcess:["Apply at pmsuryaghar.gov.in","Select registered vendor/DISCOM","Get feasibility survey","Installation by approved vendor","Subsidy directly credited to account","Net metering installed for sell-back"]
  }
},
{id:183,name:"National Bio-Energy Mission",icon:"🌿",iconBg:"rgba(29,155,94,.12)",cat:"Science",desc:"Promote biomass power, biogas, and biofuel. ₹858 crore fund. Support for biogas plants, biomass-based power generation, and compressed biogas.",tags:["Biogas","Biofuel","Energy","Rural"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://mnre.gov.in",
  fullDetails:{
    ministry:"Ministry of New and Renewable Energy",launched:"2021",
    benefit:"Subsidy for biogas plants (30%); CBG (compressed biogas) plants supported; biomass power generation incentives",
    eligibility:["Farmers and rural entrepreneurs for biogas plants","Industries for biomass power","MSMEs for CBG production"],
    documents:["Aadhaar Card","Land records","Bank account","Project report"],
    applyProcess:["Apply at mnre.gov.in for subsidy","Select biogas plant capacity","MNRE/state agency sanctions","Plant installed by certified agency","Subsidy released after commissioning"]
  }
},
{id:184,name:"National Afforestation Programme",icon:"🌳",iconBg:"rgba(29,155,94,.12)",cat:"Science",desc:"Afforestation of degraded forest lands through Joint Forest Management. Community-based forest development with livelihood support.",tags:["Forest","Trees","Environment","JFM"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://moef.gov.in/nap",
  fullDetails:{
    ministry:"Ministry of Environment, Forest & Climate Change",launched:"2000",
    benefit:"Community-based forest development, livelihood through NTFP collection, employment in plantation works, ecosystem services",
    eligibility:["Village communities near forest areas","Joint Forest Management Committees (JFMCs)","Self Help Groups in forest villages"],
    documents:["JFMC registration","Community land records","Bank account"],
    applyProcess:["Form/join JFMC in forest village","Apply through State Forest Department","Micro-plan prepared for plantation","Afforestation works implemented","Community gets usufruct rights and NTFP income"]
  }
},
{id:185,name:"Climate Change Adaptation Fund",icon:"🌍",iconBg:"rgba(29,155,94,.12)",cat:"Science",desc:"Support state and community adaptation to climate change impacts. Drought, flood, cyclone resilience projects for vulnerable communities.",tags:["Climate","Adaptation","Environment","Resilience"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://moef.gov.in",
  fullDetails:{
    ministry:"Ministry of Environment, Forest & Climate Change",launched:"2015 (NAPCC)",
    benefit:"Climate resilience projects (flood barriers, drought-resistant crops, cyclone shelters), community adaptation support",
    eligibility:["Vulnerable coastal and flood-prone communities","Farmers in drought-affected regions","State governments implementing adaptation projects"],
    documents:["Standard documentation for specific project assistance"],
    applyProcess:["Community projects: apply through District Disaster Management Authority","Coastal communities: contact CZMA / state environment department","State governments: apply to MoEF for adaptation funding"]
  }
},
{id:186,name:"FAME India Scheme",icon:"🚗",iconBg:"rgba(27,79,204,.12)",cat:"Science",desc:"₹10,000 crore subsidy to promote electric vehicles. ₹15,000 subsidy on 2-wheelers, ₹1.5 lakh on e-buses. Charging infrastructure funding.",tags:["Electric Vehicle","EV","Subsidy","Green"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://fame2.heavyindustries.gov.in",
  fullDetails:{
    ministry:"Ministry of Heavy Industries",launched:"2015 (FAME II: 2019)",
    benefit:"₹15,000 demand incentive on electric 2-wheelers; ₹1.5 lakh on e-buses; charging infrastructure subsidy; state top-up available",
    eligibility:["Individual buyers of electric 2-wheelers, 3-wheelers","State Transport Undertakings for e-buses","All income groups"],
    documents:["Aadhaar Card","Bank account","Vehicle purchase invoice","Dealer registration"],
    applyProcess:["Purchase electric vehicle from empanelled dealer","Incentive deducted at point of sale","No separate application needed","Dealer claims subsidy from Heavy Industries Ministry","Check empanelled dealers at fame2.heavyindustries.gov.in"]
  }
},
{id:187,name:"National Electric Mobility Mission",icon:"⚡",iconBg:"rgba(29,155,94,.12)",cat:"Science",desc:"Target 6–7 million EVs by 2030. R&D support, charging infrastructure, battery manufacturing incentives. PM E-DRIVE scheme follow-on.",tags:["EV","Mobility","Electric","Battery"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://dhi.nic.in",
  fullDetails:{
    ministry:"Ministry of Heavy Industries / Ministry of Power",launched:"2013",
    benefit:"EV ecosystem development: battery R&D, charging stations, manufacturing incentives; leads to cheaper EVs and lower fuel costs",
    eligibility:["EV buyers benefit from reduced prices","EV manufacturers for PLI/R&D support","Public and private charging station operators"],
    documents:["Business registration for manufacturers/operators"],
    applyProcess:["Consumers: buy EV at subsidised price from certified dealers","Manufacturers: apply for PLI scheme at heavyindustries.gov.in","Charging operators: apply for DISCOM support"]
  }
},
{id:188,name:"Waste to Energy Programme",icon:"♻️",iconBg:"rgba(29,155,94,.12)",cat:"Science",desc:"Convert municipal solid waste to energy. 50% capital subsidy for waste-to-energy plants. 500 MW target from urban waste.",tags:["Waste","Energy","Recycling","Urban"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://mnre.gov.in",
  fullDetails:{
    ministry:"Ministry of New and Renewable Energy",launched:"2014",
    benefit:"Reduced landfill burden, electricity generation from waste, employment, 50% capital cost subsidy for plants",
    eligibility:["Urban Local Bodies (ULBs) for municipal waste projects","Private entrepreneurs for waste-to-energy","Agricultural waste processors"],
    documents:["Waste availability study","Project DPR","Environmental clearance","Bank account of developer"],
    applyProcess:["ULBs/developers apply to MNRE","DPR submitted for approval","Subsidy 50% of capital cost","Plant commissioned and power fed to grid","Remaining cost recovered through power tariff"]
  }
},
{id:189,name:"National River Conservation Plan",icon:"🌊",iconBg:"rgba(27,79,204,.12)",cat:"Science",desc:"Clean up and conserve rivers across India. Sewage treatment plants, ghats development, crematoria, riverfront development under NRCP.",tags:["River","Clean","Environment","Water"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://jalshakti-dowr.gov.in",
  fullDetails:{
    ministry:"Ministry of Jal Shakti",launched:"1995 (Ganga 1984, NRCP 1995)",
    benefit:"Cleaner rivers, better water quality, improved ghats and public spaces, reduced waterborne disease",
    eligibility:["Communities along 41 rivers across 16 states benefit","Citizens can report pollution at river bodies"],
    documents:["Not applicable (area-based benefit)"],
    applyProcess:["Citizens benefit from cleaner rivers automatically","Report river pollution: cpcb.nic.in or Jal Shakti helpline","Participate in river cleaning drives at local level"]
  }
},
{id:190,name:"Coastal Regulation Scheme",icon:"🏖️",iconBg:"rgba(27,79,204,.12)",cat:"Science",desc:"CRZ notification protects coastline and fishermen's rights. Fishing community exemptions, beach development norms, blue flag certification beaches.",tags:["Coastal","Fishermen","Environment","Beach"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://moef.gov.in/crz",
  fullDetails:{
    ministry:"Ministry of Environment, Forest & Climate Change",launched:"1991 (CRZ 2019 revised)",
    benefit:"Protects fisherfolk traditional activities, defines safe zones, enables sustainable coastal tourism, Blue Flag beach certification",
    eligibility:["Traditional fisherfolk community (CRZ exemptions)","Coastal tourism operators","All coastal residents"],
    documents:["Traditional fisher identity proof for CRZ exemptions"],
    applyProcess:["Fisherfolk: register as traditional coastal community with local authority","Coastal development permissions: apply to State Coastal Zone Management Authority","Blue Flag beaches: tourists benefit from certified clean beaches"]
  }
},
{id:191,name:"Green Skill Development Programme",icon:"🌱",iconBg:"rgba(29,155,94,.12)",cat:"Science",desc:"Free skill training in environment and forest sectors. 600+ courses for green jobs: solar technician, water analyst, organic farmer, wildlife guide.",tags:["Green Jobs","Skills","Free","Environment"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://gsdp.gov.in",
  fullDetails:{
    ministry:"Ministry of Environment, Forest & Climate Change",launched:"2017",
    benefit:"Free skill certification in 600+ environment-related job roles; placement support; NSQF-aligned certifications",
    eligibility:["Youth aged 15–35 years","All educational backgrounds","Preference to forest-dwelling communities"],
    documents:["Aadhaar Card","Educational certificate","Bank account"],
    applyProcess:["Register at gsdp.gov.in","Choose from 600+ green skill courses","Attend offline/online training","Certification from NSDC/MoEF","Job placement support provided"]
  }
},
{id:192,name:"National Mission on Sustainable Habitat",icon:"🏙️",iconBg:"rgba(29,155,94,.12)",cat:"Science",desc:"Energy-efficient and sustainable urban development. ECBC codes, green buildings, urban transport, waste management as climate action.",tags:["Sustainable","Urban","Energy","Green Building"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://mohua.gov.in",
  fullDetails:{
    ministry:"Ministry of Housing & Urban Affairs (NAPCC Mission)",launched:"2008",
    benefit:"Greener cities, lower energy bills, reduced urban heat, better air quality, green building incentives",
    eligibility:["All urban residents benefit from policy","Builders for green building certifications","Urban local bodies for sustainable infrastructure"],
    documents:["Building plan for ECBC compliance","Green rating application to GRIHA/IGBC"],
    applyProcess:["Builders: follow ECBC 2017 energy codes","Apply for GRIHA/IGBC green certification","State governments implement NMSH under SAPCCs","Citizens benefit from greener urban environment"]
  }
},
{id:193,name:"Energy Conservation Building Code",icon:"🔋",iconBg:"rgba(245,166,35,.12)",cat:"Science",desc:"Mandatory energy efficiency standards for commercial and residential buildings. Reduces energy consumption by 30–40% through design standards.",tags:["Energy Efficiency","Building","ECBC","Green"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://beeindia.gov.in/ecbc",
  fullDetails:{
    ministry:"Ministry of Power / Bureau of Energy Efficiency",launched:"2007 (ECBC 2017, Eco-Niwas Samhita 2018)",
    benefit:"30–40% energy savings in buildings, reduced electricity bills, stars-rated appliances, Eco-Niwas for residential buildings",
    eligibility:["Commercial buildings 100+ kW connected load must comply","Residential buildings (Eco-Niwas Samhita voluntary)"],
    documents:["Building plan for compliance check","Energy audit report"],
    applyProcess:["Builders: submit ECBC-compliant building plans to local authority","Get BEE star-rated appliances at retail shops","Residential: follow Eco-Niwas guidelines voluntarily","Star-label appliances: check beeindia.gov.in"]
  }
},,/* ═══════════════════════════════════════════════
   NEW SCHEMES – BATCH 2 (IDs 194–490)
   Categories: Financial, Agriculture, Housing,
   Health, Education, Women, Business, Pension,
   Infrastructure, Science
═══════════════════════════════════════════════ */

/* ── FINANCIAL ── */
{id:194,name:"PM Garib Kalyan Deposit Scheme",icon:"💰",iconBg:"rgba(29,155,94,.12)",cat:"Financial",desc:"Special deposit scheme for Central Govt employees to voluntarily support national welfare, introduced during COVID-19 pandemic.",tags:["COVID Relief","Deposit","Govt Employees","Central"],eligibleFor:["all"],incomeMax:99,deadline:"Closed (2020)",daysLeft:null,eligible:"partial",website:"https://dea.gov.in",
  fullDetails:{ministry:"Department of Economic Affairs",launched:"2020",benefit:"Compulsory 30% salary deposit for 3 months for Central Govt Group A/B employees",eligibility:["Central Government employees in Group A, B categories","Salary above prescribed threshold"],documents:["Salary slip","Aadhaar Card","Service ID proof"],applyProcess:["Deduction made automatically from salary","No separate application required","Amount deposited in PM CARES Fund","Certificate issued by employer"]}},

{id:195,name:"Emergency Credit Line Guarantee Scheme (ECLGS)",icon:"🏦",iconBg:"rgba(29,155,94,.12)",cat:"Financial",desc:"100% guarantee on collateral-free working capital loans up to ₹3 crore for MSMEs and business enterprises hit by COVID-19.",tags:["MSME","Loan","Guarantee","COVID"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"partial",website:"https://ncgtc.in",
  fullDetails:{ministry:"Ministry of Finance / NCGTC",launched:"May 2020",benefit:"Collateral-free loans up to ₹3 crore; Government guarantees 100% credit risk",eligibility:["MSMEs with outstanding loans up to ₹25 crore as on Feb 29, 2020","Annual turnover up to ₹100 crore","Account not NPA as on Feb 29, 2020"],documents:["GST Certificate","Aadhaar Card","PAN Card","Bank statements (12 months)","Existing loan documents","Business registration proof"],applyProcess:["Apply through existing banker","Bank assesses eligibility automatically","Sanction of additional credit facility","Disbursement to business account within days"]}},

{id:196,name:"Credit Linked Capital Subsidy Scheme (CLCSS)",icon:"🏭",iconBg:"rgba(29,155,94,.12)",cat:"Financial",desc:"Capital subsidy of 15% on institutional credit up to ₹1 crore for technology upgradation of Small Scale Industries.",tags:["MSME","Subsidy","Technology","Capital"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"partial",website:"https://clcss.dcmsme.gov.in",
  fullDetails:{ministry:"Ministry of MSME",launched:"2000 (Revised 2005)",benefit:"15% upfront capital subsidy on loan up to ₹1 crore (maximum subsidy ₹15 lakh)",eligibility:["Small Scale Industries (SSIs) and MSME units","Units upgrading to approved technology","Valid Udyam registration mandatory"],documents:["Aadhaar Card","PAN Card","MSME/Udyam Registration Certificate","Bank loan sanction letter","Technology purchase invoices","GST Certificate"],applyProcess:["Apply to nodal bank or SIDBI","Attach required documents with application","Bank forwards request to SIDBI/NABARD","Subsidy released to loan account after verification"]}},

{id:197,name:"Trade Infrastructure for Export Scheme (TIES)",icon:"📦",iconBg:"rgba(27,79,204,.12)",cat:"Financial",desc:"Financial assistance for creation/upgradation of export infrastructure including testing labs and common facility centres for export promotion.",tags:["Export","Infrastructure","Grant","Trade"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"partial",website:"https://commerce.gov.in",
  fullDetails:{ministry:"Ministry of Commerce & Industry",launched:"2017-18",benefit:"Govt grant up to 50% of project cost (75% for NE/Himalayan states); Max ₹20 crore per project",eligibility:["Central and State government agencies","Export Promotion Councils","Commodity Boards","Industry Associations and Apex Bodies"],documents:["Project proposal","DPR (Detailed Project Report)","Audited accounts (3 years)","Registration certificate","Land ownership documents"],applyProcess:["Submit proposal to DPIIT online","Technical evaluation by TIES Steering Committee","Approval and phased grant release","Submit utilization certificates after completion"]}},

{id:198,name:"RoDTEP Scheme",icon:"🌐",iconBg:"rgba(29,155,94,.12)",cat:"Financial",desc:"Remission of Duties and Taxes on Exported Products – refunds embedded central/state duties not covered under other schemes to boost export competitiveness.",tags:["Export","Refund","Tax","Trade"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://icegate.gov.in",
  fullDetails:{ministry:"Ministry of Commerce & Industry",launched:"January 2021",benefit:"Rate-based duty refund credits transferred to shipping bills; Rates range 0.5%–4.3% of FOB value",eligibility:["All exported goods from India","Sector-specific rates notified by DGFT","Exporters with valid IEC and GST registration"],documents:["Shipping Bill","Export invoice","Bank Realisation Certificate (BRC)","IEC (Import Export Code)","GST Registration certificate"],applyProcess:["File shipping bill with RoDTEP claim on ICEGATE","Automated processing at port","Credits transferred to exporter's ICEGATE ledger","Credits used for customs duty payment or transferred"]}},

{id:199,name:"Interest Equalization Scheme for Exporters",icon:"📈",iconBg:"rgba(29,155,94,.12)",cat:"Financial",desc:"2–3% interest subvention for MSME exporters on pre and post-shipment export credit to reduce cost of funds.",tags:["Export","MSME","Interest","Subsidy"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://rbi.org.in",
  fullDetails:{ministry:"Ministry of Commerce & RBI",launched:"April 2015",benefit:"2% interest equalization for all eligible exporters; 3% for MSME manufacturer exporters on specified products",eligibility:["Exporters of specified product categories","MSME exporters with valid IE Code","Banks provide reduced rate upfront"],documents:["IE Code","GST Certificate","Export invoices and shipping bills","Bank credit account details","MSME/Udyam certificate"],applyProcess:["Register with AD (Authorized Dealer) bank","Avail export credit at reduced interest rate","Bank claims reimbursement from RBI quarterly","Quarterly reconciliation of claims"]}},

{id:200,name:"Banking Ombudsman Scheme",icon:"⚖️",iconBg:"rgba(27,79,204,.12)",cat:"Financial",desc:"Free and expeditious resolution of complaints by bank customers against deficiency in banking services under RBI oversight.",tags:["Banking","Complaint","Free","RBI"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://bankingombudsman.rbi.org.in",
  fullDetails:{ministry:"Reserve Bank of India",launched:"1995 (Revised 2021 as Integrated Ombudsman)",benefit:"Free resolution of complaints; Ombudsman can award compensation up to ₹20 lakh plus consequential loss",eligibility:["Any bank customer with unresolved grievance against banking services","Complaint not resolved by bank within 30 days"],documents:["Written complaint with details","Bank communication proof","Account/transaction statements","Earlier complaint reference number"],applyProcess:["File complaint with bank first and get reference number","If unresolved in 30 days, approach Ombudsman","Submit online at cms.rbi.org.in or call 14448","Ombudsman investigates and passes binding award"]}},

{id:201,name:"Deposit Insurance (DICGC)",icon:"🏦",iconBg:"rgba(29,155,94,.12)",cat:"Financial",desc:"Automatic insurance protection up to ₹5 lakh per depositor per bank for savings, current, recurring and fixed deposits.",tags:["Bank","Insurance","Deposit","Protection"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://dicgc.org.in",
  fullDetails:{ministry:"Reserve Bank of India / DICGC",launched:"1961 (Enhanced to ₹5L in 2020)",benefit:"Insurance cover up to ₹5 lakh per depositor per bank (principal + interest combined)",eligibility:["All depositors of banks registered with DICGC","Covers commercial banks, cooperative banks, RRBs, small finance banks"],documents:["No separate registration needed","Automatic coverage for all eligible bank depositors"],applyProcess:["No application needed – coverage is automatic","In case of bank failure, DICGC pays claim","Claim submitted by bank's liquidator on behalf of depositors","Payment made within 90 days of claim submission"]}},

{id:202,name:"PM SVANidhi Se Samriddhi",icon:"🛒",iconBg:"rgba(245,166,35,.12)",cat:"Financial",desc:"Micro-credit and social protection for street vendors; ₹10,000–₹50,000 working capital loan with digital payment cashback incentive.",tags:["Street Vendor","Loan","Welfare","Urban"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://pmsvanidhi.mohua.gov.in",
  fullDetails:{ministry:"Ministry of Housing & Urban Affairs",launched:"June 2020",benefit:"₹10,000 initial loan; ₹20,000 after repayment; ₹50,000 for prompt repayers; 7% interest subvention + digital cashback",eligibility:["Street vendors with Certificate of Vending or Letter of Recommendation from Urban Local Body","Vendors operating in urban areas before March 24, 2020"],documents:["Certificate of Vending / Letter of Recommendation","Aadhaar Card","Bank account (or Jan Dhan account)","Passport size photo"],applyProcess:["Visit ULB office or MFI/bank partner","Fill loan application with vending details","Digital KYC and Aadhaar verification","Loan disbursed digitally to Aadhaar-linked account"]}},

{id:203,name:"Venture Capital Assistance Scheme",icon:"💼",iconBg:"rgba(120,86,204,.12)",cat:"Financial",desc:"SFAC provides equity/venture capital to agri-business projects to promote market linkages and value chain development for farmer producers.",tags:["Agri-business","Venture Capital","FPO","Equity"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"partial",website:"https://sfacindia.com",
  fullDetails:{ministry:"Ministry of Agriculture / SFAC",launched:"2005",benefit:"Equity support up to ₹50 lakh per project combined with bank loan under ACABC scheme",eligibility:["Agri-business companies with viable project","FPOs and cooperatives","NGOs with agri-business model"],documents:["Project report with financial projections","Company/FPO registration certificate","Bank loan sanction letter","Land/infrastructure documents","CA-certified accounts"],applyProcess:["Submit proposal online to SFAC portal","Technical and financial appraisal by SFAC","Investment Committee approval","Equity funds released in tranches against milestones"]}},

{id:204,name:"Small Industries Development Fund (SIDBI)",icon:"🏭",iconBg:"rgba(29,155,94,.12)",cat:"Financial",desc:"SIDBI provides development finance, re-finance and promotional support for MSMEs through various lending schemes and capacity building.",tags:["MSME","SIDBI","Finance","Refinance"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"partial",website:"https://sidbi.in",
  fullDetails:{ministry:"Ministry of MSME / SIDBI",launched:"1990",benefit:"Refinance to banks/NBFCs at concessional rates; Direct lending to MSMEs; Loans up to ₹25 crore",eligibility:["All MSME units with valid Udyam registration","Manufacturing and service enterprises","Startups through SIDBI Startup Mitra"],documents:["Udyam Registration Certificate","Aadhaar Card","PAN Card","Project Report","Audited financials (3 years)","GST Returns"],applyProcess:["Approach SIDBI directly or through bank","Submit business proposal with financial data","Credit appraisal by SIDBI team","Loan sanctioned and disbursed within 30 days"]}},

{id:205,name:"Export Credit Guarantee Corporation (ECGC)",icon:"🌐",iconBg:"rgba(27,79,204,.12)",cat:"Financial",desc:"ECGC provides export credit insurance services to exporters and banks to cover non-payment risk in international trade transactions.",tags:["Export","Insurance","Credit","ECGC"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"partial",website:"https://ecgc.in",
  fullDetails:{ministry:"Ministry of Commerce / ECGC",launched:"1957",benefit:"Credit risk insurance up to 90% of loss; Bank guarantee covers 75% of advance payment losses; Premium-based cover",eligibility:["Indian exporters in any sector","Banks financing exports","All product and service exporters"],documents:["Shipping documents","Export contract or LC","IE Code (mandatory)","Bank account details","Buyer's details","Insurance premium payment proof"],applyProcess:["Apply to ECGC online for Standard Policy","Premium payment based on export value","Maintain export declarations","File claim if buyer defaults within 4 months"]}},

/* ── AGRICULTURE ── */
{id:206,name:"National Livestock Mission",icon:"🐄",iconBg:"rgba(29,155,94,.12)",cat:"Agriculture",desc:"Comprehensive mission for quantitative and qualitative improvement of livestock sector through entrepreneurship development and insurance.",tags:["Livestock","Farmer","Insurance","Subsidy"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"partial",website:"https://nlm.udyamimitra.in",
  fullDetails:{ministry:"Ministry of Fisheries, Animal Husbandry & Dairying",launched:"2014-15",benefit:"50% subsidy (up to ₹50 lakh) for entrepreneurship projects; Feed, breed improvement and insurance support",eligibility:["Individual farmers","FPOs","SHGs and NGOs in livestock sector","Cooperatives"],documents:["Aadhaar Card","Bank Passbook","Land records","Project report (DPR)","Caste certificate if applicable","Animal ownership proof"],applyProcess:["Register on NLM portal (nlm.udyamimitra.in)","Select activity (breed improvement/feed/insurance)","Submit DPR with bank loan sanction","Approval and subsidy release from state"]}},

{id:207,name:"National Dairy Plan",icon:"🐮",iconBg:"rgba(29,155,94,.12)",cat:"Agriculture",desc:"Systematic and scientific development of Indian dairy sector to increase productivity of milch animals and develop rural milk procurement infrastructure.",tags:["Dairy","Productivity","Milk","NDDB"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nddb.coop",
  fullDetails:{ministry:"Ministry of Fisheries, Animal Husbandry & Dairying / NDDB",launched:"2012-13",benefit:"Technical inputs, crossbreeding, AI services, fodder seeds; Loans for dairy cooperatives; Milk chilling infrastructure",eligibility:["Dairy cooperatives and FPOs","Individual dairy farmers through cooperatives","Milk unions and federations"],documents:["Membership in dairy cooperative","Aadhaar Card","Land records","Animal ownership proof"],applyProcess:["Join local dairy cooperative","Apply for AI services and fodder seeds through cooperative","Cooperative applies to NDDB for infrastructure grants","Benefits flow through the cooperative system"]}},

{id:208,name:"Rashtriya Gokul Mission",icon:"🐄",iconBg:"rgba(29,155,94,.12)",cat:"Agriculture",desc:"Development and conservation of indigenous cattle and buffalo breeds through genetic upgradation and Gokul Grams.",tags:["Cow","Breed","Indigenous","AI Service"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://dahd.nic.in",
  fullDetails:{ministry:"Ministry of Fisheries, Animal Husbandry & Dairying",launched:"December 2014",benefit:"Free AI from elite indigenous bulls; Gokul Grams for breed conservation; Subsidised high-quality semen",eligibility:["All cattle and buffalo owners in India","Priority to small and marginal farmers"],documents:["Aadhaar Card","Animal tagging number","Application through state animal husbandry dept"],applyProcess:["Apply at district animal husbandry office","Enroll animals for AI services","Link with nearest Gokul Gram centre","Receive genetic improvement services free of cost"]}},

{id:209,name:"Fisheries & Aquaculture Infrastructure Development Fund (FIDF)",icon:"🐟",iconBg:"rgba(0,150,136,.12)",cat:"Agriculture",desc:"₹7,522 crore fund to create fisheries infrastructure including fishing harbours, fish landing centres, cold chain and refrigerated transport.",tags:["Fisheries","Infrastructure","NABARD","Loan"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"partial",website:"https://fisheries.gov.in",
  fullDetails:{ministry:"Ministry of Fisheries, Animal Husbandry & Dairying",launched:"2018-19",benefit:"Nodal loan at 5% interest; State govt gets re-financing; 3-year moratorium on principal repayment",eligibility:["State governments and UT administrations","State fisheries corporations","Cooperative societies in fisheries"],documents:["Project proposal with DPR","State govt guarantee letter","Land documents","Environmental clearance certificate"],applyProcess:["State government submits proposal to NABARD","NABARD appraises technical and financial aspects","Fund released in tranches","State implements projects with monitoring"]}},

{id:210,name:"National Fisheries Development Board Scheme",icon:"🐠",iconBg:"rgba(0,150,136,.12)",cat:"Agriculture",desc:"Financial assistance for fish seed production, aquaculture parks, fishing vessels, post-harvest infrastructure and training.",tags:["Fisheries","Subsidy","Training","Aquaculture"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"partial",website:"https://nfdb.gov.in",
  fullDetails:{ministry:"Ministry of Fisheries / NFDB",launched:"2006",benefit:"25–40% subsidy on project cost; Fishermen training support; Equipment and vessel subsidy",eligibility:["Individual fishermen with fisherman identity card","FPOs and SHGs in fisheries sector","State fisheries departments"],documents:["Fisherman identity card","Aadhaar Card","Bank Passbook","Project report (DPR)","Land/water body lease agreement"],applyProcess:["Apply online at NFDB portal or state fisheries department","Submit DPR with financial projections","State level sanction and recommendation","Grant released to bank account in phases"]}},

{id:211,name:"Seed Village Programme",icon:"🌱",iconBg:"rgba(29,155,94,.12)",cat:"Agriculture",desc:"Production of certified seeds at village level for distribution to farmers at subsidised rates ensuring quality seed availability.",tags:["Seed","Farmer","Subsidy","Certification"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://seednet.gov.in",
  fullDetails:{ministry:"Ministry of Agriculture & Farmers Welfare",launched:"2005-06",benefit:"50% subsidy on certified seed; Training to seed village farmers; Foundation seed supply at subsidised rate",eligibility:["Farmers willing to produce certified seeds","Seed Producer Groups (SPGs)","Priority to small and marginal farmers"],documents:["Land records","Aadhaar Card","Bank Passbook","Application to block agriculture department"],applyProcess:["Apply at block agriculture office","Receive foundation/certified seed at subsidised cost","Produce seed following scientific agronomic practices","Sell surplus seed at prescribed MSP rate"]}},

{id:212,name:"National Horticulture Mission",icon:"🍅",iconBg:"rgba(29,155,94,.12)",cat:"Agriculture",desc:"Holistic development of horticulture covering area expansion, post-harvest management, marketing and processing of fruits and vegetables.",tags:["Horticulture","Farmer","Subsidy","Fruits & Vegetables"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nhm.nic.in",
  fullDetails:{ministry:"Ministry of Agriculture / NHB",launched:"2005-06",benefit:"50% subsidy for area expansion, drip irrigation, packaging; Back-ended subsidy for cold chain infrastructure",eligibility:["All horticulture farmers","FPOs, SHGs for post-harvest infrastructure","Priority to NE states and hilly areas"],documents:["Land records (Aadhaar-linked)","Bank account passbook","Agriculture dept registration","Cultivation plan"],applyProcess:["Apply at state horticulture department office","Field verification by horticulture officer","Subsidy released after plantations established and verified","Second instalment after plant survival confirmed"]}},

{id:213,name:"Per Drop More Crop Scheme",icon:"💧",iconBg:"rgba(0,150,136,.12)",cat:"Agriculture",desc:"PMKSY component for micro-irrigation; 55% subsidy for small/marginal farmers on drip and sprinkler irrigation systems.",tags:["Drip Irrigation","Sprinkler","Water","Efficiency"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://pmksy.gov.in",
  fullDetails:{ministry:"Ministry of Agriculture",launched:"2015-16",benefit:"55% subsidy for small/marginal farmers; 45% for other farmers on drip/sprinkler system cost",eligibility:["All farmers with agriculture land","Priority to water-stressed and drought-prone areas","Small and marginal farmers get higher subsidy"],documents:["Land records (Aadhaar-linked)","Bank account passbook","Agriculture dept registration","Farmer ID card"],applyProcess:["Apply at district agriculture office or PMKSY portal","Field survey by agriculture department officer","Farmer installs approved system from empanelled supplier","Subsidy credited to bank after physical inspection"]}},

{id:214,name:"National Livestock Health & Disease Control",icon:"🐾",iconBg:"rgba(29,155,94,.12)",cat:"Agriculture",desc:"Control of animal diseases, free vaccination drives (FMD, Brucellosis, PPR) and strengthening of veterinary infrastructure.",tags:["Livestock","Vaccination","Free","Veterinary"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://dadf.gov.in",
  fullDetails:{ministry:"Ministry of Fisheries, Animal Husbandry & Dairying",launched:"2013-14",benefit:"Free vaccination against FMD, Brucellosis, PPR, HS, BQ; Free veterinary consultation; Disease surveillance",eligibility:["All livestock owners in India","Farmers with cattle, buffalo, sheep, goat, pig"],documents:["Aadhaar Card","Animal registration details"],applyProcess:["Contact nearest veterinary sub-centre or PHC","Animal vaccinated free of cost by Vet","Disease reported through NADRS surveillance system","Compensation for animals slaughtered for disease control"]}},

{id:215,name:"Horticulture Cluster Development Programme",icon:"🍓",iconBg:"rgba(29,155,94,.12)",cat:"Agriculture",desc:"Develop globally competitive horticulture clusters to promote exports and market linkages for identified crop-specific geographic clusters.",tags:["Horticulture","Export","Cluster","Value Chain"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"partial",website:"https://nhb.gov.in",
  fullDetails:{ministry:"Ministry of Agriculture / APEDA",launched:"2021-22",benefit:"Cluster-level infrastructure grants; Market linkage support; Export facilitation and branding",eligibility:["FPOs and cooperatives in identified clusters","Agri-processors and logistics companies","Priority crops: Banana, Grapes, Litchi, Mango etc."],documents:["Project proposal with DPR","Company/FPO registration","Land details","Financial projections","Export history if any"],applyProcess:["Identify target cluster and product","Apply through APEDA or NHB portal","Cluster Development Executive (CDE) appointed","Project implementation monitored by CDE quarterly"]}},

{id:216,name:"Agroforestry Scheme",icon:"🌳",iconBg:"rgba(29,155,94,.12)",cat:"Agriculture",desc:"Promotes integration of trees with crops and livestock on farmland; support for nursery, planting material, training and transit permits.",tags:["Agroforestry","Trees","Farmer","Planting"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://agricoop.nic.in",
  fullDetails:{ministry:"Ministry of Agriculture / DARE",launched:"2016-17",benefit:"50% subsidy on planting material, fencing and maintenance; Training support; Simplified transit permits for wood",eligibility:["All farmers interested in growing trees on farmland","Priority to degraded and rainfed area farmers"],documents:["Land records","Aadhaar Card","Bank account","Application at district forest or agriculture dept"],applyProcess:["Apply at district agriculture or forest department","Nursery raises planting material","Farmer gets saplings at 50% subsidised cost","Annual survival-linked maintenance payment provided"]}},

{id:217,name:"National Bee-keeping & Honey Mission",icon:"🐝",iconBg:"rgba(245,166,35,.12)",cat:"Agriculture",desc:"Promote scientific bee-keeping for supplemental income to farmers; honey processing infrastructure and training.",tags:["Bee-keeping","Honey","Farmer","Supplemental Income"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nbb.gov.in",
  fullDetails:{ministry:"Ministry of Agriculture / NBB",launched:"2020",benefit:"80% subsidy on bee boxes and bee colonies; Training for bee-keepers; Market linkage for honey",eligibility:["All farmers and agricultural labourers","Youth and women bee-keepers","FPOs and SHGs in bee-keeping"],documents:["Aadhaar Card","Land records or tenancy proof","Bank passbook","Registration at National Bee Board"],applyProcess:["Apply at state horticulture/agriculture dept","Training on scientific bee-keeping","Subsidy on equipment released","Market linkage provided through NBB"]}},

{id:218,name:"Fasal Bima Yojana – PM (PMFBY)",icon:"🛡️",iconBg:"rgba(245,166,35,.12)",cat:"Agriculture",desc:"Comprehensive crop insurance covering pre-sowing to post-harvest losses due to weather, pest, flood, drought at very low premium.",tags:["Farmer","Insurance","Crop","Central"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Season-wise",daysLeft:30,eligible:"yes",website:"https://pmfby.gov.in",pdfUrl:"https://pmfby.gov.in/pdf/PMFBY_Application_Form.pdf",
  fullDetails:{ministry:"Ministry of Agriculture",launched:"February 2016",benefit:"Full sum insured for crop loss. Premium: Kharif 2%, Rabi 1.5%, Commercial/Horticulture 5%",eligibility:["All farmers growing notified crops in notified areas","Both loanee and non-loanee farmers","Tenant/share-cropper farmers also eligible"],documents:["Aadhaar Card","Bank Passbook","Land Records / Sowing Certificate","Crop sowing declaration","Mobile number linked to Aadhaar"],applyProcess:["Contact nearest bank, CSC or crop insurance app before cut-off","Fill insurance declaration form","Pay applicable premium","Get policy document","Claim via bank or PMFBY app after loss"]}},

{id:219,name:"Soil Health Card Scheme",icon:"🌱",iconBg:"rgba(29,155,94,.12)",cat:"Agriculture",desc:"Free soil testing and health cards to farmers with crop-wise nutrient management recommendations to improve soil health.",tags:["Farmer","Free","Soil","Testing"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://soilhealth.dac.gov.in",
  fullDetails:{ministry:"Ministry of Agriculture",launched:"2015",benefit:"Free soil health card with nutrient status; Crop-wise fertilizer recommendations; Soil test every 3 years",eligibility:["All farmers across India","Soil test done every 3 years","No income limit"],documents:["Aadhaar Card","Land records","Mobile number for SMS delivery"],applyProcess:["Contact district/block agriculture department office","Request soil sample collection from farm","Soil is tested at govt laboratory","Report emailed/SMSed/delivered within 30 days"]}},

/* ── HOUSING / RURAL / URBAN ── */
{id:220,name:"Backward Regions Grant Fund (BRGF)",icon:"🏘️",iconBg:"rgba(245,166,35,.12)",cat:"Housing",desc:"Untied development grants for 272 most backward districts to bridge infrastructure, human development and governance gaps.",tags:["Rural","Backward Districts","Grant","Infrastructure"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://panchayat.gov.in",
  fullDetails:{ministry:"Ministry of Panchayati Raj",launched:"2006-07",benefit:"Untied grants to PRIs for any development work; Priority to health, education, roads, water supply",eligibility:["Residents of 272 notified backward districts","All categories benefit; PRIs implement"],documents:["No individual documents needed; Benefits via Panchayat"],applyProcess:["Gram Panchayat identifies community needs","Works sanctioned by District Planning Committee","Implementation by PRIs through tendering","Community oversight and social audit"]}},

{id:221,name:"Integrated Watershed Management Programme",icon:"🌊",iconBg:"rgba(0,150,136,.12)",cat:"Housing",desc:"Watershed-level development encompassing soil conservation, water harvesting, livelihood promotion in rain-fed areas.",tags:["Watershed","Rural","Water","Livelihood"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://dolr.gov.in",
  fullDetails:{ministry:"Ministry of Rural Development",launched:"2009-10",benefit:"Full project funding ₹12,000/hectare; Employment for rural youth; Improved water availability",eligibility:["Rural communities in rain-fed watershed areas","Priority to BPL households and women"],documents:["Watershed area records","Community participation proof","Land records for private lands"],applyProcess:["Watershed committee formed at village level","Participatory plan prepared","District implements and monitors","Convergence with MGNREGS for labour"]}},

{id:222,name:"Urban Transport Scheme (NCAP-Cities)",icon:"🚌",iconBg:"rgba(27,79,204,.12)",cat:"Housing",desc:"Central assistance for urban bus transport, NMT infrastructure and ITS in cities to improve public mobility and reduce congestion.",tags:["Urban","Transport","Bus","City"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://smartcities.gov.in",
  fullDetails:{ministry:"Ministry of Housing & Urban Affairs",launched:"2006",benefit:"Grant for buses, ITS, NMT infrastructure; Up to ₹100 crore per city per project",eligibility:["Urban Local Bodies of cities with population above 5 lakh"],documents:["Project DPR","City mobility plan","ULB council resolution","State government guarantee letter"],applyProcess:["ULB submits project proposal to MoHUA","Technical appraisal by MoHUA","Approval and phased funding released","City implements and submits utilization report"]}},

{id:223,name:"Metro Rail Policy Scheme",icon:"🚇",iconBg:"rgba(27,79,204,.12)",cat:"Housing",desc:"Guidelines and 50% central financial support for metro rail projects in cities above 10 lakh population.",tags:["Metro Rail","Urban","Infrastructure","Transport"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://mohua.gov.in",
  fullDetails:{ministry:"Ministry of Housing & Urban Affairs",launched:"2017",benefit:"50% central funding for metro projects; Viability gap funding; PPP support structure",eligibility:["Cities with population above 10 lakh","State governments willing to co-fund"],documents:["Feasibility report","DPR","City masterplan","Environmental clearance","Financial model"],applyProcess:["State government submits DPR to MoHUA","DMRC/RITES technical appraisal","Cabinet Committee on Economic Affairs approval","UMTA formed and project implemented by SPV"]}},

{id:224,name:"Slum Rehabilitation Scheme (SRS)",icon:"🏚️",iconBg:"rgba(245,166,35,.12)",cat:"Housing",desc:"In-situ slum redevelopment with private developer participation; free pucca house to slum dwellers in urban areas.",tags:["Slum","Urban","Housing","Free"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://pmaymis.gov.in",
  fullDetails:{ministry:"Ministry of Housing & Urban Affairs (PMAY-U)",launched:"2015",benefit:"Free 269 sq ft flat to eligible slum dwellers; Developer compensated via additional FSI",eligibility:["Slum dwellers with residency before cut-off date","Aadhaar-linked biometric data","Identified in state slum survey"],documents:["Slum residency proof (electricity bill/voter ID)","Aadhaar Card","Voter ID","Slum survey registration records"],applyProcess:["Slum surveyed and GIS-mapped by ULB","Eligible beneficiary list prepared","Developer redevelops and hands over free units","Residents manage maintenance post-handover"]}},

{id:225,name:"Sansad Adarsh Gram Yojana",icon:"🏘️",iconBg:"rgba(29,155,94,.12)",cat:"Housing",desc:"Each MP adopts a village for holistic development with convergence of 40+ government schemes into a model village.",tags:["Village","MP","Adarsh","Development"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://saanjhi.gov.in",
  fullDetails:{ministry:"Ministry of Rural Development",launched:"October 2014",benefit:"₹3–4 crore converged through existing schemes; Holistic village development covering all sectors",eligibility:["Rural residents of adopted gram panchayats","All categories of residents benefit"],documents:["Village gram panchayat membership","Village community participation"],applyProcess:["MP selects and adopts a village through GP","Village Development Plan prepared by GP with community","Convergence of 40+ schemes coordinated","Progress monitored online at saanjhi.gov.in"]}},

{id:226,name:"National Urban Livelihood Mission (DAY-NULM)",icon:"🏪",iconBg:"rgba(27,79,204,.12)",cat:"Housing",desc:"Urban poor livelihood including SHG formation, skill training, interest subsidy for micro-enterprises and shelter for homeless.",tags:["Urban","Poor","Livelihood","SHG"],eligibleFor:["all"],incomeMax:2,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nulm.gov.in",
  fullDetails:{ministry:"Ministry of Housing & Urban Affairs",launched:"2013-14",benefit:"Interest subsidy 5–7% on loans; Training stipend ₹1,500/month; Shelter for homeless; Self-employment kit",eligibility:["Urban poor families with BPL or income below ₹2 lakh","Homeless persons","Street vendors","Urban migrant workers"],documents:["BPL ration card / Income certificate","Aadhaar Card","Bank account passbook","Skill training enrollment letter"],applyProcess:["Register at City Mission Management Unit (CMMU)","Form SHG or apply individually","Skill training and credit linkage arranged","Self-employment unit set up with support"]}},

{id:227,name:"Swachh Bharat Mission-Gramin (ODF)",icon:"🚽",iconBg:"rgba(29,155,94,.12)",cat:"Housing",desc:"Rural toilet construction incentive of ₹12,000 to achieve Open Defecation Free India and improve rural sanitation.",tags:["Sanitation","Toilet","ODF","Rural"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://sbm.gov.in",
  fullDetails:{ministry:"Ministry of Jal Shakti",launched:"October 2014",benefit:"₹12,000 incentive for toilet construction (₹10,000 central + ₹2,000 state share); ODF certification",eligibility:["All rural households without toilet","Priority to SC/ST, BPL and women-headed households"],documents:["Aadhaar Card","Bank account passbook","Application at gram panchayat"],applyProcess:["Apply at gram panchayat office","GP verifies household has no toilet","Construct toilet to specification","₹12,000 incentive credited after GP verification"]}},

/* ── HEALTH ── */
{id:228,name:"National Vector Borne Disease Control Programme",icon:"🦟",iconBg:"rgba(212,64,42,.1)",cat:"Health",desc:"Control and elimination of Malaria, Dengue, Chikungunya, Japanese Encephalitis, Kala-azar and Lymphatic Filariasis across India.",tags:["Malaria","Dengue","Free","Prevention"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nvbdcp.gov.in",
  fullDetails:{ministry:"Ministry of Health & Family Welfare",launched:"1953 (Revised)",benefit:"Free rapid diagnosis, treatment drugs, impregnated bed nets; Insecticide spraying; Health worker deployment",eligibility:["All residents in India","Priority to tribal, remote and endemic areas"],documents:["No documents required; Walk-in to any PHC/CHC"],applyProcess:["Contact nearest PHC/CHC for free rapid diagnostic test","Treatment provided free at public health facility","ASHA worker provides bed nets in endemic areas","Preventive insecticide spraying in high-risk areas"]}},

{id:229,name:"National Leprosy Eradication Programme",icon:"🏥",iconBg:"rgba(212,64,42,.1)",cat:"Health",desc:"Free detection and multi-drug therapy for leprosy patients; rehabilitation and social reintegration.",tags:["Leprosy","Free","Treatment","MDT"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nlep.nic.in",
  fullDetails:{ministry:"Ministry of Health & Family Welfare",launched:"1983",benefit:"Free multi-drug therapy (MDT) for 6–12 months; Disability prevention services; Free reconstructive surgery",eligibility:["All leprosy patients irrespective of income","No stigma or discrimination policy"],documents:["No documents required; Self-referral or ASHA referral accepted"],applyProcess:["Approach nearest PHC or district hospital","Diagnosed clinically and MDT started free","ASHA follows up at home","Certificate of treatment completion issued"]}},

{id:230,name:"Pulse Polio Programme",icon:"💉",iconBg:"rgba(212,64,42,.1)",cat:"Health",desc:"National immunization programme for polio eradication; oral polio vaccine given free to all children below 5 years on Immunization Days.",tags:["Children","Polio","Free","Vaccination"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://mohfw.gov.in",
  fullDetails:{ministry:"Ministry of Health & Family Welfare",launched:"1995-96",benefit:"Free OPV (oral polio vaccine) – 2 drops; India polio-free since 2014; Continued for prevention",eligibility:["All children aged 0–5 years on National Immunization Days"],documents:["No documents required; Bring child to nearest booth"],applyProcess:["Attend National Immunization Day (NID) in January","Child given 2 drops of OPV free","ASHA marks child's finger with ink","Booth-to-booth coverage ensures every child vaccinated"]}},

{id:231,name:"National Programme for Health Care of Elderly (NPHCE)",icon:"👴",iconBg:"rgba(245,166,35,.12)",cat:"Health",desc:"Dedicated geriatric OPD at district hospitals, memory clinics and home visit programme for citizens above 60 years.",tags:["Elderly","Senior Citizen","Free","Geriatric"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nhm.gov.in",
  fullDetails:{ministry:"Ministry of Health & Family Welfare",launched:"2010-11",benefit:"Free geriatric OPD at district hospitals; Free medicines; Health camps; Home visits by ASHA for 70+",eligibility:["Citizens above 60 years of age","Priority to BPL elderly above 70 years"],documents:["Aadhaar Card or any age proof (birth certificate, voter ID)","Senior citizen card (if available)"],applyProcess:["Visit dedicated Geriatric OPD at district hospital","ASHA provides home care for bed-ridden elderly","Free medicines from hospital pharmacy","National Elderline helpline: 14567"]}},

{id:232,name:"National Oral Health Programme",icon:"🦷",iconBg:"rgba(212,64,42,.1)",cat:"Health",desc:"Free oral health checkups, treatment and tobacco-induced oral cancer screening at public health facilities.",tags:["Oral Health","Free","Cancer Screening","Dental"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://mohfw.gov.in",
  fullDetails:{ministry:"Ministry of Health & Family Welfare",launched:"2014-15",benefit:"Free oral health checkups; Subsidised dental treatment; Early cancer detection; Tobacco cessation counselling",eligibility:["All citizens; Priority cancer screening for tobacco users above 30 years"],documents:["No documents required for basic screening","Aadhaar Card for referral to higher facility"],applyProcess:["Attend oral health camps at PHC or CHC","Self-referral to dental OPD at CHC/district hospital","Tobacco users get special oral cancer screening","Referral to dental college for complex care"]}},

{id:233,name:"Integrated Disease Surveillance Programme (IDSP)",icon:"📊",iconBg:"rgba(212,64,42,.1)",cat:"Health",desc:"Strengthening disease surveillance through electronic reporting, rapid response teams and public health labs for early outbreak detection.",tags:["Surveillance","Epidemic","Public Health","Monitoring"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://idsp.nic.in",
  fullDetails:{ministry:"Ministry of Health & Family Welfare",launched:"2004-05",benefit:"Rapid outbreak detection; Immediate response teams; Community protection; System alert for unusual clusters",eligibility:["All residents benefit indirectly through outbreak prevention"],documents:["No individual application; Systemic public health programme"],applyProcess:["Surveillance units at district/state/national level","Weekly reporting via P-form, L-form, S-form","Alert generated for unusual disease clustering","Rapid Response Team deployed for investigation"]}},

{id:234,name:"Kayakalp Scheme (Clean Hospitals)",icon:"🏥",iconBg:"rgba(0,150,136,.12)",cat:"Health",desc:"Cash award scheme for public health facilities maintaining highest standards of cleanliness, hygiene and infection control.",tags:["Hospital","Cleanliness","Award","Public Health"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nhm.gov.in",
  fullDetails:{ministry:"Ministry of Health & Family Welfare",launched:"2015",benefit:"Cash award ₹50 lakh for best district hospital; ₹15 lakh for best CHC; National recognition",eligibility:["Public health facilities – PHCs, CHCs, District Hospitals","Facility must score above 70% on assessment"],documents:["Not applicable for individual patients; Facility-level programme"],applyProcess:["Health facility assessed on 6 dimensions","Internal and peer assessment done","External assessment by trained assessors","Cash award reinvested in facility improvements"]}},

{id:235,name:"Anaemia Mukt Bharat Programme",icon:"💊",iconBg:"rgba(212,64,42,.1)",cat:"Health",desc:"Reduce anaemia among 6 age groups through weekly IFA supplementation, deworming, nutrition counselling and testing.",tags:["Anaemia","Iron","Children","Women"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nhm.gov.in",
  fullDetails:{ministry:"Ministry of Health & Family Welfare",launched:"2018",benefit:"Free weekly Iron Folic Acid tablets; Free deworming tablets; Point-of-care haemoglobin testing",eligibility:["Children 6–59 months, 5–9 years, 10–19 years","Pregnant women","Nursing mothers","Women of reproductive age (15–49 years)"],documents:["No documents needed; Services at school, AWC and health centres"],applyProcess:["AWC/school distributes IFA weekly under supervision","ASHA and ANM supervise drug consumption","Annual haemoglobin testing at health facility","Dietary counselling and kitchen gardens promoted"]}},

{id:236,name:"LaQshya Programme (Labour Room Quality)",icon:"🤱",iconBg:"rgba(212,64,42,.1)",cat:"Health",desc:"Improve quality of care in labour rooms and maternity OTs to reduce maternal and newborn mortality through standards.",tags:["Maternity","Labour Room","Quality","Women"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nhm.gov.in",
  fullDetails:{ministry:"Ministry of Health & Family Welfare",launched:"2017",benefit:"Improved labour room standards; LaQshya certification; Cash award to high-performing facilities",eligibility:["All pregnant women delivering at government hospitals benefit"],documents:["No individual documents; Government hospital registration"],applyProcess:["Labour rooms assessed on 72 standard indicators","Internal and external assessment done","Facilities achieving 80%+ get LaQshya certification","Certificate and cash award for best facilities"]}},

{id:237,name:"National Palliative Care Programme",icon:"🌸",iconBg:"rgba(212,64,42,.1)",cat:"Health",desc:"Quality end-of-life care and pain management for cancer, AIDS and life-limiting illness patients at home and hospitals.",tags:["Palliative Care","Cancer","Pain Relief","Terminal"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nhm.gov.in",
  fullDetails:{ministry:"Ministry of Health & Family Welfare",launched:"2012",benefit:"Free morphine and pain management drugs; Home-based palliative care team visits; Psychological support",eligibility:["Cancer patients","AIDS patients","End-stage organ failure patients","Any life-limiting illness"],documents:["Referral from treating doctor","Aadhaar Card for home care registration"],applyProcess:["Doctor registers patient in palliative care programme","Home care team visits regularly","Free drugs including oral morphine provided","Psychosocial support to patient and family"]}},

/* ── EDUCATION ── */
{id:238,name:"Unnat Bharat Abhiyan",icon:"🏫",iconBg:"rgba(27,79,204,.12)",cat:"Education",desc:"Connect higher educational institutions with rural communities for knowledge-based holistic development through participatory research.",tags:["Education","Rural","IIT","Research"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"partial",website:"https://unnatbharatabhiyan.gov.in",
  fullDetails:{ministry:"Ministry of Education",launched:"February 2014",benefit:"Research grants; Faculty travel support; Community development through institutional knowledge",eligibility:["HEIs: IITs, NITs, Central Universities, Deemed Universities","Minimum 5 villages to be adopted"],documents:["HEI institutional registration","Faculty list and profile","Adopted village details and consent"],applyProcess:["HEI applies on UBA portal","Minimum 5 villages adopted","Faculty and students engage with villages","Development plans prepared and implemented with community"]}},

{id:239,name:"NIRF – National Institutional Ranking Framework",icon:"🎓",iconBg:"rgba(27,79,204,.12)",cat:"Education",desc:"Annual ranking of all Indian higher educational institutions across 5 parameters to promote quality and accountability.",tags:["Education","Ranking","Higher Education","Quality"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"partial",website:"https://nirfindia.org",
  fullDetails:{ministry:"Ministry of Education",launched:"2015",benefit:"Policy advantages; Visibility; Attract talent and funding; Motivates quality improvement",eligibility:["All higher educational institutions willing to participate voluntarily"],documents:["Institution registration on NIRF portal","Self-reported data on 5 parameters","Verification by NIRF committee"],applyProcess:["Register on nirfindia.org","Submit data on Teaching/Research/Graduation/Outreach/Perception","Data validated by NIRF team","Rankings published annually in April"]}},

{id:240,name:"IMPRINT Scheme (Research Innovation & Technology)",icon:"🔬",iconBg:"rgba(120,86,204,.12)",cat:"Education",desc:"Joint MoE-Industry funding for research addressing national challenges in 10 technology domains from IITs/NITs.",tags:["Research","Innovation","Technology","IIT"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"partial",website:"https://imprint-india.org",
  fullDetails:{ministry:"Ministry of Education",launched:"November 2015",benefit:"Research grants up to ₹3 crore per project; Industry co-funding; IPR retained by institution",eligibility:["Faculty of IITs, NITs, IISc and other technical institutions","Joint proposals with industry preferred"],documents:["Research proposal (online)","Faculty academic credentials","Institute registration","Industry partner MoU/letter"],applyProcess:["Submit proposal through institute to IMPRINT portal","Domain committee technical review","Funding released in phases","Annual progress reports to Ministry"]}},

{id:241,name:"Study in India Programme",icon:"✈️",iconBg:"rgba(27,79,204,.12)",cat:"Education",desc:"Attract top foreign students to India with scholarships, fee waivers and visa facilitation to study in Indian institutions.",tags:["Higher Education","Foreign Students","Scholarship","Global"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"partial",website:"https://studyinindia.gov.in",
  fullDetails:{ministry:"Ministry of Education",launched:"2018",benefit:"Fee waivers and scholarships; Visa facilitation; Hostel accommodation; Priority to SAARC and African nations",eligibility:["Foreign students meeting eligibility criteria","International ranking above 10,000 (NIRF equivalent)"],documents:["Valid passport","Academic transcripts","Eligibility test score","Language proficiency proof","Application on SII portal"],applyProcess:["Apply on studyinindia.gov.in","Select institution and programme","Visa processing assistance","Scholarship awarded by selection committee"]}},

{id:242,name:"National Testing Agency (NTA) Initiative",icon:"📝",iconBg:"rgba(27,79,204,.12)",cat:"Education",desc:"Conduct national entrance examinations: JEE, NEET, CUET, UGC-NET in digital mode for merit-based higher education admissions.",tags:["Examination","NEET","JEE","CUET"],eligibleFor:["all"],incomeMax:99,deadline:"Season-wise",daysLeft:null,eligible:"yes",website:"https://nta.ac.in",
  fullDetails:{ministry:"Ministry of Education",launched:"2017",benefit:"Fair merit-based examination; Online testing centres; Application fee waiver for SC/ST/PH/EWS; Result within 10 days",eligibility:["Students applying for medical, engineering, central university, NET admissions"],documents:["Aadhaar Card","Class 10/12 mark sheet","Category certificate (SC/ST/OBC/EWS)","Passport photo","Valid email/mobile"],applyProcess:["Register on nta.ac.in for specific exam","Fill application form and pay fee online","Download admit card before exam","Appear at designated NTA exam centre"]}},

{id:243,name:"National Talent Search Examination (NTSE)",icon:"🏆",iconBg:"rgba(27,79,204,.12)",cat:"Education",desc:"Identify academically talented Class 10 students and nurture them with scholarships through higher education completion.",tags:["Scholarship","Talent","School","Merit"],eligibleFor:["all"],incomeMax:99,deadline:"Annually",daysLeft:null,eligible:"yes",website:"https://ncert.nic.in",
  fullDetails:{ministry:"Ministry of Education / NCERT",launched:"1963",benefit:"₹1,250/month scholarship for Classes 11-12; ₹2,000/month for UG/PG; ₹2,000/month for PhD scholars",eligibility:["Class 10 students in Indian schools","Stage 1 state exam; Stage 2 national exam","No income limit; Based purely on merit"],documents:["Class 9 mark sheet","School enrollment certificate","Caste certificate if applicable","Income certificate (state requirement varies)"],applyProcess:["Apply through school/state liaison officer","Stage 1 exam at state level","Stage 2 national exam conducted by NCERT","Scholarship awarded for qualified students annually"]}},

{id:244,name:"AICTE Mandatory Internship Scheme",icon:"💻",iconBg:"rgba(27,79,204,.12)",cat:"Education",desc:"Mandatory internship portal connecting engineering/management students with industries for 4-week minimum internship.",tags:["Internship","Engineering","Students","Industry"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://internship.aicte-india.org",
  fullDetails:{ministry:"AICTE / Ministry of Education",launched:"2021",benefit:"Mandatory internship recognition; Industry connects with students for free; Academic credit for internship",eligibility:["Engineering, pharmacy, management students in AICTE-approved institutions","Students in final/pre-final year"],documents:["College/Institute ID","Academic record","Resume/CV","AICTE portal registration"],applyProcess:["Register on AICTE internship portal","Search and apply to industry opportunities","Complete minimum 4-week internship","Upload certificate for academic credit"]}},

{id:245,name:"Yuva Sahakar Scheme (Youth Cooperative)",icon:"🤝",iconBg:"rgba(29,155,94,.12)",cat:"Education",desc:"NCDC scheme promoting cooperatives among youth; concessional loan at 2% concession for youth-led cooperative enterprises.",tags:["Youth","Cooperative","Loan","Entrepreneurship"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://ncdc.in",
  fullDetails:{ministry:"Ministry of Cooperation / NCDC",launched:"2018",benefit:"Loan up to ₹5 crore at 2% interest concession compared to normal rate; Project development support",eligibility:["Youth aged 18–35 years","Primary agricultural credit cooperatives","Youth cooperative societies registered under law"],documents:["Cooperative registration certificate","Member list with age proof","Project report (DPR)","Bank account details","Aadhaar Card of all members"],applyProcess:["Form youth cooperative with minimum members","Register with state cooperative dept","Apply to NCDC for loan via portal","Business plan appraised and loan sanctioned"]}},

{id:246,name:"Atal Tinkering Labs (ATL)",icon:"🔬",iconBg:"rgba(120,86,204,.12)",cat:"Education",desc:"Innovation labs in schools for students to explore STEM using 3D printers, robots, microcontrollers and electronics kits.",tags:["School","Innovation","STEM","Robot"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://aim.gov.in",
  fullDetails:{ministry:"Atal Innovation Mission / Niti Aayog",launched:"January 2016",benefit:"₹20 lakh establishment grant; ₹10 lakh operating cost for 5 years; Equipment worth ₹8 lakh included",eligibility:["Government and private schools with Classes 6–12","School must have science and ICT facilities","Active principal commitment required"],documents:["School registration certificate","Science lab proof","Internet facility certificate","Application on AIM portal with principal's letter"],applyProcess:["School applies on AIM portal aim.gov.in","Evaluation on innovation ecosystem potential","₹20 lakh grant released in phases","Lab set up, students learn and innovate"]}},

{id:247,name:"NIPUN Bharat Mission",icon:"📚",iconBg:"rgba(29,155,94,.12)",cat:"Education",desc:"Foundational Literacy & Numeracy Mission – ensure all children achieve basic reading and math skills by Grade 3 by 2026-27.",tags:["School","Literacy","Numeracy","Primary"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nipunbharat.education.gov.in",
  fullDetails:{ministry:"Ministry of Education",launched:"July 2021",benefit:"Quality foundational education for all; Mission-mode FLN implementation in all states; Teacher training",eligibility:["All students of Classes 1–3 in government and aided schools","Focus on children from disadvantaged backgrounds"],documents:["School enrollment certificate","No individual application for student"],applyProcess:["State implements NIPUN with central support","Teachers trained on FLN pedagogy and assessment","Regular classroom assessments done","Learning remediation for students below benchmark"]}},

{id:248,name:"DIKSHA Platform (School Digital Content)",icon:"📱",iconBg:"rgba(27,79,204,.12)",cat:"Education",desc:"National digital platform with QR-coded textbooks, teacher training modules and state-customized content for Classes 1–12.",tags:["School","Digital","e-Learning","Teachers"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://diksha.gov.in",
  fullDetails:{ministry:"Ministry of Education",launched:"2017",benefit:"Free educational content in 18+ languages; QR-coded textbooks; Teacher training modules; Offline access",eligibility:["All school students Classes 1–12","Teachers for professional development","Available free to all on web and app"],documents:["School enrollment or teacher registration","Mobile number for app login"],applyProcess:["Download DIKSHA app or visit diksha.gov.in","Select state, class and subject","Access textbooks, videos, assessments free","Teachers access training modules anytime"]}},

/* ── WOMEN / CHILD ── */
{id:249,name:"STEP Scheme (Training & Employment for Women)",icon:"👩",iconBg:"rgba(120,86,204,.12)",cat:"Women",desc:"Vocational training and employment support for marginalized women in agriculture, food processing, handicrafts and other sectors.",tags:["Women","Training","Skill","Employment"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://wcd.nic.in",
  fullDetails:{ministry:"Ministry of Women & Child Development",launched:"1986-87",benefit:"Free vocational training; Stipend during training; Placement support; Self-employment toolkit",eligibility:["Women 16 years and above","Priority to BPL, SC/ST, minority women","Rural and peri-urban women"],documents:["Aadhaar Card","Age proof","BPL/Income certificate","Application through implementing NGO/institution"],applyProcess:["Apply through nearest NGO or WCD office implementing STEP","Selection based on need and vulnerability","Free training at skill centre for 3–6 months","Placement or self-employment linkage"]}},

{id:250,name:"Swadhar Greh Scheme",icon:"🏠",iconBg:"rgba(120,86,204,.12)",cat:"Women",desc:"Institutional support for women in difficult circumstances – domestic violence victims, trafficking survivors and destitute women.",tags:["Women","Shelter","Violence","Rehabilitation"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://wcd.nic.in",
  fullDetails:{ministry:"Ministry of Women & Child Development",launched:"2002",benefit:"Free shelter for up to 3 years; Food, clothing, legal aid, counselling, skill training; Rehabilitation and reintegration",eligibility:["Women above 18 years in difficult circumstances","Trafficking survivors","Domestic violence victims","Destitute and homeless women"],documents:["Self-referral or police/NGO referral","Aadhaar Card if available (not mandatory at entry)"],applyProcess:["Self-referral or police/court/NGO referral","Immediate admission to Swadhar Greh","Case management plan prepared","Rehabilitation and reintegration support"]}},

{id:251,name:"Ujjawala Scheme (Anti-Trafficking)",icon:"🕊️",iconBg:"rgba(212,64,42,.1)",cat:"Women",desc:"Prevention of trafficking of women and children; rescue, rehabilitation and reintegration of victims.",tags:["Anti-trafficking","Women","Child","Rescue"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://wcd.nic.in",
  fullDetails:{ministry:"Ministry of Women & Child Development",launched:"2007",benefit:"Rescue services; Shelter and rehabilitation; Legal aid; Vocational training; Compensation under POCSO/NirbhayaFund",eligibility:["Trafficked women and children","Vulnerable communities in trafficking-prone areas","Prevention targets communities before trafficking"],documents:["No documents needed for immediate rescue","Identity established post-rescue by NGO/police"],applyProcess:["Community or NGO reports trafficking","Police and NGO rescue operation conducted","Victim brought to Ujjawala shelter","Long-term rehabilitation plan and reintegration"]}},

{id:252,name:"Working Women Hostel Scheme",icon:"👩‍💼",iconBg:"rgba(120,86,204,.12)",cat:"Women",desc:"Safe and affordable hostel accommodation for working and professional women in urban areas with day care facilities.",tags:["Women","Working","Hostel","Safety"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://wcd.nic.in",
  fullDetails:{ministry:"Ministry of Women & Child Development",launched:"1975 (Revised)",benefit:"Subsidised hostel accommodation; Day care for children; Security and safety facilities; Affordable rent",eligibility:["Working/professional women earning up to ₹50,000/month","Migrant women professionals","Women trainees and apprentices"],documents:["Aadhaar Card","Employment or training certificate","Income proof","Application to nearest Working Women Hostel"],applyProcess:["Identify nearest Working Women Hostel (wcd.nic.in)","Apply with employment proof","Income and employment verified by hostel warden","Accommodation allotted as per availability"]}},

{id:253,name:"Mahila Coir Yojana",icon:"🧵",iconBg:"rgba(0,150,136,.12)",cat:"Women",desc:"Skill training to rural women artisans in coir spinning and provision of motorized spinning equipment to boost income.",tags:["Women","Coir","Spinning","Handicraft"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://coirboard.gov.in",
  fullDetails:{ministry:"Ministry of MSME / Coir Board",launched:"1994",benefit:"Free motorized ratt (spinning equipment) worth ₹8,000+; 2 months free skill training; Market linkage",eligibility:["Women artisans in coir producing states (Kerala, TN, Karnataka, AP, Odisha)","Rural poor women artisans"],documents:["Aadhaar Card","Residence proof","BPL/income certificate","Coir Board registration"],applyProcess:["Apply at nearest Coir Board regional/state office","Selection and free training for 2 months","Motorized ratt provided free after training completion","Market linkage through Coir Board cooperative"]}},

{id:254,name:"SABLA Scheme (Adolescent Girls)",icon:"👧",iconBg:"rgba(120,86,204,.12)",cat:"Women",desc:"Nutrition, IFA supplementation, health checkup and life skills for adolescent girls 11–18 years through Anganwadi Centres.",tags:["Adolescent Girls","Nutrition","Life Skills","AWC"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://wcd.nic.in",
  fullDetails:{ministry:"Ministry of Women & Child Development",launched:"April 2011",benefit:"600 calories/day nutrition supplementation; Life skills training; Health checkup; IFA tablets; Vocational guidance",eligibility:["Adolescent girls aged 11–18 years in targeted blocks","Priority to out-of-school girls and dropouts"],documents:["Aadhaar Card or school certificate","AWC/ICDS Centre registration"],applyProcess:["Girls enrolled through nearby Anganwadi Centre","AWC provides nutrition and health services","Life skills sessions on health, hygiene, rights, gender","School dropouts mainstreamed through bridge courses"]}},

{id:255,name:"Balika Samridhi Yojana",icon:"💰",iconBg:"rgba(120,86,204,.12)",cat:"Women",desc:"Post-delivery cash grant to BPL mothers and annual education scholarship for girl children to promote girl education.",tags:["Girl Child","Scholarship","BPL","Education"],eligibleFor:["all"],incomeMax:2,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://wcd.nic.in",
  fullDetails:{ministry:"Ministry of Women & Child Development",launched:"1997",benefit:"₹500 post-birth grant; Annual scholarship ₹300–₹1,000 for Classes 1–10; Anti-dowry condition",eligibility:["BPL families with girl children","Girl born after August 15, 1997","All states except J&K"],documents:["Birth certificate","BPL card","Aadhaar Card of mother and child","Bank account in mother's name"],applyProcess:["Apply at ICDS centre or PHC within 1 year of birth","AWW (Anganwadi Worker) registers girl child","Annual scholarship credited in each academic year","Full amount deposited in bank till girl turns 18"]}},

{id:256,name:"Women Helpline Scheme (181)",icon:"📞",iconBg:"rgba(120,86,204,.12)",cat:"Women",desc:"24×7 helpline for women in distress; connects to police, medical, legal and NGO support within 24 hours.",tags:["Women","Helpline","Distress","Emergency"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://wcd.nic.in",
  fullDetails:{ministry:"Ministry of Women & Child Development",launched:"2015",benefit:"Free 24×7 helpline; Immediate multi-agency response; Legal aid; Shelter referral; Police activation",eligibility:["All women in need of any assistance","Trafficking victims, domestic violence, harassment, distress cases"],documents:["No documents required; Call 181"],applyProcess:["Call 181 in emergency or distress","Helpline worker assesses situation","Police/medical/shelter/NGO activated based on need","7-day follow-up to ensure resolution"]}},

{id:257,name:"Mission Vatsalya (Child Protection)",icon:"👶",iconBg:"rgba(212,64,42,.1)",cat:"Women",desc:"Holistic child welfare and protection – Child Care Institutions, adoption facilitation, foster care and juvenile justice.",tags:["Child","Adoption","Foster Care","Protection"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://wcd.nic.in",
  fullDetails:{ministry:"Ministry of Women & Child Development",launched:"2022",benefit:"Child care institution support; Foster care allowance ₹4,000/month; Adoption facilitation; Aftercare for 18+",eligibility:["Children in need of care and protection","Prospective adoptive parents (Indian and foreign)","Foster families"],documents:["CARA portal registration for adoption","Home study report","Income proof","Background check clearance"],applyProcess:["Register on CARA portal (cara.nic.in)","Home study by recognized adoption agency","Wait for match from CARINGS","Post-adoption follow-up for 2 years"]}},

{id:258,name:"Poshan Abhiyaan 2.0",icon:"🥗",iconBg:"rgba(212,64,42,.1)",cat:"Women",desc:"Mission to reduce malnutrition in children and women through convergence of ICDS, NHM and digital POSHAN Tracker.",tags:["Nutrition","Malnutrition","Child","Convergence"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://poshan.gov.in",
  fullDetails:{ministry:"Ministry of Women & Child Development",launched:"2021",benefit:"Free supplementary nutrition; Growth monitoring; Convergent services; Technology-based tracking; NRC referral",eligibility:["Children 0–6 years","Pregnant and lactating women","Adolescent girls"],documents:["Aadhaar Card (mother and child)","Birth certificate","AWC/ICDS Centre enrollment"],applyProcess:["Enroll at nearest Anganwadi Centre (AWC)","Regular weighing and growth assessment","Nutrition and health services provided","Severe malnutrition cases referred to NRC"]}},

{id:259,name:"Transgender Welfare Scheme",icon:"🏳️",iconBg:"rgba(120,86,204,.12)",cat:"Women",desc:"Identity certificate, social security, education scholarships and healthcare access for transgender persons under NALSA Act.",tags:["Transgender","Welfare","Identity","Protection"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://transgender.dosje.gov.in",
  fullDetails:{ministry:"Ministry of Social Justice",launched:"2020",benefit:"Identity certificate; Welfare scheme access; Scholarship for education; Healthcare at government hospitals; Shelter homes",eligibility:["All transgender persons in India","Self-identification accepted"],documents:["Application on transgender portal","Aadhaar Card","Medical certificate (optional, not mandatory for identity)"],applyProcess:["Register on transgender.dosje.gov.in","Certificate issued by District Magistrate","Access welfare schemes with certificate","Shelter and healthcare through registered organizations"]}},

{id:260,name:"SC/ST Hub Scheme",icon:"🤝",iconBg:"rgba(29,155,94,.12)",cat:"Women",desc:"Procurement opportunities for SC/ST entrepreneurs; 4% public procurement target from SC/ST-owned MSMEs.",tags:["SC","ST","Business","Procurement"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://scsthub.in",
  fullDetails:{ministry:"Ministry of MSME",launched:"2017",benefit:"4% of central government procurement from SC/ST enterprises; Mentoring; Capacity building; GeM registration support",eligibility:["SC/ST-owned MSMEs (51%+ SC/ST ownership)","Registered on Udyam portal","GeM-registered enterprises"],documents:["SC/ST caste certificate","Udyam Registration certificate","GeM registration","Bank account details","PAN Card"],applyProcess:["Get SC/ST certificate from revenue authorities","Register on Udyam portal","Register on GeM portal","Apply for government tenders with SC/ST preference"]}},

/* ── BUSINESS / EMPLOYMENT ── */
{id:261,name:"Make in India Initiative",icon:"🏭",iconBg:"rgba(27,79,204,.12)",cat:"Business",desc:"National campaign to transform India into global manufacturing hub; FDI facilitation, sector incentives and ease of business.",tags:["Manufacturing","FDI","Industry","Export"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://makeinindia.com",
  fullDetails:{ministry:"DPIIT, Ministry of Commerce",launched:"September 2014",benefit:"100% FDI in most sectors; Regulatory simplification; Sector-specific PLI incentives; Single window clearance",eligibility:["Domestic manufacturers","Foreign investors","Entrepreneurs in 25+ notified sectors"],documents:["Business registration (MCA)","GST registration","Industry-specific licenses","DPIIT recognition for startups"],applyProcess:["Register company with MCA21 portal","Obtain sector-specific licenses on NSWS","FDI through RBI automatic route","Apply for sector-specific incentive schemes separately"]}},

{id:262,name:"Production Linked Incentive (PLI) Scheme",icon:"💰",iconBg:"rgba(29,155,94,.12)",cat:"Business",desc:"4–6% production-linked cash incentive on incremental sales over base year for manufacturers in 14 strategic sectors.",tags:["Manufacturing","Incentive","Export","Investment"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://plischemes.gov.in",
  fullDetails:{ministry:"Ministry of Commerce & Industry / Sectoral Ministries",launched:"2020-21",benefit:"4–6% incentive on incremental sales for 5 years; Sector-specific rates; Total outlay ₹1.97 lakh crore",eligibility:["Large manufacturers in 14 specified sectors","Minimum investment threshold (varies by sector)","Indian and foreign companies eligible"],documents:["Company registration","Audited financial statements","Production capacity proof","Product category registration","PLI application form"],applyProcess:["Apply on sector-specific PLI portal","Investment commitment and production baseline submitted","Annual incremental sales verified","Incentive disbursed by respective Ministry"]}},

{id:263,name:"Startup India Seed Fund Scheme",icon:"🌱",iconBg:"rgba(29,155,94,.12)",cat:"Business",desc:"Seed funding up to ₹50 lakh for early-stage startups through selected incubators for PoC, prototype and market entry.",tags:["Startup","Seed Fund","Incubator","Early Stage"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://seedfund.startupindia.gov.in",
  fullDetails:{ministry:"DPIIT / Ministry of Commerce",launched:"April 2021",benefit:"Up to ₹20 lakh for PoC; Up to ₹50 lakh for market entry loans; Mentorship from incubator",eligibility:["DPIIT-recognized startups less than 2 years old","Innovation-based scalable business model","Not received more than ₹10 lakh funding"],documents:["DPIIT startup recognition certificate","Company registration (Pvt Ltd/LLP)","Business plan","Pitch deck","Founders' profiles and LinkedIn"],applyProcess:["Get DPIIT recognition first at startupindia.gov.in","Apply to selected incubator on SISFS portal","Incubator evaluates pitch presentation","Seed grant released in milestone-linked tranches"]}},

{id:264,name:"GeM – Government e-Marketplace",icon:"🏛️",iconBg:"rgba(27,79,204,.12)",cat:"Business",desc:"Government online procurement portal where MSMEs, startups and artisans sell directly to government; transparent B2G.",tags:["GeM","Government Procurement","MSME","B2G"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://gem.gov.in",
  fullDetails:{ministry:"Ministry of Commerce",launched:"August 2016",benefit:"Direct government orders; No middlemen; Payment in 10 days; MSMEs get mandatory 25% procurement preference",eligibility:["All MSMEs, startups, artisans, SHGs","Weavers, craftsmen and women entrepreneurs","Companies of all sizes"],documents:["GST Certificate","Udyam Registration (for MSME)","PAN Card","Bank account details","Product images and details"],applyProcess:["Register on gem.gov.in as seller","List products or services with pricing","Government entities search and place orders","Deliver order and receive direct bank payment"]}},

{id:265,name:"ONDC – Open Network for Digital Commerce",icon:"🛒",iconBg:"rgba(27,79,204,.12)",cat:"Business",desc:"Interoperable digital commerce protocol connecting any buyer-seller app; level playing field for small sellers and MSMEs.",tags:["ONDC","e-Commerce","MSME","Digital"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://ondc.org",
  fullDetails:{ministry:"DPIIT / Ministry of Commerce",launched:"2022",benefit:"Open network; Reduced commission vs aggregators; Market reach through any ONDC buyer app; Own store front",eligibility:["MSMEs, kiranas, street vendors, farmers","Any seller wanting to reach digital buyers","Service providers in logistics, food, retail"],documents:["GST Registration","FSSAI (for food)","Bank account","ONDC seller app registration (Paytm/MyStore/etc.)"],applyProcess:["Download an ONDC seller app (Paytm/MyStore)","Register with GST and business details","List products or services","Receive orders from any ONDC buyer app"]}},

{id:266,name:"One District One Product (ODOP)",icon:"🏺",iconBg:"rgba(245,166,35,.12)",cat:"Business",desc:"Identify one unique product per district; promote GI tags, scale production, export marketing and artisan livelihoods.",tags:["ODOP","Artisan","GI Tag","Export"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://odopup.in",
  fullDetails:{ministry:"DPIIT / Ministry of Commerce",launched:"2018",benefit:"Branding and packaging support; Market linkage; Skill training; Export facilitation; GeM/ONDC integration",eligibility:["Artisans and weavers","MSMEs producing district specialty products","Craftsmen and self-help groups"],documents:["Artisan card (from state handicrafts dept)","Aadhaar Card","Product registration","Bank account"],applyProcess:["Identify district ODOP product","Register as artisan or unit with state department","Access training, branding and market support","Sell on GeM, ONDC and export platforms"]}},

{id:267,name:"National Single Window System (NSWS)",icon:"🖥️",iconBg:"rgba(27,79,204,.12)",cat:"Business",desc:"Single IT platform for all business approvals – 32 central departments and all state government approvals in one window.",tags:["Business","Approval","Single Window","e-Governance"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nsws.gov.in",
  fullDetails:{ministry:"DPIIT / Ministry of Commerce",launched:"September 2021",benefit:"All approvals in one place; Track status in real-time; Reduce approval time from 60 to 15 days; No physical visits",eligibility:["All businesses seeking multiple government approvals","Startups and large industries","Domestic and foreign investors"],documents:["Business registration certificate","GST registration","PAN Card","Sector-specific compliance documents (varies)"],applyProcess:["Register on nsws.gov.in","Select all approvals needed in one application","Upload documents once","Track all approvals on single dashboard"]}},

{id:268,name:"Skill Loan Scheme",icon:"📚",iconBg:"rgba(29,155,94,.12)",cat:"Business",desc:"Bank and NBFC loans for skill development courses; ₹5,000–₹1.5 lakh; no collateral; moratorium till course completion.",tags:["Skill","Loan","Training","Youth"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://msde.gov.in",
  fullDetails:{ministry:"Ministry of Skill Development & Entrepreneurship",launched:"2015",benefit:"Loan ₹5,000 to ₹1.5 lakh; No collateral required; Moratorium till course completion plus 6 months",eligibility:["Students enrolled in skill development courses at NSQF-recognized institutions","No income limit; Meritorious poor students get interest subvention"],documents:["Aadhaar Card","Admission letter from skill institute","Bank account passbook","Income certificate (for subvention)","Course fee structure"],applyProcess:["Identify recognized PMKVY/NSDC skill course","Apply to bank (SBI/PNB/BOB) with admission letter","Loan sanctioned within 15 days","Repay EMI 6 months after course completion"]}},

{id:269,name:"Apprenticeship Training Scheme",icon:"🔧",iconBg:"rgba(27,79,204,.12)",cat:"Business",desc:"National Apprenticeship Act mandates industries to engage apprentices; ₹1,500/month stipend with 50% government share.",tags:["Apprenticeship","Skill","Youth","Industry"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://apprenticeshipindia.org",
  fullDetails:{ministry:"Ministry of Skill Development",launched:"1961 (Revised 2014)",benefit:"₹1,500–₹9,000/month stipend (50% govt share); On-job training; National Apprenticeship Certificate",eligibility:["Youth 14–21 years (up to 30 for reserved categories)","Class 8 minimum qualification; ITI/diploma preferred"],documents:["Aadhaar Card","Educational certificates (ITI/diploma/degree)","Apprenticeship registration on portal","Medical fitness certificate"],applyProcess:["Register on apprenticeshipindia.org","Find establishment and trade preference","Contract registration with DGET regional office","On-job training for 6 months to 4 years"]}},

{id:270,name:"Textile Upgradation Fund Scheme (TUFS)",icon:"🧵",iconBg:"rgba(0,150,136,.12)",cat:"Business",desc:"Capital subsidy and interest reimbursement for technology upgradation of textile, silk and jute industries.",tags:["Textile","Technology","Subsidy","MSME"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"partial",website:"https://tufs.gov.in",
  fullDetails:{ministry:"Ministry of Textiles",launched:"1999 (Revised 2016)",benefit:"15–25% capital subsidy; 5% interest reimbursement on 5-year term loan; Additional for powerlooms",eligibility:["Textile spinning, weaving, knitting, processing units","MSME powerlooms and handloom sector","Silk reeling and jute processing units"],documents:["Company registration","Project report (DPR)","Bank loan sanction letter","Technology purchase invoice","GST Certificate"],applyProcess:["Apply to nodal bank with technology purchase plan","Bank forwards to TUFS nodal agency (IDBI)","Capital subsidy released to bank account","Equipment installed and utilization certified"]}},

/* ── PENSION / WELFARE ── */
{id:271,name:"National Family Benefit Scheme (NFBS)",icon:"💰",iconBg:"rgba(245,166,35,.12)",cat:"Pension",desc:"One-time lump sum ₹20,000 to BPL households on death of primary breadwinner aged 18–64 years.",tags:["Pension","Death Benefit","BPL","Family"],eligibleFor:["all"],incomeMax:2,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nsap.nic.in",
  fullDetails:{ministry:"Ministry of Rural Development / NSAP",launched:"1995",benefit:"One-time payment of ₹20,000 to bereaved family within 30 days of verification",eligibility:["BPL households","Death of primary breadwinner (18–64 years)","Natural or accidental death eligible"],documents:["Death certificate","BPL Ration Card","Aadhaar Card of deceased","Bank account of surviving family member","Proof of relationship (ration card/voter ID)"],applyProcess:["Apply at block/district welfare office or gram panchayat","Submit death certificate and BPL proof","Application verified by CDPO","₹20,000 credited to bank account within 30 days"]}},

{id:272,name:"Annapurna Scheme (Senior Citizen Food)",icon:"🍚",iconBg:"rgba(29,155,94,.12)",cat:"Pension",desc:"Free 10 kg food grain per month to destitute senior citizens above 65 years who are eligible but not receiving pension.",tags:["Senior Citizen","Food","Free","BPL"],eligibleFor:["all"],incomeMax:2,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nsap.nic.in",
  fullDetails:{ministry:"Ministry of Rural Development / NSAP",launched:"2000",benefit:"10 kg free food grain per month (wheat or rice) for destitute elderly",eligibility:["Indigent senior citizens 65+ years","Not receiving any social pension","Below poverty line","Applied for old age pension but not receiving"],documents:["Age proof (Aadhaar/Voter ID showing 65+ years)","BPL ration card","Aadhaar Card","No-pension declaration","Bank account (for some states)"],applyProcess:["Apply at gram panchayat or ULB","Verification of age and BPL status","Registration in ration card system","Monthly grain entitlement from nearest PDS shop"]}},

{id:273,name:"National Trust Schemes for Disabilities",icon:"🌟",iconBg:"rgba(120,86,204,.12)",cat:"Pension",desc:"Legal guardianship, group homes and rehabilitation for persons with autism, cerebral palsy, mental retardation and multiple disabilities.",tags:["Disabled","Autism","Cerebral Palsy","Guardian"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://thenationaltrust.gov.in",
  fullDetails:{ministry:"Ministry of Social Justice / National Trust",launched:"1999",benefit:"Legal guardianship certificate; Group homes (Samarth); Scholarships (Niramaya health insurance); Respite care",eligibility:["Persons with autism, cerebral palsy, mental retardation, multiple disabilities"],documents:["Disability certificate (4 specified conditions)","Aadhaar Card","Family/guardian details","Guardian appointment application"],applyProcess:["Register on National Trust portal thenationaltrust.gov.in","Apply for guardianship or group home","Case verified by Local Level Committee (LLC)","Services and legal guardian certificate issued"]}},

{id:274,name:"Rashtriya Vayoshri Yojana (Senior Aids)",icon:"♿",iconBg:"rgba(245,166,35,.12)",cat:"Pension",desc:"Free walking aids, wheelchairs, hearing aids, spectacles and dentures to BPL senior citizens above 60 years.",tags:["Senior Citizen","Assistive Device","Free","BPL"],eligibleFor:["all"],incomeMax:2,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://socialjustice.gov.in",
  fullDetails:{ministry:"Ministry of Social Justice",launched:"2017",benefit:"Free walking stick, tripod, walker, wheelchair, hearing aids, spectacles and dentures worth ₹5,000–₹15,000",eligibility:["BPL senior citizens above 60 years","Age-related disability assessment done at camp","Priority to SC/ST beneficiaries (51%)"],documents:["BPL certificate / Ration card","Age proof (Aadhaar/Voter ID showing 60+ years)","Disability assessment at ALIMCO camp","Aadhaar Card","Application at camp or district welfare office"],applyProcess:["Apply at district social welfare office or ALIMCO camp","Attend assessment camp organized by ALIMCO","Devices fitted by medical/paramedical team","Maintenance support provided for 1 year"]}},

{id:275,name:"e-Shram Portal (Unorganized Workers)",icon:"💼",iconBg:"rgba(255,87,34,.12)",cat:"Pension",desc:"National database of unorganized workers; UAN e-Shram card with ₹2 lakh accident insurance under PMSBY.",tags:["Unorganized","Labour","e-Shram","Social Security"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://eshram.gov.in",
  fullDetails:{ministry:"Ministry of Labour",launched:"August 2021",benefit:"UAN e-Shram card; ₹2 lakh accident insurance (PMSBY); Social security benefit portability across states",eligibility:["All unorganized sector workers aged 16–59","Not a member of EPFO/NPS/ESIC","Agricultural workers, construction, domestic, street vendors"],documents:["Aadhaar Card linked to mobile number","Bank account","Mobile number linked to Aadhaar"],applyProcess:["Register on eshram.gov.in or visit CSC","Aadhaar OTP-based verification","UAN e-Shram card generated instantly","PM Suraksha Bima Yojana auto-enrolled for accident cover"]}},

{id:276,name:"PM SVANidhi (Street Vendor Loan)",icon:"🛒",iconBg:"rgba(245,166,35,.12)",cat:"Pension",desc:"Working capital loan for street vendors; ₹10,000 initial loan extendable to ₹50,000; 7% interest subvention + cashback.",tags:["Street Vendor","Loan","Digital Payment","Urban"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://pmsvanidhi.mohua.gov.in",
  fullDetails:{ministry:"Ministry of Housing & Urban Affairs",launched:"June 2020",benefit:"₹10,000 → ₹20,000 → ₹50,000 ladder loans; 7% interest subvention; Digital payment cashback ₹100/month",eligibility:["Street vendors with Certificate of Vending","Letter of Recommendation from ULB","Vendors operating before March 24, 2020"],documents:["Certificate of Vending / Letter of Recommendation","Aadhaar Card","Bank account or Jan Dhan account"],applyProcess:["Apply at ULB office or partner MFI/bank","Certificate of vending verified","₹10,000 disbursed digitally","Repay and upgrade to ₹20,000 in 12 months"]}},

{id:277,name:"One Nation One Ration Card (ONORC)",icon:"🍚",iconBg:"rgba(29,155,94,.12)",cat:"Pension",desc:"Portable PDS ration card allowing migrant workers to access their full grain entitlement from any ration shop in India.",tags:["Ration Card","PDS","Migrant","Portability"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://impds.nic.in",
  fullDetails:{ministry:"Ministry of Consumer Affairs",launched:"2019",benefit:"Access full PDS ration entitlement from any FPS in India; No area restriction; Full portability for migrants",eligibility:["All NFSA beneficiaries (Priority Household and AAY)","Especially migrant workers and seasonal migrants"],documents:["Ration card","Aadhaar Card (mandatory for ONORC biometric)"],applyProcess:["Aadhaar seeding with ration card done by state","Migrant visits any FPS in any state","Biometric authentication on e-PoS machine","Full entitlement dispensed"]}},

{id:278,name:"Direct Benefit Transfer (DBT) Mission",icon:"💳",iconBg:"rgba(29,155,94,.12)",cat:"Pension",desc:"Transfer all government subsidies and benefits directly to beneficiary Aadhaar-linked bank accounts; 650+ schemes linked.",tags:["DBT","Subsidy","Direct Transfer","Aadhaar"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://dbtbharat.gov.in",
  fullDetails:{ministry:"Ministry of Finance",launched:"January 2013",benefit:"Timely subsidy receipt; Reduced pilferage; Multiple scheme benefits in one account; SMS alerts",eligibility:["All government scheme beneficiaries","Aadhaar-bank seeding required"],documents:["Aadhaar Card (mandatory)","Bank account linked to Aadhaar","Mobile number for alerts"],applyProcess:["Aadhaar-bank account seeding done once","Scheme enrollment with Aadhaar","Benefit credited directly on due date","SMS alert received by beneficiary"]}},

/* ── INFRASTRUCTURE ── */
{id:279,name:"National Broadband Mission",icon:"📡",iconBg:"rgba(0,150,136,.12)",cat:"Infrastructure",desc:"Provide 50 Mbps broadband connectivity to all gram panchayats through BharatNet; Wi-Fi hotspots in villages.",tags:["Broadband","Rural","Digital","BharatNet"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://bbnl.nic.in",
  fullDetails:{ministry:"Ministry of Communications",launched:"2019",benefit:"Universal broadband at GP level; Wi-Fi hotspots in villages; 50 Mbps minimum to every GP",eligibility:["All citizens; Rural households and Gram Panchayats"],documents:["Aadhaar Card for service registration; CSC/Hotspot access"],applyProcess:["BharatNet lays optical fiber to GP","CSC at GP enables public Wi-Fi","Citizens access internet at CSC or from home connections","Last-mile ISPs connect rural homes"]}},

{id:280,name:"Dedicated Freight Corridor Project",icon:"🚛",iconBg:"rgba(27,79,204,.12)",cat:"Infrastructure",desc:"Dedicated rail freight corridors (EDFC and WDFC) to decongest passenger rail and reduce India's logistics costs.",tags:["Freight","Railway","Logistics","Infrastructure"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://dfccil.com",
  fullDetails:{ministry:"Ministry of Railways / DFCCIL",launched:"2006",benefit:"Faster freight movement; Logistics cost reduction by 4–5%; Industrial corridor development alongside DFC",eligibility:["Industrial units along corridors","Logistics companies","All businesses using rail freight"],documents:["No individual application; Benefits through reduced logistics costs"],applyProcess:["DFCCIL constructs and operates dedicated corridor","Freight trains run at 100 kmph speed","Industries and logistics companies book freight capacity","E-commerce and manufacturing get cheaper logistics"]}},

{id:281,name:"UDAN – Regional Air Connectivity Scheme",icon:"✈️",iconBg:"rgba(27,79,204,.12)",cat:"Infrastructure",desc:"Ude Desh ka Aam Nagrik – connect Tier 2 and 3 cities; capped fare ₹2,500 for 1-hour flight; 50% subsidised seats.",tags:["Aviation","UDAN","Regional","Connectivity"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://udan.aai.aero",
  fullDetails:{ministry:"Ministry of Civil Aviation",launched:"2016",benefit:"Capped fares ₹2,500 per seat for 1 hour; 50% seats at subsidised rate on UDAN routes; VGF to airlines",eligibility:["Passengers of Tier 2–3 cities on UDAN routes","No income criteria; First-come-first-served"],documents:["No registration needed; Book UDAN flight on airline app/website"],applyProcess:["UDAN routes operationalized by AAI","Airline provides 50% subsidised seats","VGF (Viability Gap Funding) paid to airline by govt","Passengers book tickets at affordable rate online"]}},

{id:282,name:"Regional Rapid Transit System (RRTS)",icon:"🚆",iconBg:"rgba(27,79,204,.12)",cat:"Infrastructure",desc:"Semi-high speed rail at 160 kmph connecting NCR cities (Delhi-Meerut, Delhi-Gurugram); NCRTC implementation.",tags:["Rapid Transit","NCR","Metro","Urban"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://ncrtc.in",
  fullDetails:{ministry:"Ministry of Housing & Urban Affairs / NCRTC",launched:"2019",benefit:"160 kmph speed; 3x faster than existing rail; Trains every 5–7 minutes; Affordable fares",eligibility:["NCR residents; Daily commuters between Delhi and satellite towns"],documents:["No individual application; Buy ticket on NCRTC app or counter"],applyProcess:["NCRTC constructs elevated and tunnel sections","Stations commissioned in phases","Trains operational on commissioned stretches","Ticket booking via NCRTC app or station counter"]}},

{id:283,name:"Electric Vehicle Charging Infrastructure Scheme",icon:"🔋",iconBg:"rgba(29,155,94,.12)",cat:"Infrastructure",desc:"Create nationwide EV charging network; incentivize public and private charging stations in cities and national highways.",tags:["EV","Charging","Green","Electric"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://beeindia.gov.in",
  fullDetails:{ministry:"Ministry of Power / BEE",launched:"2019",benefit:"Capital subsidy for charging stations; FAME II support for operators; Promote EV adoption",eligibility:["EV owners needing charging access","Charging station operators for subsidy","State nodal agencies for public charging"],documents:["For operators: Company registration, DPR, Technical compliance, DISCOM connection approval"],applyProcess:["Operator applies for subsidy to BEE/state agency","Technical clearance obtained","Charging station installed per standards","Real-time availability shown on app"]}},

{id:284,name:"FAME India – EV Subsidy Scheme",icon:"🚗",iconBg:"rgba(29,155,94,.12)",cat:"Infrastructure",desc:"Faster Adoption & Manufacturing of Hybrid & Electric Vehicles; ₹15,000/kWh subsidy on EV two-wheelers and three-wheelers.",tags:["EV","Electric Vehicle","Subsidy","Green"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://fame2.heavyindustries.gov.in",
  fullDetails:{ministry:"Ministry of Heavy Industries",launched:"2019 (FAME II)",benefit:"₹15,000/kWh on 2W EV; ₹10,000/kWh on 3W; Subsidy applied at point of sale; Reduces upfront cost by ₹10,000–₹25,000",eligibility:["Individual buyers of EV 2-wheelers and 3-wheelers","Commercial EV fleet operators","Electric bus purchasers"],documents:["Aadhaar Card","Bank account","Vehicle registration at authorized EV dealer (subsidy deducted at source)"],applyProcess:["Visit authorized EV dealer","Select eligible EV model","Dealer applies FAME subsidy at point of sale","Pay reduced net price and register vehicle"]}},

{id:285,name:"National Highways Development Project (NHDP)",icon:"🛣️",iconBg:"rgba(255,87,34,.12)",cat:"Infrastructure",desc:"4/6-lane expansion of national highways; Golden Quadrilateral, NSEW corridor and port connectivity projects by NHAI.",tags:["Highway","Roads","Infrastructure","4-Lane"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nhai.gov.in",
  fullDetails:{ministry:"Ministry of Road Transport & Highways",launched:"1999",benefit:"Better road connectivity; Reduced travel time; Boost to trade and tourism; 14,000+ km upgraded",eligibility:["All road users; Businesses along highways"],documents:["No individual application needed"],applyProcess:["NHAI identifies corridors for upgrade","Tendering and EPC/BOT contract awarded","Construction by concessionaire","FASTag-based toll on completed highways"]}},

{id:286,name:"Smart Meter National Programme",icon:"⚡",iconBg:"rgba(255,87,34,.12)",cat:"Infrastructure",desc:"Replace conventional electricity meters with prepaid smart meters; real-time consumption tracking and remote services.",tags:["Smart Meter","Electricity","Prepaid","Consumer"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://recindia.nic.in",
  fullDetails:{ministry:"Ministry of Power",launched:"2021",benefit:"Accurate billing; Prepaid flexibility; Real-time consumption data; Faster outage detection and restoration",eligibility:["All electricity consumers; Implementation by DISCOMs"],documents:["No application needed; DISCOM replaces meters proactively"],applyProcess:["DISCOM installs smart meter at your home/office","Consumer gets app access for real-time data","Prepaid or postpaid recharge options","Alert on unusual consumption"]}},

/* ── SCIENCE / ENVIRONMENT ── */
{id:287,name:"National Action Plan on Climate Change (NAPCC)",icon:"🌍",iconBg:"rgba(29,155,94,.12)",cat:"Science",desc:"8 National Missions addressing climate change adaptation and mitigation across solar, water, energy, forests and agriculture.",tags:["Climate","Solar","Water","Green"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://moef.gov.in",
  fullDetails:{ministry:"Ministry of Environment, Forest & Climate Change",launched:"2008",benefit:"Policy framework; ₹30,000+ crore in 8 missions; International climate finance; 500 GW renewable target",eligibility:["Entire country; Sectoral focus through 8 missions; State Action Plans"],documents:["No individual application; Systemic national programme"],applyProcess:["8 missions being implemented by respective ministries","State Action Plans (SAPCCs) prepared by states","International climate finance channeled through GCF","Annual reporting to UNFCCC"]}},

{id:288,name:"National Clean Air Programme (NCAP)",icon:"💨",iconBg:"rgba(0,150,136,.12)",cat:"Science",desc:"Reduce particulate matter pollution 40% by 2026 in 132 non-attainment cities; city action plans and source apportionment.",tags:["Air Quality","Pollution","Cities","PM2.5"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://cpcb.nic.in",
  fullDetails:{ministry:"Ministry of Environment",launched:"2019",benefit:"Cleaner air in 132 cities; Real-time AQI monitoring; Industrial compliance; Health protection",eligibility:["All city residents; Especially children, elderly and respiratory patients"],documents:["No individual application; Policy programme"],applyProcess:["City prepares NCAP action plan","Industries comply with emission standards","Source apportionment studies done","AQI improvement monitored and published on SAMEER app"]}},

{id:289,name:"Project Tiger",icon:"🐅",iconBg:"rgba(29,155,94,.12)",cat:"Science",desc:"Conservation of tigers and habitat; 53 tiger reserves; buffer zone management; anti-poaching; population now 3,167.",tags:["Tiger","Wildlife","Forest","Conservation"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://projecttiger.nic.in",
  fullDetails:{ministry:"Ministry of Environment / NTCA",launched:"1973",benefit:"Habitat protection; Tiger population increase; Buffer zone communities get eco-tourism income; Compensation for damage",eligibility:["Communities near tiger reserves benefit from eco-tourism","Crop/livestock damage victims get compensation"],documents:["For compensation: Application at forest range office with photographs of damage"],applyProcess:["Tiger reserves declared by NTCA","Core critical habitat protected","Buffer zone with community rights maintained","Anti-poaching Special Tiger Protection Force deployed"]}},

{id:290,name:"Project Elephant",icon:"🐘",iconBg:"rgba(0,150,136,.12)",cat:"Science",desc:"Conservation of elephants; 33 elephant reserves; mitigation of human-elephant conflict; compensation for damage.",tags:["Elephant","Wildlife","Forest","Conservation"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://moef.gov.in",
  fullDetails:{ministry:"Ministry of Environment, Forest & Climate Change",launched:"1992",benefit:"Habitat management; Human-elephant conflict mitigation; Compensation for crop and property damage",eligibility:["Communities in elephant corridors and reserve areas"],documents:["Crop/property damage: Application at forest range office","Photographs of damage","Panchnama (witness statement)"],applyProcess:["Elephant reserves declared","Corridors protected from encroachment","Rapid Response Teams for conflict","Community elephant watches trained; Compensation paid within 30 days"]}},

{id:291,name:"Mission LiFE (Lifestyle for Environment)",icon:"🌍",iconBg:"rgba(29,155,94,.12)",cat:"Science",desc:"PM Modi-led global initiative for pro-planet lifestyle; P3 movement – Pro Planet People; individual and community climate action.",tags:["Environment","Lifestyle","Climate","Sustainable"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://missionlife.gov.in",
  fullDetails:{ministry:"Ministry of Environment",launched:"November 2022",benefit:"Behaviour change tips; Corporate and community pledges; Scaled global movement; Individual carbon footprint reduction",eligibility:["All citizens; Youth; Educational institutions; Corporations"],documents:["No registration; Join pledge online at missionlife.gov.in"],applyProcess:["Take pledge online at missionlife.gov.in","Adopt pro-planet practices (save water, use public transport)","Share challenge with community","Track pledge count"]}},

{id:292,name:"Green Credit Programme",icon:"🌿",iconBg:"rgba(29,155,94,.12)",cat:"Science",desc:"Tradable green credits for individuals, communities and industries undertaking environment-positive actions like tree planting.",tags:["Green Credit","Sustainability","Carbon","Voluntary"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://indiancarbonmarket.co.in",
  fullDetails:{ministry:"Ministry of Environment",launched:"2023",benefit:"Earn tradable green credits for tree planting, water conservation, sustainable agriculture; Credits sold on ICM",eligibility:["All individuals, SHGs, panchayats, industries","Any entity undertaking environment-positive activity"],documents:["Aadhaar Card","Land records (for plantation)","Activity proof","Verification by empanelled third-party body"],applyProcess:["Select green activity (tree planting/water/etc.)","Activity implemented and documented","Third-party verification done","Green credits issued on Indian Carbon Market"]}},

{id:293,name:"National Millet Mission (Shree Anna)",icon:"🌾",iconBg:"rgba(29,155,94,.12)",cat:"Agriculture",desc:"Promote cultivation, value addition, export and consumption of millets for nutritional security and farmer income.",tags:["Millet","Nutrition","Export","Shree Anna"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://millets.gov.in",
  fullDetails:{ministry:"Ministry of Agriculture",launched:"2023",benefit:"Seed mini-kits; MSP support; Processing and value addition subsidies; Export incentives and promotion",eligibility:["Millet-growing farmers (Jowar, Bajra, Ragi, etc.)","FPOs in millet sector","Millet processing units"],documents:["Aadhaar Card","Land records","Application at district agriculture department"],applyProcess:["Apply at agriculture department office","Seed mini-kits distributed free","MSP procurement by state agencies","Value addition units get processing subsidy"]}},

{id:294,name:"FPO Scheme – 10,000 Farmer Producer Organisations",icon:"🤝",iconBg:"rgba(29,155,94,.12)",cat:"Agriculture",desc:"Form and promote 10,000 FPOs with ₹18 lakh grant per FPO over 3 years; equity, credit guarantee and management support.",tags:["FPO","Farmer","Cooperative","Credit"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://sfacindia.com",
  fullDetails:{ministry:"Ministry of Agriculture / SFAC",launched:"January 2020",benefit:"₹18 lakh grant per FPO over 3 years; Matching equity up to ₹15 lakh; Credit guarantee cover",eligibility:["Farmer groups willing to form FPO","Minimum 300 members in plains; 100 in hilly areas","Promoted by NABARD, SFAC or state agencies"],documents:["Farmer group list","FPO application on portal","Promoter organization details","Registration with state registrar"],applyProcess:["Form FPO with required members","Register with state registrar of cooperative societies","Apply through SFAC/NABARD portal","Grants released in 3 tranches over 3 years"]}},

{id:295,name:"Kisan Drone Scheme",icon:"🚁",iconBg:"rgba(29,155,94,.12)",cat:"Agriculture",desc:"Promote drones in agriculture for crop monitoring, precision spraying of pesticides/fertilizers and insurance surveys.",tags:["Drone","Technology","Farmer","Precision"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://agricoop.nic.in",
  fullDetails:{ministry:"Ministry of Agriculture",launched:"2022",benefit:"40–50% subsidy for FPOs buying drones; CHC drones for hiring; IFFCO Kisan Drone network; Free training",eligibility:["FPOs and cooperatives buying drones","CHC operators offering drone services","Farmers hiring drones at subsidised rate"],documents:["Udyam Registration (for CHC)","FPO registration certificate","GST Certificate","Project report"],applyProcess:["Apply at state agriculture dept or IFFCO","Drone purchased at subsidised cost","CHC rents drone to farmers at ₹300–400/acre","Crop monitoring and precision spraying performed"]}},

{id:296,name:"Jan Aushadhi Suvidha (₹1 Sanitary Napkin)",icon:"💊",iconBg:"rgba(29,155,94,.12)",cat:"Health",desc:"Pink sanitary napkins at just ₹1 each at Jan Aushadhi Kendras to improve menstrual hygiene among women and girls.",tags:["Women","Sanitary Napkin","Menstrual Hygiene","Affordable"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://janaushadhi.gov.in",
  fullDetails:{ministry:"Ministry of Chemicals & Fertilizers",launched:"2018",benefit:"Biodegradable sanitary napkin at ₹1 (vs ₹5–10 in market); Available at 9,000+ Jan Aushadhi Kendras",eligibility:["All women and girls; Priority to BPL and rural women"],documents:["No documents required; Walk-in purchase"],applyProcess:["Visit nearest Jan Aushadhi Kendra (PMBJK)","Ask for 'Suvidha' sanitary napkin","Pay ₹1 per napkin","Monthly menstrual hygiene maintained affordably"]}},

{id:297,name:"PMJAY – Ayushman Bharat 70+ Scheme",icon:"🏥",iconBg:"rgba(212,64,42,.1)",cat:"Health",desc:"Expanded Ayushman Bharat coverage to all senior citizens above 70 years regardless of income; ₹5 lakh health cover.",tags:["Health","Senior Citizen","₹5L Cover","Free"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://pmjay.gov.in",
  fullDetails:{ministry:"Ministry of Health & Family Welfare",launched:"September 2024",benefit:"₹5 lakh health cover per year for all senior citizens 70+; Cashless treatment at 25,000+ hospitals",eligibility:["All Indian citizens above 70 years","No income criteria for 70+ scheme","Includes those already with other insurance"],documents:["Aadhaar Card (age proof showing 70+)","PMJAY Ayushman card (generated at hospital or CSC)"],applyProcess:["Visit nearest CSC or empanelled hospital","Generate Ayushman card with Aadhaar","Use card for cashless treatment","No pre-authorization needed for most procedures"]}},

{id:298,name:"Nikshay Poshan Yojana (TB Patient Support)",icon:"💊",iconBg:"rgba(212,64,42,.1)",cat:"Health",desc:"₹500 per month nutritional support to all TB patients throughout treatment; direct bank transfer.",tags:["TB","Nutrition","Cash","Treatment"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nikshay.in",
  fullDetails:{ministry:"Ministry of Health & Family Welfare",launched:"April 2018",benefit:"₹500/month for 6–24 months during complete TB treatment; For drug-sensitive and drug-resistant TB",eligibility:["All notified TB patients","Both drug-sensitive and drug-resistant TB","Registered on Nikshay portal"],documents:["Aadhaar Card","Bank account linked to Aadhaar","Nikshay registration by treating doctor"],applyProcess:["Doctor registers patient on Nikshay portal","Patient's bank account linked to Aadhaar","₹500 credited monthly during treatment","Nutritional counselling provided alongside"]}},

{id:299,name:"Ayushman Bharat Digital Mission (ABHA)",icon:"📱",iconBg:"rgba(212,64,42,.1)",cat:"Health",desc:"Create digital health ecosystem; ABHA health ID for every citizen; digital health records and telemedicine.",tags:["Digital Health","ABHA","Health ID","Telemedicine"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://abdm.gov.in",
  fullDetails:{ministry:"Ministry of Health & Family Welfare",launched:"September 2021",benefit:"Free ABHA digital health ID; Portable health records; Telemedicine consultations; Doctor-verified prescriptions",eligibility:["All Indian citizens; Priority to PMJAY beneficiaries"],documents:["Aadhaar Card or mobile number for ABHA creation","Consent for linking health records"],applyProcess:["Create ABHA at abdm.gov.in or hospital kiosk","Link health records to ABHA with consent","Access health history anytime","Telemedicine via ABDM-registered health providers"]}},

{id:300,name:"National AYUSH Mission",icon:"🌿",iconBg:"rgba(29,155,94,.12)",cat:"Health",desc:"Promote Ayurveda, Yoga, Unani, Siddha, Sowa Rigpa and Homeopathy through hospitals, colleges, research and wellness centres.",tags:["AYUSH","Ayurveda","Yoga","Traditional Medicine"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://ayush.gov.in",
  fullDetails:{ministry:"Ministry of AYUSH",launched:"2014",benefit:"Free AYUSH OPD at district AYUSH hospitals; Yoga sessions; Herbal gardens; Subsidised AYUSH medicines",eligibility:["All citizens seeking AYUSH treatment","Priority to rural and tribal areas"],documents:["No documents required for OPD","Aadhaar Card for hospitalization"],applyProcess:["Visit AYUSH hospital or dispensary","Consultation free by AYUSH practitioner","Medicines from AYUSH pharmacy","Yoga and wellness training at certified centres"]}},

/* ── ADDITIONAL FINANCIAL/GOVERNANCE ── */
{id:301,name:"Vivad se Vishwas Scheme",icon:"⚖️",iconBg:"rgba(27,79,204,.12)",cat:"Financial",desc:"Dispute resolution for pending income tax litigation; pay disputed tax without interest/penalty to settle cases.",tags:["Tax","Dispute Resolution","Income Tax","Litigation"],eligibleFor:["all"],incomeMax:99,deadline:"Closed",daysLeft:null,eligible:"partial",website:"https://incometax.gov.in",
  fullDetails:{ministry:"Ministry of Finance / CBDT",launched:"February 2020",benefit:"Close tax disputes by paying only disputed tax; No interest or penalty; Immunity from prosecution",eligibility:["Taxpayers with pending income tax disputes at appellate stages","Cases pending as on specified date"],documents:["Notice/order under appeal","Tax demand details","ITR filed","PAN Card"],applyProcess:["Log in to income tax portal","Select Vivad se Vishwas form","Calculate payable reduced amount","Pay and receive settlement certificate"]}},

{id:302,name:"Faceless Assessment Scheme",icon:"💻",iconBg:"rgba(27,79,204,.12)",cat:"Financial",desc:"Income tax assessments conducted faceless and paperless; no physical interface between taxpayer and officer.",tags:["Tax","Faceless","Digital","Assessment"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://incometax.gov.in",
  fullDetails:{ministry:"Ministry of Finance / CBDT",launched:"August 2020",benefit:"Transparent assessment; No physical interaction; Reduced harassment; Faster disposal of cases",eligibility:["All income tax assesses under scrutiny assessment"],documents:["PAN Card","Income Tax Return (ITR)","Supporting documents uploaded digitally","Bank account statements"],applyProcess:["ITR filed; Scrutiny notice received digitally","Respond to queries through income tax portal","Assessment done by randomly assigned faceless team","Order communicated digitally to taxpayer"]}},

{id:303,name:"Startup Tax Exemption (Section 80-IAC)",icon:"🌱",iconBg:"rgba(29,155,94,.12)",cat:"Financial",desc:"DPIIT-recognized startups exempt from angel tax; 3-year profit tax holiday in any 3 of 10 years.",tags:["Startup","Tax","Angel Tax","DPIIT"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://startupindia.gov.in",
  fullDetails:{ministry:"Ministry of Finance / DPIIT",launched:"2016",benefit:"3-year profit tax exemption; Angel tax exemption on investments; LTCG exemption on rollover",eligibility:["DPIIT-recognized startups","Incorporated in India","Turnover below ₹100 crore"],documents:["DPIIT recognition certificate","Company registration","Audited accounts","Investment details for angel tax exemption"],applyProcess:["Get DPIIT recognition at startupindia.gov.in","File ITR claiming Section 80-IAC exemption","Angel tax exemption applied on eligible investments","Maintain records for 10 years"]}},

{id:304,name:"National Mission on Sustainable Agriculture (NMSA)",icon:"🌿",iconBg:"rgba(29,155,94,.12)",cat:"Agriculture",desc:"Climate-resilient agriculture through soil health, water use efficiency, integrated farming and risk management.",tags:["Sustainable","Climate","Soil","Water"],eligibleFor:["Farmer"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nmsa.gov.in",
  fullDetails:{ministry:"Ministry of Agriculture",launched:"2014-15",benefit:"Watershed development; Soil health cards; Micro-irrigation subsidies; Organic farming support; INM promotion",eligibility:["All farmers especially in rain-fed areas","Organic certification for certified organic farmers"],documents:["Land records","Aadhaar Card","Bank account passbook","Registration at district agriculture dept"],applyProcess:["Apply at district agriculture office","Field visit and sustainability plan prepared","Multiple components covered: irrigation/organic/soil","Annual monitoring and reporting"]}},

{id:305,name:"Rashtriya Bal Swasthya Karyakram (RBSK)",icon:"👶",iconBg:"rgba(212,64,42,.1)",cat:"Health",desc:"Child health screening for 4Ds: defects, diseases, deficiencies, disabilities; free treatment for 30 conditions.",tags:["Child Health","Screening","Free","Birth Defect"],eligibleFor:["all"],incomeMax:99,deadline:"Open",daysLeft:null,eligible:"yes",website:"https://nhm.gov.in",
  fullDetails:{ministry:"Ministry of Health & Family Welfare",launched:"2013",benefit:"Free screening for children 0–18 years; Free corrective surgery for 30 conditions at empanelled hospitals",eligibility:["All children 0–18 years in government schools and AWCs","No income limit"],documents:["No documents needed; Screening done at school or AWC"],applyProcess:["Mobile health team visits school/AWC on scheduled date","Every child screened on 4Ds","Referral to District Early Intervention Centre (DEIC)","Free surgery at empanelled tertiary hospital"]}},

];

