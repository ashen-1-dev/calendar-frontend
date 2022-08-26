import React from 'react';
import { Wrapper, VerticalLine } from './styled';
import { Appointment } from '../../../models/Appointment';
import SidebarAppointment from '../SidebarAppointment';

interface AppointmentListProps {
  appointments: Appointment[];
  onDelete: (appointment: Appointment) => void;
  onEdit: (appointment: Appointment) => void;
}

const AppointmentList = (props: AppointmentListProps) => {
  const { appointments, onDelete, onEdit } = props;
  return (
    <Wrapper>
      {appointments.map(appointment => (
        <React.Fragment key={appointment.name}>
          <VerticalLine />
          <SidebarAppointment
            onEdit={onEdit}
            onDelete={onDelete}
            appointment={appointment}
          />
        </React.Fragment>
      ))}
      <VerticalLine />
    </Wrapper>
  );
};

export default AppointmentList;
