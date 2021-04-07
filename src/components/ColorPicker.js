import React from 'react'
import Pixel from './Pixel'
import Colors from './Colors'

const ColorPicker = (props) => {
    return (
        <div className="colorpicker">
            {Colors.map((color, index) => {
                return <Pixel key={index} background={color} />
            })}
        </div>
    )
}

export default ColorPicker