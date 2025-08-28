import Contact from "@/Components/Contact";
import FAQSection from "@/Components/FAQSection";
import Gallery from "@/Components/Gallery";
import Hero from "@/Components/Hero";
import HomePresentation from "@/Components/HomePresentation";
import Testimonials from "@/Components/Testimonials";

export default function Home() {
  return (
   <>
      <Hero/>
      <HomePresentation/>
      <Gallery/>
      <Testimonials/>
      <Contact/>
      <FAQSection/>
   </>
  );
}
