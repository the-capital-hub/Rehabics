import { motion } from "motion/react";
import {
  FiActivity,
  FiAward,
  FiHeart,
  FiUsers,
  FiArrowUpRight,
  FiCheckCircle,
  FiBookOpen,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./About.css";
import docotor from "../../assets/docotor.png";

const strengths = [
  {
    icon: FiActivity,
    title: "Holistic Approach",
    text: "Understanding the body as a connected system.",
    image:
      "https://images.pexels.com/photos/6931773/pexels-photo-6931773.jpeg",
    accent: "teal",
  },
  {
    icon: FiAward,
    title: "Experienced Care",
    text: "Physiotherapy care focused on individual needs.",
    image: "https://images.pexels.com/photos/14346824/pexels-photo-14346824.jpeg",
    accent: "purple",
  },
  {
    icon: FiUsers,
    title: "Team Approach",
    text: "Multidisciplinary care focused on your goals.",
    image:
      "https://images.pexels.com/photos/7551180/pexels-photo-7551180.jpeg",
    accent: "pink",
  },
  {
    icon: FiHeart,
    title: "Patient First",
    text: "Education, communication and comfortable care.",
    image:
      "https://images.pexels.com/photos/6753348/pexels-photo-6753348.jpeg",
    accent: "teal",
  },
];

const qualifications = [
  "Bachelor of Physiotherapy completed in 2017",
  "The Oxford College of Physiotherapy, Bengaluru",
  "Affiliated with Rajiv Gandhi University of Health Sciences, Karnataka",
];

const certifications = [
  "Cupping Therapy",
  "Dry Needling Therapy",
  "Kinesio Taping",
];

function About() {
  return (
    <section className="aboutSection" id="about">
      <div className="aboutContainer">
        <div className="aboutIntro">
          <motion.div
            className="aboutIntroContent"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <div className="aboutLabel">
              <span className="aboutLabelDot" />
              <span>Welcome to Rehabics Physiotherapy</span>
            </div>

            <h2 className="aboutHeading">
              Care that looks
              <span>beyond the pain.</span>
            </h2>

            <div className="aboutFounderText">
              <span className="aboutEyebrow">Founder and Director</span>
              <h3>Dr. Archita Tiwari</h3>

              <p className="aboutLead">
                Dr. Archita Tiwari is the Founder and Director of
                Rehabics Physiotherapy and Rehabilitation Centre
                in Koramangala, Bengaluru. Her approach focuses
                on understanding the body and supporting
                personalised rehabilitation.
              </p>

              <p className="aboutBodyText">
                She completed her Bachelor of Physiotherapy at
                The Oxford College of Physiotherapy, Bengaluru,
                affiliated with Rajiv Gandhi University of Health
                Sciences, Karnataka, in 2017. The original
                Rehabics website also identifies her with the
                Indian Association of Physiotherapy.
              </p>
            </div>

            <div className="aboutQualification">
              <div className="aboutQualificationIcon">
                <FiBookOpen />
              </div>
              <div>
                <h4>Education and Qualifications</h4>
                <ul>
                  {qualifications.map((item) => (
                    <li key={item}>
                      <FiCheckCircle />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="aboutCertifications">
              <span className="aboutCertLabel">
                Certified Practitioner
              </span>
              <div className="aboutCertTags">
                {certifications.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <Link to="/about" className="aboutLink">
              <span>Read More About Us</span>
              <span className="aboutLinkIcon">
                <FiArrowUpRight />
              </span>
            </Link>
          </motion.div>

          <motion.div
            className="aboutFounderVisual"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
          >
            <img
              className="founderImage"
              src={docotor}
              alt="Dr. Archita Tiwari, Founder and Director of Rehabics Physiotherapy"
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

        <div className="strengthsHeading">
          <div>
            <span className="smallLabel">
              The Rehabics Difference
            </span>
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