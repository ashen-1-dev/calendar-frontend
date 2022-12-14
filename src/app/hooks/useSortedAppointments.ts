import { Appointment } from '../models/Appointment';
import { useMemo, useState } from 'react';
import { SelectOption } from '../components/selects/Select';

export interface SortOption {
  sort: string;
  reverse: boolean;
}

export default function useSortedAppointments(
  appointments: Appointment[],
  initialSortOption: SelectOption,
): [
  sortedAndOrderedAppointments: Appointment[],
  handleOnSortChange: (selectedOption: SelectOption) => void,
  handleOnReverseOrder: () => void,
  selectedSortOption: SelectOption,
] {
  const [selectedSortOption, setSelectedSortOption] =
    useState<SelectOption>(initialSortOption);
  const [sortAndOrder, setSortAndOrder] = useState<SortOption>({
    sort: selectedSortOption.value,
    reverse: false,
  });

  const handleOnSortChange = (selectedOption: SelectOption) => {
    setSelectedSortOption(selectedOption);
    setSortAndOrder(prev => ({
      ...prev,
      sort: selectedOption.value,
    }));
  };

  const handleOnReverseOrder = () => {
    setSortAndOrder(prev => ({
      ...prev,
      reverse: !prev.reverse,
    }));
  };

  const sortedAndOrderedAppointments = useMemo<Appointment[]>(() => {
    let result: Appointment[] = [];
    switch (sortAndOrder.sort) {
      case 'date': {
        result = appointments.sort((a, b) => a.date - b.date);
        break;
      }
      case 'tag': {
        result = appointments.sort((a, b) => {
          if (!a.tags || !a.tags.length) {
            return 1;
          }
          if (!b.tags || !b.tags.length) {
            return -1;
          }
          return b.tags.length - a.tags.length;
        });
        break;
      }
      case 'name': {
        result = appointments.sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
        );
        break;
      }
      default: {
        result = appointments;
        break;
      }
    }

    return !sortAndOrder.reverse ? result : result.slice().reverse();
  }, [sortAndOrder, appointments, sortAndOrder.reverse]);

  return [
    sortedAndOrderedAppointments,
    handleOnSortChange,
    handleOnReverseOrder,
    selectedSortOption,
  ];
}
