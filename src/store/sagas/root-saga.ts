import { all } from 'redux-saga/effects';
import {
  createAppointmentWatcher,
  getAppointmentsWatcher,
  updateAppointmentWatcher,
} from './appointments/appointment';

export default function* rootSaga() {
  yield all([
    getAppointmentsWatcher(),
    createAppointmentWatcher(),
    updateAppointmentWatcher(),
  ]);
}
