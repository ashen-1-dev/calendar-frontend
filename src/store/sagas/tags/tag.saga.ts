import { call, put, takeEvery } from 'redux-saga/effects';
import {
  createTagSuccess,
  getTagsSuccess,
  removeTagSuccess,
  createTag as createTagAction,
  removeTag as removeTagAction,
  getTags as getTagsAction,
} from '../../tags/actions';
import { TagService } from '../../../app/services/localstorage/tag.service';
import { Tag } from '../../../app/models/Tag';
function* createTag(action) {
  try {
    const tag = action.payload;
    yield call(TagService.addTag, tag);
    yield put(createTagSuccess(tag));
  } catch (e) {
    console.log(e);
  }
}

function* getTags() {
  try {
    const tags: Tag[] = yield call(TagService.getTags);
    yield put(getTagsSuccess(tags));
  } catch (e) {}
}

function* removeTag(action) {
  try {
    yield call(TagService.removeTag, action.payload);
    yield put(removeTagSuccess(action.payload));
  } catch (e) {
    console.log(e);
  }
}

export function* createTagWatcher() {
  yield takeEvery(createTagAction, createTag);
}

export function* getTagsWatcher() {
  yield takeEvery(getTagsAction, getTags);
}

export function* removeTagWatcher() {
  yield takeEvery(removeTagAction, removeTag);
}
