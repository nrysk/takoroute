import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn, formatDistance } from "../_lib/utils";

interface ShopCardProps extends ComponentPropsWithoutRef<"div"> {
  id: string;
  name: string;
  access: string;
  photoUrl: string;
  catch: string;
  distance?: number;
}

export function ShopCard({
  id,
  name,
  access,
  photoUrl,
  catch: catchPhrase,
  distance,
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
      <div className="flex flex-col">
        <Image
          src={photoUrl}
          alt={`${name}の写真`}
          width={80}
          height={80}
          className="size-20 object-cover rounded-sm ring-1 ring-black"
        />
        {distance && (
          <span className="text-sm text-gray-500 mt-0.5 font-bold">
            <span className="text-xs"> ここから </span>
            {formatDistance(distance)}
          </span>
        )}
      </div>
      <div className="flex flex-col flex-1 gap-1">
        <h3 className="text-lg font-semibold">{name}</h3>

        <p className="text-sm text-gray-500 line-clamp-2">{access}</p>

        {catchPhrase && (
          <div className="flex flex-col bg-gray-100 p-2 rounded-lg gap-1">
            <span className="flex flex-row items-center gap-2 text-gray-500 text-sm">
              <MessageCircle className="size-3" />
              <p>キャッチコメント</p>
            </span>
            <p className="text-sm text-gray-600 line-clamp-3">{catchPhrase}</p>
          </div>
        )}
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
