import { motion } from "motion/react";
import {
  FiActivity,
  FiHeart,
  FiShield,
  FiUserCheck,
} from "react-icons/fi";
import "./Services.css";

const serviceGroups = [
  {
    icon: FiActivity,
    title: "Rehabilitation",
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
    icon: FiHeart,
    title: "Pain and Movement",
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
    icon: FiShield,
    title: "Specialised Care",
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
    icon: FiUserCheck,
    title: "Wellness and Performance",
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div className="servicesLabel">
            <span className="servicesLabelLine" />
            Our Services
          </div>

          <div>
            <h2>
              Care designed around
              <span>how you move.</span>
            </h2>
            <p>
              Personalised physiotherapy services focused on
              recovery, movement and long term wellbeing.
            </p>
          </div>
        </motion.div>

        <div className="servicesGrid">
          {serviceGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                className="serviceGroup"
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="serviceGroupTop">
                  <div className="serviceIcon">
                    <Icon />
                  </div>
                  <span>0{index + 1}</span>
                </div>

                <h3>{group.title}</h3>

                <div className="serviceList">
                  {group.services.map((service) => (
                    <div className="serviceItem" key={service}>
                      <span>{service}</span>
                    </div>
                  ))}
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
