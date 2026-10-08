import { motion } from "motion/react";
import {
  FiActivity,
  FiArrowUpRight,
  FiAward,
  FiHeart,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Doctor.css";

const highlights = [
  {
    icon: FiAward,
    number: "01",
    title: "Experienced Physiotherapist",
  },
  {
    icon: FiActivity,
    number: "02",
    title: "Specialised Rehabilitation Care",
  },
  {
    icon: FiHeart,
    number: "03",
    title: "Patient Focused Approach",
  },
];

function Doctor() {
  return (
    <section className="doctorSection" id="doctor">
      <div className="doctorContainer">

        {/* LEFT CONTENT */}
        <motion.div
          className="doctorContent"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <div className="doctorHeaderTop">
            <div className="doctorLabel">
              <span className="doctorLabelDot" />
              <span>Founder And Director</span>
            </div>

            <span className="doctorCount">
              Rehabics Leadership
            </span>
          </div>

          <div className="doctorHeading">
            <h2>
              Dr. Archita
              <span>Tiwari</span>
            </h2>

            <p className="doctorRole">
              BPT, The Oxford College of Physiotherapy, Bengaluru
            </p>
          </div>

          <div className="doctorDescription">
            <p>
              Dr. Archita Tiwari leads Rehabics Physiotherapy with a focus
              on personalised rehabilitation, sports injuries,
              musculoskeletal care, spine care and women’s health.
            </p>

            <p>
              Her approach combines clinical experience, education and
              practical movement based rehabilitation around each patient’s
              personal and professional goals.
            </p>
          </div>

          <div className="doctorHighlights">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="doctorHighlight"
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <div className="doctorHighlightIcon">
                    <Icon />
                  </div>

                  <div className="doctorHighlightText">
                    <span>{item.number}</span>
                    <strong>{item.title}</strong>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <Link to="/about" className="doctorLink">
            <span>Meet Dr. Archita</span>

            <span className="doctorLinkIcon">
              <FiArrowUpRight />
            </span>
          </Link>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="doctorVisual"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <div className="doctorImageWrap">

            <img
              src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Physiotherapist at Rehabics"
              className="doctorImage"
            />

            <div className="doctorImageOverlay" />

            <div className="doctorImageTop">
              <span>Founder And Director</span>
              <span>01</span>
            </div>

            <div className="doctorImageBottom">
              <span>Rehabics Physiotherapy</span>
              <strong>Bengaluru</strong>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Doctor;