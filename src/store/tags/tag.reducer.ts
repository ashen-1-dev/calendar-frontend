import { createReducer } from '@reduxjs/toolkit';
import { createTagSuccess, getTagsSuccess, removeTagSuccess } from './actions';
import { TagState } from './types';

const initialState: TagState = {
  tags: [],
  error: {},
  isError: false,
  isLoading: false,
};

export const tagReducer = createReducer<TagState>(initialState, builder => {
  builder
    .addCase(createTagSuccess, (state, action) => {
      state.tags = [...state.tags, action.payload];
    })
    .addCase(getTagsSuccess, (state, action) => {
      state.tags = [...action.payload];
    })
    .addCase(removeTagSuccess, (state, action) => {
      state.tags = [...state.tags.filter(x => x.uuid !== action.payload)];
    });
});
