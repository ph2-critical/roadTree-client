import { RoadData } from '@/roadmap_json/roadmap_data';
import { front_react_data_private } from '@/roadmap_json/roadmap/frontend_data_1/framework_2/reactBasic';
import { front_vue_data_private } from '@/roadmap_json/roadmap/frontend_data_1/framework_2/vue';
import { front_next_data_private } from '@/roadmap_json/roadmap/frontend_data_1/framework_2/nextjs';

export const front_framework_private: RoadData = {
  nid: 4,
  depth: 1,
  name: '프레임워크',
  ref: [
    ],
  children: [
    front_react_data_private,
    front_vue_data_private,
    front_next_data_private
  ]
}