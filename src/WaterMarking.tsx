import React, { useRef, useEffect } from 'react';

interface WatermarkPosition {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

interface WatermarkedImageProps {
  imageUrl: string;
  watermarkUrl: string;
  position?: WatermarkPosition;
  width?: number;
  height?: number;
  watermarkWidth?: number;
  watermarkHeight?: number;
}

const WatermarkedImage: React.FC<WatermarkedImageProps> = ({
  imageUrl,
  watermarkUrl,
  position = { bottom: 10, right: 10 },
  width = 500,
  height = 500,
  watermarkWidth = 100,
  watermarkHeight = 50,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    
    if (!canvas || !ctx) return;
    
    const image = new Image();
    const watermark = new Image();
    
    image.crossOrigin = "anonymous";
    watermark.crossOrigin = "anonymous";
    
    image.src = imageUrl;
    watermark.src = watermarkUrl;
    
    console.log(image);
    image.onload = () => {
        // Resize canvas based on image size or custom width/height
        canvas.width = width;
        canvas.height = height;

      ctx.drawImage(image, 0, 0, width, height);

      watermark.onload = () => {
        // Calculate position
        let x = 0;
        let y = 0;

        if (position.left !== undefined) {
          x = position.left;
        } else if (position.right !== undefined) {
          x = width - watermarkWidth - position.right;
        }

        if (position.top !== undefined) {
          y = position.top;
        } else if (position.bottom !== undefined) {
          y = height - watermarkHeight - position.bottom;
        }

        ctx.drawImage(watermark, x, y, watermarkWidth, watermarkHeight);
        console.log(`Watermark drawn at (${x}, ${y}) with size ${watermarkWidth}x${watermarkHeight}`);
        
      };
    };
  }, [imageUrl, watermarkUrl, position, width, height, watermarkWidth, watermarkHeight]);

  return <canvas ref={canvasRef} style={{ maxWidth: '100%' }} />;
};

export default WatermarkedImage;
