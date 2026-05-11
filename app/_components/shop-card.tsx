import Image from "next/image";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../_lib/utils";

interface ShopCardProps extends ComponentPropsWithoutRef<"div"> {
  id: string;
  name: string;
  access: string;
  photoUrl: string;
}

export function ShopCard({
  id,
  name,
  access,
  photoUrl,
  className,
  ...rest
}: ShopCardProps) {
  return (
    <div
      className={cn(
        "flex flex-row gap-2 items-start  bg-white rounded-sm p-1",
        className,
      )}
      {...rest}
    >
      <Image
        src={photoUrl}
        alt={`${name}の写真`}
        width={80}
        height={80}
        className="size-20 object-cover rounded-sm ring-1 ring-black"
      />
      <div className="flex flex-col flex-1 gap-0.5">
        <h3 className="text-lg font-semibold">{name}</h3>

        <p className="text-sm text-gray-500 line-clamp-2">{access}</p>
        <Link
          href={`/shops/${id}`}
          className="text-blue-500 hover:underline self-end"
        >
          詳細を見る
        </Link>
      </div>
    </div>
  );
}
