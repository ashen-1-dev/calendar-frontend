import { Appointment } from '../../models/Appointment';
import { APPOINTMENTS } from './keys';
import { IAppointmentService } from '../appointment.interface';
import { AppointmentQuery } from '../appointment-query';
import { generateId } from '../../helpers/uuid-generator';

export class AppointmentService {
  public static getAppointments(
    appointmentsQuery: AppointmentQuery,
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
    const result: Appointment[] = appointments
      .filter(Boolean)
      .filter(appointment => {
        return appointment.date >= startDate && appointment.date <= endDate;
      });
    return result;
  }

  public static setAppointment(appointment: Appointment): void {
    const allRawAppointments = localStorage.getItem(APPOINTMENTS) || '[]';
    appointment.id = generateId();
    const appointments: Appointment[] = JSON.parse(allRawAppointments);
    return localStorage.setItem(
      APPOINTMENTS,
      JSON.stringify([...appointments, appointment]),
    );
  }

  public static updateAppointment(
    id: string,
    appointment: Appointment,
  ): Appointment | null {
    const rawAppointments = localStorage.getItem(APPOINTMENTS);
    if (!rawAppointments) {
      return null;
    }
    const appointments = JSON.parse(rawAppointments);
    console.log('raw apps', rawAppointments);
    console.log('apps eto', appointments);
    //TODO: Ошибка. Пропадает свойство id, чек логи
    const appointmentToUpdateIndex = appointments.findIndex(x => x.id === id);
    if (appointmentToUpdateIndex === -1) {
      return null;
    }
    appointments[appointmentToUpdateIndex] = appointment;

    localStorage.setItem(APPOINTMENTS, JSON.stringify(appointments));
    return appointment;
  }

  public static removeAppointment(id: string): void {
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
