import React from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';
import { ru } from 'date-fns/locale';
import Button from '../buttons/Button';
import { ReactComponent as PlusSvg } from '../buttons/assets/plus.svg';
import { Appointment } from '../../models/Appointment';

const Wrapper = styled.aside`
  display: flex;
`;
const DateText = styled.span`
  font-weight: bold;
`;

const NoAppointments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25.625rem 5.375rem;
`;

export interface SidebarProps {
  className?: string;
  selectedDate: Date;
}

const Sidebar = (props: SidebarProps) => {
  const { className, selectedDate } = props;
  const formatDate = format(selectedDate, 'dd MMMM yyyy', { locale: ru });
  // get from redux global state by date
  const appointments: Appointment[] = [];
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
        <div></div>
      )}
    </Wrapper>
  );
};

export default Sidebar;
