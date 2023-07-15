import { RoadData } from '@/roadmap_json/roadmap_data';
import { personal_kubernetes_data_private } from '@/roadmap_json/roadmap/backend_data_1/aws_cloud_2/kubernetes_3/personal_data';

export const docker_and_kubernetes_data_private: RoadData = {
  nid: 30,
  depth: 2,
  name: 'Kubernetes',
  description: '',
  // url: 'https://www.docker.com/',
  ref: [
    {
      uuid: '301',
      title: '쉽게 시작하는 쿠버네티스(v1.25)',
      url: 'https://www.inflearn.com/course/%EC%BF%A0%EB%B2%84%EB%84%A4%ED%8B%B0%EC%8A%A4-%EC%89%BD%EA%B2%8C%EC%8B%9C%EC%9E%91',
      grade: 2,
      amount: '총 8시간 9분',
      price: 49500,
      category: '인프런',
    },
    {
      uuid: '302',
      title: '그림으로 배우는 쿠버네티스(v1.22-v1.24)',
      url: 'https://www.inflearn.com/course/%EA%B7%B8%EB%A6%BC%EC%9C%BC%EB%A1%9C-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EC%BF%A0%EB%B2%84%EB%84%A4%ED%8B%B0%EC%8A%A4',
      grade: 4,
      amount: '총 23시간 56분',
      price: 198000,
      category: '인프런',
    },
    {
      uuid: '303',
      title: '컨테이너 인프라 환경 구축을 위한 쿠버네티스/도커',
      url: 'https://product.kyobobook.co.kr/detail/S000001834629',
      grade: 3,
      amount: '총 580쪽',
      price: 34000,
      category: '도서',
    },
    {
      uuid: '304',
      title: '그림과 실습으로 배우는 도커 & 쿠버네티스',
      url: 'https://product.kyobobook.co.kr/detail/S000001766500',
      grade: 3,
      amount: '총 400쪽',
      price: 28000,
      category: '도서',
    },
    {
      uuid: '305',
      title: 'Kubernetes 와 Docker로 한 번에 끝내는 컨테이너 기반 MSA',
      url: 'https://fastcampus.co.kr/dev_online_kubemsa',
      grade: 4,
      amount: '총 185시간',
      price: 990000,
      category: '패스트캠퍼스',
    },
  ],
  children: [personal_kubernetes_data_private],
};
