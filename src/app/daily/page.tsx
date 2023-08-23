"use client";
import { DailyHeatMap } from "@/src/components/DailyBoard/DailyHeatMap";
import { WithLogin } from "@/src/components/HOC/withLogin";
import { SubmissionList } from "@/src/components/LearningList/LearningList";

function DailyPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-72px)] px-4">
      <SubmissionList />
      <DailyHeatMap />
    </div>
  );
}

const DailyWithLogin = WithLogin(DailyPage);

export default DailyWithLogin;
