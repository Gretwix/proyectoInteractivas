export function TaskBadge({ count }: { count: number }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg animate-pulse">
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-green-700 font-semibold text-xs mt-1">¡Tareas completadas: {count}!</span>
    </div>
  );
}
