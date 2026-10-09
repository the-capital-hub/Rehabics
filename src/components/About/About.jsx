
import { motion } from "motion/react";
import {
  FiActivity,
  FiAward,
  FiHeart,
  FiUsers,
  FiArrowUpRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./About.css";

const strengths = [
  {
    icon: FiActivity,
    title: "Holistic Approach",
    text: "Understanding the body as a connected system.",
    image:
      "https://images.pexels.com/photos/6111581/pexels-photo-6111581.jpeg?auto=compress&cs=tinysrgb&w=1000",
    accent: "teal",
  },
  {
    icon: FiAward,
    title: "Experienced Care",
    text: "Licensed and experienced physiotherapy care.",
    image:
      "https://images.pexels.com/photos/7659561/pexels-photo-7659561.jpeg?auto=compress&cs=tinysrgb&w=1000",
    accent: "purple",
  },
  {
    icon: FiUsers,
    title: "Team Approach",
    text: "Multidisciplinary care focused on your goals.",
    image:
      "https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg?auto=compress&cs=tinysrgb&w=1000",
    accent: "pink",
  },
  {
    icon: FiHeart,
    title: "Patient First",
    text: "Education, communication and comfortable care.",
    image:
      "https://images.pexels.com/photos/7089629/pexels-photo-7089629.jpeg?auto=compress&cs=tinysrgb&w=1000",
    accent: "teal",
  },
];

function About() {
  return (
    <section className="aboutSection" id="about">
      <div className="aboutContainer">
        {/* Introduction */}

        <div className="aboutIntro">
          <motion.div
            className="aboutIntroContent"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
          >
            <div className="aboutLabel">
              <span className="aboutLabelDot" />
              <span>About Rehabics</span>
            </div>

            <h2 className="aboutHeading">
              Care that looks
              <span>beyond the pain.</span>
            </h2>

            <p className="aboutLead">
              At Rehabics Physiotherapy, we believe recovery
              begins with understanding how the body moves,
              adapts and works as a whole.
            </p>

            <Link to="/about" className="aboutLink">
              <span>Know More About Rehabics</span>
              <span className="aboutLinkIcon">
                <FiArrowUpRight />
              </span>
            </Link>
          </motion.div>

          {/* Founder visual */}

          <motion.div
            className="aboutFounderVisual"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
          >
            <img
              className="founderImage"
              src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Physiotherapy consultation"
              loading="lazy"
            />

            <div className="founderOverlay" />

            <div className="founderTop">
              <span className="founderIndex">01</span>
              <span>Rehabics Physiotherapy</span>
            </div>

            <div className="founderInfo">
              <span className="founderInfoLabel">
                Founder and Director
              </span>

              <h3>Dr. Archita Tiwari</h3>

              <p>
                Personalised physiotherapy care with a holistic
                approach to movement and recovery.
              </p>
            </div>

            <span className="founderAccent" aria-hidden="true" />
          </motion.div>
        </div>

        {/* Philosophy */}

        <motion.div
          className="aboutPhilosophy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="philosophyTitle">
            <span className="smallLabel">Our Philosophy</span>
            <h3>
              Body As <span>Whole</span>
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

          <div className="philosophyMark" aria-hidden="true">
            <FiActivity />
          </div>
        </motion.div>

        {/* Strengths */}

        <div className="strengthsHeading">
          <div>
            <span className="smallLabel">The Rehabics Difference</span>
            <h3>Care built around you.</h3>
          </div>

          <p>
            A thoughtful approach to movement, recovery
            and long term wellbeing.
          </p>
        </div>

        <div className="strengths">
          {strengths.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className={`strength strength${item.accent}`}
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
              >
                <img
                  className="strengthImage"
                  src={item.image}
                  alt=""
                  loading="lazy"
                />

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
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
