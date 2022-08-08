import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Button from '../buttons/Button';
import { ReactComponent as DeleteSvg } from '../buttons/assets/delete.svg';
import { Colors } from '../../../styles/colors';
import { Tag } from '../../models/Tag';

const Wrapper = styled.table<{ children: ReactNode | ReactNode[] }>`
  display: grid;
  border-radius: 5px;
  background-color: white;
`;

const TableRow = styled.tr`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 17fr 83fr;
`;

const TableItem = styled.td`
  display: flex;
  align-items: center;
  border: solid 2px #f8fafe;
  border-radius: 5px;
  padding: 0.938rem 0 1.25rem 0.938rem;
  justify-content: space-between;
  :last-child {
    padding-right: 1rem;
  }
`;

const TableHeader = styled(TableItem)`
  color: ${Colors.LightGrey2};
`;

export interface TagTableProps {
  tags: Tag[];
}

const TagTable: React.FC<TagTableProps> = props => {
  const { tags } = props;
  return (
    <Wrapper>
      <TableRow>
        <TableHeader>Название</TableHeader>
        <TableHeader>Описание</TableHeader>
      </TableRow>
      {tags.map(tag => {
        return (
          <TableRow>
            <TableItem style={{ fontWeight: 'bold' }}>
              <span>{tag.name}</span>
            </TableItem>
            <TableItem>
              <span>{tag.description}</span>
              <Button
                onClick={() => null}
                variant={'primary'}
                size={'very-small'}
              >
                <DeleteSvg />
              </Button>
            </TableItem>
          </TableRow>
        );
      })}
    </Wrapper>
  );
};

export default TagTable;
