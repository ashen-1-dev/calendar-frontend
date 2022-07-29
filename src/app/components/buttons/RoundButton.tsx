import React from 'react';
import { ReactComponent as PlusSvg } from './assets/plus.svg';
import Button from './Button';

const RoundButton: React.FC = () => {
  return (
    <Button size={'small'} variant={'primary'} type={'btn-round'}>
      <PlusSvg />
    </Button>
  );
};

export default RoundButton;
