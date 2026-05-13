import Image from "next/image";
import type { HotpepperShop } from "@/app/_lib/hotpepper";

export function DetailCard({ shop }: { shop: HotpepperShop }) {
  let budgetInfo = "情報なし";
  if (shop.budget?.name) {
    budgetInfo = shop.budget.name;
  }

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.address)}`;

  return (
    <div className="flex flex-col w-full gap-4 bg-white bg-[url('/wood-pattern.png')] rounded-lg shadow-md overflow-hidden mb-20">
      <div className="flex flex-col items-center gap-1">
        <Image
          src={shop.photo.pc.l}
          alt={`${shop.name}の写真`}
          width={500}
          height={500}
          className="w-full "
        />
        <h1 className="text-2xl font-bold font-header">{shop.name}</h1>
      </div>
      <div className="flex flex-col p-4 gap-4">
        <div className="flex flex-row">
          <p className="text-nowrap font-bold ">アクセス：</p>
          <p className="">{shop.access}</p>
        </div>
        <div className="flex flex-row">
          <p className="text-nowrap font-bold">住所　　：</p>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {shop.address}
          </a>
        </div>
        <div className="flex flex-row">
          <p className="text-nowrap font-bold">営業時間：</p>
          <p className="">{shop.open}</p>
        </div>
        <div className="flex flex-row">
          <p className="text-nowrap font-bold">定休日　：</p>
          <p className="">{shop.close}</p>
        </div>

        <div className="flex flex-row">
          <p className="text-nowrap font-bold">予算　　：</p>
          <p className="">{budgetInfo}</p>
        </div>
      </div>
    </div>
  );
}
