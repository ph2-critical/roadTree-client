import { getSubmissionUserProps } from "@/src/api/submission/submission";
const { Kakao } = window as any;

const kakaoKey: string = process.env.NEXT_PUBLIC_KAKAO_KEY || "";

const initKakao = () => {
  if (!Kakao.isInitialized()) {
    Kakao.init(kakaoKey);
  }
};

const sendKakao = (submission: getSubmissionUserProps) => {
  const message: string =
    `✏️ 데일리 학습 인증(${submission.created_at.substring(0, 10)})\n` +
    "유형 : " +
    submission.study +
    "\n\n" +
    submission.content +
    "\n\n" +
    submission.url;
  Kakao.Share.sendDefault({
    objectType: "text",
    text: message,
    link: {
      // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
      mobileWebUrl: "https://nobase.site",
      webUrl: "https://nobase.site",
    },
    buttonTitle: "기록하러가기",
  });
};

// Export for usage by the rest of the app
export { initKakao, sendKakao };
