import { Appointment } from '../../app/models/Appointment';

export interface AppointmentState {
  appointments: Appointment[];
  error?: any;
  isLoading: boolean;
  isError: boolean;
}
