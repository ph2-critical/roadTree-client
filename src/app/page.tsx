import { Header } from '../components/Header';
import { DeleteModal } from '../components/Modal/deleteModal';
import { PostCard } from '../components/Post/postCard';
import { SideBar } from '../components/SideBar';

export default function Home() {
  return (
    // <main className="flex flex-col items-center justify-between min-h-screen p-24">
    //   hi I'm seonho 유선호입니다.
    // </main>
    <>
      <Header />
      {/* <SideBar /> */}
      <button className="write-btn">작성하기</button>
      <button className="category-btn">정보 공유</button>
      <button className="w-20 text-xs h-7 md:text-sm md:w-32 md:h-8 write-btn">
        등록
      </button>
      <button className="modal-btn text-gray1">취소하기</button>
      <button className="text-white modal-btn bg-gray1">삭제하기</button>
      <PostCard />
      <PostCard />
      <DeleteModal />
    </>
  );
}
