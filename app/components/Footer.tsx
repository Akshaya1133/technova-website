import Image from "next/image";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-32 bg-white">
      <div className="max-w-7xl mx-auto px-10 py-20">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-16">

          {/* Company */}
          <div>
            <Image
              src="/images/TECH-logo.png"
              alt="TechNova Logo"
              width={280}
              height={80}
              className="object-contain mb-4"
            />

            <p className="text-lg text-gray-600 leading-relaxed">
              Building innovative digital solutions for businesses through
              web, mobile, cloud, and AI technologies.
            </p>
          </div>

          {/* Services */}
          {/* Services */}
<div>
  <h4 className="text-3xl font-bold text-black mb-8">
    Services
  </h4>

  <div className="w-12 h-1 bg-[#12B8B0] mb-8 rounded-full" />

  <ul className="space-y-6 text-lg text-gray-700">
    <li>
      <Link
        href="/services#web-development"
       

        className="hover:text-[#12B8B0] transition-all duration-300 hover:translate-x-1 inline-block"
      >
        Web Development
      </Link>
    </li>

    <li>
      <Link
 href="/services#mobile-apps"
               className="hover:text-[#12B8B0] transition-all duration-300 hover:translate-x-1 inline-block"
      >
        Mobile Apps
      </Link>
    </li>

    <li>
      <Link
        href="/services#ai-solutions" 
        className="hover:text-[#12B8B0] transition-all duration-300 hover:translate-x-1 inline-block"
      >
        Cloud Solutions
      </Link>
    </li>

    <li>
      <Link
        href="/services"
        className="hover:text-[#12B8B0] transition-all duration-300 hover:translate-x-1 inline-block"
      >
        AI Solutions
      </Link>
    </li>
  </ul>
</div>

          {/* Company */}
          <div>
            <h4 className="text-3xl font-bold text-black mb-8">
              Company
            </h4>

            <div className="w-12 h-1 bg-[#12B8B0] mb-8 rounded-full" />

            <ul className="space-y-6 text-lg text-gray-700">

  <li>
    <Link
      href="/about"
      className="hover:text-[#12B8B0]"
    >
      About Us
    </Link>
  </li>

  <li>
    <Link
      href="/contact"
      className="hover:text-[#12B8B0]"
    >
      Contact
    </Link>
  </li>

</ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-3xl font-bold text-black mb-8">
              Contact
            </h4>

            <div className="w-12 h-1 bg-[#12B8B0] mb-8 rounded-full" />

            <ul className="space-y-6 text-lg text-gray-700">

              <li className="flex items-center gap-4">
                <FaEnvelope className="text-[#12B8B0] text-xl" />
                <span>info@technova.com</span>
              </li>

              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#12B8B0] text-lg" />
                <span>+91 XXXXX XXXXX</span>
              </li>

              <li>
                <a
                  href="https://maps.app.goo.gl/FC5Z3RgsYyLTznpL7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#12B8B0] transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <FaMapMarkerAlt className="text-[#12B8B0] text-xl mt-1" />

                    <span className="leading-relaxed">
                      No.12, 2nd Floor
                      <br />
                      Papanna Layout
                      <br />
                      Maruthi Nagar, Yelahanka
                      <br />
                      Bangalore - 560064
                    </span>
                  </div>
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Location Section */}
        <div className="mt-24">

          <h4 className="text-5xl font-bold text-center text-black">
            Our Location
          </h4>

          <div className="w-16 h-1 bg-[#12B8B0] mx-auto mt-4 mb-10 rounded-full" />

          <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d485.7452513618263!2d77.6083468!3d13.1015932!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19000c106b95%3A0x3da00a073255a34e!2sD%20Rukmini%20nilaya!5e0!3m2!1sen!2sin!4v1781770655419!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="max-w-6xl rounded-3xl shadow-xl border border-gray-200"
            />
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-20 pt-8 text-center text-lg text-gray-500">
          © 2026 TechNova Private Limited. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}