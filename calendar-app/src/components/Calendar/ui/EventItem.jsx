function EventItem({ event, isCompact = false, colorClass }) {
  if (isCompact) {
    return (
      <div className={`w-3 h-3 rounded-full border-2 border-gray-400 ${colorClass.replace('bg-white/80','')} flex-shrink-0`} />
    );
  }
  return (
    <div className={`flex items-center gap-2 px-1 sm:px-2 py-1 rounded-lg mb-1 w-full max-w-full overflow-hidden font-[Arial,Helvetica,sans-serif] ${colorClass}`}>
      <span className="text-xs text-gray-700 font-bold tracking-wide whitespace-nowrap" style={{fontFamily: 'Arial, Helvetica, sans-serif'}}>{event.startTime}</span>
      <span className="text-sm text-gray-900 font-semibold pl-1 block truncate w-0 flex-1 min-w-0 sm:w-full sm:min-w-0" style={{fontFamily: 'Arial, Helvetica, sans-serif'}} title={event.title}>{event.title}</span>
    </div>
  );
}

export default EventItem;
