import React, { useState } from 'react';
import styled from 'styled-components';
import CalendarCell from './CalendarCell';

interface CalendarProps {
  dates: Date[];
}

const Wrapper = styled.div`
  display: grid;
  height: 46.438rem;
  width: 86.25rem;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
`;

const TableRow = styled.tr``;
const TableHeader = styled.th``;

const Calendar = (props: CalendarProps) => {
  const { dates } = props;
  const [selectedCellId, setSelectedCellId] = useState(-1);

  return (
    <Wrapper>
      {dates.map(date => {
        const isCellSelected = selectedCellId === date.getTime();
        return (
          <CalendarCell
            key={date.getTime()}
            onClick={() => setSelectedCellId(date.getTime())}
            selected={isCellSelected}
            date={date}
          />
        );
      })}
    </Wrapper>
  );
};

export default Calendar;
