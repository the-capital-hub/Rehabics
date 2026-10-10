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
import logo from "../../assets/logo.png";

import { Link } from "react-router-dom";

import "./AboutPage.css";

const clinicImage =

  logo;

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

function SectionHeading({ eyebrow, kicker, title, description, meta, light = false }) {
  return (
    <motion.div
      className={`rapSectionHeading ${light ? "rapHeadingLight" : ""}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="rapHeadingTopline">
        <span className="rapEyebrow">
          <span className="rapEyebrowDot" />
          {eyebrow}
        </span>
        {meta && <span className="rapHeadingMeta">{meta}</span>}
      </div>
      {kicker && <span className="rapHeadingKicker">{kicker}</span>}
      <div className="rapHeadingMain">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
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

      <div className="rapHeroTopline">

        <span className="rapEyebrow rapHeroEyebrow">

          <span className="rapEyebrowDot" />

          ABOUT REHABICS

        </span>

        <span className="rapHeroIndex">OUR APPROACH</span>

      </div>

      <span className="rapHeroKicker">

        MOVE BETTER. FEEL BETTER.

      </span>

      <h1>

        Care that looks

        <span>beyond the pain.</span>

      </h1>

      <p className="rapHeroDescription">

        Your recovery deserves more than temporary relief.

        We combine expert physiotherapy, personalised care

        and evidence based treatment to help you move with

        confidence and return to the life you love.

      </p>

      <div className="rapHeroActions">

        <Link to="/contact" className="rapButton rapButtonPrimary">

          Book a Consultation

          <FiArrowUpRight />

        </Link>

        <a href="#rapStory" className="rapButton rapButtonGhost">

          Discover Our Story

          <FiArrowUpRight />

        </a>

      </div>

      <div className="rapHeroChecks">

        <span>

          <FiCheckCircle />

          Patient focused care

        </span>

        <span>

          <FiCheckCircle />

          Personalised recovery

        </span>

      </div>

    </motion.div>

    <motion.div

      className="rapHeroVisual"

      initial={{ opacity: 0, y: 18, scale: 0.98 }}

      animate={{ opacity: 1, y: 0, scale: 1 }}

      transition={{ duration: 0.75, ease: "easeOut" }}

    >

      <div className="rapHeroImageFrame">

        <img

          src={clinicImages[0]}

          alt="Physiotherapy care at Rehabics"

        />

        <div className="rapHeroImageShade" />

        <div className="rapHeroImageLabel">

          <span className="rapHeroLiveDot" />

          CARE THAT MOVES YOU FORWARD

        </div>

      </div>

      

      <div className="rapHeroAccent" aria-hidden="true" />

      <div className="rapHeroOrb" aria-hidden="true" />

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

            

          </motion.div>

          <motion.div

            className="rapStoryCopy"

            initial="hidden"

            whileInView="visible"

            variants={fadeUp}

            viewport={{ once: true, amount: 0.2 }}

          >

            <div className="rapHeadingTopline">

              <span className="rapEyebrow"><span className="rapEyebrowDot" />OUR STORY</span>

              

            </div>

            <span className="rapHeadingKicker">CARE THAT STARTS WITH LISTENING.</span>

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


<section className="rapFounder rapSection" id="rapFounder">
  <div className="rapContainer rapFounderGrid">
    <motion.div
      className="rapFounderContent"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="rapHeadingTopline">
        <span className="rapEyebrow">
          <span className="rapEyebrowDot" />
          MEET OUR FOUNDER
        </span>
        <span className="rapHeadingMeta">
          CLINICAL LEADERSHIP
        </span>
      </div>

      <span className="rapHeadingKicker">
        EXPERIENCE WITH A PERSONAL TOUCH
      </span>

      <h2 className="rapFounderName">
        Dr. Archita <span>Tiwari</span>
      </h2>

      <div className="rapFounderRole">
        <span className="rapFounderRoleLine" />
        <h3>Founder and Director, Rehabics Physiotherapy</h3>
      </div>

      <p className="rapFounderIntro">
        Dr. Archita Tiwari leads Rehabics Physiotherapy and
        Rehabilitation Centre in Koramangala, Bengaluru. Her
        clinical experience and focus on individualised treatment
        guide the centre's approach to patient care.
      </p>

      <p className="rapFounderDescription">
        She previously worked for three years as a Team Leader
        Physiotherapist at the Koramangala branch of Zelus
        Physiotherapy Private Limited.
      </p>

      <div className="rapFounderHighlights">
        <div className="rapFounderHighlight">
          <span className="rapFounderHighlightIcon">
            <FiHeart />
          </span>
          <span>
            <strong>Patient first</strong>
            <small>Care shaped around individual needs</small>
          </span>
        </div>

        <div className="rapFounderHighlight">
          <span className="rapFounderHighlightIcon">
            <FiActivity />
          </span>
          <span>
            <strong>Evidence based approach</strong>
            <small>Focused on meaningful recovery</small>
          </span>
        </div>
      </div>

      <div className="rapFounderCredentials">
        <div className="rapCredentials">
          <div className="rapCredentialTitle">
            <span className="rapCredentialIcon">
              <FiBookOpen />
            </span>
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
            <span className="rapCredentialIcon">
              <FiAward />
            </span>
            <h4>Certifications and Professional Learning</h4>
          </div>

          {certifications.map((item) => (
            <div className="rapCredentialItem" key={item}>
              <FiCheckCircle />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>

    <motion.div
      className="rapFounderImage"
      initial={{ opacity: 0, x: 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="rapFounderImageEyebrow">
        <span className="rapFounderImageDot" />
        THE PEOPLE BEHIND YOUR CARE
      </div>

      <div className="rapFounderImageFrame">
        <img
          src={doctorImage}
          alt="Dr. Archita Tiwari, Founder and Director of Rehabics"
          loading="lazy"
          decoding="async"
        />

        <div className="rapFounderImageOverlay">
          <span>LEADERSHIP AND CARE</span>
          <strong>
            Helping people move towards a better life.
          </strong>
        </div>
      </div>

     

      <div className="rapFounderImageNote">
        <span className="rapFounderNoteIcon">
          <FiHeart />
        </span>
        <span>
          <strong>Care with purpose</strong>
          <small>Every patient. Every step.</small>
        </span>
      </div>

      <div
        className="rapFounderDecor"
        aria-hidden="true"
      />
    </motion.div>
  </div>
</section>


      <section className="rapValues rapSection">

        <div className="rapContainer">

          <SectionHeading

            eyebrow="WHAT GUIDES US"

            kicker="PERSONAL CARE. CLEAR PURPOSE."

            meta="03 Core Values"

            title={<>Care built around <span>you.</span></>}

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

            kicker="MOVE BETTER. FEEL BETTER."

            meta="04 Care Areas"

            title={<>Support for <span>better movement.</span></>}

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

            kicker="HERE WHEN YOU NEED US."

            meta="02 Bengaluru Centres"

            title={<>Care closer <span>to you.</span></>}

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

  <div className="rapCTAPattern" aria-hidden="true" />

  <div className="rapContainer rapCTAGrid">

    <motion.div

      className="rapCTAContent"

      initial={{ opacity: 0, y: 18 }}

      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 0.6, ease: "easeOut" }}

      viewport={{ once: true, amount: 0.25 }}

    >

      <div className="rapHeadingTopline rapCTATopline">

        <span className="rapEyebrow rapCTAeyebrow">

          <span className="rapEyebrowDot" />

          YOUR RECOVERY JOURNEY

        </span>

        <span className="rapHeadingMeta">

          HERE FOR YOUR NEXT STEP

        </span>

      </div>

      <span className="rapHeadingKicker rapCTAKicker">

        PERSONAL CARE. MEANINGFUL PROGRESS.

      </span>

      <h2>

        Ready to move <span>better?</span>

      </h2>

      <p>

        Every recovery journey starts with a conversation.

        Connect with our team to explore the right physiotherapy

        care for your needs.

      </p>

    </motion.div>

    <motion.div

      className="rapCTAActions"

      initial={{ opacity: 0, x: 16 }}

      whileInView={{ opacity: 1, x: 0 }}

      transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}

      viewport={{ once: true, amount: 0.25 }}

    >

      <Link to="/contact" className="rapButton rapButtonLight">

        Contact Rehabics

        <FiArrowUpRight />

      </Link>

      <span className="rapCTANote">

        Let's take the next step together.

      </span>

    </motion.div>

  </div>

</section>

    </main>

  );

}
