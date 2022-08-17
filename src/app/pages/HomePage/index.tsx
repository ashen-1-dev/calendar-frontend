import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Button from '../../components/buttons/Button';
import RoundButton from '../../components/buttons/RoundButton';
import { ReactComponent as EditSvg } from '../../components/buttons/assets/edit.svg';
import { ReactComponent as DeleteSvg } from '../../components/buttons/assets/delete.svg';
import Radio, { RadioOption, RadioProps } from '../../components/radio/Radio';
import RadioGroup from 'app/components/radio/RadioGroup';
import Input from 'app/components/inputs/Input';
import TagInput from '../../components/tag-input/TagInput';
import { useState } from 'react';
import { Tag } from '../../models/Tag';

export function HomePage() {
  const options: RadioOption[] = [
    { type: 'holiday', label: 'Событие' },
    { type: 'event', label: 'Праздник' },
    { type: 'other', label: 'Другое' },
  ];
  const [tags, setTags] = useState<Tag[]>([]);
  const handleOnChange = (tags: Tag[]) => {
    setTags(tags);
  };
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
      {/*<Input placeholder={'Поиск по тегам'} />*/}
      <br />
      {/*<Input showIcon placeholder={'Поиск по тегам'} size={'large'} />*/}
      <br />
      <br />
      <RadioGroup options={options} />
      <TagInput
        tags={tags}
        onChange={handleOnChange}
        placeholder={'Поиск по тегам'}
        showIcon
        size={'large'}
      ></TagInput>
    </div>
  );
}
