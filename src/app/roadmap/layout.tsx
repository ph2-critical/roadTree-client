import { Header } from "@/src/components/Header";

export default function ContentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="mt-[72px]">{children}</div>
    </>
  );
}
