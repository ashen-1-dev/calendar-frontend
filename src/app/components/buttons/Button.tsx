import React, { ComponentProps, ReactNode } from 'react';
import classNames from 'classnames';
import './Button.css';

interface ButtonProps extends ComponentProps<'button'> {
  size?: 'small' | 'medium' | 'large' | 'very-small';
  variant: 'primary' | 'secondary';
  form?: 'btn-round';
  icon?: JSX.Element;
  children?: ReactNode;
}

const Button = (props: ButtonProps) => {
  const {
    size = 'medium',
    variant = 'primary',
    form = '',
    onClick,
    children,
    className,
    icon,
    ...rest
  } = props;
  return (
    <button
      onClick={onClick}
      className={classNames(
        `btn`,
        `btn-size-${size}`,
        `btn-${variant}`,
        `${form}`,
        className,
      )}
      {...rest}
    >
      <span>{icon}</span>
      <span className="btn-text">{children}</span>
    </button>
  );
};

export default Button;
