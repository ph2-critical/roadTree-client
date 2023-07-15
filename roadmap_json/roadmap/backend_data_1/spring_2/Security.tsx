import { RoadData } from '@/roadmap_json/roadmap_data';
import { personal_springSecurity_data_private } from '@/roadmap_json/roadmap/backend_data_1/spring_2/Security_3/personal_data';
// import { personal_springMVC_data_private } from '@/roadmap_json/backend_data/spring/MVC/personal_data';

export const spring_security_data_private: RoadData = {
  nid: 18,
  depth: 2,
  name: 'spring security',
  description: '스프링에서 제공하는 보안 프레임워크',
  //"url": "https://spring.io/projects/spring-security",
  ref: [
    {
      uuid: '181',
      title:
        '스프링 시큐리티 OAuth2 - Spring Boot 기반으로 개발하는 Spring Security OAuth2',
      url: 'https://www.inflearn.com/course/%EC%A0%95%EC%88%98%EC%9B%90-%EC%8A%A4%ED%94%84%EB%A7%81-%EC%8B%9C%ED%81%90%EB%A6%AC%ED%8B%B0',
      grade: 3,
      amount: '총 44시31분',
      price: 121000,
      category: '인프런',
    },
    {
      uuid: '182',
      title: '스프링 시큐리티 - Spring Boot 기반으로 개발하는 Spring Security',
      url: 'https://www.inflearn.com/course/%EC%BD%94%EC%96%B4-%EC%8A%A4%ED%94%84%EB%A7%81-%EC%8B%9C%ED%81%90%EB%A6%AC%ED%8B%B0',
      grade: 2,
      amount: '총 20시간58분',
      price: 88000,
      category: '인프런',
    },
    {
      uuid: '183',
      title:
        '[초급] 찍어먹자! 코틀린과 Spring Security + JWT로 회원가입 만들기',
      url: 'https://www.inflearn.com/course/%EC%BD%94%ED%8B%80%EB%A6%B0%EA%B3%BC-spring-security-jwt-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85%EB%A7%8C%EB%93%A4%EA%B8%B0#curriculum',
      grade: 3,
      amount: '총 2시간2분',
      price: 0,
      category: '인프런',
    },
    {
      uuid: '184',
      title: '호돌맨의 요절복통 개발쇼 (SpringBoot, Vue.JS, AWS)',
      url: 'https://www.inflearn.com/course/%ED%98%B8%EB%8F%8C%EB%A7%A8-%EC%9A%94%EC%A0%88%EB%B3%B5%ED%86%B5-%EA%B0%9C%EB%B0%9C%EC%87%BC#curriculum',
      grade: 4,
      amount: '총 22시간10분',
      price: 86900,
      category: '인프런',
    },
    {
      uuid: '185',
      title: '토리맘의 한글라이즈 프로젝트',
      url: 'https://godekdls.github.io/Spring%20Security/contents/',
      grade: 3,
      amount: '',
      price: 0,
      category: '공식문서한글화',
    },
  ],
  children: [personal_springSecurity_data_private],
};
