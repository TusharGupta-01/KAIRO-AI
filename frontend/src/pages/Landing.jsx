import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import WhyKairo from "../components/landing/WhyKairo";
import HowItWorks from "../components/landing/HowItWorks";
import Features from "../components/landing/Features";
import ProductPreview from "../components/landing/ProductPreview";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

export default function Landing() {
  return (
    <div className="bg-[#fafafa]">

      <Navbar />

      <Hero />

      <WhyKairo />
      <HowItWorks />
      <Features />
      <ProductPreview />
      <CTA />
      <Footer />

    </div>
  );
}