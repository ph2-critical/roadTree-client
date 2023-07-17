'use client';

import { RoadData, reference } from '@/roadmap_json/roadmap_data';
import Image from 'next/image';
import StudyDropMenu from './StudyDropMenu';
import { useEffect, useState } from 'react';
import {
  getRefDatas,
  getRefProps,
  postRefDatas,
  postRefProps,
} from '@/src/api';
import { track } from '@amplitude/analytics-browser';

export default function RefBlock(props: {
  refdata: reference;
  whatStudy: string;
  userId: string;
  refBlockInit: boolean;
  setRefBlockInit: (prop: boolean) => void;
  select: RoadData | null;
}) {
  const refBlockInit: boolean = props.refBlockInit;
  const setRefBlockInit: (prop: boolean) => void = props.setRefBlockInit;
  const refdata: reference = props.refdata;
  const userId: string = props.userId;
  const gradelist: string[] = ['초급', '초중급', '중급', '중고급', '고급'];
  const stateTable = ['학습안함', '학습예정', '학습중', '학습완료'];
  const state2num: { [key: string]: number } = {
    학습안함: 0,
    학습예정: 1,
    학습중: 2,
    학습완료: 3,
  };
  const refCatagoryClassificationTable: { [key: string]: string } = {
    인프런: '영상',
    유튜브: '영상',
    유데미: '영상',
    코딩애플: '영상',
    video: '영상',
    book: '도서',
    도서: '도서',
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
    도서: '/roadmapRef/book.svg',
    posting: '/roadmapRef/posting.png',
    개인블로그: '/roadmapRef/posting.png',
    공식문서한글화: '/roadmapRef/posting.png',
    공식문서: '/roadmapRef/posting.png',
    위키독스: '/roadmapRef/posting.png',
    패스트캠퍼스: '/roadmapRef/fastcampusLogo.png',
    깃허브: '/roadmapRef/githubLogo.svg',
    부스트코스: '/roadmapRef/boostcourseLogo.png',
  };

  const [stateNum, setStateNum] = useState<number>(0);

  useEffect(() => {
    if (userId && refBlockInit === false) {
      const getProp: getRefProps = {
        roadmap_type: props.whatStudy,
        user_id: userId,
        ref_id: refdata.uuid,
      };

      getRefDatas(getProp).then((data) => {
        if (data.data && data.data.length > 0) {
          setStateNum(state2num[data.data[0].state]);
        }
        setRefBlockInit(true);
      });
    }
  }, [refBlockInit]);

  const setRefStateNum: (num: number) => void = (num) => {
    console.log('[amplitude] click_ref_state');
    track('click_ref_state', {
      roadmapCat: props.whatStudy,
      refId: refdata.uuid,
      refName: refdata.title,
      refCat: refdata.category,
      refGrade: refdata.grade,
      refAmount: refdata.amount,
      refPrice: refdata.price,
      refUrl: refdata.url,
      beforeState: stateTable[stateNum],
      afterState: stateTable[num],
      selectNodeId: props.select?.nid,
      selectNodeName: props.select?.name,
    });

    setStateNum(num);
    const postData: postRefProps = {
      roadmap_type: props.whatStudy,
      ref_id: refdata.uuid,
      state: stateTable[num],
      user_id: userId,
    };

    postRefDatas(postData);
  };

  if (refBlockInit) {
    return (
      <div
        onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
          if (
            e.target instanceof Element &&
            !e.target.classList.contains('dropdown')
          ) {
            console.log(e.target);
            console.log(e.target.classList);
            console.log(e.target.classList.contains('dropdown'));

            console.log('[amplitude] click_ref_link');
            track('click_ref_link', {
              roadmapCat: props.whatStudy,
              refId: refdata.uuid,
              refName: refdata.title,
              refCat: refdata.category,
              refGrade: refdata.grade,
              refAmount: refdata.amount,
              refPrice: refdata.price,
              refUrl: refdata.url,
              refState: stateTable[stateNum],
              selectNodeId: props.select?.nid,
              selectNodeName: props.select?.name,
            });
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
          <StudyDropMenu stateNum={stateNum} setStateNum={setRefStateNum} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
