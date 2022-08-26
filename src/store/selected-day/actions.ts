import { createAction } from '@reduxjs/toolkit';

export const setSelectedDay = createAction(
  'SET_SELECTED_DAY',
  (dateTime: number) => {
    return {
      payload: dateTime,
    };
  },
);
