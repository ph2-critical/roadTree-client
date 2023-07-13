'use client';

import { supabase, midbase } from '@/lib/supabase/supabase';
import { WithLogin } from '@/src/components/HOC/withLogin';
import RoadTreeLayout, {
  useRoadTreeStore,
} from '@/src/components/RoadmapPage/RoadTreeLayout';
import SideBar from '@/src/components/RoadmapPage/SideBar';
import { track } from '@amplitude/analytics-browser';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface roadmapParams {
  studyType: number;
}

function page({ params }: { params: roadmapParams }) {
  const { studyType } = params;
  const whatStudy: number = studyType;
  const whatStudyTable = ['front', 'back', 'ai'];
  const router = useRouter();

  const [id, setId] = useState<string>('');

  useEffect(() => {
    const getUser = async () => {
      const user = await midbase.auth.getUser();
      const userId: string | undefined = user.data.user?.id;
      userId && setId(userId);
    };
    getUser();

    track(`[amplitude] enter_${whatStudyTable[whatStudy]}_roadmap_page`);
  }, []);

  return (
    <div className="flex flex-grow h-screenWithoutHeader mt-[73px]">
      <main
        className={
          'mx-auto max-w-screen-xl flex flex-1 align-middle justify-centent flex-col grow transition-transform w-10'
        }
      >
        <RoadTreeLayout whatStudy={whatStudy} userId={id} />
      </main>

      <SideBar whatStudy={whatStudy} userId={id} />
    </div>
  );
}

const RoadMapWithLogin = WithLogin(page);

export default RoadMapWithLogin;
