"use client";
import { DailyHeatMap } from "@/src/components/DailyBoard/DailyHeatMap";
import { WithLogin } from "@/src/components/HOC/withLogin";
import SubmissionList from "@/src/components/LearningList/LearningList";

function DailyPage() {
  return (
    <div>
      <SubmissionList />
      <DailyHeatMap />
    </div>
  );
}

const DailyWithLogin = WithLogin(DailyPage);

export default DailyWithLogin;
