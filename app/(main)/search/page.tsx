import { DummyForm } from "@/app/_components/dummy-form";
import { RangeForm } from "@/app/_components/range-form";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center gap-16 pt-4">
      <RangeForm />
      <DummyForm />
    </div>
  );
}
