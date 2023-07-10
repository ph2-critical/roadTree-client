import { roadmap_back_private } from './backend_data/back_roadmap';
import { roadmap_front_private } from './frontend_data/front_roadmap';

export interface reference {
  uuid: string;
  title: string;
  url: string;
  grade: number;
  category: string;
  amount: string;
  price: number;
}

export interface RoadData {
  nid: number;
  name: string;
  description?: string;
  select?: boolean;
  depth?: number;
  children?: RoadData[] | null;
  _children?: RoadData[] | null;

  id?: number;
  ref?: reference[];

  x0?: number;
  y0?: number;
  x?: number;
  y?: number;
}

export const roadmap_front_public: RoadData = roadmap_front_private;
export const roadmap_back_public: RoadData = roadmap_back_private;
