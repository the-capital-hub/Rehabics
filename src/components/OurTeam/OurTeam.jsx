
import { motion } from "motion/react";
import { FiUserCheck } from "react-icons/fi";
import "./OurTeam.css";

const teamMembers = [
  {
    id: 1,
    image:
      "https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-14-at-1.12.49-PM-9-scaled.jpg",
    alt: "Rehabics physiotherapy team member one",
  },
  {
    id: 2,
    image:
      "https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-14-at-1.12.45-PM-1.jpg",
    alt: "Rehabics physiotherapy team member two",
  },
  {
    id: 3,
    image:
      "https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/458.png",
    alt: "Rehabics physiotherapy team member three",
  },
];

function OurTeam() {
  return (
    <section className="ourTeamSection" id="our-team">
      <div className="ourTeamContainer">
        {/* Section Heading */}
        <motion.div
          className="ourTeamHeading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="ourTeamHeadingTop">
            <span className="ourTeamEyebrow">
              <span className="ourTeamDot" />
              OUR TEAM
            </span>

            <span className="ourTeamCount">
              03 Team Members
            </span>
          </div>

          <div className="ourTeamHeadingContent">
            <div className="ourTeamHeadingLeft">
              <span className="ourTeamSubtitle">
                PEOPLE BEHIND YOUR RECOVERY
              </span>

              <h2>
                Care that moves
                <span>you forward.</span>
              </h2>
            </div>

            <p>
              Meet the people behind Rehabics who are dedicated to
              supporting your movement, recovery and wellbeing.
            </p>
          </div>
        </motion.div>

        {/* Team Members */}
        <div className="ourTeamGrid">
          {teamMembers.map((member, index) => (
            <motion.article
              className="ourTeamCard"
              key={member.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
            >
              <div className="ourTeamImageWrap">
                <img
                  src={member.image}
                  alt={member.alt}
                  loading="lazy"
                  decoding="async"
                />

                <div className="ourTeamImageOverlay">
                  <span className="ourTeamImageIcon">
                    <FiUserCheck />
                  </span>
                </div>
              </div>

              <div className="ourTeamCardFooter">
                <span className="ourTeamMemberLabel">
                  REHABICS TEAM
                </span>

                <span className="ourTeamMemberIcon">
                  <FiUserCheck />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
