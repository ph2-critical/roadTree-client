'use client';

import { RoadData } from '@/roadmap_json/roadmap_data';
import RefBlock from './RefBlock';
import { useRoadTreeStore } from './RoadTreeLayout';
import StudyDropMenu from './StudyDropMenu';
import mouseDragHook from './hook/mouseDragHook';
import { useEffect, useState } from 'react';
import { postNodeData, postProps } from '@/src/api';
import { track } from '@amplitude/analytics-browser';

export default function SideBar(props: { whatStudy: number; userId: string }) {
  const { select, setSelect, updateFunc } = useRoadTreeStore();
  const [init, setInit] = useState<RoadData | null>(null);
  const [refBlockInit, setRefBlockInit] = useState<boolean>(false); // refBlock 초기화 여부
  const [nodeState, setNodeStateNum] = useState<number>(0); // 0: 학습안함, 1: 학습예정, 2: 학습중, 3: 학습완료
  const [sidebarWeight, setSidebarWeight] = useState<number>(512);
  let sidebarWeightVar: number = 0; // amplitude track을 위함
  const [isEntireSize, setIsEntireSize] = useState<boolean>(false);
  const [resizing, setResizing] = useState<boolean>(false);
  const whatStudyTable = ['front', 'back', 'ai'];
  const stateTable = ['학습안함', '학습예정', '학습중', '학습완료'];
  const whatStudy: string = whatStudyTable[props.whatStudy];
  const userId: string = props.userId;

  const sidebarWeightEnd: () => void = () => {
    console.log('[amplitude] resize_sidebar');
    track('resize_sidebar', {
      beforeSidebarWeight: sidebarWeight,
      afterSidebarWeight: sidebarWeightVar,
      roadmapCat: whatStudy,
      selectNodeId: select?.nid,
      selectNodeName: select?.name,
      userScreenWidth: window.innerWidth,
      userScreenHeight: window.innerHeight,
    });
  };

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
    sidebarWeightVar = sidebarWeight - deltaX;
  };

  const changeNodeStateNum: (num: number) => void = (num: number) => {
    if (select !== null) {
      console.log('[amplitude] change_node_state');
      track('change_node_state', {
        roadmapCat: whatStudy,
        selectNodeId: select.nid,
        selectNodeName: select.name,
        beforeState: stateTable[select.state ?? 0],
        afterState: stateTable[num],
      });

      setNodeStateNum(num);
      select.state = num;

      const postProp: postProps = {
        roadmap_type: whatStudy,
        depth: select.depth ?? 1,
        state: stateTable[num],
        node_id: select.nid,
        user_id: userId,
      };

      console.log(postProp);

      postNodeData(postProp);

      updateFunc(select);
    }
  };

  const isLoading: boolean = select !== init;

  useEffect(() => {
    if (select !== null && select !== init) {
      setNodeStateNum(select.state ?? 0);
      setRefBlockInit(false);
      // 초기화 작업 진행
      setInit(select);
    }
  }, [select]);

  if (select !== null) {
    if (!isLoading) {
      return (
        <div
          id={select.nid.toString()}
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
            {...mouseDragHook(
              sidebarWeightChange,
              sidebarWeightEnd,
              setResizing,
            )}
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
                    console.log('[amplitude] click_close_roadmap_sidebar_btn');
                    track('click_close_roadmap_sidebar_btn', {
                      from: window.location.pathname,
                      roadmapCat: whatStudy,
                      selectNodeId: select.nid,
                      selectNodeName: select.name,
                    });

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
                  stateNum={nodeState}
                  setStateNum={changeNodeStateNum}
                />
              </div>

              <div className="py-3 m-1">
                <div className="py-2 font-semibold text-gray-600">
                  학습 내용
                </div>
                <div className="border border-gray-200 rounded shadow-md">
                  {select?.ref?.map((item, index) => {
                    return (
                      <div
                        key={'key' + index}
                        className="w-full h-20 bg-white border-b-1"
                      >
                        <RefBlock
                          refdata={item}
                          whatStudy={whatStudy}
                          userId={userId}
                          refBlockInit={refBlockInit}
                          setRefBlockInit={setRefBlockInit}
                          select={select}
                        ></RefBlock>
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
  } else {
    return <></>; // 없는 화면
  }
}
