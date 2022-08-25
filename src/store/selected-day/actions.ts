import { createAction } from '@reduxjs/toolkit';
import { Appointment } from '../../app/models/Appointment';

export const setSelectedDay = createAction(
  'SET_SELECTED_DAY',
  (element: { date: number; appointments: Appointment[] }) => {
    return {
      payload: {
        date: element.date,
        appointments: element.appointments,
      },
    };
  },
);
