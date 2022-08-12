import React, { ReactNode } from 'react';
import classNames from 'classnames';
import './Button.css';

interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'size' | 'type'> {
  size: 'small' | 'medium' | 'large' | 'very-small';
  variant: 'primary' | 'secondary';
  type?: 'btn-round';
  children?: ReactNode;
}

const Button = (props: ButtonProps) => {
  const {
    size = 'medium',
    variant = 'primary',
    type = '',
    onClick,
    children,
    ...rest
  } = props;
  return (
    <button
      onClick={onClick}
      className={classNames(
        `btn`,
        `btn-size-${size}`,
        `btn-${variant}`,
        `${type}`,
      )}
      {...rest}
    >
      <span className="btn-text">{children}</span>
    </button>
  );
};

export default Button;
