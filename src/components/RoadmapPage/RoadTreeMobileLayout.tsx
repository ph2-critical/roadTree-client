import { RoadData } from "@/roadmap_json/roadmap_data";
import { useRoadTreeStore } from "./RoadTreeLayout";

export default function RoadTreeMobileLayout(props: {
    roadData: RoadData;
    toggleSelect: (node: RoadData) => void;
}) {
    const roadData: RoadData = props.roadData;
    const eachDepthColor: number[] = [500, 400, 300, 200, 100];
    const toggleSelect = props.toggleSelect;
    const { updateFunc } = useRoadTreeStore(); // update하여 노드에 적용하기 위한 용도

    const renderChildren = (data: RoadData) => {
        if (data.children) {
            return (
                data.children.map((child, idx) => {
                    return (
                        <div>
                            <div className={`bg-${child.select ? 'blue' : 'red'}-${eachDepthColor[child.depth ?? 0]} w-full h-20 mt-4 p-4`}
                                onClick={() => { toggleSelect(child); updateFunc(child) }}>{child.name}</div>
                            {renderChildren(child)}
                        </div>
                    )
                })

            )
        }
    }

    return (
        <div className="md:hidden h-full w-full p-4">
            <div id="roadTreeMobileEntireGroup" className="">
                {
                    renderChildren(roadData)
                }
            </div>

        </div>
    );
}
