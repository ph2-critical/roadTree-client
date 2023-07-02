'use client';

import RoadTreeLayout, {
  useRoadTreeStore,
} from '@/src/components/RoadmapPage/RoadTreeLayout';
import SideBar from '@/src/components/RoadmapPage/SideBar';

import { useSearchParams } from 'next/navigation';

export default function Roadmap() {
  const [searchParams] = useSearchParams();

  const isFront = searchParams === undefined ? true : searchParams[0] === '0';

  return (
    <div className="flex flex-grow h-screenWithoutHeader">
      <main
        className={
          'px-4 mx-auto max-w-screen-xl lg:px-6 flex flex-1 align-middle justify-centent flex-col grow transition-transform w-10'
        }
      >
        <RoadTreeLayout isFront={isFront} />
      </main>
      <div
        id="default-sidebar"
        className={
          'top-0 right-0 z-40 w-128 h-full shrink-0 transition-transform'
        }
        aria-label="Sidenav"
      >
        <div className="px-5 border-l-2 border-gray-200 h-full">
          <SideBar />
        </div>
      </div>
    </div>
  );
}
