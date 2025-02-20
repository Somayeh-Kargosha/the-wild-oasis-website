"use client";

import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, cabin, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(displayRange.to, displayRange.from);
  const cabinPrice = numNights * (regularPrice - discount);

  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="flex  flex-col justify-between">
      <DayPicker
        className="pt-4 text-sm w-72 place-self-center"
        mode="range"
        onSelect={setRange}
        selected={displayRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={1}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
      />

      <div className="md:flex sm:grid flex md:items-center py-1 gap-1 md:justify-between sm:justify-items-center sm:justify-center justify-between lg:px-6 md:px-4 px-6 bg-accent-500 text-primary-800 md:h-[72px]">
        <div className="flex items-center md:gap-6 gap-3">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="lg:text-2xl md:text-xl text-base">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="lg:text-2xl text-xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 lg:px-3 px-2 md:py-1 lg:py-2 text-nowrap lg:text-2xl md:text-xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p className="md:block sm:flex items-center">
                <span className="lg:text-lg md:text-base text-xs font-bold uppercase">
                  Total
                </span>{" "}
                <span className="lg:text-2xl md:text-xl font-semibold">
                  ${cabinPrice}
                </span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border md:w-auto sm:w-full border-primary-800 md:py-2 sm:py-1 lg:px-4 px-2 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
