import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { ru } from 'date-fns/locale';

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
  border: none;
  border-radius: 5px;
  background-color: ${Colors.LightGrey3};
  color: ${Colors.LightGrey2};
  padding-left: 1.25rem;
  :focus-within {
    outline: none;
    border: 1px solid ${Colors.Blue};
  }
  ::placeholder {
    opacity: inherit;
  }
`;

const MyDatetimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  return (
    <Wrapper>
      <StyledDatePicker
        type={'date'}
        locale={ru}
        selected={selectedDate}
        // @ts-ignore
        onChange={(date: Date) => setSelectedDate(date)}
        dateFormat="dd MMMM	yyyy"
      />
      <StyledDatePicker
        locale={ru}
        type={'time'}
        selected={selectedTime}
        // @ts-ignore
        onChange={time => setSelectedTime(time)}
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
