import { Appointment } from '../../models/Appointment';
import { APPOINTMENTS } from './keys';
import { IAppointmentService } from '../appointment.interface';

export class AppointmentService {
  public static getAppointments(): Appointment[] {
    const rawAppointments = localStorage.getItem(APPOINTMENTS);
    if (!rawAppointments) {
      return [];
    }
    return JSON.parse(rawAppointments);
  }

  public static setAppointment(appointment: Appointment): void {
    const allRawAppointments = localStorage.getItem(APPOINTMENTS) || '[]';
    const appointments: Appointment[] = JSON.parse(allRawAppointments);
    return localStorage.setItem(
      APPOINTMENTS,
      JSON.stringify([...appointments, appointment]),
    );
  }

  public static updateAppointment(
    id: number,
    appointment: Appointment,
  ): Appointment | null {
    const rawAppointments = localStorage.getItem(APPOINTMENTS);
    const appointments: Appointment[] = JSON.parse(rawAppointments || '');
    const appointmentToUpdateIndex = appointments.findIndex(x => x.id === id);
    if (appointmentToUpdateIndex === -1) {
      return null;
    }
    appointments[appointmentToUpdateIndex] = appointment;

    localStorage.setItem(APPOINTMENTS, JSON.stringify(appointments));
    return appointment;
  }

  public static removeAppointment(id: number): void {
    const rawAppointments = localStorage.getItem(APPOINTMENTS);
    const appointments: Appointment[] =
      rawAppointments && JSON.parse(rawAppointments);
    if (!appointments) {
      return;
    }
    return localStorage.setItem(
      APPOINTMENTS,
      JSON.stringify(appointments.filter(x => x.id !== id)),
    );
  }
}
