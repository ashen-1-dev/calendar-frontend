import React from 'react';
import styled from 'styled-components';
import { Tag } from '../../models/Tag';
import TagItem from './TagItem';

const Wrapper = styled.div`
  display: inline-flex;
  gap: 10px;
`;

const TagList: React.FC<{
  items: Tag[];
  onRemoval: (itemId: number) => void;
}> = props => {
  const { items, onRemoval } = props;
  return (
    <Wrapper>
      {items.map(item => (
        <TagItem onRemoval={() => onRemoval(item.id)} item={item} />
      ))}
    </Wrapper>
  );
};

export default TagList;
