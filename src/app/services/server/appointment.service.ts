import { IAppointmentService } from '../appointment.interface';
import { Appointment } from '../../models/Appointment';
import { AppointmentQuery } from '../appointment-query';
import axios from 'axios';

class AppointmentServiceImpl implements IAppointmentService {
  constructor() {
    axios.defaults.baseURL = process.env.SERVER_BASE_URL;
  }

  public async addAppointment(appointment: Appointment): Promise<void> {
    return await axios.post('/appointments', appointment);
  }

  public async getAppointments(
    query: AppointmentQuery,
  ): Promise<Appointment[]> {
    return await axios
      .get<Appointment[]>('/appointments', {
        params: { date_gte: query.startDate, date_lte: query.endDate },
      })
      .then(resp => resp.data);
  }

  public async removeAppointment(uuid: string): Promise<void> {
    return await axios.delete(`/appointments/${uuid}`);
  }

  public async updateAppointment(
    uuid: string,
    appointment: Appointment,
  ): Promise<Appointment | null> {
    return await axios
      .put<Appointment>(`/appointment/${uuid}`, appointment)
      .then(resp => resp.data);
  }
}

export const AppointmentService = new AppointmentServiceImpl();