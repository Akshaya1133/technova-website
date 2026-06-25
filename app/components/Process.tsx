"use client";

import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discuss",
      description:
        "We understand your business goals and project requirements.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Our team creates intuitive UI/UX and system architecture.",
    },
    {
      number: "03",
      title: "Develop",
      description:
        "We build scalable, secure, and high-performance solutions.",
    },
    {
      number: "04",
      title: "Deploy",
      description:
        "Launch, monitor, and support your product for success.",
    },
  ];

  return (
    <section className="px-10 py-24">
      <h2 className="text-5xl font-bold text-center mb-4">
        Our Process
      </h2>

<p className="text-center text-gray-600 mb-16">
          A streamlined approach that turns your ideas into reality.
      </p>

      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            className="
bg-white
border
border-gray-200
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
            <div className="text-5xl font-bold text-[#12B8B0] mb-4">
              {step.number}
            </div>

            <h3 className="text-2xl font-bold mb-4">
              {step.title}
            </h3>

<p className="text-gray-600">
                {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}