export const clinic = {
  name: "Forever Smile Dental Clinic",
  phoneDisplay: "084099 81910",
  phone: "+918409981910",
  whatsapp: "918409981910",
  rating: "5.0",
  reviewsCount: "182",
  address:
    "Mission Complex, Beside St. John’s School, Mission Chowk, Purulia Road, Ranchi, Jharkhand 834001",
  landmark: "Located in St. John’s Inter College, Ranchi",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Forever+Smile+Dental+Clinic+Mission+Chowk+Ranchi",
};

export const navItems = [
  ["Home", "/"],
  ["About us", "/about"],
  ["Services", "/services"],
  ["Testimonials", "/testimonials"],
  ["Gallery", "/gallery"],
  ["Book appointment", "/book-appointment"],
] as const;

export type Service = {
  title: string;
  short: string;
  detail: string;
  image: string;
  icon: "shield" | "crown" | "sparkles" | "activity" | "gauge" | "scan" | "family" | "heart";
  number: string;
};

export const services: Service[] = [
  {
    title: "Root Canal Treatment",
    short: "Relief-focused RCT with precise restoration.",
    detail:
      "Comfort-first root canal care designed to relieve pain, preserve the natural tooth and restore everyday function.",
    image: "/assets/services/service-root-canal.webp",
    icon: "shield",
    number: "01",
  },
  {
    title: "Crowns & Caps",
    short: "Durable, natural-looking zirconia crowns.",
    detail:
      "Carefully planned caps and zirconia crowns that strengthen treated teeth while keeping your smile natural.",
    image: "/assets/services/service-crowns-caps.webp",
    icon: "crown",
    number: "02",
  },
  {
    title: "Cosmetic Fillings",
    short: "Tooth-coloured restoration with a clean finish.",
    detail:
      "Cosmetic fillings and tooth reconstruction shaped to restore comfort, appearance and confidence.",
    image: "/assets/services/service-cosmetic-fillings.webp",
    icon: "sparkles",
    number: "03",
  },
  {
    title: "Scaling & Cleaning",
    short: "Professional cleaning for healthy gums.",
    detail:
      "Gentle plaque and tartar removal with clear guidance to help protect your teeth and gums between visits.",
    image: "/assets/services/service-scaling-cleaning.webp",
    icon: "activity",
    number: "04",
  },
  {
    title: "Wisdom Tooth Care",
    short: "Calm assessment and careful extraction support.",
    detail:
      "Thoughtful evaluation and extraction planning when wisdom teeth cause pain, swelling or crowding.",
    image: "/assets/services/service-wisdom-tooth.webp",
    icon: "gauge",
    number: "05",
  },
  {
    title: "Digital Diagnosis",
    short: "Clear visuals for confident treatment decisions.",
    detail:
      "Digital dental imaging helps the doctors explain your condition and treatment plan with greater clarity.",
    image: "/assets/services/service-digital-diagnosis.webp",
    icon: "scan",
    number: "06",
  },
  {
    title: "Family Dentistry",
    short: "Friendly care for children, adults and seniors.",
    detail:
      "Patient, respectful dental care for every generation—with special attention to comfort and understanding.",
    image: "/assets/services/service-family-dentistry.webp",
    icon: "family",
    number: "07",
  },
  {
    title: "Tooth Pain Consultation",
    short: "Prompt assessment when discomfort cannot wait.",
    detail:
      "A focused consultation to identify the likely cause of pain and explain the most appropriate next step.",
    image: "/assets/services/service-tooth-pain.webp",
    icon: "heart",
    number: "08",
  },
];

export const reviews = [
  {
    name: "Angel Kujur",
    text:
      "I received dental treatment including scaling, filling, RCT and capping from Dr. Reena. She was professional, kind and cooperative, explained clearly and made me feel comfortable at every step.",
    tag: "RCT & capping",
  },
  {
    name: "Anju Lakra",
    text:
      "Dr. Reena and Dr. Noman were very helpful in my complicated case. My wisdom tooth extraction was done without pain, and everything was explained clearly with patience and respect.",
    tag: "Wisdom tooth care",
  },
  {
    name: "Ritu Raj",
    text:
      "Dr. Noman Ahmed and Dr. Reena Kumari ne mera RCT treatment bahut hi achhe se kiya. Treatment bilkul painless tha aur doctor ne har step clearly samjhaya.",
    tag: "Painless RCT",
  },
  {
    name: "Dablu Sajjad",
    text:
      "One of the best dental clinics in town. I underwent a root canal with tooth reconstruction and cosmetic filling. Both doctors are highly expert.",
    tag: "Root canal",
  },
  {
    name: "Rukhsar Perween",
    text:
      "Both doctors are helpful and friendly. My treatment was done clearly and smoothly without pain. Thank you so much—both doctors are knowledgeable and professional.",
    tag: "Comfort-first care",
  },
  {
    name: "Pushpa Linda",
    text:
      "Very nice atmosphere. The doctors helped me understand how the treatment would work, and the staff was helpful. I got my RCT and zirconia crown here. Highly recommend.",
    tag: "Zirconia crown",
  },
  {
    name: "Neeti Kindo",
    text:
      "One of the best and affordable experiences. Their service brings joy and a smile to your face, from reception to the doctors and assistant staff.",
    tag: "Clinic experience",
  },
  {
    name: "Rohit Kumar Sharma",
    text:
      "I had a lot of pain and discomfort in my teeth. The doctors treated me very well and did my RCT. Great experience and a must-visit for dental treatment.",
    tag: "Pain relief",
  },
  {
    name: "Ankit Kumar",
    text:
      "Very neat and clean, with painless treatment, proper hygiene, authentic diagnosis and accurate suggestions. The response felt caring and prompt.",
    tag: "Hygiene & diagnosis",
  },
  {
    name: "Kishan Chand Lal",
    text:
      "My treatment was smooth and painless. The clinic is neat and clean, uses good instruments, and the doctor explains everything before treatment.",
    tag: "Smooth treatment",
  },
];

export const gallery = [
  {
    src: "/assets/Screenshot_2026-07-27-15-21-04-50_3d9111e2d3171bf4882369f490c087b4.jpg.jpeg",
    alt: "Modern dental treatment room at Forever Smile",
    category: "Clinic",
  },
  {
    src: "/assets/Screenshot_2026-07-27-15-21-12-49_3d9111e2d3171bf4882369f490c087b4.jpg.jpeg",
    alt: "Reception at Forever Smile Dental Clinic",
    category: "Clinic",
  },
  {
    src: "/assets/Screenshot_2026-07-27-15-21-21-09_3d9111e2d3171bf4882369f490c087b4.jpg.jpeg",
    alt: "Dentist treating a patient",
    category: "Care",
  },
  {
    src: "/assets/Screenshot_2026-07-27-15-21-26-20_3d9111e2d3171bf4882369f490c087b4.jpg.jpeg",
    alt: "Doctor with patient at Forever Smile Dental Clinic",
    category: "Care",
  },
  {
    src: "/assets/Screenshot_2026-07-27-15-21-32-19_3d9111e2d3171bf4882369f490c087b4.jpg.jpeg",
    alt: "Digital dental imaging screen",
    category: "Technology",
  },
  {
    src: "/assets/Screenshot_2026-07-27-15-21-45-13_3d9111e2d3171bf4882369f490c087b4.jpg.jpeg",
    alt: "Fully equipped dental chair",
    category: "Clinic",
  },
  {
    src: "/assets/Screenshot_2026-07-27-15-21-49-99_3d9111e2d3171bf4882369f490c087b4.jpg.jpeg",
    alt: "Dental procedure at the clinic",
    category: "Care",
  },
  {
    src: "/assets/Screenshot_2026-07-27-15-21-56-27_3d9111e2d3171bf4882369f490c087b4.jpg.jpeg",
    alt: "Detailed dental examination",
    category: "Technology",
  },
  {
    src: "/assets/Screenshot_2026-07-27-15-22-02-00_3d9111e2d3171bf4882369f490c087b4.jpg.jpeg",
    alt: "A happy family after treatment",
    category: "Smiles",
  },
  {
    src: "/assets/Screenshot_2026-07-27-15-22-06-73_3d9111e2d3171bf4882369f490c087b4.jpg.jpeg",
    alt: "Digital X-ray view",
    category: "Technology",
  },
  {
    src: "/assets/Screenshot_2026-07-27-15-22-15-58_3d9111e2d3171bf4882369f490c087b4.jpg.jpeg",
    alt: "Doctor and patient after care",
    category: "Smiles",
  },
  {
    src: "/assets/Screenshot_2026-07-27-15-22-22-02_3d9111e2d3171bf4882369f490c087b4.jpg.jpeg",
    alt: "Professional certificates displayed at the clinic",
    category: "Trust",
  },
];
