import { all } from 'redux-saga/effects';
import {
  createAppointmentWatcher,
  getAppointmentsWatcher,
  removeAppointmentWatcher,
  updateAppointmentWatcher,
} from './appointments/appointment.saga';
import {
  createTagWatcher,
  getTagsWatcher,
  removeTagWatcher,
} from './tags/tag.saga';

export default function* rootSaga() {
  yield all([
    getAppointmentsWatcher(),
    createAppointmentWatcher(),
    updateAppointmentWatcher(),
    removeAppointmentWatcher(),
    createTagWatcher(),
    getTagsWatcher(),
    removeTagWatcher(),
  ]);
}
