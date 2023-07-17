import { RoadData } from '@/roadmap_json/roadmap_data';
import { network_data_private } from '@/roadmap_json/roadmap/backend_data_1/CS_2/network';
import { hardware_os_data_private } from '@/roadmap_json/roadmap/backend_data_1/CS_2/hardware_os';

export const cs_data_private: RoadData = {

  nid: 1,
  name: 'Computer_Science',
  description:
    '보통 컴퓨터과학분야의 내용들은 컴퓨터가 어떻게 변화했는지 역사를 가지고 있습니다. 그리고 그 역사안에는 어떤 문제가 발생했고, 그 문제를 어떻게 해결했는지를 가지고 있기때문에, 문제 해결능력을 키울 수 있습니다. 또한, 새로운 기술이 나오더라도 결국 핵심은 컴퓨터과학을 기반으로 진화하기때문에 본인의 수용력도 키울 수 있어 좋습니다.',
  ref: [
    {
      uuid: '1',
      title: '혼자공부하는 컴퓨터 구조+ 운영체제',
      url: 'https://www.youtube.com/playlist?list=PLVsNizTWUw7FCS83JhC1vflK8OcLRG0Hl',
      grade: 1,
      amount: '총 13시간43분',
      price: 28000,
      category: '유튜브',
    },
    {
      uuid: '2',
      title: 'CS50',
      url: 'https://www.boostcourse.org/cs112',
      grade: 0,
      amount: '',
      price: 0,
      category: '부스트코스',
    },
    {
      uuid: '3',
      title: '면접을 위한 CS전공지식 노트',
      url: 'https://www.yes24.com/Product/Goods/108887922',
      grade: 1,
      amount: '총 292쪽',
      price: 24000,
      category: '도서',
    },
    {
      uuid: '4',
      title: '깃헙/연로그 면접 인터뷰',
      url: 'https://github.com/yeon-06/BE-interview',
      grade: 1,
      amount: '총 9챕터',
      price: 0,
      category: 'posting',
    },
    {
      uuid: '5',
      title: 'Tech Interview 블로그',
      url: 'https://gyoogle.dev/blog/',
      grade: 0,
      amount: '총 6챕터',
      price: 0,
      category: 'posting',
    },
  ],
  children: [network_data_private, hardware_os_data_private],

};