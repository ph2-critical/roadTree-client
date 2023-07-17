import { RoadData } from '@/roadmap_json/roadmap_data';
import { personal_react_data_private } from '@/roadmap_json/roadmap/frontend_data_1/framework_2/react_3/personal_data';

export const front_react_data_private: RoadData = {
  nid: 330,
  depth: 2,
  name: 'React',
  description : "React는 사용자 인터페이스(UI)를 구현하기 위한 라이브러리입니다. React는 사용자 인터페이스를 구성하는 각 요소를 컴포넌트 단위로 만들어 복잡한 UI를 구성할 수 있도록 돕습니다. 가상돔을 활용하여 JS만을 사용할 떄 보다 훨씬 효율적인 UI를 구현할 수 있습니다.",
  ref: [
    {
      uuid: '330000',
      title : "생활코딩 React",
      url : "https://opentutorials.org/course/4900",
      grade: 1,
      amount : "총 1시간 43분",
      price : 0,
      category : "유튜브"
    },
    {
      uuid: '330001',
      title : "노마드코더 영화 웹서비스 만들기",
      url : "https://nomadcoders.co/react-for-beginners",
      grade: 1,
      amount : "총 6시간 12분",
      price : 0,
      category : "노마드코더"
    },
    {
      uuid: '330002',
      title : "코딩애플 기초부터 쇼핑몰 프로젝트까지 ",
      url : "https://codingapple.com/course/react-basic/",
      grade: 1,
      amount : "총 8시간 3분",
      price : 83000,
      category : "코딩애플"
    },
    {
      uuid: '330003',
      title : "리액트를 다루는 기술(김민준)",
      url : "https://thebook.io/080203/",
      grade: 1,
      amount : "총 908쪽",
      price : 0,
      category : "도서"
    },{
      uuid: '330004',
      title : "리액트 디자인 패턴과 모범 사례",
      url : "https://product.kyobobook.co.kr/detail/S000001804610",
      grade: 4,
      amount : "총 400쪽",
      price : 30000,
      category : "도서"

    }

  ],
  children : [personal_react_data_private]
}