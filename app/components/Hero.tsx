"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroTechWorld from "./HeroTechWorld";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative px-6 py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div
          className="
          w-[700px]
          h-[700px]
          blur-[140px]
          rounded-full
          bg-[#12B8B0]/15
          "
        />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="text-center lg:text-left">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
            text-7xl
            md:text-[8rem]
            font-black
            leading-none
            tracking-tight
            mb-8
            "
          >
            BUILD.
<br />
SCALE.
<br />

<TypeAnimation
  sequence={[
    "GROW.",
    2500,
    "INNOVATE.",
    2500,
    "SUCCEED.",
    2500,
    "EXPAND.",
    2500,
  ]}
  speed={60}
  repeat={Infinity}
  className="text-[#12B8B0] block"
/>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <p
              className="
              max-w-2xl
              text-xl
              md:text-2xl
              text-gray-700
              mb-6
              "
            >
              Software Solutions for Modern Businesses.
              Web, Mobile, Cloud & AI Applications built to accelerate growth.
            </p>

            <p className="max-w-2xl text-xl text-gray-700">
              We Build Digital Solutions That Drive Business Growth
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="
            flex
            flex-col
            sm:flex-row
            gap-4
            justify-center
            lg:justify-start
            "
          >
            <Link
              href="/contact"
              className="
              border-2
              border-[#12B8B0]
              text-[#12B8B0]
              hover:bg-[#12B8B0]
              hover:text-white
              px-6
              py-3
              rounded-xl
              transition-all
              duration-300
              "
            >
              Start Project
            </Link>

            <Link
              href="/services"
              className="
              bg-[#12B8B0]
              hover:bg-[#0A2E57]
              text-white
              px-8
              py-4
              rounded-xl
              shadow-xl
              transition-all
              duration-300
              "
            >
              View Services
            </Link>
          </motion.div>

        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex justify-center items-center">
          <HeroTechWorld />
        </div>

      </div>

    </section>
  );
}