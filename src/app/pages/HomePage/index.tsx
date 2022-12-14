import * as React from 'react';
import Calendar from '../../components/calendar/Calendar';
import Header from '../../components/header/Header';
import styled from 'styled-components';
import Sidebar from '../../components/sidebar/Sidebar';

export function HomePage() {
  return (
    <Wrapper>
      <Header />
      <Row>
        <CustomCalendar />
        <Sidebar />
      </Row>
    </Wrapper>
  );
}

const CustomCalendar = styled(Calendar)`
  margin-right: 1.875rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 1.875rem;
  max-height: 90vh;
`;
