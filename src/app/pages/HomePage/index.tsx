import * as React from 'react';
import { useState } from 'react';
import Calendar from '../../components/calendar/Calendar';
import Header from '../../components/header/Header';
import styled from 'styled-components';
import Sidebar, { SidebarProps } from '../../components/sidebar/Sidebar';
import SidebarAppointment from '../../components/sidebar/SidebarAppointment';
import { Appointment, AppointmentType } from '../../models/Appointment';
import { Tag } from '../../models/Tag';

export function HomePage() {
  const [date, setDate] = useState(new Date());

  const Wrapper = styled.div`
    display: grid;
    grid-template-areas:
      'header header'
      'main   sidebar';
  `;
  const CustomHeader = styled(Header)`
    grid-area: header;
  `;

  const CustomSidebar = styled(Sidebar)<SidebarProps>`
    grid-area: sidebar;
  `;
  const CustomCalendar = styled(Calendar)`
    grid-area: main;
  `;

  return (
    <Wrapper>
      <CustomHeader />
      <CustomCalendar date={date} setDate={setDate} />
      <CustomSidebar selectedDate={date} />
    </Wrapper>
  );
}
