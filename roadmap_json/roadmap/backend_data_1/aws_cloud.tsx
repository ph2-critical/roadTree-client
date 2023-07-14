import { RoadData } from '@/roadmap_json/roadmap_data';
import { docker_and_kubernetes_data_private } from '@/roadmap_json/roadmap/backend_data_1/aws_cloud_2/docker_kubernetes';

export const back_aws_cloud_data_private: RoadData = {
  nid: 5,
  name: 'aws_cloud',
  // url: 'https://docs.aws.amazon.com/',
  description: '웹이든, 앱이든 네트워크를 활용한 서비스를 하려면 인프라 구축해야할 때가 옵니다. 이때, 시스템에 필요한 컴퓨터 및 장비들을 일일이 구매하는 것은 쉽지 않은 일 입니다.' +
    ' 보안, 비용, 확장성등 고려할 사항이 많습니다. 이때, 클라우드 서비스를 이용하면 필요한 만큼의 컴퓨터 및 장비를 사용할 수 있습니다.',
  ref: [
    {
      uuid: '51',
      title: 'AWS(Amazon Web Service) 입문자를 위한 강의',
      url: 'https://www.udemy.com/course/aws-beginner-sk/?utm_source=adwords&utm_medium=udemyads&utm_campaign=AWS_Search_la.KR_cc.KR&utm_term=_._ag_145452346958_._ad_641862376242_._kw_aws%EA%B0%95%EC%9D%98_._de_c_._dm__._pl__._ti_kwd-380915330158_._li_1009893_._pd__._&matchtype=b&gad=1',
      grade: 1,
      amount: '총 9시간',
      price: 99000,
      category: '유데미',
    },
    {
      uuid: '52',
      title: '쉽게 설명하는 AWS 기초 강좌',
      url: 'https://www.youtube.com/playlist?list=PLfth0bK2MgIan-SzGpHIbfnCnjj583K2m',
      grade: 1,
      amount: '총 6시간15분',
      price: 0,
      category: '유튜브',
    },
    {
      uuid: '53',
      title: '생활코딩AWS',
      url: 'https://www.youtube.com/playlist?list=PLuHgQVnccGMDNWIEgnXjaZ3jgbIo5zQGi',
      grade: 0,
      amount: '총 5시간37분',
      price: 0,
      category: '유튜브',
    },
    {
      uuid: '54',
      title: '따라하며 배우는 AWS 네트워크 입문',
      url: 'https://aws.amazon.com/ko/events/builders-online-series/',
      grade: 0,
      amount: '총 520쪽',
      price: 30900,
      category: '도서',
    },
    {
      uuid: '55',
      title: '클라우드 네이티브를 위한 쿠버네티스 실전 프로젝트',
      url: 'https://www.yes24.com/Product/Goods/102234803',
      grade: 0,
      amount: '총 368쪽',
      price: 30000,
      category: '도서',
    },
    {
      uuid: '56',
      title: 'Amazon VPC 네트워킹 원리와 보안',
      url: 'https://www.yes24.com/Product/Goods/106043007',
      grade: 0,
      amount: '총 428쪽',
      price: 32000,
      category: '도서',
    },
  ],
  children: [docker_and_kubernetes_data_private],
};