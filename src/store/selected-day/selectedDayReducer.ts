import { SelectedDate, selectedDateAction } from './types';

const initialState: SelectedDate = {
  date: new Date().getTime(),
};

export const selectedDayReducer = (
  state = initialState,
  action: selectedDateAction,
) => {
  switch (action.type) {
    case 'SET_SELECTED_DAY': {
      return {
        ...state,
        date: action.payload,
      };
    }
    default:
      return state;
  }
};
