import React from 'react';
import { ReactComponent as PlusSvg } from './assets/plus.svg';
import Button from './Button';

const RoundButton: React.FC<{
  onClick: () => void;
  className?: string;
}> = props => {
  const { onClick, className } = props;
  return (
    <Button
      className={className}
      onClick={onClick}
      size={'small'}
      variant={'primary'}
      form={'btn-round'}
    >
      <PlusSvg />
    </Button>
  );
};

export default RoundButton;
