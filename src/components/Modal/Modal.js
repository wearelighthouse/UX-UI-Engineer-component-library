import React from 'react';
import './modal.css'

const Modal = ({children, ...props}) => {

  return (
    <div>
        {children}
    </div>
  )
}

export default Modal