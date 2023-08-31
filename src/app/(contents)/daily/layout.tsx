import { SideBar } from "@/src/components/SideBar";

export default function DailyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center">
      <SideBar />
      <div className="w-full ml-60">{children}</div>
    </div>
  );
}
