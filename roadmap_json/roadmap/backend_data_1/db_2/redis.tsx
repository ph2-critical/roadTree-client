import { RoadData } from '@/roadmap_json/roadmap_data';
import { personal_redis_data_private } from '@/roadmap_json/roadmap/backend_data_1/db_2/redis_3/personal_data';

export const redis_data_private: RoadData = {
  nid: 13,
  depth: 2,
  name: 'Redis(레디스)',
  description:
    '레디스는 in-memory 형태의 No-SQL로써 Key-Value 쌍의 해쉬 맵 형태의 데이터베이스입니다,인메모리DB라 속도가 빠르고 확장성 및 대량 데이터 처리능력이 좋아 java개발자들에게 인기가 좋습니다. 또한 다중서버에서 데이터를 공유할 수 있어서 세션관리나 캐싱에도 많이 사용됩니다.',
  // url: 'https://redis.io/',
  ref: [
    {
      uuid: '131',
      title: '레디스 게이트(커뮤니티)',
      url: 'http://redisgate.kr/redisgate/ent/ent_intro.php',
      grade: 3,
      amount: '',
      price: 0,
      category: '커뮤니티',
    },
    {
      uuid: '132',
      title: '[우아한테크세미나] 191121 우아한레디스 by 강대명님',
      url: 'https://youtu.be/mPB2CZiAkKM',
      grade: 2,
      amount: '총 1시간39분',
      price: 0,
      category: '유튜브',
    },
    {
      uuid: '133',
      title: '빅데이터 저장 및 분석을 위한 NoSQL & Redis',
      url: 'https://product.kyobobook.co.kr/detail/S000001594159',
      grade: 2,
      amount: '총 282쪽',
      price: 32000,
      category: '도서',
    },
  ],
  children: [personal_redis_data_private],
};
