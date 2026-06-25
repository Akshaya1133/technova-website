import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaAws,
  FaPython,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFlutter,
  SiFirebase,
} from "react-icons/si";

import { BsRobot } from "react-icons/bs";
import {
  SiMongodb,
  SiDocker,
  SiGit,
} from "react-icons/si";

export default function TechStack() {
 
    const technologies = [
  { name: "React", icon: <FaReact size={50} /> },
  { name: "Next.js", icon: <SiNextdotjs size={50} /> },
  { name: "Flutter", icon: <SiFlutter size={50} /> },
  { name: "Node.js", icon: <FaNodeJs size={50} /> },

  { name: "Java", icon: <FaJava size={50} /> },
  { name: "AWS", icon: <FaAws size={50} /> },
  { name: "Firebase", icon: <SiFirebase size={50} /> },
  { name: "AI", icon: <BsRobot size={50} /> },

  { name: "Python", icon: <FaPython size={50} /> },
  { name: "MongoDB", icon: <SiMongodb size={50} /> },
  { name: "Docker", icon: <SiDocker size={50} /> },
  { name: "Git", icon: <SiGit size={50} /> },
];
<div className="text-center mt-10">
  <p className="text-gray-400 text-lg">
    And many more technologies tailored to your business requirements...
  </p>
</div>

  return (
    <section className="px-10 py-24">
      <h2 className="text-5xl font-bold text-center mb-4">
        Technologies We Use
      </h2>

<p className="text-center text-gray-600 mb-12">
          Modern technologies powering scalable digital solutions.
      </p>

      <div className="grid md:grid-cols-4 gap-6">
        {technologies.map((tech) => (
          <div
  key={tech.name}
  className="
  group
bg-white
border border-gray-200
rounded-2xl
p-8
text-center
hover:border-[#12B8B0]
hover:shadow-2xl
hover:-translate-y-3
hover:shadow-2xl
hover:scale-[1.02]
transition-all
duration-500
"
          >
<div
  className="
  flex
  justify-center
  mb-4
  text-[#12B8B0]
  transition-all
  duration-300
  group-hover:scale-110
  "
>              {tech.icon}
            </div>

            <h3 className="text-xl font-bold">
              {tech.name}
            </h3>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
<p className="text-gray-600 text-lg">
      And many more technologies tailored to your business requirements...
  </p>
</div>
    </section>
  );
}