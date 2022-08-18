import React from 'react';
import styled from 'styled-components';
import { Appointment } from '../../models/Appointment';
import SidebarAppointment from './SidebarAppointment';
import { Colors } from '../../../styles/colors';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface AppointmentListProps {
  appointments: Appointment[];
  onDelete: (appointment: Appointment) => void;
  onEdit: (appointment: Appointment) => void;
}

const VerticalLine = styled.div`
  width: inherit;
  border: solid 2px ${Colors.LightGrey3};
`;

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
