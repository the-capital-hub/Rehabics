import { motion } from "motion/react";
import {
  FiCheckCircle,
  FiBookOpen,
  FiUsers,
  FiShield,
} from "react-icons/fi";
import "./WhyRehabics.css";

const strengths = [
  {
    icon: FiCheckCircle,
    title: "Holistic Approach",
    text: "We consider the body as a connected system rather than treating one symptom in isolation.",
  },
  {
    icon: FiUsers,
    title: "Multidisciplinary Team",
    text: "A collaborative approach helps keep your rehabilitation focused and complete.",
  },
  {
    icon: FiShield,
    title: "Experienced Physiotherapists",
    text: "Licensed and experienced professionals guide your care with attention to your goals.",
  },
  {
    icon: FiBookOpen,
    title: "Evidence Based Practice",
    text: "Assessment, education and procedures are aligned with practical rehabilitation needs.",
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
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <div className="whyImage" />
          <div className="whyQuote">
            <span>Our Approach</span>
            <strong>Body As Whole</strong>
          </div>
        </motion.div>

        <motion.div
          className="whyContent"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <div className="whyLabel">
            <span className="whyLabelLine" />
            Why Rehabics
          </div>

          <h2>
            Recovery should make
            <span>you more independent.</span>
          </h2>

          <p className="whyLead">
            Our approach combines clinical expertise, education
            and personalised care to help you understand your body
            and become confident in your movement.
          </p>

          <div className="whyList">
            {strengths.map((item) => {
              const Icon = item.icon;

              return (
                <div className="whyItem" key={item.title}>
                  <div className="whyItemIcon">
                    <Icon />
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyRehabics;
