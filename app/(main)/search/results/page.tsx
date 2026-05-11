import { redirect } from "next/navigation";
import { Pagination } from "@/app/_components/pagination";
import { ShopCard } from "@/app/_components/shop-card";
import { fetchTakoyakiShops } from "@/app/_lib/hotpepper";
import Link from "next/link";

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

  // 結果が0件の場合は、検索条件を変更するよう促すメッセージを表示
  if (results_available === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-2xl font-bold ">
          近くにたこ焼き屋さんが見つかりませんでした。
          <br />
          検索条件を変更して再度お試しください。
        </h2>
        {/* 半径が最大ではない場合は、1段階上げるLinkを表示 */}
        {range === "5" ? (
          <Link href="/search" className="text-blue-500 hover:underline">
            検索条件を変更する
          </Link>
        ) : (
          <Link
            href={`/search/results?lat=${lat}&lon=${lon}&range=${parseInt(range, 10) + 1}&start=1`}
            className="text-blue-500 hover:underline"
          >
            半径を広げて再検索する
          </Link>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h2 className="text-2xl font-bold">検索結果</h2>
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
