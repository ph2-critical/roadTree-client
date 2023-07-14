import { RoadData } from '@/roadmap_json/roadmap_data';
import { personal_mongodb_data_private } from '@/roadmap_json/roadmap/backend_data_1/db_2/mongodb_3/personal_data';

export const mongodb_data_private: RoadData = {
  nid: 12,
  depth: 2,
  name: 'MongoDB',
  description:
    'NoSQL로 분류되는 DBMS의 한 종류로 api통신을 많이해보셨다면 친숙한 JSON형태의 스키마형 문서 BSON을 사용한다.국내 NoSQL중에 가장 대중적으로 사용하는데, 빠르게 변화는 스타트업 시장에 맞춰 Node.js에 친숙한 개발자들은 자연스럽게 몽고DB를 사용하게 됩니다.그러므로 js에 친숙하고 서버도 공부하고 있다면 몽고DB를 공부하는 것도 좋습니다.',
  // url: 'https://www.mongodb.com/',
  ref: [
    {
      uuid: '121',
      title: '2시간만에 웹서버 쉽게 개발하기 (Node.js + MongoDB)',
      url: 'https://www.youtube.com/playlist?list=PLfLgtT94nNq1qmsvIii_CAxFlD7tvB5NE',
      grade: 1,
      amount: '총 1시간3분',
      price: 0,
      category: '유튜브',
    },
    {
      uuid: '122',
      title: '노드교과서 개정3판(몽고DB 부분만) ',
      url: 'https://youtube.com/playlist?list=PLcdZj4ySPhX2su16PGiXRiegRl0oQvIBO',
      grade: 1,
      amount: '총 1시간13분',
      price: 0,
      category: '유튜브',
    },
    {
      uuid: '123',
      title: 'MongoDB기초부터 실무까지(feat.Node.js)',
      url: 'https://www.inflearn.com/course/%EB%AA%BD%EA%B3%A0%EB%94%94%EB%B9%84-%EA%B8%B0%EC%B4%88-%EC%8B%A4%EB%AC%B4#curriculum',
      grade: 2,
      amount: '총 11시간56분',
      price: 77000,
      category: '인프런',
    },
    {
      uuid: '124',
      title:
        '처음하는 MongoDB(몽고DB) 와 NoSQL(빅데이터) 데이터베이스 부트캠프 [입문부터 활용까지] ',
      url: 'https://www.inflearn.com/course/nosql-%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EB%AA%BD%EA%B3%A0db-%EC%9E%94%EC%9E%AC%EB%AF%B8%EC%BD%94%EB%94%A9#curriculum',
      grade: 2,
      amount: '총 9시간36분',
      price: 66000,
      category: '인프런',
    },
    {
      uuid: '125',
      title: 'MongoDB vs MySQL 비교',
      url: 'https://www.mongodb.com/ko-kr/compare/mongodb-mysql',
      grade: 3,
      amount: '',
      price: 0,
      category: '기업블로그',
    },
  ],
  children: [personal_mongodb_data_private]
};
