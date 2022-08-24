import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Tag } from '../../models/Tag';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 0.875rem;
  position: absolute;
  margin-top: 3.5rem;
  border: solid 1px ${Colors.LightGrey3};
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.02);
  background-color: white;
`;

const DropDownTagItem = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1.25rem;
  height: 2.938em;
  cursor: pointer;
  background-color: white;
  z-index: 1;
`;

const DropDownTag: React.FC<{
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

export default DropDownTag;
