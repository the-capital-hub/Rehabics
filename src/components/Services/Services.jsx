import { motion } from "motion/react";
import {
  FiActivity,
  FiHeart,
  FiShield,
  FiUserCheck,
  FiArrowUpRight,
} from "react-icons/fi";
import "./Services.css";

const serviceGroups = [
  {
    number: "01",
    icon: FiActivity,
    title: "Rehabilitation",
    description:
      "Structured care focused on recovery, mobility and confident movement.",
    image:
      "https://images.pexels.com/photos/6111581/pexels-photo-6111581.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
      "Personalised treatment for pain, posture and everyday movement.",
    image:
      "https://images.pexels.com/photos/7659561/pexels-photo-7659561.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
      "Focused therapies supported by clinical assessment and expertise.",
    image:
      "https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
      "Build strength, fitness and physical confidence for everyday life.",
    image:
      "https://images.pexels.com/photos/7089629/pexels-photo-7089629.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="servicesHeaderTop">
            <div className="servicesLabel">
              <span className="servicesLabelDot" />
              <span>Our Services</span>
            </div>

            <span className="servicesCount">04 Categories</span>
          </div>

          <div className="servicesHeaderContent">
            <h2>
              Care designed around
              <span>how you move.</span>
            </h2>

            <p>
              Personalised physiotherapy services focused on recovery,
              movement and long term wellbeing.
            </p>
          </div>
        </motion.div>

        <div className="servicesGrid">
          {serviceGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                className="serviceCard"
                key={group.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
              >
                <div className="serviceImageWrap">
                  <img
                    src={group.image}
                    alt={group.title}
                    className="serviceImage"
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
                    <span>Rehabics Physiotherapy</span>
                  </div>
                </div>

                <div className="serviceCardContent">
                  <div className="serviceTitleRow">
                    <h3>{group.title}</h3>

                    <span className="serviceArrow">
                      <FiArrowUpRight />
                    </span>
                  </div>

                  <p className="serviceDescription">
                    {group.description}
                  </p>

                  <div className="serviceList">
                    {group.services.map((service) => (
                      <div
                        className="serviceItem"
                        key={service}
                      >
                        <span className="serviceItemDot" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>

                  <div className="serviceCardFooter">
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

export default Services;