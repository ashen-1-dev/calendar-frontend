/**
 * Create the store with dynamic reducers
 */

import {
  configureStore,
  getDefaultMiddleware,
  StoreEnhancer,
} from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';

import { createReducer } from './reducers';
import { selectedDateReducer } from './selected-date/selectedDateReducer';
import rootSaga from './sagas/root-saga';
import { appointmentReducer } from './appointments/appointment.reducer';
import { tagReducer } from './tags/tag.reducer';
import { filterReducer } from './filter/filter.reducer';
import { usedServiceReducer } from './used-service/used-service.reducer';

export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ] as StoreEnhancer[];

  const store = configureStore({
    reducer: createReducer({
      //@ts-ignore
      selectedDateState: selectedDateReducer,
      appointmentState: appointmentReducer,
      tagState: tagReducer,
      filterState: filterReducer,
      usedServiceState: usedServiceReducer,
    }),
    middleware: [...getDefaultMiddleware(), ...middlewares],
    devTools: process.env.NODE_ENV !== 'production',
    enhancers,
  });
  sagaMiddleware.run(rootSaga);
  return store;
}
