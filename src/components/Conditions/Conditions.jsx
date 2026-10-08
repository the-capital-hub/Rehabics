import { motion } from "motion/react";
import {
  FiActivity,
  FiHeart,
  FiUser,
  FiTarget,
  FiArrowUpRight,
} from "react-icons/fi";
import "./Conditions.css";

const conditions = [
  {
    icon: FiActivity,
    number: "01",
    title: "Sports Injuries",
    text: "Structured rehabilitation to help you recover and return to activity with confidence.",
    image:
      "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    icon: FiTarget,
    number: "02",
    title: "Spine Care",
    text: "Focused care for back, neck and movement related concerns.",
    image:
      "https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    icon: FiHeart,
    number: "03",
    title: "Woman Health",
    text: "Individualised support across women’s health and rehabilitation needs.",
    image:
      "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    icon: FiUser,
    number: "04",
    title: "Muscle and Joint Related Pain",
    text: "Assessment and treatment designed around movement, strength and daily function.",
    image:
      "https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

function Conditions() {
  return (
    <section className="conditionsSection" id="conditions">
      <div className="conditionsContainer">

        {/* HEADER */}

        <motion.div
          className="conditionsIntro"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="conditionsHeaderTop">
            <div className="conditionsLabel">
              <span className="conditionsLabelDot" />
              <span>Areas Of Care</span>
            </div>

            <span className="conditionsCount">
              04 Focus Areas
            </span>
          </div>

          <div className="conditionsHeaderContent">
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

        {/* CARDS */}

        <div className="conditionsGrid">
          {conditions.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="conditionCard"
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
              >
                {/* IMAGE */}

                <div className="conditionImageWrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="conditionImage"
                  />

                  <div className="conditionImageOverlay" />

                  <div className="conditionTop">
                    <span className="conditionNumber">
                      {item.number}
                    </span>

                    <div className="conditionIcon">
                      <Icon />
                    </div>
                  </div>

                  <div className="conditionImageBottom">
                    <span>Rehabics Physiotherapy</span>
                  </div>
                </div>

                {/* CONTENT */}

                <div className="conditionContent">
                  <div className="conditionTitleRow">
                    <h3>{item.title}</h3>

                    <span className="conditionArrow">
                      <FiArrowUpRight />
                    </span>
                  </div>

                  <p>{item.text}</p>

                  <div className="conditionFooter">
                    <span>Explore Care</span>

                    <FiArrowUpRight />
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

export default Conditions;