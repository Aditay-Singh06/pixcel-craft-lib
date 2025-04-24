import React from 'react';

interface Crop {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface ImageEditorProps {
  src: string;
  rotate?: number;
  flipHorizontal?: boolean;
  flipVertical?: boolean;
  colorOverlay?: string; // e.g., "#ff000066"
  crop?: Crop;
  width?: number;
  height?: number;
}

const ImageEditor: React.FC<ImageEditorProps> = ({
  src,
  rotate = 0,
  flipHorizontal = false,
  flipVertical = false,
  colorOverlay = '',
  crop = { x: 0, y: 0, width: 300, height: 300 },
  width = 300,
  height = 300,
}) => {
  const transform = `
    rotate(${rotate}deg)
    scaleX(${flipHorizontal ? -1 : 1})
    scaleY(${flipVertical ? -1 : 1})
  `;

  const imageType = src.split('.').pop()?.toUpperCase() || 'Unknown';

  return (
    <div style={{ position: 'relative', width, height, overflow: 'hidden', border: '1px solid #ccc' }}>
      <div
        style={{
          transform,
          position: 'absolute',
          left: -crop.x,
          top: -crop.y,
        }}
      >
        <img src={src} width={width} height={height} alt="Edited Preview" />
      </div>
      {colorOverlay && (
        <div
          style={{
            backgroundColor: colorOverlay,
            position: 'absolute',
            top: 0,
            left: 0,
            width,
            height,
            pointerEvents: 'none',
          }}
        />
      )}
      <span
        style={{
          position: 'absolute',
          bottom: 4,
          right: 6,
          background: 'rgba(0, 0, 0, 0.4)',
          color: '#fff',
          fontSize: 12,
          padding: '2px 6px',
          borderRadius: 4,
        }}
      >
        {imageType} Format
      </span>
    </div>
  );
};

export default ImageEditor;
