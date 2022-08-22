import { Appointment } from '../../app/models/Appointment';
import {
  CREATE_APPOINTMENT_FAILURE,
  CREATE_APPOINTMENT_SUCCESS,
  GET_APPOINTMENTS_SUCCESS,
} from './actions';

const initialState: { appointments: Appointment[]; error: any } = {
  appointments: [],
  error: {},
};

export const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_APPOINTMENT_SUCCESS: {
      return {
        ...state,
        appointments: [...state.appointments, action.payload.appointment],
      };
    }
    case CREATE_APPOINTMENT_FAILURE: {
      return { ...state, error: action.payload.error };
    }
    case GET_APPOINTMENTS_SUCCESS: {
      return { ...state, appointments: action.payload.appointments };
    }
    default:
      return state;
  }
};
