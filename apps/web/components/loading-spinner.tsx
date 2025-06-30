export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative">
        <div className="w-8 h-8 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-8 h-8 border-4 border-transparent border-t-primary/30 rounded-full animate-pulse-ring"></div>
      </div>
      <span className="ml-3 text-sm text-muted-foreground animate-pulse">
        Loading...
      </span>
    </div>
  );
}
