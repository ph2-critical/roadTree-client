import { RoadData } from '@/roadmap_json/roadmap_data';
import { front_react_data_private } from '@/roadmap_json/roadmap/frontend_data_1/framework_2/reactBasic';
import { front_vue_data_private } from '@/roadmap_json/roadmap/frontend_data_1/framework_2/vue';
import { front_next_data_private } from '@/roadmap_json/roadmap/frontend_data_1/framework_2/nextjs';

export const front_framework_private: RoadData = {
  nid: 33,
  depth: 1,
  name: '프레임워크',
  description: '프레임워크는 일반적으로 HTML, CSS 및 JavaScript를 사용하고, 컴포넌트 기반 아키텍처,상태 관리, 라우팅,데이터 통신등 기능을 제공하여 웹 애플리케이션의 사용자 인터페이스를 구축하는 데 도움을 줍니다.',
  ref: [
    ],
  children: [
    front_react_data_private,
    front_vue_data_private,
    front_next_data_private
  ]
}