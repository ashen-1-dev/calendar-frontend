import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Button from '../../components/buttons/Button';
import RoundButton from '../../components/buttons/RoundButton';
import { ReactComponent as EditSvg } from '../../components/buttons/assets/edit.svg';
import { ReactComponent as DeleteSvg } from '../../components/buttons/assets/delete.svg';
import Radio, { RadioOption, RadioProps } from '../../components/radio/Radio';
import RadioGroup from 'app/components/radio/RadioGroup';
import MyDatetimePicker from 'app/components/datepicker/MyDatetimePicker';
import { useState } from 'react';

export function HomePage() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const options: RadioOption[] = [
    { type: 'holiday', label: 'Событие' },
    { type: 'event', label: 'Событие' },
    { type: 'other', label: 'Событие' },
  ];
  return (
    <div>
      <Button size={'large'} variant={'primary'}>
        Редактировать теги
      </Button>
      <br />
      <Button size={'medium'} variant={'primary'}>
        Удалить
      </Button>
      <br />
      <Button size={'medium'} variant={'secondary'}>
        Отмена
      </Button>
      <br />
      <RoundButton />
      <br />
      <Button size={'very-small'} variant={'primary'}>
        <EditSvg />
      </Button>
      <br />
      <Button size={'very-small'} variant={'primary'}>
        <DeleteSvg />
      </Button>
      <br />
      <br />
      <RadioGroup options={options} />
      <br />
      <MyDatetimePicker selected={selectedDate} onChange={setSelectedDate} />
    </div>
  );
}
