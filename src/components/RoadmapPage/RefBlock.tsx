import { reference } from '@/roadmap_json/roadmap_data';
import Image from 'next/image';
import StudyDropMenu from './StudyDropMenu';
import { useState } from 'react';

export default function RefBlock(props: { refdata: reference }) {
  const refdata: reference = props.refdata;
  const gradelist: string[] = ['초급', '초중급', '중급', '중고급', '고급'];
  const refCatagoryClassificationTable: { [key: string]: string } = {
    인프런: '영상',
    유튜브: '영상',
    유데미: '영상',
    코딩애플: '영상',
    video: '영상',
    book: '책',
    posting: '포스팅',
    공식문서한글화: '포스팅',
    공식문서: '포스팅',
    위키독스: '포스팅',
  };
  const gradeColor: string[] = [
    'bg-green-100',
    'bg-green-200',
    'bg-green-300',
    'bg-green-400',
    'bg-green-500',
  ];
  const categoryImage: { [key: string]: string } = {
    인프런: '/roadmapRef/inflearnLogo.svg',
    유튜브: '/roadmapRef/youtubeLogo.svg',
    유데미: '/roadmapRef/udemyLogo.svg',
    코딩애플: '/roadmapRef/codingappleLogo.jpg',
    video: '/roadmapRef/video.png',
    book: '/roadmapRef/book.svg',
    posting: '/roadmapRef/posting.png',
    공식문서한글화: '/roadmapRef/posting.png',
    공식문서: '/roadmapRef/posting.png',
    위키독스: '/roadmapRef/posting.png',
  };

  const [refStateNum, setRefStateNum] = useState<number>(0);

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          window.open(refdata.url);
        }
      }}
      className="flex items-center h-full p-2 cursor-pointer hover:bg-gray-200"
    >
      <Image
        src={categoryImage[refdata.category]}
        alt={refdata.category}
        width={512}
        height={512}
        className="mr-3 w-14 h-14"
      ></Image>
      <div className="flex-grow w-32 h-14">
        <div className="flex flex-col items-start">
          <div
            className={
              'border px-2 rounded-md border-gray1 text-xs text-gray1 ' +
              gradeColor[refdata.grade]
            }
          >
            {gradelist[refdata.grade]}
          </div>
          <div className="text-sm max-w-full font-semibold text-gray-600 truncate ...">
            {refdata.title}
          </div>
          <div className="text-xs text-gray1 max-w-full truncate ...">
            {refdata.amount} | {refdata.price} |{' '}
            {refCatagoryClassificationTable[refdata.category]}
          </div>
        </div>
      </div>
      <div className="p-1 mt-auto">
        <StudyDropMenu stateNum={refStateNum} setStateNum={setRefStateNum} />
      </div>
    </div>
  );
}
