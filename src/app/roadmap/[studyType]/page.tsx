'use client';

import { WithLogin } from '@/src/components/HOC/withLogin';
import RoadTreeLayout, {
  useRoadTreeStore,
} from '@/src/components/RoadmapPage/RoadTreeLayout';
import SideBar from '@/src/components/RoadmapPage/SideBar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface roadmapParams {
  studyType: number;
}

function page({ params }: { params: roadmapParams }) {
  const { studyType } = params;
  const whatStudy: number = studyType;

  const router = useRouter();
  if (whatStudy == 2) {
    alert('Ai 과정은 준비중입니다.');
    router.push('/');
  }

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
