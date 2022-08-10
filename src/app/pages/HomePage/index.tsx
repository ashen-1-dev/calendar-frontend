import * as React from 'react';
import Button from '../../components/buttons/Button';
import RoundButton from '../../components/buttons/RoundButton';
import { ReactComponent as EditSvg } from '../../components/buttons/assets/edit.svg';
import { ReactComponent as DeleteSvg } from '../../components/buttons/assets/delete.svg';
import { RadioOption } from '../../components/radio/Radio';
import RadioGroup from 'app/components/radio/RadioGroup';
import TagInput from '../../components/tag-input/TagInput';
import { Appointment, AppointmentType } from '../../models/Appointment';
import Calendar from '../../components/calendar/Calendar';
import { useState } from 'react';

export function HomePage() {
  const [data, setData] = useState(new Date());
  const options: RadioOption[] = [
    { type: 'holiday', label: 'Событие' },
    { type: 'event', label: 'Праздник' },
    { type: 'other', label: 'Другое' },
  ];
  const appointments: Appointment[] = [
    {
      type: AppointmentType.Event,
      name: 'Тест',
      date: new Date(),
      budget: 1500,
    },
    {
      type: AppointmentType.Holiday,
      name: 'Тест',
      date: new Date(),
      budget: 1500,
    },
    {
      type: AppointmentType.Holiday,
      name: 'Тест',
      date: new Date(),
      budget: 1500,
    },
  ];

  return (
    <div>
      <Button onClick={() => null} size={'large'} variant={'primary'}>
        Редактировать теги
      </Button>
      <br />
      <Button onClick={() => null} size={'medium'} variant={'primary'}>
        Удалить
      </Button>
      <br />
      <Button onClick={() => null} size={'medium'} variant={'secondary'}>
        Отмена
      </Button>
      <br />
      <RoundButton onClick={() => null} />
      <br />
      <Button onClick={() => null} size={'very-small'} variant={'primary'}>
        <EditSvg />
      </Button>
      <br />
      <Button onClick={() => null} size={'very-small'} variant={'primary'}>
        <DeleteSvg />
      </Button>
      <br />
      {/*<Input placeholder={'Поиск по тегам'} />*/}
      <br />
      {/*<Input showIcon placeholder={'Поиск по тегам'} size={'large'} />*/}
      <br />
      <br />
      <RadioGroup options={options} />
      <TagInput
        placeholder={'Поиск по тегам'}
        showIcon
        size={'large'}
      ></TagInput>
      <Calendar date={data} setDate={setData} />
    </div>
  );
}
