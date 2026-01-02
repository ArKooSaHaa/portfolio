// src/components/ContactUsSection/contactUs.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../lightswind/card.tsx";
import { Mail, Phone, MapPin } from "lucide-react";
import { ConfettiButton } from "../lightswind/confetti-button";
import SlidingCards from "../lightswind/SlidingCards.jsx";

export const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form submitted:", formData);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitStatus(""), 3000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(""), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "arkosaha61005@gmail.com",
      link: "mailto:arkosaha61005@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+8801867747152",
      link: "tel:+8801867747152",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mirpur, Dhaka, Bangladesh",
      link: "https://maps.app.goo.gl/VUob3TqaXWUZiuuz6",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-foreground mb-3">Get In Touch</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? Feel free to reach out.
          I'd love to hear from you!
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Side - Contact Info (Sliding Cards) */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center">
            <h3 className="sr-only">Contact Methods</h3>
            <SlidingCards
              cards={contactInfo.map((info, i) => {
                const Icon = info.icon;
                return {
                  id: `${i}`,
                  icon: Icon ? <Icon className="w-8 h-8 text-white" /> : undefined,
                  title: info.label,
                  value: info.value,
                  bgClass: i === 0
                    ? "bg-gradient-to-br from-pink-500 to-orange-400"
                    : i === 1
                    ? "bg-gradient-to-br from-blue-500 to-indigo-600"
                    : "bg-gradient-to-br from-green-400 to-teal-500",
                };
              })}
              className="mx-auto"
              cardSize="w-20 h-20"
              onCardClick={(index) => {
                const info = contactInfo[index];
                if (info?.link) window.open(info.link, "_blank");
              }}
            />

            {/* Removed external legend — each sliding card now shows its own details */}
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white dark:bg-slate-900 text-black dark:text-white border border-gray-300 dark:border-slate-700 shadow-lg dark:shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">Send Me a Message</CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-pink-500 dark:focus:border-pink-400 focus:ring-1 focus:ring-pink-500 dark:focus:ring-pink-400 transition-all"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-pink-500 dark:focus:border-pink-400 focus:ring-1 focus:ring-pink-500 dark:focus:ring-pink-400 transition-all"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-pink-500 dark:focus:border-pink-400 focus:ring-1 focus:ring-pink-500 dark:focus:ring-pink-400 transition-all"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-pink-500 dark:focus:border-pink-400 focus:ring-1 focus:ring-pink-500 dark:focus:ring-pink-400 transition-all resize-none"
                    required
                  />
                </div>

                {/* Submit Button (Confetti) */}
                <div>
                  <ConfettiButton
                    type="submit"
                    loading={isSubmitting}
                    variant="gradient"
                    size="default"
                    className="w-full py-3 px-6 rounded-lg text-white font-semibold transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </ConfettiButton>
                </div>

                {/* Success / Error */}
                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-lg bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 text-green-700 dark:text-green-400 text-sm"
                    >
                      ✓ Message sent successfully!
                    </motion.div>
                  )}
                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-lg bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 text-red-700 dark:text-red-400 text-sm"
                    >
                      ✗ Failed to send message. Try again.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};
