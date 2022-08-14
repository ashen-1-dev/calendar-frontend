import { Tag } from './Tag';

export enum AppointmentType {
  Holiday = 'holiday',
  Event = 'event',
  Other = 'other',
}

export interface AppointmentState {
  name: string;
  value: any;
}

export interface Appointment {
  name: string;
  date: Date;
  type: AppointmentType;
  tags?: Tag[];
  state: AppointmentState;
}
