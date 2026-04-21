// import Link from "next/link";

// export function FooterSection() {
//   return (
//     <footer className="bg-white text-black pt-16 pb-6 px-6 md:px-12 lg:px-20">
//       <div className="max-w-8xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
//           {/* Brand & Description */}
//           <div>
//             <span className="text-2xl  font-semibold text-black">Panasea <span className="text-teal-600">Healthcare</span></span>
//             <p className="mt-4 max-w-xs text-base leading-relaxed text-gray-700">
//               Your trusted partner in pharmaceutical distribution and medical supply-delivering quality, reliability, and care across India and beyond.
//             </p>
//           </div>
//           {/* Quick Links */}
//           <div>
//             <h4 className="mb-4 text-sm font-bold tracking-widest text-black uppercase">Quick Links</h4>
//             <ul className="space-y-3">
//               <li><Link href="#about" className="hover:text-teal-600 transition">About Us</Link></li>
//               <li><Link href="#products" className="hover:text-teal-600 transition">Our Products</Link></li>
//               <li><Link href="#services" className="hover:text-teal-600 transition">Our Services</Link></li>
//               <li><Link href="#choose" className="hover:text-teal-600 transition">Why Choose Us</Link></li>
//               <li><Link href="#contact" className="hover:text-teal-600 transition">Contact</Link></li>
//             </ul>
//           </div>
//           {/* Products */}
//           <div>
//             <h4 className="mb-4 text-sm font-bold tracking-widest text-black uppercase">Products</h4>
//             <ul className="space-y-3">
//               <li><Link href="#" className="hover:text-teal-600 transition">Pharmaceuticals</Link></li>
//               <li><Link href="#" className="hover:text-teal-600 transition">Medical Disposables</Link></li>
//               <li><Link href="#" className="hover:text-teal-600 transition">Diagnostic Equipment</Link></li>
//               <li><Link href="#" className="hover:text-teal-600 transition">Surgical Equipment</Link></li>
//               <li><Link href="#" className="hover:text-teal-600 transition">Lab Supplies</Link></li>
//             </ul>
//           </div>
//           {/* Contact Us */}
//           <div>
//             <h4 className="mb-4 text-sm font-bold tracking-widest text-black uppercase">Contact Us</h4>
//             <ul className="space-y-3">
//               <li className="flex items-center gap-2"><span className="text-pink-600 text-lg">&#128222;</span> <span>+91 876 543 210</span></li>
//               <li className="flex items-center gap-2"><span className="text-teal-600 text-lg">&#128231;</span> <span>panaseahealthcare@gmail.com</span></li>
//               <li className="text-gray-600">Pan-India Distribution</li>
//               <li className="text-gray-600">Import & Export Services</li>
//             </ul>
//           </div>
//         </div>
//         <hr className="my-8 border-gray-200" />
//         <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 gap-4">
//           <span>© 2025 Panasea Healthcare. All rights reserved.</span>
//           <span className="md:ml-auto">Trusted Healthcare Distribution</span>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  explore: [
    { label: "About Us", href: "#about" },
    { label: "Our Products", href: "#products" },
    { label: "Our Services", href: "#services" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Contact", href: "#contact" },
  ],

about: [
  { label: "Pharmaceuticals", href: "/products/pharmaceuticals" },
  { label: "Medical Disposables", href: "/products/medical-disposables" },
  { label: "Diagnostic Equipment", href: "/products/diagnostic-equipment" },
  { label: "Surgical Instruments", href: "/products/surgical-instruments-ot-equipment" },
  { label: "Lab Reagents & Test Kits", href: "/products/lab-reagents-test-kits" },
],
  service: [
    { label: "+91-9686495574", href: "tel:+919686495574" },
    { label: "+91-7022443765", href: "tel:+917022443765" },
    { label: "panaseahealthcare@gmail.com", href: "mailto:panaseahealthcare@gmail.com" },
    { label: "Pan-India Distribution  \nImport & Export Services", href: "#" },
  ],
};

export function FooterSection() {
  return (
    <footer className="bg-background relative overflow-hidden "
      style={{
        background: ""
      }}
    >
      
      {/* Main Footer Content */}
      <div className="border-t border-border px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
          <div className="mb-6 inline-flex items-center justify-center  rounded-xl p-4 border border-white/40 shadow-2xl shadow-white/10 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300">
             <Image 
             src={'/logo.png'}
             alt="Panasea Healthcare Logo"
             width={170}
             height={40}
             className="drop-shadow-sm"
            />
          </div>
            
            <p className="mt-4 max-w-xs  text-left text-sm leading-relaxed text-muted-foreground font-light">
              Your trusted partner in pharmaceutical distribution and medical
              supply-delivering quality, reliability, and care across India and
              beyond.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-4 text-sm font-regular tracking-widest uppercase text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-4 text-sm font-regular tracking-widest uppercase text-foreground">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="mb-4 text-sm font-regular tracking-widest uppercase text-foreground">
              Contact Us
            </h4>
            <ul className="space-y-3">
              {footerLinks.service.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              
            </ul>
            
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground font-light">
            © 2026 Panasea Healthcare. All rights reserved.{" "}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground font-light"
            >
              Trusted Healthcare Distribution
            </Link>
           
          </div>
        </div>
      </div>
    </footer>
  );
}
