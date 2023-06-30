export interface RoadData {
  nid: number;
  id?: number;
  name: string;
  select: boolean;
  x0?: number;
  y0?: number;
  x?: number;
  y?: number;
  depth?: number;
  children?: RoadData[] | null;
  _children?: RoadData[] | null;
}

export const front_data: RoadData = {
  nid: 1,
  name: "Front-end",
  select: false,
  children: [
    {
      nid: 11,
      name: "Interactive tools",
      select: false,
      x: 0,
      y: 0,
      children: [
        {
          nid: 111,
          name: "Browser-based",
          select: false,
          x: 0,
          y: 0,
          children: [
            {
              nid: 1111,
              name: "Datawrapper",
              select: false,
              x: 0,
              y: 0,
            },
            {
              nid: 1112,
              name: "Google Sheets",
              select: false,
              x: 0,
              y: 0,
            },
            {
              nid: 1113,
              name: "plotly",
              select: false,
              x: 0,
              y: 0,
            },
            {
              nid: 1114,
              name: "RAW",
              select: false,
              x: 0,
              y: 0,
            },
          ],
        },
        {
          nid: 112,
          name: "Desktop",
          select: false,
          x: 0,
          y: 0,
          children: [
            {
              nid: 1121,
              name: "Tableau Desktop",
              select: false,
              x: 0,
              y: 0,
            },
            {
              nid: 1122,
              name: "Tableau Public",
              select: false,
              x: 0,
              y: 0,
            },
          ],
        },
      ],
    },
    {
      nid: 12,
      name: "Coding",
      select: false,
      x: 0,
      y: 0,
      children: [
        {
          nid: 121,
          name: "JavaScript",
          select: false,
          x: 0,
          y: 0,
          children: [
            {
              nid: 1211,
              name: "Charting libraries",
              select: false,
              x: 0,
              y: 0,
            },
          ],
        },
        {
          nid: 122,
          name: "Other",
          select: false,
          x: 0,
          y: 0,
          children: [
            {
              nid: 1221,
              name: "Python",
              select: false,
              x: 0,
              y: 0,
            },
            {
              nid: 1222,
              name: "R",
              select: false,
              x: 0,
              y: 0,
            },
          ],
        },
      ],
    },
  ],
};

export const back_data: RoadData = {
  nid: 2,
  name: "Back-end",
  select: false,
  x: 0,
  y: 0,
  children: [
    {
      nid: 21,
      name: "Interactive tools",
      select: false,
      x: 0,
      y: 0,
      children: [
        {
          nid: 211,
          name: "Browser-based",
          select: false,
          x: 0,
          y: 0,
          children: [
            {
              nid: 2111,
              name: "Datawrapper",
              select: false,
              x: 0,
              y: 0,
            },
            {
              nid: 2112,
              name: "Google Sheets",
              select: false,
              x: 0,
              y: 0,
            },
            {
              nid: 2113,
              name: "plotly",
              select: false,
              x: 0,
              y: 0,
            },
            {
              nid: 2114,
              name: "RAW",
              select: false,
              x: 0,
              y: 0,
            },
          ],
        },
        {
          nid: 212,
          name: "Desktop",
          select: false,
          x: 0,
          y: 0,
          children: [
            {
              nid: 2121,
              name: "Tableau Desktop",
              select: false,
              x: 0,
              y: 0,
            },
            {
              nid: 2122,
              name: "Tableau Public",
              select: false,
              x: 0,
              y: 0,
            },
          ],
        },
      ],
    },
    {
      nid: 22,
      name: "Coding",
      select: false,
      x: 0,
      y: 0,
      children: [
        {
          nid: 221,
          name: "JavaScript",
          select: false,
          x: 0,
          y: 0,
          children: [
            {
              nid: 2211,
              name: "Charting libraries",
              select: false,
              x: 0,
              y: 0,
            },
          ],
        },
        {
          nid: 222,
          name: "Other",
          select: false,
          x: 0,
          y: 0,
          children: [
            {
              nid: 2221,
              name: "Python",
              select: false,
              x: 0,
              y: 0,
            },
            {
              nid: 2222,
              name: "R",
              select: false,
              x: 0,
              y: 0,
            },
          ],
        },
      ],
    },
  ],
};
