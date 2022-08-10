import React, { HTMLProps, useEffect } from 'react';
import { ReactComponent as BackSvg } from './assets/back.svg';
import { ReactComponent as ForwardSvg } from './assets/forward.svg';
import CalendarBody from './CalendarBody';
import styled from 'styled-components';
import { fillDates } from '../../helpers/dates';
import format from 'date-fns/format';
import { ru } from 'date-fns/locale';
import capitalize from 'lodash/capitalize';

interface CalendarProps extends HTMLProps<HTMLDivElement> {
  date: Date;
  setDate: (date) => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Calendar = (props: CalendarProps) => {
  const { date, setDate } = props;
  const formatDate = format(date, 'LLLL yyyy', { locale: ru });
  const dates = fillDates(date.getMonth(), date.getFullYear());
  const getPrevMonth = () => {
    setDate(prev => {
      if (prev.getMonth() === 0) {
        console.log('prev');
        return new Date(prev.getFullYear() - 1, 11, 1);
      }
      return new Date(prev.getFullYear(), prev.getMonth() - 1, 1);
    });
  };
  const getNextMonth = () => {
    console.log(date);
    setDate(prev => {
      if (prev.getMonth() === 11) {
        console.log('next');
        return new Date(prev.getFullYear() + 1, 0, 1);
      }
      return new Date(prev.getFullYear(), prev.getMonth() + 1, 1);
    });
  };
  return (
    <Wrapper>
      <div
        style={{ alignSelf: 'center', padding: '2.5rem', userSelect: 'none' }}
      >
        <span style={{ cursor: 'pointer' }} onClick={getPrevMonth}>
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
        <span style={{ cursor: 'pointer' }} onClick={getNextMonth}>
          <ForwardSvg />
        </span>
      </div>
      <CalendarBody dates={dates} />
    </Wrapper>
  );
};

export default Calendar;
