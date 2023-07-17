import { RoadData } from '../../roadmap_data';
import { personal_javascript_data_private } from '@/roadmap_json/roadmap/frontend_data_1/javascript_2/personal_data';
import { front_typescript_private } from '@/roadmap_json/roadmap/frontend_data_1/javascript_2/typescript';

export const front_javascript_private: RoadData = {
  nid: 32,
  name: 'javascript',
  description:
    'Javascript란 웹 페이지를 동적으로 만들고 상호작용을 추가하기 위해 사용되는 프로그래밍 언어입니다. HTML과 CSS로는 구현할 수 없는 기능들을 구현할 수 있으며, 웹 개발을 하기 위해서는 필수적으로 알아야하는 언어입니다.',
  ref: [
    {
      uuid: '3200',
      title: '생활코딩 JavaScript',
      url: 'https://opentutorials.org/course/3085',
      grade: 0,
      amount: '',
      price: 0,
      category: '유튜브',
    },
    {
      uuid: '3001',
      title: '노마드 코더 카카오톡 클론코딩',
      url: 'https://nomadcoders.co/kokoa-clone',
      grade: 0,
      amount: '총 13시간',
      price: 108000,
      category: '노마드코더',
    },
    {
      uuid: '3003',
      title: 'Do it HTML+CSS+JS',
      url: 'https://www.yes24.com/Product/Goods/96674934',
      grade: 0,
      amount: '총 648쪽',
      price: 30000,
      category: '도서',
    },
    {
      uuid: '3201',
      title: '코어 자바스크립트',
      url: 'https://search.shopping.naver.com/book/catalog/32466950627',
      grade: 0,
      amount: '총 202쪽',
      price: 22000,
      category: '도서',
    },
    {
      uuid: '3202',
      title: '모던 자바스크립트 Deep Dive',
      url: 'https://www.yes24.com/Product/Goods/92742567',
      grade: 2,
      amount: '총 956쪽',
      price: 45000,
      category: '도서',
    },
    {
      uuid: '3203',
      title: '모던 자바스크립트',
      url: 'https://ko.javascript.info/',
      grade: 2,
      amount: '0',
      price: 0,
      category: '오픈소스',
    },
    {
      uuid: '3204',
      title: '드림코딩의 포트폴리오 웹사이트 클론 코딩',
      url: 'https://academy.dream-coding.com/courses/portfolio',
      grade: 1,
      amount: '총 9시간 42분',
      price: 90000,
      category: '드림코딩',
    },

    {
      uuid: '3205',
      title: '프로그래머스 무료 강의',
      url: 'https://school.programmers.co.kr/learn/courses/3/3-hello-javascript-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9E%85%EB%AC%B8',
      grade: 0,
      amount: '총 2시간 16분',
      price: 0,
      category: '프로그래머스 강의',
    },
    {
      uuid: '3206',
      title: '얄코의 javaScript 끝장내기',
      url: 'https://www.youtube.com/watch?v=RHoPpjKRT38',
      grade: 0,
      amount: '총 7시간 26분',
      price: 0,
      category: '유튜브',
    },
    {
      uuid: '3207',
      title: 'MDN JS',
      url: 'https://developer.mozilla.org/ko/docs/Web/JavaScript',
      grade: 0,
      amount: '0',
      price: 0,
      category: 'MDN문서',
    }
  ],
  children: [personal_javascript_data_private, front_typescript_private]
};