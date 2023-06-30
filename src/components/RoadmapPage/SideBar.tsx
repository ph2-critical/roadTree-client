'use client';

import RefBlock from './RefBlock';
import { useRoadTreeStore } from './RoadTreeLayout';

export default function SideBar() {
  const { select } = useRoadTreeStore();

  return (
    <div className="p-5">
      <div className="font-display leading-relaxed sm:leading-normal text-2xl font-bold  text-gray-900 pb-3">
        {select?.name}
      </div>
      <p>{select?.description}</p>

      <div>
        <div className="my-3"></div>
        {select?.ref?.map((item, index) => {
          return (
            <div key={'key' + index} className="w-full h-20 mb-5 bg-white">
              <RefBlock refdata={item}></RefBlock>
            </div>
          );
        })}
      </div>
    </div>
  );
}
