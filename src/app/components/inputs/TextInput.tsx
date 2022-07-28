import React from 'react';
import './Input.css';
import { ReactComponent as SearchSvg } from './assets/search.svg';
import classNames from 'classnames';

export interface TextInputProps {
  placeholder?: string;
  size?: 'large' | 'medium';
}

const TextInput: React.FC<TextInputProps> = ({ placeholder, size }) => {
  return (
    <div className={classNames('input-container', `input-${size || 'medium'}`)}>
      <div className={'icon-container'}>
        <SearchSvg />
      </div>
      <input placeholder={placeholder} accept={'text'} />
    </div>
  );
};

export default TextInput;
