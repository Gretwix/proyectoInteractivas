export function DayBadge({ count }: { count: number }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg border-4 border-yellow-600 relative">
        {/* Calendario con estrella */}
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          {/* Calendario */}
          <rect x="4" y="7" width="16" height="13" rx="2" fill="#fff" stroke="#F59E42" strokeWidth="2"/>
          <rect x="4" y="4" width="16" height="5" rx="1.5" fill="#F59E42" />
          {/* Estrella */}
          <polygon points="12,12 13,15 16,15 13.5,17 14.5,20 12,18 9.5,20 10.5,17 8,15 11,15" fill="#FFD700" stroke="#E6B800" strokeWidth="0.5"/>
        </svg>
      </div>
      <span className="text-yellow-700 font-semibold text-xs mt-1">¡Días completados: {count}!</span>
    </div>
  );
}
