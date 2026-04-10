"use client";
import React, { useEffect } from "react";

const PanaseaHealthcareHero: React.FC = () => {
  useEffect(() => {
    const word = "Panasea";
    const bigWordEl = document.getElementById("bigWord");
    if (bigWordEl && bigWordEl.childNodes.length === 0) {
      word.split("").forEach((letter, i) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = i * 0.08 + "s";
        bigWordEl.appendChild(span);
      });
    }

    const heroSection = document.getElementById("heroSection");
    const heroCenter = document.getElementById("heroCenter");
    const leftCol = document.getElementById("leftCol");
    const rightCol = document.getElementById("rightCol");
    const bentoGrid = document.getElementById("bentoGrid");
    const wordOverlay = document.getElementById("wordOverlay");
    const heroContent = document.getElementById("heroContent");

    const isMobile = () => window.innerWidth <= 900;

    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    function onScroll() {
      if (
        !heroSection ||
        !heroCenter ||
        !leftCol ||
        !rightCol ||
        !bentoGrid ||
        !wordOverlay ||
        !heroContent
      )
        return;
      if (isMobile()) {
        wordOverlay.style.opacity = "0";
        heroContent.style.opacity = "1";
        return;
      }
      const rect = heroSection.getBoundingClientRect();
      const scrollableHeight = window.innerHeight * 2;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
      const textOpacity = Math.max(0, 1 - progress / 0.2);
      const imgProgress = Math.max(0, Math.min(1, (progress - 0.2) / 0.8));
      const centerW = lerp(100, 56, imgProgress);
      const sideW = lerp(0, 22, imgProgress);
      const sideOpacity = imgProgress;
      const sideLeft = lerp(-100, 0, imgProgress);
      const sideRight = lerp(100, 0, imgProgress);
      const br = lerp(0, 20, imgProgress);
      const gap = lerp(0, 14, imgProgress);
      const pad = lerp(0, 14, imgProgress);
      const padB = lerp(0, 64, imgProgress);
      const contentOpacity = Math.max(0, (imgProgress - 0.3) / 0.7);

      // Add padding top animation
      const padTop = lerp(0, 40, imgProgress);

      bentoGrid.style.gap = gap + "px";
      bentoGrid.style.padding = pad + "px";
      bentoGrid.style.paddingTop = padTop + "px";
      bentoGrid.style.paddingBottom = pad + padB + "px";
      heroCenter.style.width = centerW + "%";
      heroCenter.style.borderRadius = br + "px";
      heroContent.style.opacity = contentOpacity.toString();
      leftCol.style.width = sideW + "%";
      leftCol.style.opacity = sideOpacity.toString();
      leftCol.style.transform = `translateX(${sideLeft}%)`;
      leftCol.style.gap = gap + "px";
      leftCol.querySelectorAll(".side-card").forEach((c) => {
        (c as HTMLElement).style.borderRadius = br + "px";
      });
      rightCol.style.width = sideW + "%";
      rightCol.style.opacity = sideOpacity.toString();
      rightCol.style.transform = `translateX(${sideRight}%)`;
      rightCol.style.gap = gap + "px";
      rightCol.querySelectorAll(".side-card").forEach((c) => {
        (c as HTMLElement).style.borderRadius = br + "px";
      });
      wordOverlay.style.opacity = textOpacity.toString();
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <style>{`
        .word-overlay {
          background: linear-gradient(135deg, rgba(0,0,0,0.55), rgba(0,0,0,0.45)), 
                      url('https://images.unsplash.com/photo-1674702727317-d29b2788dc4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fGhlYWx0aGNhcmUlMjBwcm9mZXNzaW9uYWxzJTIwbWluaW1hbHxlbnwwfHwwfHx8MA%3D%3D') 
                      center/cover fixed;
          background-size: cover;
          background-position: center;
        }
        .big-word {
          color: #ffffff;
          font-weight: 400;
          font-size: clamp(3rem, 15vw, 10rem);
          letter-spacing: -0.02em;
        }
        .big-word span {
          display: inline-block;
          animation: slideUp 0.8s ease-out forwards;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 768px) {
          .word-overlay {
            background: linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.5)), 
                        url('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1400') 
                        center/cover;
            background-attachment: scroll;
          }
          .big-word {
            font-size: clamp(2rem, 12vw, 4rem);
          }
        }
      `}</style>
      <section className="hero-scroll-section" id="heroSection">
        <div className="hero-sticky">
          <div
            className="bento-grid"
            id="bentoGrid"
            style={{ gap: 0, padding: 0, paddingTop: 0 }}
          >
            <div
              className="side-col"
              id="leftCol"
              style={{
                width: "0%",
                opacity: 0,
                transform: "translateX(-100%)",
              }}
            >
              <div className="side-card">
                <img
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800"
                  alt="Medical lab"
                />
              </div>
              <div className="side-card">
                <img
                  src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=800"
                  alt="Healthcare professional"
                />
              </div>
            </div>
            <div
              className="hero-center"
              id="heroCenter"
              style={{ width: "100%", height: "100%", borderRadius: 0 }}
            >
              <div
                className="hero-content-inner"
                id="heroContent"
                style={{ opacity: 0 }}
              >
                <div className="hero-main-card">
                  <div className="hero-left-panel">
                    <div className="eyebrow">
                      <span className="eyebrow-text">
                        India's trusted healthcare distributor
                      </span>
                    </div>
                    <h1 className="hero-headline">
                      Healthcare <em>Supply</em>
                      <br />
                      You Can Count On
                    </h1>
                    <p className="hero-desc">
                      From pharmaceuticals and surgical equipment to diagnostics
                      and medical disposables-Panasea Healthcare delivers
                      quality-assured medical products to hospitals, clinics,
                      and pharmacies across India and beyond.
                    </p>
                    <div className="hero-actions">
                      <button className="btn-primary">
                        Explore Our Products
                      </button>
                      <button className="btn-secondary">Partner With Us</button>
                    </div>
                  </div>
                  <div className="hero-right-panel">
                    <div className="cert-badge">
                      <div className="cert-dot"></div>
                      Certified Distributor
                    </div>
                    <div className="stat-item">
                      <div className="stat-num">500+</div>
                      <div className="stat-label">Healthcare Partners</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-num">5,000+</div>
                      <div className="stat-label">Products in Catalog</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-num">98%</div>
                      <div className="stat-label">On-Time Delivery Rate</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-num">24/7</div>
                      <div className="stat-label">Customer Support</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="word-overlay" id="wordOverlay">
                <h2 className="big-word" id="bigWord"></h2>
              </div>
            </div>
            <div
              className="side-col"
              id="rightCol"
              style={{ width: "0%", opacity: 0, transform: "translateX(100%)" }}
            >
              <div className="side-card">
                <img
                  src="https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?q=80&w=800"
                  alt="Pharmacy shelves"
                />
              </div>
              <div className="side-card">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800"
                  alt="Medical equipment"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-space"></div>
      </section>
      {/* <section className="tagline-section">
        <p className="tagline-text">
          Delivering quality-assured medical supplies to every corner of India-reliably, efficiently, and with care.
        </p>
        <p className="tagline-sub">Panasea Healthcare · Est. 2008</p>
      </section> */}
    </>
  );
};

export default PanaseaHealthcareHero;
