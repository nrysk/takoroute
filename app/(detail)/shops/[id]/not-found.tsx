import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <span className="text-6xl">🐙💨</span>
      <h2 className="text-2xl font-bold">お店が見つかりませんでした</h2>
      <Link href="/search" className="text-blue-500 hover:underline mt-4">
        検索ページに戻る
      </Link>
    </div>
  );
}
