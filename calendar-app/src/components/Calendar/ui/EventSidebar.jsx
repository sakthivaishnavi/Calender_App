import { format } from 'date-fns';
import getEventColorsForDay from '../utils/getEventColorsForDay';

function EventSidebar({ selectedDate, events, isLoading }) {
  if (isLoading) {
    return (
      <div className="w-full sm:w-80 bg-gradient-to-b from-white via-blue-50 to-purple-50 border-t sm:border-t-0 sm:border-l border-blue-200 p-6 flex items-center justify-center min-h-[180px]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  if (!selectedDate) {
    return (
      <div className="w-full sm:w-80 bg-gradient-to-b from-white via-blue-50 to-purple-50 border-t sm:border-t-0 sm:border-l border-blue-200 p-6">
        <div className="text-center text-blue-400">
          <span className="w-12 h-12 mx-auto mb-4 block text-5xl">📅</span>
          <p className="font-semibold text-lg">Select a date to view events</p>
        </div>
      </div>
    );
  }
  if (events.length === 0) {
    return (
      <div className="w-full sm:w-80 bg-gradient-to-b from-white via-blue-50 to-purple-50 border-t sm:border-t-0 sm:border-l border-blue-200 p-6 flex flex-col items-center justify-center min-h-[180px]">
        <span className="w-12 h-12 mb-4 block text-blue-200 text-5xl">📅</span>
        <p className="text-lg font-semibold text-blue-700">No events for this date</p>
      </div>
    );
  }
  const eventColors = getEventColorsForDay(events);
  return (
    <div className="w-80 bg-gradient-to-b from-white via-blue-50 to-purple-50 border-l border-blue-200 p-6">
      <h3 className="text-xl font-extrabold text-blue-900 mb-4 tracking-tight font-mono">
        {format(selectedDate, 'EEEE, MMMM d, yyyy')}
      </h3>
      <div className="space-y-4">
        {events.map((event, idx) => (
          <div
            key={event.title + event.startTime}
            className={`p-4 rounded-xl border-l-8 ${eventColors[idx]} shadow-lg flex items-center bg-white/90 hover:bg-blue-50 transition-all duration-200`}
          >
            <span className={`w-4 h-4 rounded-full border-2 border-blue-200 flex-shrink-0 mr-3 ${eventColors[idx].replace('bg-white/80','')}`}></span>
            <div className="flex flex-col">
              <span className="font-bold text-blue-900 text-base leading-tight" style={{fontFamily: 'Arial, Helvetica, sans-serif'}}>{event.title}</span>
              <span className="text-xs text-blue-700 mt-1 font-semibold" style={{fontFamily: 'Arial, Helvetica, sans-serif'}}>
                {event.startTime} - {event.endTime} <span className="bg-blue-100 px-2 py-1 rounded text-xs ml-2 text-blue-800 font-bold">{event.duration}min</span>
              </span>
            </div>
          </div>
        ))}
      </div>
      {events.length > 1 && (
        <div className="mt-6 p-3 bg-gradient-to-r from-yellow-100 via-amber-50 to-yellow-50 border border-amber-200 rounded-lg shadow flex items-center gap-2">
          <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
          <span className="text-base font-semibold text-amber-800">
            Multiple events scheduled
          </span>
        </div>
      )}
    </div>
  );
}

export default EventSidebar;
