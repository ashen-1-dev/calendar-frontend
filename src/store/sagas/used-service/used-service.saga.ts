import { getAppointments } from '../../appointments/actions';
import { put, select, takeEvery } from 'redux-saga/effects';
import { changeCurrentService } from '../../used-service/actions';
import { selectCalendarDate } from '../../selected-period-month/selectors';

function* changeService() {
  const dates = yield select(selectCalendarDate);
  yield put(
    getAppointments({
      startDate: dates[0].getTime(),
      endDate: dates[dates.length - 1].getTime(),
    }),
  );
}

export function* changeServiceWatcher() {
  yield takeEvery(changeCurrentService, changeService);
}
