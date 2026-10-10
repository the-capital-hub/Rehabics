
import { useRef } from "react";
import { motion } from "motion/react";
import {
  FiArrowUpRight,
  FiMapPin,
  FiStar,
  FiHeart,
  FiMessageCircle,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import "./Testimonials.css";

const patientReviews = [
  {
    name: "Vidya Chaudhary",
    time: "3 years ago",
    category: "Physiotherapy Care",
    title: "Kind and Supportive Care",
    description:
      "Thank you for the treatment. Dr Archita was kind and explained the issue along with treatment required. Apoorva was very good and gentle throughout the physiotherapy sessions. Appreciate it.",
    image:
      "https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/ChIJQwYZtVEVrjsRmWPba0PMMBo_e0d761cbd8f62ec1de02b2d34f9a9b9e.jpg",
    accent: "teal",
  },
  {
    name: "Shruti Sipani",
    time: "3 years ago",
    category: "Injury Rehabilitation",
    title: "Recovery After an Ankle Injury",
    description:
      "Would totally recommend Rehabics Physiotherapy for recovering from any injury or pain. I went there with a really bad sprained ankle and was not able to walk for 2 months. After therapy here, I gained my balance back and trust in my feet. Walking normally in just 15 days of treatment.",
    image:
      "https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/ChIJQwYZtVEVrjsRmWPba0PMMBo_de27b021901616c3007f0d3468b14b28.jpg",
    accent: "purple",
  },
  {
    name: "Lakshya Jain",
    time: "3 years ago",
    category: "ACL Rehabilitation",
    title: "Support Throughout Recovery",
    description:
      "I had the privilege of receiving treatment for an ACL tear from Dr. Archita and team at Rehabics Physiotherapy. Her expertise and dedication were evident in every session. The personalised rehabilitation helped me recover effectively and understand my body better. The facility was clean, well equipped and comfortable. I highly recommend Rehabics Physiotherapy.",
    image:
      "https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/ChIJV9RXulwTrjsRWH1YY_p4Am8_064e117992e4406dd5957884b907e796.jpg",
    accent: "pink",
  },
  {
    name: "Diana Khundongbam18",
    time: "3 years ago",
    category: "Patient Rating",
    title: "Google Patient Rating",
    description: "",
    image:
      "https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/ChIJV9RXulwTrjsRWH1YY_p4Am8_95f7263c882c17cdebde41ede6577967.jpg",
    accent: "teal",
  },
  {
    name: "Priya Shanti",
    time: "3 years ago",
    category: "Patient Rating",
    title: "Google Patient Rating",
    description: "",
    image:
      "https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/ChIJV9RXulwTrjsRWH1YY_p4Am8_8429b4da8b32175bebe16a1bb830d548.jpg",
    accent: "purple",
  },
  {
    name: "Karthik Raja",
    time: "3 years ago",
    category: "Knee Rehabilitation",
    title: "Progress After ACL Surgery",
    description:
      "I would 100% recommend the clinic to any of my friends and family. Very friendly staff and great results. I would also like to thank Archita. After a few weeks, I had good progress in my knee after ACL surgery.",
    image:
      "https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/ChIJQwYZtVEVrjsRmWPba0PMMBo_8ec4f37acc9eda8f29324b6beca42e09.jpg",
    accent: "pink",
  },
  {
    name: "Rhama L V",
    time: "3 years ago",
    category: "Post Surgery Recovery",
    title: "ACL and Meniscus Rehabilitation",
    description:
      "I had an exceptional experience following ACL and meniscus repair surgery on my right knee. Dr. Archita tailored therapy to my mobility goals. Under the team's guidance, I witnessed remarkable progress in knee rehabilitation and muscle growth. I wholeheartedly recommend this centre, especially for those aspiring to return to sports.",
    image:
      "https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/ChIJQwYZtVEVrjsRmWPba0PMMBo_607560ec37789ecd820aa79dd3a1c463.jpg",
    accent: "teal",
  },
  {
    name: "Roshni Srinivas",
    time: "3 years ago",
    category: "Spine Care",
    title: "Cervical and Lower Back Care",
    description:
      "I would like to thank Dr Archita for treating my cervical spondylitis and lower back pain. I am feeling much better after strengthening and TENS. The team coordination and the way they care for their patients is wonderful. I highly recommend Rehabics for pain problems.",
    image:
      "https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/ChIJV9RXulwTrjsRWH1YY_p4Am8_c483858778bdcb339c71ec9af40924d5.jpg",
    accent: "purple",
  },
  {
    name: "Darshika Bhayani",
    time: "3 years ago",
    category: "ACL Rehabilitation",
    title: "Compassionate Recovery Support",
    description:
      "As an ACL patient who recently underwent surgery, I am grateful for the exceptional care and support at Rehabics Physiotherapy Centre. Dr. Archita Tiwari started with home visits when I could not walk without support. The empathetic nature of everyone at the centre made my recovery journey better.",
    image:
      "https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/ChIJQwYZtVEVrjsRmWPba0PMMBo_f637a5030c4cc3cb35dbdddd02deba0f.jpg",
    accent: "pink",
  },
  {
    name: "Anil KJ",
    time: "3 years ago",
    category: "Sports Injury Care",
    title: "Professional Expertise",
    description:
      "Need to appreciate the experience and knowledge Dr Archita brings to the table. The equipment there is top notch. Would recommend this place for physiotherapy and other sports injuries.",
    image:
      "https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/ChIJV9RXulwTrjsRWH1YY_p4Am8_00757f245e92e6dd1130f75ec16a826e.jpg",
    accent: "teal",
  },
  {
    name: "sini0001",
    time: "3 years ago",
    category: "Physiotherapy Care",
    title: "Friendly and Professional Team",
    description:
      "Very good service. Therapist is very friendly and professional. Thank you for all your help and support.",
    image:
      "https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/ChIJV9RXulwTrjsRWH1YY_p4Am8_df1e67d5277cc0406ba2de31dcea1ae3.jpg",
    accent: "purple",
  },
  {
    name: "sharada kumari",
    time: "3 years ago",
    category: "Personalised Care",
    title: "A Trusted Physiotherapy Team",
    description:
      "Dr. Archita is an amazing doctor. She has been treating me and my family and has recommended exercises for better improvement. I highly recommend everyone with musculoskeletal issues to visit. Thanks to Dr Archita and her whole team.",
    image:
      "https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/ChIJV9RXulwTrjsRWH1YY_p4Am8_f394d309f9082bdda83baf8cb1fa679b.jpg",
    accent: "pink",
  },
  {
    name: "Apoorva Nagabhushan",
    time: "3 years ago",
    category: "Back Pain Care",
    title: "Clear Guidance and Treatment",
    description:
      "I had been suffering from lower back pain. Dr Archita queried my condition and did a comprehensive examination. She was gracious, clear and patient with my questions. I received good treatment followed by exercises and posture correction guidance to help my recovery.",
    image:
      "https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/ChIJV9RXulwTrjsRWH1YY_p4Am8_0a76e7a6885f7fe97d7268a6700dc123.jpg",
    accent: "teal",
  },
  {
    name: "Balveer Singh",
    time: "3 years ago",
    category: "Shoulder Rehabilitation",
    title: "Personalised Shoulder Treatment",
    description:
      "I visited Rehabics Physiotherapy for shoulder pain and was diagnosed with shoulder impingement. The physiotherapists developed a personalised treatment plan with exercises, stretches and manual therapy. The team explained my condition clearly and encouraged me throughout treatment. My shoulder pain significantly improved.",
    image:
      "https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/ChIJV9RXulwTrjsRWH1YY_p4Am8_0bb29f460843e0ef5857c8fa0f2205a2.jpg",
    accent: "purple",
  },
  {
    name: "Shashank Sg",
    time: "3 years ago",
    category: "Elbow Pain Care",
    title: "Helpful Treatment and Exercises",
    description:
      "I visited Rehabics Physio Centre with severe elbow pain. Dr. Archita Tiwari was soft spoken and advised me on the treatment I needed. I started noticing a difference after two weeks of treatment, exercises and timely care. I would recommend this place for physiotherapy issues.",
    image:
      "https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/ChIJV9RXulwTrjsRWH1YY_p4Am8_c6cabe6041e5eda2f0272fe8d7c090ae.jpg",
    accent: "pink",
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
  const patientCarouselRef = useRef(null);

  const scrollReviews = (direction) => {
    const carousel = patientCarouselRef.current;
    if (!carousel) return;

    const card = carousel.querySelector(".patientFeedbackCard");
    if (!card) return;

    const styles = window.getComputedStyle(carousel);
    const gap =
      parseFloat(styles.columnGap || styles.gap) || 18;
    const distance = card.getBoundingClientRect().width + gap;

    carousel.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  };

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
                <span> you first.</span>
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
              <span className="reviewSummaryLabel">Clinic Ratings</span>

              <div className="reviewSummaryRating">
                <strong>4.9</strong>
                <StarRating />
              </div>

              <p>See individual clinic profiles for patient reviews.</p>
            </div>
          </div>

          <div className="reviewSummaryDivider" />

          <div className="reviewSummaryStatement">
            <span className="reviewStatementLabel">
              The Rehabics Approach
            </span>

            <h3>
              Care that builds
              <em> confidence.</em>
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

          <p>Explore experiences across different rehabilitation needs.</p>
        </div>

        {/* Patient Reviews Carousel */}
        <div className="patientCarouselSection">
          <div
            className="patientCarouselTrack"
            ref={patientCarouselRef}
            aria-label="Patient testimonials"
          >
            {patientReviews.map((review, index) => (
              <motion.article
                className={`patientFeedbackCard patientFeedback${review.accent}`}
                key={`${review.name}-${index}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.4,
                  delay: (index % 3) * 0.06,
                }}
              >
                <div className="patientReviewIdentity">
                  <img
                    className="patientReviewAvatar"
                    src={review.image}
                    alt={`${review.name} profile`}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                      const fallback =
                        event.currentTarget.nextElementSibling;
                      if (fallback) fallback.style.display = "grid";
                    }}
                  />

                  <span
                    className="patientReviewAvatarFallback"
                    aria-hidden="true"
                    style={{ display: "none" }}
                  >
                    {review.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </span>

                  <div className="patientReviewPerson">
                    <h4>{review.name}</h4>
                    <span>{review.time}</span>
                  </div>

                  <span className="patientGoogleMark" aria-label="Google">
                    G
                  </span>
                </div>

                <div className="patientFeedbackTop">
                  <span className="patientFeedbackCategory">
                    {review.category}
                  </span>

                  <span className="patientReviewVerified">
                    <FiCheckCircle />
                    Patient review
                  </span>
                </div>

                <div className="patientFeedbackStars">
                  <StarRating />
                </div>

                <h4 className="patientFeedbackTitle">{review.title}</h4>

                {review.description ? (
                  <p>{review.description}</p>
                ) : (
                  <p className="patientReviewNoText">
                    No written comment is available for this review.
                  </p>
                )}

                <div className="patientFeedbackFooter">
                  <span className="patientFeedbackNote">
                    Shared patient experience
                  </span>
                  <FiMessageCircle />
                </div>
              </motion.article>
            ))}
          </div>

          <div className="patientCarouselControls">
            <span className="patientCarouselHint">
              Explore all {patientReviews.length} patient review entries
            </span>

            <div className="patientCarouselButtons">
              <button
                type="button"
                onClick={() => scrollReviews(-1)}
                aria-label="Previous patient review"
              >
                <FiChevronLeft />
              </button>

              <button
                type="button"
                onClick={() => scrollReviews(1)}
                aria-label="Next patient review"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Clinic Locations */}
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
              transition={{ duration: 0.55, delay: index * 0.12 }}
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
