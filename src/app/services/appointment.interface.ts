import { Appointment } from '../models/Appointment';

export interface IAppointmentService {
  setAppointment: (appointment: Appointment) => void;
  getAppointments: () => Appointment[];
  updateAppointment: (
    id: number,
    appointment: Appointment,
  ) => Appointment | null;
  removeAppointment: (id: number) => void;
}
