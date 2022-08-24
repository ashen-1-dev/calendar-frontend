import { createAction } from '@reduxjs/toolkit';
import { Appointment } from '../../app/models/Appointment';

export const setSelectedDate = createAction(
  'SET_SELECTED_DATE',
  (element: { date: number; appointments: Appointment[] }) => {
    return {
      payload: {
        date: element.date,
        appointments: element.appointments,
      },
    };
  },
);
