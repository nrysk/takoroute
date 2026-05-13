export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-96 gap-4">
      <div className="flex flex-row items-center justify-center">
        <span className="text-6xl animate-spin">🐙</span>
      </div>
      <p className="text-lg ">読み込み中...</p>
    </div>
  );
}
