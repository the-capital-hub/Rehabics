import { motion } from "motion/react";
import {
  FiArrowUpRight,
  FiClock,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import "./Locations.css";

const locations = [
  {
    number: "01",
    name: "Koramangala",
    address:
      "No 21, Second Floor, 5th Cross, 60 Feet Road, Next To Bombay Dyeing, 5th Block, Koramangala, Bengaluru, Karnataka 560034.",
  },
  {
    number: "02",
    name: "Haralur",
    address:
      "96/3, 2nd Floor, Silver County Road, Apartments, next to Purva Skywood, Kudlu, Bengaluru, Karnataka 560068.",
  },
];

function Locations() {
  return (
    <section className="locationsSection" id="contact">
      <div className="locationsContainer">

        {/* HEADER */}

        <motion.div
          className="locationsHeader"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="locationsHeaderTop">
            <div className="locationsLabel">
              <span className="locationsLabelDot" />
              <span>Visit Rehabics</span>
            </div>

            <span className="locationsCount">
              02 Bengaluru Clinics
            </span>
          </div>

          <div className="locationsHeading">
            <h2>
              Two clinics,
              <span>one approach to care.</span>
            </h2>

            <p>
              Choose the Rehabics location that works best for you
              and connect with our team for personalised physiotherapy care.
            </p>
          </div>
        </motion.div>

        {/* LOCATION CARDS */}

        <div className="locationsGrid">
          {locations.map((location, index) => (
            <motion.article
              className="locationCard"
              key={location.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
              }}
            >
              <div className="locationCardTop">
                <span className="locationNumber">
                  {location.number}
                </span>

                <div className="locationIcon">
                  <FiMapPin />
                </div>
              </div>

              <div className="locationCardContent">
                <span className="locationCardLabel">
                  Rehabics Physiotherapy
                </span>

                <h3>{location.name}</h3>

                <p>{location.address}</p>
              </div>

              <div className="locationCardFooter">
                <span>Visit This Clinic</span>

                <span className="locationArrow">
                  <FiArrowUpRight />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CONTACT STRIP */}

        <motion.div
          className="contactStrip"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="contactItem">
            <div className="contactIcon">
              <FiPhone />
            </div>

            <div className="contactItemContent">
              <span>Call Us</span>
              <a href="tel:+919535579229">
                +91 9535579229
              </a>
            </div>
          </div>

          <div className="contactItem">
            <div className="contactIcon">
              <FiMail />
            </div>

            <div className="contactItemContent">
              <span>Email</span>
              <a href="mailto:architat59@gmail.in">
                architat59@gmail.in
              </a>
            </div>
          </div>

          <div className="contactItem">
            <div className="contactIcon">
              <FiClock />
            </div>

            <div className="contactItemContent">
              <span>Opening Hours</span>

              <strong>
                Monday to Friday
                <br />
                8 AM to 9 PM
              </strong>
            </div>
          </div>
        </motion.div>

        {/* SATURDAY NOTE */}

        <div className="locationsBottomNote">
          <span>Saturday</span>
          <strong>10 AM to 8 PM</strong>

          <span className="locationsClosed">
            Sunday Closed
          </span>
        </div>

      </div>
    </section>
  );
}

export default Locations;