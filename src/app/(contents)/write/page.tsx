import dynamic from "next/dynamic";
const ToastEditor = dynamic(() => import("@/src/components/Write/editor"), {
  ssr: false,
});

export default function Write() {
  return (
    <main>
      <ToastEditor />
    </main>
  );
}
