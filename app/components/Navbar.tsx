import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
 <nav
  className="
  flex
  justify-between
  items-center
  px-12
  py-3
"
>

      <Link
  href="/"
  className="flex items-center gap-3"
>
 <Image
  src="/images/TECH-logo.png"
  alt="TechNova Logo"
  width={240}
  height={70}
  priority
  className="object-contain"
/>

  {/* <div className="h-10 w-px bg-gray-300" /> */}
</Link>
      <div className="flex gap-12 text-lg font-medium text-black">

        <Link
  href="/"
  className="hover:text-[#12B8B0]
hover:-translate-y-0.5
transition-all
duration-300"
>
  Home
</Link>

<Link
  href="/about"
  className="hover:text-[#12B8B0] transition-all duration-300"
>
  About
</Link>

<Link
  href="/services"
  className="hover:text-[#12B8B0] transition-all duration-300"
>
  Services
</Link>

{/* <Link
  href="/portfolio"
  className="hover:text-[#12B8B0] transition-all duration-300"
>
  Portfolio
</Link> */}

<Link
  href="/contact"
  className="hover:text-[#12B8B0] transition-all duration-300"
>
  Contact
</Link>
      </div>
    </nav>
  );
}