import { RoadData } from "@/roadmap_json/roadmap_data";
import { useRoadTreeStore } from "./RoadTreeLayout";
import Image from "next/image";

export default function RoadTreeMobileLayout(props: {
  roadData: RoadData;
  toggleSelect: (node: RoadData) => void;
  setIsShowRef: (prop: boolean) => void;
  stateColor: {
    statebgColor: string[];
    stateBorderColor: string[];
    stateTextColor: string[];
  };
}) {
  const roadData: RoadData = props.roadData;
  const toggleSelect = props.toggleSelect;
  const setIsShowRef = props.setIsShowRef;
  const { statebgColor, stateBorderColor, stateTextColor } = props.stateColor;
  const { updateFunc } = useRoadTreeStore(); // update하여 노드에 적용하기 위한 용도

  const renderChildren = (data: RoadData) => {
    if (data.children) {
      return data.children.map((child, idx) => {
        return (
          <div key={"roadTreeMobileLayout_" + idx} className="px-8 pb-2">
            <div
              className={`border-2 border-black w-full rounded-lg  mt-4 p-4 hover:brightness-95 bg-white cursor-pointer
                                ${
                                  child.select ? " brightness-90 h-32 " : "h-20"
                                } flex flex-row items-center
                                text-base font-bold text-gray-700 pl-8
                                bg-[${statebgColor[child.state ?? 0]}] ${
                                  stateBorderColor[child.state ?? 0]
                                } text-[${stateTextColor[child.state ?? 0]}]}
                                ${child.state === 3 ? " line-through " : ""}`}
              onClick={() => {
                toggleSelect(child);
                updateFunc(child);
              }}
            >
              <div className="">
                {child.name}
                {child.select ? (
                  <div
                    className="p-2 my-2 bg-green-200 border-2 rounded-lg border-main hover:brightness-90"
                    onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
                      setIsShowRef(true);
                      e.stopPropagation();
                    }}
                  >
                    레퍼런스 확인하기
                  </div>
                ) : (
                  <></>
                )}
              </div>

              <Image
                src="/roadTreeMobile/downArrow.svg"
                alt="downArrow"
                width={50}
                height={50}
                className={`rounded-full ml-auto transition-transform ${
                  child.select || child.children ? "rotate-180" : ""
                }`}
              />
            </div>
            {renderChildren(child)}
          </div>
        );
      });
    }
  };

  return (
    <div className="w-full h-full p-4 md:hidden">
      <div id="roadTreeMobileEntireGroup" className="">
        {renderChildren(roadData)}
      </div>
    </div>
  );
}
