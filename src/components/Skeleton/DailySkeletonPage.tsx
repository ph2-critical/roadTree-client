import React from "react";

export default function DailySkeletonPage() {
  return (
    <div className="flex space-y-12 animate-pulse">
      <form>
        <div className="grid grid-cols-1 p-3 mt-10 gap-x-6 gap-y-8 sm:grid-cols-3">
          <div className="sm:col-span-4">
            <div className="block w-12 h-5 bg-gray-200 rounded-md" />
            <div className="mt-2">
              <div className="block rounded-md py-1.5 w-40 h-9 bg-gray-200" />
            </div>
          </div>
          <div className="sm:col-span-4">
            <div className="block w-24 h-5 bg-gray-200 rounded-md" />
            <div className="mt-2">
              <div
                id="category"
                className="block px-3 w-full rounded-md border-0 py-1.5 sm:max-w-xs h-9 bg-gray-200"
              />
            </div>
          </div>
          <div className="sm:col-span-4">
            <fieldset>
              <div className="w-20 h-5 bg-gray-200 rounded-md" />
              <div className="h-5 mt-1 bg-gray-200 rounded-md w-52" />
              <div className="mt-6 space-y-6">
                <div className="bg-gray-200 rounded-md h-7 w-128" />
              </div>
            </fieldset>
          </div>
          <div className="sm:col-span-4">
            <div className="h-5 bg-gray-200 rounded-md w-36" />
            <div className="mt-2">
              <div
                id="content"
                className="px-3 block w-full rounded-md border-0 py-1.5 h-20 bg-gray-200"
              />
            </div>
            {/* <p className="mt-3 text-sm leading-6 text-gray-600"></p> */}
          </div>
          <div className="sm:col-span-4">
            <div className="block w-20 h-5 bg-gray-200 rounded-md" />
            <div className="mt-2">
              <div className="flex w-full bg-gray-200 rounded-md sm:max-w-md h-9" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
