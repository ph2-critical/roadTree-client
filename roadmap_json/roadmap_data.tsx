import { roadmap_back_private } from "@/roadmap_json/roadmap/back_roadmap";
import { roadmap_front_private } from "@/roadmap_json/roadmap/front_roadmap";

export interface reference {
  rid: string;
  title: string;
  url: string;
  grade: number;
  category: string;
  amount: string;
  price: number;
  state?: number;
}

export interface RoadData {
  nid: number | string;
  name: string;
  description?: string;
  select?: boolean;
  depth?: number;
  children?: RoadData[] | null;
  _children?: RoadData[] | null;

  ref?: reference[];

  state?: number;

  x0?: number;
  y0?: number;
  x?: number;
  y?: number;
}

export interface roadDataState {
  [roadmap_type: string]: {
    [depth: number]: {
      [node_id: string]: {
        state: number;
      };
    };
  };
}

export const roadmap_front_public: RoadData = roadmap_front_private;
export const roadmap_back_public: RoadData = roadmap_back_private;
