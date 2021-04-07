import React from 'react';

const Pixel = (props) => {
    return (
        <div className={`${props.background} pixel ${props.current ? 'current-color' : ''}`} 
        onClick={props.onClick} />
    )
}

export default Pixel