import React from 'react';
import './paragraph.css'

const Paragraph = ({children, background, color, ...props}) => {

    return (
        <p className="paragraph" style={{backgroundColor: background, color: color}} {...props}>
            {children}
        </p>
    )
}

export default Paragraph