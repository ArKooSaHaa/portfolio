import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Briefcase, Award, Layers, Users, Globe } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "Jan 18, 2024 – Present",
      title: "Senior Sub Executive",
      subtitle: "AUST Robotics Club",
      description:
        "Organizing robotics workshops, managing technical teams, and guiding new members in automation and embedded systems. Contributed to multiple national-level competition preparations and helped standardize internal training materials.",
      icon: <Globe className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Nov 9, 2023 – Oct 7, 2024",
      title: "Batch Ambassador",
      subtitle: "AUST Innovation & Design Club",
      description:
        "Represented the student body, facilitated communication between the club and freshmen, and helped run large-scale innovation events. Led onboarding programs and boosted club participation by promoting interdisciplinary design culture.",
      icon: <Award className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Oct 8, 2024 – Dec 15, 2024",
      title: "Junior Executive",
      subtitle: "Mindsparks",
      description:
        "Supported event coordination and technical sessions for a leading university tech festival. Assisted in logistics, workshop planning, and digital promotion efforts while contributing to improved attendee engagement.",
      icon: <Layers className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2023 – Present",
      title: "Home Tutor",
      subtitle: "Self-Employed",
      description:
        "Teaching Physics, Chemistry, and Mathematics to high school and college-level students. Specializing in conceptual learning, exam strategies, and STEM mentoring. Helped multiple students improve grades and enter competitive academic programs.",
      icon: <Users className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2022 – Present",
      title: "App & Web Developer",
      subtitle: "Independent / Freelance",
      description:
        "Building full-stack applications using React, Next.js, Node.js, and modern UI frameworks. Delivered numerous personal, academic, and freelance projects—from interactive dashboards to mobile apps. Strong focus on clean architecture, accessibility, and performance optimization.",
      icon: <Briefcase className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Ongoing",
      title: "Projects & Technical Growth",
      subtitle: "Self-Driven",
      description:
        "Worked on diverse projects including automation tools, UI/UX prototypes, web platforms, and mobile apps. Continuously learning new technologies and contributing to collaborative student projects, hackathons, and open-source initiatives.",
      icon: <Award className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Career Journey"
        subtitle="An evolving path of leadership, learning, and hands-on innovation"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
