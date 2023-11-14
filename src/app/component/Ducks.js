import React from 'react'
import {useState} from "react";

const [width, setWidth] = useState(0);
const [height, setHeight] = useState(0);
const [count, setCount] = useState(0);

const summonDuck = () => {
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
        </div>
    )
}

const Ducks = () => {
    return (
        <Fragment>

            <button onClick={() => setCount(count + 1)}
                className='border-4 border-dark bg-light border-solid cursor-pointer hover:bg-dark hover:text-light rounded-[500px] uppercase min-w-[160px] text-2xl text-dark text-center p-5 font-bold transition ease-in-out duration-450'>
                Summon Duck
            </button>

            {[...Array(count)].map((_, i) => summonDuck)}

        </Fragment>
    )
}

ReactDOM.render(<Ducks />, document.getElementById("react"))

export default Ducks