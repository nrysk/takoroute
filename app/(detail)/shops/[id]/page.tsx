import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { BackFab } from "@/app/_components/back-fab";
import { fetchShopById } from "@/app/_lib/hotpepper";

export default async function Page({
  params,
}: {
  params: Promise<{ id?: string }>;
}) {
  const { id } = await params;

  if (!id) {
    redirect("/search");
  }

  const shop = await fetchShopById(id);

  if (!shop) {
    notFound();
  }

  let budgetInfo = "情報なし";
  if (shop.budget?.name) {
    budgetInfo = shop.budget.name;
  }

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.address)}`;
  console.log(shop.budget);
  return (
    <div className="flex flex-col items-start justify-center min-h-svh gap-4 max-w-lg mx-auto p-2">
      <h1 className="text-2xl font-bold">{shop.name}</h1>
      <Image
        src={shop.photo.pc.l}
        alt={`${shop.name}の写真`}
        width={400}
        height={400}
        className="object-contain rounded-lg  ring-1 ring-black self-center"
      />
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

      <BackFab />
    </div>
  );
}
