import { motion } from "motion/react";
import {
  FiMapPin,
  FiClock,
  FiPhone,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";
import "./Locations.css";

const locations = [
  {
    name: "Koramangala",
    address:
      "No 21, Second Floor, 5th Cross, 60 Feet Road, Next To Bombay Dyeing, 5th Block, Koramangala, Bengaluru, Karnataka 560034.",
  },
  {
    name: "Haralur",
    address:
      "96/3, 2nd Floor, Silver County Road, Apartments, next to Purva Skywood, Kudlu, Bengaluru, Karnataka 560068.",
  },
];

function Locations() {
  return (
    <section className="locationsSection" id="contact">
      <div className="locationsContainer">
        <motion.div
          className="locationsHeader"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div className="locationsLabel">
            <span className="locationsLabelLine" />
            Visit Rehabics
          </div>

          <div>
            <h2>
              Two clinics,
              <span>one approach to care.</span>
            </h2>
            <p>
              Choose the Rehabics location that works best for you
              and connect with our team.
            </p>
          </div>
        </motion.div>

        <div className="locationsGrid">
          {locations.map((location, index) => (
            <motion.article
              className="locationCard"
              key={location.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="locationCardTop">
                <div className="locationIcon">
                  <FiMapPin />
                </div>
                <span>0{index + 1}</span>
              </div>

              <h3>{location.name}</h3>
              <p>{location.address}</p>

              <a href="/contact" className="locationLink">
                <span>Get Directions</span>
                <FiArrowUpRight />
              </a>
            </motion.article>
          ))}
        </div>

        <div className="contactStrip">
          <div className="contactItem">
            <FiPhone />
            <div>
              <span>Call Us</span>
              <strong>+91 9535579229</strong>
            </div>
          </div>

          <div className="contactItem">
            <FiMail />
            <div>
              <span>Email</span>
              <strong>architat59@gmail.in</strong>
            </div>
          </div>

          <div className="contactItem">
            <FiClock />
            <div>
              <span>Opening Hours</span>
              <strong>Monday to Friday, 8 AM to 9 PM</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Locations;
