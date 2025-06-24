import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';

function CalendarHeader({ currentDate, onPrevMonth, onNextMonth, onToday, onPrevYear, onNextYear }) {
  return (
    <div className="mb-2 px-2 py-2 sm:p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl shadow border border-blue-200 min-h-[2.5rem] sm:min-h-[4rem]">
      <div className="flex flex-col gap-0.5 sm:hidden h-full justify-center">
        <div className="flex items-center justify-between w-full h-full">
          <button
            onClick={onPrevYear}
            className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 hover:outline-2 hover:outline-gray-400 transition-colors text-xs self-center mr-2"
            aria-label="Previous year"
          >
            <span className="font-bold text-base">&#171;</span>
          </button>
          <button
            onClick={onPrevMonth}
            className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 hover:outline-2 hover:outline-gray-400 transition-colors text-xs self-center mr-2"
            aria-label="Previous month"
          >
            <ChevronLeft className="w-6 h-6 text-blue-700" />
          </button>
          <div className="flex flex-col items-center flex-1 mx-1 justify-center h-full">
            <div className="flex flex-col items-center gap-0.5 justify-center h-full">
              <div className="flex items-center gap-1 justify-center h-full">
                <CalendarIcon className="w-5 h-5 text-blue-700 self-center" />
                <h1 className="text-base font-extrabold text-gray-900 tracking-tight drop-shadow font-mono self-center">
                  {format(currentDate, 'MMMM yyyy')}
                </h1>
              </div>
              <button
                onClick={onToday}
                className="mt-0.5 px-2 py-0.5 text-xs font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition-colors self-center"
              >
                Today
              </button>
            </div>
          </div>
          <button
            onClick={onNextMonth}
            className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 hover:outline-2 hover:outline-gray-400 transition-colors text-xs self-center ml-2"
            aria-label="Next month"
          >
            <ChevronRight className="w-6 h-6 text-blue-700" />
          </button>
          <button
            onClick={onNextYear}
            className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 hover:outline-2 hover:outline-gray-400 transition-colors text-xs self-center ml-2"
            aria-label="Next year"
          >
            <span className="font-bold text-base">&#187;</span>
          </button>
        </div>
      </div>
      <div className="hidden sm:flex items-center justify-between w-full gap-2">
        <div className="flex items-center gap-1">
          <button
            onClick={onPrevYear}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 hover:outline-2 hover:outline-gray-400 transition-colors"
            aria-label="Previous year"
          >
            <span className="font-bold text-lg">&#171;</span>
          </button>
          <button
            onClick={onPrevMonth}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 hover:outline-2 hover:outline-gray-400 transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeft className="w-7 h-7 text-blue-700" />
          </button>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <CalendarIcon className="w-7 h-7 text-blue-700 mx-1" />
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight drop-shadow font-mono mx-1">
            {format(currentDate, 'MMMM yyyy')}
          </h1>
          <button
            onClick={onToday}
            className="px-4 py-1 text-base font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition-colors mx-1"
          >
            Today
          </button>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={onNextMonth}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 hover:outline-2 hover:outline-gray-400 transition-colors"
            aria-label="Next month"
          >
            <ChevronRight className="w-7 h-7 text-blue-700" />
          </button>
          <button
            onClick={onNextYear}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 hover:outline-2 hover:outline-gray-400 transition-colors"
            aria-label="Next year"
          >
            <span className="font-bold text-lg">&#187;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalendarHeader;
