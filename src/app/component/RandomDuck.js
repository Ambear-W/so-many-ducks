import React from 'react'
import { DuckFamily, DuckOne, DuckTwo } from '../ducks';

const images = [
    <DuckFamily />,
    <DuckOne />,
    <DuckTwo />
];


const RandomDuck = () => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    console.log('Getting random image...')

    return randomImage
}

export default RandomDuck
