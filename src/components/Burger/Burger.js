import React from 'react';
import './Burger.scss';

const Burger = ({ active, componentSize = 50, handleClick }) => (
    <div className={active ? 'burger active' : 'burger'} onClick={handleClick}
        style={{width: `${componentSize}px`, height: `${componentSize}px`}}>

        <span className='first' />
        <span className='second' />
        <span className='third' />
    </div>
);

export default Burger;