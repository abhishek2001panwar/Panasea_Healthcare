import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import  {FeaturedProductsSection} from "@/components/sections/productsection";
import { TechnologySection } from "@/components/sections/tech";
import { GallerySection } from "@/components/sections/gallery";
import { CollectionSection } from "@/components/sections/collection-section";
import { EditorialSection } from "@/components/sections/editorial-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FooterSection } from "@/components/sections/footer-section";
import {Hero} from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services-section";
import AboutSection from "@/components/sections/aboutsection";
import ContactSection from "@/components/sections/contact";
import Navbar from "@/components/navbar";
import PanaseaHealthcareHero from "@/components/sections/panasea-healthcare-hero";
import { HeroSections } from "@/components/sections/herosection";
import { WhyChooseUs } from "@/components/sections/why";
import { Products } from "@/components/sections/product";
import Tryhero from "@/components/sections/tryhero";
import CTA from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* <Header /> */}
      {/* <HeroSection /> */}
      <Tryhero />
     {/* <Hero /> */}
      {/* <PhilosophySection /> */}
      {/* <HeroSections /> */}
{/* <PanaseaHealthcareHero /> */}
      {/* <Hero /> */}
      <AboutSection />
      {/* <FeaturedProductsSection /> */}
      <Products />
      {/* <ServicesSection /> */}
      {/* <FeaturedProductsSection /> */}
      <TechnologySection />
     
      {/* <GallerySection /> */}
      {/* <GallerySection /> */}
      {/* <CollectionSection /> */}
      <WhyChooseUs />
      <CTA />
      {/* <EditorialSection /> */}
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <FooterSection />
    </main>
  );
}
