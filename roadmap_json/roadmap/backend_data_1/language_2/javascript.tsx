import { RoadData } from '@/roadmap_json/roadmap_data';
import { personal_javascript_data_private } from '@/roadmap_json/roadmap/backend_data_1/language_2/javascript_3/personal_blog';

export const javascript_data_private: RoadData = {
  nid: 7,
  depth: 2,
  name: 'javascript',
  description:'',
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
  children: [personal_javascript_data_private],
};
