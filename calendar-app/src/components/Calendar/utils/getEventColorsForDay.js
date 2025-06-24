function getEventColorsForDay(events) {
  if (events.length <= 1) return events.map(() => 'border-blue-400 bg-blue-100 text-blue-800');
  const colorClasses = [
    'border-blue-400 bg-blue-100 text-blue-800',
    'border-green-400 bg-green-100 text-green-800',
    'border-purple-400 bg-purple-100 text-purple-800',
    'border-orange-400 bg-orange-100 text-orange-800',
    'border-pink-400 bg-pink-100 text-pink-800',
  ];
  return events.map((_, idx) => colorClasses[idx % colorClasses.length]);
}

export default getEventColorsForDay;
