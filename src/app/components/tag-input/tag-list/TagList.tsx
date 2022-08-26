import React from 'react';

import { Tag } from '../../../models/Tag';
import TagItem from '../tag-item/TagItem';
import { Wrapper } from './styled';
const TagList: React.FC<{
  items: Tag[];
  onRemoval: (itemId: string) => void;
}> = props => {
  const { items, onRemoval } = props;
  return (
    <Wrapper>
      {items.map(item => (
        <TagItem
          key={item.uuid}
          onRemoval={() => onRemoval(item.uuid)}
          item={item}
        />
      ))}
    </Wrapper>
  );
};

export default TagList;
