import { SearchAlertIcon } from "lucide-react";
import { redirect } from "next/navigation";
import z from "zod";
import { Pagination } from "@/app/_components/pagination";
import { ShopCard } from "@/app/_components/shop-card";
import { TrLink } from "@/app/_components/ui/tr-link";
import { fetchTakoyakiShops } from "@/app/_lib/hotpepper";
import { calculateDistanceMeters } from "@/app/_lib/utils";

const DISTANCES = ["300m", "500m", "1km", "2km", "3km"] as const;

const searchParamsSchema = z.object({
  lat: z.coerce.number().min(-90).max(90),
  lon: z.coerce.number().min(-180).max(180),
  range: z.coerce.number().int().min(1).max(5),
  start: z.coerce.number().int().min(1).catch(1),
});

export default async function Page({
  searchParams,
}: Readonly<{
  searchParams: { lat?: string; lon?: string; range?: string; start?: string };
}>) {
  const params = await searchParams;
  const parsedParams = searchParamsSchema.safeParse(params);

  if (!parsedParams.success) {
    redirect("/search");
  }
  const { lat, lon, range, start } = parsedParams.data;

  const response = await fetchTakoyakiShops({
    lat,
    lon,
    range,
    start,
    lite: true,
  });

  const { shop: shops, results_available, results_returned } = response.results;

  // 結果が0件の場合は、検索条件を変更するよう促すメッセージを表示
  if (results_returned === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 pt-16">
        <SearchAlertIcon className="size-12" />
        <h2 className="text-2xl font-bold ">
          近くにたこ焼き屋さんが見つかりませんでした。
          <br />
          検索条件を変更して再度お試しください。
        </h2>
        {/* 半径が最大ではない場合は、1段階上げるLinkを表示 */}
        {range === 5 ? (
          <TrLink href="/search">検索条件を変更する</TrLink>
        ) : (
          <TrLink
            href={`/search/results?lat=${lat}&lon=${lon}&range=${range + 1}&start=1`}
          >
            半径を{DISTANCES[range + 1]}に広げて再検索する
          </TrLink>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <TrLink href="/search" className="">
        戻る
      </TrLink>
      <h2 className="text-2xl font-bold">検索結果</h2>
      <Pagination
        total={results_available}
        current={start}
        count={10}
        baseUrl="/search/results"
        searchParams={{
          lat: lat.toString(),
          lon: lon.toString(),
          range: range.toString(),
        }}
      />
      <ul className="flex flex-col gap-2 w-full max-w-md">
        {shops.map((shop) => (
          <li key={shop.id}>
            <ShopCard
              id={shop.id}
              name={shop.name}
              access={shop.access}
              photoUrl={shop.photo.pc.m}
              distance={calculateDistanceMeters(lat, lon, shop.lat, shop.lng)}
            />
          </li>
        ))}
      </ul>
      <Pagination
        total={results_available}
        current={start}
        count={10}
        baseUrl="/search/results"
        searchParams={{
          lat: lat.toString(),
          lon: lon.toString(),
          range: range.toString(),
        }}
      />
    </div>
  );
}
