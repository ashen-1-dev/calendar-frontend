import React from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';
import { ru } from 'date-fns/locale';
import Button from '../buttons/Button';
import { ReactComponent as PlusSvg } from '../buttons/assets/plus.svg';
import { Appointment, AppointmentType } from '../../models/Appointment';
import AppointmentList from './AppointmentList';
import { Tag } from '../../models/Tag';

const Wrapper = styled.aside`
  display: flex;
`;
const DateText = styled.span`
  font-weight: bold;
  font-size: 1.25rem;
  text-align: center;
`;

const NoAppointments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25.625rem 5.375rem;
`;

const AppointmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export interface SidebarProps {
  className?: string;
  selectedDate: Date;
}

const Sidebar = (props: SidebarProps) => {
  const { className, selectedDate } = props;
  const formatDate = format(selectedDate, 'dd MMMM yyyy', { locale: ru });
  // get from redux global state by date
  const tags: Tag[] = [
    { name: 'Важно', id: 1, description: 'dsada' },
    { name: 'не Важно', id: 2, description: '234123' },
  ];
  const appointments: Appointment[] = [
    {
      date: new Date(),
      state: { name: 'Бюджет', value: '1500' },
      type: AppointmentType.Holiday,
      name: 'Днюха',
      tags: tags,
    },
  ];
  return (
    <Wrapper className={className}>
      {appointments.length === 0 ? (
        <NoAppointments>
          <DateText style={{ marginBottom: '1.563rem' }}>
            События на {formatDate}
          </DateText>
          <Button
            onClick={() => null}
            icon={<PlusSvg style={{ width: '0.875rem', height: '0.875rem' }} />}
            size={'large'}
            variant={'primary'}
          >
            Добавить событие
          </Button>
        </NoAppointments>
      ) : (
        <AppointmentContainer>
          <DateText>События на {formatDate}</DateText>
          <AppointmentList appointments={appointments} />
        </AppointmentContainer>
      )}
    </Wrapper>
  );
};

export default Sidebar;
