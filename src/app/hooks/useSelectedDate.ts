import { useAppSelector } from './useAppSelector';
import { SelectedDate } from '../../store/selected-day/types';

export default function useSelectedDate(): SelectedDate {
  return useAppSelector(state => state.selectedDayState);
}
