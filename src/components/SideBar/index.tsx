"use client";
import { BookIcon, ListBulletIcon, StarIcon } from "@/src/assets/Icons";
import { track } from "@amplitude/analytics-browser";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SideBar = () => {
  const path = usePathname();

  return (
    <div
      className={`fixed bg-white  h-full left-0 border-x border-gray6 hidden md:block`}
    >
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="w-60">
          <nav className="box-border mt-10">
            <Link
              className={`hover:text-doneColor  px-6 hover:bg-todoColor flex items-center py-2 my-6 transition-colors  duration-200  ${path === "/daily"
                ? "text-doneColor  bg-todoColor  rounded"
                : "text-gray2"
                }  `}
              onClick={() => {
                track("click_go_daily_page_sidebar_btn");
              }}
              href="/daily"
            >
              <ListBulletIcon className="m-auto fill-current " />
              <span className="mx-4 text-lg font-normal">학습 현황</span>
              <span className="flex-grow text-right"></span>
            </Link>
            <Link
              className={`hover:text-doneColor hover:bg-todoColor flex items-center px-6 py-2 my-6 transition-colors  duration-200  ${path === "/daily/write"
                ? "text-doneColor  bg-todoColor  rounded"
                : "text-gray2"
                }  `}
              href="/daily/write"
              onClick={() => {
                track("click_go_daily_write_page_sidebar_btn");
              }}
            >
              <BookIcon className="m-auto fill-current " />
              <span className="mx-4 text-lg font-normal">학습 기록</span>
              <span className="flex-grow text-right"></span>
            </Link>
            <Link
              className={`hover:text-doneColor hover:bg-todoColor flex items-center px-6 py-2 my-6 transition-colors  duration-200  ${path === "/daily/ranking"
                ? "text-doneColor  bg-todoColor  rounded"
                : "text-gray2"
                }  `}
              href="/daily/ranking"
              onClick={() => {
                track("click_go_daily_ranking_page_sidebar_btn");
              }}
            >
              <StarIcon className="m-auto fill-current " />
              <span className="mx-4 text-lg font-normal">랭킹</span>
              <span className="flex-grow text-right"></span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
