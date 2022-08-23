import { SelectedDate } from '../../store/selected-date/selected-date.interface';
import { useAppSelector } from './useAppSelector';

export default function useSelectedDate(): SelectedDate {
  return useAppSelector(state => state.selectedDate);
}
