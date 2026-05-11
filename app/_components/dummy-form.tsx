import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../_lib/utils";
import { TrLink } from "./ui/tr-link";

interface DummyFormProps extends ComponentPropsWithoutRef<"div"> {}

export function DummyForm({ className, ...rest }: DummyFormProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4",
        className,
      )}
      {...rest}
    >
      <h2 className="text-xl font-bold">位置情報無しで確認する用</h2>
      <TrLink href="/search/results?lat=34.6645&lon=135.5013&range=5">
        難波駅から半径3kmで検索
      </TrLink>
      <TrLink href="/search/results?lat=34.97241432054802&lon=135.41378738348078&range=2">
        能勢町から半径500mで検索
      </TrLink>
      <TrLink href="/search/results?lat=34.78740280981343&lon=135.4612203632957&range=1">
        豊中駅から半径300mで検索
      </TrLink>
    </div>
  );
}
