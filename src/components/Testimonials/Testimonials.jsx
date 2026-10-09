
import { motion } from "motion/react";
import {
  FiArrowUpRight,
  FiMapPin,
  FiStar,
  FiHeart,
  FiMessageCircle,
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
    reviewUrl:
      "https://www.google.com/maps/search/?api=1&query=Rehabics+Physiotherapy+Koramangala+Bengaluru",
    accent: "teal",
  },
  {
    number: "02",
    name: "Haralur",
    rating: "5.0",
    reviews: "58 reviews",
    description:
      "Focused physiotherapy care designed around recovery, movement and everyday confidence.",
    reviewUrl:
      "https://www.google.com/maps/search/?api=1&query=Rehabics+Physiotherapy+Haralur+Bengaluru",
    accent: "purple",
  },
];

function StarRating() {
  return (
    <div className="stars" aria-label="Five star rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <FiStar key={star} />
      ))}
    </div>
  );
}

function Testimonials() {
  return (
    <section className="testimonialsSection" id="reviews">
      <div className="testimonialsContainer">
        <motion.div
          className="testimonialsHeader"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="testimonialsHeaderTop">
            <div className="testimonialsLabel">
              <span className="testimonialsLabelDot" />
              <span>Patient Experience</span>
            </div>

            <span className="testimonialsCount">
              <FiMapPin />
              02 Bengaluru Clinics
            </span>
          </div>

          <div className="testimonialsHeading">
            <div>
              <span className="testimonialsEyebrow">
                Your Journey Matters
              </span>

              <h2>
                Trusted care across
                <span>Bengaluru.</span>
              </h2>
            </div>

            <p>
              Every recovery journey is different. Our clinics focus on
              personalised physiotherapy, professional guidance and helping
              people move with greater confidence.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="reviewSummary"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="reviewSummaryMain">
            <div className="reviewSummaryIcon">
              <FiHeart />
            </div>

            <div className="reviewSummaryInfo">
              <span className="reviewSummaryLabel">
                Patient Ratings
              </span>

              <div className="reviewSummaryRating">
                <strong>4.9</strong>
                <StarRating />
              </div>

              <p>
                Ratings displayed for our Bengaluru clinics.
              </p>
            </div>
          </div>

          <div className="reviewSummaryDivider" />

          <div className="reviewSummaryStatement">
            <span className="reviewStatementLabel">
              The Rehabics Approach
            </span>

            <h3>
              Care that builds
              <em>confidence.</em>
            </h3>

            <span className="reviewStatementNote">
              Personalised care. Meaningful progress.
            </span>
          </div>

          <div className="reviewSummaryDecoration">
            <FiMessageCircle />
          </div>
        </motion.div>

        <div className="locationReviews">
          {locations.map((location, index) => (
            <motion.article
              className={`reviewLocation reviewLocation${location.accent}`}
              key={location.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
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
                <span>Bengaluru, Karnataka</span>
              </div>

              <div className="reviewRating">
                <div className="reviewRatingValue">
                  <FiStar />
                  <strong>{location.rating}</strong>
                </div>

                <span>{location.reviews}</span>
              </div>

              <StarRating />

              <p className="reviewLocationDescription">
                {location.description}
              </p>

              <a
                href={location.reviewUrl}
                className="reviewLocationFooter"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${location.name} reviews on Google Maps`}
              >
                <span>Explore Clinic Reviews</span>

                <span className="reviewArrow">
                  <FiArrowUpRight />
                </span>
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="testimonialsBottomNote"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="testimonialsBottomIcon">
            <FiHeart />
          </span>

          <p>
            At Rehabics, every patient deserves attentive care and a
            rehabilitation plan shaped around their individual needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
