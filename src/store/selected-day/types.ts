export enum selectedDateActionType {
  SET_SELECTED_DAY = 'SET_SELECTED_DAY',
}

export interface selectedDateAction {
  type: selectedDateActionType;
  payload: SelectedDate;
}

export interface SelectedDate {
  date: number;
}
