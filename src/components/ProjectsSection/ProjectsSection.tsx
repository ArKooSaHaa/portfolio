"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SeasonalHoverCards } from "../lightswind/seasonal-hover-cards.jsx";

export const ProjectsSection = () => {
  const [projects] = useState([
    {
      title: "Netflix Clone",
      subtitle: "Streaming Platform",
      description:
        "Built a full-featured streaming platform with user authentication, personalized recommendations using ML algorithms, dynamic content filtering, and adaptive video streaming. Features include watchlist management, user profiles, and real-time notifications.",
      imageSrc: "/11.png",
      imageAlt: "Netflix Clone Project",
      link: "https://github.com/arkosaha/netflix-clone",
    },
    {
      title: "YouTube Clone",
      subtitle: "Video Sharing Platform",
      description:
        "Developed a comprehensive video sharing platform with upload functionality, video transcoding, real-time comments, likes system, and recommendation engine. Includes advanced search, playlist creation, channel management, and analytics dashboard for creators.",
      imageSrc: "/33.webp",
      imageAlt: "YouTube Clone Project",
      link: "https://github.com/arkosaha/youtube-clone",
    },
    {
      title: "Spotify Clone",
      subtitle: "Music Streaming Service",
      description:
        "Created a music streaming application with playlist management, song recommendations, audio player with equalizer, search functionality, and user library organization. Features social sharing, collaborative playlists, and smart shuffle algorithms.",
      imageSrc: "/22.webp",
      imageAlt: "Spotify Clone Project",
      link: "https://github.com/arkosaha/spotify-clone",
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ when: "beforeChildren", staggerChildren: 0.1 }}
    >
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.h2
          className="text-3xl font-bold text-foreground mb-8 text-center"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SeasonalHoverCards cards={projects} />
        </motion.div>
      </section>
    </motion.div>
  );
};
