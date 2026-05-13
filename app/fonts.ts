import {
  Cherry_Bomb_One,
  Monomaniac_One,
  Shippori_Mincho,
  Zen_Maru_Gothic,
} from "next/font/google";

export const monomaniacOne = Monomaniac_One({
  weight: "400",
  variable: "--font-monomaniac-one",
  subsets: ["latin"],
});

export const cherryBombOne = Cherry_Bomb_One({
  weight: "400",
  variable: "--font-cherry-bomb-one",
  subsets: ["latin"],
});

export const zenMaruGothic = Zen_Maru_Gothic({
  weight: ["400", "700"],
  variable: "--font-zen-maru-gothic",
  subsets: ["latin"],
});

export const shipporiMincho = Shippori_Mincho({
  weight: ["400", "700"],
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
});
