import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { ru } from 'date-fns/locale';
import mergeDateAndTime from '../../../helpers/dates/merge-date-and-time';
import { StyledDatePicker } from './styled';
import { Wrapper } from './styled';

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
