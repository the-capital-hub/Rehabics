
import { motion } from "motion/react";
import {
  FiActivity,
  FiHeart,
  FiShield,
  FiUserCheck,
  FiArrowUpRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Services.css";

const serviceGroups = [
  {
    number: "01",
    icon: FiActivity,
    title: "Rehabilitation",
    description:
      "Personalised support to improve mobility, restore function and help you move with confidence.",
    image:
      "https://images.pexels.com/photos/6111581/pexels-photo-6111581.jpeg?auto=compress&cs=tinysrgb&w=1200",
    accent: "teal",
    services: [
      "Online Physiotherapy",
      "Injury Rehabilitation",
      "Pre and Post Operative Rehab",
      "Neuro Physiotherapy",
      "Geriatric Physiotherapy",
      "Pediatric Physiotherapy",
    ],
  },
  {
    number: "02",
    icon: FiHeart,
    title: "Pain and Movement",
    description:
      "Assessment and treatment tailored to your pain, posture and everyday movement needs.",
    image:
      "https://images.pexels.com/photos/7659561/pexels-photo-7659561.jpeg?auto=compress&cs=tinysrgb&w=1200",
    accent: "pink",
    services: [
      "Musculoskeletal Assessment",
      "Neck and Back Pain",
      "Muscle and Joint Related Pain",
      "Posture Correction",
      "Myofascial and Trigger Point Release",
      "Tailored Exercise Therapy",
    ],
  },
  {
    number: "03",
    icon: FiShield,
    title: "Specialised Care",
    description:
      "Targeted physiotherapy techniques selected according to individual assessment and needs.",
    image:
      "https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg?auto=compress&cs=tinysrgb&w=1200",
    accent: "purple",
    services: [
      "Dry Needling Therapy",
      "Cupping Therapy",
      "Kinesio Taping",
      "Traction",
      "Ultrasound Therapy",
      "Pre and Postnatal Training",
    ],
  },
  {
    number: "04",
    icon: FiUserCheck,
    title: "Wellness and Performance",
    description:
      "Build strength, improve physical fitness and work towards your personal performance goals.",
    image:
      "https://images.pexels.com/photos/7089629/pexels-photo-7089629.jpeg?auto=compress&cs=tinysrgb&w=1200",
    accent: "teal",
    services: [
      "Fitness Training",
      "Strength Training",
      "Sports Specific Training",
      "Corporate Wellness",
      "Psychological Rehab",
      "Sports Nutrition",
    ],
  },
];

function Services() {
  return (
    <section className="servicesSection" id="services">
      <div className="servicesContainer">
        <motion.div
          className="servicesHeader"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="servicesHeaderTop">
            <div className="servicesLabel">
              <span className="servicesLabelDot" />
              <span>Our Services</span>
            </div>

            <span className="servicesCount">
              04 Care Categories
            </span>
          </div>

          <div className="servicesHeaderContent">
            <div className="servicesHeadingWrap">
              <span className="servicesEyebrow">
                Move better. Feel better.
              </span>

              <h2>
                Care designed around
                <span>how you move.</span>
              </h2>
            </div>

            <p>
              Explore physiotherapy and wellness services
              designed around your movement, recovery and
              individual goals.
            </p>
          </div>
        </motion.div>

        <div className="servicesGrid">
          {serviceGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                className={`serviceCard serviceCard${group.accent}`}
                key={group.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
              >
                <div className="serviceImageWrap">
                  <img
                    src={group.image}
                    alt={`${group.title} physiotherapy care`}
                    className="serviceImage"
                    loading="lazy"
                  />

                  <div className="serviceImageOverlay" />

                  <div className="serviceCardTop">
                    <span className="serviceNumber">
                      {group.number}
                    </span>

                    <div className="serviceIcon">
                      <Icon />
                    </div>
                  </div>

                  <div className="serviceImageTitle">
                    <span>REHABICS PHYSIOTHERAPY</span>
                    <span className="serviceImageLine" />
                  </div>
                </div>

                <div className="serviceCardContent">
                  <div className="serviceTitleRow">
                    <h3>{group.title}</h3>

                    <span className="serviceArrow" aria-hidden="true">
                      <FiArrowUpRight />
                    </span>
                  </div>

                  <p className="serviceDescription">
                    {group.description}
                  </p>

                  <div className="serviceList">
                    {group.services.map((service) => (
                      <div className="serviceItem" key={service}>
                        <span className="serviceItemDot" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="serviceCardFooter"
                    aria-label={`Enquire about ${group.title}`}
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
          className="servicesBottom"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <div className="servicesBottomIcon">
            <FiHeart />
          </div>

          <div className="servicesBottomText">
            <h3>Not sure where to begin?</h3>
            <p>
              Talk to our team about your physiotherapy needs.
            </p>
          </div>

          <Link to="/contact" className="servicesContactLink">
            Contact Our Team
            <FiArrowUpRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
