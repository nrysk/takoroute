export interface HotpepperShop {
  id: string;
  name: string;
  access: string;
  photo: { pc: { l: string; m: string; s: string } };
  address: string;
  lat: string;
  lng: string;
  open: string; // lite指定時は不可
  close: string; // lite指定時は不可
}

export interface GourmetResponse {
  results: {
    results_available: number;
    results_returned: number;
    results_start: number;
    shop: HotpepperShop[];
  };
}

const HOTPEPPER_API_URL =
  "https://webservice.recruit.co.jp/hotpepper/gourmet/v1/";
const COUNT_PER_PAGE = 10;

export async function fetchTakoyakiShops(params: {
  lat: string;
  lon: string;
  range: string;
  start?: string;
}): Promise<GourmetResponse> {
  const { lat, lon, range } = params;

  const apiKey = process.env.HOTPEPPER_API_KEY;
  if (!apiKey) {
    throw new Error(
      "HOTPEPPER_API_KEY is not defined in environment variables.",
    );
  }

  const queryParams = new URLSearchParams({
    key: apiKey,
    lat,
    lng: lon,
    range,
    start: params.start || "1",
    count: COUNT_PER_PAGE.toString(),
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
  return data;
}
