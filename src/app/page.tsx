'use client';
import {DuckFamily, DuckOne, DuckTwo} from './ducks'
import {useState} from "react";
import { useWindowSize } from "@uidotdev/usehooks";

export default function Home() {

  const summonDuck = () =>{
    console.log("Duck!")
    // Find a way to show image when clicked
    // Find way to randomly place image
    //  - Would it be better to put it in it's own component?
    // Find Quack sound
    // - Play when clicked but only when last audio has finished
    // Add rest of ducks
    //  - Find way to randomize ducks
    //  - maybe with a number system

    // https://usehooks.com/usewindowsize
    // https://stackoverflow.com/questions/63406435/how-to-detect-window-size-in-next-js-ssr-using-react-hook

    const size = useWindowSize();
    const randomNumberLeft = useState(Math.floor(Math.random() * {size.width}));
    const randomNumberTop = useState(Math.floor(Math.random() * {size.height}));

    return(
      <div className=''>
        {randomNumberLeft}
        {randomNumberTop}
      </div>
    )
  }

  return (
    <main className="">
      <div className='fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2'>
        <button onClick={summonDuck}
                className='border-4 border-dark bg-light border-solid cursor-pointer hover:bg-dark hover:text-light rounded-[500px] uppercase min-w-[160px] text-2xl text-dark text-center p-5 font-bold transition ease-in-out duration-450'>
          Summon Duck
        </button>
        <DuckFamily />
        <DuckOne />
        <DuckTwo />
      </div>
    </main>
  )
}
