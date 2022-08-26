import React, { HTMLProps } from 'react';
import { ReactComponent as BackSvg } from './assets/back.svg';
import { ReactComponent as ForwardSvg } from './assets/forward.svg';
import CalendarBody from './calendar-body/CalendarBody';
import styled from 'styled-components';
import format from 'date-fns/format';
import { ru } from 'date-fns/locale';
import capitalize from 'lodash/capitalize';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setSelectedCalendarMonth } from '../../../store/selected-period-month/actions';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getNextMonth, getPrevMonth } from '../../../helpers/dates/month';
import { selectCurrentCalendarPeriod } from '../../../store/selected-period-month/selectors';

interface CalendarProps extends HTMLProps<HTMLDivElement> {
  className?: string;
}

const Wrapper = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  border-radius: 10px;
`;

const Calendar = (props: CalendarProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const { currentMonth, dates } = useAppSelector(selectCurrentCalendarPeriod);
  const formatDate = format(currentMonth, 'LLLL yyyy', { locale: ru });
  return (
    <Wrapper className={className}>
      <div
        style={{ alignSelf: 'center', padding: '2.5rem', userSelect: 'none' }}
      >
        <span
          style={{ cursor: 'pointer' }}
          onClick={() =>
            dispatch(setSelectedCalendarMonth(getPrevMonth(currentMonth)))
          }
        >
          <BackSvg />
        </span>
        <span
          style={{
            fontWeight: 'bold',
            padding: '0 2.188rem',
            fontSize: '1.25rem',
          }}
        >
          {capitalize(formatDate)}
        </span>
        <span
          style={{ cursor: 'pointer' }}
          onClick={() =>
            dispatch(setSelectedCalendarMonth(getNextMonth(currentMonth)))
          }
        >
          <ForwardSvg />
        </span>
      </div>
      <CalendarBody dates={dates} />
    </Wrapper>
  );
};

export default Calendar;
