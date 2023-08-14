'use client';
import { supabase } from '@/lib/supabase';
import { postSubmissionData } from '@/src/api/submission/submission';
import { useNicknameStore } from '@/src/status/store';
import { set } from 'lodash';
import { useEffect, useState } from 'react';


export default function DailyLearnSubmitPage() {
    const { nickname } = useNicknameStore()

    const [formData, setFormData] = useState({
        nickname: nickname,
        category: '',
        content: '',
        url: '',
        job: ''
    });

    const [formErrors, setFormErrors] = useState({
        category: false,
        content: false,
        job: false
    });

    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: false,
        }));
    };


    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // 폼 검증
        let hasErrors = false;
        const newErrors = {
            category: false,
            content: false,
            job: false
        };

        if (formData.category === '') {
            newErrors.category = true;
            hasErrors = true;
        }

        if (formData.content === '') {
            newErrors.content = true;
            hasErrors = true;
        }

        if (formData.job === '') {
            newErrors.job = true;
            hasErrors = true;
        }

        setFormErrors(newErrors);

        if (hasErrors) {
            alert("필수 항목을 입력해주세요.");
            return; // Don't submit if there are errors
        }
        try {
            await postSubmissionData(formData);
            console.log('Data submitted successfully');
            // You can add any success messages or redirection logic here
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <div className="space-y-12 flex justify-center">
            <form onSubmit={handleSubmit}>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">닉네임</label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="nickname" readOnly
                                value={nickname}    
                                onChange={handleInputChange}
                                id="nickname"
                                className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-4">
                        <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">현재상태 * </label>
                        <div className="mt-2">
                            <select id="category" name="category" value={formData.category} onChange={handleInputChange} className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                <option value="">선택해주세요</option>
                                <option value="노베이스">비전공자(노베이스)</option>
                                <option value="부트캠프/학원">비전공자(부트캠프/학원)</option>
                                <option value={"전공자"}>전공자</option>
                                <option value={"현직자"}>현직자</option>
                                <option value={"프리랜서"}>프리랜서</option>
                            </select>
                        </div>
                    </div>
                    <div className="sm:col-span-4">
                        <fieldset>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">작성 분야 *</legend>
                            <p className="mt-1 text-sm leading-6 text-gray-600">학습했던 내용과 연관 있는 분야 체크</p>
                            <div className="mt-6 space-y-6">
                                <div className="flex items-center gap-x-3">
                                    <input
                                        value="frontend"
                                        onChange={handleInputChange}
                                        id="frontend"
                                        name="job"
                                        checked={formData.job === '프론트엔드 분야 학습'}
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label htmlFor="frontend" className="block text-sm font-medium leading-6 text-gray-900">
                                        프론트엔드 분야 학습
                                    </label>

                                    <input
                                        value="backend"
                                        onChange={handleInputChange}
                                        id="backend"
                                        name="job"
                                        checked={formData.job === "backend"}
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label htmlFor="backend" className="block text-sm font-medium leading-6 text-gray-900">
                                        백엔드 분야 학습
                                    </label>
                                    <input
                                        value="collaboration"
                                        onChange={handleInputChange}
                                        id="collaboration"
                                        name="job"
                                        checked={formData.job === "collaboration"}
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label htmlFor="collaboration" className="block text-sm font-medium leading-6 text-gray-900">
                                        협업 도구 학습
                                    </label>
                                    <input
                                        value="etc"
                                        onChange={handleInputChange}
                                        id="etc"
                                        name="job"
                                        checked={formData.job === "etc"}
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label htmlFor="etc" className="block text-sm font-medium leading-6 text-gray-900">
                                        그 외 기타 학습
                                    </label>
                                </div>
                            </div>
                        </fieldset>

                    </div>
                    <div className="sm:col-span-4">
                        <label htmlFor="content" className="block text-sm font-medium leading-6 text-gray-900">
                            데일리 작성 내용 *
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="content"
                                name="content"
                                rows={3}
                                value={formData.content}
                                onChange={handleInputChange}
                                className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder={'학습한 내용을 작성해주세요.'}
                            />
                        </div>
                        {/* <p className="mt-3 text-sm leading-6 text-gray-600"></p> */}
                    </div>
                    <div className="sm:col-span-4">
                        <label htmlFor="url" className="block text-sm font-medium leading-6 text-gray-900">
                            참고링크
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="text"
                                    name="url"
                                    id="url"
                                    value={formData.url}
                                    onChange={handleInputChange}
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="www.example.com"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end sm:col-span-4">
                        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Save
                        </button>
                    </div>
                </div>
            </form>

        </div>
    );
}

