'use client';
import { useState } from "react";
// import summonDuck from './Hooks/summonDuck';
import Ducks from './component/Ducks';
import RandomDuck from './component/RandomDuck';
import GetLocation from './component/GetLocation';
import SummonDuckWrapper from './componentsTESTING/SummonDuckWrapper';

export default function Home() {

  // const playQuack = () => {
  //   // play duck quack here
  // }
  
  // const [width, setWidth] = useState(0);
  // const [height, setHeight] = useState(0);
  // const [left, setLeft] = useState(Math.floor(Math.random() * window.innerWidth));
  // const [top, setTop] = useState(Math.floor(Math.random() * window.innerHeight));

  // setWidth(window.innerWidth)
  // setHeight(window.innerHeight)

  // const getLeft = () => {
  //   setLeft(Math.floor(Math.random() * width));

  //   return left
  // }

  // const getTop = () => {
  //   setTop(Math.floor(Math.random() * height));

  //   return top
  // }

  // const summonDuck = () => {
  //   getLeft();
  //   getTop();
    
  //   const cord = {
  //     left: left + 'px',
  //     top: top + 'px'
  //   }
    
  //   const [ducks, setDucks] = useState([])
  //   const addDuck = Ducks => {
  //     setDucks([...ducks, {location: cord}])
  //     console.log(ducks)
  //   }

  // }

  return (
    <main>
      {/* <div>
        <button onClick={summonDuck}
          className='fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2  border-4 border-dark bg-light border-solid cursor-pointer hover:bg-dark hover:text-light rounded-[500px] uppercase min-w-[160px] text-2xl text-dark text-center p-5 font-bold transition ease-in-out duration-450'>
          Summon Duck
        </button>
        {ducks.map((duck, index) => (
          <Ducks location={cord} key={index} />
        ))}
      </div> */}
      <SummonDuckWrapper />
    </main>
  )
}
