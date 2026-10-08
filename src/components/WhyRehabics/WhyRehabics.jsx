import { motion } from "motion/react";
import {
  FiCheckCircle,
  FiBookOpen,
  FiUsers,
  FiShield,
  FiArrowUpRight,
} from "react-icons/fi";
import "./WhyRehabics.css";

const strengths = [
  {
    icon: FiCheckCircle,
    number: "01",
    title: "Holistic Approach",
    text: "We consider the body as a connected system rather than treating one symptom in isolation.",
  },
  {
    icon: FiUsers,
    number: "02",
    title: "Multidisciplinary Team",
    text: "A collaborative approach helps keep your rehabilitation focused and complete.",
  },
  {
    icon: FiShield,
    number: "03",
    title: "Experienced Physiotherapists",
    text: "Licensed and experienced professionals guide your care with attention to your goals.",
  },
  {
    icon: FiBookOpen,
    number: "04",
    title: "Evidence Based Practice",
    text: "Assessment, education and procedures are aligned with practical rehabilitation needs.",
  },
];

function WhyRehabics() {
  return (
    <section className="whySection" id="why-rehabics">
      <div className="whyContainer">

        {/* VISUAL */}

        <motion.div
          className="whyVisual"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="whyImageWrap">
            <img
              src="https://images.pexels.com/photos/6111581/pexels-photo-6111581.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Physiotherapy treatment"
              className="whyImage"
            />

            <div className="whyImageOverlay" />

            <div className="whyImageTop">
              <span>Rehabics Physiotherapy</span>
              <span>01</span>
            </div>

            <div className="whyQuote">
              <span>Our Approach</span>
              <strong>Body As Whole</strong>
            </div>
          </div>
        </motion.div>

        {/* CONTENT */}

        <motion.div
          className="whyContent"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="whyHeaderTop">
            <div className="whyLabel">
              <span className="whyLabelDot" />
              <span>Why Rehabics</span>
            </div>

            <span className="whyCount">04 Principles</span>
          </div>

          <div className="whyHeading">
            <h2>
              Recovery should make
              <span>you more independent.</span>
            </h2>

            <p className="whyLead">
              Our approach combines clinical expertise, education
              and personalised care to help you understand your body
              and become confident in your movement.
            </p>
          </div>

          <div className="whyList">
            {strengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="whyItem"
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <div className="whyItemNumber">
                    {item.number}
                  </div>

                  <div className="whyItemIcon">
                    <Icon />
                  </div>

                  <div className="whyItemContent">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>

                  <span className="whyItemArrow">
                    <FiArrowUpRight />
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default WhyRehabics;