import React from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';
import { Colors } from '../../../styles/colors';
import CalendarCellAppointment from './CalendarCellAppointment';
import useSelectedDate from '../../hooks/useSelectedDate';
import { filterAppointmentsByDay } from './helpers/filter-appointments';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { CalendarElement } from './calendar-element.interface';
import { setSelectedDate } from '../../../store/selected-date/actions';

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
  element: CalendarElement;
}

const CalendarCell = (props: CalendarCellProp) => {
  const { element } = props;
  const dispatch = useAppDispatch();
  const { date: selectedDate } = useSelectedDate();

  const { date, appointments } = element;
  const selected = date.getTime() === selectedDate;
  const formatDay = format(date, 'd');

  const handleOnClick = () => {
    dispatch(
      setSelectedDate({
        date: date.getTime(),
        appointments: filterAppointmentsByDay(date, appointments),
      }),
    );
  };

  return (
    <Wrapper onClick={handleOnClick} selected={selected}>
      <Date selected={selected}>{formatDay}</Date>
      <AppointmentGroup>
        {appointments &&
          appointments.slice(0, 3).map((appointment, i) => {
            if (i >= 2) {
              return (
                <span style={{ position: 'absolute', bottom: 0 }}>...</span>
              );
            }
            return (
              <CalendarCellAppointment
                key={appointment.uuid}
                appointment={appointment}
              />
            );
          })}
      </AppointmentGroup>
    </Wrapper>
  );
};

export default CalendarCell;
