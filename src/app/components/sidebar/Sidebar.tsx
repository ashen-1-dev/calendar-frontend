import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';
import { ru } from 'date-fns/locale';
import Button from '../buttons/Button';
import { ReactComponent as PlusSvg } from '../buttons/assets/plus.svg';
import AppointmentList from './AppointmentList';
import useSelectedDate from '../../hooks/useSelectedDate';
import RoundButton from '../buttons/RoundButton';
import Select, { SelectOption } from '../selects/Select';
import { Colors } from '../../../styles/colors';
import { ReactComponent as ReverseOrderSvg } from '../buttons/assets/reverse-order.svg';
import useSortedAppointments from '../../hooks/useSortedAppointments';
import AppointmentDialog from './dialogs/Appointment.dialog';
import { Appointment } from '../../models/Appointment';
import ConfirmDeleteDialog from './dialogs/ConfirmDelete.dialog';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
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
  height: 100%;
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  position: relative;
`;

const ButtonContainer = styled.div`
  margin-left: auto;
  margin-top: auto;
  position: sticky;
  padding-bottom: 1.25rem;
  padding-right: 0.688rem;
  bottom: 0;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 1.25rem 0;
`;

const ReverseButton = styled(Button)`
  && {
    width: 3.125rem;
    border-radius: 5px;
    background-color: ${Colors.LightGrey3};
  }
`;

export interface SidebarProps {
  className?: string;
}

const options: SelectOption[] = [
  { name: 'Сортировка по времени начала', value: 'date' },
  { name: 'Сортировка по количеству тегов', value: 'tag' },
  { name: 'Сортировка по названию', value: 'name' },
];

const Sidebar = (props: SidebarProps) => {
  const { className } = props;
  const { date, appointments } = useSelectedDate();
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

  const [
    sortedAndOrderedAppointments,
    handleOnSortChange,
    handleOnReverseOrder,
    selectedSortOption,
  ] = useSortedAppointments(appointments, options[0]);

  const formatDate = format(date, 'dd MMMM yyyy', { locale: ru });
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
                options={options}
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
