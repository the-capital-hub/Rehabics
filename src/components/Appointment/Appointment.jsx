import { motion } from "motion/react";
import {
  FiArrowUpRight,
  FiPhone,
  FiActivity,
} from "react-icons/fi";
import "./Appointment.css";

function Appointment() {
  return (
    <section className="appointmentSection" id="appointment">
      <div className="appointmentGlow appointmentGlowOne" />
      <div className="appointmentGlow appointmentGlowTwo" />

      <div className="appointmentContainer">

        <motion.div
          className="appointmentTop"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="appointmentLabel">
            <span className="appointmentLabelDot" />
            <span>Start Your Recovery</span>
          </div>

          <span className="appointmentNumber">
            Rehabics Physiotherapy
          </span>
        </motion.div>

        <motion.div
          className="appointmentMain"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="appointmentHeading">
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
              Speak with the Rehabics team and take the next step
              towards personalised physiotherapy care.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="appointmentActions"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <a
            href="#contact"
            className="appointmentPrimary"
          >
            <span>Make An Appointment</span>

            <span className="appointmentPrimaryIcon">
              <FiArrowUpRight />
            </span>
          </a>

          <a
            href="tel:+919535579229"
            className="appointmentSecondary"
          >
            <span className="appointmentPhoneIcon">
              <FiPhone />
            </span>

            <span>
              <small>Call Rehabics</small>
              <strong>+91 9535579229</strong>
            </span>
          </a>
        </motion.div>

        <div className="appointmentBottom">
          <span>Personalised Care</span>
          <span>Expert Guidance</span>
          <span>Better Movement</span>
        </div>

      </div>
    </section>
  );
}

export default Appointment;