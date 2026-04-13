"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Products", href: "/#products" },
  { label: "Why Choose Us", href: "/#why-choose-us" },
];

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const curr = window.scrollY;
          setShow(curr < 80 || curr < lastScroll);
          setLastScroll(curr);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-md flex items-center justify-center"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl px-8 py-10 flex flex-col items-center gap-8 min-w-[80vw] max-w-xs"
            onClick={(e) => e.stopPropagation()}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-lg font-medium text-[#212C5F] hover:text-black transition"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <button className="mt-4 w-full border border-[#212C5F] text-[#212C5F] px-6 py-3 rounded-lg hover:bg-[#212C5F]/10 transition">
              Contact
            </button>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className=" sm:px-8 md:px-12 lg:px-20 py-3 md:py-4 flex items-center justify-between 
        bg-white/10 backdrop-blur-3xl border-b border-white/20">

          {/* Logo */}
          <Link href={'/'} className=" text-2xl font-bold ">
           <Image 
                src="/logo.png"
                alt="Panasea Logo"
                width={160}
                height={30}
                className="object-contain"
                />
          </Link>

          {/* Links */}
          <div className="hidden md:flex gap-8 mx-auto">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-medium text-gray-700 hover:text-[#212C5F] transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Outline Button */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              className="border border-[#212C5F] text-[#212C5F] px-6 py-2 rounded-lg 
              hover:bg-[#212C5F]/10 transition"
            >
              Contact
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/20 transition"
            onClick={() => setMobileOpen(true)}
          >
            <svg
              width="26"
              height="26"
              fill="none"
              stroke="#212C5F"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}