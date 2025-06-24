function DaysHeader() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return (
    <div className="grid grid-cols-7 mb-3">
      {days.map(day => (
        <div key={day} className="p-2 sm:p-3 text-center">
          <span className="text-sm sm:text-base font-bold text-blue-700 uppercase tracking-wide font-mono">
            {day}
          </span>
        </div>
      ))}
    </div>
  );
}

export default DaysHeader;
