import { motion } from "motion/react";

import {

  FiActivity,

  FiArrowUpRight,

  FiAward,

  FiCheckCircle,

  FiHeart,

  FiMapPin,

  FiShield,

  FiTarget,

  FiUsers,

  FiBookOpen,

} from "react-icons/fi";

import { Link } from "react-router-dom";

import doctor from "../../assets/docotor.png";

import "./AboutPage.css";

const values = [

  {

    icon: FiHeart,

    number: "01",

    title: "Patient First",

    text: "We listen carefully, communicate clearly and shape care around each person's needs.",

  },

  {

    icon: FiActivity,

    number: "02",

    title: "Whole Body Approach",

    text: "We consider how movement, strength and everyday habits work together.",

  },

  {

    icon: FiTarget,

    number: "03",

    title: "Purposeful Progress",

    text: "We work towards practical goals that support confidence and everyday function.",

  },

];

const services = [

  {

    icon: FiActivity,

    title: "Pain Management",

    text: "Physiotherapy support for musculoskeletal injuries and spine care, focused on underlying causes.",

  },

  {

    icon: FiTarget,

    title: "Movement Rehabilitation",

    text: "Rehabilitation support for core function, movement and everyday activities.",

  },

  {

    icon: FiShield,

    title: "Injury Recovery",

    text: "Physiotherapy support for sports injuries and musculoskeletal injuries.",

  },

  {

    icon: FiUsers,

    title: "Individualised Care",

    text: "Individualised treatment plans shaped around each patient’s condition and convenience.",

  },

];

const qualifications = [

  "Bachelor of Physiotherapy (BPT), completed in 2017",

  "The Oxford College of Physiotherapy, Bengaluru",

  "Affiliated with Rajiv Gandhi University of Health Sciences, Karnataka",

];

const certifications = [

  "Cupping Therapy",

  "Dry Needling Therapy",

  "Kinesio Taping",

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

            <span className="rapEyebrow">

              <span className="rapEyebrowDot" />

              ABOUT REHABICS

            </span>

            <h1>

              Care that looks

              <span>beyond the pain.</span>

            </h1>

            <p>

              Personalised physiotherapy focused on understanding your needs,

              supporting your recovery and helping you move with confidence.

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

              <span><FiCheckCircle /> Patient focused</span>

              <span><FiCheckCircle /> Personalised care</span>

              <span><FiCheckCircle /> Movement focused</span>

            </div>

          </motion.div>

          <motion.div

            className="rapHeroVisual"

            initial={{ opacity: 0, scale: 0.97 }}

            animate={{ opacity: 1, scale: 1 }}

            transition={{ duration: 0.75 }}

          >

            <div className="rapHeroImage">

              <img src={doctor} alt="Dr. Archita Tiwari, Founder and Director" />

              <div className="rapHeroImageShade" />

              <div className="rapHeroImageCaption">

                <span>OUR PURPOSE</span>

                <strong>Every movement matters.</strong>

              </div>

            </div>

            <div className="rapFloatingNote">

              <span className="rapFloatingIcon"><FiHeart /></span>

              <span>

                <strong>Care with empathy</strong>

                <small>Support for your recovery journey</small>

              </span>

            </div>

            <span className="rapVisualIndex">REHABICS / 01</span>

          </motion.div>

        </div>

      </section>

      <section className="rapStory rapSection" id="rapStory">

        <div className="rapContainer rapStoryGrid">

          <motion.div

            className="rapStoryVisual"

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, amount: 0.2 }}

            variants={fadeUp}

          >

            <div className="rapStoryImage">

              <img src={doctor} alt="Rehabics founder and physiotherapy professional" loading="lazy" />

            </div>

            <div className="rapStoryBadge">

              <FiActivity />

              <span>Movement. Recovery. Wellbeing.</span>

            </div>

          </motion.div>

          <motion.div

            className="rapStoryCopy"

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, amount: 0.2 }}

            variants={fadeUp}

          >

            <span className="rapSectionLabel">OUR STORY</span>

            <h2 className="rapHeading">

              Better care begins

              <span>with understanding.</span>

            </h2>

            <p>

              At Rehabics Physiotherapy and Rehabilitation Centre, we believe

              that effective care starts by understanding the person, not just

              the pain. Every patient's routine, goals and challenges are

              different.

            </p>

            <p>

              Our approach centres on thoughtful assessment, clear

              communication and personalised rehabilitation to help people

              work towards improved movement and everyday function.

            </p>

            <div className="rapStoryPoints">

              <span><FiCheckCircle /> Listen and understand</span>

              <span><FiCheckCircle /> Set meaningful goals</span>

              <span><FiCheckCircle /> Support steady progress</span>

            </div>

          </motion.div>

        </div>

      </section>

      <section className="rapFounder rapSection">

        <div className="rapContainer rapFounderGrid">

          <motion.div

            className="rapFounderVisual"

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, amount: 0.2 }}

            variants={fadeUp}

          >

            <img src={doctor} alt="Dr. Archita Tiwari" loading="lazy" />

            <div className="rapFounderOverlay" />

            <div className="rapFounderTop">

              <span>FOUNDER AND DIRECTOR</span>

              <FiArrowUpRight />

            </div>

            <div className="rapFounderCaption">

              <span>Meet our founder</span>

              <h3>Dr. Archita Tiwari</h3>

              <p>Founder and Director of Rehabics Physiotherapy and Rehabilitation Centre.</p>

            </div>

            <span className="rapFounderAccent" />

          </motion.div>

          <motion.div

            className="rapFounderCopy"

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, amount: 0.2 }}

            variants={fadeUp}

          >

            <span className="rapSectionLabel">THE PERSON BEHIND REHABICS</span>

            <h2 className="rapHeading">

              Expertise guided

              <span>by empathy.</span>

            </h2>

            <p className="rapLead">

              Dr. Archita Tiwari is the Founder and Director of Rehabics

              Physiotherapy and Rehabilitation Centre in Bengaluru.

            </p>

            <p>

              She completed her Bachelor of Physiotherapy at The Oxford College

              of Physiotherapy, Bengaluru, affiliated with Rajiv Gandhi

              University of Health Sciences, Karnataka, in 2017.

            </p>

            <div className="rapQualificationBox">

              <span className="rapQualificationIcon"><FiBookOpen /></span>

              <div>

                <h3>Education and qualifications</h3>

                <ul>

                  {qualifications.map((item) => (

                    <li key={item}><FiCheckCircle /><span>{item}</span></li>

                  ))}

                </ul>

              </div>

            </div>

            <div className="rapCertifications">

              <span>Additional training</span>

              <div>

                {certifications.map((item) => <span key={item}>{item}</span>)}

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      <section className="rapValues rapSection">

        <div className="rapContainer">

          <div className="rapSectionHeading">

            <span className="rapSectionLabel">WHAT GUIDES US</span>

            <h2 className="rapHeading">Care built around <span>you.</span></h2>

            <p>Our values shape how we listen, guide and support each patient.</p>

          </div>

          <div className="rapValuesGrid">

            {values.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.article

                  className="rapValueCard"

                  key={item.number}

                  initial="hidden"

                  whileInView="visible"

                  viewport={{ once: true, amount: 0.15 }}

                  variants={fadeUp}

                  transition={{ delay: index * 0.08 }}

                  whileHover={{ y: -5 }}

                >

                  <div className="rapCardTop">

                    <span className="rapCardIcon"><Icon /></span>

                    <span className="rapCardNumber">{item.number}</span>

                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <span className="rapCardRule" />

                </motion.article>

              );

            })}

          </div>

        </div>

      </section>

      <section className="rapPhilosophy rapSection">

        <div className="rapContainer rapPhilosophyPanel">

          <div>

            <span className="rapSectionLabel">OUR PHILOSOPHY</span>

            <h2 className="rapHeading">Body as <span>a whole.</span></h2>

          </div>

          <div className="rapPhilosophyCopy">

            <p>

              We consider how different parts of the body work together and

              how movement patterns can affect daily activities.

            </p>

            <p>

              Our aim is to educate, guide and support each patient through a

              rehabilitation journey that reflects their individual needs.

            </p>

          </div>

          <FiActivity className="rapPhilosophyWatermark" aria-hidden="true" />

        </div>

      </section>

      <section className="rapServices rapSection">

        <div className="rapContainer">

          <div className="rapSectionHeading">

            <span className="rapSectionLabel">HOW WE SUPPORT YOU</span>

            <h2 className="rapHeading">A thoughtful path to <span>recovery.</span></h2>

            <p>Explore the areas where physiotherapy may support your goals.</p>

          </div>

          <div className="rapServicesGrid">

            {services.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.article

                  className="rapServiceCard"

                  key={item.title}

                  initial="hidden"

                  whileInView="visible"

                  viewport={{ once: true, amount: 0.15 }}

                  variants={fadeUp}

                  transition={{ delay: index * 0.06 }}

                >

                  <span className="rapServiceIcon"><Icon /></span>

                  <span className="rapServiceNumber">0{index + 1}</span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <FiArrowUpRight className="rapServiceArrow" />

                </motion.article>

              );

            })}

          </div>

        </div>

      </section>

      <section className="rapLocations rapSection">

        <div className="rapContainer">

          <div className="rapSectionHeading">

            <span className="rapSectionLabel">VISIT REHABICS</span>

            <h2 className="rapHeading">Care close to <span>home.</span></h2>

            <p>Rehabics currently operates through two branches in Bengaluru: Koramangala and Haralur.</p>

          </div>

          <div className="rapLocationGrid">

            {locations.map((item) => (

              <article className="rapLocationCard" key={item.name}>

                <span className="rapLocationIcon"><FiMapPin /></span>

                <div>

                  <h3>{item.name}</h3>

                  <p>{item.address}</p>

                </div>

                <FiArrowUpRight className="rapLocationArrow" />

              </article>

            ))}

          </div>

        </div>

      </section>

      <section className="rapCta">

        <div className="rapCtaPattern" aria-hidden="true" />

        <div className="rapContainer rapCtaGrid">

          <div>

            <span className="rapEyebrow"><span className="rapEyebrowDot" /> YOUR NEXT STEP</span>

            <h2>Ready to move <span>forward?</span></h2>

            <p>

              Connect with Rehabics to discuss your physiotherapy needs and

              take the next step in your recovery journey.

            </p>

            <div className="rapHeroActions">

              <Link to="/contact" className="rapButton rapButtonPrimary">

                Get in Touch <FiArrowUpRight />

              </Link>

              <Link to="/services" className="rapButton rapButtonGhost">

                Explore Services

              </Link>

            </div>

          </div>

          <div className="rapCtaNote">

            <span><FiHeart /></span>

            <strong>Move better. Feel stronger.</strong>

            <p>Support that starts with understanding you.</p>

          </div>

        </div>

      </section>

    </main>

  );

}
