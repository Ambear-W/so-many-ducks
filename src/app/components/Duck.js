import React from 'react'
import { DuckFamily, DuckOne, DuckTwo } from '../ducks';

const images = [
    <DuckFamily />,
    <DuckOne />,
    <DuckTwo />
];

const Duck = ({ picture, location, index }) => {
    const thePicture = images[picture];

    return (
      <div style={location} className='absolute transition ease-in-out duration-450' key={index}>
        <p>{thePicture}</p>
      </div>
    );
  };

export default Duck
