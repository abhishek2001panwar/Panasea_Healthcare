"use client";
import { Link } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Products", href: "/#products" },
  { label: "Why Choose Us", href: "/#why-choose-us" },
];

// 🔹 Navbar Component
export function NavbarNew() {
    const router = useRouter();
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        setShow(false); // scroll down → hide
      } else {
        setShow(true); // scroll up → show
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-6 md:px-10 py-3 md:py-4 flex items-center justify-between transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } `}
    >
      {/* Logo */}
           <Image 
                src="/logo.png"
                alt="Panasea Logo"
                width={160}
                height={30}
                className="object-contain"
                />
         


      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm tracking-wide text-white uppercase">
        {NAV_LINKS.map((link, i) => (
          <a key={i} href={link.href} className="hover:opacity-70 transition-opacity text-white">
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <button onClick={()=>{
        router.push('/#contact')
      }} className="hidden md:block bg-black text-white px-4 lg:px-5 py-2 rounded-full text-xs lg:text-sm hover:bg-white hover:text-black transition">
        GET IN TOUCH
      </button>

      {/* Mobile Menu Button */}
      <MobileMenu />
    </div>
  );
}

// 🔹 Mobile Menu
function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button 
        onClick={() => setOpen(!open)} 
        className="text-white text-2xl p-2 hover:opacity-70 transition-opacity"
        aria-label="Toggle menu"
      >
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg flex flex-col items-center py-8 gap-6 animate-in fade-in duration-300">
          {NAV_LINKS.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-xs sm:text-sm uppercase text-white hover:opacity-70 transition-opacity"
            >
              {link.label}
            </a>
          ))}

          <button className="bg-white text-black px-6 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-gray-100 transition mt-2">
            GET IN TOUCH
          </button>
        </div>
      )}
    </div>
  );
}
