import React from 'react';
import { Appointment, AppointmentType } from '../../models/Appointment';
import styled from 'styled-components';
import { ReactComponent as EditSvg } from '../buttons/assets/edit.svg';
import { ReactComponent as DeleteSvg } from '../buttons/assets/delete.svg';
import format from 'date-fns/format';
import { Colors } from '../../../styles/colors';
import Button from '../buttons/Button';

interface AppointmentProps {
  appointment: Appointment;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.125rem;
  gap: 0.625rem;
  width: 28.125rem;
  height: 8.188rem;
  padding: 1.25rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  flex-direction: row;
`;
const TagContainer = styled.div`
  padding: 0.313rem 0.938rem;
  font-size: 0.875rem;
  border-radius: 14px;
  background-color: ${Colors.LightGrey3};
`;

const ColoredText = styled.span<{ type: AppointmentType }>`
  color: ${({ type }) => {
    switch (type) {
      case AppointmentType.Holiday: {
        return Colors.Pink;
      }
      case AppointmentType.Event: {
        return Colors.Green;
      }
      case AppointmentType.Other: {
        return Colors.Yellow;
      }
    }
  }};
`;

const Circle = styled.div<{ type: AppointmentType }>`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50px;
  background-color: ${({ type }) => {
    switch (type) {
      case AppointmentType.Holiday: {
        return Colors.Pink;
      }
      case AppointmentType.Event: {
        return Colors.Green;
      }
      case AppointmentType.Other: {
        return Colors.Yellow;
      }
    }
  }};
`;

const SidebarAppointment = (props: AppointmentProps) => {
  const { appointment } = props;
  const formatDate = format(appointment.date, 'HH:mm');
  return (
    <Wrapper>
      <Row>
        <Circle type={appointment.type} />
        <ColoredText style={{ fontWeight: 'bold' }} type={appointment.type}>
          {formatDate}
        </ColoredText>
        <ColoredText style={{ fontWeight: 'bold' }} type={appointment.type}>
          {appointment.name}
        </ColoredText>
      </Row>
      <Row style={{ fontSize: '0.875rem', paddingLeft: '1.5rem' }}>
        <ColoredText style={{ opacity: 0.7 }} type={appointment.type}>
          {appointment.state.name}
        </ColoredText>{' '}
        {appointment.state.value}
      </Row>
      <Row style={{ paddingLeft: '1.5rem' }}>
        {appointment.tags &&
          appointment.tags.map(tag => (
            <TagContainer key={tag.id}>{tag.name}</TagContainer>
          ))}
        <Button variant={'primary'} size={'very-small'}>
          <EditSvg />
        </Button>
        <Button variant={'primary'} size={'very-small'}>
          <DeleteSvg />
        </Button>
      </Row>
    </Wrapper>
  );
};

export default SidebarAppointment;
