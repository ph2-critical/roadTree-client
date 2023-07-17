import { RoadData } from '@/roadmap_json/roadmap_data';
import { personal_python_data_private } from '@/roadmap_json/roadmap/backend_data_1/language_2/python_3/personal_blog';

export const python_data_private: RoadData = {
  nid: 101,
  depth: 2,
  name: 'python',
  description:
    'python으로 서버개발도 가능합니다.다른 언어보다 사람에 맞춘 개발언어로 비교적 배우기 쉬운 언어입니다.라이브러리도 많고, 데이터분석, 머신러닝, 딥러닝 등 다양한 분야에서 사용되고 있습니다.',
  //url =''
  ref: [
    {
      uuid: '101000',
      title:
        '파이썬 코딩 무료 강의 (기본편) - 6시간 뒤면 여러분도 개발자가 될 수 있어요',
      url: 'https://youtu.be/kWiCuklohdY',
      grade: 0,
      amount: '총 6시간',
      price: 0,
      category: '유튜브',
    },
    {
      uuid: '101001',
      title: '[조코딩] 파이썬기초 2023 점프 투 파이썬',
      url: 'https://youtube.com/playlist?list=PLU9-uwewPMe05-khW3YcDEaHMk_qA-7lI',
      grade: 1,
      amount: '총 7시간',
      price: 0,
      category: '유튜브',
    },
    {
      uuid: '101003',
      title: '점프 투 파이썬',
      url: 'https://wikidocs.net/2',
      grade: 1,
      amount: '',
      price: 0,
      category: '도서',
    },
    {
      uuid: '101004',
      title: '생활코딩 Python 입문수업',
      url: 'https://youtube.com/playlist?list=PLuHgQVnccGMDtnr4nTSFfmocHL5FeH1xR',
      grade: 1,
      amount: '1시간 35분',
      price: 0,
      category: '유튜브',
    },
    {
      uuid: '101005',
      title: '파이썬 코딩의 기술(개정2판)',
      url: 'https://www.yes24.com/Product/Goods/94197582',
      grade: 2,
      amount: '총 640쪽',
      price: 32000,
      category: '도서',
    },
    {
      uuid: '101006',
      title:
        '【한글자막】 Python 부트캠프 : 100개의 프로젝트로 Python 개발 완전 정복',
      url: 'https://www.udemy.com/share/105Cic/',
      grade: 2,
      amount: '총 60시간',
      price: 88000,
      category: '유데미',
    },
    {
      uuid: '101007',
      title: '[조코딩] 파이썬 응용하기',
      url: 'https://www.youtube.com/playlist?list=PLU9-uwewPMe0ImjRBu-TLecU-LBhZvX2b',
      grade: 2,
      amount: '총 3시간 34분',
      price: 0,
      category: '유튜브',
    },
    {
      uuid: '101008',
      title: '[나도코딩] 파이썬 활용 1 ~ 7',
      url: 'https://youtube.com/playlist?list=PLMsa_0kAjjrd8hYYCwbAuDsXZmHpqHvlV',
      grade: 3,
      amount: '총 46시간 20분',
      price: 0,
      category: '유튜브',
    },
  ],
  children: [personal_python_data_private],
};
