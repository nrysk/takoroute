export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-96 gap-4">
      <div className="flex flex-row items-center justify-center">
        <span className="text-4xl animate-pulse [animation-delay:000ms]">
          🐙
        </span>
        <span className="text-4xl animate-pulse [animation-delay:200ms]">
          🐙
        </span>
        <span className="text-4xl animate-pulse [animation-delay:400ms]">
          🐙
        </span>
        <span className="text-4xl animate-pulse [animation-delay:600ms]">
          🐙
        </span>
        <span className="text-4xl animate-pulse [animation-delay:800ms]">
          🐙
        </span>
      </div>
      <p className="text-lg ">お店を検索中...</p>
    </div>
  );
}
