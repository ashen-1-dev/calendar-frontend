import { createAction } from '@reduxjs/toolkit';
import { AppointmentFilter } from '../../app/models/appointment-filter';

export const addFilter = createAction(
  'ADD_FILTER',
  (filter: AppointmentFilter) => ({
    payload: filter,
  }),
);
