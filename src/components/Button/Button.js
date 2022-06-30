import React from 'react'
import './button.css';

const Button = ({variant, disabled, size, children, onClick, ...props}) => {
  const isDisable = disabled ? 'storybook-button--disabled' : '';

  return (
    <button
      type="button"
      className={`storybook-button storybook-button--${size} storybook-button--${variant} ${isDisable}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button