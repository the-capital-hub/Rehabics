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
  "Woman Health",
  "Muscle and Joint Related Pain",
];

function Hero() {
  return (
    <section className="editorialHero">

      <div className="heroImage" />
      <div className="heroOverlay" />
      <div className="heroTexture" />

      <div className="heroInner">

        <motion.div
          className="heroTopLine"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="heroBrand">
            REHABICS PHYSIOTHERAPY
          </span>

          <span className="heroLocation">
            Bengaluru
          </span>
        </motion.div>

        <div className="heroMain">

          <motion.div
  className="heroEyebrow"
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    delay: 0.15,
  }}
>
  <span className="eyebrowDot" />

  <span>
    The New Age Of Physiotherapy
  </span>
</motion.div>

          <div className="heroTitleWrapper">

            <motion.h1
              className="heroTitle heroTitleOne"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
              }}
            >
              The New Age Of
            </motion.h1>

            <motion.div
              className="heroTitleRow"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
            >
              <h1 className="heroTitle heroTitleAccent">
                Physiotherapy
              </h1>

              <div className="heroOrb">
                <FiActivity />
              </div>
            </motion.div>

          </div>

          <motion.div
            className="heroBottom"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.6,
            }}
          >

            <div className="heroDescription">
              

              <p>
                Personalised physiotherapy and rehabilitation
                care designed to help you move better and live
                better.
              </p>
            </div>

            <div className="heroActionArea">

              <a
                href="#contact"
                className="heroAppointment"
              >
                <span>Make An Appointment</span>

                <span className="appointmentIcon">
                  <FiArrowUpRight />
                </span>
              </a>

              <a
                href="#about"
                className="heroScroll"
              >
                <span>Explore</span>
                <FiArrowDown />
              </a>

            </div>

          </motion.div>

        </div>

        <motion.div
          className="heroFocusBar"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.8,
          }}
        >
          <span className="focusLabel">
            Areas Of Care
          </span>

          <div className="focusItems">

            {focusAreas.map((area, index) => (
              <motion.div
                className="focusArea"
                key={area}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.9 + index * 0.08,
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

      <div className="heroSideText">
        REHABILITATION
      </div>

    </section>
  );
}

export default Hero;