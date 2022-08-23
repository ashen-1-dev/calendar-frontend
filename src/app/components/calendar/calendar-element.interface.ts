import { Appointment } from '../../models/Appointment';

export interface CalendarElement {
  date: Date;
  appointments: Appointment[];
}
