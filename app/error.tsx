"use client";

import { TrButton } from "./_components/ui/tr-button";
import { TrLink } from "./_components/ui/tr-link";

const IKA_ANIMATIONS = [
  { id: 1, delay: "0s" },
  { id: 2, delay: "0.5s" },
  { id: 3, delay: "1s" },
  { id: 4, delay: "1.5s" },
];

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="flex flex-col gap-4 min-h-svh items-center justify-center ">
      <span className="flex flex-row gap-2 text-6xl select-none">
        {IKA_ANIMATIONS.map(({ id, delay }) => (
          <span
            key={id}
            className="animate-bounce"
            style={{ animationDelay: delay, animationDuration: "2s" }}
          >
            🦑
          </span>
        ))}
      </span>

      <h2 className="font-bold">通信がつながらなかったようです</h2>
      <div className="flex flex-col gap-3 items-center justify-center w-full ">
        <TrButton onClick={reset} variant="secondary">
          もう一度試す
        </TrButton>
        <TrLink href="/search" variant="primary">
          検索ページに戻る
        </TrLink>
      </div>
    </div>
  );
}
