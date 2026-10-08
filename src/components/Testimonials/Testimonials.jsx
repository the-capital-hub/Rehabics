import { motion } from "motion/react";
import {
  FiArrowUpRight,
  FiMapPin,
  FiStar,
} from "react-icons/fi";
import "./Testimonials.css";

const locations = [
  {
    number: "01",
    name: "Koramangala",
    rating: "4.9",
    reviews: "300 reviews",
    description:
      "A trusted Rehabics location for personalised physiotherapy and rehabilitation care.",
  },
  {
    number: "02",
    name: "Haralur",
    rating: "5.0",
    reviews: "58 reviews",
    description:
      "Focused physiotherapy care designed around recovery, movement and everyday confidence.",
  },
];

function Testimonials() {
  return (
    <section className="testimonialsSection" id="reviews">
      <div className="testimonialsContainer">

        {/* HEADER */}

        <motion.div
          className="testimonialsHeader"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="testimonialsHeaderTop">
            <div className="testimonialsLabel">
              <span className="testimonialsLabelDot" />
              <span>Patient Experience</span>
            </div>

            <span className="testimonialsCount">
              02 Bengaluru Clinics
            </span>
          </div>

          <div className="testimonialsHeading">
            <div>
              <h2>
                Trusted care across
                <span>Bengaluru.</span>
              </h2>
            </div>

            <p>
              Our clinics are built around personalised care,
              professional expertise and a patient experience
              that keeps movement at the centre.
            </p>
          </div>
        </motion.div>

        {/* REVIEW SUMMARY */}

        <motion.div
          className="reviewSummary"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="reviewSummaryMain">
            <span className="reviewSummaryLabel">
              Patient Ratings
            </span>

            <div className="reviewSummaryRating">
              <strong>4.9</strong>

              <div className="reviewSummaryStars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar key={star} />
                ))}
              </div>
            </div>

            <p>
              Based on reviews across our Bengaluru locations.
            </p>
          </div>

          <div className="reviewSummaryDivider" />

          <div className="reviewSummaryStatement">
            <span>Our Approach</span>

            <h3>
              Care that builds
              <em>confidence.</em>
            </h3>
          </div>
        </motion.div>

        {/* LOCATIONS */}

        <div className="locationReviews">
          {locations.map((location, index) => (
            <motion.article
              className="reviewLocation"
              key={location.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
              }}
            >
              <div className="reviewLocationTop">
                <span className="reviewLocationNumber">
                  {location.number}
                </span>

                <div className="reviewLocationIcon">
                  <FiMapPin />
                </div>
              </div>

              <div className="reviewLocationName">
                <h3>{location.name}</h3>

                <span>
                  Bengaluru, Karnataka
                </span>
              </div>

              <div className="reviewRating">
                <div className="reviewRatingValue">
                  <FiStar />
                  <strong>{location.rating}</strong>
                </div>

                <span>{location.reviews}</span>
              </div>

              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar key={star} />
                ))}
              </div>

              <p>{location.description}</p>

              <div className="reviewLocationFooter">
                <span>View Patient Experience</span>

                <span className="reviewArrow">
                  <FiArrowUpRight />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;