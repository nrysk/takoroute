import { redirect } from "next/navigation";
import { Pagination } from "@/app/_components/pagination";
import { ShopCard } from "@/app/_components/shop-card";
import { fetchTakoyakiShops } from "@/app/_lib/hotpepper";

export default async function Page({
  searchParams,
}: Readonly<{
  searchParams: { lat?: string; lon?: string; range?: string; start?: string };
}>) {
  const { lat, lon, range, start } = await searchParams;

  if (!lat || !lon || !range) {
    redirect("/search");
  }

  const response = await fetchTakoyakiShops({ lat, lon, range, start });

  const { shop: shops, results_available } = response.results;

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h1 className="text-2xl font-bold">検索結果</h1>
      <Pagination
        total={results_available}
        current={parseInt(start || "1", 10)}
        count={10}
        baseUrl="/search/results"
        searchParams={{ lat, lon, range }}
      />
      <ul className="flex flex-col gap-2 w-full max-w-md">
        {shops.map((shop) => (
          <li key={shop.id}>
            <ShopCard
              id={shop.id}
              name={shop.name}
              access={shop.access}
              photoUrl={shop.photo.pc.m}
            />
          </li>
        ))}
      </ul>
      <Pagination
        total={results_available}
        current={parseInt(start || "1", 10)}
        count={10}
        baseUrl="/search/results"
        searchParams={{ lat, lon, range }}
      />
    </div>
  );
}
