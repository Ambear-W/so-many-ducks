import React from 'react'
import {useState} from "react";
import RandomDuck from './RandomDuck';
import setLeft from '../Hooks/setLeft';
import setTop from '../Hooks/setTop';


const [count, setCount] = useState(0);

const summonDuck = () => {

    const location = {
        left: <setLeft />,
        top: <setTop />
    }

    return (

        <div className='absolute' style={location}>
            <RandomDuck />
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