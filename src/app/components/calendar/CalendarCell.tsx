import React from 'react';
import styled from 'styled-components';
import { Appointment } from '../../models/Appointment';
import format from 'date-fns/format';
import { Colors } from '../../../styles/colors';
import CalendarCellAppointment from './CalendarCellAppointment';

const Wrapper = styled.div<Pick<CalendarCellProp, 'selected'>>`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 7.688rem;
  width: 12.313rem;
  padding: 0 0.325rem;
  background-color: ${({ selected }) =>
    selected ? Colors.HoverGrey : 'white'};
`;

const AppointmentGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.313rem;
`;

const Date = styled.span<{ selected: boolean }>`
  padding: 0.938rem 0 0.313rem 0.938rem;
  font-weight: bold;
  color: ${({ selected }) => (selected ? Colors.Blue : Colors.DefaultDark)};
`;

interface CalendarCellProp {
  date: Date;
  appointments?: Appointment[];
  selected: boolean;
}

const CalendarCell = (props: CalendarCellProp) => {
  const { appointments, date, selected } = props;
  const formatDay = format(date, 'd');
  return (
    // @ts-ignore
    <Wrapper selected={selected}>
      <Date selected={selected}>{formatDay}</Date>
      <AppointmentGroup>
        {appointments &&
          appointments.map((appointment, i) => {
            if (i >= 2) {
              return (
                <span style={{ position: 'absolute', bottom: 0 }}>...</span>
              );
            }
            return <CalendarCellAppointment appointment={appointment} />;
          })}
      </AppointmentGroup>
    </Wrapper>
  );
};

export default CalendarCell;
