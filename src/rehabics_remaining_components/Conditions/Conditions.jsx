import { motion } from "motion/react";
import {
  FiActivity,
  FiHeart,
  FiUser,
  FiTarget,
} from "react-icons/fi";
import "./Conditions.css";

const conditions = [
  {
    icon: FiActivity,
    number: "01",
    title: "Sports Injuries",
    text: "Structured rehabilitation to help you recover and return to activity with confidence.",
  },
  {
    icon: FiTarget,
    number: "02",
    title: "Spine Care",
    text: "Focused care for back, neck and movement related concerns.",
  },
  {
    icon: FiHeart,
    number: "03",
    title: "Woman Health",
    text: "Individualised support across women’s health and rehabilitation needs.",
  },
  {
    icon: FiUser,
    number: "04",
    title: "Muscle and Joint Related Pain",
    text: "Assessment and treatment designed around movement, strength and daily function.",
  },
];

function Conditions() {
  return (
    <section className="conditionsSection" id="conditions">
      <div className="conditionsContainer">
        <motion.div
          className="conditionsIntro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div className="conditionsLabel">
            <span className="conditionsLabelLine" />
            Areas Of Care
          </div>

          <div>
            <h2>
              Treatment that starts
              <span>with understanding.</span>
            </h2>
            <p>
              We look beyond the immediate symptom to understand
              movement, lifestyle and the goals that matter to you.
            </p>
          </div>
        </motion.div>

        <div className="conditionsGrid">
          {conditions.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="conditionCard"
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="conditionTop">
                  <div className="conditionIcon">
                    <Icon />
                  </div>
                  <span>{item.number}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Conditions;
