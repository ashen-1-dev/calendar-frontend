import { RootState } from '../../types';

export const getService = (state: RootState) => state.usedServiceState.service;
