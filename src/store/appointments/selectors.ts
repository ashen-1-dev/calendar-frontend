import { RootState } from '../../types';
import { filterAppointmentsByDay } from '../../app/components/calendar/helpers/filter-appointments';

export const selectAppointmentsWithFilter = (state: RootState) => ({
  appointmentState: state.appointmentState,
  filter: state.filterState.filter,
});

export const selectAllAppointments = (state: RootState) =>
  state.appointmentState;

export const selectActiveAppointments = (state: RootState) => {
  const selectedDay = state.selectedDayState.date;
  const appointments = state.appointmentState.appointments;
  return {
    appointments: filterAppointmentsByDay(new Date(selectedDay), appointments),
    date: selectedDay,
  };
};
