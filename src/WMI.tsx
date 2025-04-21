import React from 'react';
import WatermarkedImage from './WaterMarking';

const App: React.FC = () => {
  return (
    <div>
      <h1>Image with Watermark</h1>
      <WatermarkedImage
        imageUrl="aditya.jpg"
        watermarkUrl="Aditya Singh"
        position={{ top: 20, left: 20 }}
        width={500}
        height={500}
      />
    </div>
  );
};

export default App;
