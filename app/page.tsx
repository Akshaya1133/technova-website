"use client";

import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedServices from "./components/FeaturedServices";
import Process from "./components/Process";
import TechStack from "./components/TechStack";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import BackgroundGlow from "./components/BackgroundGlow";
import PremiumBackground from "./components/PremiumBackground";

export default function Home() {
  return (
    <PageTransition>
<main className="min-h-screen text-black relative overflow-hidden">
  <div
  className="
  fixed
  inset-0
  -z-10
  bg-[radial-gradient(circle_at_center,#d7ffff_0%,#f5f5f5_40%,#ffffff_100%)]
  "
/>
    <PremiumBackground />
        {/* Reusable Background Glow */}
        <BackgroundGlow />

        <div className="relative z-10">

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#12B8B0] rounded-full"
                initial={{
                  x: Math.random() * 1500,
                  y: Math.random() * 1000,
                }}
                animate={{
                  y: [0, -300, 0],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <Navbar />

          <Hero />

          <FeaturedServices />

          <Process />

          <TechStack />

          <Stats />
          {/* Contact Preview Section */}
<section className="max-w-7xl mx-auto px-10 py-24">

  <div className="text-center mb-16">
    <h2 className="text-5xl font-bold mb-4">
      Get In Touch
    </h2>

    <p className="text-gray-600 text-lg">
      Ready to transform your business with innovative technology solutions?
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-10">

    {/* Contact Details */}
    <div
      className="
      bg-white
      rounded-3xl
      border border-gray-100
      shadow-lg
      p-8
      "
    >
      <h3 className="text-3xl font-bold mb-8 text-[#12B8B0]">
        Contact Details
      </h3>

      <div className="space-y-6 text-gray-700">

        <div>
          <p className="font-semibold text-[#12B8B0]">
            Email
          </p>
          <p>info@technova.com</p>
        </div>

        <div>
          <p className="font-semibold text-[#12B8B0]">
            Phone
          </p>
          <p>+91 XXXXX XXXXX</p>
        </div>

        <div>
          <p className="font-semibold text-[#12B8B0]">
            Address
          </p>

          <p>
            No.12, 2nd Floor
            <br />
            Papanna Layout
            <br />
            Maruthi Nagar, Yelahanka
            <br />
            Bangalore - 560064
          </p>
        </div>

      </div>
    </div>

    {/* Contact CTA */}
    <div
      className="
      bg-white
      rounded-3xl
      border border-gray-100
      shadow-lg
      p-8
      flex flex-col justify-center items-center
      text-center
      "
    >
      <h3 className="text-4xl font-bold mb-4">
        Let's Build Together
      </h3>

      <p className="text-gray-600 mb-8">
        Have an idea or project in mind?
        Let's discuss how TechNova can help.
      </p>

      <a
        href="/contact"
        className="
        bg-[#12B8B0]
        text-white
        px-8
        py-4
        rounded-xl
        shadow-lg
        hover:bg-[#0A2E57]
        hover:-translate-y-1
        transition-all
        duration-300
        "
      >
        Contact Us
      </a>
    </div>

  </div>

</section>

          <Footer />

        </div>

      </main>
    </PageTransition>
  );
}