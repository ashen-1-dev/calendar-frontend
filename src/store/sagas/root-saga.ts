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
import { changeServiceWatcher } from './used-service/used-service.saga';

export default function* rootSaga() {
  yield all([
    getAppointmentsWatcher(),
    createAppointmentWatcher(),
    updateAppointmentWatcher(),
    removeAppointmentWatcher(),
    createTagWatcher(),
    getTagsWatcher(),
    removeTagWatcher(),
    changeServiceWatcher(),
  ]);
}
