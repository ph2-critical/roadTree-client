import { RoadData } from '../../roadmap_data';
import { css_template_private } from '@/roadmap_json/roadmap/frontend_data_1/CSS_2/template';

export const front_css_private: RoadData = {
  nid: 31,
  name: 'CSS',
  description:
    'CSS란 HTML로 작성된 웹 사이트의 시각적인 요소를 꾸며주는 언어입니다. HTML과 더불어 웹 개발을 하다보면 계속 마주치게 될 것이므로 기초적인 학습이 필요합니다.',
  ref: [
    {
      uuid: '3100',
      title: '생활 코딩 CSS',
      url: 'https://opentutorials.org/course/3086',
      grade: 0,
      category: '유튜브',
      amount: '총 5시간 50분',
      price: 0,
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
      uuid: '3005',
      title: '코딩애플 HTML/CSS',
      url: 'https://codingapple.com/course/html-basics/',
      grade: 1,
      amount: '총 8시간 12분',
      price: 75000,
      category: '코딩애플',
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
      uuid: '3104',
      title: 'MDN CSS',
      url: 'https://developer.mozilla.org/ko/docs/Web/CSS',
      grade: 0,
      amount: '0',
      price: 0,
      category: 'MDN문서',
    },
  ],
  children: [css_template_private],
}