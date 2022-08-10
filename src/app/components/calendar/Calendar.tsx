import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import CalendarCell from './CalendarCell';
import {
  CALENDAR_COLUMN,
  CALENDAR_ROW,
  WEEK_DAYS,
} from '../../constants/constants';

interface CalendarProps {
  dates: Date[];
}

const Wrapper = styled.div`
  display: grid;

  height: 46.438rem;
  width: 86.25rem;
  grid-template-columns: repeat(${CALENDAR_COLUMN}, 1fr);
  grid-template-rows: repeat(${CALENDAR_ROW + 1}, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
`;

const Header = styled.div`
  font-weight: 500;
  justify-self: center;
`;

const Calendar = (props: CalendarProps) => {
  const { dates } = props;
  const [selectedCellId, setSelectedCellId] = useState(-1);
  const onCellClick = useCallback(
    date => setSelectedCellId(date.getTime()),
    [],
  );
  return (
    <Wrapper>
      {WEEK_DAYS.map(day => (
        <Header key={day}>{day}</Header>
      ))}
      {dates.map(date => {
        const isCellSelected = selectedCellId === date.getTime();
        return (
          <CalendarCell
            key={date.getTime()}
            onClick={onCellClick}
            selected={isCellSelected}
            date={date}
          />
        );
      })}
    </Wrapper>
  );
};

export default Calendar;
