import { RoadData } from '@/roadmap_json/roadmap_data';
import { java_data_private } from '@/roadmap_json/roadmap/backend_data_1/language_2/java';
import { python_data_private } from '@/roadmap_json/roadmap/backend_data_1/language_2/python';
import { javascript_data_private } from '@/roadmap_json/roadmap/backend_data_1/language_2/javascript';

export const back_language_data_private: RoadData = {
  nid: 2,
  name: '개발 언어',
  description: '개발언어는 프로그래밍을 할 때 사용하는 언어입니다. 개발언어는 다양한 종류가 있습니다. 그 중에서도 자바는 다양한 분야에서 사용되고 있고, 또한 다른 언어에 비해 배우기 쉽고, 다른 언어에 비해 안정적이기 때문에, 자바를 배우는 것을 추천합니다.',
  ref: [],
  children: [java_data_private, python_data_private, javascript_data_private],
};