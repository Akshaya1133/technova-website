"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

export default function ContactPage() {

  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
const [emailError, setEmailError] = useState("");

 const sendEmail = async () => {
  // Name validation
  if (!name.trim()) {
    alert("Please enter your name");
    return;
  }

  // Email validation
  const emailRegex =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

if (!emailRegex.test(email)) {
  setEmailError("Please enter a valid email address");
  return;
}

if (!emailRegex.test(email)) {
  console.log("Invalid Email");
  setEmailError("Please enter a valid email address");
  return;
}

setEmailError("");

  // Message validation
  if (!message.trim()) {
    alert("Please enter your message");
    return;
  }

  setLoading(true);

  try {
    await emailjs.send(
      "service_n80mi2e",
      "template_35q6b8y",
      {
        name,
        email,
        message,
      },
      "dqzJ0CcAduQI_w0sB"
    );

    router.push("/thank-you");
  } catch (error) {
    console.error("EmailJS Error:", error);
    alert("Failed to send message");
  } finally {
    setLoading(false);
  }
};

<div>
  <input
    type="email"
    value={email}
    onChange={(e) => {
      setEmail(e.target.value);
      setEmailError("");
    }}
    placeholder="Your Email"
    className={`w-full bg-[#f8fbfc] border rounded-xl p-4 focus:outline-none ${
      emailError
        ? "border-red-500"
        : "border-gray-200 focus:border-[#12B8B0]"
    }`}
  />

  {emailError && (
    <p className="text-red-500 text-sm mt-2">
      {emailError}
    </p>
  )}
</div>

  return (
    <PageTransition>
      <main className="min-h-screen relative overflow-hidden bg-[radial-gradient(circle_at_top,_#dff8f6_0%,_#eef2f5_45%,_#f8f9fb_100%)] text-black">

        <Navbar />

        {/* Hero */}
        <section className="px-10 py-20 text-center">
          <h1 className="text-6xl font-bold text-[#12B8B0] mb-6">
            Contact Us
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Let's discuss your next project and build something amazing together.
          </p>
        </section>

        {/* Contact Section */}
        <section className="max-w-7xl mx-auto px-10 pb-24">

          <div className="grid md:grid-cols-2 gap-10">

            {/* Contact Info */}
            <div
              className="
              bg-white
              border border-gray-100
              shadow-lg
              hover:shadow-xl
              hover:shadow-[0_20px_40px_rgba(18,184,176,0.15)]
              hover:-translate-y-2
              transition-all
              duration-300
              rounded-3xl
              p-8
              "
            >
              <h2 className="text-3xl font-bold mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6 text-gray-700">

                <div>
                  <h3 className="text-[#12B8B0] font-semibold">
                    Email
                  </h3>
                  <p>info@technova.com</p>
                </div>

                <div>
                  <h3 className="text-[#12B8B0] font-semibold">
                    Phone
                  </h3>
                  <p>+91 XXXXX XXXXX</p>
                </div>

                <div>
                  <h3 className="text-[#12B8B0] font-semibold">
                    Location
                  </h3>

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

            {/* Contact Form */}
            <div
              className="
              bg-white
              border border-gray-100
              shadow-lg
              hover:shadow-xl
              hover:shadow-[0_20px_40px_rgba(18,184,176,0.15)]
              hover:-translate-y-2
              transition-all
              duration-300
              rounded-3xl
              p-8
              "
            >
              <h2 className="text-3xl font-bold mb-8">
                Send Message
              </h2>

              <div className="space-y-4">

                <input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
  placeholder="Your Name"
  className="
  w-full
  bg-[#f8fbfc]
  border border-gray-200
  rounded-xl
  p-4
  focus:border-[#12B8B0]
  focus:outline-none
  "
/>

                <div>
  <input
    type="email"
    value={email}
    onChange={(e) => {
      setEmail(e.target.value);
      setEmailError("");
    }}
    placeholder="Your Email"
    className={`w-full bg-[#f8fbfc] border rounded-xl p-4 focus:outline-none ${
      emailError
        ? "border-red-500"
        : "border-gray-200 focus:border-[#12B8B0]"
    }`}
  />

  {emailError && (
    <p className="text-red-500 text-sm mt-2">
      {emailError}
    </p>
  )}
</div>

                <textarea
  rows={5}
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  placeholder="Tell us about your project..."
  className="
  w-full
  bg-[#f8fbfc]
  border border-gray-200
  rounded-xl
  p-4
  focus:border-[#12B8B0]
  focus:outline-none
  "
/>

                <button
  onClick={sendEmail}
  disabled={loading}
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
  {loading ? "Sending..." : "Send Message"}
</button>
   </div>
            </div>

          </div>

        </section>

        {/* Map Section
        <section className="max-w-6xl mx-auto px-10 pb-24">

          <h2 className="text-4xl font-bold text-center mb-8">
            Our Location
          </h2>

          <div className="overflow-hidden rounded-3xl shadow-xl border border-gray-200">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d485.7452513618263!2d77.6083468!3d13.1015932!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19000c106b95%3A0x3da00a073255a34e!2sD%20Rukmini%20nilaya!5e0!3m2!1sen!2sin!4v1781770655419!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </section> */}

        <Footer />

      </main>
    </PageTransition>
  );
}