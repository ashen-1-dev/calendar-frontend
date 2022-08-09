import React, { ReactNode, useState } from 'react';
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

export interface TableRowProps {
  selected?: boolean;
}

const TableRow = styled.tr<TableRowProps>`
  background-color: ${({ selected }) =>
    selected ? Colors.HoverGrey : 'white'};
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 17fr 83fr;
  border-bottom: solid 2px #f8fafe;

  &:first-child {
    border-top-left-radius: 5px;
    border-top: solid 2px #f8fafe;
  }
`;

const TableItem = styled.td`
  display: flex;
  align-items: center;
  padding: 0.938rem 1.188rem 1.25rem 0.938rem;
  justify-content: space-between;
  border-right: solid 2px #f8fafe;
  :first-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: solid 2px #f8fafe;
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
  const [selectedTagId, setSelectedTagId] = useState<number>();
  return (
    <Wrapper>
      <TableRow>
        <TableHeader>Название</TableHeader>
        <TableHeader>Описание</TableHeader>
      </TableRow>
      {tags.map(tag => {
        const isRowSelected = selectedTagId === tag.id;
        return (
          <TableRow
            selected={isRowSelected}
            onClick={() => setSelectedTagId(tag.id)}
          >
            <TableItem style={{ fontWeight: 'bold' }}>
              <span>{tag.name}</span>
            </TableItem>
            <TableItem>
              <div>
                <span>{tag.description}</span>
              </div>

              {isRowSelected && (
                <Button
                  onClick={() => null}
                  variant={'primary'}
                  size={'very-small'}
                >
                  <DeleteSvg />
                </Button>
              )}
            </TableItem>
          </TableRow>
        );
      })}
    </Wrapper>
  );
};

export default TagTable;
