'use client';
import {DuckFamily, DuckOne, DuckTwo} from './ducks';
import {useState} from "react";
// import summonDuck from './Hooks/summonDuck';
import Ducks from './component/Ducks';

export default function Home() {

  const playQuack = () => {
    // play duck quack here
  }

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const summonDuck = () =>{
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
    
    const images = [
      <DuckFamily />,
      <DuckOne />,
      <DuckTwo />
    ];

    setWidth(window.innerWidth)
    setHeight(window.innerHeight)

    console.log("Duck!")

  
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const randomLeft = (Math.floor(Math.random() * width));
    const randomTop = (Math.floor(Math.random() * height));

    const location = {
      left: randomLeft,
      top: randomTop
    }

    return(
      <div className='absolute' style={location}>
        {randomImage}
        <p>hehhehehe</p>
      </div>
    )
  }

  return (
    <main className="">
      <div id="react" className='fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2'>
        <Ducks />
        
      </div>
    </main>
  )
}
