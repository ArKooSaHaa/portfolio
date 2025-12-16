import { Card, CardHeader, CardTitle, CardContent } from "../lightswind/card";
// @ts-ignore: module has no declaration file but is a React component
import InteractiveGradient from "../lightswind/interactive-gradient";
import ProfessionalProfile from "./SkillCategory";
import { motion } from "framer-motion";

export const EducationSection = () => {
  return (
    <motion.section
      id="education"
      className="space-y-10 py-10 px-6"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Education */}
      <div>
        <motion.h3
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Education
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-1 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >

          {/* BSc */}
          <Card>
            <InteractiveGradient>
            <CardHeader>
                <div className="w-full text-left">
                  <CardTitle>B.Sc. in Computer Science & Engineering</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Ahsanullah University of Science and Technology — 2023 (Nov) – Present
                  </p>
                </div>
              
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                Building strong foundation in <strong>algorithms</strong>, 
                <strong> data structures</strong>, and 
                <strong> software engineering principles</strong>.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Hands-on experience in web development & machine learning projects</li>
                <li>Active involvement in university tech clubs & programming contests</li>
                <li>Working on academic projects related to AI & full-stack development</li>
              </ul>
              
            </CardContent>
            </InteractiveGradient>
            
          </Card>
          

          {/* HSC */}
          <Card>
  <InteractiveGradient>
    <CardHeader>
      <div className="w-full text-center">
        <CardTitle>HSC in Science</CardTitle>
        <p className="text-sm text-muted-foreground">
          Shaheed Police Smriti College — Batch 2022 (GPA 5.00)
        </p>
      </div>
    </CardHeader>

    <CardContent className="text-xs text-muted-foreground space-y-2 text-center">
      <p>
        Focused on <strong>Physics</strong>, <strong>Chemistry</strong>, 
        <strong>Mathematics</strong>, and <strong>ICT</strong>, securing top results.
      </p>

      <ul className="list-disc list-inside space-y-1 mx-auto w-fit text-left">
        <li>Participated in science fairs & academic Olympiads</li>
        <li>Consistently ranked among top-performing students</li>
        <li>Developed strong analytical & problem-solving abilities</li>
      </ul>
    </CardContent>
  </InteractiveGradient>
</Card>


          {/* SSC */}
<Card>
  <InteractiveGradient>
    <CardHeader>
      <div className="w-full text-center">
        <CardTitle>SSC in Science</CardTitle>
        <p className="text-sm text-muted-foreground">
          Monipur High School & College — Batch 2020 (GPA 5.00)
        </p>
      </div>
    </CardHeader>

    <CardContent className="text-xs text-muted-foreground space-y-2 text-center">
      <p>
        Built a strong academic foundation in <strong>mathematics</strong> 
        and <strong>scientific reasoning</strong>.
      </p>

      <ul className="list-disc list-inside space-y-1 mx-auto w-fit text-left">
        <li>Member of school science club & quiz teams</li>
        <li>Completed multiple STEM-based mini-projects</li>
        <li>Developed early interest in technology & engineering</li>
      </ul>
    </CardContent>
  </InteractiveGradient>
</Card>


        </motion.div>
      </div>

      <ProfessionalProfile />
    </motion.section>
  );
};
