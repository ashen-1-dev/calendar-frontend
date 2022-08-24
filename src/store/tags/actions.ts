import { createAction } from '@reduxjs/toolkit';
import { Tag } from 'app/models/Tag';

export const getTags = createAction('GET_TAGS');

export const getTagsSuccess = createAction(
  'GET_TAGS_SUCCESS',
  (Tags: Tag[]) => ({
    payload: Tags,
  }),
);

export const createTag = createAction(
  'CREATE_TAG',
  (Tag: Omit<Tag, 'uuid'>) => ({
    payload: Tag,
  }),
);

export const createTagSuccess = createAction(
  'CREATE_TAG_SUCCESS',
  (Tag: Tag) => ({
    payload: Tag,
  }),
);

export const removeTag = createAction('REMOVE_TAG', (uuid: string) => ({
  payload: uuid,
}));

export const removeTagSuccess = createAction(
  'REMOVE_TAG_SUCCESS',
  (uuid: string) => ({
    payload: uuid,
  }),
);
