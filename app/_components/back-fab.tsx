"use client";

import { ArrowBigLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../_lib/utils";

interface BackFabProps extends ComponentPropsWithoutRef<"button"> {}

export function BackFab({ className, ...rest }: BackFabProps) {
  const router = useRouter();

  const handleClick = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/search");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "fixed bottom-4 left-4 flex items-center justify-center size-14 p-3 rounded-full bg-amber-900 text-white shadow-lg hover:bg-amber-700 transition-colors",
        className,
      )}
      {...rest}
    >
      <ArrowBigLeftIcon size={24} />
    </button>
  );
}
