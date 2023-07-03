export default function StudyDropMenu() {
  return (
    <div className="mt-auto w-32">
      <button
        id="studyDropdownButton"
        data-dropdown-toggle="dropdown"
        className="text-gray-600 font-semibold bg-gray-300 hover:brightness-75 p-1 text-center text-sm mt-auto ml-auto rounded-sm flex"
        type="button"
        onClick={(e: any) => {
          e.preventDefault();
        }}
      >
        <div className="flex justify-center items-center pl-2">학습 안 함</div>
        <div>
          <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
            <path
              d="M8.292 10.293a1.009 1.009 0 000 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 000-1.419.987.987 0 00-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 00-1.406 0z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
      </button>
      {/* <!-- Dropdown menu --> */}
      <div
        id="dropdown"
        className="z-10 hidden absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-32"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="studyDropdownButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              학습 중
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              학습 완료
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
