import Image from "next/image";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../_lib/utils";
import Link from "next/link";

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
      <Link href="/" className="flex flex-row gap-2 items-center flex-nowrap">
        <Image
          src="/icon.png"
          alt="たこるーとのアイコン"
          width={40}
          height={40}
          className="object-contain hover:animate-spin"
        />
        <h1 className="font-header font-bold text-on-primary text-4xl ">
          たこるーと
        </h1>
      </Link>
      {rightAction && <div>{rightAction}</div>}
    </header>
  );
}
