import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../inputs/Input';
import Button from '../buttons/Button';
import { Tag } from '../../models/Tag';
import TagTable from './tag-table';

const AddTagWrapper = styled.div`
  display: flex;
  padding-top: 2.188rem;
  padding-bottom: 2.188rem;
  gap: 0.625rem;
`;

const TagEdit = () => {
  const [tagName, setTagName] = useState('');
  const [tagDescription, setTagDescription] = useState('');
  const allTags: Tag[] = [
    { id: 1, name: 'Не важно', description: 'Да это не жестко' },
    { id: 2, name: 'Ва же', description: 'Да это жестко' },
    { id: 3, name: 'Подарок', description: 'описание' },
  ];
  return (
    <div>
      <AddTagWrapper>
        <Input
          label={'Название тега'}
          placeholder={'Введите тег'}
          size={'very-small'}
          value={tagName}
          onChange={e => setTagName(e.target.value)}
        />
        <Input
          label={'Описание'}
          placeholder={'Введите описание'}
          size={'small'}
          value={tagDescription}
          onChange={e => setTagDescription(e.target.value)}
        />
        <Button onClick={() => null} variant={'primary'}>
          Добавить тег
        </Button>
      </AddTagWrapper>
      <TagTable tags={allTags} />
    </div>
  );
};

export default TagEdit;
