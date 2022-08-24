import { put, takeEvery, call } from 'redux-saga/effects';
import { AppointmentService } from '../../../app/services/localstorage/appointment.service';
import {
  CREATE_APPOINTMENT_FAILURE,
  createAppointment,
  createAppointmentSuccess,
  getAppointments as getAppointmentsAction,
  getAppointmentsSuccess,
  updateAppointmentSuccess,
  updateAppointment as updateAppointmentAction,
  removeAppointment as removeAppointmentAction,
  removeAppointmentSuccess,
} from '../../appointments/actions';
import { Appointment } from '../../../app/models/Appointment';

function* createAppointmentWorker(action) {
  try {
    const appointment = action.payload;
    yield call(AppointmentService.addAppointment, appointment);
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

function* updateAppointment(action) {
  try {
    const updatedAppointment = yield call(
      AppointmentService.updateAppointment,
      action.payload.uuid,
      action.payload.appointments,
    );
    yield put(updateAppointmentSuccess(updatedAppointment));
  } catch (e) {
    console.log(e);
  }
}

function* removeAppointment(action) {
  try {
    yield call(AppointmentService.removeAppointment, action.payload);
    yield put(removeAppointmentSuccess(action.payload));
  } catch (e) {
    console.log(e);
  }
}

export function* createAppointmentWatcher() {
  yield takeEvery(createAppointment, createAppointmentWorker);
}

export function* getAppointmentsWatcher() {
  yield takeEvery(getAppointmentsAction, getAppointments);
}

export function* updateAppointmentWatcher() {
  yield takeEvery(updateAppointmentAction, updateAppointment);
}

export function* removeAppointmentWatcher() {
  yield takeEvery(removeAppointmentAction, removeAppointment);
}
