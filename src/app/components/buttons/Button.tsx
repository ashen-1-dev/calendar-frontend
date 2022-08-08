import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.css';

const Button = ({ onClick, size, variant, children, type = '' }) => {
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

Button.defaultProps = {
  size: 'medium',
  variant: 'default',
  children: '',
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'very-small']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'disabled', 'default']),
  type: PropTypes.oneOf(['btn-round']),
};

export default Button;
