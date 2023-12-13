import React, {useState} from 'react'
import SummonDuckButton from './SummonDuckButton'
import Duck from './Duck'

export const SummonDuckWrapper = () => {
    const [ducks, setDucks] = useState([])

    const addDuck = (duck, picture) => {
        setDucks([...ducks, {location: duck, duckPic: picture}])
    }

    // const randomDuck = duckImage => {
    //     setDuckImages([...duckImages, {picture: duckImage}])

    // }
    
    React.useEffect(() => {
        console.log(ducks)
    }, [ducks]);

  return (
    <div>
      <SummonDuckButton addDuck={addDuck}/>
      {ducks.map((duck, duckPic, index) => (
        <Duck location={duck} picture={duckPic} key={index}/>
      ))}
    </div>
  )
}

export default SummonDuckWrapper
