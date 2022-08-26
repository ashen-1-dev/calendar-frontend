import { call, put, select, takeEvery } from 'redux-saga/effects';
import { AppointmentService as localStorageAppointmentService } from '../../../app/services/localstorage/appointment.service';
import { AppointmentService as serverAppointmentService } from '../../../app/services/server/appointment.service';
import {
  createAppointment as createAppointmentAction,
  createAppointmentFailure,
  createAppointmentSuccess,
  getAppointmentFailure,
  getAppointments as getAppointmentsAction,
  getAppointmentsSuccess,
  removeAppointment as removeAppointmentAction,
  removeAppointmentFailure,
  removeAppointmentSuccess,
  updateAppointment as updateAppointmentAction,
  updateAppointmentFailure,
  updateAppointmentSuccess,
} from '../../appointments/actions';
import { Appointment } from '../../../app/models/Appointment';
import { getService } from '../../used-service/selectors';
import { AvailableService } from '../../../app/services/services';
import { IAppointmentService } from '../../../app/services/appointment.interface';

function* createAppointmentWorker(
  action: ReturnType<typeof createAppointmentAction>,
) {
  try {
    const serviceName: AvailableService = yield select(getService);
    let service: IAppointmentService;
    switch (serviceName) {
      case AvailableService.Localstorage: {
        service = localStorageAppointmentService;
        break;
      }
      case AvailableService.Server: {
        service = serverAppointmentService;
        break;
      }
    }
    const appointment: Appointment = yield call(
      service.addAppointment,
      action.payload,
    );
    console.log('saga', appointment);
    yield put(createAppointmentSuccess(appointment));
  } catch (e) {
    yield put(createAppointmentFailure(e));
  }
}

function* getAppointments(action: ReturnType<typeof getAppointmentsAction>) {
  try {
    const serviceName: AvailableService = yield select(getService);
    let service: IAppointmentService;
    switch (serviceName) {
      case AvailableService.Localstorage: {
        service = localStorageAppointmentService;
        break;
      }
      case AvailableService.Server: {
        service = serverAppointmentService;
        break;
      }
    }
    const appointments: Appointment[] = yield call(
      service.getAppointments,
      action.payload,
    );
    yield put(getAppointmentsSuccess(appointments));
  } catch (e) {
    yield put(getAppointmentFailure(e));
  }
}

function* updateAppointment(
  action: ReturnType<typeof updateAppointmentAction>,
) {
  try {
    const serviceName: AvailableService = yield select(getService);
    let service: IAppointmentService;
    switch (serviceName) {
      case AvailableService.Localstorage: {
        service = localStorageAppointmentService;
        break;
      }
      case AvailableService.Server: {
        service = serverAppointmentService;
        break;
      }
    }
    const updatedAppointment = yield call(
      service.updateAppointment,
      action.payload.uuid,
      action.payload.appointment,
    );
    yield put(updateAppointmentSuccess(updatedAppointment));
  } catch (e) {
    yield put(updateAppointmentFailure(e));
  }
}

function* removeAppointment(
  action: ReturnType<typeof removeAppointmentAction>,
) {
  try {
    const serviceName: AvailableService = yield select(getService);
    let service: IAppointmentService;
    switch (serviceName) {
      case AvailableService.Localstorage: {
        service = localStorageAppointmentService;
        break;
      }
      case AvailableService.Server: {
        service = serverAppointmentService;
        break;
      }
    }
    yield call(service.removeAppointment, action.payload);
    yield put(removeAppointmentSuccess(action.payload));
  } catch (e) {
    yield put(removeAppointmentFailure(e));
  }
}

export function* createAppointmentWatcher() {
  yield takeEvery(createAppointmentAction, createAppointmentWorker);
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
