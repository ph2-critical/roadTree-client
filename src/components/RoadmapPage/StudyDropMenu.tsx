import { useModal } from "@/src/utils/hooks/useModal";

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

  const { isOpen, modalRef, toggleModal } = useModal();

  return (
    <div className="relative" ref={modalRef}>
      <div
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className={`${stateTextColor[stateNum]} min-w-[95px] justify-center items-center rounded-md font-semibold dropdown ${statebgColor[stateNum]} hover:brightness-75 p-2 text-center text-xs sm:text-sm rounded-md flex`}
        onClick={toggleModal}
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
      </div>
      {/* <!-- Dropdown menu --> */}
      <div
        id="dropdown"
        className={`${
          isOpen ? "" : "hidden"
        } border border-gray-200 z-50 dropdown absolute ${
          rightOn ? "left-0" : "right-0"
        } mt-2 bg-white divide-y w-24 divide-gray-100 flex justify-center rounded-sm shadow `}
        onClick={toggleModal}
      >
        <ul
          className="py-2 text-sm text-gray-700 dropdown "
          aria-labelledby="dropdownDefaultButton"
        >
          {stateName.map((item, index) => {
            if (index == stateNum) return;
            return (
              <li
                key={"studyDropMenu_state_" + index}
                className="block px-2 py-1 dropdown hover:bg-gray-100 "
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
