import * as React from 'react';
import { useState } from 'react';
import Calendar from '../../components/calendar/Calendar';
import Header from '../../components/header/Header';
import styled from 'styled-components';
import Sidebar from '../../components/sidebar/Sidebar';

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
  const [date, setDate] = useState(new Date());
  return (
    <Wrapper>
      <Header />
      <Row>
        <CustomCalendar date={date} setDate={setDate} />
        <Sidebar />
      </Row>
    </Wrapper>
  );
}
