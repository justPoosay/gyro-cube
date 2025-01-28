import { useState } from 'react';
import { useDeviceOrientation } from "../useDeviceOrientation";

const GyroStretch = (): React.ReactElement | null => {
  const { orientation, requestAccess } = useDeviceOrientation();
  const [accessGranted, setAccessGranted] = useState(false);

  const handleRequestAccess = async () => {
    const granted = await requestAccess();
    setAccessGranted(granted);
  };

  // Obliczanie wartości transformacji na podstawie danych żyroskopu
  const scaleX = orientation?.beta ? 1 + (orientation.beta / 180) : 1;
  const scaleY = orientation?.gamma ? 1 + (orientation.gamma / 180) : 1;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {!accessGranted && (
        <button
          onClick={handleRequestAccess}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
        >
          Zezwól na czujniki
        </button>
      )}
      <div className="mt-5">
        <img
          src="../assets/sansdance.gif"
          alt="Gyro-controlled"
          className="w-64 h-64 object-cover rounded-lg shadow-lg"
          style={{ transform: `scale(${scaleX}, ${scaleY})` }}
        />
      </div>
    </div>
  );
}

export default GyroStretch;
