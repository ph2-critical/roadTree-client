import { RoadData } from '@/roadmap_json/roadmap_data';


export const personal_mongodb_data_private: RoadData = {
  nid: 11100,
  depth: 3,
  name: 'MongoDB 개인 자료들',
  description: '개개인의 공부한 블로그을 공유하는 곳입니다. 개인 블로그를 통해 다른 사람들의 공부 방법을 참고하고, 자신의 공부를 정리하는 방법을 배울 수 있습니다.',
  //url:'',
  ref: [
    {
      uuid: '11100000',
      title: '몽고DB 필수 디자인 가이드',
      url: 'https://youtu.be/ZGc4rmdtxQE',
      grade: 2,
      amount: '총 2분',
      price: 0,
      category: '유튜브',
    },
    {
      uuid: '11100001',
      title: 'MongoDB vs MySQL 비교',
      url: 'https://www.mongodb.com/ko-kr/compare/mongodb-mysql',
      grade: 3,
      amount: '',
      price: 0,
      category: '기업블로그',
    },
  ],

}

