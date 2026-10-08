import { motion } from "motion/react";
import { FiMapPin, FiStar } from "react-icons/fi";
import "./Testimonials.css";

const locations = [
  {
    name: "Koramangala",
    rating: "4.9",
    reviews: "300 reviews",
  },
  {
    name: "Haralur",
    rating: "5.0",
    reviews: "58 reviews",
  },
];

function Testimonials() {
  return (
    <section className="testimonialsSection" id="reviews">
      <div className="testimonialsContainer">
        <motion.div
          className="testimonialsHeader"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div className="testimonialsLabel">
            <span className="testimonialsLabelLine" />
            Patient Experience
          </div>

          <div>
            <h2>
              Trusted care across
              <span>our Bengaluru clinics.</span>
            </h2>
            <p>
              Explore the patient experience at our Koramangala
              and Haralur locations.
            </p>
          </div>
        </motion.div>

        <div className="locationReviews">
          {locations.map((location, index) => (
            <motion.div
              className="reviewLocation"
              key={location.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="reviewLocationTop">
                <div className="reviewLocationName">
                  <FiMapPin />
                  <span>{location.name}</span>
                </div>

                <div className="reviewRating">
                  <FiStar />
                  <strong>{location.rating}</strong>
                </div>
              </div>

              <div className="stars" aria-label={`${location.rating} rating`}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar key={star} />
                ))}
              </div>

              <p>Google reviews</p>
              <span className="reviewCount">{location.reviews}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
