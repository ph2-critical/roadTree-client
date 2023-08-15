"use client";

import { getSubmissionUserDatas } from "@/src/api/submission/submission";
import { useNicknameStore } from "@/src/state/store";
import { useEffect, useState } from "react";
import "react-calendar-heatmap";
import ReactCalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

interface DateValue {
  date: string | null | undefined | Date;
  count: number;
}

const dateValues: DateValue[] = [];

export const DailyHeatMap: React.FC = () => {
  const { nickname } = useNicknameStore();
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    if (nickname) {
      const getData = async () => {
        const data = await getSubmissionUserDatas(nickname);
        if (dateValues.length > 0) {
          dateValues.splice(0, dateValues.length);
        }
        data.map((item) => {
          const date = new Date(item.created_at);
          const dateString = `${date.getFullYear()}-${(date.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
          const existingEntry = dateValues.find(
            (item) => item.date === dateString,
          );
          if (existingEntry) {
            existingEntry.count++;
          } else {
            dateValues.push({ date: dateString, count: 1 });
          }
        });
        setInit(true);
      };
      getData();

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
            // dateValues.push({ date: dateString, count: 0 });
          }
        }
      }
    }
  }, [nickname]);

  return init ? (
    <div className="flex items-center justify-center p-3 mt-5 mb-16 border-2 rounded-lg">
      <ReactCalendarHeatmap
        startDate={new Date("2022-12-31")}
        endDate={new Date("2023-12-31")}
        values={dateValues}
        weekdayLabels={["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]}
        showWeekdayLabels
        classForValue={(value: DateValue) => {
          if (!value || value.count === 0) {
            return "color-empty";
          }
          return `color-filled`;
        }}
        gutterSize={2}
        titleForValue={(value) => {
          return value ? `${value?.date}` : `No work registered for this day`;
        }}
      />
    </div>
  ) : (
    <></>
  );
};
