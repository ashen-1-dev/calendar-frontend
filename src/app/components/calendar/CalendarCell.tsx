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
  border: solid 1px ${Colors.LightGrey3};
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

interface CalendarCellProp extends React.HTMLProps<HTMLDivElement> {
  date: Date;
  selected: boolean;
  onClick: (date) => void;
}

const CalendarCell = (props: CalendarCellProp) => {
  const { date, selected, onClick } = props;
  const appointments = [];
  const formatDay = format(date, 'd');
  return (
    <Wrapper onClick={() => onClick(date)} selected={selected}>
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
