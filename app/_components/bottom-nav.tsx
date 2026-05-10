"use client";

import { MapIcon, SearchIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../_lib/utils";

const NAV_ITEMS = [
  { label: "マップ", href: "/map", icon: MapIcon },
  { label: "サーチ", href: "/search", icon: SearchIcon },
  { label: "マイページ", href: "/mypage", icon: UserIcon },
];

interface BottomNavProps extends ComponentPropsWithoutRef<"nav"> {}

export function BottomNav({ className, ...rest }: BottomNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "fixed bottom-2 left-0 right-0 mx-auto w-9/12 max-w-2xl rounded-xl py-1 px-2 bg-white",
        className,
      )}
      {...rest}
    >
      <ul className="flex items-center justify-around">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname.startsWith(item.href);

          return (
            <li key={item.href} className="relative w-full flex-1">
              <Link
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-0 max-w-30 mx-auto py-0.5 transition-transform active:scale-95",
                  {
                    "bg-sky-100 rounded-xl": isActive,
                  },
                )}
              >
                <item.icon
                  className={cn("size-6 text-gray-500", {
                    "text-sky-600": isActive,
                  })}
                />
                <span
                  className={cn("font-accent text-sm text-gray-500", {
                    "text-sky-600": isActive,
                  })}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
