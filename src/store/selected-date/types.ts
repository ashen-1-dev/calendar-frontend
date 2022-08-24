import { Appointment } from '../../app/models/Appointment';

export enum selectedDateActionType {
  SET_SELECTED_DATE = 'SET_SELECTED_DATE',
}

export interface selectedDateAction {
  type: selectedDateActionType;
  payload: SelectedDate;
}

export interface SelectedDate {
  date: number;
  appointments: Appointment[];
}
