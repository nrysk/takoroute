"use client";

import { useRouter } from "next/navigation";
import { type ComponentPropsWithoutRef, useState } from "react";
import { cn } from "../_lib/utils";
import { RangeSelector } from "./range-selector";

interface RangeFormProps extends ComponentPropsWithoutRef<"div"> {}

export function RangeForm({ className, ...rest }: RangeFormProps) {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // 検索時の処理
  // 現在位置と選択された範囲をもとに、一覧画面に遷移する
  const handleSubmit = () => {
    setIsLoading(true);

    if (!navigator.geolocation) {
      alert("ご利用のブラウザは位置情報に対応していません。");
      setIsLoading(false);
      return;
    }

    // コールバックで成功と失敗の両方を処理する
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        router.push(
          `/search/results?lat=${latitude}&lon=${longitude}&range=${selectedId}`,
        );
        setIsLoading(false);
      },
      () => {
        alert(
          "位置情報の取得に失敗しました。位置情報の利用を許可しているか確認してください。",
        );
        setIsLoading(false);
      },
    );
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4",
        className,
      )}
      {...rest}
    >
      <h2 className="text-xl font-bold">現在地から探す</h2>
      <RangeSelector selectedId={selectedId} onRangeSelect={setSelectedId} />
      <button
        className="px-4 py-2 bg-sky-500 text-white rounded-lg active:bg-sky-600 transition-colors"
        onClick={handleSubmit}
        type="button"
      >
        {isLoading ? "検索中..." : "この条件で検索"}
      </button>
      <button
        className="px-4 py-2 bg-sky-500 text-white rounded-lg active:bg-sky-600 transition-colors"
        onClick={() =>
          router.push(
            `/search/results?lat=34.6645&lon=135.5013&range=${selectedId}`,
          )
        }
        type="button"
      >
        {isLoading ? "検索中..." : "位置情報無しで確認用（難波駅周辺）"}
      </button>
    </div>
  );
}
