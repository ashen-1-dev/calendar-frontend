import { createReducer } from '@reduxjs/toolkit';
import { UsedServiceState } from './types';
import { AvailableService } from '../../app/services/services';
import { changeCurrentService } from './actions';

const initialState: UsedServiceState = {
  service: AvailableService.Localstorage,
};

export const usedServiceReducer = createReducer<UsedServiceState>(
  initialState,
  builder => {
    builder.addCase(changeCurrentService, state => {
      const currService = state.service;
      switch (currService) {
        case AvailableService.Localstorage: {
          state.service = AvailableService.Server;
          break;
        }
        case AvailableService.Server: {
          state.service = AvailableService.Localstorage;
          break;
        }
      }
    });
  },
);
