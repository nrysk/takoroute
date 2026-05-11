"use client";

import Link from "next/link";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="flex flex-col gap-4 min-h-svh items-center justify-center">
      <h2 className="font-bold">通信がつながらなかったようです</h2>
      <div className="flex flex-row items-center justify-center w-full ">
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          type="button"
        >
          もう一度試す
        </button>
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
