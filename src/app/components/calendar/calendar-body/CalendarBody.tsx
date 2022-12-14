import React, { useEffect } from 'react';
import CalendarCell from '../calendar-cell/CalendarCell';
import { WEEK_DAYS } from '../../../constants/constants';
import { getAppointments } from '../../../../store/appointments/actions';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { filterAppointmentsByDay } from '../helpers/filter-appointments';
import { AppointmentFilter } from '../../../models/appointment-filter';
import { filterAppointments } from '../../../helpers/filter-appointments';
import { AppointmentState } from '../../../../store/appointments/types';
import { Header, Wrapper } from './styled';
import { selectAppointmentsWithFilter } from '../../../../store/appointments/selectors';

interface CalendarBodyProps {
  dates: Date[];
}

const CalendarBody = (props: CalendarBodyProps) => {
  const { dates } = props;
  const dispatch = useAppDispatch();
  const {
    appointmentState,
    filter,
  }: { appointmentState: AppointmentState; filter: AppointmentFilter } =
    useAppSelector(selectAppointmentsWithFilter);
  const { appointments, error, isError, isLoading } = appointmentState;

  useEffect(() => {
    dispatch(
      getAppointments({
        startDate: dates[0].getTime(),
        endDate: dates[dates.length - 1].getTime(),
      }),
    );
  }, [dates]);

  const filteredAppointments = filterAppointments(appointments, filter);

  if (isLoading) {
    return (
      <Wrapper>
        <div>Идет загрузка..</div>
      </Wrapper>
    );
  }

  if (isError) {
    return (
      <Wrapper>
        <div>Произошла ошибка</div>
      </Wrapper>
    );
  }

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
