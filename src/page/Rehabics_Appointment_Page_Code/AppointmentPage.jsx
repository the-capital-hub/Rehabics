import { useState } from "react";
import { motion } from "motion/react";
import {
  FiCalendar,
  FiClock,
  FiMapPin,
  FiPhone,
  FiUser,
  FiMail,
  FiActivity,
  FiCheckCircle,
  FiArrowUpRight,
} from "react-icons/fi";
import "./AppointmentPage.css";

const locations = [
  { value: "koramangala", label: "Koramangala, Bengaluru" },
  { value: "haralur", label: "Haralur, Bengaluru" },
];

const services = [
  "Pain Management",
  "Sports Injury Rehabilitation",
  "Back and Neck Pain",
  "Posture and Movement Care",
  "Post Surgery Rehabilitation",
  "Women’s Physiotherapy",
  "Strength and Conditioning",
  "General Physiotherapy Consultation",
];

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

function AppointmentPage() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    location: "",
    date: "",
    time: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const updateForm = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = [
      "Hello Rehabics, I would like to request an appointment.",
      "",
      `Name: ${form.fullName}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email || "Not provided"}`,
      `Service: ${form.service}`,
      `Location: ${locations.find((item) => item.value === form.location)?.label || form.location}`,
      `Preferred date: ${form.date}`,
      `Preferred time: ${form.time}`,
      `Notes: ${form.notes || "None"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/919535579229?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <main className="rehabAppointmentPage">
      <section className="rapptHero">
        <div className="rapptHeroGlow" aria-hidden="true" />
        <div className="rapptContainer rapptHeroGrid">
          <motion.div
            className="rapptHeroCopy"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="rapptEyebrow"><span /> YOUR RECOVERY STARTS HERE</span>
            <h1>Book your <span>appointment.</span></h1>
            <p>
              Tell us what you need help with and choose your preferred clinic,
              date, and time. Our team can confirm the available slot with you.
            </p>
            <div className="rapptHeroPoints">
              <span><FiCheckCircle /> Personalised care</span>
              <span><FiCheckCircle /> Experienced physiotherapy team</span>
              <span><FiCheckCircle /> Two Bengaluru locations</span>
            </div>
          </motion.div>

          <motion.aside
            className="rapptHeroCard"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <div className="rapptHeroCardIcon"><FiCalendar /></div>
            <span className="rapptMiniLabel">A SIMPLE FIRST STEP</span>
            <h2>Make time for your recovery.</h2>
            <p>Share your preferred details. The clinic will confirm your appointment directly.</p>
            <div className="rapptCardLine"><FiClock /><span>Choose a preferred time</span></div>
            <div className="rapptCardLine"><FiMapPin /><span>Select your convenient location</span></div>
          </motion.aside>
        </div>
      </section>

      <section className="rapptSection">
        <div className="rapptContainer rapptFormLayout">
          <div className="rapptFormIntro">
            <span className="rapptSectionLabel">APPOINTMENT REQUEST</span>
            <h2>Let’s plan your <span>next step.</span></h2>
            <p>Complete the form below. Your selected date and time are preferences and are not confirmed until the clinic responds.</p>
            <div className="rapptContactCard">
              <span className="rapptContactIcon"><FiPhone /></span>
              <div>
                <small>Prefer to speak with us?</small>
                <strong>+91 95355 79229</strong>
                <span>Call or message the clinic to discuss your visit.</span>
              </div>
            </div>
            <div className="rapptPrivacyNote">
              <FiCheckCircle />
              <p>Please share only the information needed to arrange your appointment. Avoid adding sensitive medical details in the notes.</p>
            </div>
          </div>

          <motion.form
            className="rapptForm"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rapptFormHeading">
              <div>
                <span className="rapptFormStep">01 / YOUR DETAILS</span>
                <h3>Who are we booking for?</h3>
              </div>
              <span className="rapptFormBadge"><FiActivity /> Rehabics care</span>
            </div>

            <div className="rapptFields">
              <label className="rapptField">
                <span>Full name *</span>
                <div className="rapptInputWrap"><FiUser /><input name="fullName" value={form.fullName} onChange={updateForm} placeholder="Enter your full name" autoComplete="name" required /></div>
              </label>
              <label className="rapptField">
                <span>Phone number *</span>
                <div className="rapptInputWrap"><FiPhone /><input name="phone" value={form.phone} onChange={updateForm} placeholder="10 digit mobile number" type="tel" inputMode="tel" pattern="[0-9+()\\s]{10,18}" autoComplete="tel" required /></div>
              </label>
              <label className="rapptField">
                <span>Email address</span>
                <div className="rapptInputWrap"><FiMail /><input name="email" value={form.email} onChange={updateForm} placeholder="you@example.com" type="email" autoComplete="email" /></div>
              </label>
              <label className="rapptField">
                <span>Service you need *</span>
                <select name="service" value={form.service} onChange={updateForm} required>
                  <option value="">Select a service</option>
                  {services.map((service) => <option key={service} value={service}>{service}</option>)}
                </select>
              </label>
            </div>

            <div className="rapptFormDivider" />
            <div className="rapptFormHeading rapptSecondHeading">
              <div>
                <span className="rapptFormStep">02 / VISIT PREFERENCES</span>
                <h3>When would you like to visit?</h3>
              </div>
            </div>

            <div className="rapptFields">
              <label className="rapptField">
                <span>Preferred clinic *</span>
                <select name="location" value={form.location} onChange={updateForm} required>
                  <option value="">Choose a location</option>
                  {locations.map((location) => <option key={location.value} value={location.value}>{location.label}</option>)}
                </select>
              </label>
              <label className="rapptField">
                <span>Preferred date *</span>
                <div className="rapptInputWrap"><FiCalendar /><input name="date" value={form.date} onChange={updateForm} type="date" min={today} required /></div>
              </label>
              <label className="rapptField">
                <span>Preferred time *</span>
                <div className="rapptInputWrap"><FiClock /><select name="time" value={form.time} onChange={updateForm} required><option value="">Choose a time</option>{timeSlots.map((time) => <option key={time} value={time}>{time}</option>)}</select></div>
              </label>
              <label className="rapptField rapptFullField">
                <span>Anything else we should know?</span>
                <textarea name="notes" value={form.notes} onChange={updateForm} rows="3" placeholder="Optional. Keep it brief and avoid sensitive medical details." />
              </label>
            </div>

            <div className="rapptSubmitRow">
              <p>Submitting opens WhatsApp with your appointment request. Your slot is not confirmed yet.</p>
              <button className="rapptSubmitButton" type="submit">Request appointment <FiArrowUpRight /></button>
            </div>
            {submitted && <p className="rapptSubmitHint" role="status">WhatsApp should open with your request. Send the message to contact the clinic and confirm availability.</p>}
          </motion.form>
        </div>
      </section>

      <section className="rapptBottomCta">
        <div className="rapptContainer rapptBottomCtaInner">
          <div>
            <span className="rapptSectionLabel">HERE FOR YOUR MOVEMENT</span>
            <h2>Not sure which service is right for you?</h2>
            <p>Contact the team and ask which appointment type may suit your needs.</p>
          </div>
          <a href="https://wa.me/919535579229" target="_blank" rel="noreferrer">Message Rehabics <FiArrowUpRight /></a>
        </div>
      </section>
    </main>
  );
}

export default AppointmentPage;
