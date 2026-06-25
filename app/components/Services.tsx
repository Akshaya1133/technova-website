"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Mobile App Development",
      description:
        "Android and iOS applications built with Flutter and modern technologies.",
    },
    {
      title: "Website Development",
      description:
        "Responsive business websites using Next.js, React and Tailwind CSS.",
    },
    {
      title: "Custom Software",
      description:
        "ERP systems, CRM platforms and custom business automation solutions.",
    },
    {
      title: "UI/UX Design",
      description:
        "Modern, user-friendly interfaces focused on great user experience.",
    },
    {
      title: "Cloud & Hosting",
      description:
        "Cloud deployment, hosting, DevOps and infrastructure management.",
    },
    {
      title: "Testing & QA",
      description:
        "Comprehensive testing to ensure reliability, security and performance.",
    },
  ];

  return (
    <section className="px-10 py-20">
      <h2 className="text-4xl font-bold text-center mb-10">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <motion.div
            key={service.title}
            whileHover={{ scale: 1.05 }}
            className="
            group
            relative
            bg-zinc-900/50
            border
            border-[#12B8B0]/20
            rounded-2xl
            p-8
            min-h-[180px]
            hover:border-[#12B8B0]
            hover:shadow-[0_0_25px_rgba(18,184,176,0.35)]
            transition-all
            duration-300
            overflow-hidden
            cursor-pointer
            "
          >
            <h3 className="text-xl font-semibold">
              {service.title}
            </h3>

            <div
              className="
              absolute
              inset-0
              bg-zinc-900/95
              flex
              items-center
              justify-center
              p-6
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-300
              "
            >
              <p className="text-center text-gray-300">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}