"use client";
import { motion } from "framer-motion";
import {
  Monitor,
  Cloud,
  Smartphone,
  Database,
} from "lucide-react";

export default function HeroTechWorld() {
  return (
<div className="relative w-[560px] h-[460px]">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
<div className="w-[340px] h-[340px] bg-[#12B8B0]/6 blur-[90px] rounded-full" />      </div>

      {/* CONNECTION LINES */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-[155px] left-[285px] w-[120px] h-[2px] bg-[#12B8B0]/15 rounded-full" />

        <div className="absolute top-[275px] left-[355px] w-[2px] h-[60px] bg-[#12B8B0]/15 rounded-full" />

        <div className="absolute bottom-[145px] left-[280px] w-[110px] h-[2px] bg-[#12B8B0]/15 rounded-full" />

        <div className="absolute bottom-[145px] right-[210px] w-[100px] h-[2px] bg-[#12B8B0]/15 rounded-full" />
      </div>

      {/* CENTER PLATFORM */}
<motion.div
  animate={{
  y: [0, -15, 0],
  rotate: [-0.5, 0.5, -0.5],
}}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
  absolute
  left-[55%]
  top-1/2
  -translate-x-1/2
  -translate-y-1/2
  z-20
  "
>
  {/* Bottom layer */}
  <div
    className="
    absolute
    
    w-56
h-36
    bg-white
    rounded-[36px]
    shadow-xl
    translate-y-6
    "
  />

  {/* Glow layer */}
  <div
    className="
    absolute
    w-52
h-32
    bg-[#12B8B0]/8
    rounded-[30px]
    blur-xl
    translate-x-3
    translate-y-3
    "
  />

  {/* Main card */}
  <div
    className="
    relative
    w-52
h-28
    bg-white
    rounded-[28px]
    shadow-[0_15px_40px_rgba(15,23,42,0.08)]
    border
    border-[#12B8B0]/10
    flex
    items-center
    justify-center
    "
  >
    <img
      src="/images/TECH-logo.png"
      alt="TechNova"
className="w-36 h-auto object-contain"    />
  </div>

  {/* Isometric base */}
  <div
    className="
    absolute
    left-1/2
    top-full
    -translate-x-1/2
    mt-2
    w-44
    h-4
    bg-white
    rounded-full
    shadow-md
    "
  />
</motion.div>
            {/* LAPTOP */}
            <motion.div
              animate={{
  y: [0, -18, 0],
  rotate: [-1, 1, -1],
}}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
              absolute
              top-10
left-20
              "
            >
              <div
                className="
                w-52
h-36
                bg-white
                rounded-3xl
                shadow-xl
                p-4
                "
              >
                <div
                  className="
                  w-full
                  h-full
                  rounded-2xl
                  bg-gradient-to-br
                  from-[#0A2E57]
                  to-[#12B8B0]
                  relative
                  "
                >
                  <div className="absolute top-4 left-4 w-20 h-2 bg-white/30 rounded-full" />
                  <div className="absolute top-10 left-4 w-28 h-2 bg-white/20 rounded-full" />
                  <div className="absolute top-16 left-4 w-16 h-2 bg-white/20 rounded-full" />

                  <Monitor className="absolute bottom-4 right-4 w-10 h-10 text-white" />
                </div>
              </div>

              <div className="w-56 h-3 bg-white rounded-full shadow-lg mx-auto -mt-1" />
            </motion.div>

            {/* CLOUD INFRASTRUCTURE */}
            <motion.div
              animate={{
  y: [0, -22, 0],
  x: [0, 5, 0],
}}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
              absolute
              top-10
right-16
              "
            >
              <Cloud className="w-10 h-10 text-[#12B8B0] mx-auto mb-2" />

              <div className="space-y-2">
                <div className="w-24 h-6 bg-white rounded-xl shadow-md" />
                <div className="w-24 h-6 bg-white rounded-xl shadow-md" />
                <div className="w-24 h-6 bg-white rounded-xl shadow-md" />
                <div className="w-24 h-6 bg-white rounded-xl shadow-md" />
              </div>
            </motion.div>

            {/* MOBILE */}
            <motion.div
              animate={{
  y: [0, -20, 0],
  rotate: [-3, 3, -3],
}}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
              absolute
              bottom-12
left-12
              bg-white
              rounded-[24px]
              shadow-xl
              p-5
              "
            >
              <Smartphone className="w-10 h-10 text-[#12B8B0]" />

              <div
                className="
                absolute
                top-full
                left-1/2
                -translate-x-1/2
                mt-2
                w-14
                h-3
                bg-white
                rounded-lg
                "
              />
            </motion.div>

            {/* SERVER STACK */}
            <motion.div
              animate={{
  y: [0, -18, 0],
  x: [0, 8, 0],
}}
              transition={{
                duration: 5.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
              absolute
              bottom-12
right-16
              "
            >
              <div className="space-y-2">
                <div className="w-24 h-7 bg-white rounded-lg shadow-md" />
                <div className="w-24 h-7 bg-white rounded-lg shadow-md" />
                <div className="w-24 h-7 bg-white rounded-lg shadow-md" />
              </div>

              <div className="w-28 h-3 bg-white rounded-full shadow-md mt-3 mx-auto" />
            </motion.div>

            {/* DATABASE */}
            <motion.div
              animate={{
  y: [0, -15, 0],
  rotate: [0, 10, 0],
}}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
              absolute
              bottom-8
right-2
              "
            >
              <div
                className="
                bg-white
                rounded-2xl
                shadow-lg
                p-3
                "
              >
                <Database className="w-8 h-8 text-[#12B8B0]" />
              </div>

              <div className="w-10 h-2 bg-white rounded-full mx-auto mt-2" />
            </motion.div>

            {/* DECORATIVE CUBES */}
            <div className="absolute top-24 right-10 w-5 h-5 bg-white rounded-md shadow-md" />
            <div className="absolute bottom-14 left-[58%] w-4 h-4 bg-white rounded-md shadow-md" />

                  {/* FLOATING DOTS */}
      <motion.div
        animate={{
          opacity: [0.3, 0.8, 0.3],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute top-32 right-20 w-2 h-2 bg-[#12B8B0] rounded-full"
      />

      <motion.div
        animate={{
          opacity: [0.3, 0.8, 0.3],
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: 1,
        }}
        className="absolute bottom-24 right-44 w-2 h-2 bg-[#12B8B0] rounded-full"
      />

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
        absolute
        top-44
        left-[48%]
        w-5
        h-5
        bg-white
        rounded-md
        shadow-md
        "
      />

    </div>
  );
}
