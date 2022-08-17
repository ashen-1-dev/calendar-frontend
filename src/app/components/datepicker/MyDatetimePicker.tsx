import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { ru } from 'date-fns/locale';
import mergeDateAndTime from '../../../helpers/dates/merge-date-and-time';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.625em;
  .react-datepicker-wrapper {
    width: inherit;
  }
`;
export interface StyledDatePickerProps {
  type?: 'time' | 'date';
}
const StyledDatePicker = styled(DatePicker)<StyledDatePickerProps>`
  width: 14.375em;
  height: 3.125em;
  padding-left: 1.25rem;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  background-color: ${Colors.LightGrey3};
  color: ${({ type }) =>
    type === 'date' ? Colors.LightGrey2 : Colors.DefaultDark};
  :focus-within {
    outline: none;
    border: 1px solid ${Colors.Blue};
  }
  ::placeholder {
    color: ${Colors.LightGrey2};
  }
`;

interface DatetimePickerProps {
  value?: Date;
  onChange: (date: Date | undefined) => void;
}

const MyDatetimePicker = (props: DatetimePickerProps) => {
  const { value, onChange } = props;
  const handleOnChangeDate = (date: Date) => {
    if (!date) {
      return;
    }
    const newDate = mergeDateAndTime(date, value);
    onChange(newDate);
  };

  const handleOnChangeTime = (time: Date) => {
    if (!time) {
      return;
    }
    const newDate = mergeDateAndTime(value, time);
    onChange(newDate);
  };
  return (
    <Wrapper>
      <StyledDatePicker
        type={'date'}
        locale={ru}
        selected={value || new Date()}
        placholderText="Введите дату"
        onChange={date => handleOnChangeDate(date)}
        dateFormat="dd MMMM	yyyy"
      />
      <StyledDatePicker
        locale={ru}
        type={'time'}
        selected={value}
        onChange={time => handleOnChangeTime(time)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Время"
        dateFormat="HH : mm"
        placeholderText="Введите время начала"
      />
    </Wrapper>
  );
};

export default MyDatetimePicker;
