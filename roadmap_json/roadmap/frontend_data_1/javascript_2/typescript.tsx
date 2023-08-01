import { RoadData } from '../../../roadmap_data';
import {
  personal_typescript_data_private
} from '@/roadmap_json/roadmap/frontend_data_1/javascript_2/typescript_3/personal_data';

export const front_typescript_private: RoadData = {
  nid: 321,
  depth: 2,
  parent: 32,
  name: 'Typescript',
  description: 'typescript는 Javascript에 Type 더한 것 입니다. 사용하는 이유는 컴파일단계에서 버그나 에러를 사전에 파악할 수 있다는 장점이 생겨 현재는 대부분이 사용하고 있습니다.',
  ref: [
    {
      uuid: '321000',
      title: '빠르게 마스터하는 타입스크립트',
      url: 'https://codingapple.com/course/typescript-crash-course/',
      grade: 1,
      category: '코딩애플',
      amount: '총 4시간 52분',
      price: 35000,
    },
    {
      uuid: '321001',
      title: '이펙티브 타입스크립트',
      url: 'https://product.kyobobook.co.kr/detail/S000001033114',
      grade: 3,
      amount: '총 344쪽',
      price: 25000,
      category: '도서',
    },
    {
      uuid: '321002',
      title: '타입스크립트 입문 - 기초부터 실전까지',
      url: 'https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9E%85%EB%AC%B8#curriculum',
      grade: 2,
      amount: '총 6시간 17분',
      price: 55000,
      category: '인프런',
    },
    {
      uuid: '321003',
      title: '실전 프로젝트로 배우는 타입스크립트',
      url: 'https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8B%A4%EC%A0%84',
      grade: 3,
      amount: '총 5시간 53분',
      price: 55000,
      category: '인프런',
    },
    {
      uuid: '321004',
      title: '[코드팩토리] [초급] 8시간만에 끝내는 코드팩토리의 Typescript 완전정복 풀코스',
      url: 'https://inf.run/wtGC',
      grade: 2,
      amount: '총 8시간 10분',
      price: 44000,
      category: '인프런',
    }
  ],
  children: [personal_typescript_data_private]
}
