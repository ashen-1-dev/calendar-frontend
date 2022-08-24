import React, { useEffect } from 'react';
import styled from 'styled-components';
import CalendarCell from './CalendarCell';
import {
  CALENDAR_COLUMN,
  CALENDAR_ROW,
  WEEK_DAYS,
} from '../../constants/constants';
import { Colors } from '../../../styles/colors';
import { getAppointments } from '../../../store/appointments/actions';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Appointment } from '../../models/Appointment';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { filterAppointmentsByDay } from './helpers/filter-appointments';
import { AppointmentFilter } from '../../models/appointment-filter';
import { filterAppointments } from '../../helpers/filter-appointments';

interface CalendarBodyProps {
  dates: Date[];
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${CALENDAR_COLUMN}, 1fr);
  grid-template-rows: 4.5rem repeat(${CALENDAR_ROW}, minmax(7.74rem, 1fr));
  grid-column-gap: 0;
  grid-row-gap: 0;
`;

const Header = styled.div`
  display: flex;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  border: solid 2px ${Colors.LightGrey3};
  border-bottom: solid 1px ${Colors.LightGrey3};
  border-right: 0;
`;

const CalendarBody = (props: CalendarBodyProps) => {
  const { dates } = props;
  const dispatch = useAppDispatch();
  const {
    appointments,
    filter,
  }: { appointments: Appointment[]; filter: AppointmentFilter } =
    useAppSelector(state => ({
      appointments: state.appointments.appointments,
      filter: state.filter.filter,
    }));
  useEffect(() => {
    dispatch(
      getAppointments({
        startDate: dates[0].getTime(),
        endDate: dates[dates.length - 1].getTime(),
      }),
    );
  }, [dates]);
  const filteredAppointments = filterAppointments(appointments, filter);
  return (
    <Wrapper>
      {WEEK_DAYS.map(day => (
        <Header key={day}>
          <div>{day}</div>
        </Header>
      ))}
      {dates.map(date => {
        const element = {
          date: date,
          appointments: filterAppointmentsByDay(date, filteredAppointments),
        };
        return <CalendarCell key={date.getTime()} element={element} />;
      })}
    </Wrapper>
  );
};

export default CalendarBody;
