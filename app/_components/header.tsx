import Image from "next/image";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../_lib/utils";

interface HeaderProps extends ComponentPropsWithoutRef<"header"> {
  title: string;
  rightAction?: React.ReactNode;
}

export function Header({
  title,
  rightAction,
  className,
  ...rest
}: HeaderProps) {
  return (
    <header
      className={cn(
        "flex items-center justify-between px-4  bg-sky-400",
        className,
      )}
      {...rest}
    >
      <div className="flex items-center gap-2 h-full">
        <Image
          src="/tsutenkaku.png"
          alt="Tsutenkaku Tower"
          width={40}
          height={40}
          className="object-cover h-full"
        />
        <h1 className="font-header text-white text-4xl tracking-widest -skew-x-4">
          {title}
        </h1>
      </div>
      {rightAction && <div>{rightAction}</div>}
    </header>
  );
}
