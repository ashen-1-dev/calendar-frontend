import { useAppSelector } from './useAppSelector';
import { SelectedDate } from '../../store/selected-date/types';

export default function useSelectedDate(): SelectedDate {
  return useAppSelector(state => state.selectedDate);
}
