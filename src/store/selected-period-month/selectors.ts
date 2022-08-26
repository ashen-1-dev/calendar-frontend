import { RootState } from '../../types';

export const selectCalendarDate = (state: RootState) =>
  state.selectedCalendarPeriodState.dates;

export const selectCurrentCalendarPeriod = (state: RootState) =>
  state.selectedCalendarPeriodState;
