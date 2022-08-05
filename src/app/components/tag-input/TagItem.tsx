import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import useHover from '../../hooks/useHover';
import { Tag } from '../../models/Tag';
import { ReactComponent as CloseSvg } from './assets/close.svg';

const Item = styled.div`
  display: flex;
  color: white;
  border-radius: 3px;
  justify-content: space-between;
  padding: 0.313rem 0.625rem 0.313rem 0.563rem;
  font-size: 0.875rem;
  background-color: ${Colors.Blue};
  white-space: nowrap;
  :last-child {
    margin-right: 1em;
  }
`;
const ItemDescription = styled.div`
  position: absolute;
  width: 14.375rem;
  height: 2.275rem;
  margin: 0.125rem 0 0;
  font-size: 0.75rem;
`;

const TagItem: React.FC<{ item: Tag; onRemoval: () => void }> = props => {
  const { onRemoval, item } = props;
  const [onMouseOver, onMouseOut, isHover] = useHover();
  return (
    <div>
      <Item onMouseOut={onMouseOut} onMouseOver={onMouseOver}>
        <div>{item.name}</div>
        <div
          style={{ cursor: 'pointer', paddingLeft: '10px' }}
          onClick={onRemoval}
        >
          <CloseSvg />
        </div>
      </Item>
      {isHover && <ItemDescription>{item.description}</ItemDescription>}
    </div>
  );
};

export default TagItem;
