import { useState } from "react";
import { motion } from "motion/react";
import {
  FiActivity,
  FiArrowUpRight,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiMapPin,
  FiPhone,
  FiUser,
  FiMail,
  FiMessageSquare,
} from "react-icons/fi";
import "./AppointmentPage.css";

const API_URL = "http://localhost:5000/api/appointments";

const treatments = [
  "Pain Management",
  "Sports Rehabilitation",
  "Dry Needling Therapy",
  "Spine Rehabilitation",
  "Women's Health",
  "Mobility and Recovery",
  "General Physiotherapy",
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

const initialForm = {
  patientName: "",
  phone: "",
  email: "",
  service: "",
  appointmentDate: "",
  appointmentTime: "",
  doctor: "",
  location: "",
  message: "",
};

const today = new Date();
const minimumDate = [
  today.getFullYear(),
  String(today.getMonth() + 1).padStart(2, "0"),
  String(today.getDate()).padStart(2, "0"),
].join("-");

const Appointment = () => {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to send your appointment request."
        );
      }

      setSuccess(true);
      setFormData(initialForm);
    } catch (err) {
      setError(
        err.message ||
          "We could not send your request. Please try again or call our team."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="rehabAppointment">
      {/* Hero */}

      <section className="raHero">
        <div className="raHeroGlow" />

        <div className="raContainer raHeroGrid">
          <motion.div
            className="raHeroCopy"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="raEyebrow">
              <span />
              YOUR RECOVERY STARTS HERE
            </span>

            <h1>
              Make time
              <span>for better movement.</span>
            </h1>

            <p>
              Tell us about your physiotherapy needs. Our team can help you
              take the next step towards your recovery goals.
            </p>

            <a href="#raBooking" className="raPrimaryButton">
              Book an Appointment <FiArrowUpRight />
            </a>

            <div className="raHeroTrust">
              <span><FiCheckCircle /> Personalised care</span>
              <span><FiCheckCircle /> Patient focused</span>
            </div>
          </motion.div>

          <motion.div
            className="raHeroVisual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/rehabics-physiotherapy-bangalore-5fa37ebe3aad5-2.jpg"
              alt="Rehabics physiotherapy clinic"
            />

            <div className="raHeroImageOverlay" />

            <div className="raHeroImageCaption">
              <span>REHABICS PHYSIOTHERAPY</span>
              <h2>Your journey. Your goals. Your care.</h2>
            </div>

            <div className="raHeroFloat">
              <span><FiActivity /></span>
              <div>
                <strong>Move with confidence</strong>
                <small>One step at a time</small>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking */}

      <section className="raBookingSection" id="raBooking">
        <div className="raContainer">
          <div className="raBookingIntro">
            <span className="raSectionLabel">APPOINTMENT REQUEST</span>
            <h2>
              Let us understand
              <span>your needs.</span>
            </h2>
            <p>
              Share your details and preferred appointment. Our team will
              review your request and contact you.
            </p>
          </div>

          <div className="raBookingGrid">
            <motion.div
              className="raFormCard"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
            >
              {success ? (
                <div className="raSuccess">
                  <span className="raSuccessIcon">
                    <FiCheckCircle />
                  </span>

                  <span className="raSectionLabel">REQUEST SENT</span>

                  <h3>
                    Thank you for
                    <span> choosing Rehabics.</span>
                  </h3>

                  <p>
                    Your request has been submitted. Our team will contact
                    you to discuss and confirm your appointment.
                  </p>

                  <button
                    type="button"
                    className="raPrimaryButton"
                    onClick={() => setSuccess(false)}
                  >
                    Make Another Request <FiArrowUpRight />
                  </button>
                </div>
              ) : (
                <form className="raForm" onSubmit={handleSubmit}>
                  <div className="raFormHeader">
                    <div>
                      <span className="raSectionLabel">YOUR DETAILS</span>
                      <h3>Tell us about yourself</h3>
                    </div>
                    <span className="raFormIcon"><FiUser /></span>
                  </div>

                  <div className="raFieldGrid">
                    <label className="raField">
                      <span>Full name *</span>
                      <div className="raInputWrap">
                        <FiUser />
                        <input
                          name="patientName"
                          type="text"
                          placeholder="Enter your name"
                          value={formData.patientName}
                          onChange={handleChange}
                          autoComplete="name"
                          required
                        />
                      </div>
                    </label>

                    <label className="raField">
                      <span>Phone number *</span>
                      <div className="raInputWrap">
                        <FiPhone />
                        <input
                          name="phone"
                          type="tel"
                          placeholder="Your contact number"
                          value={formData.phone}
                          onChange={handleChange}
                          autoComplete="tel"
                          required
                        />
                      </div>
                    </label>

                    <label className="raField raFullField">
                      <span>Email address</span>
                      <div className="raInputWrap">
                        <FiMail />
                        <input
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          autoComplete="email"
                        />
                      </div>
                    </label>
                  </div>

                  <div className="raFormDivider" />

                  <div className="raFormSectionTitle">
                    <span>01</span>
                    <div>
                      <h4>What would you like help with?</h4>
                      <p>Select the service that best matches your needs.</p>
                    </div>
                  </div>

                  <div className="raTreatmentGrid">
                    {treatments.map((treatment) => (
                      <button
                        type="button"
                        key={treatment}
                        className={`raTreatment ${
                          formData.service === treatment ? "isSelected" : ""
                        }`}
                        onClick={() =>
                          setFormData((previous) => ({
                            ...previous,
                            service: treatment,
                          }))
                        }
                        aria-pressed={formData.service === treatment}
                      >
                        <span>{treatment}</span>
                        {formData.service === treatment && <FiCheckCircle />}
                      </button>
                    ))}
                  </div>

                  <input
                    type="text"
                    value={formData.service}
                    onChange={handleChange}
                    name="service"
                    required
                    tabIndex={-1}
                    aria-label="Selected service"
                    className="raHiddenInput"
                  />

                  <div className="raFormDivider" />

                  <div className="raFormSectionTitle">
                    <span>02</span>
                    <div>
                      <h4>Choose your preferred visit</h4>
                      <p>Pick a preferred date and time for your request.</p>
                    </div>
                  </div>

                  <div className="raFieldGrid">
                    <label className="raField">
                      <span>Preferred date *</span>
                      <div className="raInputWrap">
                        <FiCalendar />
                        <input
                          type="date"
                          name="appointmentDate"
                          min={minimumDate}
                          value={formData.appointmentDate}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </label>

                    <label className="raField">
                      <span>Preferred location *</span>
                      <div className="raInputWrap">
                        <FiMapPin />
                        <select
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Choose a branch</option>
                          <option value="Koramangala">Koramangala</option>
                          <option value="Haralur">Haralur</option>
                        </select>
                      </div>
                    </label>
                  </div>

                  <div className="raField raTimeField">
                    <span>Preferred time *</span>
                    <div className="raTimeGrid">
                      {timeSlots.map((time) => (
                        <button
                          type="button"
                          key={time}
                          className={`raTime ${
                            formData.appointmentTime === time
                              ? "isSelected"
                              : ""
                          }`}
                          onClick={() =>
                            setFormData((previous) => ({
                              ...previous,
                              appointmentTime: time,
                            }))
                          }
                          aria-pressed={formData.appointmentTime === time}
                        >
                          <FiClock /> {time}
                        </button>
                      ))}
                    </div>
                    <input
                      type="text"
                      name="appointmentTime"
                      value={formData.appointmentTime}
                      onChange={handleChange}
                      required
                      tabIndex={-1}
                      aria-label="Selected appointment time"
                      className="raHiddenInput"
                    />
                    <small>
                      Your preferred slot will be confirmed by our team.
                    </small>
                  </div>

                  <div className="raFormDivider" />

                  <label className="raField">
                    <span>Anything else we should know?</span>
                    <div className="raTextareaWrap">
                      <FiMessageSquare />
                      <textarea
                        name="message"
                        rows="4"
                        placeholder="Briefly describe your concern or recovery goals"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </label>

                  {error && (
                    <div className="raError" role="alert">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="raSubmitButton"
                    disabled={loading}
                  >
                    <span>
                      {loading ? "Sending request..." : "Request Appointment"}
                    </span>
                    <span className="raSubmitIcon">
                      <FiArrowUpRight />
                    </span>
                  </button>

                  <p className="raPrivacyNote">
                    Submitting this form sends an appointment request.
                    Your visit is not confirmed until our team contacts you.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Clinic information */}

            <aside className="raBookingAside">
              <div className="raAsideCard">
                <span className="raSectionLabel">HERE FOR YOUR RECOVERY</span>
                <h3>
                  The first step is
                  <span> reaching out.</span>
                </h3>
                <p>
                  Tell us what you need help with and our team can guide you
                  towards the next step.
                </p>

                <a className="raContactLink" href="tel:+919535579229">
                  <span><FiPhone /></span>
                  <div>
                    <small>CALL TO BOOK</small>
                    <strong>95355 79229</strong>
                  </div>
                  <FiArrowUpRight />
                </a>

                <div className="raAsideDivider" />

                <span className="raSectionLabel">OUR LOCATIONS</span>

                <div className="raBranch">
                  <span><FiMapPin /></span>
                  <div>
                    <strong>Koramangala</strong>
                    <p>Bengaluru, Karnataka</p>
                  </div>
                </div>

                <div className="raBranch">
                  <span><FiMapPin /></span>
                  <div>
                    <strong>Haralur</strong>
                    <p>Bengaluru, Karnataka</p>
                  </div>
                </div>
              </div>

              <div className="raAsideQuote">
                <span><FiActivity /></span>
                <h3>Every recovery journey is different.</h3>
                <p>
                  Start with a conversation about your needs, your movement
                  and the goals that matter to you.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Appointment;