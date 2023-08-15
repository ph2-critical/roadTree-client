"use client";

import { useEffect, useState } from "react";
import "react-calendar-heatmap";
import ReactCalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

interface DateValue {
  date: string | null | undefined | Date;
  count: number;
}

const dateValues: DateValue[] = [
  { date: "2023-01-01", count: 12 },
  { date: "2023-01-22", count: 122 },
  { date: "2023-01-30", count: 38 },
];

export const DailyHeatMap: React.FC = () => {
  const [hoveredValue, setHoveredValue] = useState<SVGRectElement | null>(null);

  useEffect(() => {
    for (let month = 1; month <= 12; month++) {
      for (let day = 1; day <= 31; day++) {
        const year = 2023;
        const dateString = `${year}-${month.toString().padStart(2, "0")}-${day
          .toString()
          .padStart(2, "0")}`;

        const existingEntry = dateValues.find(
          (item) => item.date === dateString,
        );
        if (existingEntry) {
          // 날짜가 이미 있는 경우, 기존 항목 유지
          continue;
        } else {
          // 날짜가 없는 경우, 새 항목 추가
          dateValues.push({ date: dateString, count: 0 });
        }
      }
    }
  }, []);

  return (
    <div className="flex items-center justify-center p-3 mt-5 border-2 rounded-lg">
      <ReactCalendarHeatmap
        onMouseOver={(event: React.MouseEvent<SVGRectElement, MouseEvent>) => {
          // tooltip이 나타나도록 하기
          if (event.target instanceof SVGRectElement) {
            setHoveredValue(event.target);
          }
        }}
        onMouseLeave={() => {
          // tooltip이 사라지도록 하기
          setHoveredValue(null);
        }}
        startDate={new Date("2022-12-31")}
        endDate={new Date("2023-12-31")}
        values={dateValues}
        weekdayLabels={["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]}
        showWeekdayLabels
        tooltipDataAttrs={(value: DateValue) => {
          return {
            "tool-tip": `${value?.count} tasks completed on ${value?.date}`,
          };
        }}
        classForValue={(value: DateValue) => {
          if (!value || value.count === 0) {
            return "color-empty";
          }
          return `color-filled`;
        }}
        gutterSize={2}
        titleForValue={(value) => {
          return value?.count
            ? `${value?.date}`
            : `No work registered for this day`;
        }}
      />
      {hoveredValue && (
        <div
          className="p-2 bg-white border rounded shadow-md "
          style={{
            position: "absolute",
            top: `${hoveredValue.getBoundingClientRect().y - 50}px`,
            left: `${hoveredValue.getBoundingClientRect().x - 72}px`,
          }}
        >
          <p>{hoveredValue.getAttribute("tool-tip")}</p>
        </div>
      )}
    </div>
  );
};
