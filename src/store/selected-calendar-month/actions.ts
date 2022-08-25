import { createAction } from '@reduxjs/toolkit';

export const setSelectedCalendarMonth = createAction(
  'SET_SELECTED_CALENDAR_MONTH',
  (dateTime: number) => ({
    payload: dateTime,
  }),
);
