// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/

import { SelectedCalendarMonthState } from '../store/selected-period-month/types';
import { SelectedDate } from '../store/selected-day/types';
import { AppointmentState } from 'store/appointments/types';
import { TagState } from '../store/tags/types';
import { UsedServiceState } from '../store/used-service/types';

export interface RootState {
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
  selectedDayState: SelectedDate;
  selectedCalendarPeriodState: SelectedCalendarMonthState;
  appointmentState: AppointmentState;
  tagState: TagState;
  filterState;
  usedServiceState: UsedServiceState;
}
