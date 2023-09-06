import Providers from "../Provider";
import { Header } from "../components/Header";
import "./globals.css";

export const metadata = {
  title: "로드트리",
  description: "비전공자 개발자들을 위한 로드맵",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <meta property="og:title" content="roadtree" />
        <meta property="og:url" content="https://nobase.site" />
        <meta
          property="og:description"
          content="당신의 공부 러닝 메이트, 이제 RoadTree 와 함께"
        />
        <meta property="og:image" content="/logo.png" />
      </head>
      <body className={"h-screenWithoutHeader w-full dark:bg-gray-900"}>
        <Providers>
          <div id="modal_root"></div>
          <Header />
          <div className="mt-[72px]">{children}</div>
        </Providers>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.3.0/kakao.min.js"
          integrity="sha384-70k0rrouSYPWJt7q9rSTKpiTfX6USlMYjZUtr1Du+9o4cGvhPAWxngdtVZDdErlh"
          crossOrigin="anonymous"
        ></script>
        <script src="https://unpkg.com/aos@next/dist/aos.js" />
        <script>AOS.init();</script>
      </body>
    </html>
  );
}
