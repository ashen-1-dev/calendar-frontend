import { createReducer } from '@reduxjs/toolkit';
import { SelectedCalendarMonthState } from './types';
import { setSelectedCalendarMonth } from './actions';
import { fillDates } from '../../app/helpers/dates';

const initialState: SelectedCalendarMonthState = {
  dates: fillDates(new Date().getMonth(), new Date().getFullYear()),
  currentMonth: new Date(),
};

export const selectedCalendarPeriodReducer =
  createReducer<SelectedCalendarMonthState>(initialState, builder => {
    builder.addCase(setSelectedCalendarMonth, (state, action) => {
      const selectedDate = action.payload.currentMonth;
      state.dates = fillDates(
        selectedDate.getMonth(),
        selectedDate.getFullYear(),
      );
      state.currentMonth = selectedDate;
    });
  });
