import React from 'react';
import ImageFilter from '../components/ImageFilter';

const App = () => {
  return (
    <div>
      <h2>PixelCraft Filter Preview</h2>
      <ImageFilter
        src="/assets/aditya.jpg"
        grayscale={0.5}
        sepia={0.9}
        brightness={1.2}
        contrast={1.1}
        blur={0}
        width="350px"
      />
    </div>
  );
};

export default App;
