import React from 'react';
import { Appointment } from '../../../models/Appointment';
import { Wrapper } from './styled';

const CalendarCellAppointment = (props: { appointment: Appointment }) => {
  const { appointment } = props;
  return (
    <Wrapper type={appointment.state.type}>
      <span>{appointment.name}</span>
    </Wrapper>
  );
};

export default CalendarCellAppointment;
