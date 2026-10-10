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
  FiWind,
  FiTrendingUp,
  FiUserCheck,
  FiHome,
  FiMonitor,
  FiSmile,
  FiSun,
  FiRefreshCw,
  FiAward,
  FiCompass,
  FiLifeBuoy,
  FiLayers,
  FiClock,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./ServicesPage.css";



const physiotherapyServices = [
  {
    icon: FiActivity,
    number: "01",
    title: "Musculoskeletal Assessment",
    description:
      "A structured assessment of movement, strength and discomfort to help your physiotherapist understand your needs.",
    tags: ["Movement review", "Personal care plan"],
  },
  {
    icon: FiHeart,
    number: "02",
    title: "Myofascial and Trigger Point Release",
    description:
      "Hands on techniques may be used as part of a wider plan to address muscle tension and movement concerns.",
    tags: ["Muscle tension", "Guided treatment"],
  },
  {
    icon: FiShield,
    number: "03",
    title: "Pre and Post Operative Rehabilitation",
    description:
      "Guided rehabilitation before or after surgery, shaped around your procedure, clinical advice and recovery goals.",
    tags: ["Recovery support", "Progress reviews"],
  },
  {
    icon: FiTarget,
    number: "04",
    title: "Dry Needling Therapy",
    description:
      "A targeted treatment that may be considered by a qualified practitioner after an appropriate assessment.",
    tags: ["Individual assessment", "Targeted care"],
  },
  {
    icon: FiMove,
    number: "05",
    title: "Injury Rehabilitation",
    description:
      "A progressive plan to support mobility, strength and confidence while recovering from an injury.",
    tags: ["Mobility", "Strength building"],
  },
  {
    icon: FiUserCheck,
    number: "06",
    title: "Posture Correction",
    description:
      "Practical movement guidance and exercise recommendations for posture during work and everyday activities.",
    tags: ["Movement habits", "Ergonomic guidance"],
  },
  {
    icon: FiWind,
    number: "07",
    title: "Cupping Therapy",
    description:
      "Cupping may be included in care when appropriate following discussion of your needs and suitability.",
    tags: ["Individual review", "Supportive care"],
  },
  {
    icon: FiLayers,
    number: "08",
    title: "Kinesio Taping",
    description:
      "Taping techniques may be used alongside exercise and rehabilitation when they suit your treatment plan.",
    tags: ["Movement support", "Rehabilitation"],
  },
  {
    icon: FiRefreshCw,
    number: "09",
    title: "Traction",
    description:
      "A physiotherapy technique considered only when clinically appropriate for your condition and assessment.",
    tags: ["Clinical assessment", "Individual plan"],
  },
  {
    icon: FiZap,
    number: "10",
    title: "Ultrasound Therapy",
    description:
      "A treatment modality that may form part of a broader physiotherapy plan when appropriate.",
    tags: ["Treatment support", "Care plan"],
  },
  {
    icon: FiActivity,
    number: "11",
    title: "Neuro Physiotherapy",
    description:
      "Movement and functional support for people living with neurological conditions, based on individual goals.",
    tags: ["Functional movement", "Personal goals"],
  },
  {
    icon: FiHeart,
    number: "12",
    title: "Pediatric Physiotherapy",
    description:
      "Age appropriate movement support planned around a child's individual needs and family priorities.",
    tags: ["Child focused", "Family guidance"],
  },
  {
    icon: FiSun,
    number: "13",
    title: "Pre and Postnatal Training",
    description:
      "Individual guidance for movement and exercise during pregnancy and after birth, subject to clinical suitability.",
    tags: ["Personal guidance", "Safe progression"],
  },
  {
    icon: FiUsers,
    number: "14",
    title: "Deep Tissue Massage",
    description:
      "Hands on soft tissue work that may be considered as one part of a broader care approach.",
    tags: ["Soft tissue care", "Relaxation support"],
  },
  {
    icon: FiAward,
    number: "15",
    title: "Geriatric Physiotherapy",
    description:
      "Support for strength, balance, mobility and daily function with goals suited to the individual.",
    tags: ["Balance", "Everyday mobility"],
  },
  {
    icon: FiTrendingUp,
    number: "16",
    title: "Tailored Exercise Therapy",
    description:
      "A personalised exercise plan designed around your current ability, goals and progress.",
    tags: ["Personal plan", "Progressive exercise"],
  },
  {
    icon: FiZap,
    number: "17",
    title: "IFT, TENS and Electrical Stimulation",
    description:
      "Electrotherapy options may be considered after assessment as part of a suitable treatment plan.",
    tags: ["Clinical guidance", "Treatment support"],
  },
  {
    icon: FiHome,
    number: "18",
    title: "Geriatric Physiotherapy and Home Care",
    description:
      "Movement support for older adults with care planned around daily activities and the home environment.",
    tags: ["Home focused care", "Daily activities"],
  },
  {
    icon: FiActivity,
    number: "19",
    title: "Neck and Back Pain",
    description:
      "Assessment and movement guidance to help address neck or back pain and improve everyday function.",
    tags: ["Pain management", "Movement advice"],
  },
  {
    icon: FiHeart,
    number: "20",
    title: "Muscle and Joint Related Pain",
    description:
      "Individual assessment and care options for muscle and joint discomfort that affects daily movement.",
    tags: ["Joint mobility", "Personalised care"],
  },
];

const trainingServices = [
  {
    icon: FiActivity,
    number: "01",
    title: "Fitness Training",
    description:
      "Structured fitness guidance designed around your current level, routine and personal goals.",
    tags: ["Fitness goals", "Guided sessions"],
  },
  {
    icon: FiUsers,
    number: "02",
    title: "Corporate Wellness",
    description:
      "Movement, activity and wellbeing guidance to support healthier routines in the workplace.",
    tags: ["Workplace wellbeing", "Healthy habits"],
  },
  {
    icon: FiTrendingUp,
    number: "03",
    title: "Strength Training",
    description:
      "Progressive strength sessions with attention to technique, ability and gradual improvement.",
    tags: ["Strength", "Technique"],
  },
  {
    icon: FiAward,
    number: "04",
    title: "Sports Specific Training",
    description:
      "Training shaped around the movement demands of your sport and your individual development goals.",
    tags: ["Sports movement", "Performance goals"],
  },
  {
    icon: FiSmile,
    number: "05",
    title: "Sports Training for Children",
    description:
      "Age appropriate training that encourages movement skills, coordination and confidence.",
    tags: ["Coordination", "Skill development"],
  },
  {
    icon: FiHome,
    number: "06",
    title: "Physiotherapy at Home",
    description:
      "Ask our team about home based physiotherapy options and whether they are available in your area.",
    tags: ["Home convenience", "Individual care"],
  },
  {
    icon: FiMonitor,
    number: "07",
    title: "Ergonomic Advice",
    description:
      "Practical suggestions for your workstation, daily posture and movement breaks.",
    tags: ["Workstation setup", "Daily movement"],
  },
  {
    icon: FiHeart,
    number: "08",
    title: "Psychological Rehabilitation",
    description:
      "Supportive rehabilitation planning that recognises the wider personal challenges of recovery.",
    tags: ["Whole person care", "Supportive approach"],
  },
  {
    icon: FiSun,
    number: "09",
    title: "Women’s Wellness",
    description:
      "Individual wellness guidance shaped around personal needs, comfort and appropriate professional advice.",
    tags: ["Individual needs", "Personal guidance"],
  },
  {
    icon: FiTarget,
    number: "10",
    title: "Sports Nutrition",
    description:
      "General nutrition guidance for activity goals, with specialist advice recommended for individual dietary needs.",
    tags: ["Activity goals", "Healthy routines"],
  },
  {
    icon: FiMonitor,
    number: "11",
    title: "Online Physiotherapy",
    description:
      "Explore remote consultation options for movement guidance and follow up, subject to service availability.",
    tags: ["Remote guidance", "Flexible access"],
  },
];

const careSteps = [
  {
    number: "01",
    title: "We listen and assess",
    text: "We discuss your concerns, daily routine and goals to understand what matters most to you.",
  },
  {
    number: "02",
    title: "We shape your plan",
    text: "Your physiotherapist explains suitable next steps based on your assessment and individual needs.",
  },
  {
    number: "03",
    title: "We review your progress",
    text: "Your plan can be adjusted over time as your needs, movement and confidence change.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};


const physioImages = [
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1599058917212-d750089bc07b?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=85",
];

const trainingImages = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=85",
];

function ServiceCard({ service, index, category }) {
  const Icon = service.icon;

  const isPhysio = category.toLowerCase().includes("physiotherapy");
  const images = isPhysio ? physioImages : trainingImages;
  const imageUrl = images[index % images.length];

  return (
    <motion.article
      className="rspServiceCard"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={fadeUp}
      transition={{ delay: (index % 4) * 0.045 }}
    >
      <img
        className="rspServiceImage"
        src={imageUrl}
        alt=""
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />

      <div className="rspServiceTop">
        <span className="rspServiceIcon">
          <Icon aria-hidden="true" />
        </span>
        <span className="rspServiceNumber">{service.number}</span>
      </div>

      <h3>{service.title}</h3>
      <p>{service.description}</p>

      <div className="rspServiceTags">
        {service.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <Link
        to="/contact"
        className="rspServiceLink"
        aria-label={`Ask about ${service.title}`}
        state={{ service: service.title, category }}
      >
        Ask about this service <FiArrowUpRight aria-hidden="true" />
      </Link>
    </motion.article>
  );
}


function ServiceGroup({ id, label, title, description, services, tone }) {
  return (
    <section className={`rspServiceGroup rspSection ${tone}`} id={id}>
      <div className="rspContainer">
        <motion.div
          className="rspSectionHeading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <span className="rspSectionLabel">{label}</span>
          <h2 className="rspHeading">{title}</h2>
          <p>{description}</p>
        </motion.div>
        <div className="rspServicesGrid">
          {services.map((service, index) => (
            <ServiceCard
              key={service.number + service.title}
              service={service}
              index={index}
              category={label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPage() {
  return (
    <main className="rehabServicesPage">
      <section className="rspHero">
        <div className="rspHeroGlow" aria-hidden="true" />
        <div className="rspContainer rspHeroGrid">
          <motion.div
            className="rspHeroCopy"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span className="rspEyebrow">
              <i aria-hidden="true" /> REHABICS SERVICES
            </span>
            <h1>
              Move with confidence.
              <span>Find care that fits you.</span>
            </h1>
            <p>
              From physiotherapy and recovery support to fitness and movement
              training, explore care options shaped around your needs and goals.
            </p>
            <div className="rspHeroActions">
              <Link className="rspButton rspButtonPrimary" to="/contact">
                Book an appointment <FiArrowUpRight aria-hidden="true" />
              </Link>
              <a className="rspButton rspButtonGhost" href="#physiotherapy">
                Explore services
              </a>
            </div>
            <div className="rspHeroProof">
              <span><FiCheckCircle aria-hidden="true" /> Individual attention</span>
              <span><FiCheckCircle aria-hidden="true" /> Goal focused care</span>
            </div>
          </motion.div>

          <motion.div
            className="rspHeroVisual"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div className="rspHeroImage">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1100&q=85"
                alt="Physiotherapist talking with a patient in a clinic"
              />
              <div className="rspImageShade" />
              <div className="rspImageCaption">
                <span>CARE THAT MOVES WITH YOU</span>
                <strong>Every step matters.</strong>
              </div>
            </div>
            <div className="rspFloatingCard">
              <span className="rspFloatingIcon"><FiHeart aria-hidden="true" /></span>
              <div>
                <strong>Your goals come first</strong>
                <small>Care shaped around your needs</small>
              </div>
            </div>
            <span className="rspHeroOrbit" aria-hidden="true" />
          </motion.div>
        </div>
      </section>

      <section className="rspIntro rspSection">
        <div className="rspContainer rspIntroGrid">
          <div>
            <span className="rspSectionLabel">CARE THAT FITS YOU</span>
            <h2 className="rspHeading">
              A clearer path to <span>better movement.</span>
            </h2>
          </div>
          <p>
            Every person has different needs. Explore our physiotherapy and
            training services, then speak with our team to understand which
            options may be suitable for you.
          </p>
        </div>
        <div className="rspContainer rspCategoryLinks">
          <a href="#physiotherapy"><FiActivity aria-hidden="true" /> Physiotherapy Services <FiArrowUpRight aria-hidden="true" /></a>
          <a href="#training"><FiTrendingUp aria-hidden="true" /> Training Services <FiArrowUpRight aria-hidden="true" /></a>
        </div>
      </section>

      <ServiceGroup
        id="physiotherapy"
        label="PHYSIOTHERAPY SERVICES"
        title={<>Support for <span>movement and recovery.</span></>}
        description="Explore physiotherapy options for assessment, pain concerns, rehabilitation and everyday movement. Treatment suitability is determined after an individual assessment."
        services={physiotherapyServices}
        tone="rspPhysioGroup"
      />

      <ServiceGroup
        id="training"
        label="TRAINING SERVICES"
        title={<>Build strength. <span>Grow confidence.</span></>}
        description="Explore training and wellness options designed around fitness, sports, work and daily life. Ask our team about current availability and the right next step."
        services={trainingServices}
        tone="rspTrainingGroup"
      />

      <section className="rspProcess rspSection">
        <div className="rspContainer rspProcessGrid">
          <div className="rspProcessIntro">
            <span className="rspSectionLabel">YOUR CARE JOURNEY</span>
            <h2 className="rspHeading">
              A plan built around <span>your goals.</span>
            </h2>
            <p>
              You deserve to understand your care and feel involved at every
              stage. We work with you to set meaningful goals and review your
              progress together.
            </p>
            <Link to="/about" className="rspTextLink">
              Get to know Rehabics <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <div className="rspSteps">
            {careSteps.map((step) => (
              <motion.div
                className="rspStep"
                key={step.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
              >
                <span className="rspStepNumber">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
                <FiArrowUpRight className="rspStepArrow" aria-hidden="true" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="rspDisclaimerWrap">
        <div className="rspContainer">
          <p className="rspDisclaimer">
            Services and treatment recommendations depend on an individual
            assessment. Please contact Rehabics to confirm availability and
            suitability for your needs.
          </p>
        </div>
      </section>

      <section className="rspCta rspSection">
        <div className="rspContainer rspCtaGrid">
          <div>
            <span className="rspSectionLabel">LET’S TAKE THE NEXT STEP</span>
            <h2>Not sure where to begin?<span>Let’s talk.</span></h2>
            <p>
              Tell us what you are experiencing and our team can help you
              understand the next step.
            </p>
          </div>
          <div className="rspCtaAction">
            <Link to="/contact" className="rspButton rspButtonPrimary">
              Contact Rehabics <FiArrowUpRight aria-hidden="true" />
            </Link>
            <span><FiCheckCircle aria-hidden="true" /> Individual attention</span>
            <span><FiCheckCircle aria-hidden="true" /> Clear next steps</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;
