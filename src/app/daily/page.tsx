import { DailyHeatMap } from "@/src/components/DailyBoard/DailyHeatMap";
import SubmissionList from "@/src/components/LearningList/LearningList";

export default function DailyPage() {
  return (
    <div>
      <SubmissionList />
      <DailyHeatMap />
    </div>
  );
}
