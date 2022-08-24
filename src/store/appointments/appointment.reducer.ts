import { Appointment } from '../../app/models/Appointment';
import {
  createAppointmentSuccess,
  getAppointmentsSuccess,
  removeAppointmentSuccess,
  updateAppointmentSuccess,
} from './actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState: { appointments: Appointment[]; error: any } = {
  appointments: [],
  error: {},
};

export const appointmentReducer = createReducer(initialState, builder => {
  builder
    .addCase(createAppointmentSuccess, (state, action) => {
      state.appointments = [...state.appointments, action.payload];
    })
    .addCase(getAppointmentsSuccess, (state, action) => {
      state.appointments = [...action.payload];
    })
    .addCase(updateAppointmentSuccess, (state, action) => {
      const appointments = state.appointments;
      const index = appointments.findIndex(x => x.uuid === action.payload.uuid);
      appointments[index] = action.payload;
      state.appointments = [...appointments];
    })
    .addCase(removeAppointmentSuccess, (state, action) => {
      state.appointments = [
        ...state.appointments.filter(x => x.uuid !== action.payload),
      ];
    });
});
