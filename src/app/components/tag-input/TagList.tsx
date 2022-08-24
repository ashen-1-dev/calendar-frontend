import React from 'react';
import styled from 'styled-components';
import { Tag } from '../../models/Tag';
import TagItem from './TagItem';

const Wrapper = styled.div`
  display: inline-flex;
  gap: 10px;
  :first-child {
    padding-left: 0.313rem;
  }
`;

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
