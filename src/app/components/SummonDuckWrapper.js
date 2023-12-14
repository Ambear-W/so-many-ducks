import React, { useState } from 'react'
import SummonDuckButton from './SummonDuckButton'
import Duck from './Duck'

export const SummonDuckWrapper = () => {
  const [ducks, setDucks] = useState([])

  const addDuck = (duck, picture) => {
    setDucks([...ducks, { duckLocation: duck, duckPic: picture }])
  }

  React.useEffect(() => {
    console.log('useEffect ducks' + ducks)
  });

  return (
    <div>
      <SummonDuckButton addDuck={addDuck} />
      {ducks.map(({duckLocation, duckPic}, index) => (
        <Duck location={duckLocation} picture={duckPic} key={index} />
      ))}
    </div>
  )
}

export default SummonDuckWrapper
