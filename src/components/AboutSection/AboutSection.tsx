import { Separator } from "../lightswind/separator";
import { ShinyText } from "../lightswind/shiny-text";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <motion.div
      id="about"
      className="text-foreground max-w-7xl mx-auto w-full px-6 py-12 space-y-4"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <ShinyText
        size="3xl"
        weight="bold"
        speed={1}
        direction="left-to-right"
        shineWidth={50}
        intensity={1}
      >
        About Me
      </ShinyText>

      <p className="text-gray-700 dark:text-gray-800 text-sm max-w-3xl leading-relaxed">
        I was born in 
        <span className="text-pink-500 font-semibold"> Jashore </span>
        and grew up in 
        <span className="text-pink-500 font-semibold"> Dhaka</span>, where I developed a strong passion for technology early on. 
        I’m deeply interested in 
        <span className="text-pink-500 font-semibold"> cybersecurity</span>, 
        <span className="text-pink-500 font-semibold"> machine learning</span>, 
        <span className="text-pink-500 font-semibold"> AI</span>, and 
        <span className="text-pink-500 font-semibold"> problem-solving</span>, 
        and I love exploring how modern technologies can create meaningful impact.
        <br /><br />
        When I’m not coding, I enjoy 
        <span className="text-pink-500 font-semibold"> traveling</span>, learning new skills, 
        and staying curious about the ever-evolving world of tech. 
        My goal is to keep building 
        <span className="text-pink-500 font-semibold"> innovative</span>, 
        <span className="text-pink-500 font-semibold"> secure</span>, and 
        <span className="text-pink-500 font-semibold"> user-focused</span> digital experiences.
      </p>

      <Separator />
    </motion.div>
  );
};
