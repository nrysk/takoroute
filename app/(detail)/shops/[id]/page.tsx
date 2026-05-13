import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { BackFab } from "@/app/_components/back-fab";
import { fetchShopById } from "@/app/_lib/hotpepper";
import { DetailCard } from "./_components/detail-card";

export default async function Page({
  params,
}: {
  params: Promise<{ id?: string }>;
}) {
  const { id } = await params;

  if (!id) {
    redirect("/search");
  }

  const shop = await fetchShopById(id);

  if (!shop) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center max-w-lg mx-auto p-2 min-h-screen">
      <DetailCard shop={shop} />
      <BackFab />
    </div>
  );
}
