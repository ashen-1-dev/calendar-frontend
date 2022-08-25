import { getAppointments } from '../../appointments/actions';
import { put, takeEvery } from 'redux-saga/effects';
import { changeCurrentService } from '../../used-service/actions';

function* changeService() {
  //TODO: Создать стейт с текущим выбранным месяцем, оттуда можно брать данные для рендера календаря.
  yield put(getAppointments({}));
}

export function* changeServiceWatcher() {
  yield takeEvery(changeCurrentService, changeService);
}
