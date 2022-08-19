import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Button from '../../components/buttons/Button';
import { ReactComponent as EditSvg } from '../../components/buttons/assets/edit.svg';
import { ReactComponent as DeleteSvg } from '../../components/buttons/assets/delete.svg';
import Select, { SelectOption } from '../../components/selects/Select';
import { useState } from 'react';
import Input from '../../components/inputs/Input';

export function HomePage() {
  const options: SelectOption[] = [
    { name: 'sadssd', value: 'body' },
    { name: 'sadssd123123', value: 'title' },
  ];
  const onChange = (selectedOption: SelectOption) => {
    setSelectedOption(selectedOption);
  };
  const [selectedOption, setSelectedOption] = useState<SelectOption>(
    options[0],
  );
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
      <br />
      <Button size={'very-small'} variant={'primary'}>
        <EditSvg />
      </Button>
      <br />
      <Button size={'very-small'} variant={'primary'}>
        <DeleteSvg />
      </Button>
      <br />
      <Select
        onChange={onChange}
        selectedOption={selectedOption}
        options={options}
      />
    </div>
  );
}
