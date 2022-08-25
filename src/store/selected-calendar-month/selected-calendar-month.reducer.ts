import { createReducer } from '@reduxjs/toolkit';
import { SelectedCalendarMonthState } from './types';
import { setSelectedCalendarMonth } from './actions';

const initialState: SelectedCalendarMonthState = {
  dateTime: new Date().getTime(),
};

export const selectedCalendarMonthReducer =
  createReducer<SelectedCalendarMonthState>(initialState, builder => {
    builder.addCase(setSelectedCalendarMonth, (state, action) => {
      state.dateTime = action.payload;
    });
  });
