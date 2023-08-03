import { RoadData } from '@/roadmap_json/roadmap_data';
import { personal_next_data_private } from '@/roadmap_json/roadmap/frontend_data_1/framework_2/next_3/personal_data';

export const front_next_data_private: RoadData = {
  nid: 332,
  depth: 2,
  name: 'Next.js',
  description : 'Next는 React 기반의 프론트엔드 프레임워크입니다.구글링 검색엔진의 노출을 위해 알고리즘이 서버 사이드 렌더링(SSR)에 최적화되면서 SSR과 정적 사이트 생성하는 것이 주요 기능인 Next.js가 뜨게 되었습니다.',
  ref: [
    {
        uuid: '332005',
        title : "Next.js 생활코딩",
        url : "https://opentutorials.org/course/5098",
        grade: 2,
        amount : "총 1시간 23분",
        price : 0,
        category : "유튜브"
    },
    {
      uuid: '332000',
      title : "노마드코더 NextJS 시작하기",
      url : "https://nomadcoders.co/nextjs-fundamentals",
      grade: 2,
      amount : "총 2시간 20분",
      price : 0,
      category : "노마드코더"
    },
    {
      uuid: '332001',
      title : "【한글자막】 Next.js & React - 완벽 정복 가이드 (incl. Two Paths!)",
      url : "https://www.udemy.com/share/106LA8/",
      grade: 3,
      amount : "총 25시간",
      price : 88000,
      category : "유데미"
    },
    {
      uuid: '332002',
      title : "[풀스택] 캐럿마켓 클론코딩",
      url : "https://nomadcoders.co/carrot-market",
      grade: 3,
      amount : "총 25시간 30분",
      price : 360000,
      category : "노마드코더"
    },{
      uuid: '332003',
      title : "Next.js 시작하기(feat. 지도 서비스 개발)",
      url : "https://inf.run/yQGE",
      grade: 2,
      amount : "총 4시간 7분",
      price : 44000,
      category : "인프런"
    },{
      uuid: '332004',
      title : "Next.js로 웹서비스 만들기",
      url : "https://codingapple.com/course/next-js/",
      grade: 2,
      amount : "총 6시간 46분",
      price : 75000,
      category : "코딩애플"
    }
  ],
  children: [personal_next_data_private]
}