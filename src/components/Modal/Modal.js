import React, {useState} from 'react';
import './modal.css'
import Button from '../Button/Button';

const Modal = ({children, ...props}) => {

  return (
    <div>
        {children}
    </div>
  )
}

export default Modal