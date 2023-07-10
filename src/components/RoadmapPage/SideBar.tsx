'use client';

import { RoadData } from '@/roadmap_json/roadmap_data';
import RefBlock from './RefBlock';
import { useRoadTreeStore } from './RoadTreeLayout';
import StudyDropMenu from './StudyDropMenu';
import mouseDragHook from './hook/mouseDragHook';
import { useEffect, useState } from 'react';

export default function SideBar() {
  const [nodeStateNum, setNodeStateNum] = useState<number>(0); // 0: not started, 1: will go, 2: in progress, 3: completed
  const { select, setSelect, updateFunc } = useRoadTreeStore();
  const [sidebarWeight, setSidebarWeight] = useState<number>(512);
  const [isEntireSize, setIsEntireSize] = useState<boolean>(false);
  const [resizing, setResizing] = useState<boolean>(false);

  const sidebarWeightChange: (deltaX: number) => void = (deltaX: number) => {
    if (
      sidebarWeight - deltaX > 512 - 100 &&
      sidebarWeight - deltaX < window.innerWidth
    ) {
      if (sidebarWeight - deltaX > window.innerWidth - 20) {
        setIsEntireSize(true);
        setSidebarWeight(window.innerWidth);
      } else if (sidebarWeight - deltaX < window.innerWidth - 20) {
        setIsEntireSize(false);
        setSidebarWeight(sidebarWeight - deltaX);
      } else {
        setSidebarWeight(sidebarWeight - deltaX);
      }
    }
  };

  useEffect(() => {
    if (select !== null) {
      select.state = nodeStateNum;
      updateFunc(select);
    }
  }, [nodeStateNum]);

  useEffect(() => {
    if (select !== null && select.state !== nodeStateNum) {
      setNodeStateNum(select.state ?? 0);
    }
  }, [select]);

  if (select !== null) {
    return (
      <div
        className={`fixed right-0 bg-white h-screenWithoutHeader z-40 w-[${sidebarWeight}px] border-l border-gray-200 shadow-deep-dark resize-x ${
          resizing ? 'select-none' : ''
        }`}
      >
        <div
          id="changeSidebarWeight"
          className={
            `h-full w-5 absolute left-[-10px]  cursor-w-resize flex hover:opacity-100 justify-center` +
            (resizing ? ' opacity-100' : ' opacity-0')
          }
          {...mouseDragHook(sidebarWeightChange, setResizing)}
        >
          <div className="bg-blue-400 w-[2px] h-full"></div>
        </div>
        <div className="flex flex-col h-full">
          {/* side bar top height : 32 */}
          <div
            id="roadmap_sidebar_top"
            className="flex items-center justify-between h-12 py-1 mx-5 border-b-2"
          >
            {/* side bar content height : 24  */}
            <div className="m-1 text-base font-bold text-gray-600 font-display">
              {select?.name}
            </div>
            <div
              className="p-1 rounded hover:bg-gray-100"
              onClick={() => {
                if (select !== null) {
                  select.select = false;
                  setSelect(null);
                  updateFunc(select);
                }
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                role="presentation"
                className="w-6 h-6 text-gray-600 cursor-pointer "
              >
                <path
                  d="M12 10.586L6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 001.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 10-1.414-1.414L12 10.586z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <div
            id="roadmap_sidebar_body"
            className="flex-grow px-5 overflow-y-scroll"
          >
            <div className="p-1 text-2xl font-bold leading-relaxed font-display sm:leading-normal">
              {select?.name}
            </div>
            <div className="p-1 text-sm">{select?.description}</div>
            <div className="py-2 w-fit">
              <StudyDropMenu
                node
                stateNum={nodeStateNum}
                setStateNum={setNodeStateNum}
              />
            </div>

            <div className="py-3 m-1">
              <div className="py-2 font-semibold text-gray-600">학습 내용</div>
              <div className="border border-gray-200 rounded shadow-md">
                {select?.ref?.map((item, index) => {
                  return (
                    <div
                      key={'key' + index}
                      className="w-full h-20 bg-white border-b-1"
                    >
                      <RefBlock refdata={item}></RefBlock>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>; // 스켈레톤 화면
  }
}
