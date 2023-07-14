import { RoadData } from '@/roadmap_json/roadmap_data';
import { mysql_data_private } from '@/roadmap_json/roadmap/backend_data_1/db_2/mysql';
import { mongodb_data_private } from '@/roadmap_json/roadmap/backend_data_1/db_2/mongodb';
import { redis_data_private } from '@/roadmap_json/roadmap/backend_data_1/db_2/redis';

export const back_database_data_private: RoadData = {
  nid: 3,
  name: 'database',
  description: '데이터베이스가 존재하기 이전에는 파일 시스템으로 데이터를 관리했습니다. 파일 시스템은 데이터를 저장, 삭제, 수정 등을 할 때 발생하는 데이터의 종속성, 중복성 무결성을 보장할 수 없습니다. 이러한 문제점을 해결하기 위해 등장한 것이 바로 데이터베이스입니다. 데이터베이스는 데이터를 통합하여 관리하고, 저장된 데이터를 공유할 수 있으며, 데이터의 무결성을 보장하고, 데이터의 중복을 제거하고, 데이터를 동시에 공유할 수 있습니다. 데이터베이스는 이러한 장점을 가지고 있기 때문에 현재의 시스템에서 가장 많이 사용되는 데이터 관리 시스템입니다.',
  ref: [
    {
      uuid: '21',
      title: 'Do it SQL 입문',
      url: 'https://www.youtube.com/playlist?list=PLG7te9eYUi7usbPInfbh24eE3lsbjGxRw',
      grade: 0,
      amount: '총 2시간23분',
      price: 0,
      category: '유튜브',
    },
    {
      uuid: '22',
      title: '칸 아카데미 SQL',
      url: 'https://ko.khanacademy.org/computing/computer-programming/sql?ref=blog.selectfromuser.com',
      grade: 1,
      amount: '총 37챕터',
      price: 0,
      category: 'posting',
    },
    {
      uuid: '23',
      title: '가장 쉬운 데이터베이스 설계 책',
      url: 'https://www.yes24.com/Product/goods/12191214?art_bl=7769257',
      grade: 0,
      amount: '총 453쪽',
      price: 27000,
      category: '도서',
    },
    {
      uuid: '24',
      title: '새로쓴 대용량 데이터베이스 솔루션 Vol.1 [ 개정판 ]',
      url: 'https://www.yes24.com/Product/Goods/1820583',
      grade: 3,
      amount: '총 634쪽',
      price: 45000,
      category: '도서',
    },
    {
      uuid: '25',
      title: 'W3Schools SQL',
      url: 'https://www.w3schools.com/sql/?ref=blog.selectfromuser.com',
      grade: 0,
      amount: '총 58챕터',
      price: 0,
      category: 'posting',
    },
    {
      uuid: '26',
      title: '손에 잡히는 10분 SQL',
      url: 'https://product.kyobobook.co.kr/detail/S000001033096',
      grade: 0,
      amount: '총 320쪽',
      price: 18000,
      category: '도서',
    },
    {
      uuid: '27',
      title: '데이터베이스를 지탱하는 기술',
      url: 'https://www.yes24.com/Product/goods/7957807?scode=032&OzSrank=7',
      grade: 0,
      amount: '총 368쪽',
      price: 25000,
      category: '도서',
    },
  ],
  children: [mysql_data_private, mongodb_data_private, redis_data_private],
};