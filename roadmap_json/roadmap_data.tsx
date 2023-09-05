export interface reference {
  rid: string;
  title: string;
  url: string;
  grade: number | null;
  category: string;
  amount: string | null;
  price: number | null;
  created_at: Date;
  state?: number;
}

export interface RoadData {
  nid: string;
  name: string;
  description: string | null;
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
