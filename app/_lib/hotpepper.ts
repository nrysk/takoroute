import z from "zod";
import { env } from "./env";

export const hotpepperShopSchema = z.object({
  id: z.string(),
  name: z.string(),
  access: z.string(),
  photo: z.object({
    pc: z.object({
      l: z.url(),
      m: z.url(),
      s: z.url(),
    }),
  }),
  address: z.string(),
  lat: z.coerce.number(),
  lng: z.coerce.number(),
  open: z.string().optional(), // lite指定時は無い
  close: z.string().optional(), // lite指定時は無い
  catch: z.string(),
  budget: z
    .object({
      name: z.string(),
    })
    .optional(), // lite指定時は無い
});

export const hotpepperResponseSchema = z.object({
  results: z.object({
    results_available: z.number(),
    results_returned: z.coerce.number(), // 謎に文字列なので数値に変換する
    results_start: z.number(),
    shop: z.array(hotpepperShopSchema),
  }),
});

export type HotpepperShop = z.infer<typeof hotpepperShopSchema>;
export type HotpepperResponse = z.infer<typeof hotpepperResponseSchema>;

const HOTPEPPER_API_URL =
  "https://webservice.recruit.co.jp/hotpepper/gourmet/v1/";
const COUNT_PER_PAGE = 10;

export async function fetchTakoyakiShops(params: {
  lat: number;
  lon: number;
  range: number;
  start: number;
  lite?: boolean;
}): Promise<HotpepperResponse> {
  const { lat, lon, range, start, lite } = params;

  const apiKey = env.HOTPEPPER_API_KEY;

  const queryParams = new URLSearchParams({
    key: apiKey,
    lat: lat.toString(),
    lng: lon.toString(),
    range: range.toString(),
    start: start.toString(),
    count: COUNT_PER_PAGE.toString(),
    keyword: "たこ焼き",
    type: lite ? "lite" : "",
    format: "json",
  });

  const response = await fetch(
    `${HOTPEPPER_API_URL}?${queryParams.toString()}`,
    {
      next: { revalidate: 60 },
    },
  );

  if (!response.ok) {
    throw new Error(`Hotpepper API request failed: ${response.statusText}`);
  }

  const rawData = await response.json();
  const parsedResult = hotpepperResponseSchema.parse(rawData);

  return parsedResult;
}

export async function fetchShopById(id: string): Promise<HotpepperShop | null> {
  const apiKey = env.HOTPEPPER_API_KEY;

  const queryParams = new URLSearchParams({
    key: apiKey,
    id,
    keyword: "たこ焼き",
    format: "json",
  });

  const response = await fetch(
    `${HOTPEPPER_API_URL}?${queryParams.toString()}`,
    {
      next: { revalidate: 60 },
    },
  );

  if (!response.ok) {
    throw new Error(`Hotpepper API request failed: ${response.statusText}`);
  }

  const data = await response.json();
  const parsedResult = hotpepperResponseSchema.parse(data);

  if (parsedResult.results.results_available === 0) {
    return null;
  }
  return parsedResult.results.shop[0];
}
