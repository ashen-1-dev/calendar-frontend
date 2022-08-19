import React from 'react';
import { ReactComponent as PlusSvg } from './assets/plus.svg';
import Button from './Button';

const RoundButton: React.FC<{ onClick: () => void }> = props => {
  const { onClick } = props;
  return (
    <Button
      onClick={onClick}
      size={'small'}
      variant={'primary'}
      type={'btn-round'}
    >
      <PlusSvg />
    </Button>
  );
};

export default RoundButton;
