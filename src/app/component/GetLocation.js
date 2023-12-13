'use client';
import { useState } from "react";



const GetLocation = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [left, setLeft] = useState(Math.floor(Math.random() * window.innerWidth));
    const [top, setTop] = useState(Math.floor(Math.random() * window.innerHeight));
    
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)

    setLeft(Math.floor(Math.random() * width));
    setTop(Math.floor(Math.random() * height));

    const location = {
        left: left + 'px',
        top: top + 'px'
    }

    console.log('GetLocation')

    return 'left:' + left + 'px'
}

export default GetLocation