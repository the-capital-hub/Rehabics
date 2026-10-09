
import { motion } from "motion/react";
import {
  FiArrowUpRight,
  FiInstagram,
  FiPlay,
  FiHeart,
  FiActivity,
  FiMove,
  FiShield,
  FiRefreshCw,
  FiUserCheck,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

import "./InstagramFeed.css";

const instagramPosts = [
  {
    id: 1,
    type: "Reel",
    category: "Pain Education",
    title: "Understand the root cause of pain",
    image: "/images/instagram/pain-education.jpg",
    url: "https://www.instagram.com/reel/DC1Zgv7Srjz/",
    icon: FiActivity,
  },
  {
    id: 2,
    type: "Reel",
    category: "Physiotherapy",
    title: "Movement, recovery and better everyday function",
    image: "/images/instagram/physiotherapy.jpg",
    url: "https://www.instagram.com/reel/DCgoTT-JPRo/",
    icon: FiMove,
  },
  {
    id: 3,
    type: "Reel",
    category: "Movement Health",
    title: "Small movement habits that can make a difference",
    image: "/images/instagram/movement-health.jpg",
    url: "https://www.instagram.com/reel/DCVxXvsp76X/",
    icon: FiTrendingUp,
  },
  {
    id: 4,
    type: "Reel",
    category: "Recovery Stories",
    title: "A closer look at the recovery journey",
    image: "/images/instagram/recovery.jpg",
    url: "https://www.instagram.com/reel/DB8lucySGKO/",
    icon: FiRefreshCw,
  },
  {
    id: 5,
    type: "Reel",
    category: "Posture and Mobility",
    title: "Build awareness of your posture and movement",
    image: "/images/instagram/posture.jpg",
    url: "https://www.instagram.com/reel/DBjG2Q2yZ5I/",
    icon: FiUserCheck,
  },
  {
    id: 6,
    type: "Reel",
    category: "Injury Support",
    title: "Get to know physiotherapy based recovery",
    image: "/images/instagram/injury-support.jpg",
    url: "https://www.instagram.com/reel/DB0bUVBIq5-/",
    icon: FiShield,
  },
  {
    id: 7,
    type: "Reel",
    category: "Active Living",
    title: "Move with more confidence in daily life",
    image: "/images/instagram/active-living.jpg",
    url: "https://www.instagram.com/reel/DBdsPWRp1uW/",
    icon: FiHeart,
  },
  {
    id: 8,
    type: "Post",
    category: "Community",
    title: "More from the Rehabics community",
    image: "/images/instagram/community.jpg",
    url: "https://www.instagram.com/p/DCeuVlYy_OJ/",
    icon: FiUsers,
  },
];

const InstagramFeed = () => {
  return (
    <section className="rifSection" id="instagram">
      <div className="rifContainer">

        <motion.div
          className="rifHero"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="rifHeroContent">
            <span className="rifEyebrow">
              <FiInstagram />
              <span>REHABICS ON INSTAGRAM</span>
            </span>

            <h2>
              Movement is better
              <br />
              <span>when we share it.</span>
            </h2>

            <p>
              Explore physiotherapy insights, movement education,
              recovery inspiration and everyday wellness from our community.
            </p>

            <a
              className="rifProfileButton"
              href="https://www.instagram.com/rehabics/"
              target="_blank"
              rel="noreferrer"
            >
              <FiInstagram />
              Follow @rehabics
              <FiArrowUpRight />
            </a>

            <div className="rifHeroStats">
              <div>
                <strong>Movement</strong>
                <span>Made meaningful</span>
              </div>
              <div>
                <strong>Recovery</strong>
                <span>Built with guidance</span>
              </div>
              <div>
                <strong>Community</strong>
                <span>Growing together</span>
              </div>
            </div>
          </div>

          <div className="rifHeroVisual">
            <div className="rifVisualGlow" />

            <div className="rifVisualCard">
              <div className="rifVisualIcon">
                <FiActivity />
              </div>

              <span className="rifVisualLabel">
                YOUR MOVEMENT JOURNEY
              </span>

              <h3>
                Progress begins
                <br />
                with movement.
              </h3>

              <div className="rifVisualLine">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="rifVisualBottom">
                <span>Move with purpose</span>
                <FiArrowUpRight />
              </div>
            </div>

            <div className="rifFloatingTag">
              <FiHeart />
              <span>Every step counts</span>
            </div>
          </div>
        </motion.div>

        <div className="rifFeedHeader">
          <div>
            <span className="rifSectionEyebrow">
              FROM OUR COMMUNITY
            </span>
            <h2>Latest from Instagram</h2>
            <p>
              Discover ideas to help you move, recover and feel better.
            </p>
          </div>

          <a
            className="rifTextLink"
            href="https://www.instagram.com/rehabics/"
            target="_blank"
            rel="noreferrer"
          >
            View Instagram
            <FiArrowUpRight />
          </a>
        </div>

        <div className="rifPostsGrid">
          {instagramPosts.map((post, index) => {
            const PostIcon = post.icon;

            return (
              <motion.a
                className="rifPostCard"
                href={post.url}
                target="_blank"
                rel="noreferrer"
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.45,
                  delay: (index % 4) * 0.08,
                }}
              >
                <div className="rifPostMedia">
                  <img
                    className="rifPostImage"
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                      event.currentTarget.nextElementSibling.style.display =
                        "flex";
                    }}
                  />

                  <div className={`rifPostFallback rifTheme${post.id}`}>
                    <div className="rifFallbackOrb" />
                    <div className="rifFallbackIcon">
                      <PostIcon />
                    </div>
                    <span className="rifFallbackBrand">REHABICS</span>
                    <strong>{post.category}</strong>
                    <span className="rifFallbackText">
                      Move better. Feel better.
                    </span>
                  </div>

                  <span className="rifPostType">
                    {post.type === "Reel" ? <FiPlay /> : <FiInstagram />}
                    {post.type}
                  </span>

                  <span className="rifPostOpen">
                    <FiArrowUpRight />
                  </span>
                </div>

                <div className="rifPostInfo">
                  <span className="rifPostCategory">{post.category}</span>
                  <h3>{post.title}</h3>

                  <span className="rifPostLink">
                    Watch on Instagram
                    <FiArrowUpRight />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        <div className="rifBottomCta">
          <div className="rifBottomIcon">
            <FiInstagram />
          </div>

          <div>
            <h3>Be part of the Rehabics community</h3>
            <p>
              Follow us for more movement tips, recovery insights and
              physiotherapy education.
            </p>
          </div>

          <a
            href="https://www.instagram.com/rehabics/"
            target="_blank"
            rel="noreferrer"
            className="rifBottomButton"
          >
            Follow us
            <FiArrowUpRight />
          </a>
        </div>

      </div>
    </section>
  );
};

export default InstagramFeed;
