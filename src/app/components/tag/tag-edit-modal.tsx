import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as CloseSvg } from './assets/close.svg';
import Input from '../inputs/Input';
import Button from '../buttons/Button';
import { Tag } from '../../models/Tag';
import { Colors } from '../../../styles/colors';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 51.313rem;
  height: 30.313rem;
  border-radius: 10px;
  background-color: #fff;
  padding: 1.5rem 1.875rem 2.188rem 0;
`;

const Header = styled.div`
  display: flex;
  padding-left: 1.875rem;
  font-size: 1.25rem;
  justify-content: space-between;
`;

const VerticalLine = styled.div`
  margin: 1.563rem 0 0;
  border: solid 2px #f8fafe;
`;

const Body = styled.div`
  padding-left: 1.875rem;
`;

const AddTagWrapper = styled.div`
  display: flex;
  padding-top: 2.188rem;
  padding-bottom: 2.188rem;
  gap: 0.625rem;
`;

const Table = styled.div<{ children: ReactNode | ReactNode[] }>`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: white;
`;

const TableRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const TableHeader = styled.div`
  color: ${Colors.LightGrey2};
`;

const TableItem = styled.div`
  display: flex;
  align-items: center;
  border: solid 2px #f8fafe;
  border-radius: 5px;
  width: 50%;
  height: 3.688rem;
  padding: 0.938rem 0 1.25rem 0.938rem;
`;

const TagEditModal = () => {
  const [tagName, setTagName] = useState('');
  const [tagDescription, setTagDescription] = useState('');
  const allTags: Tag[] = [
    { id: 1, name: 'Не важно', description: 'Да это не жестко' },
    { id: 2, name: 'Ва же', description: 'Да это жестко' },
    { id: 3, name: 'Подарок', description: 'описание' },
  ];
  return (
    <Wrapper>
      <Header>
        <div style={{ fontWeight: 'bold' }}>Редактирование тегов</div>
        <div style={{ cursor: 'pointer' }}>
          <CloseSvg />
        </div>
      </Header>
      <VerticalLine />
      <Body>
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
          <Button variant={'primary'}>Добавить тег</Button>
        </AddTagWrapper>
        <Table>
          <TableRow>
            <TableItem>
              <TableHeader>Название</TableHeader>
            </TableItem>
            <TableItem>
              <TableHeader>Описание</TableHeader>
            </TableItem>
          </TableRow>
          {allTags.map(tag => {
            return (
              <TableRow>
                <TableItem style={{ fontWeight: 'bold' }}>{tag.name}</TableItem>
                <TableItem>{tag.description}</TableItem>
              </TableRow>
            );
          })}
        </Table>
      </Body>
    </Wrapper>
  );
};

export default TagEditModal;
