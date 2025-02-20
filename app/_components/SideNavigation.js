"use client";

import Link from "next/link";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="border-r border-primary-900">
      <ul className="flex flex-col gap-2 h-full md:text-lg">
        {navLinks.map((link) => (
          <li key={link.name} className="relative group">
            <Link
              className={`py-3 md:px-5 px-3 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center md:gap-4 font-semibold text-primary-200 ${
                pathname === link.href ? "bg-primary-900" : ""
              }`}
              href={link.href}
            >
              {link.icon}
              <span className="absolute z-10 bg-primary-900 sm:px-0 sm:py-0 sm:bg-transparent px-2 py-2 left-full top-1/2 transform -translate-y-1/2 md:ml-0 ml-3 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity sm:opacity-100 sm:ml-4 sm:left-auto sm:top-auto sm:transform-none sm:relative text-nowrap">
                {link.name}
              </span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
