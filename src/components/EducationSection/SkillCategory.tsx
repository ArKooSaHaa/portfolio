"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../lightswind/card.tsx";
import { Badge } from "../lightswind/badge";
import { Progress } from "../lightswind/progress";
import { motion, AnimatePresence } from "framer-motion";
import { CountUp } from "../lightswind/count-up";
import { Code, Smartphone, Package } from "lucide-react";
import { useState, useRef, useCallback } from "react";
import { cn } from "../lib/utils";

const skillsData = {
  webDevelopment: [
    { name: "React.js / Next.js", level: 95 },
    { name: "Node.js / Express", level: 90 },
    { name: "TypeScript & JavaScript", level: 92 },
    { name: "Database (MongoDB / PostgreSQL)", level: 88 },
    { name: "Cloud (AWS / Azure)", level: 85 },
  ],
  appDevelopment: [
    { name: "React Native / Flutter", level: 88 },
    { name: "Swift / Kotlin", level: 82 },
    { name: "Mobile UI/UX Design", level: 90 },
    { name: "App State Management", level: 87 },
    { name: "APIs & Backend Integration", level: 89 },
  ],
  softwareDevelopment: [
    { name: "System Design", level: 85 },
    { name: "Python / Java", level: 88 },
    { name: "Microservices Architecture", level: 83 },
    { name: "Testing & QA", level: 86 },
    { name: "DevOps & CI/CD", level: 84 },
  ],
};

const SkillCard = ({ title, skills, icon }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [randomText, setRandomText] = useState("");
  const cardRef = useRef(null);

  const characterSet =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const characterCount = 2000;

  const generateRandomString = (length) => {
    return Array.from({ length }, () =>
      characterSet[Math.floor(Math.random() * characterSet.length)]
    ).join("");
  };

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
    setRandomText(generateRandomString(characterCount));
  }, []);

  const handleMouseLeave = () => {
    setRandomText("");
  };

  return (
    <div
      ref={cardRef}
      className="relative h-full overflow-hidden rounded-lg"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Card className="
        h-full 
        bg-white 
        dark:bg-slate-900 
        text-black 
        dark:text-white 
        border border-gray-300 
        dark:border-slate-700 
        shadow-md dark:shadow-2xl 
        transition-colors relative group
      ">
        {/* Code Hover Effect */}
        <div
          className="absolute inset-0 font-mono text-sm leading-tight opacity-0 group-hover:opacity-100 
          transition-opacity duration-500 overflow-hidden break-all text-green-500/80 pointer-events-none z-20"
          style={{
            WebkitMaskImage: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, #000 20%, rgba(0,0,0,0.25), transparent)`,
            maskImage: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, #000 20%, rgba(0,0,0,0.25), transparent)`,
          }}
        >
          {randomText}
        </div>

        <CardHeader className="relative z-10">
          <div className="flex items-center gap-3">
            {icon}
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
        </CardHeader>

        <CardContent className="space-y-5 relative z-10">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true, amount: 0.8 }}
            >
              <div className="flex items-center justify-between text-sm font-medium mb-2">
                <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                <CountUp
                  className="text-sm font-semibold text-pink-500"
                  value={skill.level}
                  suffix="%"
                  duration={1.5}
                />
              </div>
              <Progress value={skill.level} />
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default function ProfessionalProfile() {
  return (
    <motion.section
      id="skills"
      className="space-y-12"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 },
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold mb-8">Core Skills</h3>
      </motion.div>

      {/* Skill Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <SkillCard
          title="Web Development"
          skills={skillsData.webDevelopment}
          icon={<Code className="w-6 h-6 text-pink-500" />}
        />
        <SkillCard
          title="App Development"
          skills={skillsData.appDevelopment}
          icon={<Smartphone className="w-6 h-6 text-pink-500" />}
        />
        <SkillCard
          title="Software Development"
          skills={skillsData.softwareDevelopment}
          icon={<Package className="w-6 h-6 text-pink-500" />}
        />
      </motion.div>

      {/* Soft Skills */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Card className="
          bg-white 
          dark:bg-slate-900 
          text-black 
          dark:text-white 
          border border-gray-300 
          dark:border-slate-700 
          shadow-md dark:shadow-2xl
        ">
          <CardHeader>
            <CardTitle>Soft Skills</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <AnimatePresence>
              {[
                "Leadership",
                "Problem Solving",
                "Mentorship",
                "Strategic Thinking",
                "Cross-Team Collaboration",
              ].map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  viewport={{ once: true }}
                >
                  <Badge className="bg-pink-500 hover:bg-pink-600 text-sm px-4 py-2 rounded-lg transition-colors">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </AnimatePresence>
          </CardContent>
        </Card>
      </motion.div>
    </motion.section>
  );
}
