import Link from "next/link";

export default function FeaturedServices() {
  const services = [
    {
      title: "Web Development",
      description: "Modern websites built with Next.js and React.",
    },
    {
      title: "Mobile Apps",
      description: "Android & iOS apps with Flutter.",
    },
    {
      title: "AI Solutions",
      description: "AI-powered automation and smart systems.",
    },
  ];

  return (
    <section className="px-10 py-24">

      <h2 className="text-5xl font-bold text-center mb-4">
        Why Businesses Choose
        <span className="text-[#12B8B0]"> TechNova</span>
      </h2>

<p className="text-center text-gray-600 text-lg mb-14 max-w-2xl mx-auto">        Delivering innovative digital solutions for startups,
        enterprises, and growing businesses.
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        {services.map((service) => (
          <div
            key={service.title}
            className="
bg-white
border
border-gray-200
rounded-2xl
p-8
hover:border-[#12B8B0]
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-300
"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#12B8B0]">
              {service.title}
            </h3>

            <p className="text-gray-600">
              {service.description}
            </p>
          </div>
        ))}

      </div>

      <div className="text-center mt-12">
        <Link
          href="/services"
          className="
          inline-block
          px-8
          py-4
          bg-[#12B8B0]
          hover:bg-[#0A2E57]
          rounded-lg
          transition-all
          duration-300
          "
        >
          View All Services
        </Link>
      </div>

    </section>
  );
}