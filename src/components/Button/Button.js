import React from 'react'
import './button.css';

const Button = ({variant, disabled, backgroundColor, size, color, label, ...props}) => {
  const isDisabled = disabled === true && 'storybook-button--disabled';

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${color}`, `storybook-button--${size}`, `storybook-button--${variant}`, `${isDisabled}`].join(' ')}
      style={backgroundColor && {backgroundColor}}
      {...props}
      disabled={disabled}
      color={color}
    >
      {label}
    </button>
  );
}

export default Button