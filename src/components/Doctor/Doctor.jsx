
import { motion } from "motion/react";
import {
  FiActivity,
  FiArrowUpRight,
  FiAward,
  FiHeart,
  FiCheckCircle,
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
        <motion.div
          className="doctorContent"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="doctorHeaderTop">
            <div className="doctorLabel">
              <span className="doctorLabelDot" />
              <span>Founder And Director</span>
            </div>

            <span className="doctorCount">Rehabics Leadership</span>
          </div>

          <div className="doctorHeading">
            <span className="doctorEyebrow">Meet Your Physiotherapist</span>

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
              Dr. Archita Tiwari leads Rehabics Physiotherapy with a focus on
              personalised rehabilitation, sports injuries, musculoskeletal
              care, spine care and women’s health.
            </p>

            <p>
              Her approach brings together clinical experience, patient
              education and practical movement based rehabilitation, with care
              tailored to individual needs and everyday goals.
            </p>
          </div>

          <div className="doctorHighlights">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="doctorHighlight"
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
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

                  <FiCheckCircle className="doctorHighlightCheck" />
                </motion.div>
              );
            })}
          </div>

          <div className="doctorActions">
            <Link to="/about" className="doctorLink">
              <span>Meet Dr. Archita</span>
              <span className="doctorLinkIcon">
                <FiArrowUpRight />
              </span>
            </Link>

            <span className="doctorActionNote">
              Personalised care, centred on you
            </span>
          </div>
        </motion.div>

        <motion.div
          className="doctorVisual"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="doctorImageWrap">
            <img
              src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Physiotherapy professional in a clinical setting"
              className="doctorImage"
              loading="lazy"
            />

            <div className="doctorImageOverlay" />

            <div className="doctorImageTop">
              <span>Founder And Director</span>
              <span className="doctorImageNumber">01</span>
            </div>

            <div className="doctorImageAccent" />

            <div className="doctorImageBottom">
              <span>Rehabics Physiotherapy</span>
              <strong>Bengaluru</strong>
            </div>
          </div>
{/* 
          <motion.div
            className="doctorFloatingCard"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <span className="doctorFloatingIcon">
              <FiHeart />
            </span>

            <div>
              <strong>Care With Purpose</strong>
              <span>Focused on your movement goals</span>
            </div>
          </motion.div> */}

          <div className="doctorImageCorner" />
        </motion.div>
      </div>
    </section>
  );
}

export default Doctor;
