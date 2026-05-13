import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../_lib/utils";
import { TrLink } from "./ui/tr-link";

interface PaginationProps extends ComponentPropsWithoutRef<"div"> {
  total: number;
  current: number;
  count: number;
  baseUrl: string;
  searchParams?: Record<string, string>;
}

export function Pagination({
  total,
  current,
  count,
  baseUrl,
  searchParams = {},
  className,
  ...rest
}: PaginationProps) {
  const hasNext = current + count <= total;
  const hasPrev = current - count > 0;

  return (
    <div
      className={cn(
        "flex flex-row items-center justify-center gap-4",
        className,
      )}
      {...rest}
    >
      <TrLink
        href={
          hasPrev
            ? {
                pathname: baseUrl,
                query: { ...searchParams, start: current - count },
              }
            : ""
        }
        variant="tertiary"
        className={cn("gap-2", !hasPrev && "pointer-events-none opacity-50")}
        aria-disabled={!hasPrev}
      >
        <ArrowLeftIcon className="size-5" />
        <span className="text-sm">前へ</span>
      </TrLink>
      <span className="w-30 text-center">
        {current}件 - {Math.min(current + count - 1, total)}件
      </span>
      <TrLink
        href={
          hasNext
            ? {
                pathname: baseUrl,
                query: { ...searchParams, start: current + count },
              }
            : ""
        }
        variant="tertiary"
        className={cn("gap-2", !hasNext && "pointer-events-none opacity-50")}
        aria-disabled={!hasNext}
      >
        <span className="text-sm">次へ</span>
        <ArrowRightIcon className="size-5 rotate-180" />
      </TrLink>
    </div>
  );
}
