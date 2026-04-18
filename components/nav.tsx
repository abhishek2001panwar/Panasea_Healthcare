"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
      <motion.div
        whileHover={{ y: -3, scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 12 }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="hidden md:block"
      >
        <Link
          href="#contact"
          className="group relative inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #212C5F 0%, #4A5B9F 100%)",
            boxShadow: "0 4px 20px rgba(33,44,95,0.25)",
          }}
        >
          {/* Animated glow on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-lg"
            style={{
              background: "linear-gradient(135deg, #4A5B9F 0%, #7b8ec8 100%)",
            }}
            transition={{ opacity: { duration: 0.3 } }}
          />
          
          {/* Shimmer sweep on hover */}
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
              backgroundSize: "200% 100%",
              animation: "shimmer-sweep 1.6s linear infinite",
            }}
          />
          <span className="relative z-10">Get In Touch</span>
          <motion.svg
            className="relative z-10 w-3.5 h-3.5"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </motion.svg>
        </Link>
      </motion.div>

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
      {/* Hamburger / Close - always on top */}
      <button
        onClick={() => setOpen(!open)}
        className="relative z-[60] flex flex-col justify-center items-center w-10 h-10 gap-[5px] group md:hidden"
        aria-label="Toggle menu"
      >
        <span
          className={`block h-[1.5px] transition-all duration-300 origin-center ${
            open ? "bg-[#212C5F] w-5 rotate-45 translate-y-[6.5px]" : "bg-white w-5"
          }`}
        />
        <span
          className={`block h-[1.5px] bg-white transition-all duration-300 ${
            open ? "w-0 opacity-0" : "w-3.5 self-end"
          }`}
        />
        <span
          className={`block h-[1.5px] transition-all duration-300 origin-center ${
            open ? "bg-[#212C5F] w-5 -rotate-45 -translate-y-[6.5px]" : "bg-white w-5"
          }`}
        />
      </button>

      {/* Full-screen overlay - Light Theme */}
      <div
        className={`fixed inset-0 top-0 left-0 w-full h-screen z-50 bg-white flex flex-col transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] overflow-hidden ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {/* Subtle background elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#4A5B9F]/3 rounded-full blur-3xl -mr-40 -mt-40 opacity-30" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#212C5F]/3 rounded-full blur-3xl -ml-40 -mb-40 opacity-20" />
        
        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-start px-6 py-6 border-b border-gray-200/50">
          <Image
            src="/logo.png"
            alt="Panasea Logo"
            width={140}
            height={30}
            className="object-contain"
          />
        </div>

        {/* Nav links with CTA - Centered */}
        <nav className="relative z-10 flex-1 flex flex-col justify-center items-center px-6 min-h-[calc(100vh-200px)] text-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group transition-all duration-300"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(12px)",
                transition: `opacity 0.5s ease ${120 + i * 70}ms, transform 0.5s ease ${120 + i * 70}ms`,
              }}
            >
              <span className="text-4xl sm:text-5xl font-regular text-gray-900 tracking-tighter leading-relaxed uppercase group-hover:text-[#212C5F] transition-colors duration-300">
                {link.label}
              </span>
            </a>
          ))}
          
          {/* Get In Touch Button - Part of nav links */}
          <motion.div
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 12 }}
            className="flex justify-center w-full pt-4"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(12px)",
              transition: `opacity 0.5s ease ${120 + NAV_LINKS.length * 70}ms, transform 0.5s ease ${120 + NAV_LINKS.length * 70}ms`,
            }}
          >
            <button
              onClick={() => {
                setOpen(false);
                router.push("/#contact");
              }}
              className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-xl text-xs font-semibold text-white overflow-hidden uppercase tracking-widest"
              style={{
                background: "linear-gradient(135deg, #212C5F 0%, #4A5B9F 100%)",
                boxShadow: "0 4px 20px rgba(33,44,95,0.25)",
              }}
            >
              {/* Animated glow on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-lg"
                style={{
                  background: "linear-gradient(135deg, #4A5B9F 0%, #7b8ec8 100%)",
                }}
                transition={{ opacity: { duration: 0.3 } }}
              />
              
              {/* Shimmer sweep on hover */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer-sweep 1.6s linear infinite",
                }}
              />
              <span className="relative z-10">Get In Touch</span>
              <motion.svg
                className="relative z-10 w-3.5 h-3.5"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </button>
          </motion.div>
        </nav>

     
      </div>
    </div>
  );
}