import { Appointment } from '../../app/models/Appointment';
import { SelectedDate } from './selected-date.interface';
import { createAction } from '@reduxjs/toolkit';

const initialState: SelectedDate = {
  date: new Date().getTime(),
  appointments: [],
};

export enum selectedDateReducerActionType {
  SET_SELECTED_DATE = 'SET_SELECTED_DATE',
}

export interface selectedDateAction {
  type: selectedDateReducerActionType;
  payload: SelectedDate;
}

export const selectedDateReducer = (
  state = initialState,
  action: selectedDateAction,
) => {
  switch (action.type) {
    case 'SET_SELECTED_DATE': {
      return {
        ...state,
        date: action.payload.date,
        appointments: action.payload.appointments,
      };
    }
    default:
      return state;
  }
};

export const setSelectedDate = createAction(
  'SET_SELECTED_DATE',
  (element: { date: number; appointments: Appointment[] }) => {
    return {
      payload: {
        date: element.date,
        appointments: element.appointments,
      },
    };
  },
);
