import { Appointment } from '../../../models/Appointment';
import {
  getLastMidnightFromDate,
  getNextMidnightFromDate,
} from '../../../helpers/dates';

export function filterAppointmentsByDay(
  date: Date,
  appointments: Appointment[],
): Appointment[] | [] {
  if (!appointments.length) {
    return [];
  }
  const startOfTheDay = getLastMidnightFromDate(date);
  const endOfTheDay = getNextMidnightFromDate(date);

  const result = appointments.filter(a => {
    return a.date > startOfTheDay.getTime() && a.date < endOfTheDay.getTime();
  });
  return result;
}
