import { Appointment } from '../../app/models/Appointment';
import { createAppointmentSuccess, getAppointmentsSuccess } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState: { appointments: Appointment[]; error: any } = {
  appointments: [],
  error: {},
};

export const appointmentReducer = createReducer(initialState, builder => {
  builder
    .addCase(createAppointmentSuccess, (state, action) => {
      return {
        ...state,
        appointments: [...state.appointments, action.payload],
      };
    })
    .addCase(getAppointmentsSuccess, (state, action) => {
      return { ...state, appointments: [...action.payload] };
    });
});
