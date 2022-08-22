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

export interface AppointmentAction {
  type: string;
  payload: {
    appointments?: Appointment[];
    appointment?: Appointment;
    error: any;
  };
}

export const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_APPOINTMENT_SUCCESS: {
      state = {
        ...state,
        appointments: [...state.appointments, action.payload.appointment],
      };
      break;
    }
    case CREATE_APPOINTMENT_FAILURE: {
      state = { ...state, error: action.payload.error };
      break;
    }
    case GET_APPOINTMENTS_SUCCESS: {
      state = { ...state, appointments: action.payload.appointments };
      break;
    }
    default:
      return state;
  }
};
