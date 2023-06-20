import { Button } from '@/src/components/Button';
import { Comments } from '@/src/components/Comments';

export default function DetailPage() {
  return (
    <main className="flex flex-col w-2/3 mt-10 ml-40 mr-auto group gap-y-1">
      <p className="">질문</p>
      {/* 카테고리 */}
      <p className="title-text">
        데이터분석직무에 관심있는 비전공자 35세입니다.
        {/* 제목 */}
      </p>
      <div className="flex text-sm font-light text-gray4 gap-x-1">
        <p>유선호</p>
        <p> | </p>
        <p>조회수 100</p>
        <p> | </p>
        <p>1분전</p>
        <p> | </p>
        <p>삭제</p>
        {/* 글에 대한 추가 정보 */}
      </div>
      <div className="text-lg font-base text-contentGray my-11">
        안녕하세요 저는 유선호입니다. 안녕하세요 저는 유선호입니다. 안녕하세요
        저는 유선호입니다. 안녕하세요 저는 유선호입니다. 안녕하세요 저는
        유선호입니다. 안녕하세요 저는 유선호입니다. 안녕하세요 저는
        유선호입니다. 안녕하세요 저는 유선호입니다. 안녕하세요 저는
        유선호입니다. 안녕하세요 저는 유선호입니다. 안녕하세요 저는
        유선호입니다. 안녕하세요 저는 유선호입니다. 안녕하세요 저는
        유선호입니다. 안녕하세요 저는 유선호입니다. 안녕하세요 저는
        유선호입니다. 안녕하세요 저는 유선호입니다. 안녕하세요 저는
        유선호입니다. 안녕하세요 저는 유선호입니다. 안녕하세요 저는
        유선호입니다. 안녕하세요 저는 유선호입니다. 안녕하세요 저는
        유선호입니다. 안녕하세요 저는 유선호입니다. 안녕하세요 저는
        유선호입니다. 안녕하세요 저는 유선호입니다. 안녕하세요 저는
        유선호입니다. 안녕하세요 저는 유선호입니다. 안녕하세요 저는
        유선호입니다. 안녕하세요 저는 유선호입니다. 안녕하세요 저는
        유선호입니다. 안녕하세요 저는 유선호입니다. 안녕하세요 저는
        유선호입니다. 안녕하세요 저는 유선호입니다. 안녕하세요 저는
        유선호입니다. 안녕하세요 저는 유선호입니다.
      </div>
      <Button />
      <Comments />
    </main>
  );
}
