'use client';

import { supabase } from '@/lib/supabase';
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
  const whatStudyTable = ['frontend', 'backend', 'ai'];

  const [id, setId] = useState<string>('');

  useEffect(() => {
    const getUser = async () => {
      const user = await supabase.auth.getUser();
      // const userId: string | undefined = user.data.user?.id;
      const userId = process.env.NEXT_PUBLIC_SUPABASE_PHIL_TOKEN ?? '';
      userId && setId(userId);
    };
    getUser();

    console.log(`[amplitude] enter_${whatStudyTable[whatStudy]}_roadmap_page`);
    track(`enter_${whatStudyTable[whatStudy]}_roadmap_page`);
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

      <SideBar whatStudy={whatStudy} userId={id} />
    </div>
  );
}

const RoadMapWithLogin = WithLogin(page);

export default RoadMapWithLogin;
