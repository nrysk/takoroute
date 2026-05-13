import type { Metadata } from "next";
import "./globals.css";
import {
  cherryBombOne,
  monomaniacOne,
  shipporiMincho,
  zenMaruGothic,
} from "./fonts";

export const metadata: Metadata = {
  title: "タコルート",
  description: "たこ焼き検索ウェブアプリ",
  keywords: ["たこ焼き", "検索"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${zenMaruGothic.variable} ${monomaniacOne.variable} ${cherryBombOne.variable} ${shipporiMincho.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
