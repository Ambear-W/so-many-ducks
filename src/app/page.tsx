'use client';
import Image from 'next/image'

export default function Home() {

  const summonDuck = () =>{
    console.log("Duck!")
  }

  return (
    <main className="">
      <div className='fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2'>
        <button onClick={summonDuck}
                className='border-4 border-dark bg-light border-solid cursor-pointer hover:bg-dark hover:text-light rounded-[500px] uppercase min-w-[160px] text-2xl text-dark text-center p-5 font-bold transition ease-in-out duration-500'>
          Summon Duck
        </button>
      </div>
    </main>
  )
}
