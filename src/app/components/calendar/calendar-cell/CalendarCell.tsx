import React from 'react';
import format from 'date-fns/format';
import CalendarCellAppointment from '../calendar-appointment/CalendarCellAppointment';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { CalendarElement } from '../calendar-element.interface';
import { setSelectedDay } from '../../../../store/selected-day/actions';
import { AppointmentGroup, Date, Wrapper } from './styled';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { getSelectedDay } from '../../../../store/selected-day/selectors';

interface CalendarCellProp extends React.HTMLProps<HTMLDivElement> {
  element: CalendarElement;
}

const CalendarCell = (props: CalendarCellProp) => {
  const { element } = props;
  const { date, appointments } = element;
  const dispatch = useAppDispatch();
  const { date: selectedDate } = useAppSelector(getSelectedDay);
  const selected = date.getTime() === selectedDate;
  const formatDay = format(date, 'd');

  const handleOnClick = () => {
    dispatch(setSelectedDay(date.getTime()));
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
