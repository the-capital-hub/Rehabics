
import { motion } from "motion/react";

import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Conditions from "../../components/Conditions/Conditions";
import WhyRehabics from "../../components/WhyRehabics/WhyRehabics";
import OurTeam from "../../components/OurTeam/OurTeam";
import MarketingPartner from "../../components/MarketingPartner/MarketingPartner";
import Doctor from "../../components/Doctor/Doctor";
import Testimonials from "../../components/Testimonials/Testimonials";
import Locations from "../../components/Locations/Locations";
import Appointment from "../../components/Appointment/Appointment";

function Home() {
  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="conditions">
          <Conditions />
        </section>

        <section id="why-rehabics">
          <WhyRehabics />
        </section>

        <section id="team">
          <OurTeam />
        </section>

        <section id="partners">
          <MarketingPartner />
        </section>

        <section id="doctor">
          <Doctor />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="locations">
          <Locations />
        </section>

        <section id="appointment">
          <Appointment />
        </section>
      </main>
    </motion.div>
  );
}

export default Home;
