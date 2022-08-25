import React, { HTMLProps } from 'react';
import { ReactComponent as BackSvg } from './assets/back.svg';
import { ReactComponent as ForwardSvg } from './assets/forward.svg';
import CalendarBody from './CalendarBody';
import styled from 'styled-components';
import { fillDates } from '../../helpers/dates';
import format from 'date-fns/format';
import { ru } from 'date-fns/locale';
import capitalize from 'lodash/capitalize';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setSelectedCalendarMonth } from '../../../store/selected-calendar-month/actions';

interface CalendarProps extends HTMLProps<HTMLDivElement> {
  date: Date;
  className?: string;
}

const Wrapper = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  border-radius: 10px;
`;

const Calendar = (props: CalendarProps) => {
  const { date, className } = props;
  const dispatch = useAppDispatch();
  const formatDate = format(date, 'LLLL yyyy', { locale: ru });
  const dates = fillDates(date.getMonth(), date.getFullYear());
  const getPrevMonth = () => {
    if (date.getMonth() === 0) {
      return new Date(date.getFullYear() - 1, 11, 1).getTime();
    }
    return new Date(date.getFullYear(), date.getMonth() - 1, 1).getTime();
  };
  const getNextMonth = () => {
    if (date.getMonth() === 11) {
      return new Date(date.getFullYear() + 1, 0, 1).getTime();
    }
    return new Date(date.getFullYear(), date.getMonth() + 1, 1).getTime();
  };
  return (
    <Wrapper className={className}>
      <div
        style={{ alignSelf: 'center', padding: '2.5rem', userSelect: 'none' }}
      >
        <span
          style={{ cursor: 'pointer' }}
          onClick={() => dispatch(setSelectedCalendarMonth(getPrevMonth()))}
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
          onClick={() => dispatch(setSelectedCalendarMonth(getNextMonth()))}
        >
          <ForwardSvg />
        </span>
      </div>
      <CalendarBody dates={dates} />
    </Wrapper>
  );
};

export default Calendar;
