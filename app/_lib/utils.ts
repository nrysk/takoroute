import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Haversine公式を使用して、2点間の距離をメートル単位で計算する関数
 * @param lat1 1つ目の地点の緯度
 * @param lon1 1つ目の地点の経度
 * @param lat2 2つ目の地点の緯度
 * @param lon2 2つ目の地点の経度
 */
export function calculateDistanceMeters(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number {
  const R = 6371000; // 地球の半径（メートル）
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * 表示用に距離をフォーマットする関数
 * 距離が1000メートル以上： 小数第一位までのキロメートル表記（例：1.2 km）
 * 距離が1000メートル未満： 上二桁までメートル表記（例：850 m）
 * @param distanceMeters
 */
export function formatDistance(distanceMeters: number): string {
  if (distanceMeters >= 1000) {
    return `${(distanceMeters / 1000).toFixed(1)}km`;
  } else {
    return `${Math.round(distanceMeters / 10) * 10}m`;
  }
}
