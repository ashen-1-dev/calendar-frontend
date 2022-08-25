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

export const createAppointmentFailure = createAction(
  'CREATE_APPOINTMENT_FAILURE',
  (error: any) => ({
    payload: error,
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

export const getAppointmentFailure = createAction(
  'GET_APPOINTMENT_FAILURE',
  (error: any) => ({
    payload: error,
  }),
);

export const updateAppointment = createAction(
  'UPDATE_APPOINTMENT',
  (uuid: string, appointment: Appointment) => ({
    payload: { appointment: appointment, uuid: uuid },
  }),
);

export const updateAppointmentSuccess = createAction(
  'UPDATE_APPOINTMENT_SUCCESS',
  (appointment: Appointment) => ({
    payload: appointment,
  }),
);

export const updateAppointmentFailure = createAction(
  'UPDATE_APPOINTMENT_FAILURE',
  (error: any) => ({
    payload: error,
  }),
);

export const removeAppointment = createAction(
  'REMOVE_APPOINTMENT',
  (uuid: string) => ({
    payload: uuid,
  }),
);

export const removeAppointmentSuccess = createAction(
  'REMOVE_APPOINTMENT_SUCCESS',
  (uuid: string) => ({
    payload: uuid,
  }),
);

export const removeAppointmentFailure = createAction(
  'REMOVE_APPOINTMENT_FAILURE',
  (error: any) => ({
    payload: error,
  }),
);
