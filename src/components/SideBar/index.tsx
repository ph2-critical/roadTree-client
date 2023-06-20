'use client';
import {
  BookIcon,
  ChatIcon,
  ClipIcon,
  ListBulletIcon,
} from '@/src/app/assets/Icons';
import { usePathname } from 'next/navigation';

export const SideBar = () => {
  const path = usePathname();

  return (
    <div className={`fixed bg-white dark:bg-gray-800 h-[1008px] mt-[72px]`}>
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="w-72">
          <nav className="px-6 mt-10 ">
            <a
              className={`hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  ${
                path === '/'
                  ? 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-600 rounded'
                  : 'text-gray2'
              }  `}
              href="#"
            >
              <ListBulletIcon className="m-auto fill-current " />
              <span className="mx-4 text-lg font-normal">전체글</span>
              <span className="flex-grow text-right"></span>
            </a>
            <a
              className={`hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  ${
                path === '/1'
                  ? 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-600 rounded'
                  : 'text-gray2'
              }  `}
              href="#"
            >
              <BookIcon className="m-auto fill-current " />
              <span className="mx-4 text-lg font-normal">정보 공유</span>
              <span className="flex-grow text-right"></span>
            </a>
            <a
              className={`hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  ${
                path === '/2'
                  ? 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-600 rounded'
                  : 'text-gray2'
              }  `}
              href="#"
            >
              <ChatIcon className="m-auto fill-current" />
              <span className="mx-4 text-lg font-normal">고민/잡담</span>
              <span className="flex-grow text-right">
                {/* <button
                  type="button"
                  className="w-6 h-6 text-xs text-white bg-red-500 rounded-full"
                >
                  <span className="p-1">7</span>
                </button> */}
              </span>
            </a>
            <a
              className={`hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  ${
                path === '/3'
                  ? 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-600 rounded'
                  : 'text-gray2'
              }  `}
              href="#"
            >
              <ClipIcon className="m-auto fill-current " />
              <span className="mx-4 text-lg font-normal">질문</span>
              <span className="flex-grow text-right"></span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
