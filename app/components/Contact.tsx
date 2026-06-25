export default function Contact() {
  return (
    <section className="px-10 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Contact Us
      </h2>

      <div className="max-w-3xl mx-auto bg-zinc-900/50 border border-blue-500/20 rounded-2xl p-8">

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-black border border-gray-700 rounded-lg p-4"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="bg-black border border-gray-700 rounded-lg p-4"
          />
        </div>

        <input
          type="text"
          placeholder="Service Required"
          className="w-full bg-black border border-gray-700 rounded-lg p-4 mb-6"
        />

        <textarea
          placeholder="Tell us about your project..."
          rows={5}
          className="w-full bg-black border border-gray-700 rounded-lg p-4 mb-6"
        />

        <button className="bg-blue-600 px-8 py-4 rounded-lg">
          Send Inquiry
        </button>

      </div>
    </section>
  );
}