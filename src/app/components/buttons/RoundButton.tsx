import React from 'react';
import { Colors } from '../../../styles/colors';
import { ReactComponent as PlusSvg } from './assets/plus.svg';
import Button from './Button';
import classNames from 'classnames';

const RoundButton: React.FC = () => {
  return (
    <Button size={'small'} variant={'primary'} type={'btn-round'}>
      <PlusSvg />
    </Button>
  );
};

export default RoundButton;
