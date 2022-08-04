import React from 'react';
import './Input.css';
import { ReactComponent as SearchSvg } from './assets/search.svg';
import classNames from 'classnames';

export interface InputProps {
  placeholder?: string;
  size?: 'large' | 'medium';
  showIcon?: boolean;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  size,
  showIcon = false,
}) => {
  return (
    <div className={classNames('input-container', `input-${size || 'medium'}`)}>
      {showIcon && (
        <div className={'icon-container'}>
          <SearchSvg />
        </div>
      )}
      <input placeholder={placeholder} />
    </div>
  );
};

export default Input;
