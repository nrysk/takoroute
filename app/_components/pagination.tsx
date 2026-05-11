import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../_lib/utils";

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
      {hasPrev && (
        <Link
          href={{
            pathname: baseUrl,
            query: { ...searchParams, start: current - count },
          }}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
        >
          前へ
        </Link>
      )}
      <span>
        {current} - {Math.min(current + count - 1, total)} / {total}
      </span>
      {hasNext && (
        <Link
          href={{
            pathname: baseUrl,
            query: { ...searchParams, start: current + count },
          }}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
        >
          次へ
        </Link>
      )}
    </div>
  );
}
