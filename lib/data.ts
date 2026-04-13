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
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEFudGliaW90aWNzJTIwJTI2JTIwQW50aS1pbmZlY3RpdmVzfGVufDB8fDB8fHww",
  },
  {
    name: "Cardiovascular Medicines",
    description: "Hypertension, heart disease management",
    image: "https://images.unsplash.com/photo-1631980838946-755ba8443ab7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENhcmRpb3Zhc2N1bGFyJTIwTWVkaWNpbmVzfGVufDB8fDB8fHww",
  },
  {
    name: "Diabetes Care",
    description: "Insulin, oral antidiabetics, glucose monitoring",
    image: "https://plus.unsplash.com/premium_photo-1680221453924-fcc37377f18e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGlhYmV0ZXMlMjBDYXJlfGVufDB8fDB8fHww",
  },
  {
    name: "Pain Management",
    description: "Analgesics for acute and chronic pain",
    image: "https://plus.unsplash.com/premium_photo-1661779581951-eb3a2fe942bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fFBhaW4lMjBNYW5hZ2VtZW50fGVufDB8fDB8fHww",
  },
  {
    name: "Nutraceuticals",
    description: "Vitamins, minerals, and wellness supplements",
    image: "https://plus.unsplash.com/premium_photo-1670981099502-fb0ea624fa9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fE51dHJhY2V1dGljYWxzfGVufDB8fDB8fHww",
  },
  {
    name: "Respiratory Medicines",
    description: "Inhalers, bronchodilators, asthma treatments",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmVzcGlyYXRvcnklMjBNZWRpY2luZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Oncology Drugs",
    description: "Chemotherapy and supportive care medications",
    image: "https://images.unsplash.com/photo-1607874963930-2edecc67a25a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE9uY29sb2d5JTIwRHJ1Z3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Pediatric Range",
    description: "Child-safe formulations and supplements",
    image: "https://images.unsplash.com/photo-1708687045030-26702e62fc65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGVkaWF0cmljJTIwUmFuZ2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Dermatology Products",
    description: "Topical treatments, anti-fungal creams",
    image: "https://images.unsplash.com/photo-1618480066690-8457ab2b766e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RGVybWF0b2xvZ3klMjBQcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
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
    image: "https://images.unsplash.com/photo-1748064716276-6fb0fc9da94a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN1cmdpY2FsJTIwZ2xvdmVzfGVufDB8fDB8fHww",
  },
  {
    name: "Syringes & Needles",
    description: "All gauges available for precise medical administration.",
    image: "https://images.unsplash.com/photo-1599082642130-d7fc84cddb44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3lyaW5nZXMlMjAlMjYlMjBOZWVkbGVzfGVufDB8fDB8fHww",
  },
  {
    name: "Face Masks",
    description: "N95, surgical, and 3-ply masks for effective protection.",
    image: "https://images.unsplash.com/photo-1622631090360-ba04acd2e02f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RmFjZSUyME1hc2tzfGVufDB8fDB8fHww",
  },
  {
    name: "Surgical Gowns & Drapes",
    description: "Sterile apparel for safe surgical environments.",
    image: "https://plus.unsplash.com/premium_photo-1664478424549-7592c541d032?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3VyZ2ljYWwlMjBHb3ducyUyMCUyNiUyMERyYXBlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "IV Cannulas & Infusion Sets",
    description: "Reliable solutions for fluid and medication delivery.",
    image: "https://images.unsplash.com/photo-1516575901726-efcb7a9895a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SVYlMjBDYW5udWxhcyUyMCUyNiUyMEluZnVzaW9uJTIwU2V0c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Urine Bags & Catheters",
    description: "Hygienic and patient-safe urinary care products.",
    image: "https://images.unsplash.com/photo-1668168550143-86c1136b2443?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fFVyaW5lJTIwQmFncyUyMCUyNiUyMENhdGhldGVyc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Bandages & Wound Care",
    description: "Comprehensive solutions for wound management and healing.",
    image: "https://plus.unsplash.com/premium_photo-1672073397657-a117e578e18a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmFuZGFnZXMlMjAlMjYlMjBXb3VuZCUyMENhcmV8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Alcohol Swabs & Antiseptics",
    description: "Effective infection control and skin preparation products.",
    image: "https://images.unsplash.com/photo-1690306815613-f839b74af330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fEFsY29ob2wlMjBTd2FicyUyMCUyNiUyMEFudGlzZXB0aWNzfGVufDB8fDB8fHww",
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
    image: "https://plus.unsplash.com/premium_photo-1702599099948-5ed43d0a3048?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fERpYWdub3N0aWMlMjBFcXVpcG1lbnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Laboratory Equipment",
    description: "Centrifuges, microscopes, and analyzers for accurate lab testing.",
    image: "https://images.unsplash.com/photo-1602052577122-f73b9710adba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGFib3JhdG9yeSUyMEVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Patient Monitors",
    description: "Multi-parameter monitors and ECG machines for real-time tracking.",
    image: "https://images.unsplash.com/photo-1725859189283-eaeb03a0a1c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UGF0aWVudCUyME1vbml0b3JzfGVufDB8fDB8fHww",
  },
  {
    name: "Surgical Instruments",
    description: "Forceps, scissors, retractors, and scalpels for surgical precision.",
    image: "https://plus.unsplash.com/premium_photo-1661889752049-44bb9f857e67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fFN1cmdpY2FsJTIwSW5zdHJ1bWVudHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Sterilization Equipment",
    description: "Autoclaves and UV sterilizers for infection control.",
    image: "https://images.unsplash.com/photo-1616996691356-4659297f4baf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFN0ZXJpbGl6YXRpb24lMjBFcXVpcG1lbnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Rehabilitation Aids",
    description: "Wheelchairs, walkers, and crutches for patient mobility support.",
    image: "https://images.unsplash.com/photo-1706777280252-5de52771cf13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fCUyMlJlaGFiaWxpdGF0aW9uJTIwQWlkc3xlbnwwfHwwfHx8MA%3D%3D",
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
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8T3BlcmF0aW9uJTIwVGhlYXRlciUyMFRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Surgical Lights",
    description: "LED shadowless lamps for clear and focused surgical visibility.",
    image: "https://images.unsplash.com/photo-1734094546615-045bf5f7ea0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3VyZ2ljYWwlMjBMaWdodHN8ZW58MHx8MHx8fDA%3D",
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
    image: "https://images.unsplash.com/photo-1730387525836-16ea5e46eb19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3VjdGlvbiUyMEFwcGFyYXR1c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "ENT & Gynecology Workstations",
    description: "Specialized setups for ENT and gynecological procedures.",
    image: "https://images.unsplash.com/photo-1580420768674-7078c2bebec6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RU5UJTIwJTI2JTIwR3luZWNvbG9neSUyMFdvcmtzdGF0aW9uc3xlbnwwfHwwfHx8MA%3D%3D",
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
        image: "https://plus.unsplash.com/premium_photo-1723044801323-a62f53def797?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Qmxvb2QlMjBUZXN0JTIwS2l0c3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Reagents",
        description: "High-quality lab chemicals.",
        image: "https://images.unsplash.com/photo-1583912267550-d974311a9a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmVhZ2VudHN8ZW58MHx8MHx8fDA%3D",
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
    image: "https://plus.unsplash.com/premium_photo-1661962255083-27907427f03a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SEVQQSUyMEZpbHRlcnMlMjAlMjYlMjBBaXIlMjBQdXJpZmljYXRpb24lMjBTeXN0ZW1zJTIwSGlnaC1lZmZpY2llbmN5JTIwZmlsdHJhdGlvbiUyMHN5c3RlbXMlMjBmb3IlMjBjbGVhbiUyMGFuZCUyMGNvbnRyb2xsZWR8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "HVAC Systems for Sterile Zones",
    description: "Advanced climate control solutions for hospitals and cleanrooms.",
    image: "/hvac2.png",
  },
  {
    name: "Medical Gas Pipeline Equipment",
    description: "Safe and reliable gas distribution systems for healthcare facilities.",
    image: "https://plus.unsplash.com/premium_photo-1661962748618-ae954e38b5ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWVkaWNhbCUyMEdhcyUyMFBpcGVsaW5lJTIwRXF1aXBtZW50fGVufDB8fDB8fHww",
  },
  {
    name: "Cleanroom Garments & Isolation Suits",
    description: "Sterile protective wear for contamination-free environments.",
    image: "https://plus.unsplash.com/premium_photo-1661838213509-26fdecce04e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2xlYW5yb29tJTIwR2FybWVudHMlMjAlMjYlMjBJc29sYXRpb24lMjBTdWl0c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Modular Operation Theater Setups",
    description: "Pre-engineered OT solutions for modern surgical environments.",
    image: "https://images.unsplash.com/photo-1559000357-f6b52ddfbe37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE1vZHVsYXIlMjBPcGVyYXRpb24lMjBUaGVhdGVyJTIwU2V0dXBzfGVufDB8fDB8fHww",
  },
]
  },
];

export default features;