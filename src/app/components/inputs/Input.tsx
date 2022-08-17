import React, { ComponentProps, ReactNode } from 'react';
import './Input.css';
import { ReactComponent as SearchSvg } from './assets/search.svg';

export interface InputProps extends Omit<ComponentProps<'input'>, 'size'> {
  size?: 'large' | 'medium' | 'small' | 'very-small';
  label?: string;
  showIcon?: boolean;
  children?: ReactNode;
  value: string;
  onChange: (value) => void;
}

const Input: React.ComponentType<InputProps> = ({
  placeholder,
  size = 'medium',
  showIcon = false,
  children,
  value,
  onChange,
  label,
  name,
}) => {
  return (
    <div className={`input-${size}`} style={{ position: 'relative' }}>
      {label && <div className={'input-label'}>{label}</div>}
      <div className={'input-container'}>
        {showIcon && (
          <div className={'icon-container'}>
            <SearchSvg />
          </div>
        )}
        {children}
        <input
          name={name}
          value={value}
          onChange={event => onChange(event.target.value)}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
