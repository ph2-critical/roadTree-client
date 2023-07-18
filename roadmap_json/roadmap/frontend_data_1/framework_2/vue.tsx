import { RoadData } from '@/roadmap_json/roadmap_data';
import { personal_vue_data_private } from '@/roadmap_json/roadmap/frontend_data_1/framework_2/vue_3/personal_data';

export const front_vue_data_private: RoadData = {
  nid: 331,
  depth: 2,
  name: 'Vue',
  description : "Vue 역시 사용자 인터페이스를 구성하기 위한 프레임워크입니다. 상대적으로 배우기 쉽기 때문에 빠른 개발이 필요하거나 입문하기엔 좋은 프레임워크입니다. React와 마찬가지로 가상돔을 활용하여 효율적인 UI를 구현할 수 있습니다.",
  ref: [
    {
      uuid: '331000',
      title : "캡틴판교  Vue2 시작하기",
      url : "https://www.inflearn.com/course/age-of-vuejs",
      grade: 1,
      amount : "총 5시간 25분",
      price : 44000,
      category : "인프런"
    },
    {
      uuid: '331001',
      title : "Do it Vue.js 입문",
      url : "https://www.yes24.com/Product/Goods/58206961",
      grade: 1,
      amount : "총 232쪽",
      price : 15000,
      category : "도서"
    },
    {
      uuid: '331002',
      title : "고양이도 할 수 있는 Vue.js",
      url : "https://rintiantta.github.io/jpub-vue/guide/#%ED%95%99%EC%8A%B5-%ED%8F%AC%EC%9D%B8%ED%8A%B8",
      grade: 1,
      amount : "총 368쪽",
      price : 83000,
      category : "개인블로그"
    },
    {
      uuid: '331003',
      title : "인스타그램을 만들며 배워보는 Vue.js 3",
      url : "https://codingapple.com/course/vue-js/",
      grade: 1,
      amount : "총 8시간 17분",
      price : 80000,
      category : "코딩애플"
    },

  ],
  children : [personal_vue_data_private]
}