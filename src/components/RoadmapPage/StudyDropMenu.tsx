import { useDetectClose } from "../../utils/hooks/detectDropDownClose";

export default function StudyDropMenu(props: {
  node?: boolean;
  stateNum: number;
  setStateNum: (prop: number) => void;
}) {
  const rightOn: boolean = props.node ?? false;
  const stateNum = props.stateNum;
  const setStateNum = props.setStateNum;

  const stateName: string[] = [
    "학습 안 함",
    "학습 예정",
    "학습 중",
    "학습 완료",
  ];
  const statebgColor: string[] = [
    "bg-gray-300",
    "bg-todoColor",
    "bg-doingColor",
    "bg-doneColor",
  ];
  const stateTextColor: string[] = [
    "text-gray-600",
    "text-black",
    "text-black",
    "text-white",
  ];
  const statePreviewbgColor: string[] = [
    "bg-gray-200",
    "bg-todoColor",
    "bg-doingColor",
    "bg-doneColor",
  ];
  const statePreviewTextColor: string[] = [
    "text-gray-600",
    "text-black",
    "text-black",
    "text-gray-200",
  ];

  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);

  return (
    <div className="relative">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className={`${stateTextColor[stateNum]} min-w-[95px] justify-between rounded-md font-semibold dropdown ${statebgColor[stateNum]} hover:brightness-75 p-1 px-2 text-center text-sm rounded-md flex items-center relative`}
        onClick={myPageHandler}
        ref={myPageRef}
      >
        {stateName[stateNum]}
        <svg
          className="w-4 h-4 ml-2 dropdown"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {/* <!-- Dropdown menu --> */}
      <div
        id="dropdown"
        className={`${
          myPageIsOpen ? "" : "hidden"
        } border border-gray-200 z-50 dropdown absolute ${
          rightOn ? "left-0" : "right-0"
        } mt-2 bg-white divide-y w-24 divide-gray-100 flex justify-center rounded-sm shadow dark:bg-gray-700`}
        onClick={myPageHandler}
      >
        <ul
          className="py-2 text-sm text-gray-700 dropdown dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {stateName.map((item, index) => {
            if (index == stateNum) return;
            return (
              <li
                key={"studyDropMenu_state_" + index}
                className="block px-2 py-1 dropdown hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => {
                  setStateNum(index);
                }}
              >
                <div
                  className={`${statePreviewbgColor[index]} 
                  rounded-sm min-w-[55px] flex justify-center text-xs font-semibold dropdown px-1 w-fit ${statePreviewTextColor[index]} `}
                >
                  {item}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
