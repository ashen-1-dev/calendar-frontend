import { Appointment } from '../models/Appointment';
import { AppointmentQuery } from './appointment-query';

export interface IAppointmentService {
  addAppointment: (appointment: Appointment) => void;
  getAppointments: (query: AppointmentQuery) => Appointment[];
  updateAppointment: (
    uuid: string,
    appointment: Appointment,
  ) => Appointment | null;
  removeAppointment: (uuid: string) => void;
}
