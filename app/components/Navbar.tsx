"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 bg-white/80 backdrop-blur-md">

      <div
        className="
        max-w-7xl
        mx-auto
        flex
        items-center
        justify-between
        px-5
        sm:px-8
        lg:px-12
        py-4
        "
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/images/TECH-logo.png"
            alt="TechNova"
            width={200}
            height={60}
            className="w-28 sm:w-36 lg:w-40 h-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div
          className="
          hidden
          md:flex
          items-center
          gap-8
          lg:gap-12
          text-base
          lg:text-lg
          font-medium
          "
        >
          <Link href="/" className="hover:text-[#12B8B0] transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-[#12B8B0] transition">
            About
          </Link>

          <Link href="/services" className="hover:text-[#12B8B0] transition">
            Services
          </Link>

          <Link href="/contact" className="hover:text-[#12B8B0] transition">
            Contact
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
          md:hidden
          bg-white
          shadow-lg
          border-t
          border-gray-100
          "
        >
          <div className="flex flex-col py-4">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-3 hover:bg-gray-50"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-3 hover:bg-gray-50"
            >
              About
            </Link>

            <Link
              href="/services"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-3 hover:bg-gray-50"
            >
              Services
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-3 hover:bg-gray-50"
            >
              Contact
            </Link>

          </div>
        </div>
      )}

    </nav>
  );
}