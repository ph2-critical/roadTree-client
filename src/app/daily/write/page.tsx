"use client";
import { postSubmissionData } from "@/src/api/submission/submission";
import DailySkeletonPage from "@/src/components/Skeleton/DailySkeletonPage";
import { useNicknameStore } from "@/src/state/store";
import { track } from "@amplitude/analytics-browser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DailyLearnSubmitPage() {
  const { nickname } = useNicknameStore();
  const router = useRouter();

  const [formData, setFormData] = useState({
    nickname: nickname,
    category: "",
    content: "",
    url: "",
    study: "",
  });

  const [, setFormErrors] = useState({
    nickname: false,
    category: false,
    content: false,
    study: false,
  });

  const handleInputChange = (event: {
    target: { name: string; value: string };
  }) => {
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

  const handleCategoryChange = (event: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = event.target;
    localStorage.setItem(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // 폼 검증
    let hasErrors = false;
    const newErrors = {
      nickname: false,
      category: false,
      content: false,
      study: false,
    };
    if (formData.nickname === "") {
      newErrors.nickname = true;
      hasErrors = true;
      alert("로그인이 필요합니다.");
    }
    if (formData.category === "") {
      newErrors.category = true;
      hasErrors = true;
    }

    if (formData.content === "") {
      newErrors.content = true;
      hasErrors = true;
    }

    if (formData.study === "") {
      newErrors.study = true;
      hasErrors = true;
    }

    setFormErrors(newErrors);

    if (hasErrors) {
      alert("필수 항목을 입력해주세요.");
      return; // 에러나면 제출되지 않음
    }
    try {
      if (nickname) {
        await postSubmissionData(formData);
        console.log("Data submitted successfully");
        track(`submit_daily_page`);
        // to do : 성공시 redirect 로직 추가할 필요 있음
        //'/profile' 로 이동 시키기
        router.push("/daily");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  useEffect(() => {
    const storedCategory = localStorage.getItem("category");
    setFormData((prevData) => ({
      ...prevData,
      nickname: nickname,
      category: storedCategory || "", // 기존 카테고리 값 또는 빈 문자열로 설정
    }));
  }, [nickname]);

  return nickname ? (
    <div className="flex space-y-12">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 p-3 mt-10 gap-x-6 gap-y-8 sm:grid-cols-3">
          <div className="sm:col-span-4">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              닉네임
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="nickname"
                readOnly
                value={nickname}
                id="nickname"
                className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              현재상태 *{" "}
            </label>
            <div className="mt-2">
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleCategoryChange}
                className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
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
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                작성 분야 *
              </legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                학습했던 내용과 연관 있는 분야 체크
              </p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    value="frontend"
                    onChange={handleInputChange}
                    id="frontend"
                    name="study"
                    checked={formData.study === "frontend"}
                    type="radio"
                    className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="frontend"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    프론트엔드 분야 학습
                  </label>

                  <input
                    value="backend"
                    onChange={handleInputChange}
                    id="backend"
                    name="study"
                    checked={formData.study === "backend"}
                    type="radio"
                    className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="backend"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    백엔드 분야 학습
                  </label>
                  <input
                    value="common"
                    onChange={handleInputChange}
                    id="common"
                    name="study"
                    checked={formData.study === "common"}
                    type="radio"
                    className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="common"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    공통 분야 학습(ex. Git, 코테 등)
                  </label>
                  <input
                    value="etc"
                    onChange={handleInputChange}
                    id="etc"
                    name="study"
                    checked={formData.study === "etc"}
                    type="radio"
                    className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="etc"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    그 외 기타 학습
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="sm:col-span-4">
            <label
              htmlFor="content"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              데일리 작성 내용 *
            </label>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              간단하게 학습한 내용을 작성
            </p>
            <div className="mt-2">
              <textarea
                id="content"
                name="content"
                rows={3}
                value={formData.content}
                onChange={handleInputChange}
                className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder={"ex) 리액트 훅스를 학습"}
              />
            </div>
            {/* <p className="mt-3 text-sm leading-6 text-gray-600"></p> */}
          </div>
          <div className="sm:col-span-4">
            <label
              htmlFor="url"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              참고링크(선택)
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
          <div className="flex items-center justify-end mt-6 sm:col-span-4">
            <button
              type="submit"
              className="justify-center px-3 py-2 font-semibold text-white bg-green-500 rounded-2xl hover:brightness-90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  ) : (
    <DailySkeletonPage />
  );
}
