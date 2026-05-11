"use client";

import Link from "next/link";
import { Button } from "./_components/ui/tr-button";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="flex flex-col gap-4 min-h-svh items-center justify-center">
      <h2 className="font-bold">通信がつながらなかったようです</h2>
      <div className="flex flex-row items-center justify-center w-full ">
        <Button onClick={reset}>もう一度試す</Button>
        <Link
          href="/search"
          className="ml-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          検索に戻る
        </Link>
      </div>
    </div>
  );
}
