export default function LoadingSpinner() {
  return (
    <div className="flex center w-full h-full justify-center items-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary item-center" />
    </div>
  );
}
