import {
  createAppointment,
  createAppointmentFailure,
  createAppointmentSuccess,
  getAppointmentFailure,
  getAppointments,
  getAppointmentsSuccess,
  removeAppointmentFailure,
  removeAppointmentSuccess,
  updateAppointmentFailure,
  updateAppointmentSuccess,
} from './actions';
import { createReducer } from '@reduxjs/toolkit';
import { AppointmentState } from './types';

const initialState: AppointmentState = {
  appointments: [],
  error: {},
  isLoading: false,
  isError: false,
};

export const appointmentReducer = createReducer<AppointmentState>(
  initialState,
  builder => {
    builder
      .addCase(createAppointment, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createAppointmentSuccess, (state, action) => {
        state.appointments = [...state.appointments, action.payload];
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(createAppointmentFailure, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getAppointments, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAppointmentsSuccess, (state, action) => {
        state.appointments = [...action.payload];
        state.isError = false;
        state.isLoading = false;
      })
      .addCase(getAppointmentFailure, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateAppointmentSuccess, (state, action) => {
        const appointments = state.appointments;
        const index = appointments.findIndex(
          x => x.uuid === action.payload.uuid,
        );
        appointments[index] = action.payload;
        state.appointments = [...appointments];
      })
      .addCase(updateAppointmentFailure, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(removeAppointmentSuccess, (state, action) => {
        state.appointments = [
          ...state.appointments.filter(x => x.uuid !== action.payload),
        ];
      })
      .addCase(removeAppointmentFailure, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.payload;
      });
  },
);
