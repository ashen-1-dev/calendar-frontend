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

const VerticalLine = styled.div`
  width: inherit;
  border: solid 2px #f8fafe;
`;

const AppointmentList = (props: AppointmentListProps) => {
  const { appointments } = props;

  return (
    <Wrapper>
      {appointments.map(appointment => (
        <React.Fragment key={appointment.name}>
          <VerticalLine />
          <SidebarAppointment appointment={appointment} />
        </React.Fragment>
      ))}
      <VerticalLine />
    </Wrapper>
  );
};

export default AppointmentList;
