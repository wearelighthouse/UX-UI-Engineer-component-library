import React from 'react'
import './button.css';

// children,
// variant = 'primary',
// disabled = false,
// onClick,

const Button = ({variant = "primary", disabled, backgroundColor, size, label, ...props}) => {

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, `storybook-button--${variant}`].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default Button