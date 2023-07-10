'use client';

import { WithLogin } from '@/src/components/HOC/withLogin';
import RoadTreeLayout, {
  useRoadTreeStore,
} from '@/src/components/RoadmapPage/RoadTreeLayout';
import SideBar from '@/src/components/RoadmapPage/SideBar';

interface roadmapParams {
  studyType: number;
}

function page({ params }: { params: roadmapParams }) {
  const { studyType } = params;
  console.log(studyType);
  const whatStudy: number = studyType;

  return (
    <div className="flex flex-grow h-screenWithoutHeader mt-[73px]">
      <main
        className={
          'mx-auto max-w-screen-xl flex flex-1 align-middle justify-centent flex-col grow transition-transform w-10'
        }
      >
        <RoadTreeLayout whatStudy={whatStudy} />
      </main>

      <SideBar />
    </div>
  );
}

const RoadMapWithLogin = page;

export default RoadMapWithLogin;
