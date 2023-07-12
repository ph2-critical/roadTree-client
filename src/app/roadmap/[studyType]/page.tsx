'use client';

import { midbase, supabase, supabaseUrl, supabaseKey } from '@/lib/supabase';
import { WithLogin } from '@/src/components/HOC/withLogin';
import RoadTreeLayout, {
  useRoadTreeStore,
} from '@/src/components/RoadmapPage/RoadTreeLayout';
import SideBar from '@/src/components/RoadmapPage/SideBar';
import { track } from '@amplitude/analytics-browser';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface roadmapParams {
  studyType: number;
}

function page({ params }: { params: roadmapParams }) {
  const { studyType } = params;
  const whatStudy: number = studyType;
  const whatStudyTable = ['front', 'back', 'ai'];

  const [id, setId] = useState<string>('');

  useEffect(() => {
    const getUser = async () => {
      const user = await midbase.auth.getUser();
      const userId: string | undefined = user.data.user?.id;
      userId && setId(userId);
    };
    getUser();

    console.log(`enter_${whatStudyTable[whatStudy]}_roadmap_page`);
    track(`[amplitude] enter_${whatStudyTable[whatStudy]}_roadmap_page`);
  }, []);

  if (whatStudy == 2) {
    alert('Ai 과정은 준비중입니다.');
    const router = useRouter();
    router.push('/');
  }

  return (
    <div className="flex flex-grow h-screenWithoutHeader mt-[73px]">
      <main
        className={
          'mx-auto max-w-screen-xl flex flex-1 align-middle justify-centent flex-col grow transition-transform w-10'
        }
      >
        <RoadTreeLayout whatStudy={whatStudy} userId={id} />
      </main>

      <SideBar />
    </div>
  );
}

const RoadMapWithLogin = page;
// const RoadMapWithLogin = WithLogin(page);

export default RoadMapWithLogin;
