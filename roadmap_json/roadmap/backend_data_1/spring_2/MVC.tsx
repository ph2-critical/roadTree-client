import { RoadData } from '@/roadmap_json/roadmap_data';
import { personal_springMVC_data_private } from '@/roadmap_json/roadmap/backend_data_1/spring_2/MVC_3/personal_data';
// import { personal_springMVC_data_private } from '@/roadmap_json/backend_data/spring/MVC/personal_data';

export const spring_mvc_data_private: RoadData = {
  nid: 15,
  depth: 2,
  name: 'Spring MVC',
  description:
    'Spring MVC는 디자인패턴을 말하며, Model-View-Controller 패턴을 사용하여 구현되었습니다. 각 영역이 확실히 구분되어 있기때문에 여러개발자가 역할을 나누어 개발 할 수 있고 중복코드없이 확장성 있는 유연한 코딩도 가능합니다. 다만, 규모가 크고 파일이 많아지기 때문에 적은 개발자 인원으로는 오히려 유지보수 시간이 길어질 수 있습니다.',
  //"url": "https://docs.spring.io/spring-framework/docs/3.2.x/spring-framework-reference/html/mvc.html",
  ref: [
    {
      uuid: '151',
      title: '스프링 MVC 하루만에 배우기',
      url: 'https://wikidocs.net/115235',
      grade: 2,
      amount: '',
      price: 0,
      category: '위키독스',
    },
    {
      uuid: '152',
      title: '스프링 MVC 1편 - 백엔드 웹 개발 핵심 기술',
      url: 'https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-mvc-1',
      grade: 2,
      amount: '총 21시간5분',
      price: 99000,
      category: '인프런',
    },
    {
      uuid: '153',
      title: '스프링 MVC 2편 - 백엔드 웹 개발 핵심 기술',
      url: 'https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-mvc-2',
      grade: 3,
      amount: '총 15시간22분',
      price: 121000,
      category: '인프런',
    },
    {
      uuid: '154',
      title:
        '【한글자막】 Spring Boot 3 & Spring Framework 6 마스터 (2023 Java 최신)',
      url: 'https://www.udemy.com/course/spring-boot-and-spring-framework-korean/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Spring_Search_la.KR_cc.KR&utm_term=_._ag_150291554763_._ad_663807185195_._kw_spring+framework_._de_c_._dm__._pl__._ti_kwd-261473458_._li_1009893_._pd__._&matchtype=b&gad=1',
      grade: 3,
      amount: '총 38시간',
      price: 23000,
      category: '유데미',
    },
  ],
  children: [personal_springMVC_data_private],
};
