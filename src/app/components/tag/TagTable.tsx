import React, { useState } from 'react';
import Button from '../buttons/Button';
import { ReactComponent as DeleteSvg } from '../buttons/assets/delete.svg';
import { Tag } from '../../models/Tag';
import { TableHeader, TableItem, TableRow } from './styled-table';
import { Wrapper } from './styled-table';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { removeTag } from '../../../store/tags/actions';

export interface TableRowProps {
  selected?: boolean;
}

export interface TagTableProps {
  tags?: Tag[];
}

const TagTable: React.FC<TagTableProps> = props => {
  const { tags } = props;
  const dispatch = useAppDispatch();
  const [selectedTagId, setSelectedTagId] = useState<string>();
  const handleOnClick = (tag: Tag) => {
    dispatch(removeTag(tag.uuid));
  };
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
              key={tag.uuid}
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
                    onClick={() => handleOnClick(tag)}
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
