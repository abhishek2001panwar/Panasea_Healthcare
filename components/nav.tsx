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
      className={`fixed  top-0 left-0 w-full z-50 px-4 sm:px-6 md:px-10 py-3 md:py-4 flex items-center justify-between transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } `}
    >
      {/* Logo */}
           <Image 
                src="/logo.png"
                alt="Panasea Logo"
                width={160}
                height={30}
                onClick={()=>{
                    router.push("/")
                }}
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
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div className="md:hidden">
      {/* Hamburger / Close — always on top */}
      <button
        onClick={() => setOpen(!open)}
        className="relative z-[60] flex flex-col justify-center items-center w-10 h-10 gap-[5px] group"
        aria-label="Toggle menu"
      >
        <span
          className={`block h-[1.5px] bg-white transition-all duration-300 origin-center ${
            open ? "w-5 rotate-45 translate-y-[6.5px]" : "w-5"
          }`}
        />
        <span
          className={`block h-[1.5px] bg-white transition-all duration-300 ${
            open ? "w-0 opacity-0" : "w-3.5 self-end"
          }`}
        />
        <span
          className={`block h-[1.5px] bg-white transition-all duration-300 origin-center ${
            open ? "w-5 -rotate-45 -translate-y-[6.5px]" : "w-5"
          }`}
        />
      </button>

      {/* Full-screen overlay */}
      <div
        className={`fixed inset-0 top-0 left-0 w-full h-screen z-50 bg-gradient-to-br from-[#0a0f28] via-[#141d3f] to-[#050810] flex flex-col transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] overflow-hidden ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {/* Premium background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4A5B9F]/5 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#212C5F]/10 rounded-full blur-3xl -ml-32 -mb-32" />
        
        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-white/5 bg-gradient-to-r from-white/3 to-[#4A5B9F]/5 backdrop-blur-md">
          <Image
            src="/logo.png"
            alt="Panasea Logo"
            width={120}
            height={26}
            className="object-contain"
          />
          {/* Spacer for close btn mirror */}
          <div className="w-10" />
        </div>

        {/* Nav links */}
        <nav className="relative z-10 flex-1 flex flex-col justify-center px-6 min-h-[calc(100vh-200px)]">
          {NAV_LINKS.map((link, i) => (
                <a
              key={i}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between py-[18px] border-b border-white/5 last:border-none hover:bg-white/3 px-3 rounded-lg transition-all duration-300"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(12px)",
                transition: `opacity 0.5s ease ${120 + i * 70}ms, transform 0.5s ease ${120 + i * 70}ms`,
              }}
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] text-white/25 tracking-[0.08em] font-normal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[26px] sm:text-[30px] font-medium text-white tracking-tight leading-none group-hover:text-white/60 transition-colors duration-200">
                  {link.label}
                </span>
              </div>
              <div className="w-8 h-8 rounded-full border border-white/[0.15] flex items-center justify-center text-white/40 text-xs group-hover:border-white/40 group-hover:text-white/80 transition-all duration-200">
                →
              </div>
            </a>
          ))}
        </nav>

        {/* Bottom section */}
        <div
          className="relative z-10 px-6 pb-10 pt-5 border-t border-white/5 bg-gradient-to-r from-white/2 to-[#4A5B9F]/3 backdrop-blur-sm flex flex-col gap-4"
          style={{
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0)" : "translateY(10px)",
            transition: `opacity 0.5s ease 400ms, transform 0.5s ease 400ms`,
          }}
        >
          <button
            onClick={() => {
              setOpen(false);
              router.push("/#contact");
            }}
            className="w-full bg-gradient-to-r from-[#212C5F] via-[#4A5B9F] to-[#96C5FF]/30 text-white py-[14px] rounded-full text-[11px] font-semibold tracking-[0.14em] uppercase hover:shadow-2xl hover:shadow-[#4A5B9F]/50 hover:scale-105 active:scale-[0.98] transition-all duration-200 border border-[#96C5FF]/20"
          >
            Get in Touch
          </button>

          {/* Social links row */}
          <div className="flex justify-center gap-3">
            {["in", "tw", "ig"].map((s) => (
              <div
                key={s}
                className="w-8 h-8 rounded-full border border-[#96C5FF]/30 flex items-center justify-center text-[#96C5FF]/60 text-[11px] hover:border-[#96C5FF] hover:text-[#96C5FF] hover:bg-[#96C5FF]/15 hover:shadow-lg hover:shadow-[#96C5FF]/20 transition-all duration-300 cursor-pointer"
              >
                {s}
              </div>
            ))}
          </div>

          <p className="text-center text-[10px] text-white/30 tracking-[0.1em] uppercase font-medium">
            Your trusted partner
          </p>
        </div>
      </div>
    </div>
  );
}