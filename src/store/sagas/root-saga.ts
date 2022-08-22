import { all } from 'redux-saga/effects';
import {
  createAppointmentWatcher,
  getAppointmentsWatcher,
} from '../appointments/appointment.saga';

export default function* rootSaga() {
  yield all([getAppointmentsWatcher(), createAppointmentWatcher()]);
}
