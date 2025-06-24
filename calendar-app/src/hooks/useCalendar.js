import { useState, useMemo, useCallback, useTransition } from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isToday,
  addMonths,
  subMonths,
  isSameDay,
  parseISO
} from 'date-fns';

import eventsJson from '../../public/events.json';

export const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [isPending, startTransition] = useTransition();
  const [monthEvents, setMonthEvents] = useState([]);
  const [monthKey, setMonthKey] = useState(format(new Date(), 'yyyy-MM'));
  const [eventsLoaded, setEventsLoaded] = useState(false);

  const calendarDays = useMemo(() => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const calendarStart = startOfWeek(monthStart);
    const calendarEnd = endOfWeek(monthEnd);

    return eachDayOfInterval({ start: calendarStart, end: calendarEnd });
  }, [currentDate]);

  const loadEventsForMonth = useCallback((date) => {
    const key = format(date, 'yyyy-MM');
    if (monthKey === key && eventsLoaded) return monthEvents;
    const filtered = eventsJson.filter(event => event.date.startsWith(key));
    setMonthEvents(filtered.map(event => ({ ...event, dateObj: parseISO(event.date) })));
    setMonthKey(key);
    setEventsLoaded(true);
    return filtered.map(event => ({ ...event, dateObj: parseISO(event.date) }));
  }, [monthKey, monthEvents, eventsLoaded]);

  useMemo(() => {
    loadEventsForMonth(currentDate);
  }, [currentDate, loadEventsForMonth]);

  const getEventsForDate = useCallback((date) => {
    return monthEvents.filter(event => isSameDay(event.dateObj, date));
  }, [monthEvents]);

  const navigateToNextMonth = useCallback(() => {
    startTransition(() => {
      setCurrentDate(prev => addMonths(prev, 1));
      setEventsLoaded(false);
    });
  }, []);

  const navigateToPrevMonth = useCallback(() => {
    startTransition(() => {
      setCurrentDate(prev => subMonths(prev, 1));
      setEventsLoaded(false);
    });
  }, []);

  const navigateToToday = useCallback(() => {
    startTransition(() => {
      setCurrentDate(new Date());
      setEventsLoaded(false);
    });
  }, []);

  const handleDateSelect = useCallback((date) => {
    setSelectedDate(date);
  }, []);

  const hasEvents = useCallback((date) => {
    const events = getEventsForDate(date);
    return events.length > 0;
  }, [getEventsForDate]);

  const getDayInfo = useCallback((date) => {
    const events = getEventsForDate(date);
    const hasConflicts = events.length > 1;
    return {
      date,
      dayNumber: format(date, 'd'),
      isCurrentMonth: isSameMonth(date, currentDate),
      isToday: isToday(date),
      isSelected: selectedDate && isSameDay(date, selectedDate),
      hasEvents: events.length > 0,
      eventsCount: events.length,
      hasConflicts,
      events
    };
  }, [currentDate, selectedDate, getEventsForDate]);

  return {
    currentDate,
    setCurrentDate,
    selectedDate,
    calendarDays,
    isPending,
    navigateToNextMonth,
    navigateToPrevMonth,
    navigateToToday,
    handleDateSelect,
    hasEvents,
    getEventsForDate,
    getDayInfo
  };
};