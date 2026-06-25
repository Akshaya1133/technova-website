"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
<section ref={ref} className="py-32 px-10">
<h2 className="text-6xl font-black text-center mb-20">        Why Choose TechNova?
      </h2>

      <div className="grid md:grid-cols-4 gap-8">

<div
  className="
  bg-white
  border
  border-gray-200
  rounded-3xl
  p-8
  text-center
  hover:border-[#12B8B0]
hover:shadow-[0_20px_50px_rgba(18,184,176,0.15)]
  hover:-translate-y-2
  transition-all
  duration-300
  "
>          <h3 className="text-5xl font-bold text-[#12B8B0]">
            {inView ? <CountUp start={0} end={5} duration={2} /> : 0}+
          </h3>
<p className="mt-4 text-gray-600 font-medium">Apps Delivered</p>
        </div>

<div
  className="
  bg-white
  border
  border-gray-200
  rounded-3xl
  p-8
  text-center
  hover:border-[#12B8B0]
  hover:shadow-[0_20px_50px_rgba(18,184,176,0.15)]
  hover:-translate-y-2
  transition-all
  duration-300
  "
>
  <h3 className="text-5xl font-bold text-[#12B8B0]">
    {inView ? <CountUp start={0} end={5} duration={2} /> : 0}+
  </h3>

  <p className="mt-4 text-gray-600 font-medium">
    Websites Delivered
  </p>
</div>

<div
  className="
  bg-white
  border
  border-gray-200
  rounded-3xl
  p-8
  text-center
  hover:border-[#12B8B0]
hover:shadow-[0_20px_50px_rgba(18,184,176,0.15)]
  hover:-translate-y-2
  transition-all
  duration-300
  "
>          <h3 className="text-5xl font-bold text-[#12B8B0]">
            {inView ? <CountUp start={0} end={3} duration={2} /> : 0}+
          </h3>
<p className="mt-4 text-gray-600 font-medium">Software Solutions</p>
        </div>

<div
  className="
  bg-white
  border
  border-gray-200
  rounded-3xl
  p-8
  text-center
  hover:border-[#12B8B0]
  hover:shadow-[0_20px_50px_rgba(18,184,176,0.15)]
  hover:-translate-y-2
  transition-all
  duration-300
  "
>          <h3 className="text-5xl font-bold text-[#12B8B0]">
            {inView ? <CountUp start={0} end={24} duration={2} /> : 0}/7
          </h3>
<p className="mt-4 text-gray-600 font-medium">
  Support
</p>
        </div>

      </div>
    </section>
  );
}