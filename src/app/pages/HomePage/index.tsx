import * as React from 'react';
import Calendar from '../../components/calendar/Calendar';
import Header from '../../components/header/Header';
import styled from 'styled-components';
import Sidebar from '../../components/sidebar/Sidebar';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

const CustomCalendar = styled(Calendar)`
  margin-right: 1.875rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  position: relative;
  padding: 1.875rem;
`;
export function HomePage() {
  const dispatch = useAppDispatch();
  const { dateTime } = useAppSelector(state => state.selectedCalendarMonth);
  return (
    <Wrapper>
      <Header />
      <Row>
        <CustomCalendar date={new Date(dateTime)} />
        <Sidebar />
      </Row>
    </Wrapper>
  );
}
