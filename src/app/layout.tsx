import Providers from "../Provider";
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
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <meta property="og:title" content="roadtree" />
        <meta property="og:url" content="https://roadtree.site" />
        <meta
          property="og:description"
          content="당신의 공부 러닝 메이트, 이제 RoadTree 와 함께"
        />
        <meta property="og:image" content="/logo.png" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11323385873"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-11323385873');
                    `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '676172684563621');
                        fbq('track', 'PageView');
                    `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=676172684563621&ev=PageView&noscript=1"
          />
        </noscript>
      </head>

      <body
        className={"h-screenWithoutHeader w-full "}
        suppressHydrationWarning={true}
      >
        <Providers>
          <div id="modal_root"></div>
          {children}
        </Providers>
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
