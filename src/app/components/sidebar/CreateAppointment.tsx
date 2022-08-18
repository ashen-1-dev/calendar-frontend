import React, { useState } from 'react';
import Input from '../inputs/Input';
import RadioGroup from '../radio/RadioGroup';
import { RadioOption } from '../radio/Radio';
import { AppointmentType } from '../../models/Appointment';
import MyDatetimePicker from '../datepicker/MyDatetimePicker';
import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import TagInput from '../tag-input/TagInput';
import Button from '../buttons/Button';
import { Field, Form } from 'react-final-form';
import { OnChange } from 'react-final-form-listeners';

const Label = styled.div`
  margin-bottom: 0.625rem;
  font-size: 0.875rem;
  color: ${Colors.DefaultDark};
  font-weight: 500;
`;

const Wrapper = styled.div`
  padding: 2.188rem 1.875rem;
`;

const VerticalLine = styled.div`
  margin: 1.563rem 0 0;
  border: solid 2px ${Colors.LightGrey3};
`;

const Row = styled.div`
  padding-bottom: 1.875rem;
`;

const ButtonContainer = styled.div`
  padding-top: calc(2.188rem - 1.875rem);
`;

const radioOptions: RadioOption[] = [
  { value: 'holiday', name: 'Праздник' },
  { value: 'event', name: 'Мероприятие' },
  { value: 'other', name: 'Другое' },
];

const validation = (values: { name: string; date: Date }) => {
  const errors: { name?: string; date?: string } = {};
  if (!values.name) {
    errors.name = 'Обязательное поле';
  }
  if (!values.date) {
    errors.date = 'Обязательное поле';
  }
  return errors;
};

export interface CreateAppointmentProps {
  onCreate: () => void;
}

const CreateAppointment = ({ onCreate }) => {
  const [input, setInput] = useState({ label: 'Бюджет', inputProps: {} });
  const handleOnClick = () => {
    onCreate();
  };

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

  const onSubmit = data => console.log(data);

  return (
    <Form
      validate={validation}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
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
              <Field name={'date'}>
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
                type={'submit'}
                onClick={handleOnClick}
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

export default CreateAppointment;
