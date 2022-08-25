import { call, put, select, takeEvery } from 'redux-saga/effects';
import {
  createTagSuccess,
  getTagsSuccess,
  removeTagSuccess,
  createTag as createTagAction,
  removeTag as removeTagAction,
  getTags as getTagsAction,
} from '../../tags/actions';
import { TagService as localStorageTagService } from '../../../app/services/localstorage/tag.service';
import { TagService as serverTagService } from '../../../app/services/server/tag.service';
import { Tag } from '../../../app/models/Tag';
import { AvailableService } from '../../../app/services/services';
import { getService } from '../../used-service/selectors';
import { ITagService } from '../../../app/services/tag.interface';

function* createTag(action: ReturnType<typeof createTagAction>) {
  try {
    const serviceName: AvailableService = yield select(getService);
    let service: ITagService;
    switch (serviceName) {
      case AvailableService.Localstorage: {
        service = localStorageTagService;
        break;
      }
      case AvailableService.Server: {
        service = serverTagService;
        break;
      }
    }
    const tag = <Tag>action.payload;
    yield call(service.addTag, tag);
    yield put(createTagSuccess(tag));
  } catch (e) {
    console.log(e);
  }
}

function* getTags() {
  try {
    const serviceName: AvailableService = yield select(getService);
    let service: ITagService;
    switch (serviceName) {
      case AvailableService.Localstorage: {
        service = localStorageTagService;
        break;
      }
      case AvailableService.Server: {
        service = serverTagService;
        break;
      }
    }
    const tags: Tag[] = yield call(service.getTags);
    yield put(getTagsSuccess(tags));
  } catch (e) {}
}

function* removeTag(action: ReturnType<typeof removeTagAction>) {
  try {
    const serviceName: AvailableService = yield select(getService);
    let service: ITagService;
    switch (serviceName) {
      case AvailableService.Localstorage: {
        service = localStorageTagService;
        break;
      }
      case AvailableService.Server: {
        service = serverTagService;
        break;
      }
    }
    yield call(service.removeTag, action.payload);
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
