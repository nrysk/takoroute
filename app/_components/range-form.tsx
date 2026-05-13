"use client";

import { useRouter } from "next/navigation";
import { type ComponentPropsWithoutRef, useState } from "react";
import { cn } from "../_lib/utils";
import { RangeSelector } from "./range-selector";
import { TrButton } from "./ui/tr-button";

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
      {
        enableHighAccuracy: false, // 低精度
        timeout: 10000, // タイムアウト時間（10秒）
        maximumAge: 30000, // キャッシュ（30秒以内の位置情報を使用）
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
      <h2 className="text-xl font-bold">現在地からの距離で探す</h2>
      <RangeSelector selectedId={selectedId} onRangeSelect={setSelectedId} />
      <TrButton onClick={handleSubmit} disabled={isLoading} variant="secondary">
        {isLoading ? "検索中..." : "この条件で検索"}
      </TrButton>
    </div>
  );
}
