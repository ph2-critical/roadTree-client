import { RoadData } from '../../roadmap_data';
import { personal_html_data_private } from '@/roadmap_json/roadmap/frontend_data_1/HTML_2/personal_data';

export const front_html_private: RoadData = {
  nid: 30,
  name: 'HTML',
  parent: 1,
  description:
    'HTML은 웹 페이지의 구조와 컨텐츠를 정의하기 위해 사용하는 마크업 언어입니다. CSS와 Javascript를 통해 디자인과 상호 작용을 추가할 수 있습니다. 웹 개발을 위해 필수적으로 알아야하는 언어이므로 먼저 배워보는 것이 좋습니다.',
  ref: [
    {
      uuid: '3000',
      title: '생활 코딩 HTML',
      url: 'https://opentutorials.org/course/3084',
      grade: 0,
      category: '유튜브',
      amount: '총 8시간',
      price: 0,
    },
    {
      uuid: '3001',
      title: '노마드 코더 카카오톡 클론코딩',
      url: 'https://nomadcoders.co/kokoa-clone',
      grade: 0,
      category: '노마드코더',
      amount: '총 13시간',
      price: 108000,
    },
    {
      uuid: '3002',
      title: '코드아카데미 HTML (영어)',
      url: 'https://www.codecademy.com/learn/learn-html',
      grade: 1,
      category: '코드아카데미',
      amount: '총 9시간',
      price: 0,
    },
    {
      uuid: '3003',
      title: 'Do it HTML+CSS+JS',
      url: 'https://www.yes24.com/Product/Goods/96674934',
      category: '도서',
      grade: 1,
      amount: '총 648쪽',
      price: 30000,
    },
    {
      uuid: '3004',
      title: 'MDN HTML',
      url: 'https://developer.mozilla.org/ko/docs/Web/HTML',
      grade: 1,
      category: 'MDN문서',
      amount: '0',
      price: 0,
    },
    {
      uuid: '3005',
      title: '코딩애플 HTML/CSS - All in one',
      url: 'https://codingapple.com/course/html-basics/',
      grade: 1,
      amount: '총 8시간 12분',
      price: 75000,
      category: '코딩애플',
    },
  ],

  children: [personal_html_data_private],
};
