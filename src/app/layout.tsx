import Providers from "../Provider";
import { Header } from "../components/Header";
// import { SideBar } from "../components/SideBar";
import "./globals.css";

export const metadata = {
  title: "로드트리",
  description: "비전공자 개발자들을 위한 로드맵",
};

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         {/* <Header />
//         <SideBar /> */}
//         <div className="flex flex-col items-center justify-between min-h-screen p-24 ml-72">
//           {children}
//         </div>
//       </body>
//     </html>
//   );
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
          <div className="mt-[73px] max-w-7xl mx-auto">{children}</div>
        </Providers>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        <script src="https://cdn.tailwindcss.com"></script>
      </body>
    </html>
  );
}
