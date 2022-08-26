import React, { useState } from 'react';
import format from 'date-fns/format';
import { ru } from 'date-fns/locale';
import Button from '../buttons/Button';
import { ReactComponent as PlusSvg } from '../buttons/assets/plus.svg';
import AppointmentList from './appointment-list/AppointmentList';
import RoundButton from '../buttons/RoundButton';
import Select from '../selects/Select';
import { ReactComponent as ReverseOrderSvg } from '../buttons/assets/reverse-order.svg';
import useSortedAppointments from '../../hooks/useSortedAppointments';
import AppointmentDialog from './dialogs/Appointment.dialog';
import { Appointment } from '../../models/Appointment';
import ConfirmDeleteDialog from './dialogs/ConfirmDelete.dialog';
import { appointmentSortOptions } from './sort-options';
import {
  SelectContainer,
  ButtonContainer,
  Container,
  AppointmentContainer,
  NoAppointments,
  DateText,
  ReverseButton,
} from './styled';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectActiveAppointments } from '../../../store/appointments/selectors';
export interface SidebarProps {
  className?: string;
}

const Sidebar = (props: SidebarProps) => {
  const { className } = props;
  const [modalActive, setModalActive] = useState(false);

  const [closeModalActive, setCloseModalActive] = useState(false);
  const [appointmentToDelete, setAppointmentToDelete] =
    useState<Appointment | null>(null);
  const [appointmentToEdit, setAppointmentToEdit] =
    useState<Appointment | null>(null);

  const onDeleteAppointment = (appointment: Appointment) => {
    setAppointmentToDelete(appointment);
    setAppointmentToEdit(null);
    setCloseModalActive(true);
  };

  const onEditAppointment = (appointment: Appointment) => {
    setAppointmentToEdit(appointment);
    setAppointmentToDelete(null);
    setCloseModalActive(true);
  };

  const { date, appointments } = useAppSelector(selectActiveAppointments);
  const [
    sortedAndOrderedAppointments,
    handleOnSortChange,
    handleOnReverseOrder,
    selectedSortOption,
  ] = useSortedAppointments(appointments, appointmentSortOptions[0]);

  const formatDate = format(new Date(date), 'dd MMMM yyyy', { locale: ru });
  const hasAppointments = appointments.length !== 0;
  return (
    <>
      {appointmentToDelete && (
        <ConfirmDeleteDialog
          showCloseIcon={false}
          active={closeModalActive}
          setActive={setCloseModalActive}
          appointment={appointmentToDelete}
        />
      )}
      {appointmentToEdit && (
        <AppointmentDialog
          active={closeModalActive}
          setActive={setCloseModalActive}
          appointment={appointmentToEdit}
        />
      )}
      <Container className={className}>
        <AppointmentDialog active={modalActive} setActive={setModalActive} />
        {!hasAppointments ? (
          <NoAppointments>
            <DateText style={{ marginBottom: '1.563rem' }}>
              События на {formatDate}
            </DateText>
            <Button
              onClick={() => setModalActive(true)}
              icon={
                <PlusSvg style={{ width: '0.875rem', height: '0.875rem' }} />
              }
              size={'large'}
              variant={'primary'}
            >
              Добавить событие
            </Button>
          </NoAppointments>
        ) : (
          <AppointmentContainer>
            <DateText>События на {formatDate}</DateText>
            <SelectContainer>
              <ReverseButton onClick={handleOnReverseOrder} variant={'primary'}>
                <ReverseOrderSvg />
              </ReverseButton>
              <Select
                onChange={handleOnSortChange}
                selectedOption={selectedSortOption}
                options={appointmentSortOptions}
              />
            </SelectContainer>
            <AppointmentList
              onEdit={onEditAppointment}
              onDelete={onDeleteAppointment}
              appointments={sortedAndOrderedAppointments}
            />
            <ButtonContainer>
              <RoundButton onClick={() => setModalActive(true)} />
            </ButtonContainer>
          </AppointmentContainer>
        )}
      </Container>
    </>
  );
};

export default Sidebar;
