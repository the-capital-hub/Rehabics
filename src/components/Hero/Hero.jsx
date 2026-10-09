
import { motion } from "motion/react";
import {
  FiActivity,
  FiArrowDown,
  FiArrowUpRight,
} from "react-icons/fi";
import "./Hero.css";

const focusAreas = [
  "Sports Injuries",
  "Spine Care",
  "Women's Health",
  "Muscle and Joint Pain",
];

function Hero() {
  return (
    <section className="editorialHero" id="top">
      <div className="heroImage" />
      <div className="heroOverlay" />
      <div className="heroTexture" />

      <div className="heroInner">
        <motion.div
          className="heroTopLine"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="heroBrand">
            REHABICS PHYSIOTHERAPY
          </span>

          <span className="heroLocation">
            <span className="heroLocationDot" />
            Bengaluru, Karnataka
          </span>
        </motion.div>

        <div className="heroMain">
          <motion.div
            className="heroEyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <span className="eyebrowDot" />
            <span>The New Age Of Physiotherapy</span>
          </motion.div>

          <div className="heroTitleWrapper">
            <motion.h1
              className="heroTitle heroTitleOne"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Move Better.
            </motion.h1>

            <motion.div
              className="heroTitleRow"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34 }}
            >
              <h1 className="heroTitle heroTitleAccent">
                Live Better.
              </h1>

              <div className="heroOrb" aria-hidden="true">
                <FiActivity />
              </div>
            </motion.div>
          </div>

          <motion.div
            className="heroBottom"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.48 }}
          >
            <div className="heroDescription">
              <p>
                Personalised physiotherapy and rehabilitation
                care designed around your movement, recovery
                and everyday life.
              </p>
            </div>

            <div className="heroActionArea">
              <a
                href="#contact"
                className="heroAppointment"
              >
                <span>Book An Appointment</span>
                <span className="appointmentIcon">
                  <FiArrowUpRight />
                </span>
              </a>

              <a href="#about" className="heroScroll">
                <span>Discover Rehabics</span>
                <FiArrowDown />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="heroFocusBar"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          <span className="focusLabel">Areas Of Care</span>

          <div className="focusItems">
            {focusAreas.map((area, index) => (
              <motion.div
                className="focusArea"
                key={area}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  delay: 0.7 + index * 0.07,
                }}
              >
                <span className="focusNumber">
                  0{index + 1}
                </span>
                <span>{area}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="heroSideText" aria-hidden="true">
        REHABILITATION
      </div>
    </section>
  );
}

export default Hero;
