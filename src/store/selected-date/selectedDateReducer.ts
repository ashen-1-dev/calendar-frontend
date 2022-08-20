import {
  Appointment,
  AppointmentType,
  EventState,
  HolidayState,
  OtherState,
} from '../../app/models/Appointment';
import { SelectedDate } from './selected-date.interface';
import { Tag } from '../../app/models/Tag';

const mockTags: Tag[] = [
  { id: 1, name: 'Tag1', description: 'sadd' },
  { id: 2, name: 'Tag2', description: 'sadd' },
  { id: 3, name: 'Tag3', description: 'sadd' },
];
export const mockAppointments: Appointment<
  HolidayState | EventState | OtherState
>[] = [
  {
    id: 1,
    date: new Date('2022-01-01 19:00'),
    name: 'Fame1',
    state: { type: AppointmentType.Event, value: 'ул. Пушкина д.130' },
    tags: mockTags.slice(1),
  },
  {
    id: 2,
    date: new Date('2021-01-01 16:00'),
    name: 'Bame1',
    state: { type: AppointmentType.Holiday, value: 1500 },
    tags: mockTags.slice(2),
  },
  {
    id: 3,
    date: new Date('2022-01-01 15:00'),
    name: 'Aame1',
    state: { type: AppointmentType.Other, value: 'Не забыть взять деньги' },
    tags: mockTags.slice(1),
  },
  {
    id: 4,
    date: new Date('2023-01-01 13:00'),
    name: 'Lame1',
    state: { type: AppointmentType.Event, value: 'ул. Ленина 103' },
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
