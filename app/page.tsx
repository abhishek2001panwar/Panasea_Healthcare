import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import  FeaturedProductsSection from "@/components/sections/featured-products-section";
import { TechnologySection } from "@/components/sections/technology-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { CollectionSection } from "@/components/sections/collection-section";
import { EditorialSection } from "@/components/sections/editorial-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FooterSection } from "@/components/sections/footer-section";
import Hero from "@/components/sections/heronew";
import { ServicesSection } from "@/components/sections/services-section";
import AboutSection from "@/components/sections/aboutsection";
import ContactSection from "@/components/sections/contact";
import Navbar from "@/components/navbar";
import PanaseaHealthcareHero from "@/components/sections/panasea-healthcare-hero";
import { HeroSections } from "@/components/sections/herosection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* <Header /> */}
      {/* <HeroSection /> */}
     
      <HeroSections />
{/* <PanaseaHealthcareHero /> */}
      {/* <Hero /> */}
      <ServicesSection />
      <AboutSection />
      {/* <PhilosophySection /> */}
      <FeaturedProductsSection />
      <TechnologySection />
      {/* <GallerySection /> */}
      <CollectionSection />
      {/* <EditorialSection /> */}
      <ContactSection />
      <FooterSection />
    </main>
  );
}
