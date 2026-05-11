"use client";

import { ComponentPropsWithoutRef } from "react";
import { cn } from "../_lib/utils";
import Image from "next/image";

const RADIUS_OPTIONS = [
  { id: 1, label: "300m", count: 1 },
  { id: 2, label: "500m", count: 2 },
  { id: 3, label: "1km", count: 3 },
  { id: 4, label: "2km", count: 4 },
  { id: 5, label: "3km", count: 5 },
] as const;

interface RangeSelectorProps extends ComponentPropsWithoutRef<"div"> {
  selectedId: number;
  onRangeSelect?: (id: number) => void;
}

export function RangeSelector({
  selectedId,
  onRangeSelect = () => {},
  className,
  ...rest
}: RangeSelectorProps) {
  return (
    <div className={cn("flex flex-row flex-wrap gap-2", className)} {...rest}>
      {RADIUS_OPTIONS.map(({ id, label }) => (
        <RangeCard
          key={id}
          label={label}
          count={id}
          selected={id === selectedId}
          onClick={() => onRangeSelect(id)}
          className="flex-1 basis-3/12 min-w-16"
        />
      ))}
    </div>
  );
}

const TAKOYAKI_IDS = ["t1", "t2", "t3", "t4", "t5"] as const;

interface RangeCardProps extends ComponentPropsWithoutRef<"button"> {
  label: string;
  count: number;
  selected: boolean;
  onClick?: () => void;
}

function RangeCard({
  label,
  count,
  selected,
  onClick,
  className,
}: RangeCardProps) {
  return (
    <button
      className={cn(
        "flex flex-col items-center justify-center min-w-18 h-22 bg-white rounded-xl ring-inset transition-colors hover:bg-gray-100",
        className,
        {
          "ring-3 ring-amber-800": selected,
        },
      )}
      onClick={onClick}
      type="button"
    >
      {/* count個のたこ焼きの塊 */}
      <div className="flex flex-row items-center -space-x-6">
        {Array.from({ length: count }).map((_, index) => (
          <Image
            src="/takoyaki.png"
            alt="takoyaki"
            key={TAKOYAKI_IDS[index]}
            className="size-8 object-cover"
            width={32}
            height={32}
          />
        ))}
      </div>
      <span className="text-sm font-bold">{label}</span>
    </button>
  );
}
