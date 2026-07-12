import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import MarketStrip from "@/components/MarketStrip";
import Pricing from "@/components/Pricing";
import TestimonialsFAQ from "@/components/TestimonialsFAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <MarketStrip />
      <Pricing />
      <TestimonialsFAQ />
      <Footer />
    </main>
  );
}
