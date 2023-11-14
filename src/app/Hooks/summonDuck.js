import React, { useEffect, useState } from 'react';
import { DuckFamily, DuckOne, DuckTwo } from '../ducks'

const [width, setWidth] = useState(window.innerWidth);
const [height, setHeight] = useState(window.innerHeight);

const summonDuck = () => {

    
    console.log("Duck!")
    
    const images = [
        <DuckFamily />,
        <DuckOne />,
        <DuckTwo />
    ];
    
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const randomLeft = (Math.floor(Math.random() * width));
    const randomTop = (Math.floor(Math.random() * height));

    const location = {
        left: randomLeft,
        top: randomTop
    }


    return (
        <div className='absolute' style={location}>
            {randomImage}
            <p>HEHEHEHEHEH</p>
        </div>
    )

}

export default summonDuck