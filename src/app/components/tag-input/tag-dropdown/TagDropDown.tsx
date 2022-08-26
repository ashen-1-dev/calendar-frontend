import React from 'react';
import { Tag } from '../../../models/Tag';
import { Wrapper, DropDownTagItem } from './styled';

const TagDropDown: React.FC<{
  items: Tag[];
  onItemClick: (item: Tag) => void;
}> = props => {
  const { items, onItemClick } = props;
  return (
    <Wrapper>
      {items.map(tag => (
        <DropDownTagItem key={tag.uuid} onClick={() => onItemClick(tag)}>
          <div>{tag.name}</div>
        </DropDownTagItem>
      ))}
    </Wrapper>
  );
};

export default TagDropDown;
