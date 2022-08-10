import { CALENDAR_COLUMN, CALENDAR_ROW } from '../constants/constants';

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

export function getDatesUntilWeekday(date: Date, weekDayIndex: number): Date[] {
  const dates: Date[] = [];
  let currentDate = date;
  while (currentDate.getDay() !== weekDayIndex) {
    const yesterday = new Date(currentDate);
    yesterday.setDate(currentDate.getDate() - 1);
    dates.push(yesterday);
    currentDate = yesterday;
  }
  return dates;
}

export function fillDates(month: number, year: number): Date[] {
  const datesOfCurrentMonth = getDaysInMonthUTC(month, year);
  const datesOfPastMonth = getDatesUntilWeekday(
    datesOfCurrentMonth[0],
    1,
  ).reverse();

  const dates = datesOfPastMonth.concat(datesOfCurrentMonth);

  while (dates.length !== CALENDAR_ROW * CALENDAR_COLUMN) {
    let lastDate = dates[dates.length - 1];
    let tomorrowDate = new Date(lastDate);
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    dates.push(tomorrowDate);
  }
  return dates;
}
