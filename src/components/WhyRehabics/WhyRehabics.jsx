
import { motion } from "motion/react";
import {
  FiCheckCircle,
  FiBookOpen,
  FiUsers,
  FiShield,
  FiArrowUpRight,
  FiHeart,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./WhyRehabics.css";

const strengths = [
  {
    icon: FiCheckCircle,
    number: "01",
    title: "Holistic Approach",
    text: "We consider the body as a connected system rather than treating one symptom in isolation.",
    accent: "teal",
  },
  {
    icon: FiUsers,
    number: "02",
    title: "Multidisciplinary Team",
    text: "A collaborative approach helps keep your rehabilitation focused on your individual needs.",
    accent: "pink",
  },
  {
    icon: FiShield,
    number: "03",
    title: "Experienced Physiotherapists",
    text: "Our physiotherapy team guides your care with attention to your concerns and goals.",
    accent: "purple",
  },
  {
    icon: FiBookOpen,
    number: "04",
    title: "Evidence Based Practice",
    text: "Assessment, education and treatment are guided by your rehabilitation requirements.",
    accent: "teal",
  },
];

function WhyRehabics() {
  return (
    <section className="whySection" id="why-rehabics">
      <div className="whyContainer">
        <motion.div
          className="whyVisual"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="whyImageWrap">
            <img
              src="https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/sport-outdoor-1-scaled.jpg"
              alt="Physiotherapy and physical activity"
              className="whyImage"
              loading="lazy"
            />

            <div className="whyImageOverlay" />

            <div className="whyImageTop">
              <span>REHABICS PHYSIOTHERAPY</span>
              <span className="whyImageIndex">01</span>
            </div>

            <div className="whyImageAccent" />

            <div className="whyQuote">
              <span className="whyQuoteLabel">
                OUR PHILOSOPHY
              </span>

              <h3>
                Body As
                <span>Whole.</span>
              </h3>

              <p>
                Understanding movement is part of understanding
                the person.
              </p>
            </div>

            <div className="whyVisualBadge">
              <span className="whyBadgeIcon">
                <FiHeart />
              </span>

              <span className="whyBadgeText">
                <strong>Care that listens</strong>
                <small>Focused on your goals</small>
              </span>
            </div>
          </div>

          <div className="whyVisualCaption">
            <span className="whyCaptionDot" />
            <span>Personalised care. Meaningful progress.</span>
          </div>
        </motion.div>

        <motion.div
          className="whyContent"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="whyHeaderTop">
            <div className="whyLabel">
              <span className="whyLabelDot" />
              <span>Why Rehabics</span>
            </div>

            <span className="whyCount">04 Principles</span>
          </div>

          <div className="whyHeading">
            <span className="whyEyebrow">
              A thoughtful approach to recovery
            </span>

            <h2>
              Your recovery.
              <span>Your independence.</span>
            </h2>

            <p className="whyLead">
              We bring together clinical assessment, patient
              education and individualised care to support
              your movement and everyday wellbeing.
            </p>
          </div>

          <div className="whyList">
            {strengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className={`whyItem whyItem${item.accent}`}
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                >
                  <span className="whyItemNumber">
                    {item.number}
                  </span>

                  <span className="whyItemIcon">
                    <Icon />
                  </span>

                  <span className="whyItemContent">
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </span>

                  <span className="whyItemArrow">
                    <FiArrowUpRight />
                  </span>
                </motion.article>
              );
            })}
          </div>

          <div className="whyFooter">
            <p>Have questions about your care?</p>

            <Link to="/contact" className="whyContactLink">
              Talk to Our Team
              <FiArrowUpRight />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyRehabics;
