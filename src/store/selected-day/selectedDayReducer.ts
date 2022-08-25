import { SelectedDate, selectedDateAction } from './types';

const initialState: SelectedDate = {
  date: new Date().getTime(),
  appointments: [],
};

export const selectedDayReducer = (
  state = initialState,
  action: selectedDateAction,
) => {
  switch (action.type) {
    case 'SET_SELECTED_DAY': {
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