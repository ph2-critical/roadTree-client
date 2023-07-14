import { RoadData } from '@/roadmap_json/roadmap_data';
import { personal_springDB_data_private } from '@/roadmap_json/roadmap/backend_data_1/spring_2/db_3/personal_data';

export const spring_db_data_private: RoadData = {
  nid: 16,
  depth: 2,
  name: 'Spring DB',
  description:
    'spring DB는 실제 외부에 있는 다른 DB에 접근할 수 있는 기술들을 제공해줍니다. 서버와 DB가 연결하는 과정은 엄청나게 많은 리소스가 필요한데, Spring은 이 경우를 driver로 미리 준비해두는 pool를 사용하여 관리하기 때문에 Spring DB에 대해 알고 사용하면 좋습니다.',
  // "url": "https://spring.io/projects/spring-data",
  ref: [
    {
      uuid: '161',
      title: '[spring] DB를 사용하는 주요 기술 5가지',
      url: 'https://velog.io/@woply/%EC%8A%A4%ED%94%84%EB%A7%81%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%A3%BC%EC%9A%94-DB-%EC%82%AC%EC%9A%A9-%EB%B0%A9%EB%B2%95-5%EA%B0%80%EC%A7%80?comment_id=9b2d3158-2750-41ef-8a0c-c0f43f1689ef',
      grade: 1,
      amount: '',
      price: 0,
      category: '개인블로그',
    },
    {
      uuid: '162',
      title: '스프링 DB 1편 - 데이터 접근 핵심 원리',
      url: 'https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-db-1',
      grade: 2,
      amount: '총 10시간4분',
      price: 77000,
      category: '인프런',
    },
    {
      uuid: '163',
      title: '스프링 DB 2편 - 데이터 접근 활용 기술',
      url: 'https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-db-2',
      grade: 3,
      amount: '총 13시간59분',
      price: 99000,
      category: '인프런',
    },
  ],
  children: [personal_springDB_data_private],
};
