import { RoadData } from '@/roadmap_json/roadmap_data';
import { personal_python_data_private } from '@/roadmap_json/roadmap/backend_data_1/language_2/python_3/personal_blog';

export const python_data_private: RoadData = {
  nid: 6,
  depth: 2,
  name: 'python',
  description: '개개인의 공부한 블로그을 공유하는 곳입니다. 개인 블로그를 통해 다른 사람들의 공부 방법을 참고하고, 자신의 공부를 정리하는 방법을 배울 수 있습니다.',
  //"url": "https://spring.io/projects/spring-security",
  ref: [
    {
      uuid: '1',
      title: '',
      url: '',
      grade: 3,
      amount: '총 ',
      price: 121000,
      category: 'video',
    },
  ],
  children: [personal_python_data_private],
};
