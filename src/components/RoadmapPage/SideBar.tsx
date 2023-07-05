import RefBlock from './RefBlock';
import { useRoadTreeStore } from './RoadTreeLayout';
import StudyDropMenu from './StudyDropMenu';

export default function SideBar() {
  const { select } = useRoadTreeStore();

  return (
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
        <div className="p-1 rounded hover:bg-gray-100">
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
        <div className="py-2">
          <StudyDropMenu />
        </div>

        <div className="pt-3 m-1">
          <div className="py-2 font-semibold text-gray-600">학습 내용</div>
          <div className="border-2 border-gray-200 rounded shadow-md">
            {select?.ref?.map((item, index) => {
              return (
                <div
                  key={'key' + index}
                  className="w-full h-20 bg-white border-b-2"
                  // border 1px이 없음
                >
                  <RefBlock refdata={item}></RefBlock>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}