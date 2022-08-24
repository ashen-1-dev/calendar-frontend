import { createReducer } from '@reduxjs/toolkit';
import { createTagSuccess, getTagsSuccess, removeTagSuccess } from './actions';
import { Tag } from '../../app/models/Tag';

const initialState: { tags: Tag[]; error: any } = {
  tags: [],
  error: {},
};

export const tagReducer = createReducer(initialState, builder => {
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
