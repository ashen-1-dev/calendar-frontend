import React from 'react';
import Modal, { ModalProps } from '../../modal/Modal';
import { Appointment } from '../../../models/Appointment';
import Button from '../../buttons/Button';
import styled from 'styled-components';

interface ConfirmDeleteDialogProps extends ModalProps {
  appointment: Appointment;
}

const Wrapper = styled.div`
  display: flex;
  padding: 0 3.125rem 2.188rem 3.125rem;
  flex-direction: column;
  gap: 1.875rem;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.625rem;
`;

const Text = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`;

const ConfirmDeleteDialog = ({
  active,
  setActive,
  appointment,
  ...rest
}: ConfirmDeleteDialogProps) => {
  if (!appointment) {
    return null;
  }
  return (
    <Modal setActive={setActive} active={active} {...rest}>
      <Wrapper>
        <Text>Удалить событие "{appointment.name}"?</Text>
        <ButtonContainer>
          <Button variant={'primary'} size={'medium'}>
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
