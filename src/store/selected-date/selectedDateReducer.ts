import { Appointment, AppointmentType } from '../../app/models/Appointment';
import { SelectedDate } from './selected-date.interface';
import { Tag } from '../../app/models/Tag';

const mockTags: Tag[] = [
  { id: 1, name: 'Tag1', description: 'sadd' },
  { id: 2, name: 'Tag2', description: 'sadd' },
  { id: 3, name: 'Tag3', description: 'sadd' },
];
export const mockAppointments: Appointment[] = [
  {
    date: new Date(),
    name: 'Name1',
    type: AppointmentType.Holiday,
    state: { name: 'Бюджет', value: '1500' },
    tags: mockTags,
  },
  {
    date: new Date(),
    name: 'Name1',
    type: AppointmentType.Event,
    state: { name: 'Адрес', value: '1500' },
    tags: mockTags,
  },
  {
    date: new Date(),
    name: 'Name1',
    type: AppointmentType.Holiday,
    state: { name: 'Комментария', value: '1500' },
    tags: mockTags,
  },
  {
    date: new Date(),
    name: 'Name1',
    type: AppointmentType.Other,
    state: { name: 'Бюджет', value: '1500' },
    tags: mockTags,
  },
];
const initialState: SelectedDate = {
  date: new Date(),
  appointments: mockAppointments,
};

export enum selectedDateReducerActionType {
  SET_SELECTED_DATE = 'SET_SELECTED_DATE',
}

export interface selectedDateReducerAction {
  type: selectedDateReducerActionType;
  payload: SelectedDate;
}

export const selectedDateReducer = (
  state = initialState,
  action: selectedDateReducerAction,
) => {
  switch (action.type) {
    case 'SET_SELECTED_DATE': {
      return {
        ...state,
        date: action.payload.date,
        appointments: action.payload.appointments,
      };
    }
    default:
      return state;
  }
};

export const setSelectedDateAction = (payload: SelectedDate) => ({
  type: selectedDateReducerActionType.SET_SELECTED_DATE,
  payload,
});
