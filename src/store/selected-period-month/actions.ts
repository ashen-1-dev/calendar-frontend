import { createAction } from '@reduxjs/toolkit';
import { fillDates } from '../../app/helpers/dates';

export const setSelectedCalendarMonth = createAction(
  'SET_SELECTED_PERIOD_MONTH',
  (date: Date) => ({
    payload: {
      currentMonth: date,
      dates: fillDates(date.getMonth(), date.getFullYear()),
    },
  }),
);
