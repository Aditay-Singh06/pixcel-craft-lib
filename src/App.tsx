import React from 'react'
import WatermarkedImage from './WaterMarking'

const App = () => {
  return (
    <div>
      <WatermarkedImage
        imageUrl="/assets/aditya.jpg"
        watermarkUrl="Aditya Singh"
        position={{ top: 50, left: 50 }}
        width={500}
        height={500}
      />
    </div>
  )
}

export default App