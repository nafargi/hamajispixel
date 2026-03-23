import { Skeleton } from "./ui/skeleton";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[100] rich-black noise-overlay flex flex-col items-center justify-center p-6 space-y-12">
      {/* Hero Skeleton */}
      <div className="w-full max-w-5xl space-y-8 flex flex-col items-center text-center">
        <Skeleton className="h-4 w-48 rounded-full bg-white/5" />
        <div className="space-y-4 w-full flex flex-col items-center">
          <Skeleton className="h-16 md:h-24 w-4/5 rounded-sm bg-white/10" />
          <Skeleton className="h-16 md:h-24 w-3/5 rounded-sm bg-white/10" />
        </div>
        <Skeleton className="h-20 w-full max-w-2xl rounded-sm bg-white/5" />
        <div className="flex gap-8">
          <Skeleton className="h-12 w-40 rounded-sm bg-white/10" />
          <Skeleton className="h-12 w-32 rounded-sm bg-white/5" />
        </div>
      </div>

      {/* Grid Skeleton */}
      <div className="w-full max-w-[1800px] grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/5 p-[1px]">
        {[...Array(2)].map((_, i) => (
          <Skeleton key={i} className="aspect-[16/10] bg-white/5" />
        ))}
      </div>
    </div>
  );
};

export default PageLoader;
