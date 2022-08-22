import * as React from 'react';
import { useState } from 'react';
import Calendar from '../../components/calendar/Calendar';
import Header from '../../components/header/Header';
import styled from 'styled-components';
import Sidebar from '../../components/sidebar/Sidebar';
import { useDispatch } from 'react-redux';
import { GET_APPOINTMENTS } from '../../../store/appointments/actions';

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
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Header />
      <button
        onClick={() =>
          dispatch({
            type: GET_APPOINTMENTS,
            payload: {
              startDate: new Date('2021-01-01').getTime(),
              endDate: new Date('2023-01-01').getTime(),
            },
          })
        }
      >
        dsadsda
      </button>
      <Row>
        <CustomCalendar date={date} setDate={setDate} />
        <Sidebar />
      </Row>
    </Wrapper>
  );
}
