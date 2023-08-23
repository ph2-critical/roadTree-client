const kakaoKey: string = process.env.NEXT_PUBLIC_KAKAO_KEY || "";

const initKakao = () => {
    if (!Kakao.isInitialized()) {
        Kakao.init(kakaoKey);
        console.log("kakao init")
      }
}

const sendKakao = () => {
    // 메시지 공유 함수
  Kakao.Share.createCustomButton({
    container: '#kakaotalk-sharing-btn',
    // requestUrl: 'http://localhost:3000/', // 페이지 url
    templateId: 97619, // 메시지템플릿 번호
    templateArgs: {
        DESC: '십진우씨 블로그에 오신걸 환영합니다.'
    },
  });
};

// Export for usage by the rest of the app
export { initKakao, sendKakao };
