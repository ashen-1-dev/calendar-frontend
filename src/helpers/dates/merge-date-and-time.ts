export default function mergeDateAndTime(date?: Date, time?: Date) {
  if (!date) {
    return time;
  }
  if (!time) {
    return date;
  }
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    time.getHours(),
    time.getMinutes(),
  );
}
