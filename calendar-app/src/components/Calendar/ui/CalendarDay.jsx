import getEventColorsForDay from '../utils/getEventColorsForDay';
import EventItem from './EventItem';

function CalendarDay({ dayInfo, onDateSelect, isLoading }) {
  const {
    date,
    dayNumber,
    isCurrentMonth,
    isToday,
    isSelected,
    hasEvents,
    eventsCount,
    hasConflicts,
    events
  } = dayInfo;


  const eventColors = getEventColorsForDay(events);


  let dayNumberClasses = [
    'flex items-center justify-center w-8 h-8 mx-auto text-base sm:text-lg font-bold transition-all duration-200',
    isToday ? 'bg-blue-600 text-white rounded-full shadow' : '',
    !isCurrentMonth && !isSelected ? 'text-gray-300' : '', // Out-of-month dates are lighter unless selected
    isCurrentMonth || isSelected ? 'text-gray-900' : '',
    "font-['Times New Roman',Times,serif]"
  ].join(' ');

  let cellClasses = [
    'min-h-[72px] sm:min-h-[110px] p-1 sm:p-2 cursor-pointer transition-all duration-200 hover:bg-blue-50',
    'flex flex-col items-center justify-start select-none relative overflow-hidden border border-gray-200',
    isSelected ? 'ring-2 ring-black rounded-2xl z-10' : ''
  ].join(' ');

 
  const handleClick = () => {
    if (!isLoading) onDateSelect(date);
  };

  return (
    <div
      className={cellClasses}
      onClick={handleClick}
      tabIndex={0}
      aria-label={`Day ${dayNumber}`}
    >
 
      <div className="flex flex-col items-center justify-center mb-1 sm:mb-2 w-full relative min-h-[2.5rem]">
        <div className="flex flex-row-reverse items-start w-full relative" style={{ minHeight: '2.5rem', paddingTop: '0.5rem' }}>
          {hasConflicts && (
            <div
              className="absolute top-1 right-1 sm:top-0 sm:right-0 bg-red-100 text-red-600 text-xs px-2 rounded shadow z-20"
              style={{
                minWidth: '1.5rem',
                minHeight: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: 'translateY(-40%) translateX(40%)',
              }}
            >
              {eventsCount}
            </div>
          )}
          <span className={dayNumberClasses} style={{ zIndex: 10 }}>{dayNumber}</span>
        </div>
      </div>
      <div className="space-y-1 w-full flex flex-col items-center justify-center max-h-[80px] sm:max-h-[120px] overflow-visible">
        {isLoading ? (
          <div className="flex items-center justify-center w-full h-6 animate-pulse">
            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          events.slice(0, 2).map((event, idx) => (
            <div className="w-full flex justify-center" key={event.title + event.startTime}>
              <EventItem event={event} colorClass={eventColors[idx]} />
            </div>
          ))
        )}
        {!isLoading && events.length > 2 && (
          <div className="text-xs text-gray-500">
            +{events.length - 2} more
          </div>
        )}
      </div>
      {!isLoading && hasEvents && events.length <= 2 && (
        <div className="flex space-x-1 mt-1 sm:mt-2 w-full justify-center">
          {events.map((event, idx) => (
            <EventItem key={event.title + event.startTime + 'dot'} event={event} isCompact colorClass={eventColors[idx]} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CalendarDay;
