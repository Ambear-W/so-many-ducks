import React from 'react'
import {useState} from "react";
import RandomDuck from './RandomDuck';
import setLeft from '../Hooks/setLeft';
import setTop from '../Hooks/setTop';

export const Ducks = ({location}) => {
    return (
        <div style={location} className='absolute transition ease-in-out duration-450'>
          <RandomDuck />
        </div>
        
    )
}

export default Ducks