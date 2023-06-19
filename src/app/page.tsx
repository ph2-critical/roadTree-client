import { SubHeader } from '../components/Main/subHeader';
import { PostCard } from '../components/Post/postCard';
import { CheckIcon } from './assets/Icons';
export default function Home() {
  return (
    <>
      <SubHeader />
      <main>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </main>
    </>
  );
}
