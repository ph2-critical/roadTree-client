import { Header } from '../components/Header';
import { SideBar } from '../components/SideBar';
import './globals.css';

export const metadata = {
  title: '로드트리',
  description: '비전공자 개발자들을 위한 로드맵',
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
        <meta
          property="og:title"
          content="roadtree"
        />
        <meta
          property="og:description"
          content="당신의 공부 러닝 메이트, 이제 RoadTree 와 함께"
        />
        <meta
          property="og:image"
          content="/logo.png"
        />
      </head>
      <body className={'h-screenWithoutHeader w-full dark:bg-gray-900'}>
        <Header />
        {children}
        <script src="https://cdn.tailwindcss.com"></script>
      </body>
    </html>
  );
}
