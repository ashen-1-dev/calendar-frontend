import { Appointment } from '../../models/Appointment';
import { APPOINTMENTS } from './keys';
import { IAppointmentService } from '../appointment.interface';
import { AppointmentQuery } from '../appointment-query';
import { generateId } from '../../helpers/uuid-generator';

export class AppointmentServiceImpl implements IAppointmentService {
  public getAppointments(appointmentsQuery: AppointmentQuery): Appointment[] {
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

  public addAppointment(appointment: Appointment): Appointment {
    const allRawAppointments = localStorage.getItem(APPOINTMENTS) || '[]';
    appointment.uuid = generateId();
    const appointments: Appointment[] = JSON.parse(allRawAppointments);
    localStorage.setItem(
      APPOINTMENTS,
      JSON.stringify([...appointments, appointment]),
    );
    return appointment;
  }

  public updateAppointment(
    uuid: string,
    appointment: Appointment,
  ): Appointment | null {
    const rawAppointments = localStorage.getItem(APPOINTMENTS);
    if (!rawAppointments) {
      return null;
    }
    const appointments = JSON.parse(rawAppointments);
    const appointmentToUpdateIndex = appointments.findIndex(
      x => x.uuid === uuid,
    );
    if (appointmentToUpdateIndex === -1) {
      return null;
    }
    appointments[appointmentToUpdateIndex] = appointment;

    localStorage.setItem(APPOINTMENTS, JSON.stringify(appointments));
    return appointment;
  }

  public removeAppointment(uuid: string): void {
    const rawAppointments = localStorage.getItem(APPOINTMENTS);
    const appointments: Appointment[] =
      rawAppointments && JSON.parse(rawAppointments).filter(Boolean);
    if (!appointments) {
      return;
    }
    return localStorage.setItem(
      APPOINTMENTS,
      JSON.stringify(appointments.filter(x => x.uuid !== uuid)),
    );
  }
}

export const AppointmentService = new AppointmentServiceImpl();
