import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  font-size: 0.875rem;
  margin-top: 0.313rem;
  flex-direction: column;
  vertical-align: middle;
`;

const DropDownTagItem = styled.div`
  padding-left: 1.25rem;
  height: 2.938em;
  cursor: pointer;
`;

const DropDownTag = props => {
  const { items, onItemClick } = props;
  return (
    <Wrapper>
      {items.map(tag => (
        <DropDownTagItem key={tag.id} onClick={() => onItemClick(tag)}>
          {tag.name}
        </DropDownTagItem>
      ))}
    </Wrapper>
  );
};

export default DropDownTag;
