import { RoadData } from '@/roadmap_json/roadmap_data';
import { cs_data_private } from '@/roadmap_json/roadmap/common_data_1/cs';
import { back_language_data_private } from '@/roadmap_json/roadmap/backend_data_1/language';
import { back_database_data_private } from '@/roadmap_json/roadmap/backend_data_1/db';
import { back_aws_cloud_data_private } from '@/roadmap_json/roadmap/backend_data_1/aws_cloud';
import { back_spring_data_private } from '@/roadmap_json/roadmap/backend_data_1/spring';
import { algorithm_data_private } from '@/roadmap_json/roadmap/common_data_1/algorithm';
import { code_data_private } from '@/roadmap_json/roadmap/common_data_1/code';
import { git_data_private } from './common_data_1/git';

export const roadmap_back_private: RoadData = {
  nid: 0,
  depth: 0,
  name: 'Back-end',
  children: [
    cs_data_private,
    back_language_data_private,
    back_database_data_private,
    back_spring_data_private,
    back_aws_cloud_data_private,
    git_data_private,
    code_data_private,
    algorithm_data_private,
  ],
};
