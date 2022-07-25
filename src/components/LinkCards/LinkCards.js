import React from 'react';
import './linkCard.css';

const LinkCards = ({ children, ...props}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default LinkCards