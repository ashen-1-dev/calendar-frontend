export function getDaysInMonthUTC(month: number, year: number): Date[] {
  month--;
  const date: Date = new Date(Date.UTC(year, month, 1));
  const days: Date[] = [];
  while (date.getUTCMonth() === month) {
    days.push(new Date(date));
    date.setUTCDate(date.getUTCDate() + 1);
  }
  return days;
}

export function getDatesUntilWeekday(
  date: Date,
  weekDayIndex: number,
  direction: 'forward' | 'back',
): Date[] {
  const dates: Date[] = [];
  let currentDate = date;
  while (currentDate.getDay() !== weekDayIndex) {
    const yesterday = new Date(currentDate);
    switch (direction) {
      case 'back': {
        yesterday.setDate(currentDate.getDate() - 1);
        break;
      }
      case 'forward': {
        yesterday.setDate(currentDate.getDate() + 1);
        break;
      }
    }

    dates.push(yesterday);
    currentDate = yesterday;
  }
  return dates;
}
