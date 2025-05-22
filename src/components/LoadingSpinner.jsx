export const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        role="status"
        aria-label="loading"
      ></div>
    </div>
  );
};
