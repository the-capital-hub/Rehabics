import { motion } from "motion/react";
import { FiArrowUpRight, FiPhone } from "react-icons/fi";
import "./Appointment.css";

function Appointment() {
  return (
    <section className="appointmentSection">
      <div className="appointmentContainer">
        <motion.div
          className="appointmentContent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div className="appointmentLabel">
            <span className="appointmentLabelLine" />
            Start Your Recovery
          </div>

          <h2>
            Ready to move
            <span>better?</span>
          </h2>

          <p>
            Speak with the Rehabics team and take the next step
            towards personalised physiotherapy care.
          </p>

          <div className="appointmentActions">
            <a href="/contact" className="appointmentPrimary">
              <span>Make An Appointment</span>
              <FiArrowUpRight />
            </a>

            <a href="tel:+919535579229" className="appointmentSecondary">
              <FiPhone />
              <span>+91 9535579229</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Appointment;
