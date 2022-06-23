import React, {useState} from 'react';
import './modal.css'
import Button from '../Button/Button';

const Modal = ({children, ...props}) => {

    const [isShow, setisShow] = useState(false);

    const handleClick = () => {
        setisShow(!isShow);
    }

  return (
    <div>
        <Button onClick={() => handleClick()} variant="primary" size="lg">Open Modal</Button>
        <div className={`modal ${isShow ? 'active' : ''}`}>
            <div className="modal__content">
                {children}
                <div>
                    <Button onClick={() => handleClick()} variant="primary" disabled={false} size="lg">X</Button>
                    <Button onClick={() => handleClick()} variant="secondary" disabled={false} size="lg">Cancel</Button>
                    <Button onClick={() => handleClick()} variant="secondary" disabled={false} size="lg">OK</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal