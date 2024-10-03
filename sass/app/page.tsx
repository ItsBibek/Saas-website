import Image from "next/image";
import VisualEditorSection from "./component/visualSection";
import HeroSection from "./component/heroSection";
import TestimonialsSection from "./component/testimonial";
import Footer from "./component/footer";

export default function Home() {
  return (
    <main className="bg-[#0c0c14] text-white">
    <HeroSection />
    
    <section id="visualSection" className="py-16">
      <VisualEditorSection />
    </section>
    
    <section id="testimonialSection" className="py-16">
      <TestimonialsSection />
    </section>
    
    <footer id="footerSection" className="py-16">
      <Footer />
    </footer>
  </main>
  );
}
