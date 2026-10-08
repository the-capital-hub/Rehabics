import About from "./components/About/About";
import Appointment from "./components/Appointment/Appointment";
import Conditions from "./components/Conditions/Conditions";
import Doctor from "./components/Doctor/Doctor";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Locations from "./components/Locations/Locations";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import WhyRehabics from "./components/WhyRehabics/WhyRehabics";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero/>
        <About/>
        <Services/>
        <Conditions/>
        <WhyRehabics/>
        {/* <Doctor/> */}
        <Testimonials/>
        <Locations/>
        <Appointment/>
        
      </main>
      <Footer/>
    </>
  );
}

export default App;