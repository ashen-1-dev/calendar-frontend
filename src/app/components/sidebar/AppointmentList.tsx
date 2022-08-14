import React from 'react';
import styled from 'styled-components';
import { Appointment } from '../../models/Appointment';
import SidebarAppointment from './SidebarAppointment';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface AppointmentListProps {
  appointments: Appointment[];
}

const AppointmentList = (props: AppointmentListProps) => {
  const { appointments } = props;

  return (
    <Wrapper>
      {appointments.map(appointment => (
        <SidebarAppointment appointment={appointment} />
      ))}
    </Wrapper>
  );
};

export default AppointmentList;
