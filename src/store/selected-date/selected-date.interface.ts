import { Appointment } from '../../app/models/Appointment';

export interface SelectedDate {
  date: Date;
  appointments: Appointment[];
}
