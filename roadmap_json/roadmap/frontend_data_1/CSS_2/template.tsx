import { RoadData } from '@/roadmap_json/roadmap_data';
import { personal_css_data_private } from '@/roadmap_json/roadmap/frontend_data_1/CSS_2/CSS_3/personal_data';


export const css_template_private: RoadData = {
  nid: 310,
  depth: 2,
  name: 'css Framwork Source',
  description: '매번 CSS를 작업하다보면 버튼, 레이아웃, 입력창 등 처럼 자주 사용하는 것 있습니다. 이렇게 자주 사용하는 것들을 미리 만들어 놓고 빠르게 가져다 쓸 수 있는 CSS 프레임워크를 알면 일의 효율성을 높일 수 있습니다.',
  ref: [
    {
      uuid: '310000',
      title: '대표적인 CSS 오픈소스 BootStrap',
      url: 'https://getbootstrap.kr/',
      grade: 0,
      category: '오픈소스',
      amount: '0',
      price: 0,
    },
    {
      uuid: '310001',
      title: '웹 폰트/아이콘 오픈소스 폰트어썸',
      url: 'https://fontawesome.com/',
      grade: 0,
      category: '오픈소스',
      amount: '0',
      price: 0,
    },
    {
      uuid: '310002',
      title: '온라인 렌더링 테스트 오픈소스 코드펜',
      url: 'https://codepen.io/',
      grade: 0,
      category: '오픈소스',
      amount: '0',
      price: 0,
    },
  ],
  children: [personal_css_data_private]
};

