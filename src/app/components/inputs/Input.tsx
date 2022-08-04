import React, { ReactNode } from 'react';
import './Input.css';
import { ReactComponent as SearchSvg } from './assets/search.svg';
import classNames from 'classnames';

export interface InputProps {
  placeholder?: string;
  size?: 'large' | 'medium';
  showIcon?: boolean;
  children?: ReactNode;
  value: string;
  onChange: (...args) => any;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  size,
  showIcon = false,
  children,
  value,
  onChange,
}) => {
  return (
    <div className={classNames('input-container', `input-${size || 'medium'}`)}>
      {showIcon && (
        <div className={'icon-container'}>
          <SearchSvg />
        </div>
      )}
      {children}
      <input value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
};

export default Input;
