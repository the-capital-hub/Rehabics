
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./page/Home/Home";
import AboutPage from "./page/About/AboutPage";
import Contact from "./page/Contact/ContactPage";
import InstagramFeed from "./page/InstagramFeed/InstagramFeed";
import ServicesPage from "./page/Services/ServicesPage";
import AppointmentPage from "./page/Appointment/AppointmentPage";


function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/instagram-feed" element={<InstagramFeed />} />
        
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
