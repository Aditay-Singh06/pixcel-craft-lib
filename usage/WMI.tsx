
import WatermarkedImage from '../components/WaterMarking'

const WMI = () => {
  return (
    <WatermarkedImage
  baseImageUrl="./assets/aditya.jpg"
  watermarkText="Aditya Singh"
  position="top-left"
  font="bold 20px Arial"
  textColor="rgba(255, 0, 0, 0.6)"
  opacity={0.7}
/>
  )
}

export default WMI;