'use client';
import React, { useEffect, useState } from 'react'

export const SummonDuckButton = ({ addDuck }) => {
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);

    useEffect(() => {
        setLeft(Math.floor(Math.random() * window.innerWidth));
        setTop(Math.floor(Math.random() * window.innerHeight));
    }, []);


    const summonDuck = () => {
        setLeft(Math.floor(Math.random() * window.innerWidth));
        setTop(Math.floor(Math.random() * window.innerHeight));

        const duckLocation = {
            left: left + 'px',
            top: top + 'px'
        }

        const duckPic = Math.floor(Math.random() * 3);

        addDuck(duckLocation, duckPic)
    }   

    return (
        <button onClick={summonDuck}
            tabIndex={1}
            className='fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 border-solid cursor-pointer rounded-[500px] uppercase min-w-[160px] text-sm text-center p-2 font-bold transition ease-in-out duration-450
                        border-4 border-dark bg-light text-dark
                        hover:bg-dark hover:text-light 
                        focus:bg-dark focus:text-light focus:border-tabbed
                        superMobile:p-5 mobile:text-2xl superMobile:text-md' > 
            Summon Duck
        </button>
    )
}

export default SummonDuckButton
