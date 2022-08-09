import React, { ReactNode } from 'react';
import classNames from 'classnames';
import './Button.css';

interface ButtonProps
  extends Omit<React.HTMLProps<HTMLDivElement>, 'size' | 'type'> {
  size: 'small' | 'medium' | 'large' | 'very-small';
  variant: 'primary' | 'secondary' | 'disabled' | 'default';
  type?: 'btn-round';
  children?: ReactNode;
}

const Button = (props: ButtonProps) => {
  const { size, variant, type = '', onClick, children } = props;
  return (
    <div
      onClick={onClick}
      className={classNames(
        `btn`,
        `btn-size-${size}`,
        `btn-${variant}`,
        `${type}`,
      )}
    >
      <span className="btn-text">{children}</span>
    </div>
  );
};

export default Button;
