import { Header } from '../components/Header';
import Navbar from '../components/RoadmapPage/Navbar';
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

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={"h-screen w-full"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
