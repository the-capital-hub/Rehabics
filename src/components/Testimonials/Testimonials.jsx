
import { motion } from "motion/react";
import {
  FiArrowUpRight,
  FiMapPin,
  FiStar,
  FiHeart,
  FiMessageCircle,
  FiActivity,
  FiCheckCircle,
} from "react-icons/fi";
import "./Testimonials.css";

const patientReviews = [
  {
    category: "Spine Care",
    title: "Personalised Pain Management",
    description:
      "Feedback highlights personalised treatment, strengthening exercises and supportive guidance for cervical and lower back pain.",
    accent: "teal",
    icon: FiActivity,
  },
  {
    category: "Post Surgery Recovery",
    title: "Support Throughout Recovery",
    description:
      "A rehabilitation experience that highlights home visits, compassionate support and guidance throughout recovery after ACL surgery.",
    accent: "purple",
    icon: FiHeart,
  },
  {
    category: "Shoulder Rehabilitation",
    title: "A Plan Built Around the Patient",
    description:
      "Feedback highlights a personalised rehabilitation plan, exercise guidance and manual therapy for shoulder related concerns.",
    accent: "pink",
    icon: FiCheckCircle,
  },
];

const locations = [
  {
    number: "01",
    name: "Koramangala",
    rating: "4.9",
    reviews: "300 reviews",
    description:
      "Explore the clinic profile and read patient feedback about physiotherapy and rehabilitation care.",
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
      "Explore the clinic profile and read patient feedback about recovery, movement and rehabilitation.",
    reviewUrl:
      "https://www.google.com/maps/search/?api=1&query=Rehabics+Physiotherapy+Haralur+Bengaluru",
    accent: "purple",
  },
];

function StarRating() {
  return (
    <div className="stars" aria-label="Five star visual rating">
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
              <span>Patient Experiences</span>
            </div>

            <span className="testimonialsCount">
              <FiMapPin />
              Two Bengaluru Clinics
            </span>
          </div>

          <div className="testimonialsHeading">
            <div>
              <span className="testimonialsEyebrow">
                Every Recovery Matters
              </span>

              <h2>
                Care that puts
                <span>you first.</span>
              </h2>
            </div>

            <p>
              Every recovery journey is different. Discover the care
              experiences and rehabilitation services that help patients
              work towards better movement and everyday confidence.
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
                Clinic Ratings
              </span>

              <div className="reviewSummaryRating">
                <strong>4.9</strong>
                <StarRating />
              </div>

              <p>
                See individual clinic profiles for patient reviews.
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

        <div className="patientFeedbackHeader">
          <div>
            <span className="testimonialsEyebrow">
              Rehabilitation Experiences
            </span>
            <h3>Patient feedback</h3>
          </div>

          <p>
            Explore experiences across different rehabilitation needs.
          </p>
        </div>

        <div className="patientFeedbackGrid">
          {patientReviews.map((review, index) => {
            const ReviewIcon = review.icon;

            return (
              <motion.article
                className={`patientFeedbackCard patientFeedback${review.accent}`}
                key={review.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className="patientFeedbackTop">
                  <span className="patientFeedbackIcon">
                    <ReviewIcon />
                  </span>

                  <span className="patientFeedbackCategory">
                    {review.category}
                  </span>
                </div>

                <div className="patientFeedbackStars">
                  <StarRating />
                </div>

                <h4>{review.title}</h4>

                <p>{review.description}</p>

                <div className="patientFeedbackFooter">
                  <span className="patientFeedbackNote">
                    Patient experience summary
                  </span>
                  <FiArrowUpRight />
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="clinicReviewHeading">
          <div>
            <span className="testimonialsEyebrow">
              Find Your Nearest Clinic
            </span>
            <h3>Our Bengaluru clinics</h3>
          </div>
        </div>

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
                aria-label={`Explore ${location.name} clinic reviews`}
              >
                <span>Read Clinic Reviews</span>

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
            Every patient deserves attentive care and a rehabilitation
            plan shaped around their individual needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
