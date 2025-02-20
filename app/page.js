import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.png";

export default function Page() {
  return (
    <main className="xs:mt-24 mt-32">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-6
          py-4
          text-lg
          md:px-8
          md:py-6
          md:text-2xl
           text-primary-800 font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
