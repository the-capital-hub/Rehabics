
import { motion } from "motion/react";
import {
  FiArrowUpRight,
  FiPhone,
  FiActivity,
  FiHeart,
  FiCheckCircle,
} from "react-icons/fi";
import "./Appointment.css";

const benefits = [
  "Personalised Care",
  "Expert Guidance",
  "Better Movement",
];

function Appointment() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="appointmentSection" id="appointment">
      <div className="appointmentGlow appointmentGlowOne" />
      <div className="appointmentGlow appointmentGlowTwo" />
      <div className="appointmentGridPattern" />

      <div className="appointmentContainer">
        <motion.div
          className="appointmentTop"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <div className="appointmentLabel">
            <span className="appointmentLabelDot" />
            <span>Start Your Recovery</span>
          </div>

          <span className="appointmentNumber">
            <FiHeart />
            Rehabics Physiotherapy
          </span>
        </motion.div>

        <motion.div
          className="appointmentMain"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          <div className="appointmentHeading">
            <span className="appointmentEyebrow">
              Your Movement Matters
            </span>

            <h2>
              Ready to move
              <span>better?</span>
            </h2>
          </div>

          <div className="appointmentSide">
            <div className="appointmentIcon">
              <FiActivity />
            </div>

            <p>
              Every recovery journey starts with a conversation. Connect
              with the Rehabics team to discuss your needs and explore
              personalised physiotherapy care.
            </p>

            <span className="appointmentSideNote">
              <FiCheckCircle />
              Care centred around your goals
            </span>
          </div>
        </motion.div>

        <motion.div
          className="appointmentActions"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.16 }}
        >
          <button
            type="button"
            onClick={scrollToContact}
            className="appointmentPrimary"
          >
            <span>Make An Appointment</span>

            <span className="appointmentPrimaryIcon">
              <FiArrowUpRight />
            </span>
          </button>

          <a
            href="tel:+919535579229"
            className="appointmentSecondary"
          >
            <span className="appointmentPhoneIcon">
              <FiPhone />
            </span>

            <span className="appointmentPhoneText">
              <small>Call Rehabics</small>
              <strong>+91 9535579229</strong>
            </span>

            <FiArrowUpRight className="appointmentPhoneArrow" />
          </a>
        </motion.div>

        <div className="appointmentBottom">
          {benefits.map((benefit, index) => (
            <div className="appointmentBenefit" key={benefit}>
              <FiCheckCircle />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Appointment;
