import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Welcome to タコルート!</h1>
      <p className="mt-4 text-lg font-accent">
        Find the best takoyaki spots in town.
      </p>

      <Link href="/search" className="mt-6">
        始める
      </Link>

      <a href="http://webservice.recruit.co.jp/">
        {/** biome-ignore lint/performance/noImgElement: クレジット表示のため */}
        <img
          src="http://webservice.recruit.co.jp/banner/hotpepper-m.gif"
          alt="ホットペッパーグルメ Webサービス"
          width="88"
          height="35"
          // border="0"
          title="ホットペッパーグルメ Webサービス"
          className="border-0"
        />
      </a>
    </div>
  );
}
