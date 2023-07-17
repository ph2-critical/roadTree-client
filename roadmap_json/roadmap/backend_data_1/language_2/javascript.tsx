import { RoadData } from '@/roadmap_json/roadmap_data';
import { personal_javascript_data_private } from '@/roadmap_json/roadmap/backend_data_1/language_2/javascript_3/personal_blog';

export const javascript_data_private: RoadData = {
  nid: 102,
  depth: 2,
  name: 'Javascript',
  description:
    'javascript로 서버개발에도 사용하게되면, 프론트/백 동일하게 사용하여  새로운 언어를 습득하지 않아도 되며, 서버 설치부터 화면 띄우는 것까지 금방 처리됩니다. 또한 이벤트 기반 비동기방식이라 서버에도 무리가 적어 빠르게 배포를 진행해야되는 곳에 많이 쓰입니다.',
  ref: [
    {
      uuid: '102000',
      title: '준비중',
      url: '',
      grade: 3,
      amount: '총 ',
      price: 0,
      category: '',
    },
  ],
  children: [personal_javascript_data_private],
};
