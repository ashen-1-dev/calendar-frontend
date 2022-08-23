import { Appointment } from '../../../models/Appointment';
import {
  convertDateToLastMidnight,
  convertDateToNextMidnight,
} from '../../../helpers/dates';

export function filterAppointmentsByDay(
  date: Date,
  appointments: Appointment[],
): Appointment[] | [] {
  if (!appointments.length) {
    return [];
  }
  const startOfTheDay = convertDateToLastMidnight(date);
  const endOfTheDay = convertDateToNextMidnight(date);

  const result = appointments.filter(a => {
    return a.date > startOfTheDay.getTime() && a.date < endOfTheDay.getTime();
  });
  return result;
}
