"use client";

import { useState, useMemo } from "react";

export default function DashboardCalendar() {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const [selectedDate, setSelectedDate] = useState<number | null>(
    today.getDate()
  );

  const isCurrentMonth =
    currentMonth === today.getMonth() &&
    currentYear === today.getFullYear();

  const monthName = new Date(
    currentYear,
    currentMonth
  ).toLocaleString("default", { month: "long" });

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

  const daysArray = useMemo(() => {
    const emptyDays = Array(firstDay).fill(null);
    const dates = Array.from({ length: totalDays }, (_, i) => i + 1);
    return [...emptyDays, ...dates];
  }, [firstDay, totalDays]);

  const prevMonth = () => {
    setSelectedDate(null);
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    setSelectedDate(null);
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  return (
    <div className="w-full max-w-[320px] rounded-xl  p-3 -mt-4">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-base font-medium">{monthName}</h3>
          <p className="text-xs text-gray-500">{currentYear}</p>
        </div>

        <div className="flex gap-2 text-gray-500">
          <button
            onClick={prevMonth}
            className="w-5 h-5 rounded-md items-center justify-center text-[border: 0.78px solid #4A5565] hover:text-black shadow-sm hhover:shadow-transition"
          >
            &lt;
          </button>
          <button
            onClick={nextMonth}
            className=" w-5 h-5 rounded-md items-center justify-center text-[border: 0.78px solid #4A5565] hover:text-black shadow-sm hover:shadow-transition"
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 text-center text-xs text-gray-400 mb-2">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
          <span key={index}>{day}</span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-2 text-center text-sm">
        {daysArray.map((date, index) => (
          <div key={index} className="flex justify-center">
            {date ? (
              <button
                onClick={() => setSelectedDate(date)}
                className={`relative flex h-9 w-9 items-center justify-center rounded-lg transition
                ${
                  selectedDate === date
                    ? "bg-blue-600 text-white"
                    : isCurrentMonth && date === today.getDate()
                    ? "border border-blue-600 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {date}
              </button>
            ) : (
              <span></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
