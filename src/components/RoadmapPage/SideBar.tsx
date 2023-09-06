"use client";

import { RoadData, reference } from "@/roadmap_json/roadmap_data";
import RefBlock from "./RefBlock";
import { useRoadTreeStore } from "./RoadTreeLayout";
import StudyDropMenu from "./StudyDropMenu";
import mouseDragHook from "@/src/utils/hooks/mouseDragHook";
import { useEffect, useState } from "react";
import { track } from "@amplitude/analytics-browser";
import { useWindowResize } from "@/src/utils/hooks/useWindowResize";
import { getReferenceUsingNid } from "@/src/api/initNode";
import { postNodeStateProps, upsertNodeState } from "@/src/api/stateApi";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import Image from "next/image";

export default function SideBar(props: {
  whatStudy: number;
  userId: string;
  showRef: {
    isShowRef: boolean;
    setIsShowRef: (isShowRef: boolean) => void;
  };
  select: RoadData | null;
}) {
  const select = props.select;
  const { setSelect, updateFunc } = useRoadTreeStore();
  const [init, setInit] = useState<RoadData | null>(null);
  const [refBlockInit, setRefBlockInit] = useState<boolean>(false); // refBlock 초기화 여부
  const [nodeState, setNodeStateNum] = useState<number>(0); // 0: 학습안함, 1: 학습예정, 2: 학습중, 3: 학습완료
  const [sidebarWeight, setSidebarWeight] = useState<number>(512);
  let sidebarWeightVar: number = 0; // amplitude track을 위함
  const [, setIsEntireSize] = useState<boolean>(false);
  const [resizing, setResizing] = useState<boolean>(false);
  const whatStudyTable = ["front", "back", "ai"];
  const stateTable = ["학습안함", "학습예정", "학습중", "학습완료"];
  const whatStudy: string = whatStudyTable[props.whatStudy];
  const userId: string = props.userId;
  const { isShowRef, setIsShowRef } = props.showRef;
  const useWindowResizeVar: boolean = useWindowResize();
  const searchParams:ReadonlyURLSearchParams = useSearchParams();

  const [references, setReferences] = useState<reference[]>([]);

  const sidebarWeightEnd: () => void = () => {
    //  ('[amplitude] resize_sidebar');
    track("resize_sidebar", {
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
      //  ('[amplitude] change_node_state');
      track("change_node_state", {
        roadmapCat: whatStudy,
        selectNodeId: select.nid,
        selectNodeName: select.name,
        beforeState: stateTable[select.state ?? 0],
        afterState: stateTable[num],
      });

      setNodeStateNum(num);
      select.state = num;

      const postProp: postNodeStateProps = {
        state: stateTable[num],
        node_id: select.nid as string,
        user_id: userId,
      };

      upsertNodeState(postProp);

      updateFunc(select);
    }
  };

  const setInitReferences: (selectNid: string) => void = (
    selectNid: string,
  ) => {
    getReferenceUsingNid(selectNid).then((data) => {
      setReferences(data);
    });
  };

  useEffect(() => {
    if (select !== null && select !== init) {
      setNodeStateNum(select.state ?? 0);
      setRefBlockInit(false);
      setInitReferences(select.nid as string);
      // 초기화 작업 진행
      setInit(select);
    }
  }, [select]);

  if (select !== null && isShowRef) {
    return (
      <div
        id={select.nid.toString()}
        className={`w-full fixed right-0 bg-white h-screenWithoutHeader z-1 md:w-[${sidebarWeight}px] border-x-2 border-gray6 resize-x ${resizing ? "select-none" : ""
          }`}
      >
        <div
          id="changeSidebarWeight"
          className={
            `h-full w-5 absolute left-[-10px]  cursor-w-resize flex hover:opacity-100 justify-center` +
            (resizing ? " opacity-100" : " opacity-0")
          }
          {...mouseDragHook(sidebarWeightChange, sidebarWeightEnd, setResizing)}
        >
          <div className="bg-blue-400 w-[2px] h-full"></div>
        </div>
        <div className="flex flex-col h-full p-3">
          {/* side bar top height : 32 */}
          <div
            id="roadmap_sidebar_top"
            className="flex items-center justify-between py-1 mx-5"
          >
            {/* side bar content height : 24  */}
            <div className="flex gap-2">
              <div className="p-1 text-2xl font-bold leading-relaxed font-display sm:leading-normal">
                {select?.name}
              </div>
              <div className="py-2 w-fit">
                <StudyDropMenu
                  node
                  stateNum={nodeState}
                  setStateNum={changeNodeStateNum}
                />
              </div>
            </div>
            <div
              className="p-1 rounded hover:bg-gray-100"
              onClick={() => {
                if (select !== null) {
                  //  ('[amplitude] click_close_roadmap_sidebar_btn');
                  track("click_close_roadmap_sidebar_btn", {
                    from: window.location.pathname,
                    roadmapCat: whatStudy,
                    selectNodeId: select.nid,
                    selectNodeName: select.name,
                  });

                  if (useWindowResizeVar) {
                    setIsShowRef(false);
                  } else {
                    select.select = false;
                    setSelect(null);
                    updateFunc(select);
                  }
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
            <div className="p-1 text-base">{select?.description}</div>

            <div className="m-1 ">
              {references.length > 0 && (
                <div className="py-2 font-semibold text-gray3">학습 내용</div>
              )}
              <div className="flex flex-col gap-y-2">
                {references.map((item, index) => {
                  
                  const checkNew = (ref: reference) => {
                    var newDate: Date = new Date();
                    newDate.setDate(newDate.getDate() - 15);
                    return new Date(ref.created_at).getTime() > newDate.getTime();
                  }

                  const refParmas:string|null = searchParams.get("ref");
                  if (item.rid === refParmas) {
                    const element = document.getElementById("refblock-" + item.rid);
                    element?.scrollIntoView({ behavior: "smooth" });
                  }
                  return (
                    <div
                      key={"refblock-" + item.rid}
                      id={"refblock-" + item.rid}
                      className={"w-full h-20 border-2 rounded-lg" + ((item.rid === refParmas) ? " border-main" : " border-gray6")}
                    >
                      {checkNew(item) ? <Image
                        src="/roadTree/newMark.svg"
                        alt='newmark'
                        width={512}
                        height={512}
                        className="w-12 h-12 left-[-20px] top-[-15px]  absolute"
                      ></Image> : <></>}
                      <RefBlock
                        key={"refBlock" + index}
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
}
