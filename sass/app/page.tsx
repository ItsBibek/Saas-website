import Image from "next/image";
import VisualEditorSection from "./component/visualSection";
import HeroSection from "./component/heroSection";
import TestimonialsSection from "./component/testimonial";
import Footer from "./component/footer";

export default function Home() {
  return (
    <main>
      <HeroSection/> 
      <VisualEditorSection />
      <TestimonialsSection/>
      <Footer/>
    </main>
  );
}
