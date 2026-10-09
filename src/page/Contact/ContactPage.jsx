import { motion } from "motion/react";
import {
  FiArrowUpRight,
  FiClock,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiSend,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./ContactPage.css";

const contactDetails = [
  {
    icon: <FiPhone />,
    label: "Call us",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    note: "Speak with our care team",
  },
  {
    icon: <FiMail />,
    label: "Email us",
    value: "hello@rehabics.com",
    href: "mailto:hello@rehabics.com",
    note: "We usually reply within one working day",
  },
  {
    icon: <FiClock />,
    label: "Working hours",
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
    address: "Add the verified clinic address here",
  },
  {
    number: "02",
    name: "Haralur",
    city: "Bengaluru, Karnataka",
    address: "Add the verified clinic address here",
  },
];

function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const service = formData.get("service");
    const message = formData.get("message");

    const subject = encodeURIComponent(`Appointment enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email || "Not provided"}\nService: ${service}\nMessage: ${message || "No additional message"}`
    );

    window.location.href = `mailto:hello@rehabics.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="rpc-page">
      <section className="rpc-hero">
        <div className="rpc-hero-orb rpc-hero-orb-one" />
        <div className="rpc-hero-orb rpc-hero-orb-two" />
        <div className="rpc-container rpc-hero-grid">
          <motion.div
            className="rpc-hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <span className="rpc-eyebrow">
              <span className="rpc-eyebrow-dot" />
              WE ARE HERE FOR YOU
            </span>
            <h1>
              Your recovery
              <br />
              <span>starts with a conversation.</span>
            </h1>
            <p>
              Tell us what you are experiencing. Our team will help you take
              the next step towards moving with confidence.
            </p>
            <div className="rpc-hero-actions">
              <a className="rpc-button rpc-button-primary" href="#rpc-contact-form">
                Book an appointment <FiArrowUpRight />
              </a>
              <a className="rpc-button rpc-button-light" href="tel:+919876543210">
                <FiPhone /> Call our team
              </a>
            </div>
            <div className="rpc-trust-line">
              <span className="rpc-trust-icon"><FiMessageCircle /></span>
              <span>Friendly guidance, personalised care, clear next steps.</span>
            </div>
          </motion.div>

          <motion.div
            className="rpc-hero-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.12 }}
          >
            <div className="rpc-visual-backdrop" />
            <div className="rpc-visual-card rpc-visual-main">
              <div className="rpc-visual-top">
                <span className="rpc-visual-symbol"><FiMessageCircle /></span>
                <span className="rpc-status"><i /> Here to help</span>
              </div>
              <p className="rpc-visual-kicker">A BETTER WAY TO FEEL BETTER</p>
              <h2>Every question is a good place to start.</h2>
              <p className="rpc-visual-description">
                From your first appointment to your recovery plan, we are with you.
              </p>
              <div className="rpc-visual-progress">
                <span><i /></span>
                <span><i /></span>
                <span><i /></span>
              </div>
              <div className="rpc-visual-bottom">
                <span>Listen carefully</span>
                <span>Care personally</span>
              </div>
            </div>
            <div className="rpc-floating-note">
              <span className="rpc-floating-icon"><FiClock /></span>
              <span><strong>Personal attention</strong><small>Care built around you</small></span>
            </div>
            <div className="rpc-floating-bubble">Your wellbeing matters</div>
          </motion.div>
        </div>
      </section>

      <section className="rpc-contact-section">
        <div className="rpc-container">
          <div className="rpc-section-heading">
            <span className="rpc-eyebrow">LET'S CONNECT</span>
            <h2>We would love to <span>hear from you.</span></h2>
            <p>Choose the easiest way to reach us, or send a message using the form.</p>
          </div>

          <div className="rpc-contact-grid">
            {contactDetails.map((item, index) => (
              <motion.a
                className={`rpc-info-card ${!item.href ? "rpc-info-card-static" : ""}`}
                href={item.href || undefined}
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <span className="rpc-info-icon">{item.icon}</span>
                <span className="rpc-info-label">{item.label}</span>
                <strong>{item.value}</strong>
                <small>{item.note}</small>
                {item.href && <FiArrowUpRight className="rpc-info-arrow" />}
              </motion.a>
            ))}
          </div>

          <div className="rpc-form-location-grid" id="rpc-contact-form">
            <motion.div
              className="rpc-form-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
            >
              <div className="rpc-panel-heading">
                <span className="rpc-eyebrow">SEND AN ENQUIRY</span>
                <h2>Let's plan your next step.</h2>
                <p>Share a few details and your email app will open with your enquiry ready to send.</p>
              </div>
              <form className="rpc-form" onSubmit={handleSubmit}>
                <div className="rpc-field-row">
                  <label>
                    Your name <span>*</span>
                    <input name="name" type="text" placeholder="Enter your full name" required />
                  </label>
                  <label>
                    Phone number <span>*</span>
                    <input name="phone" type="tel" placeholder="+91" required />
                  </label>
                </div>
                <div className="rpc-field-row">
                  <label>
                    Email address
                    <input name="email" type="email" placeholder="you@example.com" />
                  </label>
                  <label>
                    What do you need help with? <span>*</span>
                    <select name="service" defaultValue="" required>
                      <option value="" disabled>Select a service</option>
                      <option value="Physiotherapy consultation">Physiotherapy consultation</option>
                      <option value="Pain management">Pain management</option>
                      <option value="Sports rehabilitation">Sports rehabilitation</option>
                      <option value="Post surgery rehabilitation">Post surgery rehabilitation</option>
                      <option value="Online consultation">Online consultation</option>
                      <option value="Other enquiry">Other enquiry</option>
                    </select>
                  </label>
                </div>
                <label>
                  Your message
                  <textarea name="message" rows="4" placeholder="Tell us a little about how we can help." />
                </label>
                <button className="rpc-button rpc-button-primary rpc-submit" type="submit">
                  Send your enquiry <FiSend />
                </button>
                <p className="rpc-form-note">This form opens your email app. Connect a backend to receive enquiries directly on your website.</p>
              </form>
            </motion.div>

            <aside className="rpc-location-panel">
              <div className="rpc-location-heading">
                <span className="rpc-eyebrow">FIND YOUR CLINIC</span>
                <h2>Care that is closer to you.</h2>
                <p>Visit one of our Bengaluru locations. Confirm the exact address before publishing.</p>
              </div>
              <div className="rpc-location-list">
                {locations.map((location) => (
                  <div className="rpc-location-item" key={location.number}>
                    <span className="rpc-location-number">{location.number}</span>
                    <div>
                      <h3>{location.name}</h3>
                      <p>{location.city}</p>
                      <span className="rpc-location-address"><FiMapPin /> {location.address}</span>
                    </div>
                    <FiArrowUpRight className="rpc-location-arrow" />
                  </div>
                ))}
              </div>
              <div className="rpc-location-help">
                <span className="rpc-help-icon"><FiPhone /></span>
                <div><strong>Need help choosing?</strong><p>Call our team and we will guide you.</p></div>
                <a href="tel:+919876543210" aria-label="Call Rehabics"><FiArrowUpRight /></a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="rpc-bottom-cta">
        <div className="rpc-container rpc-bottom-cta-inner">
          <div>
            <span className="rpc-eyebrow">YOUR JOURNEY, YOUR PACE</span>
            <h2>Small steps can lead to a stronger you.</h2>
            <p>Start with a conversation. We will help you understand what comes next.</p>
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
