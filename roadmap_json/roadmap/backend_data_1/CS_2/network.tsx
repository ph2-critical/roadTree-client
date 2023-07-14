import { RoadData } from '@/roadmap_json/roadmap_data';
import { personal_network_blog_private } from '@/roadmap_json/roadmap/backend_data_1/CS_2/network_3/personal_blog';

export const network_data_private: RoadData = {
  nid: 2,
  depth: 2,
  name: '네트워크',
  description:
    '우리가 웹/앱서비스를 이용할 수 있는 이유는 네트워크라는 통신 덕분이다. 이덕분에 다른 컴퓨터랑 데이터를 주고 받을 수 있끼 때문에 개발자가 알아야하는 매우 기본 소양이다. 하지만, 알면 알수록 내용들이 매우 깊게까지 있기 때문에, 틈틈이 하나하나 차근차근 알아가는 것을 추천한다.',
  ref: [
    {
      uuid: '71',
      title: '한 권으로 끝내는 네트워크 기초',
      url: 'https://www.yes24.com/Product/Goods/109742201',
      grade: 1,
      amount: '총 228쪽',
      price: 18800,
      category: 'book',
    },
    {
      uuid: '72',
      title: '모든 개발자를 위한 HTTP 웹 기본 지식',
      url: 'https://www.inflearn.com/course/http-%EC%9B%B9-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC/dashboard',
      grade: 1,
      amount: '총 5시간40분',
      price: 44000,
      category: 'video',
    },
    {
      uuid: '73',
      title: 'WEB1- HTML & Internet(생활코딩)',
      url: 'https://www.youtube.com/playlist?list=PLuHgQVnccGMDZP7FJ_ZsUrdCGH68ppvPb',
      grade: 0,
      amount: '총 4시간35분',
      price: 44000,
      category: 'video',
    },
    {
      uuid: '74',
      title: '그림으로 이해하는 네트워크 용어',
      url: 'https://product.kyobobook.co.kr/detail/S000001834837',
      grade: 1,
      amount: '총 340쪽',
      price: 18000,
      category: 'book',
    },
  ],
  children: [personal_network_blog_private]
};
