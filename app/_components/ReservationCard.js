import Link from "next/link";
import Image from "next/image";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className="lg:flex lg:text-nowrap gap-y-2 md:text-wrap sm:text-nowrap text-wrap grid border border-primary-800">
      <div className="flex lg:border-none border-b border-primary-800">
        <div className="relative h-32 aspect-square">
          <Image
            src={image}
            alt={`Cabin ${name}`}
            fill
            className="object-cover border-r border-primary-800"
          />
        </div>
        <div className="lg:hidden grid border-l justify-end border-primary-800 w-full">
          {!isPast(startDate) ? (
            <>
              <Link
                href={`/account/reservations/edit/${id}`}
                className="group flex w-full items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
              >
                <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
                <span className="mt-1">Edit</span>
              </Link>
              <DeleteReservation bookingId={id} onDelete={onDelete} />
            </>
          ) : null}
        </div>
      </div>

      <div className="flex-grow px-6 py-3 flex flex-col">
        <div className="xs:flex grid gap-y-2 items-center justify-between">
          <h3 className="md:text-xl font-semibold">
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="bg-yellow-800 text-yellow-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              past
            </span>
          ) : (
            <span className="bg-green-800 row-start-1 text-green-200 md:h-7 h-5 px-3 uppercase sm:text-xs text-[10px] font-bold flex items-center justify-center rounded-sm">
              upcoming
            </span>
          )}
        </div>

        <p className="md:text-lg text-primary-300 my-2">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="xs:flex grid xs:gap-5 gap-2 mt-auto items-baseline">
          <div className="flex gap-5">
            <p className="md:text-xl font-semibold text-accent-400">
              ${totalPrice}
            </p>
            <p className="text-primary-300">&bull;</p>
            <p className="md:text-lg text-sm text-nowrap text-primary-300">
              {numGuests} guest{numGuests > 1 && "s"}
            </p>
          </div>
          <p className="xs:ml-auto md:text-sm text-xs text-primary-400">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      <div className=" lg:flex hidden flex-col border-l border-primary-800 w-[100px]">
        {!isPast(startDate) ? (
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 border-b border-primary-800 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
            >
              <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
              <span className="mt-1">Edit</span>
            </Link>
            <DeleteReservation bookingId={id} onDelete={onDelete} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default ReservationCard;
