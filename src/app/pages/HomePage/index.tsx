import * as React from 'react';
import Button from '../../components/buttons/Button';
import RoundButton from '../../components/buttons/RoundButton';
import { ReactComponent as EditSvg } from '../../components/buttons/assets/edit.svg';
import { ReactComponent as DeleteSvg } from '../../components/buttons/assets/delete.svg';
import Input from 'app/components/inputs/Input';

export function HomePage() {
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
      <Button
        disabled
        onClick={() => null}
        size={'very-small'}
        variant={'primary'}
      >
        <EditSvg />
      </Button>
      <br />
      <Button onClick={() => null} size={'very-small'} variant={'primary'}>
        <DeleteSvg />
      </Button>
      <br />
      <Input placeholder={'Поиск по тегам'} />
      <br />
      <Input showIcon placeholder={'Поиск по тегам'} size={'large'} />
    </div>
  );
}
