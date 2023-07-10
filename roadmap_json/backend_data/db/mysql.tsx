import { RoadData } from '@/roadmap_json/roadmap_data';

export const mysql_data_private: RoadData = {
  nid: 1,
  depth: 2,
  name: 'MySQL',
  description:
    '국내에서 가장 많이 쓰이는 오픈 소스 RDBDMS입니다. 많이 쓰이는 만큼 참고할만한 레퍼런스가 많습니다. ',
  // url: 'https://www.mysql.com/',
  ref: [
    {
      uuid: '1',
      title: '생활코딩 - MySQL',
      url: 'https://www.youtube.com/playlist?list=PLuHgQVnccGMCgrP_9HL3dAcvdt8qOZxjW',
      grade: 1,
      amount: '총 15시간8분',
      price: 0,
      category: 'video',
    },
    {
      uuid: '2',
      title: '갖고노는 MySQL 데이터베이스 by 얄코',
      url: 'https://www.inflearn.com/course/%EC%96%84%EC%BD%94-%EB%A7%88%EC%9D%B4%EC%97%90%EC%8A%A4%ED%81%90%EC%97%98#curriculum',
      grade: 1,
      amount: '총 4시간26분',
      price: 18700,
      category: 'video',
    },
    {
      uuid: '3',
      title: '[애플코딩]한 번에 끝내는 SQL & Database',
      url: 'https://codingapple.com/course/sql-and-database/',
      grade: 1,
      amount: '총 6시간3분',
      price: 60000,
      category: 'video',
    },
  ],
};
