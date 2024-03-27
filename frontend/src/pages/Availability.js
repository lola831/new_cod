import React from "react";
import Calendar from "../components/Calendar/Calendar";
import CalendarTwo from "../components/CalendarTwo/CalendarTwo";
import Trip from "../components/Trip/Trip";

export default function Availability() {
  return (
    <div className="">
      <div className="h-[auto]"><CalendarTwo /></div>
      <div>
      <Trip />
      </div>
    </div>
  )

  }
