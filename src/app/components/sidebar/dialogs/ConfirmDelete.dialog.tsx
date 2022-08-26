import React from 'react';
import Modal, { ModalProps } from '../../modal/Modal';
import { Appointment } from '../../../models/Appointment';
import Button from '../../buttons/Button';
import { removeAppointment } from '../../../../store/appointments/actions';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { Wrapper, Text, ButtonContainer } from './styled-confirm-delete-dialog';

interface ConfirmDeleteDialogProps extends ModalProps {
  appointment: Appointment;
}

const ConfirmDeleteDialog = ({
  active,
  setActive,
  appointment,
  ...rest
}: ConfirmDeleteDialogProps) => {
  const dispatch = useAppDispatch();
  if (!appointment) {
    return null;
  }
  const handleOnClick = () => {
    dispatch(removeAppointment(appointment.uuid));
    setActive(false);
  };
  return (
    <Modal setActive={setActive} active={active} {...rest}>
      <Wrapper>
        <Text>Удалить событие "{appointment.name}"?</Text>
        <ButtonContainer>
          <Button onClick={handleOnClick} variant={'primary'} size={'medium'}>
            Удалить
          </Button>
          <Button
            onClick={() => setActive(false)}
            variant={'secondary'}
            size={'medium'}
          >
            Отмена
          </Button>
        </ButtonContainer>
      </Wrapper>
    </Modal>
  );
};

export default ConfirmDeleteDialog;
