import AboutSection from "./components/AboutSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import ServiceSection from "./components/ServiceSection";
import ToursSection from "./components/Tours/ToursSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ToursSection />
      <FooterSection />
    </>
  );
}

export default App;
