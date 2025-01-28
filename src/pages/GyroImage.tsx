import { useState } from "react";
// import sansDance from "../assets/sans-dance.png";
import { useDeviceOrientation } from "../useDeviceOrientation";

const GyroImage = (): React.ReactElement | null => {
  const { orientation, requestAccess } = useDeviceOrientation();
  const [accessGranted, setAccessGranted] = useState(false);

  const handleRequestAccess = async () => {
    const granted = await requestAccess();
    setAccessGranted(granted);
  };

  // Obliczanie wartości hue na podstawie alpha (obrót wokół osi Z)
  const hue = orientation?.alpha ? orientation.alpha % 360 : 0;

  return (
    <div>
      {!accessGranted && (
        <button onClick={handleRequestAccess}>Zezwól na czujniki</button>
      )}
      <img
        // src={sansDance}
        src="https://us-tuna-sounds-images.voicemod.net/6b8bbd21-77dd-4eb9-b014-d93362ee44ae-1661652061871.jpg"
        alt="Gyro-controlled"
        style={{ filter: `hue-rotate(${hue}deg)` }}
      />
    </div>
  );
};

export default GyroImage;