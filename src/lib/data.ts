
export interface Treatment {
  id: string;
  name: string;
  category: string;
  iconName: string;
  description: string;
  costRangeINR: string;
  costRangeUSD: string;
  hospitalStay: string;
  tripDuration: string;
  recoveryTime: string;
  successRate: string;
  overview: string;
  suitableHospitals: string[];
  specialistDoctors: string[];
  faqs: { q: string; a: string }[];
}

export interface Hospital {
  id: string;
  name: string;
  city: string;
  state: string;
  accreditation: string;
  trustScore: number;
  aiMatchScore: number;
  specialties: string[];
  costLevel: string;
  costRange: string;
  languages: string[];
  intlDesk: boolean;
  facilities: string[];
  rating: number;
  reviewsCount: number;
  distanceFromAirport: string;
  bedCount: number;
  featured?: boolean;
  bestValue?: boolean;
  image?: string;
  description: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  department: string;
  hospital: string;
  city: string;
  experience: number;
  education: string;
  languages: string[];
  rating: number;
  consultationFeeINR: number;
  consultationFeeUSD: number;
  availableDays: string[];
  nextSlot: string;
  avatarInitials: string;
  bio: string;
}

export interface CoordinatorLead {
  id: string;
  patientName: string;
  country: string;
  phone: string;
  email: string;
  specialty: string;
  treatment: string;
  stage: 'NEW LEAD' | 'CONTACTED' | 'DOCUMENTS RECEIVED' | 'AI PROCESSED' | 'HOSPITAL REVIEW' | 'PROPOSAL SENT' | 'PATIENT CONFIRMED' | 'TRAVEL PLANNING' | 'TREATMENT' | 'FOLLOW-UP' | 'COMPLETED';
  assignedHospital: string;
  assignedDoctor: string;
  budgetUSD: number;
  urgency: 'Standard' | 'Urgent' | 'High Priority';
  createdDate: string;
  lastUpdate: string;
  notes: string;
  tasks: string[];
}

export const TREATMENTS: Treatment[] = [
  {
    id: "knee-replacement",
    name: "Total Knee Replacement (TKR)",
    category: "Orthopedics 🦴",
    iconName: "Bone",
    description: "Minimally invasive and robotic-assisted total knee arthroplasty using US-FDA approved titanium and ceramic implants.",
    costRangeINR: "₹2,20,000 – ₹3,80,000",
    costRangeUSD: "$2,800 – $4,600",
    hospitalStay: "4 – 6 Days",
    tripDuration: "14 – 21 Days",
    recoveryTime: "3 – 6 Weeks",
    successRate: "98.5%",
    overview: "Knee replacement surgery replaces worn or damaged surfaces of the knee joint with artificial metal and high-density polyethylene components. In India, leading hospitals utilize Stryker Mako robotic systems for sub-millimeter precision, reducing tissue trauma and speeding up rehabilitation.",
    suitableHospitals: ["Apollo Hospitals, Delhi", "Medanta - The Medicity, Gurgaon", "Manipal Hospital, Bengaluru"],
    specialistDoctors: ["Dr. Ashok Rajgopal", "Dr. S. K. S. Marya"],
    faqs: [
      { q: "How soon can I walk after robotic knee replacement?", a: "Most patients take their first steps with support within 24 hours of surgery under physiotherapist guidance." },
      { q: "How long until I can safely take a flight home?", a: "You can safely take a long-haul flight 12-14 days post-op after suture removal and DVT clearance." },
      { q: "What is the lifespan of modern knee implants?", a: "Modern premium high-flexion titanium/ceramic implants typically last 20 to 25+ years." }
    ]
  },
  {
    id: "cabg-heart-bypass",
    name: "Coronary Artery Bypass Graft (CABG)",
    category: "Cardiology ❤️",
    iconName: "HeartPulse",
    description: "Beating-heart bypass surgery (OPCAB) and minimally invasive endoscopic vessel harvesting.",
    costRangeINR: "₹4,50,000 – ₹6,80,000",
    costRangeUSD: "$5,400 – $8,200",
    hospitalStay: "6 – 8 Days",
    tripDuration: "18 – 24 Days",
    recoveryTime: "4 – 8 Weeks",
    successRate: "99.1%",
    overview: "CABG bypasses blocked coronary arteries using grafts taken from the leg or chest to restore healthy blood flow to the heart muscle. Indian cardiac centers are world-renowned for beating-heart surgery, minimizing the need for heart-lung machines and drastically lowering post-op complications.",
    suitableHospitals: ["Medanta - The Medicity, Gurgaon", "Fortis Memorial Research Institute, Gurgaon", "Apollo Hospitals, Chennai"],
    specialistDoctors: ["Dr. Naresh Trehan", "Dr. Yugal Kishore Mishra"],
    faqs: [
      { q: "Why is beating-heart CABG preferred?", a: "It avoids stopping the heart and reduces neurological risks, kidney stress, and length of ICU stay." },
      { q: "What diagnostics are required before surgery?", a: "A recent coronary angiogram (CD/DICOM), echocardiogram, blood panels, and carotid Doppler." }
    ]
  },
  {
    id: "proton-beam-oncology",
    name: "Proton Beam Radiation & Oncology",
    category: "Oncology 🎗️",
    iconName: "Ribbon",
    description: "Ultra-precise targeted radiation therapy that destroys tumors without damaging adjacent critical organs.",
    costRangeINR: "₹18,00,000 – ₹26,00,000",
    costRangeUSD: "$22,000 – $32,000",
    hospitalStay: "Outpatient / 3 Days",
    tripDuration: "4 – 6 Weeks",
    recoveryTime: "Continuous monitoring",
    successRate: "92.0%",
    overview: "South Asia's first and most advanced Proton Beam Therapy Center at Apollo Chennai delivers pencil-beam scanning that targets pediatric tumors, skull-base lesions, and prostate cancers with zero exit dose to nearby organs.",
    suitableHospitals: ["Apollo Proton Cancer Centre, Chennai", "Tata Memorial Center Network, Mumbai", "Max Super Speciality Hospital, Delhi"],
    specialistDoctors: ["Dr. Rakesh Jalali", "Dr. Harit Chaturvedi"],
    faqs: [
      { q: "How is Proton Therapy different from traditional radiation?", a: "Proton beams deposit peak energy right inside the tumor (the Bragg Peak) and stop, leaving healthy downstream tissue unharmed." }
    ]
  },
  {
    id: "deep-brain-stimulation",
    name: "Deep Brain Stimulation (DBS) & Spine",
    category: "Neurology 🧠",
    iconName: "Brain",
    description: "Neuromodulation electrode implantation for Parkinson's disease, dystonia, and advanced spinal fusion.",
    costRangeINR: "₹11,00,000 – ₹16,50,000",
    costRangeUSD: "$13,200 – $19,800",
    hospitalStay: "5 – 7 Days",
    tripDuration: "14 – 20 Days",
    recoveryTime: "3 – 5 Weeks",
    successRate: "94.5%",
    overview: "DBS involves implanting micro-electrodes into targeted brain nuclei connected to a subcutaneous impulse generator to control motor symptoms in Parkinson's. Indian neurosurgeons use intraoperative MRI and microelectrode recording for pinpoint accuracy.",
    suitableHospitals: ["Fortis Healthcare, Mumbai", "Apollo Hospitals, Delhi", "Manipal Hospital, Bengaluru"],
    specialistDoctors: ["Dr. Paresh Doshi", "Dr. V. P. Singh"],
    faqs: [
      { q: "Who is an ideal candidate for DBS?", a: "Patients with Parkinson's whose symptoms respond to Levodopa but suffer from motor fluctuations or severe tremors." }
    ]
  },
  {
    id: "living-donor-liver-transplant",
    name: "Living Donor Liver Transplant (LDLT)",
    category: "Organ Transplant",
    iconName: "ShieldPlus",
    description: "Comprehensive multi-disciplinary living donor liver transplantation with 95%+ graft survival rates.",
    costRangeINR: "₹20,00,000 – ₹28,00,000",
    costRangeUSD: "$24,000 – $34,000",
    hospitalStay: "14 – 21 Days",
    tripDuration: "6 – 8 Weeks",
    recoveryTime: "8 – 12 Weeks",
    successRate: "96.2%",
    overview: "India performs over 2,500 liver transplants annually under rigorous legal compliance (THOA). A healthy relative donates 55-60% of their liver, which regenerates to full volume in both donor and recipient within 8 weeks.",
    suitableHospitals: ["Medanta - The Medicity, Gurgaon", "Apollo Hospitals, Delhi", "Gleneagles Global Health City, Chennai"],
    specialistDoctors: ["Dr. A. S. Soin", "Dr. Subhash Gupta"],
    faqs: [
      { q: "Who can be a legal living donor for international patients?", a: "A first-degree or closely related family member with matching or compatible blood type, verified by the state Authorization Committee." }
    ]
  },
  {
    id: "ivf-fertility",
    name: "Advanced IVF & ICSI Fertility Care",
    category: "IVF & Fertility",
    iconName: "Baby",
    description: "Assisted reproductive technology including ICSI, blastocyst transfer, and PGT-A genetic screening.",
    costRangeINR: "₹1,80,000 – ₹3,20,000",
    costRangeUSD: "$2,200 – $3,900",
    hospitalStay: "Daycare / Outpatient",
    tripDuration: "14 – 18 Days",
    recoveryTime: "Immediate",
    successRate: "68.0%",
    overview: "State-of-the-art embryology labs equipped with time-lapse incubators and laser-assisted hatching, providing high cumulative pregnancy rates for couples worldwide.",
    suitableHospitals: ["Nova IVF Fertility, Delhi", "Apollo Cradle, Mumbai", "Cloudnine Hospitals, Bengaluru"],
    specialistDoctors: ["Dr. Kaberi Banerjee", "Dr. Hrishikesh Pai"],
    faqs: [
      { q: "Can PGT genetic testing be done on embryos?", a: "Yes, Preimplantation Genetic Testing (PGT-A/M) identifies chromosomal abnormalities prior to transfer." }
    ]
  },
  {
    id: "bariatric-metabolic-surgery",
    name: "Laparoscopic Bariatric Sleeve / Bypass",
    category: "Bariatric Surgery",
    iconName: "Scale",
    description: "Minimally invasive gastric sleeve and Roux-en-Y gastric bypass for long-term weight loss and diabetes remission.",
    costRangeINR: "₹2,60,000 – ₹4,20,000",
    costRangeUSD: "$3,200 – $5,100",
    hospitalStay: "3 – 4 Days",
    tripDuration: "10 – 14 Days",
    recoveryTime: "2 – 3 Weeks",
    successRate: "97.0%",
    overview: "Laparoscopic sleeve gastrectomy and gastric bypass effectively reset metabolic hormones, resolving Type 2 diabetes in up to 80% of patients and achieving sustained excess weight loss.",
    suitableHospitals: ["Max Super Speciality Hospital, Saket", "Apollo Hospitals, Delhi", "Fortis Hospital, Mumbai"],
    specialistDoctors: ["Dr. Pradeep Chowbey", "Dr. Muffazal Lakdawala"],
    faqs: [
      { q: "How much excess weight can I expect to lose?", a: "Most patients lose 65% to 75% of excess body weight over 12 to 18 months." }
    ]
  },
  {
    id: "all-on-4-dental-implants",
    name: "All-on-4 & Full Mouth Dental Implants",
    category: "Dental Care",
    iconName: "Sparkles",
    description: "Immediate-load dental implant rehabilitation with digital 3D smile design and zirconia bridges.",
    costRangeINR: "₹1,50,000 – ₹3,00,000",
    costRangeUSD: "$1,800 – $3,600",
    hospitalStay: "Outpatient",
    tripDuration: "7 – 10 Days",
    recoveryTime: "1 Week",
    successRate: "98.8%",
    overview: "Computer-guided implant placement enables fixed teeth in a day, saving up to 75% compared to dental clinics in the US, UK, or Australia.",
    suitableHospitals: ["Apollo White Dental, Chennai", "Clove Dental Super-centre, Delhi", "Fortis Dental, Mumbai"],
    specialistDoctors: ["Dr. Ajay Sharma", "Dr. Neha Verma"],
    faqs: [
      { q: "How long do zirconia implant bridges last?", a: "Zirconia is virtually indestructible and can last a lifetime with regular oral hygiene." }
    ]
  }
];

export const HOSPITALS: Hospital[] = [
  {
    id: "apollo-delhi",
    name: "Indraprastha Apollo Hospitals",
    city: "Delhi NCR",
    state: "Delhi",
    accreditation: "JCI, NABH, NABL",
    trustScore: 98,
    aiMatchScore: 96,
    specialties: ["Cardiology ❤️", "Orthopedics 🦴", "Oncology 🎗️", "Organ Transplant", "Neurology 🧠"],
    costLevel: "₹₹",
    costRange: "₹4.5L – ₹7.8L ($5.4k – $9.4k)",
    languages: ["English", "Hindi", "Arabic", "French", "Russian", "Bengali"],
    intlDesk: true,
    facilities: ["Dedicated International Lounge", "Airport Ambulance Transfer", "Language Translators", "Halal Meals", "Prayer Room", "Foreign Exchange Desk"],
    rating: 4.8,
    reviewsCount: 1420,
    distanceFromAirport: "18 km (IGI Airport)",
    bedCount: 710,
    featured: true,
    bestValue: false,
    description: "The flagship hospital of the Apollo Group, accredited by JCI continuously since 2005. Features 52 specialties and dedicated patient coordinators speaking over 8 international languages."
  },
  {
    id: "medanta-gurgaon",
    name: "Medanta - The Medicity",
    city: "Delhi NCR (Gurgaon)",
    state: "Haryana",
    accreditation: "JCI, NABH, NABL",
    trustScore: 97,
    aiMatchScore: 95,
    specialties: ["Cardiology ❤️", "Organ Transplant", "Neurology 🧠", "Orthopedics 🦴", "Oncology 🎗️"],
    costLevel: "₹₹",
    costRange: "₹4.2L – ₹7.2L ($5.0k – $8.7k)",
    languages: ["English", "Hindi", "Arabic", "Russian", "Pashto", "Swahili"],
    intlDesk: true,
    facilities: ["Helipad", "International Guest House", "Dedicated Visa Extension Cell", "Specialized ICU for International Patients", "24x7 Embassy Liaison"],
    rating: 4.9,
    reviewsCount: 1890,
    distanceFromAirport: "16 km (IGI Airport)",
    bedCount: 1250,
    featured: false,
    bestValue: true,
    description: "Founded by legendary cardiac surgeon Dr. Naresh Trehan. Spans 43 acres with 6 institutes, 37 operating suites, and high volume organ transplant credentials."
  },
  {
    id: "fortis-mumbai",
    name: "Fortis Memorial & Super Speciality",
    city: "Mumbai",
    state: "Maharashtra",
    accreditation: "JCI, NABH",
    trustScore: 95,
    aiMatchScore: 91,
    specialties: ["Cardiology ❤️", "Oncology 🎗️", "Orthopedics 🦴", "IVF & Fertility", "Bariatric Surgery"],
    costLevel: "₹₹₹",
    costRange: "₹4.8L – ₹8.5L ($5.8k – $10.2k)",
    languages: ["English", "Hindi", "Arabic", "French"],
    intlDesk: true,
    facilities: ["Sea View Executive Suites", "Personal International Care Concierge", "Gourmet International Cuisine", "VIP Airport Pickup"],
    rating: 4.7,
    reviewsCount: 980,
    distanceFromAirport: "12 km (CSMIA Mumbai)",
    bedCount: 350,
    featured: false,
    bestValue: false,
    description: "A premier quaternary hospital known for advanced cardiac care and minimally invasive robotic procedures in India's financial capital."
  },
  {
    id: "manipal-bengaluru",
    name: "Manipal Hospital",
    city: "Bengaluru",
    state: "Karnataka",
    accreditation: "NABH, AAHRPP",
    trustScore: 94,
    aiMatchScore: 89,
    specialties: ["Oncology 🎗️", "Neurology 🧠", "Orthopedics 🦴", "Cardiology ❤️", "Dental Care"],
    costLevel: "₹₹",
    costRange: "₹3.8L – ₹6.5L ($4.5k – $7.8k)",
    languages: ["English", "Hindi", "Kannada", "Arabic", "Bengali"],
    intlDesk: true,
    facilities: ["Tech-Enabled Tele-ICU", "International Lounge", "Post-Op Rehab Center", "Airport Transfers"],
    rating: 4.6,
    reviewsCount: 1120,
    distanceFromAirport: "38 km (Kempegowda Airport)",
    bedCount: 600,
    featured: false,
    bestValue: false,
    description: "Located in India's tech capital, Manipal is a leader in precision oncology, robotic joint reconstruction, and genomics-driven therapy."
  },
  {
    id: "gleneagles-chennai",
    name: "Gleneagles Global Health City",
    city: "Chennai",
    state: "Tamil Nadu",
    accreditation: "JCI, NABH",
    trustScore: 96,
    aiMatchScore: 93,
    specialties: ["Organ Transplant", "Cardiology ❤️", "Neurology 🧠", "Bariatric Surgery"],
    costLevel: "₹₹",
    costRange: "₹3.9L – ₹6.9L ($4.7k – $8.3k)",
    languages: ["English", "Tamil", "Hindi", "Arabic", "Sinhala", "Bengali"],
    intlDesk: true,
    facilities: ["Comprehensive Multi-Organ Transplant Center", "Sprawling 21-Acre Campus", "Affordable Long-Stay Suites"],
    rating: 4.8,
    reviewsCount: 860,
    distanceFromAirport: "14 km (Chennai International)",
    bedCount: 1000,
    featured: false,
    bestValue: true,
    description: "Renowned globally as the transplant capital of India, having completed over 2,000 successful liver and multi-organ transplants for international patients."
  },
  {
    id: "max-delhi",
    name: "Max Super Speciality Hospital, Saket",
    city: "Delhi NCR",
    state: "Delhi",
    accreditation: "NABH, NABL",
    trustScore: 95,
    aiMatchScore: 92,
    specialties: ["Cardiology ❤️", "Oncology 🎗️", "Bariatric Surgery", "Orthopedics 🦴", "Cosmetic Surgery"],
    costLevel: "₹₹₹",
    costRange: "₹4.6L – ₹8.0L ($5.5k – $9.6k)",
    languages: ["English", "Hindi", "Arabic", "Russian", "French"],
    intlDesk: true,
    facilities: ["Boutique International Suites", "Direct Chauffeur Service", "Multilingual Coordinators"],
    rating: 4.7,
    reviewsCount: 1310,
    distanceFromAirport: "15 km (IGI Airport)",
    bedCount: 530,
    featured: false,
    bestValue: false,
    description: "Located in prime South Delhi, recognized for advanced laparoscopic bariatric surgery, radiation oncology with TrueBeam STx, and cardiac sciences."
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: "dr-naresh-trehan",
    name: "Dr. Naresh Trehan",
    specialization: "Cardiovascular & Cardiothoracic Surgery",
    department: "Cardiology ❤️",
    hospital: "Medanta - The Medicity, Gurgaon",
    city: "Delhi NCR",
    experience: 40,
    education: "MBBS, MD, FACS, FRACS (USA trained)",
    languages: ["English", "Hindi", "Punjabi"],
    rating: 4.9,
    consultationFeeINR: 3500,
    consultationFeeUSD: 45,
    availableDays: ["Mon", "Wed", "Fri"],
    nextSlot: "Tomorrow, 3:00 PM IST",
    avatarInitials: "NT",
    bio: "Pioneer of beating-heart surgery in India with over 48,000 successful open-heart surgeries. Recipient of Padma Bhushan and Padma Shri awards."
  },
  {
    id: "dr-ashok-rajgopal",
    name: "Dr. Ashok Rajgopal",
    specialization: "Robotic Joint Replacement & Orthopedics",
    department: "Orthopedics 🦴",
    hospital: "Medanta - The Medicity, Gurgaon",
    city: "Delhi NCR",
    experience: 35,
    education: "MS (Ortho), MCh, FRCS",
    languages: ["English", "Hindi"],
    rating: 4.9,
    consultationFeeINR: 3000,
    consultationFeeUSD: 40,
    availableDays: ["Tue", "Thu", "Sat"],
    nextSlot: "Thursday, 11:30 AM IST",
    avatarInitials: "AR",
    bio: "World-renowned orthopedic surgeon holding the record for over 30,000 total knee replacements. Member of the international knee designers team."
  },
  {
    id: "dr-rakesh-jalali",
    name: "Dr. Rakesh Jalali",
    specialization: "Radiation Oncology & Proton Therapy",
    department: "Oncology 🎗️",
    hospital: "Apollo Proton Cancer Centre",
    city: "Chennai",
    experience: 28,
    education: "MD, DNB (Radiation Oncology)",
    languages: ["English", "Hindi", "Tamil", "Kashmiri"],
    rating: 4.8,
    consultationFeeINR: 3000,
    consultationFeeUSD: 40,
    availableDays: ["Mon", "Tue", "Thu"],
    nextSlot: "Friday, 2:00 PM IST",
    avatarInitials: "RJ",
    bio: "Global authority in neuro-oncology and proton beam therapy. Leads research on stereotactic radiosurgery and organ-preservation protocols."
  },
  {
    id: "dr-arvinder-soin",
    name: "Dr. Arvinder Singh Soin",
    specialization: "Liver Transplant & Hepatobiliary Surgery",
    department: "Organ Transplant",
    hospital: "Medanta - The Medicity, Gurgaon",
    city: "Delhi NCR",
    experience: 32,
    education: "MBBS, MS, FRCS (Edin), FRCS (Glas)",
    languages: ["English", "Hindi", "Punjabi"],
    rating: 5.0,
    consultationFeeINR: 4000,
    consultationFeeUSD: 50,
    availableDays: ["Mon", "Wed", "Fri"],
    nextSlot: "Wednesday, 4:00 PM IST",
    avatarInitials: "AS",
    bio: "Led India's first successful liver transplant and performed over 3,700 liver transplants with a 95% success rate. Padma Shri awardee."
  },
  {
    id: "dr-paresh-doshi",
    name: "Dr. Paresh Doshi",
    specialization: "Functional & Stereotactic Neurosurgery (DBS)",
    department: "Neurology 🧠",
    hospital: "Fortis Hospital, Mumbai",
    city: "Mumbai",
    experience: 30,
    education: "MCh (Neurosurgery), Stereotaxy Fellow (UK)",
    languages: ["English", "Hindi", "Gujarati"],
    rating: 4.8,
    consultationFeeINR: 3200,
    consultationFeeUSD: 42,
    availableDays: ["Tue", "Thu"],
    nextSlot: "Tomorrow, 5:30 PM IST",
    avatarInitials: "PD",
    bio: "Pioneered Deep Brain Stimulation (DBS) for Parkinson's disease and tremor disorders in South Asia. Past president of the Indian Stereotactic Society."
  },
  {
    id: "dr-pradeep-chowbey",
    name: "Dr. Pradeep Chowbey",
    specialization: "Minimal Access, Metabolic & Bariatric Surgery",
    department: "Bariatric Surgery",
    hospital: "Max Super Speciality Hospital, Saket",
    city: "Delhi NCR",
    experience: 38,
    education: "MS, MNAMS, FICS, FACS",
    languages: ["English", "Hindi"],
    rating: 4.9,
    consultationFeeINR: 3500,
    consultationFeeUSD: 45,
    availableDays: ["Mon", "Wed", "Sat"],
    nextSlot: "Saturday, 10:00 AM IST",
    avatarInitials: "PC",
    bio: "Honorary Surgeon to the President of India. Renowned worldwide for performing over 85,000 minimally invasive laparoscopic and bariatric procedures."
  }
];

export const INITIAL_COORDINATOR_LEADS: CoordinatorLead[] = [
  {
    id: "LEAD-101",
    patientName: "John Doe",
    country: "Nigeria",
    phone: "+234 803 123 4567",
    email: "john.doe@email.com",
    specialty: "Cardiology",
    treatment: "Coronary Artery Bypass (CABG)",
    stage: "HOSPITAL REVIEW",
    assignedHospital: "Medanta - The Medicity",
    assignedDoctor: "Dr. Naresh Trehan",
    budgetUSD: 9500,
    urgency: "High Priority",
    createdDate: "2026-09-01",
    lastUpdate: "2026-09-06",
    notes: "Patient submitted Angiography report. Triple vessel disease diagnosed. Hospital desk preparing finalized quotation.",
    tasks: ["Follow up with Medanta intl desk", "Review attendant passport upload", "Schedule video consult"]
  },
  {
    id: "LEAD-102",
    patientName: "Fatima Al-Mansoor",
    country: "United Arab Emirates",
    phone: "+971 50 987 6543",
    email: "fatima.almansoor@email.com",
    specialty: "Orthopedics",
    treatment: "Bilateral Robotic Knee Replacement",
    stage: "TRAVEL PLANNING",
    assignedHospital: "Apollo Hospitals, Delhi",
    assignedDoctor: "Dr. Ashok Rajgopal",
    budgetUSD: 8500,
    urgency: "Standard",
    createdDate: "2026-08-25",
    lastUpdate: "2026-09-05",
    notes: "Medical visa approved. Flight arriving at Delhi IGI Airport on Sep 18. Airport pickup driver assigned.",
    tasks: ["Confirm hotel booking near Apollo", "Arrange Arabic medical translator"]
  },
  {
    id: "LEAD-103",
    patientName: "Abdul Rahim",
    country: "Bangladesh",
    phone: "+880 171 234 5678",
    email: "abdul.rahim@email.com",
    specialty: "Oncology",
    treatment: "Proton Therapy Assessment",
    stage: "DOCUMENTS RECEIVED",
    assignedHospital: "Apollo Proton Centre, Chennai",
    assignedDoctor: "Dr. Rakesh Jalali",
    budgetUSD: 25000,
    urgency: "Urgent",
    createdDate: "2026-09-04",
    lastUpdate: "2026-09-06",
    notes: "Biopsy and MRI uploaded. Case queued for multi-disciplinary tumor board review.",
    tasks: ["Run AI Document Classifier", "Request high-res DICOM scans"]
  },
  {
    id: "LEAD-104",
    patientName: "Sarah Jenkins",
    country: "United Kingdom",
    phone: "+44 7700 900123",
    email: "sarah.j@email.com",
    specialty: "Bariatric Surgery",
    treatment: "Laparoscopic Gastric Sleeve",
    stage: "PROPOSAL SENT",
    assignedHospital: "Max Super Speciality, Saket",
    assignedDoctor: "Dr. Pradeep Chowbey",
    budgetUSD: 4800,
    urgency: "Standard",
    createdDate: "2026-08-30",
    lastUpdate: "2026-09-05",
    notes: "Detailed cost estimate sent ($4,500 inclusive of 3 nights stay and 10 days post-discharge monitoring). Awaiting deposit.",
    tasks: ["Schedule Q&A call with coordinator"]
  },
  {
    id: "LEAD-105",
    patientName: "Kwame Mensah",
    country: "Ghana",
    phone: "+233 24 111 2233",
    email: "kwame.mensah@email.com",
    specialty: "Neurology",
    treatment: "Deep Brain Stimulation (DBS)",
    stage: "CONTACTED",
    assignedHospital: "Fortis Hospital, Mumbai",
    assignedDoctor: "Dr. Paresh Doshi",
    budgetUSD: 16000,
    urgency: "Standard",
    createdDate: "2026-09-06",
    lastUpdate: "2026-09-06",
    notes: "Initial inquiry received. Requested video clips of motor tremors and previous neurologist notes.",
    tasks: ["Send document upload link", "Explain medical visa requirement"]
  }
];

export const AI_MODELS_HUB = [
  {
    id: "model-1",
    name: "Hospital Recommendation Engine",
    version: "v2.4 (Hybrid Rule + Ranking)",
    status: "Active",
    type: "Multi-Criteria Decision System",
    description: "Evaluates patient profile against accredited hospital capability matrices. Uses transparent explainable weights: Specialty 30%, Treatment 20%, Budget 15%, Facilities 10%, Location 10%, Language 5%, Patient Pref 10%.",
    accuracy: "96.4% coordinator concurrence",
    latency: "45ms"
  },
  {
    id: "model-2",
    name: "Medical Document Intelligence & OCR",
    version: "v1.8 (Tesseract + Biomedical NLP)",
    status: "Active",
    type: "Document Parsing & Entity Extraction",
    description: "Extracts clinical text from scanned PDFs, lab reports, and doctor prescriptions. Normalizes ICD-10 medical terminology and prepares structured case summaries for physician review.",
    accuracy: "94.2% OCR character fidelity",
    latency: "1.8s avg"
  },
  {
    id: "model-3",
    name: "Document Classification Model",
    version: "v2.1 (TF-IDF + Logistic Regression)",
    status: "Active",
    type: "Multi-Class Document Classifier",
    description: "Automatically identifies and indexes incoming patient documents into 6 categories: Blood Lab Report, MRI/CT Radiology, Prescription, Discharge Summary, ECG/Echo, or Passport/Visa.",
    accuracy: "97.8% F1-score",
    latency: "30ms"
  },
  {
    id: "model-4",
    name: "Smart Document Search (RAG Engine)",
    version: "v1.5 (pgvector + Embeddings)",
    status: "Active",
    type: "Retrieval-Augmented Generation",
    description: "Enables medical coordinators to query patient case histories in natural language (e.g., 'What was the patient's previous surgical history or current blood thinner medication?') with verifiable citations.",
    accuracy: "98.1% citation precision",
    latency: "320ms"
  },
  {
    id: "model-5",
    name: "Treatment Cost Prediction Engine",
    version: "v3.0 (XGBoost Regressor)",
    status: "Active",
    type: "Tabular Cost Regression",
    description: "Estimates complete journey out-of-pocket costs based on procedure type, chosen hospital tier, patient co-morbidities, length of ICU stay, companion accommodations, and local logistics.",
    accuracy: "MAE ±4.8%",
    latency: "60ms"
  },
  {
    id: "model-6",
    name: "Multilingual Patient Assistant (HealAI)",
    version: "v2.0 (LLM + Translation Bridge)",
    status: "Active",
    type: "Conversational Care Coordinator",
    description: "Real-time multilingual assistant operating across English, Hindi, Arabic, French, Swahili, and Bengali. Guides patients through visa forms, hospital options, and pre-departure checklists.",
    accuracy: "Zero hallucination medical guardrail",
    latency: "280ms streaming"
  },
  {
    id: "model-7",
    name: "MVT Predictive Demand & Fraud Analytics",
    version: "v1.0-alpha",
    status: "Training",
    type: "Time-Series & Anomaly Detection",
    description: "Monitors national medical tourism trends, pricing discrepancies, and flags predatory hospital markups or expired accreditations.",
    accuracy: "Training in progress (Epoch 42/100)",
    latency: "--"
  }
];
