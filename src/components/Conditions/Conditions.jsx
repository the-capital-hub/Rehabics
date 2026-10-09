
import { motion } from "motion/react";
import {
  FiActivity,
  FiHeart,
  FiUser,
  FiTarget,
  FiArrowUpRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Conditions.css";

const conditions = [
  {
    icon: FiActivity,
    number: "01",
    title: "Sports Injuries",
    text: "Individualised rehabilitation to support recovery, mobility and a confident return to physical activity.",
    image:
      "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1200",
    accent: "teal",
    tag: "Active Recovery",
  },
  {
    icon: FiTarget,
    number: "02",
    title: "Spine Care",
    text: "Personalised care for back and neck concerns, posture and movement related difficulties.",
    image:
      "https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=1200",
    accent: "purple",
    tag: "Movement Support",
  },
  {
    icon: FiHeart,
    number: "03",
    title: "Women's Health",
    text: "Support tailored to individual women's health, pelvic wellness and rehabilitation needs.",
    image:
      "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1200",
    accent: "pink",
    tag: "Personalised Care",
  },
  {
    icon: FiUser,
    number: "04",
    title: "Muscle and Joint Pain",
    text: "Assessment focused on movement, strength and everyday activities that matter to you.",
    image:
      "https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=1200",
    accent: "teal",
    tag: "Everyday Mobility",
  },
];

function Conditions() {
  return (
    <section className="conditionsSection" id="conditions">
      <div className="conditionsContainer">
        <motion.div
          className="conditionsIntro"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="conditionsHeaderTop">
            <div className="conditionsLabel">
              <span className="conditionsLabelDot" />
              <span>Areas of Care</span>
            </div>

            <span className="conditionsCount">
              04 Focus Areas
            </span>
          </div>

          <div className="conditionsHeaderContent">
            <div className="conditionsHeadingWrap">
              <span className="conditionsEyebrow">
                Your movement matters
              </span>

              <h2>
                Treatment starts
                <span>with understanding.</span>
              </h2>
            </div>

            <p>
              Every person has different needs. Our approach
              begins with understanding your concerns, movement
              and personal goals.
            </p>
          </div>
        </motion.div>

        <div className="conditionsGrid">
          {conditions.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className={`conditionCard conditionCard${item.accent}`}
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
              >
                <div className="conditionImageWrap">
                  <img
                    src={item.image}
                    alt={`${item.title} physiotherapy care`}
                    className="conditionImage"
                    loading="lazy"
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
                    <span>REHABICS PHYSIOTHERAPY</span>
                    <span className="conditionImageLine" />
                  </div>
                </div>

                <div className="conditionContent">
                  <div className="conditionTag">
                    <span className="conditionTagDot" />
                    {item.tag}
                  </div>

                  <div className="conditionTitleRow">
                    <h3>{item.title}</h3>

                    <span
                      className="conditionArrow"
                      aria-hidden="true"
                    >
                      <FiArrowUpRight />
                    </span>
                  </div>

                  <p className="conditionDescription">
                    {item.text}
                  </p>

                  <Link
                    to="/contact"
                    className="conditionFooter"
                    aria-label={`Enquire about ${item.title}`}
                  >
                    <span>Enquire About Care</span>
                    <FiArrowUpRight />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="conditionsBottom"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <div className="conditionsBottomContent">
            <span className="conditionsBottomIcon">
              <FiHeart />
            </span>

            <div>
              <h3>Your recovery journey starts with a conversation.</h3>
              <p>
                Contact our team to discuss your individual needs.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="conditionsContactLink"
          >
            Get in Touch
            <FiArrowUpRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Conditions;
