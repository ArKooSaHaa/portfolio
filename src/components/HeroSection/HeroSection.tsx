"use client";

import { useState, useEffect } from "react";
import { Badge } from "../lightswind/badge";
import { TypingText } from "../lightswind/TypingText";
import WoofyHoverImage from "../lightswind/woofy-hover-image";
import { motion } from "framer-motion";

export const HeroSection = () => {
  // 🟩 Key used to restart typing animation
  const [retypeKey, setRetypeKey] = useState(0);

  // 🟩 Retype every 60 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRetypeKey((prev) => prev + 1);
    }, 10000); // 1 minute

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      id="hero"
      className="text-foreground bg-transparent flex flex-col md:flex-row 
      items-center justify-center max-w-7xl mx-auto w-full"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2,
        },
      }}
    >
      {/* Left Section */}
      <motion.div
        className="flex-1 space-y-4 p-6 text-left md:text-left"
        initial={false}
      >
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          {/* 🟩 Typing Text that retypes every 1 minute */}
          <TypingText
            key={retypeKey} // ← forces restart
            delay={0.3}
            duration={2}
            fontSize="text-4xl"
            fontWeight="font-bold"
            color="text-foreground dark:text-white"
          >
            ArKo SaHa
          </TypingText>

          <motion.span
            className="text-sm text-pink-500 font-semibold block"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.8, ease: "easeOut" },
            }}
          />
        </motion.h1>

        <motion.h2
          className="text-xl text-muted-foreground mt-1"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          Experienced Designer & Full-Stack Developer
        </motion.h2>

        <motion.p
          className="mt-4 text-xs text-muted-foreground"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          Crafting elegant, user-friendly, and high-performance digital
          experiences for global brands. Specializing in UI/UX design, frontend
          & backend development, and creating scalable solutions that captivate
          audiences. Passionate about blending creativity with technology to
          bring ideas to life.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-2"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          <Badge className="text-xs bg-pink-500">Team Lead</Badge>
          <Badge className="text-xs bg-pink-500">Problem Solving</Badge>
          <Badge className="text-xs bg-pink-500">Decision Making</Badge>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="flex-1 flex justify-center p-6"
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
      >
        <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
          <WoofyHoverImage
            src="https://ik.imagekit.io/mekt2pafz/Web%20site%20team/3333.jpg?updatedAt=1765465778818"
            alt="Scarlett Rose"
            width="100%"
            height={256}
            className="w-full h-full"
            effectType="inversion"
            maskRadius={0.35}
            turbulenceIntensity={0.225}
            animationSpeed={1.0}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
