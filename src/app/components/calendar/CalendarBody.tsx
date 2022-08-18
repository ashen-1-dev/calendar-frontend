import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import CalendarCell from './CalendarCell';
import {
  CALENDAR_COLUMN,
  CALENDAR_ROW,
  WEEK_DAYS,
} from '../../constants/constants';
import {
  mockAppointments,
  setSelectedDateAction,
} from '../../../store/selected-date/selectedDateReducer';
import { useDispatch } from 'react-redux';
import { Colors } from '../../../styles/colors';

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

const CalendarCellWrapper = styled.div`
  border: solid 1px ${Colors.LightGrey3};
`;
const CalendarBody = (props: CalendarBodyProps) => {
  const { dates } = props;
  const [selectedCellId, setSelectedCellId] = useState(-1);
  const dispatch = useDispatch();
  const onCellClick = useCallback(date => {
    setSelectedCellId(date.getTime());
    dispatch(
      setSelectedDateAction({ date: date, appointments: mockAppointments }),
    );
  }, []);
  return (
    <Wrapper>
      {WEEK_DAYS.map(day => (
        <Header key={day}>
          <div>{day}</div>
        </Header>
      ))}
      {dates.map(date => {
        const isCellSelected = selectedCellId === date.getTime();
        return (
          <CalendarCellWrapper>
            <CalendarCell
              key={date.getTime()}
              onClick={onCellClick}
              selected={isCellSelected}
              date={date}
            />
          </CalendarCellWrapper>
        );
      })}
    </Wrapper>
  );
};

export default CalendarBody;
