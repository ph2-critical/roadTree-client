'use client';

import { WithLogin } from '@/src/components/HOC/withLogin';
import RoadTreeLayout, {
  useRoadTreeStore,
} from '@/src/components/RoadmapPage/RoadTreeLayout';
import SideBar from '@/src/components/RoadmapPage/SideBar';

import { useSearchParams } from 'next/navigation';

function Roadmap() {
  const [searchParams] = useSearchParams();

  const isFront = searchParams === undefined ? true : searchParams[0] === '0';

  return (
    <div className="flex flex-grow h-screenWithoutHeader mt-[73px]">
      <main
        className={
          'mx-auto max-w-screen-xl flex flex-1 align-middle justify-centent flex-col grow transition-transform w-10'
        }
      >
        <RoadTreeLayout isFront={isFront} />
      </main>

      <SideBar />
    </div>
  );
}

const RoadMapWithLogin = WithLogin(Roadmap);

export default RoadMapWithLogin;
