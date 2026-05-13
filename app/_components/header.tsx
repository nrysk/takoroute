import Image from "next/image";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../_lib/utils";

interface HeaderProps extends ComponentPropsWithoutRef<"header"> {
  rightAction?: React.ReactNode;
}

export function Header({ rightAction, className, ...rest }: HeaderProps) {
  return (
    <header
      className={cn(
        "flex items-center justify-between px-4 bg-primary",
        className,
      )}
      {...rest}
    >
      <div className="flex items-center gap-2 h-full">
        <Image
          src="/icon.png"
          alt="たこるーとのアイコン"
          width={40}
          height={40}
          className="object-contain"
        />
        <h1 className="font-header font-bold text-on-primary text-4xl ">
          たこるーと
        </h1>
      </div>
      {rightAction && <div>{rightAction}</div>}
    </header>
  );
}
