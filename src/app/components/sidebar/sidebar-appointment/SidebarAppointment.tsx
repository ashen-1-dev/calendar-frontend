import React from 'react';
import { Appointment, EventAttribute } from '../../../models/Appointment';
import { ReactComponent as EditSvg } from '../../buttons/assets/edit.svg';
import { ReactComponent as DeleteSvg } from '../../buttons/assets/delete.svg';
import format from 'date-fns/format';
import Button from '../../buttons/Button';
import useHover from '../../../hooks/useHover';
import {
  Circle,
  Row,
  ButtonContainer,
  TagContainer,
  ColoredText,
  Wrapper,
  RemainingTime,
} from './styled';
import { msToTime } from '../../../helpers/dates';
import { useRemainingTimeUntilNow } from '../../../hooks/useRemainingUntilNow';

interface AppointmentProps {
  appointment: Appointment;
  onDelete: (appointment: Appointment) => void;
  onEdit: (appointment: Appointment) => void;
}

const SidebarAppointment = (props: AppointmentProps) => {
  const { appointment, onDelete, onEdit } = props;
  const [onMouseOver, onMouseOut, isHover] = useHover();
  const remainingTime = useRemainingTimeUntilNow(new Date(appointment.date));
  console.log(remainingTime);
  const isLessThanOneDay = remainingTime / 1000 / 60 / 60 / 24 < 1;
  const formatRemainingTime = msToTime(remainingTime);

  const formatDate = format(appointment.date, 'HH:mm');
  return (
    <Wrapper hover={isHover} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <Row>
        <Circle type={appointment.state.type} />
        <ColoredText
          style={{ fontWeight: 'bold' }}
          type={appointment.state.type}
        >
          {formatDate}
        </ColoredText>
        <ColoredText
          style={{ fontWeight: 'bold' }}
          type={appointment.state.type}
        >
          {appointment.name}
        </ColoredText>
        {remainingTime > 0 && isLessThanOneDay && (
          <RemainingTime>Осталось {formatRemainingTime}</RemainingTime>
        )}
      </Row>
      <Row style={{ fontSize: '0.875rem', paddingLeft: '1.5rem' }}>
        <ColoredText style={{ opacity: 0.7 }} type={appointment.state.type}>
          {EventAttribute[appointment.state.type]}:
        </ColoredText>
        {appointment.state.value}
      </Row>
      <Row style={{ paddingLeft: '1.5rem' }}>
        {appointment.tags &&
          appointment.tags.map(tag => (
            <TagContainer key={tag.id}>{tag.name}</TagContainer>
          ))}
        {isHover && (
          <ButtonContainer>
            <Button
              onClick={() => onEdit(appointment)}
              variant={'primary'}
              size={'very-small'}
            >
              <EditSvg />
            </Button>
            <Button
              onClick={() => onDelete(appointment)}
              variant={'primary'}
              size={'very-small'}
            >
              <DeleteSvg />
            </Button>
          </ButtonContainer>
        )}
      </Row>
    </Wrapper>
  );
};

export default SidebarAppointment;
