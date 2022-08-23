import { Appointment } from '../../app/models/Appointment';
import {
  createAppointmentSuccess,
  getAppointmentsSuccess,
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
      const index = appointments.findIndex(x => x.id === action.payload.id);
      appointments[index] = action.payload;
      state.appointments = [...appointments];
    });
});

// export const appointmentReducer = createReducer(initialState, builder => {
//   builder
//     .addCase(createAppointmentSuccess, (state, action) => {
//       return {
//         ...state,
//         appointments: [...state.appointments, action.payload],
//       };
//     })
//     .addCase(getAppointmentsSuccess, (state, action) => {
//       return { ...state, appointments: [...action.payload] };
//     })
//     .addCase(updateAppointmentSuccess, (state, action) => {
//       const appointments = state.appointments;
//       const index = appointments.findIndex(x => x.id === action.payload.id)
//       appointments[index] = action.payload
//       return {...state, appointments: [...appointments ]}
//     })
// });
