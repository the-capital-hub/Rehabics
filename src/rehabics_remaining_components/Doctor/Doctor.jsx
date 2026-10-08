import { motion } from "motion/react";
import { FiAward, FiArrowUpRight } from "react-icons/fi";
import "./Doctor.css";

function Doctor() {
  return (
    <section className="doctorSection" id="doctor">
      <div className="doctorContainer">
        <motion.div
          className="doctorContent"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <div className="doctorLabel">
            <span className="doctorLabelLine" />
            Founder and Director
          </div>

          <h2>
            Dr. Archita
            <span>Tiwari</span>
          </h2>

          <p className="doctorRole">
            BPT, The Oxford College of Physiotherapy, Bengaluru
          </p>

          <p>
            Dr. Archita Tiwari leads Rehabics Physiotherapy with
            a focus on personalised rehabilitation, sports injuries,
            musculoskeletal care, spine care and women’s health.
          </p>

          <p>
            Her approach combines clinical experience, education
            and practical movement based rehabilitation around
            each patient’s personal and professional goals.
          </p>

          <div className="doctorHighlights">
            <div>
              <FiAward />
              <span>Experienced Physiotherapist</span>
            </div>
            <div>
              <FiAward />
              <span>Specialised Rehabilitation Care</span>
            </div>
          </div>

          <a href="/about" className="doctorLink">
            <span>Meet Dr. Archita</span>
            <FiArrowUpRight />
          </a>
        </motion.div>

        <motion.div
          className="doctorVisual"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <div className="doctorImage" />
          <div className="doctorImageCaption">
            <span>Rehabics Physiotherapy</span>
            <strong>Bengaluru</strong>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Doctor;
