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
      className={`relative flex flex-col items-center ${className} bg-orange-200`}
      {...rest}
    >
      <div className="absolute top-0 inset-0 bg-[url('/sauce.svg')] bg-repeat-x" />
      {children}
    </div>
  );
}
