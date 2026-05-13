import { BottomNav } from "../_components/bottom-nav";
import { Header } from "../_components/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        className="h-14"
        rightAction={
          <div className="flex items-center justify-center bg-amber-50  size-10 rounded-full">
            あ
          </div>
        }
      />
      <main className="w-full">{children}</main>
      <BottomNav />
    </div>
  );
}
