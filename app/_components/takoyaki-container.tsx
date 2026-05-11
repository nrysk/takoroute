"use client";

import type { ComponentPropsWithoutRef } from "react";

interface TakoyakiContainerProps extends ComponentPropsWithoutRef<"div"> {}

export function TakoyakiContainer({
  className,
  children,
  ...rest
}: TakoyakiContainerProps) {
  return (
    <div
      className={`relative flex flex-col items-center ${className} bg-[#eedbab] `}
      {...rest}
    >
      <div className="absolute top-0 left-0 right-0 h-18 bg-[url('/sauce.svg')] bg-repeat-x pointer-events-none" />
      {children}
    </div>
  );
}
