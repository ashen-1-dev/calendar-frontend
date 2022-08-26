import React from 'react';
import AppointmentForm from '../appointment-form/AppointmentForm';
import Modal from '../../modal/Modal';
import { Appointment } from '../../../models/Appointment';

export interface AppointmentModalProps {
  active: boolean;
  setActive: (state: boolean) => void;
  appointment?: Appointment;
}

const AppointmentDialog = ({
  active,
  setActive,
  appointment,
}: AppointmentModalProps) => {
  const onCreate = () => {
    setActive(false);
  };
  const labelName = !appointment ? 'Добавить событие' : 'Редактировать событие';
  return (
    <Modal active={active} label={labelName} setActive={setActive}>
      <AppointmentForm appointmentToEdit={appointment} onSuccess={onCreate} />
    </Modal>
  );
};

export default AppointmentDialog;
