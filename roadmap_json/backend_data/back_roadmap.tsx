import { RoadData } from '@/roadmap_json/roadmap_data';
import { cs_data_private } from '@/roadmap_json/common_data/cs';
import { back_language_data_private } from '@/roadmap_json/backend_data/language';
import { back_database_data_private } from '@/roadmap_json/backend_data/db';
import { back_aws_cloud_data_private} from '@/roadmap_json/backend_data/aws_cloud';
import { back_spring_data_private } from '@/roadmap_json/backend_data/spring';
import { algorithm_data_private } from '@/roadmap_json/common_data/algorithm';
import { code_data_private } from '@/roadmap_json/common_data/code';

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
    code_data_private,
    algorithm_data_private,
  ],
};
