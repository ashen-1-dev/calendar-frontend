import { Appointment } from '../models/Appointment';
import { AppointmentFilter } from '../models/appointment-filter';

export const filterAppointments = (
  appointment: Appointment[],
  filter: AppointmentFilter,
) => {
  const { tags } = filter;
  if (tags && tags.length !== 0) {
    const searchTagIds = tags.map(tag => tag.id);
    appointment = appointment.filter(appointment => {
      if (!appointment.tags) {
        return false;
      }
      const appointmentTagsIds = appointment.tags.map(tag => tag.id);
      return searchTagIds.every(v => appointmentTagsIds.includes(v));
    });
  }
  return appointment;
};
