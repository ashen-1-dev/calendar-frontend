import { Tag } from './Tag';

export enum AppointmentType {
  Holiday = 'holiday',
  Event = 'event',
  Other = 'other',
}

export interface AppointmentState {
  type: AppointmentType;
}

export interface HolidayState extends AppointmentState {
  type: AppointmentType.Holiday;
  value: number;
}

export interface EventState extends AppointmentState {
  type: AppointmentType.Event;
  value: string;
}

export interface OtherState extends AppointmentState {
  type: AppointmentType.Other;
  value: string;
}

export type AllState = HolidayState | EventState | OtherState;

export interface Appointment<T extends AppointmentState = AllState> {
  name: string;
  date: Date;
  state: T;
  tags?: Tag[];
}

export const EventAttribute = {
  [AppointmentType.Event]: 'Адрес',
  [AppointmentType.Holiday]: 'Бюджет',
  [AppointmentType.Other]: 'Комментарий',
};
