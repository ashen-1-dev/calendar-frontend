import React from 'react';
import useHover from '../../../hooks/useHover';
import { Tag } from '../../../models/Tag';
import { ReactComponent as CloseSvg } from '../assets/close.svg';
import { Item, ItemDescription } from './styled';

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
      {isHover && (
        <ItemDescription>
          <div>{item.description}</div>
        </ItemDescription>
      )}
    </div>
  );
};

export default TagItem;
