import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Tag } from '../../models/Tag';
import { ReactComponent as CloseSvg } from './assets/close.svg';
import useHover from '../../hooks/useHover';

const Wrapper = styled.div`
  display: inline-flex;
  gap: 10px;
`;

const TagItem = styled.div`
  display: flex;
  color: white;
  border-radius: 3px;
  justify-content: space-between;
  padding: 0.313rem 0.625rem 0.313rem 0.563rem;
  font-size: 0.875rem;
  background-color: ${Colors.Blue};
  :last-child {
    margin-right: 0.625em;
  }
`;

const TagList: React.FC<{
  items: Tag[];
  onRemoval: (itemId: number) => void;
}> = props => {
  const { items, onRemoval } = props;
  const [onMouseOver, onMouseOut, isHover] = useHover();
  return (
    <Wrapper>
      {items.map(item => (
        <TagItem
          key={item.id}
          onMouseOut={onMouseOut}
          onMouseOver={onMouseOver}
        >
          <div>{item.name}</div>
          <div
            style={{ cursor: 'pointer', paddingLeft: '10px' }}
            onClick={() => onRemoval(item.id)}
          >
            <CloseSvg />
          </div>
        </TagItem>
      ))}
    </Wrapper>
  );
};

export default TagList;
