'use client';
import React, { useEffect, useState } from 'react'
import { DuckFamily, DuckOne, DuckTwo } from '../ducks';

export const SummonDuckButton = ({ addDuck, duckImage }) => {
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);

    useEffect(() => {
        setLeft((Math.floor(Math.random() * screen.width)))
        setTop(Math.floor(Math.random() * screen.height))
    }, [])

    const location = {
        left: left + 'px',
        top: top + 'px'
    }

    const images = [
        <DuckFamily />,
        <DuckOne />,
        <DuckTwo />
    ];

    const summonDuck = () => {
        console.log('You clicked the button~!')
        setLeft(Math.floor(Math.random() * screen.width));
        setTop(Math.floor(Math.random() * screen.height));

        
        // passing value to wrapper here

        const randomImage = Math.floor(Math.random() * images.length);
        console.log('Getting random image...')
        
        addDuck(location, randomImage)
    }

    return (
        <button onClick={summonDuck}
            className='fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2  border-4 border-dark bg-light border-solid cursor-pointer hover:bg-dark hover:text-light rounded-[500px] uppercase min-w-[160px] text-2xl text-dark text-center p-5 font-bold transition ease-in-out duration-450'>
            Summon Duck
        </button>
    )
}

export default SummonDuckButton
