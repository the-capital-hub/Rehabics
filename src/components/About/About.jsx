
import { motion } from "motion/react";
import {
  FiActivity,
  FiAward,
  FiHeart,
  FiUsers,
  FiArrowUpRight,
} from "react-icons/fi";

import "./About.css";

const strengths = [
  {
    icon: FiActivity,
    title: "Holistic Approach",
    text: "Understanding the body as a connected system.",
    image:
      "https://images.pexels.com/photos/6111581/pexels-photo-6111581.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    icon: FiAward,
    title: "Experienced Care",
    text: "Licensed and experienced physiotherapy care.",
    image:
      "https://images.pexels.com/photos/7659561/pexels-photo-7659561.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    icon: FiUsers,
    title: "Team Approach",
    text: "Multidisciplinary care focused on your goals.",
    image:
      "https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    icon: FiHeart,
    title: "Patient First",
    text: "Education, communication and comfortable care.",
    image:
      "https://images.pexels.com/photos/7089629/pexels-photo-7089629.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
];

function About() {
  return (
    <section className="aboutSection" id="about">
      <div className="aboutContainer">

        {/* =========================================
            INTRO
        ========================================== */}

        <div className="aboutIntro">

          <motion.div
            className="aboutIntroContent"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="aboutLabel">
              <span className="aboutLabelDot" />
              <span>About Rehabics</span>
            </div>

            <h2>
              Care that looks
              <span>beyond the pain.</span>
            </h2>

            <p className="aboutLead">
              At Rehabics Physiotherapy, we believe recovery
              begins with understanding how the body moves,
              adapts and works as a whole.
            </p>

            <a href="#contact" className="aboutLink">
              <span>Know More About Rehabics</span>

              <span className="aboutLinkIcon">
                <FiArrowUpRight />
              </span>
            </a>
          </motion.div>


          {/* =========================================
              FOUNDER VISUAL
          ========================================== */}

          <motion.div
            className="aboutFounderVisual"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <div className="founderImage" />

            <div className="founderOverlay" />

            <div className="founderTop">
              <span>01</span>
              <span>Rehabics Physiotherapy</span>
            </div>

            <div className="founderInfo">
  <span className="founderInfoLabel">
    Founder & Director
  </span>

  <h3>Dr. Archita Tiwari</h3>

  <p>
    Personalised physiotherapy care with a holistic
    approach to movement and recovery.
  </p>
</div>
          </motion.div>

        </div>


        {/* =========================================
            PHILOSOPHY
        ========================================== */}

        <motion.div
          className="aboutPhilosophy"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >

          <div className="philosophyTitle">
            <span className="smallLabel">
              Our Philosophy
            </span>

            <h3>
              Body As Whole
            </h3>
          </div>

          <div className="philosophyContent">
            <p>
              We follow a holistic kinetic chain approach,
              understanding how different parts of the body
              work together throughout recovery.
            </p>

            <p>
              Our goal is to educate, guide and support every
              patient through a personalised rehabilitation
              journey.
            </p>
          </div>

        </motion.div>


        {/* =========================================
            STRENGTHS
        ========================================== */}

        <motion.div
          className="strengths"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          {strengths.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className="strength"
                key={item.title}
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <div className="strengthOverlay" />

                <div className="strengthInner">

                  <div className="strengthTop">
                    <div className="strengthIcon">
                      <Icon />
                    </div>

                    <span className="strengthNumber">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="strengthContent">
                    <h4>{item.title}</h4>

                    <p>{item.text}</p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

export default About;
