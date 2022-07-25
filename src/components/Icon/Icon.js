import React from 'react';
import { Search, ShoppingCart, X, AtSign } from 'react-feather';
 
const icons = {
    'search': Search,
    'shopping-card': ShoppingCart,
    'delete': X,
    'at-sign': AtSign
};

const Icon = ({ id, size, strokeWidth = 1, ...delegated }) => {

    const Component = id !== undefined && icons[id];

    return (
        <div
        style={{ width: size + 'px', height: size + 'px'}}
        {...delegated}
        >
        <Component color="currentColor" size={size} />
        </div>
    );
};

export default Icon;
 