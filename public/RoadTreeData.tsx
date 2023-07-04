export interface reference {
  uuid: number;
  title: string;
  url: string;
  grade: number;
  category: string;
  amount: string;
  price: number;
}

export interface RoadData {
  nid: number;
  name: string;
  description?: string;
  select?: boolean;
  depth?: number;
  children?: RoadData[] | null;
  _children?: RoadData[] | null;

  ref?: reference[];

  id?: number;
  x0?: number;
  y0?: number;
  x?: number;
  y?: number;
}

export const front_data: RoadData = {
  nid: 1,
  name: 'Front-end',
  children: [
    {
      name: 'HTML',
      description:
        'HTML은 웹 페이지의 구조와 컨텐츠를 정의하기 위해 사용하는 마크업 언어입니다. CSS와 Javascript를 통해 디자인과 상호 작용을 추가할 수 있습니다. 웹 개발을 위해 필수적으로 알아야하는 언어이므로 먼저 배워보는 것이 좋습니다.',
      nid: 11,
      ref: [
        {
          uuid: 1,
          title: '생활 코딩 HTML',
          url: 'https://opentutorials.org/course/3084',
          grade: 0,
          category: 'video',
          amount: '',
          price: 0,
        },
        {
          uuid: 2,
          title: '노마드 코더 카카오톡 클론코딩',
          url: 'https://nomadcoders.co/kokoa-clone',
          grade: 0,
          category: 'video',
          amount: '총 13시간',
          price: 0,
        },
        {
          uuid: 3,
          title: '코드카데미 HTML (영어)',
          url: 'https://www.codecademy.com/learn/learn-html',
          grade: 0,
          category: 'video',
          amount: '총 9시간',
          price: 0,
        },
        {
          uuid: 4,
          title: 'Do it HTML+CSS+JS',
          url: 'https://www.yes24.com/Product/Goods/96674934',
          category: 'book',
          grade: 0,
          amount: '총 648쪽',
          price: 30000,
        },
        {
          uuid: 5,
          title: 'MDN HTML',
          url: 'https://developer.mozilla.org/ko/docs/Web/HTML',
          grade: 0,
          category: 'posting',
          amount: '0',
          price: 0,
        },
      ],

      children: [],
    },
    {
      name: 'CSS',
      description:
        'CSS란 HTML로 작성된 웹 사이트의 시각적인 요소를 꾸며주는 언어입니다. HTML과 더불어 웹 개발을 하다보면 계속 마주치게 될 것이므로 기초적인 학습이 필요합니다.',
      nid: 12,
      ref: [
        {
          uuid: 0,
          title: '생활 코딩 CSS',
          url: 'https://opentutorials.org/course/3086',
          grade: 0,
          category: 'video',
          amount: '',
          price: 0,
        },
        {
          uuid: 1,
          title: '노마드 코더 카카오톡 클론코딩',
          url: 'https://nomadcoders.co/kokoa-clone',
          grade: 0,
          category: 'video',
          amount: '총 13시간',
          price: 0,
        },
        {
          uuid: 2,
          title: '코딩애플 HTML/CSS',
          url: 'https://codingapple.com/course/html-basics/',
          grade: 1,
          category: 'video',
          amount: '',
          price: 75000,
        },

        {
          uuid: 3,
          title: 'Do it HTML+CSS+JS',
          url: 'https://www.yes24.com/Product/Goods/96674934',
          category: 'book',
          grade: 0,
          amount: '총 648쪽',
          price: 30000,
        },
        {
          uuid: 4,
          title: 'MDN CSS',
          url: 'https://developer.mozilla.org/ko/docs/Web/CSS',
          grade: 0,
          category: 'posting',
          amount: '0',
          price: 0,
        },

        {
          uuid: 5,
          title: '1분 코딩 CSS 그리디',
          url: 'https://studiomeal.com/archives/533',
          grade: 1,
          category: 'posting',
          amount: '0',
          price: 0,
        },
        {
          uuid: 6,
          title: '1분 코딩 CSS Flex',
          url: 'https://studiomeal.com/archives/197',
          grade: 1,
          category: 'posting',
          amount: '0',
          price: 0,
        },
        {
          uuid: 7,
          title: 'BootStrap',
          url: 'https://getbootstrap.kr/',
          grade: 0,
          category: 'posting',
          amount: '0',
          price: 0,
        },
      ],
      children: [],
    },
    {
      name: 'javascript',
      description:
        'JavaScript란 웹 페이지를 동적으로 만들고 상호작용을 추가하기 위해 사용되는 프로그래밍 언어입니다. HTML과 CSS로는 구현할 수 없는 기능들을 구현할 수 있으며, 웹 개발을 하기 위해서는 필수적으로 알아야하는 언어입니다.',
      nid: 13,
      ref: [
        {
          uuid: 0,
          title: '생활코딩 JavaScript',
          url: 'https://opentutorials.org/course/3085',
          grade: 0,
          category: 'video',
          amount: '',
          price: 0,
        },
        {
          uuid: 1,
          title: '노마드 코더 카카오톡 클론코딩',
          url: 'https://nomadcoders.co/kokoa-clone',
          grade: 0,
          category: 'video',
          amount: '총 13시간',
          price: 0,
        },
        {
          uuid: 2,
          title: 'Do it HTML+CSS+JS',
          url: 'https://www.yes24.com/Product/Goods/96674934',
          category: 'book',
          grade: 0,
          amount: '총 648쪽',
          price: 30000,
        },
        {
          uuid: 3,
          title: '코어 자바스크립트',
          url: 'https://search.shopping.naver.com/book/catalog/32466950627',
          grade: 0,
          category: 'book',
          amount: '총 202쪽',
          price: 22000,
        },
        {
          uuid: 4,
          title: '모던 자바스크립트 Deep Dive',
          url: 'https://www.yes24.com/Product/Goods/92742567',
          grade: 1,
          category: 'book',
          amount: '총 956쪽',
          price: 45000,
        },
        {
          uuid: 5,
          title: ' 모던 자바스크립트',
          url: 'https://ko.javascript.info/',
          grade: 1,
          category: 'posting',
          amount: '0',
          price: 0,
        },
        {
          uuid: 6,
          title: 'MDN JS',
          url: 'https://developer.mozilla.org/ko/docs/Web/JavaScript',
          grade: 0,
          category: 'posting',
          amount: '0',
          price: 0,
        },
        {
          uuid: 7,
          title: '드림코딩의 포트폴리오 웹사이트 클론 코딩',
          url: 'https://academy.dream-coding.com/courses/portfolio',
          grade: 1,
          category: 'video',
          amount: '총 9시간',
          price: 90000,
        },
        {
          uuid: 8,
          title: 'TCP 스쿨 자바스크립트',
          url: 'http://www.tcpschool.com/javascript/intro',
          grade: 0,
          category: 'posting',
          amount: '총 64챕터',
          price: 0,
        },
        {
          uuid: 9,
          title: '프로그래머스 무료 강의',
          url: 'https://school.programmers.co.kr/learn/courses/3/3-hello-javascript-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9E%85%EB%AC%B8',
          grade: 0,
          category: 'video',
          amount: '총 2시간 16분',
          price: 0,
        },
        {
          uuid: 10,
          title: '얄코의 javaScript 끝장내기',
          url: 'https://www.youtube.com/watch?v=RHoPpjKRT38',
          grade: 0,
          category: 'video',
          amount: '총 7시간 26분',
          price: 0,
        },
      ],
    },
  ],
};

export const back_data: RoadData = {
  nid: 2,
  name: 'Back-end',
  select: false,
  x: 0,
  y: 0,
  children: [
    {
      nid: 21,
      name: 'Interactive tools',
      select: false,
      x: 0,
      y: 0,
      children: [
        {
          nid: 211,
          name: 'Browser-based',
          select: false,
          x: 0,
          y: 0,
          children: [
            {
              nid: 2111,
              name: 'Datawrapper',
              select: false,
              x: 0,
              y: 0,
            },
            {
              nid: 2112,
              name: 'Google Sheets',
              select: false,
              x: 0,
              y: 0,
            },
            {
              nid: 2113,
              name: 'plotly',
              select: false,
              x: 0,
              y: 0,
            },
            {
              nid: 2114,
              name: 'RAW',
              select: false,
              x: 0,
              y: 0,
            },
          ],
        },
        {
          nid: 212,
          name: 'Desktop',
          select: false,
          x: 0,
          y: 0,
          children: [
            {
              nid: 2121,
              name: 'Tableau Desktop',
              select: false,
              x: 0,
              y: 0,
            },
            {
              nid: 2122,
              name: 'Tableau Public',
              select: false,
              x: 0,
              y: 0,
            },
          ],
        },
      ],
    },
    {
      nid: 22,
      name: 'Coding',
      select: false,
      x: 0,
      y: 0,
      children: [
        {
          nid: 221,
          name: 'JavaScript',
          select: false,
          x: 0,
          y: 0,
          children: [
            {
              nid: 2211,
              name: 'Charting libraries',
              select: false,
              x: 0,
              y: 0,
            },
          ],
        },
        {
          nid: 222,
          name: 'Other',
          select: false,
          x: 0,
          y: 0,
          children: [
            {
              nid: 2221,
              name: 'Python',
              select: false,
              x: 0,
              y: 0,
            },
            {
              nid: 2222,
              name: 'R',
              select: false,
              x: 0,
              y: 0,
            },
          ],
        },
      ],
    },
  ],
};
