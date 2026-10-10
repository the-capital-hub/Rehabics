
import { motion } from "motion/react";
import {
  FiArrowUpRight,
  FiClock,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiSend,
  FiHeart,
  FiCheckCircle,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./ContactPage.css";

const contactDetails = [
  {
    icon: <FiPhone />,
    label: "Call our care team",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    note: "We are happy to guide you",
  },
  {
    icon: <FiMail />,
    label: "Write to us",
    value: "hello@rehabics.com",
    href: "mailto:hello@rehabics.com",
    note: "We aim to reply within one working day",
  },
  {
    icon: <FiClock />,
    label: "Clinic hours",
    value: "Monday to Saturday",
    href: null,
    note: "9:00 AM to 7:00 PM",
  },
];

const locations = [
  {
    number: "01",
    name: "Koramangala",
    city: "Bengaluru, Karnataka",
    address: "Add verified clinic address",
  },
  {
    number: "02",
    name: "Haralur",
    city: "Bengaluru, Karnataka",
    address: "Add verified clinic address",
  },
];

const services = [
  "Physiotherapy consultation",
  "Pain management",
  "Sports rehabilitation",
  "Post surgery rehabilitation",
  "Online consultation",
  "Other enquiry",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const service = formData.get("service");
    const message = formData.get("message");

    const subject = encodeURIComponent(
      `Appointment enquiry from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${
        email || "Not provided"
      }\nService: ${service}\nMessage: ${
        message || "No additional message"
      }`
    );

    window.location.href =
      `mailto:hello@rehabics.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="rpc-page">
      <section className="rpc-hero">
        <div className="rpc-hero-glow rpc-glow-one" />
        <div className="rpc-hero-glow rpc-glow-two" />

        <div className="rpc-container rpc-hero-grid">
          <motion.div
            className="rpc-hero-copy"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span className="rpc-eyebrow">
              <span className="rpc-eyebrow-dot" />
              LET US HELP YOU MOVE BETTER
            </span>

            <h1>
              Your next chapter
              <br />
              <span>starts with care.</span>
            </h1>

            <p className="rpc-hero-description">
              Every recovery journey begins with being heard.
              Tell us what you need, and our team will help you
              find the right next step.
            </p>

            <div className="rpc-hero-actions">
              <a
                className="rpc-button rpc-button-primary"
                href="#rpc-contact-form"
              >
                Book an appointment <FiArrowUpRight />
              </a>

              <a
                className="rpc-button rpc-button-outline"
                href="tel:+919876543210"
              >
                <FiPhone /> Talk to our team
              </a>
            </div>

            <div className="rpc-trust-line">
              <span className="rpc-trust-icon">
                <FiHeart />
              </span>
              <span>
                Personal attention. Thoughtful care. A plan made for you.
              </span>
            </div>

            <div className="rpc-hero-points">
              <span><FiCheckCircle /> Friendly guidance</span>
              <span><FiCheckCircle /> Individual care</span>
            </div>
          </motion.div>

          <motion.div
            className="rpc-hero-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <div className="rpc-image-frame">
              <img
                className="rpc-hero-image"
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1100&q=85"
                alt="Healthcare professional providing attentive patient care"
              />
              <div className="rpc-image-shade" />

              <div className="rpc-image-caption">
                <span className="rpc-caption-icon"><FiHeart /></span>
                <span>
                  <strong>Care that listens</strong>
                  <small>Your wellbeing comes first</small>
                </span>
              </div>
            </div>

            <div className="rpc-appointment-card">
              <span className="rpc-appointment-icon">
                <FiMessageCircle />
              </span>
              <div>
                <span className="rpc-card-label">YOUR FIRST STEP</span>
                <strong>Let us talk about your recovery</strong>
                <a href="#rpc-contact-form">
                  Send an enquiry <FiArrowUpRight />
                </a>
              </div>
            </div>

            <div className="rpc-visual-stamp">
              <FiHeart />
              <span>Care made personal</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="rpc-contact-section">
        <div className="rpc-container">
          <motion.div
            className="rpc-section-heading"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="rpc-eyebrow">LET US CONNECT</span>
            <h2>
              We are here to <span>listen to you.</span>
            </h2>
            <p>
              Call us, write to us or send your enquiry.
              We will help you understand what to do next.
            </p>
          </motion.div>

          <div className="rpc-contact-grid">
            {contactDetails.map((item, index) => {
              const CardTag = item.href ? "a" : "div";

              return (
                <motion.div
                  className="rpc-card-motion"
                  key={item.label}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <CardTag
                    className={`rpc-info-card ${
                      !item.href ? "rpc-info-card-static" : ""
                    }`}
                    href={item.href || undefined}
                  >
                    <span className="rpc-info-icon">{item.icon}</span>
                    <span className="rpc-info-label">{item.label}</span>
                    <strong>{item.value}</strong>
                    <small>{item.note}</small>
                    {item.href && (
                      <span className="rpc-info-arrow">
                        <FiArrowUpRight />
                      </span>
                    )}
                  </CardTag>
                </motion.div>
              );
            })}
          </div>

          <div className="rpc-form-location-grid" id="rpc-contact-form">
            <motion.section
              className="rpc-form-panel"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true, amount: 0.12 }}
            >
              <div className="rpc-panel-heading">
                <span className="rpc-eyebrow">SEND AN ENQUIRY</span>
                <h2>Tell us how we can help.</h2>
                <p>
                  Share a few details and your email app will open
                  with your enquiry prepared for you.
                </p>
              </div>

              <form className="rpc-form" onSubmit={handleSubmit}>
                <div className="rpc-field-row">
                  <label>
                    Your name <span>*</span>
                    <input
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      required
                    />
                  </label>

                  <label>
                    Phone number <span>*</span>
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Enter your phone number"
                      required
                    />
                  </label>
                </div>

                <div className="rpc-field-row">
                  <label>
                    Email address
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                    />
                  </label>

                  <label>
                    Service needed <span>*</span>
                    <select name="service" defaultValue="" required>
                      <option value="" disabled>
                        Choose a service
                      </option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label>
                  Your message
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell us what you would like help with."
                  />
                </label>

                <button
                  className="rpc-button rpc-button-primary rpc-submit"
                  type="submit"
                >
                  Prepare my enquiry <FiSend />
                </button>

                <p className="rpc-form-note">
                  Your email app will open when you submit this form.
                  You can review the message before sending it.
                </p>
              </form>
            </motion.section>

            <motion.aside
              className="rpc-location-panel"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true, amount: 0.12 }}
            >
              <div className="rpc-location-heading">
                <span className="rpc-eyebrow">FIND YOUR CLINIC</span>
                <h2>Care within reach.</h2>
                <p>
                  Find your preferred Rehabics location in Bengaluru.
                  Please confirm the clinic address before visiting.
                </p>
              </div>

              <div className="rpc-location-list">
                {locations.map((location) => (
                  <div className="rpc-location-item" key={location.number}>
                    <span className="rpc-location-number">
                      {location.number}
                    </span>

                    <div className="rpc-location-details">
                      <h3>{location.name}</h3>
                      <p>{location.city}</p>
                      <span className="rpc-location-address">
                        <FiMapPin />
                        {location.address}
                      </span>
                    </div>

                    <span className="rpc-location-arrow">
                      <FiArrowUpRight />
                    </span>
                  </div>
                ))}
              </div>

              <div className="rpc-location-help">
                <span className="rpc-help-icon"><FiPhone /></span>
                <div>
                  <strong>Need help choosing?</strong>
                  <p>Our team can help you with your enquiry.</p>
                </div>
                <a href="tel:+919876543210" aria-label="Call Rehabics">
                  <FiArrowUpRight />
                </a>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <section className="rpc-bottom-cta">
        <div className="rpc-container rpc-bottom-cta-inner">
          <div className="rpc-bottom-copy">
            <span className="rpc-eyebrow">YOUR JOURNEY, YOUR PACE</span>
            <h2>A better tomorrow begins with one small step.</h2>
            <p>
              Start a conversation with Rehabics and explore the
              care that may be right for you.
            </p>
          </div>

          <Link className="rpc-button rpc-button-white" to="/services">
            Explore our services <FiArrowUpRight />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
