import { Appointment } from '../../app/models/Appointment';
import { AppointmentsQuery } from '../../app/services/appointments-query';

export const CREATE_APPOINTMENT = 'CREATE_APPOINTMENT';
export const CREATE_APPOINTMENT_SUCCESS = 'CREATE_APPOINTMENT_SUCCESS';
export const CREATE_APPOINTMENT_FAILURE = 'CREATE_APPOINTMENT_FAILURE';

export const GET_APPOINTMENTS_SUCCESS = 'GET_APPOINTMENTS_SUCCESS';
export const GET_APPOINTMENTS = 'GET_APPOINTMENTS';

export const createAppointment = (appointment: Appointment) => ({
  type: CREATE_APPOINTMENT_SUCCESS,
  payload: appointment,
});

export const getAppointments = (query: AppointmentsQuery) => ({
  type: GET_APPOINTMENTS,
  payload: query,
});
