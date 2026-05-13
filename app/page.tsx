import Link from "next/link";
import { TrLink } from "./_components/ui/tr-link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-4">
      <h1 className="text-2xl font-bold font-header">たこるーと</h1>
      <p>
        「たこるーと」は、現在地から近くのたこ焼き屋さんを探すためのアプリです。
      </p>

      <TrLink href="/search">始める</TrLink>

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
