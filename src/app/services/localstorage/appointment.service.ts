import { Appointment } from '../../models/Appointment';
import { APPOINTMENTS } from './keys';
import { IAppointmentService } from '../appointment.interface';
import { AppointmentsQuery } from '../appointments-query';

export class AppointmentService {
  public static getAppointments(
    appointmentsQuery: AppointmentsQuery,
  ): Appointment[] {
    const { startDate, endDate } = appointmentsQuery;
    const rawAppointments = localStorage.getItem(APPOINTMENTS);
    if (!rawAppointments) {
      return [];
    }
    const appointments: Appointment[] = JSON.parse(rawAppointments);
    if (!startDate || !endDate) {
      return appointments;
    }
    const result: Appointment[] = appointments.filter(appointment => {
      console.log(
        appointment,
        appointment.date >= startDate && appointment.date <= endDate,
      );
      return appointment.date >= startDate && appointment.date <= endDate;
    });
    return result;
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
