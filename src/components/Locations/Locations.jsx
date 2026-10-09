
import { motion } from "motion/react";
import {
  FiArrowUpRight,
  FiClock,
  FiMail,
  FiMapPin,
  FiPhone,
  FiNavigation,
} from "react-icons/fi";
import "./Locations.css";

const locations = [
  {
    number: "01",
    name: "Koramangala",
    address:
      "No 21, Second Floor, 5th Cross, 60 Feet Road, Next To Bombay Dyeing, 5th Block, Koramangala, Bengaluru, Karnataka 560034.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=No+21+Second+Floor+5th+Cross+60+Feet+Road+Koramangala+Bengaluru+560034",
    accent: "teal",
  },
  {
    number: "02",
    name: "Haralur",
    address:
      "96/3, 2nd Floor, Silver County Road, Apartments, next to Purva Skywood, Kudlu, Bengaluru, Karnataka 560068.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=96%2F3+Silver+County+Road+near+Purva+Skywood+Haralur+Bengaluru+560068",
    accent: "purple",
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
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="locationsHeaderTop">
            <div className="locationsLabel">
              <span className="locationsLabelDot" />
              <span>Visit Rehabics</span>
            </div>

            <span className="locationsCount">
              <FiMapPin />
              02 Bengaluru Clinics
            </span>
          </div>

          <div className="locationsHeading">
            <div>
              <span className="locationsEyebrow">
                We Are Here For You
              </span>

              <h2>
                Two clinics,
                <span>one approach to care.</span>
              </h2>
            </div>

            <p>
              Find your nearest Rehabics clinic and connect with our team
              for personalised physiotherapy and rehabilitation care.
            </p>
          </div>
        </motion.div>

        <div className="locationsGrid">
          {locations.map((location, index) => (
            <motion.article
              className={`locationCard locationCard${location.accent}`}
              key={location.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
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

              <a
                href={location.mapUrl}
                className="locationCardFooter"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Get directions to Rehabics ${location.name}`}
              >
                <span className="locationFooterText">
                  <FiNavigation />
                  Get Directions
                </span>

                <span className="locationArrow">
                  <FiArrowUpRight />
                </span>
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="contactStrip"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
        >
          <a className="contactItem" href="tel:+919535579229">
            <div className="contactIcon contactIconTeal">
              <FiPhone />
            </div>

            <div className="contactItemContent">
              <span>Call Our Team</span>
              <strong>+91 9535579229</strong>
            </div>

            <FiArrowUpRight className="contactItemArrow" />
          </a>

          <a
            className="contactItem"
            href="mailto:architat59@gmail.in"
          >
            <div className="contactIcon contactIconPink">
              <FiMail />
            </div>

            <div className="contactItemContent">
              <span>Email Us</span>
              <strong>architat59@gmail.in</strong>
            </div>

            <FiArrowUpRight className="contactItemArrow" />
          </a>

          <div className="contactItem contactHours">
            <div className="contactIcon contactIconPurple">
              <FiClock />
            </div>

            <div className="contactItemContent">
              <span>Weekday Hours</span>
              <strong>Monday to Friday</strong>
              <small>8 AM to 9 PM</small>
            </div>
          </div>
        </motion.div>

        <div className="locationsBottomNote">
          <div className="locationsSaturday">
            <span className="locationsScheduleDot" />
            <span>Saturday</span>
            <strong>10 AM to 8 PM</strong>
          </div>

          <div className="locationsSunday">
            <FiClock />
            <span>Sunday</span>
            <strong>Closed</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Locations;
