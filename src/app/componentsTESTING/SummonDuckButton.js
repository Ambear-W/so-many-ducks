'use client';
import React, { useEffect, useState } from 'react'

export const SummonDuckButton = ({ addDuck }) => {
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);

    useEffect(() => {
        setLeft(Math.floor(Math.random() * screen.width));
        setTop(Math.floor(Math.random() * screen.height));
    }, []);

    
    const summonDuck = () => {
        setLeft(Math.floor(Math.random() * screen.width));
        setTop(Math.floor(Math.random() * screen.height));
        
        const duckLocation = {
            left: left + 'px',
            top: top + 'px'
        }

        const duckPic = Math.floor(Math.random() * 3);
        
        addDuck(duckLocation, duckPic)
    }

    return (
        <button onClick={summonDuck}
            className='fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2  border-4 border-dark bg-light border-solid cursor-pointer hover:bg-dark hover:text-light rounded-[500px] uppercase min-w-[160px] text-2xl text-dark text-center p-5 font-bold transition ease-in-out duration-450'>
            Summon Duck
        </button>
    )
}

export default SummonDuckButton
