import React from 'react';
import ImageFormatConverter from '../components/ImageFormatConverter';

const App = () => {
  return (
    <div>
      <h2>Image Format Conversion Example</h2>
      <ImageFormatConverter
        src="/assets/aditya.jpg"
        format="image/webp"
        quality={0.8}
        width={400}
        height={300}
      />
    </div>
  );
};

export default App;
