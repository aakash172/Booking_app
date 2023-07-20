import { useState } from "react";
import { differenceInCalendarDays } from "date-fns";

export default function BookingWidget({ place }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  let numberOfDays = 0;

  if (checkIn && checkOut) {
    numberOfDays = differenceInCalendarDays(
      new Date(checkOut),
      new Date(checkIn)
    );
  }

  return (
    <div className="bg-white shadow p-4 rounded-2xl ">
      <div className="text-xl text-center">
        Prices: &#8377;{place.price}/ per night
      </div>
      <div className="border rounded-2xl mt-4">
        <div className="flex">
          <div className="py-2 px-3 ">
            <label>Check in:</label>
            <input
              type="date"
              value={checkIn}
              onChange={(ev) => setCheckIn(ev.target.value)}
            />
          </div>
          <div className="py-2 px-3 border-l">
            <label>Check Out:</label>
            <input
              type="date"
              value={checkOut}
              onChange={(ev) => setCheckOut(ev.target.value)}
            />
          </div>
        </div>
        <div className="py-2 px-3 border-t">
          <label>Number of guests:</label>
          <input
            type="number"
            value={numberOfGuests}
            onChange={(ev) => setNumberOfGuests(ev.target.value)}
          />
        </div>
      </div>
      <button className="primary mt-3">
        Book this place for
        {numberOfDays > 0 && (
          <span> &#8377;{numberOfDays * place.price} .</span>
        )}
      </button>
    </div>
  );
}
