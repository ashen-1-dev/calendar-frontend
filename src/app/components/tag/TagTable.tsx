import React, { useState } from 'react';
import Button from '../buttons/Button';
import { ReactComponent as DeleteSvg } from '../buttons/assets/delete.svg';
import { Tag } from '../../models/Tag';
import { TableHeader, TableItem, TableRow } from './styled-table';
import { Wrapper } from './styled-table';

export interface TableRowProps {
  selected?: boolean;
}

export interface TagTableProps {
  tags?: Tag[];
}

const TagTable: React.FC<TagTableProps> = props => {
  const { tags } = props;
  const [selectedTagId, setSelectedTagId] = useState<string>();
  return (
    <Wrapper>
      <TableRow>
        <TableHeader>Название</TableHeader>
        <TableHeader>Описание</TableHeader>
      </TableRow>
      {tags &&
        tags.map(tag => {
          const isRowSelected = selectedTagId === tag.uuid;
          return (
            <TableRow
              selected={isRowSelected}
              onClick={() => setSelectedTagId(tag.uuid)}
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
