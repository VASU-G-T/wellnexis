/* ═══════════════════════════════════════════════
   STATIONERY / GOVERNMENT DOCUMENTS DATA
═══════════════════════════════════════════════ */
const GOV_DOCS=[
{id:'D01',name:"Income Certificate Application",type:"Application Form",icon:"💰",iconBg:"rgba(29,155,94,.1)",desc:"Official form to apply for income certificate from Tahsildar/Revenue Officer. Required for most government scheme applications.",issuedBy:"Revenue Department / Tahsildar",validFor:"1 Year",languages:["Tamil","English","Hindi"],
  content:`GOVERNMENT OF INDIA / STATE GOVERNMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPLICATION FOR INCOME CERTIFICATE
(To be submitted to the Tahsildar / Revenue Officer)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Application No: ____________      Date: _______________

1. NAME OF APPLICANT (in CAPITALS):
   _______________________________________________

2. FATHER'S / HUSBAND'S NAME:
   _______________________________________________

3. DATE OF BIRTH:               AGE:
   _________________           _______

4. GENDER:  □ Male  □ Female  □ Transgender

5. AADHAAR NUMBER: ____  ____  ____

6. PERMANENT ADDRESS:
   Door No. / Plot:  _______________________________
   Street / Village: _______________________________
   Taluk:            _______________________________
   District:         _______________________________
   State:            _______________________________  PIN: __________

7. MOBILE NUMBER: _________________________________

8. ANNUAL INCOME DETAILS:
   a) Agriculture Income:          ₹ ___________
   b) Employment / Salary:         ₹ ___________
   c) Business / Trade:            ₹ ___________
   d) Other Sources:               ₹ ___________
   ─────────────────────────────────────────
   TOTAL ANNUAL INCOME:            ₹ ___________
   ─────────────────────────────────────────

9. PURPOSE OF CERTIFICATE REQUIRED:
   □ PM Kisan     □ Scholarship   □ PMAY Housing
   □ Ayushman     □ Pension       □ Other: ___________

10. DOCUMENTS ENCLOSED:
    □ Aadhaar Card Photocopy
    □ Ration Card Photocopy
    □ Bank Passbook (first page)
    □ Self-Declaration / Affidavit
    □ Previous Income Certificate (if any)

DECLARATION:
I hereby solemnly affirm and declare that the information
furnished above is true and correct to the best of my
knowledge and belief.

Date: _______________     Signature / Thumb Impression
Place: ______________     _____________________________
                          Name: _______________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FOR OFFICE USE ONLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Received On:   ____________   Receipt No.: ___________
Verified By:   ____________   Date: __________________
Approved By:   ____________   Date: __________________
Certificate No.: ________________________
SEAL & SIGNATURE OF TAHSILDAR`
},
{id:'D02',name:"Caste / Community Certificate Application",type:"Application Form",icon:"📜",iconBg:"rgba(27,79,204,.12)",desc:"Application form to obtain SC/ST/OBC community certificate required for reservations, scholarships, and welfare schemes.",issuedBy:"Revenue Department / Tahsildar",validFor:"Lifetime (OBC: varies)",languages:["Tamil","English","Hindi"],
  content:`GOVERNMENT OF INDIA / STATE GOVERNMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPLICATION FOR COMMUNITY CERTIFICATE
(SC / ST / OBC / MBC)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Date: _______________

To,
The Tahsildar,
__________ Taluk, __________ District

Sir/Madam,

I, __________________________________ (Applicant Name),
S/o  D/o  W/o _________________________,
residing at: _______________________________________________
___________________________________________________________
request the issuance of Community Certificate.

PERSONAL DETAILS:
─────────────────────────────────────────
Name:              ________________________________
Father's Name:     ________________________________
Mother's Name:     ________________________________
Date of Birth:     ________  Age: ___  Gender: _____
Aadhaar No:        __________________________________
Mobile No:         __________________________________

COMMUNITY DETAILS:
─────────────────────────────────────────
Religion:          ________________________________
Community:         ________________________________
Sub-community:     ________________________________
Caste applied for: □ SC  □ ST  □ OBC  □ MBC/DC  □ BC

PURPOSE: □ Education  □ Employment  □ Govt Scheme  □ Other

FAMILY DETAILS (Father/Mother):
─────────────────────────────────────────
Native Village:    ________________________________
Native District:   ________________________________
Native State:      ________________________________
Old Community Cert No (if any): __________________

DOCUMENTS ENCLOSED:
□ Aadhaar Card
□ Ration Card (showing community)
□ Father's Community Certificate
□ School Leaving Certificate
□ Voter ID / Address proof
□ Self-declaration affidavit
□ Passport size photo (2 copies)

DECLARATION:
I hereby declare that the above information is true.
If found incorrect, I am liable for legal action.

Date: _____________   Signature: _____________________
Place: ____________   Name: __________________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FOR OFFICE USE ONLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Enquiry Officer:  _________________  Date: __________
Village Officer Report: __________  Date: __________
Approved / Rejected: ____________   Date: __________
Certificate No: _________________________________
TAHSILDAR SEAL & SIGNATURE`
},
{id:'D03',name:"PM Kisan Samman Nidhi Application",type:"Application Form",icon:"🌾",iconBg:"rgba(29,155,94,.12)",desc:"Official farmer registration form for PM Kisan Samman Nidhi Yojana. Required for new farmer registration.",issuedBy:"Agriculture Department / CSC",validFor:"One-time Registration",languages:["English","Hindi","All Regional"],
  content:`PRADHAN MANTRI KISAN SAMMAN NIDHI YOJANA
MINISTRY OF AGRICULTURE & FARMERS WELFARE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FARMER REGISTRATION FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

State: ________________  District: ___________________
Sub-District: __________  Village: ___________________
Date: _____________

SECTION A: PERSONAL DETAILS
─────────────────────────────────────────
Farmer Name:        ________________________________
Father/Spouse Name: ________________________________
Date of Birth:      ________________  
Gender:    □ Male  □ Female  □ Others
Category:  □ SC  □ ST  □ OBC  □ General

AADHAAR NUMBER: ____  ____  ____
(Aadhaar is mandatory for PM Kisan)

SECTION B: BANK DETAILS (for DBT)
─────────────────────────────────────────
Bank Name:         ________________________________
Branch Name:       ________________________________
Account Number:    ________________________________
IFSC Code:         ________________________________
Account Type:      □ Savings  □ Current
Account Holder:    ________________________________
(Must be farmer's own account)

SECTION C: LAND DETAILS
─────────────────────────────────────────
Survey/Khasra No.: ________________________________
Land Area:         _______ Acres / _______ Hectares
Type of Holding:   □ Own  □ Leased  □ Shared
Land Classification: □ Irrigated  □ Rainfed
Khata/Khatauni No.: _______________________________

SECTION D: MOBILE & OTHER DETAILS
─────────────────────────────────────────
Mobile No (Aadhaar linked): _______________________
Alternate Mobile No:        _______________________
Are you an income tax payer?  □ Yes  □ No
Are you a government employee? □ Yes  □ No

SECTION E: DOCUMENTS CHECKLIST
─────────────────────────────────────────
□ Aadhaar Card (self-attested photocopy)
□ Bank Passbook (first page)
□ Land Records (Khasra / 7-12 extract / Patta)
□ Passport size photo (2 copies)
□ Mobile number linked to Aadhaar

DECLARATION:
I declare that I am a farmer, own/cultivate the land
mentioned above, and the information is correct.
I am not a government employee, income taxpayer,
or institutional landholder.

Date: _____________   Farmer's Signature / Thumb
Place: ____________   _____________________________

FIELD OFFICER VERIFICATION:
Verified by:   ____________________  Date: _________
Designation:   ____________________  
Remarks:       ____________________
SEAL: `
},
{id:'D04',name:"PMAY Urban Housing Application",type:"Application Form",icon:"🏠",iconBg:"rgba(27,79,204,.12)",desc:"Application form for Pradhan Mantri Awas Yojana (Urban). For Credit Linked Subsidy Scheme for EWS/LIG/MIG categories.",issuedBy:"Urban Local Body / Bank",validFor:"One-time",languages:["English","Hindi","Regional"],
  content:`PRADHAN MANTRI AWAS YOJANA (URBAN)
CREDIT LINKED SUBSIDY SCHEME (CLSS)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPLICATION FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To: The Urban Local Body / PLI (Primary Lending Institution)
Date: __________   Application No: ___________________

APPLICANT CATEGORY:
□ EWS (Annual income up to ₹3L)
□ LIG (Annual income ₹3L – ₹6L)
□ MIG-I (Annual income ₹6L – ₹12L)
□ MIG-II (Annual income ₹12L – ₹18L)

SECTION 1: PERSONAL DETAILS
─────────────────────────────────────────
Applicant Name:    ________________________________
Co-Applicant Name: ________________________________
S/o D/o W/o:       ________________________________
Date of Birth:     ___________  Age: ___  
Gender:            □ Male  □ Female  □ Transgender
Marital Status:    □ Married  □ Unmarried  □ Widow/er
Religion:          ________________
Caste:             □ General □ OBC □ SC □ ST

Aadhaar (Applicant):   ____  ____  ____
Aadhaar (Co-Applicant): ____  ____  ____

SECTION 2: CONTACT DETAILS
─────────────────────────────────────────
Current Address:   ________________________________
                   ________________________________
City/Town:         ____________  PIN: ___________
Mobile:            _______________
Email:             _______________

SECTION 3: INCOME DETAILS
─────────────────────────────────────────
Occupation:   □ Salaried  □ Self-employed  □ Other
Employer Name: ________________________________
Annual Income (Applicant):   ₹ ______________
Annual Income (Co-Applicant): ₹ ______________
Total Household Income:       ₹ ______________

SECTION 4: PROPERTY DETAILS
─────────────────────────────────────────
Property Location:  ________________________________
Property Type:  □ New Purchase □ Self-Construction
                □ Enhancement  □ Acquisition
Carpet Area:    _________ sq.ft  /  _________ sq.m
Loan Amount Required: ₹ _________________________

SECTION 5: DECLARATION
─────────────────────────────────────────
I/We declare that I/We do not own a pucca house
anywhere in India and meet the income criteria.
I/We understand that false information leads to recovery.

Date: ___________   Signature of Applicant
Place: __________   _______________________________

                    Signature of Co-Applicant
                    _______________________________

DOCUMENTS CHECKLIST:
□ Aadhaar Card  □ PAN Card  □ Income Certificate
□ Property documents  □ Bank Statement (6 months)
□ Caste Certificate (if SC/ST)  □ Photos (4 copies)
□ EWS/LIG self-declaration affidavit`
},
{id:'D05',name:"Ayushman Bharat Beneficiary Form",type:"Application Form",icon:"🏥",iconBg:"rgba(212,64,42,.1)",desc:"Application/verification form for Ayushman Bharat PM-JAY health insurance scheme. For getting the Golden Card.",issuedBy:"NHA / CSC / Hospital Kiosk",validFor:"Annual Renewal",languages:["English","Hindi","Regional"],
  content:`AYUSHMAN BHARAT – PRADHAN MANTRI JAN AROGYA YOJANA
NATIONAL HEALTH AUTHORITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BENEFICIARY VERIFICATION & E-CARD REQUEST FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Date: ______________   Centre Code: ________________

SECTION A: HOUSEHOLD HEAD DETAILS
─────────────────────────────────────────
Head of Family Name: ________________________________
Aadhaar Number:      ____ ____ ____
Date of Birth:       ______________
Gender:    □ Male  □ Female  □ Transgender
Mobile No: _________________
State:     ________________  District: ______________

SECTION B: ELIGIBILITY CHECK
─────────────────────────────────────────
HHID (Household ID from SECC): ______________________
Ration Card Number:            ______________________
Occupation Category (Urban):
□ Ragpicker  □ Beggar  □ Domestic Worker
□ Street Vendor  □ Construction Worker  □ Plumber
□ Welder  □ Security Guard  □ Coolie  □ Sweeper
□ Other: ______________________

Rural Category (SECC D1-D5):
□ Deprived (D1-D5)  □ Automatically included

SECTION C: FAMILY MEMBERS FOR COVERAGE
─────────────────────────────────────────
S.No | Name           | Relation | DOB      | Aadhaar
  1  | _____________  | ________ | ________ | __________
  2  | _____________  | ________ | ________ | __________
  3  | _____________  | ________ | ________ | __________
  4  | _____________  | ________ | ________ | __________
  5  | _____________  | ________ | ________ | __________

SECTION D: DOCUMENT CHECKLIST
─────────────────────────────────────────
□ Aadhaar Card (Head of family)
□ Aadhaar Cards of all members
□ Ration Card
□ SECC printout (if available)
□ Passport size photos (family)

NOTE: Coverage is ₹5,00,000 per family per year
      Valid at 25,000+ empanelled hospitals
      Completely CASHLESS and PAPERLESS

BENEFICIARY SIGNATURE: _______________________
DATE: _________________

FOR OFFICIAL USE:
Verified by:   ______________________  Date: ________
e-Card Issued: □ Yes  □ No   Card No: ______________
ABPMJAY-ID:    _______________________________`
},
{id:'D06',name:"National Scholarship Application",type:"Application Form",icon:"📚",iconBg:"rgba(27,79,204,.12)",desc:"Common scholarship application form for SC/ST/OBC/Minority students. Used for multiple NSP scholarships.",issuedBy:"NSP / Institute",validFor:"Annual",languages:["English","Hindi"],
  content:`NATIONAL SCHOLARSHIP PORTAL
GOVERNMENT OF INDIA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCHOLARSHIP APPLICATION FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Application ID: NSP/2025/____________
Date: ______________
Scholarship Applied For: _______________________________

SECTION 1: STUDENT PERSONAL DETAILS
─────────────────────────────────────────
Student Name:      ________________________________
Father's Name:     ________________________________
Mother's Name:     ________________________________
Date of Birth:     ______________  Age: ___
Gender:   □ Male  □ Female  □ Transgender
Aadhaar No:  ____  ____  ____
Mobile No:   _________________________
Email:       _________________________

SECTION 2: CATEGORY & COMMUNITY
─────────────────────────────────────────
Category:  □ SC  □ ST  □ OBC  □ Minority  □ General
Religion:  □ Hindu □ Muslim □ Christian □ Sikh □ Buddhist
           □ Jain  □ Other
Caste/Community: ______________________________
Is applicant disabled? □ Yes  □ No
If yes, disability %: __________

SECTION 3: ACADEMIC DETAILS
─────────────────────────────────────────
Current Course:    ________________________________
Year of Study:     ________________________________
Institute Name:    ________________________________
Institute Address: ________________________________
                   ________________________________
District:          _______________  State: _________
Institute Type:    □ Govt  □ Govt-Aided  □ Private
Course Start Date: ______________
Admission Number:  ______________________________
Previous Exam:     ____________  Marks: ____ / ____
Percentage:        _________ %

SECTION 4: INCOME & BANK DETAILS
─────────────────────────────────────────
Annual Family Income: ₹ ________________________
Income Certificate No: ________________________
Bank Name:            ________________________________
Account Number:       ________________________________
IFSC Code:            ________________________________
Account Holder:       ________________________________
(Must be student's own account)

SECTION 5: DOCUMENTS ENCLOSED
─────────────────────────────────────────
□ Aadhaar Card (student)
□ Income Certificate (current year)
□ Community / Caste Certificate
□ Previous year marksheet (self-attested)
□ Bonafide Certificate from Institute
□ Bank Passbook (first page)
□ Admission fee receipt
□ Disability Certificate (if applicable)
□ Passport size photo (2 copies)

DECLARATION:
I declare that the information is correct.
I am not receiving any other scholarship.

Date: _____________   Student Signature
Place: ____________   _____________________________

Parent/Guardian Signature: _______________________

FOR INSTITUTE VERIFICATION:
Institute Verified: □ Yes  □ No
HOD/Principal Signature: _______________________
Institute Stamp & Date:   _______________________`
},
{id:'D07',name:"Aadhaar Correction / Update Form",type:"Identity",icon:"🪪",iconBg:"rgba(11,138,138,.1)",desc:"Official UIDAI form for requesting correction or update of Aadhaar details like name, DOB, address, mobile number.",issuedBy:"UIDAI / Aadhaar Enrolment Centre",validFor:"One-time Correction",languages:["English","Hindi","Tamil"],
  content:`UNIQUE IDENTIFICATION AUTHORITY OF INDIA (UIDAI)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AADHAAR UPDATE / CORRECTION REQUEST FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Date: ______________   Enrolment Centre: ____________

AADHAAR NUMBER: ____  ____  ____

SECTION A: RESIDENT DETAILS
─────────────────────────────────────────
Registered Name:   ________________________________
Date of Birth:     ____  ____  ________
Gender:    □ Male  □ Female  □ Transgender
Mobile (Registered): _____________________________

SECTION B: CORRECTIONS REQUIRED
(Tick all fields to be updated)
─────────────────────────────────────────
□ Name Correction
   Current: ________________________
   Correct:  ________________________
   
□ Date of Birth Correction
   Current: ________________________
   Correct:  ________________________
   
□ Gender Correction
   Current: _______  Correct: _______
   
□ Address Update
   New Address: ____________________
   ________________________________
   District: _______  State: _______
   PIN: ______
   
□ Mobile Number Update
   New Mobile: _____________________
   
□ Email Update
   New Email:  _____________________

SECTION C: DOCUMENTS FOR CORRECTION
─────────────────────────────────────────
Name Correction:
□ Passport  □ School Certificate  □ PAN Card
□ Voter ID  □ Birth Certificate   □ Gazette notification

DOB Correction:
□ Birth Certificate  □ Passport  □ School Leaving Cert
□ Marksheet          □ PAN Card

Address Update:
□ Passport  □ Bank Statement  □ Ration Card
□ Voter ID  □ Utility Bill    □ Rental Agreement

SECTION D: APPLICANT DECLARATION
─────────────────────────────────────────
I request the above corrections to my Aadhaar record.
I declare all information submitted is authentic.

Date: _____________   Resident Signature
Place: ____________   _____________________________

FOR OPERATOR USE:
EID Number:    _________________________________
Operator ID:   _________________________________
Operator Name: _________________________________
Date & Time:   _________________________________
Operator Signature & Stamp: ___________________`
},
{id:'D08',name:"Domicile / Residence Certificate Application",type:"Certificate",icon:"🏘️",iconBg:"rgba(27,79,204,.12)",desc:"Application to obtain Domicile/Residence Certificate from local authority. Required for state-specific scheme benefits.",issuedBy:"Tehsildar / Executive Magistrate",validFor:"Varies by State",languages:["English","Hindi","Regional"],
  content:`STATE GOVERNMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPLICATION FOR DOMICILE / RESIDENCE CERTIFICATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To,
The Tehsildar / Executive Magistrate,
_______________ Taluk / Tehsil,
_______________ District.

Date: ______________

Sir/Madam,

I request grant of Domicile/Residence Certificate
for the purpose of: ________________________________

APPLICANT DETAILS:
─────────────────────────────────────────
Name:              ________________________________
Father's Name:     ________________________________
Mother's Name:     ________________________________
Date of Birth:     ______________  Age: ___
Gender:   □ Male  □ Female  □ Transgender
Aadhaar No: ____  ____  ____
Mobile:     _______________________
Email:      _______________________

RESIDENCE DETAILS:
─────────────────────────────────────────
Present Address:
House No / Plot: ________________________________
Street / Ward:   ________________________________
Village / Area:  ________________________________
Taluk/Tehsil:    ________________________________
District:        ________________________________
State:           ________________________________  PIN: ________

Period of Residence in State: _______ Years _______ Months
Period at Current Address:    _______ Years _______ Months

FAMILY DETAILS:
─────────────────────────────────────────
Father/Guardian residence in state:  □ Yes  □ No
Native of same state:                □ Yes  □ No
Permanent Settlement:                □ Yes  □ No

PURPOSE REQUIRED FOR:
□ Education (School / College)
□ Government Job Application
□ Government Scheme Benefit
□ Property Registration
□ Other: _______________________________

DOCUMENTS ENCLOSED:
□ Aadhaar Card
□ Voter ID
□ Ration Card
□ Electricity/Water Bill (recent)
□ Property Tax Receipt / Rental Agreement
□ School Certificate showing address
□ Passport size photo (2 copies)
□ Self-declaration affidavit

DECLARATION:
I declare that I am a bonafide resident of __________ state
and the above information is true and correct.

Date: _____________   Applicant Signature
Place: ____________   _____________________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OFFICE USE ONLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Application No: _______________  Date: ____________
Enquiry Officer: ______________  Date: ____________
Certificate No:  ______________  Valid Till: _______
TEHSILDAR SEAL & SIGNATURE: ___________________`
},
{id:'D09',name:"Disability Certificate Application",type:"Certificate",icon:"♿",iconBg:"rgba(245,166,35,.12)",desc:"Application for Persons with Disabilities (PwD) certificate for accessing disability benefits, reservations, and welfare schemes.",issuedBy:"Civil Surgeon / Medical Board",validFor:"Lifetime (for permanent disability)",languages:["English","Hindi","Regional"],
  content:`GOVERNMENT OF INDIA
MINISTRY OF SOCIAL JUSTICE & EMPOWERMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPLICATION FOR DISABILITY CERTIFICATE
(Under RPWD Act, 2016)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To,
The Civil Surgeon / Medical Board,
_______________ District Hospital,
_______________ District.

Date: ______________

APPLICANT DETAILS:
─────────────────────────────────────────
Name:              ________________________________
Father's Name:     ________________________________
Date of Birth:     ______________  Age: ___
Gender:   □ Male  □ Female  □ Transgender
Category:  □ SC  □ ST  □ OBC  □ General
Aadhaar No: ____  ____  ____
Mobile:     _______________________

ADDRESS:
House/Plot:  ________________________________
Street:      ________________________________
Village/Ward: _______________________________
District:    ________________  State: ________
PIN: _________

TYPE OF DISABILITY (as per RPWD Act 2016):
□ Locomotor Disability    □ Visual Impairment
□ Hearing Impairment      □ Speech & Language Disability
□ Intellectual Disability  □ Specific Learning Disability
□ Mental Illness          □ Autism Spectrum Disorder
□ Cerebral Palsy          □ Multiple Sclerosis
□ Chronic Neurological    □ Blood Disorder (Haemophilia)
□ Multiple Disabilities   □ Other: ___________________

Cause of Disability:      ________________________________
Duration:                 ________________________________
Is disability:  □ Congenital (birth)  □ Acquired

DOCUMENTS ENCLOSED:
□ Aadhaar Card
□ Previous Disability Certificate (if any)
□ Medical Reports / Doctor's Certificate
□ Passport size photo (4 copies)
□ School/Birth Certificate (for DOB proof)

PURPOSE:
□ Government Scheme Benefits  □ Employment (Reservation)
□ Education (Reservation)     □ Railway/Bus Concession
□ Tax Benefits                □ Other: ______________

DECLARATION:
I declare that the disability stated above is genuine
and the information is true to my knowledge.

Date: _____________   Applicant/Guardian Signature
Place: ____________   _____________________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MEDICAL BOARD USE ONLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Examined by:   ________________________  Date: _____
Disability:    ________________________  Degree: ___%
Certificate No: _______________________
Valid Till:    ________________________
CIVIL SURGEON SEAL & SIGNATURE`
},
{id:'D10',name:"Bank Account Opening Form (PMJDY)",type:"Application Form",icon:"🏦",iconBg:"rgba(29,155,94,.12)",desc:"Pradhan Mantri Jan Dhan Yojana zero-balance account opening form. Includes RuPay card and insurance benefits.",issuedBy:"Any Scheduled Commercial Bank",validFor:"Permanent",languages:["English","Hindi","Regional"],
  content:`PRADHAN MANTRI JAN DHAN YOJANA (PMJDY)
ZERO-BALANCE ACCOUNT OPENING FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Branch Name & Code: _____________________________
Date: ______________   Application No: ___________

SECTION A: APPLICANT DETAILS
─────────────────────────────────────────
Name (as in Aadhaar): ________________________________
Father's/Husband's Name: _____________________________
Mother's Name:            _____________________________
Date of Birth:     _______________  Age: ___
Gender:   □ Male  □ Female  □ Transgender
Marital Status: □ Single  □ Married  □ Widowed
Occupation:     □ Farmer  □ Labour  □ Business
                □ Student □ Homemaker □ Other: _______

AADHAAR / ID DETAILS:
Aadhaar Number: ____  ____  ____
Or any of these:
□ Voter ID   □ PAN Card   □ Driving Licence
□ Passport   □ NREGA Card □ Job Card
Number: _______________________________________

SECTION B: ADDRESS DETAILS
─────────────────────────────────────────
Current Address:  ________________________________
                  ________________________________
Village / Ward:   ________________________________
District:         _______________
State:            ________________  PIN: ___________
Mobile Number:    _________________________________

SECTION C: NOMINEE DETAILS
─────────────────────────────────────────
Nominee Name:        ________________________________
Relation with Account Holder: _______________________
Nominee Date of Birth:  _____________________________
Guardian (if nominee is minor): _____________________

SECTION D: PMJDY BENEFITS OPTED
─────────────────────────────────────────
□ RuPay Debit Card (FREE)
□ ₹10,000 Overdraft Facility
□ ₹2,00,000 Accidental Insurance (RuPay)
□ ₹30,000 Life Insurance (PMJJBY)
□ Direct Benefit Transfer

DOCUMENTS SUBMITTED:
□ Aadhaar Card (or other ID)
□ Address Proof (if Aadhaar address not current)
□ Passport size photo (2 copies)

NOTE: 
- No minimum balance required
- No account maintenance charges
- Passbook provided free of cost

DECLARATION:
I confirm all details are correct and I do not have
another PMJDY account at any bank.

Date: _____________   Applicant Signature
Place: ____________   ____________________________

FOR BANK USE:
Customer ID:    __________________
Account No:     __________________
CIF Number:     __________________
Branch Code:    __________________
KYC Status:     □ Full KYC  □ Small Account
Bank Officer Signature: _______________  Date: ____`
},
{id:'D11',name:"Widow Pension / IGNWPS Application",type:"Application Form",icon:"👩",iconBg:"rgba(212,64,42,.1)",desc:"Application for Indira Gandhi National Widow Pension Scheme (IGNWPS). Monthly pension for BPL widows aged 40–79 years.",issuedBy:"Gram Panchayat / Municipal Office",validFor:"Annual Review",languages:["English","Hindi","Regional"],
  content:`NATIONAL SOCIAL ASSISTANCE PROGRAMME
INDIRA GANDHI NATIONAL WIDOW PENSION SCHEME (IGNWPS)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPLICATION FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To,
The Gram Panchayat / Urban Local Body,
___________________, District: ___________________

Date: ______________

APPLICANT DETAILS:
─────────────────────────────────────────
Name of Widow:       ________________________________
Late Husband's Name: ________________________________
Date of Birth:       ________________  Age: ___
Aadhaar No:  ____  ____  ____
Mobile No:   _______________________

ADDRESS:
Village/Ward:   ________________________________
Gram Panchayat: ________________________________
Block:          ________________________________
District:       ________________________________
State:          ________________________________

INCOME & BPL DETAILS:
─────────────────────────────────────────
BPL Card No:         _______________________________
Annual Family Income: ₹ _____________________________
Source of Income:    ________________________________
Land Holding:        _______ Acres  □ Nil

HUSBAND'S DEATH DETAILS:
Date of Death:        _______________________________
Cause of Death:       _______________________________
Death Certificate No: _______________________________

BANK DETAILS (for DBT):
─────────────────────────────────────────
Bank Name:     ________________________________
Branch:        ________________________________
Account No:    ________________________________
IFSC Code:     ________________________________

DOCUMENTS ENCLOSED:
□ Aadhaar Card
□ BPL Ration Card
□ Husband's Death Certificate
□ Age Proof (Aadhaar / Birth Cert)
□ Bank Passbook (first page)
□ Passport size photo (2 copies)
□ Income / BPL Certificate

DECLARATION:
I declare that I am a widow, below 80 years, BPL,
and not receiving pension from any other scheme.

Date: _____________   Applicant Signature / Thumb
Place: ____________   _____________________________

WARD MEMBER / PANCHAYAT RECOMMENDATION:
Recommended / Not Recommended (strike off)
Panchayat President Signature & Seal: ____________
Date: ___________

FOR BLOCK / ULB OFFICE USE:
Approved:  □ Yes  □ No    Order No: ______________
Pension Amount: ₹ _________ per month
Date of Approval: _______________
Signature: _____________________________`
},
{id:'D12',name:"General Affidavit / Self-Declaration",type:"Declaration",icon:"✍️",iconBg:"rgba(245,166,35,.12)",desc:"General self-declaration/affidavit template required for most government scheme applications. Can be executed on stamp paper.",issuedBy:"Notary / Self",validFor:"Scheme-specific",languages:["English","Hindi","Tamil"],
  content:`AFFIDAVIT / SELF-DECLARATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
(To be executed on ₹10 / ₹20 Stamp Paper or on plain 
 paper as per scheme requirement)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I, _______________________________________,
S/o D/o W/o _______________________________,
Age: ______ years, Aadhaar No: ____________,
residing at: ______________________________
__________________________________________
do hereby solemnly affirm and declare as under:

1. That I am a citizen of India.

2. That the information furnished by me in the
   application form is true and correct to the
   best of my knowledge and belief.

3. That I belong to the __________________ community
   (SC / ST / OBC / General) and the certificate
   submitted is genuine.

4. That my annual family income is ₹ ______________
   from all sources.

5. That I do not own / possess a pucca house /
   residential property anywhere in India.
   (Delete if not applicable)

6. That I am not receiving benefits of this scheme
   from any other source.

7. That I am not an income tax payer / government
   employee. (Delete if not applicable)

8. That the documents submitted along with this
   application are true and genuine.

9. That I understand that if any information is
   found incorrect, I shall be liable for
   cancellation of benefit and legal action.

DEPONENT
(Person making the declaration)

Date: _____________   Signature: _________________
Place: ____________   Name: ______________________
                      Address: ___________________
                      ____________________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VERIFICATION (for Notarized Affidavit)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Verified at ____________ on this ___ day of _______ 20__.
The deponent identified by __________________________.

NOTARY / OATH COMMISSIONER SEAL & SIGNATURE
Registration No: _________________________________`
},
{id:'D13',name:"Mudra Loan Application Form",type:"Application Form",icon:"💼",iconBg:"rgba(245,166,35,.12)",desc:"PM Mudra Yojana loan application for Shishu (up to ₹50K), Kishore (₹50K–₹5L), Tarun (₹5L–₹10L) categories.",issuedBy:"Banks / MFIs / NBFCs",validFor:"One-time per loan",languages:["English","Hindi","Regional"],
  content:`PRADHAN MANTRI MUDRA YOJANA
MICRO UNITS DEVELOPMENT AND REFINANCE AGENCY (MUDRA)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LOAN APPLICATION FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Bank / Branch: _________________________  Date: _____
Application No: _________________________

LOAN CATEGORY APPLIED FOR:
□ Shishu    (Up to ₹50,000)
□ Kishore   (₹50,001 to ₹5,00,000)
□ Tarun     (₹5,00,001 to ₹10,00,000)

SECTION A: APPLICANT DETAILS
─────────────────────────────────────────
Name:              ________________________________
Father's/H/W Name: ________________________________
Date of Birth:     _______________  Age: ___
Gender:    □ Male  □ Female  □ Transgender
Category:  □ SC  □ ST  □ OBC  □ Minority  □ General
Aadhaar No: ____  ____  ____
PAN No:     ________________________________
Mobile:     _______________________
Email:      _______________________

Current Address: ________________________________
                ________________________________
                PIN: _______

SECTION B: BUSINESS DETAILS
─────────────────────────────────────────
Business Name:     ________________________________
Type of Business:  □ Manufacturing  □ Trading  □ Services
Business Activity: ________________________________
Business Address:  ________________________________
                   ________________________________
Business Vintage:  □ New  □ 1–3 Years  □ 3+ Years

SECTION C: LOAN DETAILS
─────────────────────────────────────────
Loan Amount Requested: ₹ ________________________
Loan Purpose:          ________________________________
Repayment Period:      _______ months
Existing Loans (if any): ________________________________

SECTION D: FINANCIAL DETAILS
─────────────────────────────────────────
Annual Business Turnover:    ₹ __________________
Monthly Net Income:          ₹ __________________
Existing EMIs (per month):   ₹ __________________

BANK DETAILS:
Bank Name:     ________________________________
Account No:    ________________________________
IFSC Code:     ________________________________

SECTION E: DOCUMENTS CHECKLIST
─────────────────────────────────────────
□ Aadhaar Card  □ PAN Card
□ Business Registration / UDYAM Certificate
□ Bank Statement (12 months)
□ Photograph (2 copies)
□ Address Proof  □ Caste Certificate (if SC/ST)
□ Business Plan / Project Report (Kishore/Tarun)
□ Income Tax Returns (Tarun loans)
□ No-objection from property owner (if rented)

DECLARATION:
I declare information is correct. I understand
collateral is not required for Shishu category.

Date: _____________   Applicant Signature
Place: ____________   ____________________________

For SC/ST/Women applicants: Indicate on top of form.
Women applicants get priority processing.

FOR BANK USE:
Credit Score:      ______   Rating: ______________
CIBIL Score:       ______   
Sanction Amount:   ₹ ___________________________
Interest Rate:     _______%  EMI: ₹ _____________
Sanctioned By:     ________________  Date: _______
MUDRA Card Issued: □ Yes  □ No`
},
];

