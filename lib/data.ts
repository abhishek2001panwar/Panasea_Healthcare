export interface ProductItem {
  name: string;
  description: string;
  image: string;
}

export interface ProductCategory {
  title: string;
  description: string;
  icon: string;
  cta: string;
  image: string;
  slug: string;
  items: ProductItem[];
}

const features: ProductCategory[] = [
  {
    title: "Pharmaceuticals",
    description: "A broad range of prescription medicines, life-saving drugs, OTC products, and wellness supplements fully compliant with drug regulatory standards.",
    icon: "💊",
    cta: "Request catalog →",
    slug: "pharmaceuticals",
    image: "/product1.png",

    items: [
  {
    name: "Antibiotics & Anti-infectives",
    description: "Complete range for bacterial infections",
    image: "/product1.png",
  },
  {
    name: "Cardiovascular Medicines",
    description: "Hypertension, heart disease management",
    image: "/products/pharma2.png",
  },
  {
    name: "Diabetes Care",
    description: "Insulin, oral antidiabetics, glucose monitoring",
    image: "/products/pharma3.png",
  },
  {
    name: "Pain Management",
    description: "Analgesics for acute and chronic pain",
    image: "/products/pharma4.png",
  },
  {
    name: "Nutraceuticals",
    description: "Vitamins, minerals, and wellness supplements",
    image: "/products/pharma5.png",
  },
  {
    name: "Respiratory Medicines",
    description: "Inhalers, bronchodilators, asthma treatments",
    image: "/products/pharma6.png",
  },
  {
    name: "Oncology Drugs",
    description: "Chemotherapy and supportive care medications",
    image: "/products/pharma7.png",
  },
  {
    name: "Pediatric Range",
    description: "Child-safe formulations and supplements",
    image: "/products/pharma8.png",
  },
  {
    name: "Dermatology Products",
    description: "Topical treatments, anti-fungal creams",
    image: "/products/pharma9.png",
  },
]
  },

  {
    title: "Medical Disposables",
    description: "Hospital-grade gloves, syringes, IV sets, surgical masks, drapes, and protective equipment for clinics, hospitals, and diagnostic labs.",
    icon: "🩺",
    cta: "Request catalog →",
    image: "/product2.png",
    slug: "medical-disposables",
        
   items: [
  {
    name: "Surgical Gloves",
    description: "Latex, nitrile, and vinyl gloves for sterile protection.",
    image: "/products/disposable1.png",
  },
  {
    name: "Syringes & Needles",
    description: "All gauges available for precise medical administration.",
    image: "/products/disposable2.png",
  },
  {
    name: "Face Masks",
    description: "N95, surgical, and 3-ply masks for effective protection.",
    image: "/products/disposable3.png",
  },
  {
    name: "Surgical Gowns & Drapes",
    description: "Sterile apparel for safe surgical environments.",
    image: "/products/disposable4.png",
  },
  {
    name: "IV Cannulas & Infusion Sets",
    description: "Reliable solutions for fluid and medication delivery.",
    image: "/products/disposable5.png",
  },
  {
    name: "Urine Bags & Catheters",
    description: "Hygienic and patient-safe urinary care products.",
    image: "/products/disposable6.png",
  },
  {
    name: "Bandages & Wound Care",
    description: "Comprehensive solutions for wound management and healing.",
    image: "/products/disposable7.png",
  },
  {
    name: "Alcohol Swabs & Antiseptics",
    description: "Effective infection control and skin preparation products.",
    image: "/products/disposable8.png",
  },
]
  },

  {
    title: "Diagnostic Equipment",
    description: "High-performance imaging, monitoring, and diagnostic instruments from globally trusted brands, supporting precision in patient care.",
    icon: "🔭",
    cta: "Request catalog →",
    image: "/product3.png",
    slug: "diagnostic-equipment",
items: [
  {
    name: "Diagnostic Equipment",
    description: "BP monitors, pulse oximeters, and thermometers for routine diagnostics.",
    image: "/products/diag1.png",
  },
  {
    name: "Laboratory Equipment",
    description: "Centrifuges, microscopes, and analyzers for accurate lab testing.",
    image: "/products/diag2.png",
  },
  {
    name: "Patient Monitors",
    description: "Multi-parameter monitors and ECG machines for real-time tracking.",
    image: "/products/diag3.png",
  },
  {
    name: "Surgical Instruments",
    description: "Forceps, scissors, retractors, and scalpels for surgical precision.",
    image: "/products/diag4.png",
  },
  {
    name: "Sterilization Equipment",
    description: "Autoclaves and UV sterilizers for infection control.",
    image: "/products/diag5.png",
  },
  {
    name: "Rehabilitation Aids",
    description: "Wheelchairs, walkers, and crutches for patient mobility support.",
    image: "/products/diag6.png",
  },
]
  },

  {
    title: "Surgical Instruments & OT Equipment",
    description: "Modern OT tables, surgical lighting, sterile instrument sets, and patient monitoring systems for advanced surgical environments.",
    icon: "🏥",
    cta: "Request catalog →",
    image: "/product4.png",
    slug: "surgical-instruments-ot-equipment",

items: [
  {
    name: "Operation Theater Tables",
    description: "Advanced OT tables designed for precision and patient safety.",
    image: "/products/surgical1.png",
  },
  {
    name: "Surgical Lights",
    description: "LED shadowless lamps for clear and focused surgical visibility.",
    image: "/products/surgical2.png",
  },
  {
    name: "Anesthesia Workstations",
    description: "Integrated systems for safe and efficient anesthesia delivery.",
    image: "/products/surgical3.png",
  },
  {
    name: "Electrosurgical Units",
    description: "High-performance units for cutting and coagulation procedures.",
    image: "/products/surgical4.png",
  },
  {
    name: "Suction Apparatus",
    description: "Reliable systems for fluid removal during medical procedures.",
    image: "/products/surgical5.png",
  },
  {
    name: "ENT & Gynecology Workstations",
    description: "Specialized setups for ENT and gynecological procedures.",
    image: "/products/surgical6.png",
  },
]
  },

  {
    title: "Lab Reagents & Test Kits",
    description: "Specialized diagnostic consumables, lab reagents, rapid test kits, and sample collection supplies for pathology and research labs.",
    icon: "🧪",
    cta: "Request catalog →",
    image: "/product5.png",
    slug: "lab-reagents-test-kits",

    items: [
      {
        name: "Blood Test Kits",
        description: "Quick diagnostic kits.",
        image: "/products/lab1.png",
      },
      {
        name: "Reagents",
        description: "High-quality lab chemicals.",
        image: "/products/lab2.png",
      },
    ],
  },

  {
    title: "HVAC & Clean Room Solutions",
    description: "Hospital-grade HEPA filtration systems and climate control solutions designed to maintain sterile conditions in critical care environments.",
    icon: "🌡️",
    cta: "Request catalog →",
    image: "/product6.png",
    slug: "hvac-clean-room-solutions",
   items: [
  {
    name: "HEPA Filters & Air Purification Systems",
    description: "High-efficiency filtration systems for clean and controlled environments.",
    image: "/products/hvac1.png",
  },
  {
    name: "HVAC Systems for Sterile Zones",
    description: "Advanced climate control solutions for hospitals and cleanrooms.",
    image: "/products/hvac2.png",
  },
  {
    name: "Medical Gas Pipeline Equipment",
    description: "Safe and reliable gas distribution systems for healthcare facilities.",
    image: "/products/hvac3.png",
  },
  {
    name: "Cleanroom Garments & Isolation Suits",
    description: "Sterile protective wear for contamination-free environments.",
    image: "/products/hvac4.png",
  },
  {
    name: "Modular Operation Theater Setups",
    description: "Pre-engineered OT solutions for modern surgical environments.",
    image: "/products/hvac5.png",
  },
]
  },
];

export default features;