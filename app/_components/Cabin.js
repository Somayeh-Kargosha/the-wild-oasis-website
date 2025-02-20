import Image from "next/image";
import TextExpander from "@/app/_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="grid sm:grid-cols-[3fr_4fr] grid-cols-1 lg:gap-20 md:gap-14 gap-10 border border-primary-800 sm:py-3 sm:px-10 mb-24">
      <div className="relative col-span-1 sm:h-auto h-56 sm:scale-[1.15] sm:-translate-x-3">
        <Image
          src={image}
          fill
          className="object-cover"
          alt={`Cabin ${name}`}
        />
      </div>

      <div className="sm:px-0 px-6">
        <h3 className="text-accent-100 font-black md:text-7xl text-5xl mb-5 sm:translate-x-[-254px] sm:bg-primary-950 sm:p-6 py-4 pb-1 sm:w-[150%]">
          Cabin {name}
        </h3>

        <p className="text-lg text-primary-300 mb-10">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
