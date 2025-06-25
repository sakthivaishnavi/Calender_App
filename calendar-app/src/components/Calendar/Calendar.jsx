import { useCalendar } from '../../hooks/useCalendar.js';
import { useState } from 'react';
import CalendarHeader from './ui/CalendarHeader';
import DaysHeader from './ui/DaysHeader';
import CalendarDay from './ui/CalendarDay';
import EventSidebar from './ui/EventSidebar';

function Calendar() {
  const {
    currentDate,
    selectedDate,
    calendarDays,
    isPending,
    setCurrentDate,
    navigateToNextMonth,
    navigateToPrevMonth,
    navigateToToday,
    handleDateSelect,
    getEventsForDate,
    getDayInfo
  } = useCalendar();

  const [loadingDate, setLoadingDate] = useState(null);
  const [sidebarLoading, setSidebarLoading] = useState(false);
  const [sidebarEvents, setSidebarEvents] = useState([]);


  const handleDateClick = (date) => {
    setLoadingDate(date);
    setSidebarLoading(true);
    setTimeout(() => {
      handleDateSelect(date);
      setSidebarEvents(getEventsForDate(date));
      setLoadingDate(null);
      setSidebarLoading(false);
    }, 400);
  };


  const handlePrevYear = () => {
    const prevYear = new Date(currentDate);
    prevYear.setFullYear(prevYear.getFullYear() - 1);
    setCurrentDate(prevYear);
  };
  const handleNextYear = () => {
    const nextYear = new Date(currentDate);
    nextYear.setFullYear(nextYear.getFullYear() + 1);
    setCurrentDate(nextYear);
  };

  const selectedDateEvents = selectedDate ? sidebarEvents : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 font-sans">
      <div className="max-w-7xl mx-auto px-1 sm:px-8 py-4 w-full min-w-[380px] md:min-w-[600px]">
        <CalendarHeader
          currentDate={currentDate}
          onPrevMonth={navigateToPrevMonth}
          onNextMonth={navigateToNextMonth}
          onToday={navigateToToday}
          onPrevYear={handlePrevYear}
          onNextYear={handleNextYear}
        />
        <div className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-100 mt-4 smooth-fade" key={currentDate.toString()}>
          <div className="flex-1 p-2 sm:p-8">
            <DaysHeader />
            {isPending && (
              <div className="absolute inset-0 bg-white bg-opacity-60 flex items-center justify-center rounded-2xl">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
              </div>
            )}
            <div className="grid grid-cols-7 gap-0.5 sm:gap-1">
              {calendarDays.map(day => (
                <CalendarDay
                  key={day.toString()}
                  dayInfo={getDayInfo(day)}
                  onDateSelect={handleDateClick}
                  isLoading={loadingDate && loadingDate.toDateString() === day.toDateString()}
                />
              ))}
            </div>
          </div>
          <EventSidebar
            selectedDate={selectedDate}
            events={selectedDateEvents}
            isLoading={sidebarLoading}
          />
        </div>
      </div>
    </div>
  );
}

export default Calendar;