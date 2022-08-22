import { put, takeEvery, call } from 'redux-saga/effects';
import { AppointmentService } from '../../app/services/localstorage/appointment.service';
import {
  CREATE_APPOINTMENT,
  CREATE_APPOINTMENT_FAILURE,
  CREATE_APPOINTMENT_SUCCESS,
  createAppointment,
  GET_APPOINTMENTS,
  GET_APPOINTMENTS_SUCCESS,
} from './actions';
import { Appointment } from '../../app/models/Appointment';

function* createAppointmentWorker(action) {
  try {
    const appointment = action.payload;
    yield call(AppointmentService.setAppointment, appointment);
    yield put(createAppointment(appointment));
  } catch (e) {
    yield put({ type: CREATE_APPOINTMENT_FAILURE, payload: e });
  }
}

function* getAppointments() {
  try {
    const appointments: Appointment[] = yield call(
      AppointmentService.getAppointments,
    );
    yield put({ type: GET_APPOINTMENTS_SUCCESS, payload: appointments });
  } catch (e) {
    console.log('something went wrong', e);
  }
}

export function* createAppointmentWatcher() {
  yield takeEvery(CREATE_APPOINTMENT, createAppointmentWorker);
}

export function* getAppointmentsWatcher() {
  yield takeEvery(GET_APPOINTMENTS, getAppointments);
}
