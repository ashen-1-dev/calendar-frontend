import { Tag } from './Tag';

export enum AppointmentType {
  Holiday = 'holiday',
  Event = 'event',
  Other = 'other',
}

export interface Appointment {
  name: string;
  date: Date;
  type: AppointmentType;
  tags?: Tag[];
  budget: number;
}
