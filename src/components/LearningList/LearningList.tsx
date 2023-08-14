import { getSubmissionUserDatas, getSubmissionUserProps } from '@/src/api/submission/submission';
import { useEffect, useState } from 'react';

function getStudyField(study: string) {
    if (study == "frontend") {
        return "프론트 학습분야";
    }
    if (study == "backend") {
        return "백엔드 학습분야";
    }
    if (study == "common") {
        return "공통 학습분야";
    }
    return "기타 학습분야";

} 

export default function SubmissionList({ nickname }: { nickname: string }) {
    const [submissions, setSubmissions] = useState<getSubmissionUserProps[]>([]);
    // const people = [
    //     // { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    //   ]
    useEffect(() => {
        const fetchSubmissions = async () => {
            try {
                const submissionData = await getSubmissionUserDatas(nickname);
                submissionData.forEach((item: getSubmissionUserProps) => {
                    item.created_at = item.created_at.substring(0, 10);
                    item.study = getStudyField(item.study);
                    if (item.content.length > 15) {
                        item.content = item.content.substring(0, 15) + '...';
                    }
                });
                setSubmissions(submissionData);
            } catch (error) {
                console.error('Error fetching submissions:', error);
            }
        };

        fetchSubmissions();


       
    }, [nickname]);


 

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-lg font-semibold leading-6 text-gray-900">Daily Study List</h1>
          <p className="mt-2 text-sm text-gray-700">
            내가 데일리로 학습한 내용 리스트입니다.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          {/* <button
            type="button"
            className="block rounded-md bg-[#13D080] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            데일리 학습 등록
          </button> */}
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      학습일
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      학습분야
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      학습내용
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      참고링크
                    </th>
                    {/* <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th> */}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {submissions.map((submission) => (
                    <tr key={submission.created_at}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {submission.created_at.substring(0, 10)}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{submission.study}</td>
                      {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{submission.category}</td> */}
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{submission.content}</td>
                      {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{}</td> */}
                      <td className="whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-6">
                        <a href="#" className="text-[#13D080] hover:text-green-900">
                          학습 링크<span className="sr-only">, {submission.url}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
