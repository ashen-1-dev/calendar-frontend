import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Button from '../../components/buttons/Button';
import RoundButton from '../../components/buttons/RoundButton';
import { ReactComponent as EditSvg } from '../../components/buttons/assets/edit.svg';
import { ReactComponent as DeleteSvg } from '../../components/buttons/assets/delete.svg';
import Radio, { RadioOption, RadioProps } from '../../components/radio/Radio';
import RadioGroup from 'app/components/radio/RadioGroup';
import { useState } from 'react';

export function HomePage() {
  const [selectedValue, setSelectedValue] = useState('');
  const handleOnChange = selectedType => {
    setSelectedValue(selectedType);
  };
  const options: RadioOption[] = [
    { value: 'holiday', name: 'Событие' },
    { value: 'event', name: 'Событие' },
    { value: 'other', name: 'Событие' },
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
      <RadioGroup
        selectedValue={selectedValue}
        onChange={handleOnChange}
        options={options}
      />
    </div>
  );
}
