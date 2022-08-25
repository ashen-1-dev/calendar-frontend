import { Appointment } from '../models/Appointment';
import { AppointmentQuery } from './appointment-query';

export interface IAppointmentService {
  addAppointment: (appointment: Appointment) => void | Promise<void>;
  getAppointments: (
    query: AppointmentQuery,
  ) => Appointment[] | Promise<Appointment[]>;
  updateAppointment: (
    uuid: string,
    appointment: Appointment,
  ) => Appointment | null | Promise<Appointment | null>;
  removeAppointment: (uuid: string) => void | Promise<void>;
}
