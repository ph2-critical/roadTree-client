import { RoadData } from '@/roadmap_json/roadmap_data';
import {
  personal_hardware_os_blog_private,
} from '@/roadmap_json/roadmap/backend_data_1/CS_2/hardware_os_3/personal_blog';

export const hardware_os_data_private: RoadData = {
  nid: 1,
  depth: 2,
  name: '하드웨어 및 운영체제',
  description:
    '벼를 키우기위해선 논이라는 환경이 필요하고, 보리를 키우기위해선 밭이라는 환경이 필요한 것처럼, 웹이라는 서비스를 만들기위해서 알아야되는 환경은 하드웨어와 운영체제가 있습니다.',
  ref: [
    {
      uuid: '61',
      title: '혼자공부하는 컴퓨터 구조+ 운영체제',
      url: 'https://www.youtube.com/playlist?list=PLVsNizTWUw7FCS83JhC1vflK8OcLRG0Hl',
      grade: 1,
      amount: '총 13시간43분',
      price: 28000,
      category: 'video',
    },
    {
      uuid: '62',
      title: '컴알못이 보는 컴퓨터 하드웨어 기초상식',
      url: 'https://www.inflearn.com/course/%EC%BB%B4%ED%93%A8%ED%84%B0-%ED%95%98%EB%93%9C%EC%9B%A8%EC%96%B4-%EA%B8%B0%EC%B4%88%EC%83%81%EC%8B%9D#curriculum',
      grade: 0,
      amount: '총 39분',
      price: 0,
      category: 'video',
    },
    {
      uuid: '63',
      title: '[컴퓨터 하드웨어 특강] 컴퓨터 기초 배우기 기본 용어 및 사용법 강좌',
      url: 'https://www.youtube.com/watch?v=ofBI7OFlt0s',
      grade: 0,
      amount: '총 50분',
      price: 0,
      category: 'video',
    },
  ],
  children: [personal_hardware_os_blog_private]
};
