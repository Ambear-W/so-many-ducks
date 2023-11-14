'use client';
import { DuckFamily, DuckOne, DuckTwo } from './ducks';
import { useState } from "react";
// import summonDuck from './Hooks/summonDuck';
import Ducks from './component/Ducks';
import RandomDuck from './component/RandomDuck';

export default function Home() {

  const playQuack = () => {
    // play duck quack here
  }

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [count, setCount] = useState(0);
  const [left, setLeft] = useState(Math.floor(Math.random() * window.innerWidth));
  const [top, setTop] = useState(Math.floor(Math.random() * window.innerHeight));

  const summonDuck = () => {
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
    // https://stackoverflow.com/questions/51404335/append-a-react-component-in-another-on-button-click
    // https://stackoverflow.com/questions/55668801/how-to-make-an-image-appear-on-a-random-position-onclick
    // https://stackoverflow.com/questions/35905988/react-js-how-to-append-a-component-on-click
    // https://codesandbox.io/s/react-js-how-to-append-a-component-on-click-using-hooks-xhjkhw?file=/src/App.js

    setWidth(window.innerWidth)
    setHeight(window.innerHeight)

    setLeft(Math.floor(Math.random() * width));
    setTop(Math.floor(Math.random() * height));

    const location = {
      left: left + 'px',
      top: top + 'px'
    }

    console.log(location)

    // setCount(count + 1)

    var div = document.createElement("div");
    div.style.position = 'absolute';
    div.style.top = top + 'px';
    div.style.left = left + 'px';

    document.body.appendChild(div);
  }

  return (
    <main>
      <div>
        <button onClick={summonDuck}
          className='fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2  border-4 border-dark bg-light border-solid cursor-pointer hover:bg-dark hover:text-light rounded-[500px] uppercase min-w-[160px] text-2xl text-dark text-center p-5 font-bold transition ease-in-out duration-450'>
          Summon Duck
        </button>
        {/* { [...Array(count)].map((_, i) =>
        <div key={i} style={location} className='absolute transition ease-in-out duration-450'>
          <RandomDuck />
        </div>
        )} */}


      </div>
    </main>
  )
}
