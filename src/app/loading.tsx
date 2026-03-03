import Skeleton from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-72" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-36" />
        ))}
      </div>
      <Skeleton className="h-72 w-full" />
      <Skeleton className="h-32 w-full" />
    </div>
  );
}