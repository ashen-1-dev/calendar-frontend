import React, { useState } from 'react';
import Input from '../../inputs/Input';
import RadioGroup from '../../radio/RadioGroup';
import { Appointment, AppointmentType } from '../../../models/Appointment';
import MyDatetimePicker from '../../datepicker/MyDatetimePicker';
import { Row, Wrapper, Label, ButtonContainer, VerticalLine } from './styled';
import TagInput from '../../tag-input/TagInput';
import Button from '../../buttons/Button';
import { Field, Form } from 'react-final-form';
import { OnChange } from 'react-final-form-listeners';
import {
  createAppointment,
  updateAppointment,
} from '../../../../store/appointments/actions';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { validation } from './validation';
import { radioOptions } from './radio-options';

export interface CreateAppointmentProps {
  onSuccess: () => void;
  appointmentToEdit?: Appointment;
}

const AppointmentForm = ({
  onSuccess,
  appointmentToEdit,
}: CreateAppointmentProps) => {
  const [input, setInput] = useState({ label: 'Бюджет', inputProps: {} });
  const dispatch = useAppDispatch();
  const { date } = useAppSelector(state => state.selectedDayState);
  const handleOnChange = (type: AppointmentType) => {
    switch (type) {
      case AppointmentType.Holiday: {
        setInput({
          label: 'Бюджет',
          inputProps: { placeholder: 'Введите бюджет' },
        });
        break;
      }
      case AppointmentType.Event: {
        setInput({
          label: 'Адрес',
          inputProps: { placeholder: 'Введите адрес' },
        });
        break;
      }
      case AppointmentType.Other: {
        setInput({
          label: 'Комментарий',
          inputProps: { placeholder: 'Введите комментария' },
        });
        break;
      }
    }
  };

  const onSubmit = data => {
    onSuccess();
    const appointment: Appointment = data;
    appointment.date = data.date.getTime();
    !appointmentToEdit
      ? dispatch(createAppointment(appointment))
      : dispatch(updateAppointment(appointmentToEdit.uuid, appointment));
  };

  return (
    <Form
      validate={validation}
      onSubmit={onSubmit}
      initialValues={
        !appointmentToEdit
          ? undefined
          : { ...appointmentToEdit, date: new Date(appointmentToEdit!.date) }
      }
      render={({ handleSubmit, valid }) => (
        <form onSubmit={handleSubmit}>
          <VerticalLine />
          <Wrapper>
            <Row>
              <Label>Название</Label>
              <Field name={'name'}>
                {props => (
                  <div>
                    {props.meta.error && props.meta.touched && (
                      <span>{props.meta.error}</span>
                    )}
                    <Input
                      name={props.input.name}
                      value={props.input.value}
                      onChange={props.input.onChange}
                    />
                  </div>
                )}
              </Field>
            </Row>
            <Row>
              <Label>Тип события</Label>
              <Field name={'state.type'}>
                {props => (
                  <div>
                    {props.meta.error && props.meta.touched && (
                      <span>{props.meta.error}</span>
                    )}
                    <RadioGroup
                      name={props.input.name}
                      value={props.input.value}
                      onChange={props.input.onChange}
                      options={radioOptions}
                    />
                  </div>
                )}
              </Field>
              <OnChange name="state.type">
                {value => handleOnChange(value)}
              </OnChange>
            </Row>
            <Row>
              <Label>Дата и время</Label>
              <Field
                defaultValue={!appointmentToEdit ? new Date(date) : undefined}
                name={'date'}
              >
                {props => (
                  <div>
                    {props.meta.error && props.meta.touched && (
                      <span>{props.meta.error}</span>
                    )}
                    <MyDatetimePicker
                      value={props.input.value}
                      onChange={props.input.onChange}
                    />
                  </div>
                )}
              </Field>
            </Row>
            <Row>
              <Label>{input.label}</Label>
              <Field name={'state.value'}>
                {props => (
                  <Input
                    name={props.input.name}
                    value={props.input.value}
                    onChange={props.input.onChange}
                    {...input.inputProps}
                  />
                )}
              </Field>
            </Row>
            <Row>
              <Label>Теги</Label>
              <Field name={'tags'}>
                {props => (
                  <TagInput
                    tags={props.input.value}
                    onChange={props.input.onChange}
                    placeholder={'Введите тег'}
                    size={'medium'}
                    name={props.input.name}
                  />
                )}
              </Field>
            </Row>
            <ButtonContainer>
              <Button
                disabled={!valid}
                type={'submit'}
                variant={'primary'}
                size={'large'}
              >
                Добавить событие
              </Button>
            </ButtonContainer>
          </Wrapper>
        </form>
      )}
    />
  );
};

export default AppointmentForm;
