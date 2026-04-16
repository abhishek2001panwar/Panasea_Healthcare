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
    image: "https://media.istockphoto.com/id/489216000/photo/pills-and-capsules-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=XPHrLNuEZ9KD6U6JHKIjyJoRfOzN61AkdI7X-NwdVhI=",
  },
  {
    name: "Cardiovascular Medicines",
    description: "Hypertension, heart disease management",
    image: "https://media.istockphoto.com/id/173194744/photo/close-up-of-a-heartbeat-on-a-machine.jpg?s=612x612&w=0&k=20&c=dvoctbtKaRICwJemc_emWRnl7ttG887qEAhQZ2iuV9M=",
  },
  {
    name: "Diabetes Care",
    description: "Insulin, oral antidiabetics, glucose monitoring",
    image: "https://media.istockphoto.com/id/491965869/photo/woman-doing-blood-sugar-test.jpg?s=612x612&w=0&k=20&c=gC9xmTjGtB7M9HbCv1_bRkMOsR_dmcycDEH5ioDEp8Q=",
  },
  {
    name: "Pain Management",
    description: "Analgesics for acute and chronic pain",
    image: "https://media.istockphoto.com/id/516084167/photo/medication.jpg?s=612x612&w=0&k=20&c=PmxNRuvSEGJWGlw2ctPWPL2io0heHisooHa36LpsEjo=",
  },
  {
    name: "Nutraceuticals",
    description: "Vitamins, minerals, and wellness supplements",
    image: "https://media.istockphoto.com/id/464469702/photo/pills-and-multivitamins.jpg?s=612x612&w=0&k=20&c=Kf2UcboSMLrhE0P8GqrGbi0eHbaZ1EaGKp0GWqgpmKQ=",
  },
  {
    name: "Respiratory Medicines",
    description: "Inhalers, bronchodilators, asthma treatments",
    image: "https://media.istockphoto.com/id/624742296/photo/cartridge-inhaler-and-chamber-and-mask-in-room-front-view.jpg?s=612x612&w=0&k=20&c=x3B9yPM27BJ0SvuHMy4dSwfEagLcBYRkz23lHWsjIYA=",
  },
  {
    name: "Oncology Drugs",
    description: "Chemotherapy and supportive care medications",
    image: "https://media.istockphoto.com/id/477013712/photo/scientist-using-protective-robber-gloves-for-handling-substances-and-experiments.jpg?s=612x612&w=0&k=20&c=y8qCj3Ok5JwvNz0AgHPXuujoNpnUapzEZ7NkOkyxHqA=",
  },
  {
    name: "Pediatric Range",
    description: "Child-safe formulations and supplements",
    image: "https://media.istockphoto.com/id/2063130291/photo/consultation-with-a-dermatologist.jpg?s=612x612&w=0&k=20&c=q-PuLHk7qHfRIi9tvR3xzqjV2bZ5kuFWml2ilnrc3gY=",
  },
  {
    name: "Dermatology Products",
    description: "Topical treatments, anti-fungal creams",
    image: "https://media.istockphoto.com/id/914504658/photo/the-scientist-dermatologist-testing-the-organic-natural-product-in-the-laboratory-research-and.jpg?s=612x612&w=0&k=20&c=WHvQ2T3RTLovLRkwk_athtiFj8i4tE3kLN-2ZdLccdU=",
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
    image: "https://media.istockphoto.com/id/2261444188/photo/surgeon-dons-surgical-attire-a-healthcare-worker-ties-their-surgical-gown-before-entering-the.jpg?s=612x612&w=0&k=20&c=Z9m5v5olAklQ5m3kgpkHxLm4qRaXyvaHlO3IMI8qzRQ=",
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
    image: "https://media.istockphoto.com/id/2264137809/photo/asian-male-doctor-cleans-and-treats-a-female-patient%C3%A2s-arm-wound-with-antiseptic-before.jpg?s=612x612&w=0&k=20&c=psqFqvyyda52xEVIJOftgzUOxnYA3801YRLidR6zHrc=",
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
    image: "https://media.istockphoto.com/id/896374754/photo/medical-equipment-for-electrostimulating-and-ultrasound-therapy.webp?a=1&b=1&s=612x612&w=0&k=20&c=LXyAjn7fqrmEqB1I2lBmK7l9607ffe9OEoRJ6jKGXZs=",
  },
  {
    name: "Electrosurgical Units",
    description: "High-performance units for cutting and coagulation procedures.",
    image: "https://plus.unsplash.com/premium_photo-1661853797396-f6b58f6e5b0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RWxlY3Ryb3N1cmdpY2FsJTIwVW5pdHMlMjBIaWdoLXBlcmZvcm1hbmNlJTIwdW5pdHMlMjBmb3IlMjBjdXR0aW5nJTIwYW5kJTIwY29hfGVufDB8fDB8fHww",
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