'use client';
import { useState } from 'react';
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function DailyLearnSubmitPage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="space-y-12 flex justify-center">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">현재상태</label>
                    <div className="mt-2">
                        <select id="country" name="country" autoComplete="country-name" className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                            <option>비전공자(노베이스)</option>
                            <option>비전공자(부트캠프/학원)</option>
                            <option>전공자</option>
                            <option>현직자</option>
                            <option>프리랜서</option>
                        </select>
                    </div>
                </div>
                <div className="sm:col-span-4">
                    <fieldset>
                        <legend className="text-sm font-semibold leading-6 text-gray-900">작성 분야</legend>
                        <p className="mt-1 text-sm leading-6 text-gray-600">학습했던 내용과 연관 있는 분야 체크</p>
                        <div className="mt-6 space-y-6">
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="push-everything"
                                    name="push-notifications"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                                    프론트엔드 분야 학습
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="push-email"
                                    name="push-notifications"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                                    백엔드 분야 학습
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="push-nothing"
                                    name="push-notifications"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                                    협업 도구 학습
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="push-nothing"
                                    name="push-notifications"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                                    그 외 기타 학습
                                </label>
                            </div>
                        </div>
                    </fieldset>

                </div>
                <div className="sm:col-span-4">
                    <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                        데일리 작성 내용
                    </label>
                    <div className="mt-2">
                        <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            defaultValue={''}
                        />
                    </div>
                    {/* <p className="mt-3 text-sm leading-6 text-gray-600"></p> */}
                </div>
                <div className="sm:col-span-4">
                    <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
                        참고링크
                    </label>
                    <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">http://</span>
                            <input
                                type="text"
                                name="website"
                                id="website"
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="www.example.com"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
