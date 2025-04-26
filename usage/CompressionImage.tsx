import ImageCompressor from "../components/Compression"

const CompressionImage = () => {
  return (
    <ImageCompressor
    imageUrl="https://example.com/large-image.jpg"
    targetSize={300}
    unit="KB"
  />
  )
}

export default CompressionImage