"use client";

import { reference } from "@/roadmap_json/roadmap_data";
import { CategoryImage } from "@/src/assets/IconImage";
import Image from "next/image";
import StudyDropMenu from "../RoadmapPage/StudyDropMenu";

interface ReferenceBlockProps {
    refdata: reference;
    onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void;
    isDropMenu?: boolean;
    stateNum?: number;
    setStateNum?: (prop: number) => Promise<void>;
    moreOption?: string[];
    isSimple?: boolean;
}

export default function ReferenceBlock(props: ReferenceBlockProps) {
    const refdata: reference = props.refdata;
    const gradelist: string[] = ["초급", "초중급", "중급", "중고급", "고급"];
    const gradeColor: string[] = [
        "yellow-500",
        "blue-500",
        "green-500",
        "red-500",
        "black",
    ];
    const categoryImage = CategoryImage;

    return (
        <div
            onClick={props.onClick}
            className={`flex items-center h-full p-2 rounded-md 
                ${props.onClick !== undefined ? "cursor-pointer hover:bg-gray-200" : ""}`}>
            <Image
                src={"/roadTree" + categoryImage[refdata.category]}
                alt={refdata.category}
                width={512}
                height={512}
                priority
                className={"mr-4 " + ((props.isSimple === true) ? "w-12 h-12" : "w-14 h-14")}
            ></Image>
            <div className={`flex-grow w-32 ${(props.isSimple === true) ? "h-8" : "h-12"}`}>
                <div className="flex flex-col items-start">
                    <div className="flex">
                        {props.moreOption?.map((option, idx) => {
                            return (
                                <div
                                    key={idx}
                                    className={`border px-2 mr-1.5 rounded-md border-${option === 'new' ? 'yellow-600' : 'black'}
                                         text-xs text-${option === 'new' ? 'yellow-600' : 'black'}`}
                                >
                                    {option}
                                </div>
                            );
                        })}
                        <div
                            className={`border px-2 mr-2 rounded-md border-${gradeColor[refdata.grade ?? 0]
                                } text-xs text-${gradeColor[refdata.grade ?? 0]}`}
                        >
                            {gradelist[refdata.grade ?? 0]}
                        </div>

                    </div>
                    <div className="text-sm max-w-full font-semibold text-gray-600 truncate ...">
                        {refdata.title}
                    </div>
                    {props.isSimple === true ? <div></div> :
                        <div className="text-xs text-gray1 max-w-full truncate ...">
                            {refdata.amount !== "0" && refdata.amount
                                ? refdata.amount + " | "
                                : ""}
                            {refdata.price ? refdata.price.toLocaleString() + "원 | " : ""}
                            {refdata.category}
                        </div>}
                </div>
            </div>
            <div className="p-1 mt-auto">
                {props.isDropMenu && props.stateNum !== undefined && props.setStateNum !== undefined ? (
                    <StudyDropMenu stateNum={props.stateNum} setStateNum={props.setStateNum} />
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}
