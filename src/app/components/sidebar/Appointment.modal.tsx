import React from 'react';
import CreateAppointment from './CreateAppointment';
import Modal from '../modal/Modal';

export interface AppointmentModalProps {
  active: boolean;
  setActive: (state: boolean) => void;
}

const AppointmentModal = ({ active, setActive }: AppointmentModalProps) => {
  const onCreate = () => {
    setActive(false);
  };
  return (
    <Modal active={active} label={'Добавить событие'} setActive={setActive}>
      <CreateAppointment onCreate={onCreate} />
    </Modal>
  );
};

export default AppointmentModal;
