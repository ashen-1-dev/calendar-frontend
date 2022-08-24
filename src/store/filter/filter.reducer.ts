import { createReducer } from '@reduxjs/toolkit';
import { AppointmentFilter } from '../../app/models/appointment-filter';
import { addFilter } from './actions';

const initialState: { filter: AppointmentFilter } = {
  filter: {
    tags: [],
  },
};

export const filterReducer = createReducer(initialState, builder => {
  builder.addCase(addFilter, (state, action) => {
    state.filter = action.payload;
  });
});
