import AboutSection from "./components/Abouts/AboutSection";
import FooterSection from "./components/Footer/FooterSection";
import HeroSection from "./components/Hero/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import ServiceSection from "./components/Services/ServiceSection";
import ToursSection from "./components/Tours/TourSection";

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
