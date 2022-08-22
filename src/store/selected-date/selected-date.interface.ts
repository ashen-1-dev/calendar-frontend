import { Appointment } from '../../app/models/Appointment';

export interface SelectedDate {
  date: number;
  appointments: Appointment[];
}
