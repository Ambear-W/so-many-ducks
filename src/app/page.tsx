'use client';
import {DuckFamily} from './ducks'

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
  }

  return (
    <main className="">
      <div className='fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2'>
        <button onClick={summonDuck}
                className='border-4 border-dark bg-light border-solid cursor-pointer hover:bg-dark hover:text-light rounded-[500px] uppercase min-w-[160px] text-2xl text-dark text-center p-5 font-bold transition ease-in-out duration-450'>
          Summon Duck
        </button>
        <DuckFamily className={""}/>
      </div>
    </main>
  )
}
