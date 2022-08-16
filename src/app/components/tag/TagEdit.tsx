import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../inputs/Input';
import Button from '../buttons/Button';
import { Tag } from '../../models/Tag';
import TagTable from './TagTable';
import { Colors } from '../../../styles/colors';

const AddTagWrapper = styled.div`
  display: flex;
  padding-top: 2.188rem;
  padding-bottom: 2.188rem;
  gap: 0.625rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #fff;
  padding: 0 1.875rem 2.188rem 1.875rem;
`;
const VerticalLine = styled.div`
  margin: 1.563rem 0 0;
  width: calc(100% - 1.875rem);
  border: solid 2px ${Colors.LightGrey3};
`;

const TagEdit = () => {
  const [tag, setTag] = useState<Tag>({ description: '', id: -1, name: '' });
  const allTags: Tag[] = [
    { id: 1, name: 'Не важно', description: 'Да это не жестко' },
    { id: 2, name: 'Ва же', description: 'Да это жестко' },
    { id: 3, name: 'Подарок', description: 'описание' },
  ];
  return (
    <>
      <VerticalLine />
      <Wrapper>
        <AddTagWrapper>
          <Input
            label={'Название тега'}
            placeholder={'Введите тег'}
            size={'very-small'}
            value={tag.name}
            onChange={e =>
              setTag(prev => {
                return { ...prev, name: e.target.value };
              })
            }
          />
          <Input
            label={'Описание'}
            placeholder={'Введите описание'}
            size={'small'}
            value={tag.description}
            onChange={e =>
              setTag(prev => {
                return { ...prev, description: e.target.value };
              })
            }
          />
          <Button
            disabled
            style={{ width: '8.813rem' }}
            onClick={() => null}
            variant={'primary'}
          >
            Добавить тег
          </Button>
        </AddTagWrapper>
        <TagTable tags={allTags} />
      </Wrapper>
    </>
  );
};

export default TagEdit;
