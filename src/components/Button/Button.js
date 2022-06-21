import React from 'react'
import './button.css';

const Button = ({variant, disabled, size, children, ...props}) => {

  return (
    <button
      type="button"
      className={`storybook-button storybook-button--${size} storybook-button--${variant}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button