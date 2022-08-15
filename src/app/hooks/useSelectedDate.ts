import { useSelector } from 'react-redux';
import { SelectedDate } from '../../store/selected-date/selected-date.interface';

export default function useSelectedDate(): SelectedDate {
  //@ts-ignore
  return useSelector(state => state.selectedDate);
}
