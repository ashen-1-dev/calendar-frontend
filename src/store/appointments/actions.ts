import { Appointment } from '../../app/models/Appointment';
import { AppointmentQuery } from '../../app/services/appointment-query';
import { createAction } from '@reduxjs/toolkit';

export const CREATE_APPOINTMENT_FAILURE = 'CREATE_APPOINTMENT_FAILURE';

export const createAppointmentSuccess = createAction(
  'CREATE_APPOINTMENT_SUCCESS',
  (appointment: Appointment) => ({
    payload: appointment,
  }),
);

export const createAppointment = createAction(
  'CREATE_APPOINTMENT',
  (appointment: Appointment) => ({
    payload: appointment,
  }),
);

export const getAppointments = createAction(
  'GET_APPOINTMENTS',
  (query: AppointmentQuery) => ({
    payload: query,
  }),
);

export const getAppointmentsSuccess = createAction(
  'GET_APPOINTMENTS_SUCCESS',
  (appointments: Appointment[]) => ({
    payload: appointments,
  }),
);

export const updateAppointment = createAction(
  'UPDATE_APPOINTMENT',
  (id: string, appointment: Appointment) => ({
    payload: { appointment: appointment, id: id },
  }),
);

export const updateAppointmentSuccess = createAction(
  'UPDATE_APPOINTMENT_SUCCESS',
  (appointment: Appointment) => ({
    payload: appointment,
  }),
);
