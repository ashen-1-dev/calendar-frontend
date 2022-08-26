import { RootState } from '../../types';

export const getCalendarDate = (state: RootState) =>
  state.selectedCalendarPeriodState.dates;
