
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./page/Home/Home";
import AboutPage from "./page/About/AboutPage";
import Contact from "./page/Contact/ContactPage";
import InstagramFeed from "./page/InstagramFeed/InstagramFeed";
import ServicesPage from "./page/Services/ServicesPage";
import AppointmentPage from "./page/Appointment/AppointmentPage";
import ServiceDetail from "./page/ServiceDetail/ServiceDetail";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";


function App() {
  return (
    <>
    <ScrollToTop/>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/instagram-feed" element={<InstagramFeed />} />
        
        <Route path="/services" element={<ServicesPage />} />
         <Route path="/services/:slug" element={<ServiceDetail />} />

        
        <Route path="/appointment" element={<AppointmentPage />} />
        </Routes>
      </main>

      <Footer />

    </>
  );
}

export default App;
