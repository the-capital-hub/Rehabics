import { motion } from "motion/react";
import {
  FiActivity,
  FiArrowUpRight,
  FiAward,
  FiBookOpen,
  FiCheckCircle,
  FiHeart,
  FiMapPin,
  FiShield,
  FiTarget,
  FiUsers,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./AboutPage.css";

const clinicImage =
  "https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/rehabics-physiotherapy-bangalore-5fa37ebe3aad5-2.jpg";

const doctorImage =
  "https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/WhatsApp-Image-2020-10-19-at-1.39.12-AM-750x750-1.jpeg";

const clinicImages = [
  "https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/physiotherapy_h.jpg",
  "https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-14-at-1.12.49-PM-9-1024x606.jpg",
];

const values = [
  {
    icon: FiHeart,
    number: "01",
    title: "Patient First",
    text: "We listen carefully and shape care around each patient's needs.",
  },
  {
    icon: FiActivity,
    number: "02",
    title: "Root Cause Focus",
    text: "We aim to understand the underlying cause of pain, not just the symptoms.",
  },
  {
    icon: FiTarget,
    number: "03",
    title: "Individualised Care",
    text: "Treatment plans are tailored to each patient's condition and convenience.",
  },
];

const services = [
  {
    icon: FiActivity,
    title: "Dry Needling Therapy",
    text: "A specialised technique included in our clinical expertise.",
  },
  {
    icon: FiTarget,
    title: "Sports and Musculoskeletal Injuries",
    text: "Support for injury recovery, movement and physical function.",
  },
  {
    icon: FiShield,
    title: "Core and Spine Rehabilitation",
    text: "Care focused on core rehabilitation and spine related concerns.",
  },
  {
    icon: FiUsers,
    title: "Women's Health",
    text: "Physiotherapy care that considers individual needs and goals.",
  },
];

const qualifications = [
  "Bachelor of Physiotherapy (BPT)",
  "The Oxford College of Physiotherapy, Bengaluru",
  "Affiliated with Rajiv Gandhi University of Health Sciences, Karnataka",
];

const certifications = [
  "Dry Needling Therapy (DNT)",
  "Kinesiotaping (KTP)",
  "Member of the Indian Association of Physiotherapy (IAP)",
  "Attended professional workshops and a NIMHANS conference",
];

const locations = [
  {
    name: "Koramangala",
    address: "Bengaluru, Karnataka",
  },
  {
    name: "Haralur",
    address: "Bengaluru, Karnataka",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <motion.div
      className={`rapSectionHeading ${light ? "rapHeadingLight" : ""}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <span className="rapEyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <main className="rehabAboutPage">
      <section className="rapHero">
        <div className="rapHeroPattern" aria-hidden="true" />

        <div className="rapContainer rapHeroGrid">
          <motion.div
            className="rapHeroCopy"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span className="rapEyebrow rapHeroEyebrow">
              <span className="rapEyebrowDot" />
              ABOUT REHABICS
            </span>

            <h1>
              Care that looks
              <span>beyond the pain.</span>
            </h1>

            <p>
              End to end physiotherapy care that focuses on understanding the
              root cause of pain, improving movement and helping you return to
              everyday life with confidence.
            </p>

            <div className="rapHeroActions">
              <Link to="/contact" className="rapButton rapButtonPrimary">
                Book a Consultation <FiArrowUpRight />
              </Link>
              <a href="#rapStory" className="rapButton rapButtonGhost">
                Discover Our Story
              </a>
            </div>

            <div className="rapHeroChecks">
              <span><FiCheckCircle /> Patient focused care</span>
              <span><FiCheckCircle /> Evidence based practice</span>
            </div>
          </motion.div>

          <motion.div
            className="rapHeroVisual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img src={clinicImages[0]} alt="Rehabics physiotherapy clinic" />
            <div className="rapHeroFloat">
              <span className="rapFloatIcon"><FiHeart /></span>
              <div>
                <strong>Care with purpose</strong>
                <small>Focused on your recovery</small>
              </div>
            </div>
            <div className="rapHeroAccent" />
          </motion.div>
        </div>
      </section>

      <section className="rapStory rapSection" id="rapStory">
        <div className="rapContainer rapStoryGrid">
          <motion.div
            className="rapStoryVisual"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img src={clinicImage} alt="Rehabics physiotherapy centre" />
            <div className="rapImageCaption">
              <FiMapPin />
              <span>Koramangala, Bengaluru</span>
            </div>
          </motion.div>

          <motion.div
            className="rapStoryCopy"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="rapEyebrow">OUR STORY</span>
            <h2>
              Helping you move
              <span> towards a better life.</span>
            </h2>
            <p>
              Rehabics is a state of the art physiotherapy centre providing
              end to end care for aches and pains. Our approach focuses on
              understanding and treating the root cause rather than only the
              symptoms.
            </p>
            <p>
              Our centres provide a spacious environment, modern equipment and
              a convenient setting for physiotherapy care. We combine clinical
              knowledge with evidence based practice to support each patient's
              recovery journey.
            </p>

            <div className="rapStoryPoints">
              <div><FiCheckCircle /><span>Root cause focused approach</span></div>
              <div><FiCheckCircle /><span>Individual treatment planning</span></div>
              <div><FiCheckCircle /><span>Two Bengaluru locations</span></div>
            </div>

            <Link to="/services" className="rapTextLink">
              Explore our services <FiArrowUpRight />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="rapFounder rapSection">
        <div className="rapContainer rapFounderGrid">
          <motion.div
            className="rapFounderImage"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img src={doctorImage} alt="Dr. Archita Tiwari" />
            <div className="rapFounderBadge">
              <FiAward />
              <span>Founder and Director</span>
            </div>
          </motion.div>

          <motion.div
            className="rapFounderContent"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="rapEyebrow">MEET OUR FOUNDER</span>
            <h2>
              Dr. Archita
              <span> Tiwari</span>
            </h2>
            <h3>Founder and Director, Rehabics Physiotherapy</h3>
            <p>
              Dr. Archita Tiwari leads Rehabics Physiotherapy and Rehabilitation
              Centre in Koramangala, Bengaluru. Her clinical experience and
              focus on individualised treatment guide the centre's approach
              to patient care.
            </p>
            <p>
              She previously worked for three years as a Team Leader
              Physiotherapist at the Koramangala branch of Zelus Physiotherapy
              Private Limited.
            </p>

            <div className="rapCredentials">
              <div className="rapCredentialTitle">
                <FiBookOpen />
                <h4>Education</h4>
              </div>
              {qualifications.map((item) => (
                <div className="rapCredentialItem" key={item}>
                  <FiCheckCircle />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="rapCredentials">
              <div className="rapCredentialTitle">
                <FiAward />
                <h4>Certifications and Professional Learning</h4>
              </div>
              {certifications.map((item) => (
                <div className="rapCredentialItem" key={item}>
                  <FiCheckCircle />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="rapValues rapSection">
        <div className="rapContainer">
          <SectionHeading
            eyebrow="WHAT GUIDES US"
            title="Care built around you"
            description="Our approach brings together attentive listening, clinical understanding and a clear focus on your recovery."
          />

          <div className="rapValueGrid">
            {values.map(({ icon: Icon, number, title, text }) => (
              <motion.article
                className="rapValueCard"
                key={number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="rapCardTop">
                  <span className="rapCardIcon"><Icon /></span>
                  <span className="rapCardNumber">{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="rapServices rapSection">
        <div className="rapContainer">
          <SectionHeading
            eyebrow="OUR EXPERTISE"
            title="Support for better movement"
            description="Our clinical focus includes a range of physiotherapy needs, with care tailored to the individual."
          />

          <div className="rapServiceGrid">
            {services.map(({ icon: Icon, title, text }) => (
              <motion.article
                className="rapServiceCard"
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <span className="rapServiceIcon"><Icon /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="rapLocations rapSection">
        <div className="rapContainer">
          <SectionHeading
            eyebrow="FIND US"
            title="Care closer to you"
            description="Visit one of our physiotherapy centres in Bengaluru."
          />

          <div className="rapLocationGrid">
            {locations.map((location) => (
              <article className="rapLocationCard" key={location.name}>
                <span className="rapLocationIcon"><FiMapPin /></span>
                <div>
                  <h3>{location.name}</h3>
                  <p>{location.address}</p>
                </div>
                <FiArrowUpRight className="rapLocationArrow" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rapCTA">
        <div className="rapContainer rapCTAGrid">
          <div>
            <span className="rapEyebrow rapCTAeyebrow">YOUR RECOVERY JOURNEY</span>
            <h2>Take the next step towards moving better.</h2>
            <p>Connect with our team to discuss your physiotherapy needs.</p>
          </div>
          <Link to="/contact" className="rapButton rapButtonLight">
            Contact Rehabics <FiArrowUpRight />
          </Link>
        </div>
      </section>
    </main>
  );
}