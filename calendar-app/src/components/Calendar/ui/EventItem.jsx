function EventItem({ event, isCompact = false, colorClass }) {
  if (isCompact) {
    return (
      <div
        className={`w-3 h-3 rounded-full border-2 border-gray-400 ${colorClass.replace('bg-white/80', '')} flex-shrink-0`}
        aria-label={event.title}
      />
    );
  }
  return (
    <div
      className={`flex flex-col items-start gap-0.5 px-1 sm:px-2 py-1 rounded-lg mb-1 w-full max-w-full overflow-hidden font-[Arial,Helvetica,sans-serif] ${colorClass}`}
      title={event.title}
    >
      <span className="text-sm text-gray-900 font-semibold block truncate w-full min-w-0">
        {event.title}
      </span>
      <span className="text-xs text-gray-700 font-bold tracking-wide whitespace-nowrap">
        {event.startTime} - {event.endTime}
      </span>
    </div>
  );
}

export default EventItem;
