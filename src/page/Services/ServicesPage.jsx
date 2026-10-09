import { motion } from "motion/react";
import {
  FiActivity,
  FiArrowUpRight,
  FiCheckCircle,
  FiHeart,
  FiMove,
  FiShield,
  FiTarget,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./ServicesPage.css";

const services = [
  {
    icon: FiActivity,
    number: "01",
    title: "Pain Management",
    description:
      "Personalised physiotherapy to help manage back pain, neck pain, joint discomfort and other movement related concerns.",
    tags: ["Back and neck pain", "Joint pain"],
  },
  {
    icon: FiMove,
    number: "02",
    title: "Movement Rehabilitation",
    description:
      "Improve mobility, flexibility, balance and everyday movement with a plan shaped around your current ability and goals.",
    tags: ["Mobility", "Balance and movement"],
  },
  {
    icon: FiShield,
    number: "03",
    title: "Injury Recovery",
    description:
      "Structured rehabilitation to support recovery after sports injuries, strains and other musculoskeletal conditions.",
    tags: ["Sports injuries", "Strength building"],
  },
  {
    icon: FiTarget,
    number: "04",
    title: "Posture and Ergonomics",
    description:
      "Understand movement habits and build practical routines that support better posture at work and during daily activities.",
    tags: ["Workplace posture", "Movement habits"],
  },
  {
    icon: FiHeart,
    number: "05",
    title: "Women’s Physiotherapy",
    description:
      "Supportive physiotherapy for women’s changing needs, with care plans tailored to individual concerns and comfort.",
    tags: ["Individual care", "Guided support"],
  },
  {
    icon: FiZap,
    number: "06",
    title: "Strength and Conditioning",
    description:
      "Progressive exercise guidance to build strength, confidence and physical capacity for the activities that matter to you.",
    tags: ["Strength", "Functional fitness"],
  },
  {
    icon: FiUsers,
    number: "07",
    title: "Individualised Care",
    description:
      "One to one attention that considers your symptoms, daily routine, progress and personal recovery goals.",
    tags: ["Personal care plan", "Progress reviews"],
  },
  {
    icon: FiCheckCircle,
    number: "08",
    title: "Recovery Guidance",
    description:
      "Practical guidance and home exercise recommendations to help you stay engaged with your recovery between visits.",
    tags: ["Home exercises", "Self management"],
  },
];

const steps = [
  {
    number: "01",
    title: "Understand your concern",
    text: "We listen to your experience, routine and goals before planning the next steps.",
  },
  {
    number: "02",
    title: "Build your care plan",
    text: "Your physiotherapist recommends an approach based on your assessment and needs.",
  },
  {
    number: "03",
    title: "Track your progress",
    text: "Your plan can be reviewed and adjusted as your movement and confidence improve.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function ServicesPage() {
  return (
    <main className="rehabServicesPage">
      <section className="rspHero">
        <div className="rspHeroGlow" />
        <div className="rspContainer rspHeroGrid">
          <motion.div
            className="rspHeroCopy"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span className="rspEyebrow"><i /> PHYSIOTHERAPY SERVICES</span>
            <h1>
              Move better.
              <span>Feel like yourself again.</span>
            </h1>
            <p>
              Thoughtful physiotherapy focused on your movement, comfort and
              personal goals. Your care should begin with understanding you.
            </p>
            <div className="rspHeroActions">
              <Link className="rspButton rspButtonPrimary" to="/contact">
                Book an appointment <FiArrowUpRight />
              </Link>
              <a className="rspButton rspButtonGhost" href="#our-services">
                Explore services
              </a>
            </div>
            <div className="rspHeroProof">
              <span><FiCheckCircle /> Personalised care</span>
              <span><FiCheckCircle /> Goal focused plans</span>
            </div>
          </motion.div>

          <motion.div
            className="rspHeroVisual"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <div className="rspHeroImage">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85"
                alt="Physiotherapist discussing a care plan"
              />
              <div className="rspImageShade" />
              <div className="rspImageCaption">
                <span>CARE THAT MOVES WITH YOU</span>
                <strong>Every step matters.</strong>
              </div>
            </div>
            <div className="rspFloatingCard">
              <span className="rspFloatingIcon"><FiHeart /></span>
              <div><strong>Your goals come first</strong><small>Care shaped around your needs</small></div>
            </div>
            <span className="rspHeroOrbit" />
          </motion.div>
        </div>
      </section>

      <section className="rspIntro rspSection">
        <div className="rspContainer rspIntroGrid">
          <div>
            <span className="rspSectionLabel">CARE THAT FITS YOU</span>
            <h2 className="rspHeading">A clearer path to <span>better movement.</span></h2>
          </div>
          <p>
            Pain and movement challenges can affect every part of daily life.
            Our approach starts by understanding what you are experiencing and
            working with you on practical, individualised next steps.
          </p>
        </div>
      </section>

      <section className="rspServices rspSection" id="our-services">
        <div className="rspContainer">
          <motion.div
            className="rspSectionHeading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <span className="rspSectionLabel">HOW WE CAN HELP</span>
            <h2 className="rspHeading">Physiotherapy for <span>your next step.</span></h2>
            <p>
              Explore our areas of care. Your physiotherapist can help identify
              which approach may suit your assessment and recovery goals.
            </p>
          </motion.div>

          <div className="rspServicesGrid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  className="rspServiceCard"
                  key={service.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.12 }}
                  variants={fadeUp}
                  transition={{ delay: (index % 4) * 0.06 }}
                >
                  <div className="rspServiceTop">
                    <span className="rspServiceIcon"><Icon /></span>
                    <span className="rspServiceNumber">{service.number}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="rspServiceTags">
                    {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <Link to="/contact" className="rspServiceLink" aria-label={`Ask about ${service.title}`}>
                    Ask about this service <FiArrowUpRight />
                  </Link>
                </motion.article>
              );
            })}
          </div>
          <p className="rspDisclaimer">
            The services offered and treatment recommendations depend on an
            individual assessment. Contact the clinic to confirm availability.
          </p>
        </div>
      </section>

      <section className="rspProcess rspSection">
        <div className="rspContainer rspProcessGrid">
          <div className="rspProcessIntro">
            <span className="rspSectionLabel">YOUR CARE JOURNEY</span>
            <h2 className="rspHeading">Care with a plan, <span>progress with purpose.</span></h2>
            <p>
              You deserve to understand your care and feel involved at every
              stage. We work with you to set meaningful goals and review how
              things are progressing.
            </p>
            <Link to="/about" className="rspTextLink">Get to know Rehabics <FiArrowUpRight /></Link>
          </div>
          <div className="rspSteps">
            {steps.map((step) => (
              <motion.div
                className="rspStep"
                key={step.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
              >
                <span className="rspStepNumber">{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
                <FiArrowUpRight className="rspStepArrow" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="rspCta rspSection">
        <div className="rspContainer rspCtaGrid">
          <div>
            <span className="rspSectionLabel">LET’S TAKE THE NEXT STEP</span>
            <h2>Not sure where to begin?<span>Let’s talk.</span></h2>
            <p>Tell us what you are experiencing and our team can help you with the next step.</p>
          </div>
          <div className="rspCtaAction">
            <Link to="/contact" className="rspButton rspButtonPrimary">Contact Rehabics <FiArrowUpRight /></Link>
            <span><FiCheckCircle /> Individual attention</span>
            <span><FiCheckCircle /> Clear next steps</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;
