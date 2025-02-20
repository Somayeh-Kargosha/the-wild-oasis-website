import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}
      <Image
        src={logo}
        height={60}
        quality={100}
        width={60}
        alt="The Wild Oasis logo"
        className="xs:h-[60px] xs:w-[60px] w-12 h-12"
      />
      <span className="md:text-xl sm:block hidden font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
