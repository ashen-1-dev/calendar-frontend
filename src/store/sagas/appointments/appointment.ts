import { put, takeEvery, call } from 'redux-saga/effects';
import { AppointmentService } from '../../../app/services/localstorage/appointment.service';
import {
  CREATE_APPOINTMENT_FAILURE,
  createAppointment,
  createAppointmentSuccess,
  getAppointments as getAppointmentsReducer,
  getAppointmentsSuccess,
} from '../../appointments/actions';
import { Appointment } from '../../../app/models/Appointment';

function* createAppointmentWorker(action) {
  try {
    const appointment = action.payload;
    yield call(AppointmentService.setAppointment, appointment);
    yield put(createAppointmentSuccess(appointment));
  } catch (e) {
    console.log(e);
    yield put({ type: CREATE_APPOINTMENT_FAILURE, payload: e });
  }
}

function* getAppointments(action) {
  try {
    const appointments: Appointment[] = yield call(
      AppointmentService.getAppointments,
      action.payload,
    );
    yield put(getAppointmentsSuccess(appointments));
  } catch (e) {}
}

export function* createAppointmentWatcher() {
  yield takeEvery(createAppointment, createAppointmentWorker);
}

export function* getAppointmentsWatcher() {
  yield takeEvery(getAppointmentsReducer, getAppointments);
}
