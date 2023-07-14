import { RoadData } from '@/roadmap_json/roadmap_data';
import { personal_springJUnit_data_private } from '@/roadmap_json/roadmap/backend_data_1/spring_2/JUnit_3/personal_data';

export const spring_junit_data_private: RoadData = {
  nid: 17,
  depth: 2,
  name: 'Spring JUnit',
  description:
    'spring JUnit은 자바 개발자 93% 사용하는 단위 테스트 프레임워크이며, java8이상 버전부터 지원합니다. Springboot의 경우는 2.2버전부터 기본적으로 제공되고 있으며, 추후 자동배포화를 구축할 때에도 필요하기때문에 거의 필수로 가지고 갑니다.',
  //"url": "https://docs.spring.io/spring-framework/reference/testing.html#testing",
  ref: [
    {
      uuid: '171',
      title: 'Java/Spring 테스트를 추가하고 싶은 개발자들의 오답노트',
      url: 'https://www.inflearn.com/course/%EC%9E%90%EB%B0%94-%EC%8A%A4%ED%94%84%EB%A7%81-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EA%B0%9C%EB%B0%9C%EC%9E%90-%EC%98%A4%EB%8B%B5%EB%85%B8%ED%8A%B8#curriculum',
      grade: 2,
      amount: '총 6시간20',
      price: 59400,
      category: '인프런',
    },
    {
      uuid: '172',
      title: '[유데미]Learn Java Unit Testing with Junit & Mockito in 30 Steps',
      url: 'https://www.udemy.com/course/mockito-tutorial-with-junit-examples/',
      grade: 3,
      amount: '총 4시간30분',
      price: 79000,
      category: '유데미',
    },
    {
      uuid: '173',
      title: 'JUnit5 공식문서',
      url: 'https://junit.org/junit5/docs/current/user-guide/',
      grade: 4,
      amount: '',
      price: 0,
      category: 'posting',
    },
  ],
  children: [personal_springJUnit_data_private],
};
