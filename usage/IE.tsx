import React from 'react';
import ImageEditor from '../components/ImageEditor';

const App: React.FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>PixelCraft Image Editor Preview</h2>

      <ImageEditor
        src="/assets/aditya.jpg"
        rotate={0}
        flipHorizontal={false}
        flipVertical={false}
        colorOverlay="#00ff0055"
        crop={{ x: 50, y: 20, width: 300, height: 200 }}
        width={500}
        height={300}
      />
    </div>
  );
};

export default App;
