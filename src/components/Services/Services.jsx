
import { motion } from "motion/react";
import {
  FiActivity,
  FiHeart,
  FiShield,
  FiUserCheck,
  FiArrowUpRight,
  FiCheckCircle,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Services.css";

const serviceGroups = [
  {
    number: "01",
    icon: FiActivity,
    title: "Rehabilitation",
    description:
      "Individualised rehabilitation to restore movement, improve function and support recovery at every stage of life.",
    image:
      "https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/patient-doing-exercise-using-sports-equipment-with-therapist-1024x683.jpg",
    accent: "teal",
    services: [
      "Online Physiotherapy",
      "Injury Rehabilitation",
      "Pre and Post Operative Rehab",
      "Neuro Physiotherapy",
      "Geriatric Physiotherapy",
      "Geriatric Home Care",
      "Pediatric Physiotherapy",
      "Physiotherapy at Home",
      "Psychological Rehabilitation",
    ],
  },
  {
    number: "02",
    icon: FiHeart,
    title: "Pain and Movement",
    description:
      "Assessment and treatment focused on pain relief, posture, mobility and comfortable everyday movement.",
    image:
      "https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/young-businesswoman-suffering-from-neckache-massaging-her-neck-while-sitting-her-working-place-home-office-1024x683.jpg",
    accent: "pink",
    services: [
      "Musculoskeletal Assessment",
      "Neck and Back Pain",
      "Muscle and Joint Related Pain",
      "Posture Correction",
      "Myofascial and Trigger Point Release",
      "Tailored Exercise Therapy",
      "Deep Tissue Massage",
      "Ergonomic Advice",
    ],
  },
  {
    number: "03",
    icon: FiShield,
    title: "Specialised Care",
    description:
      "Specialised physiotherapy techniques chosen according to your assessment, condition and recovery needs.",
    image:
      "https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/closeup-shirtless-man-receiving-dry-needling-therapy-from-doctor-clinic-1024x683.jpg",
    accent: "purple",
    services: [
      "Dry Needling Therapy",
      "Cupping Therapy",
      "Kinesio Taping",
      "Traction",
      "Ultrasound Therapy",
      "IFT, TENS and Electrical Stimulation",
      "Pre and Postnatal Training",
      "Women’s Wellness",
    ],
  },
  {
    number: "04",
    icon: FiUserCheck,
    title: "Wellness and Performance",
    description:
      "Build strength, support physical wellness and improve performance with care designed around your goals.",
    image:
      "https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/pexels-andrea-piacquadio-3836878-1024x683.jpg",
    accent: "teal",
    services: [
      "Fitness Training",
      "Strength Training",
      "Sports Specific Training",
      "Corporate Wellness",
      "Sports Nutrition",
      "Women’s Wellness",
      "Online Wellness Guidance",
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
              {String(serviceGroups.length).padStart(2, "0")} Care Categories
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
              Discover physiotherapy, rehabilitation and wellness
              services designed around your movement, recovery and
              individual needs.
            </p>
          </div>
        </motion.div>

        <div className="servicesGrid">
          {serviceGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                className={`serviceCard serviceCard${group.accent}`}
                key={group.number}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
              >
                <div className="serviceImageWrap">
                  <img
                    src={group.image}
                    alt={`${group.title} at Rehabics Physiotherapy`}
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
                        <FiCheckCircle className="serviceCheck" />
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
