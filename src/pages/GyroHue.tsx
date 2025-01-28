import { useState } from "react";
import { useDeviceOrientation } from "../useDeviceOrientation";

const GyroHue = (): React.ReactElement | null => {
  const { orientation, requestAccess } = useDeviceOrientation();
  const [accessGranted, setAccessGranted] = useState(false);

  const handleRequestAccess = async () => {
    const granted = await requestAccess();
    setAccessGranted(granted);
  };

  // Obliczanie wartości dla efektów kolorystycznych na podstawie orientacji
  const hueRotation = orientation?.alpha ? orientation.alpha : 0; // Zmienna dla rotacji koloru
  const brightness = orientation?.beta ? 1 + orientation.beta / 180 : 1; // Zmienna dla jasności
  const contrast = orientation?.gamma ? 1 + orientation.gamma / 180 : 1; // Zmienna dla kontrastu

  // Tworzenie efektu koloru za pomocą filtra CSS
  const filter = `hue-rotate(${hueRotation}deg) brightness(${brightness}) contrast(${contrast})`;

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
          src="https://i.pinimg.com/originals/92/02/ca/9202ca896aad9e67b8c417705ccf301a.gif"
          alt="Gyro-controlled"
          className="w-64 h-64 object-cover rounded-lg shadow-lg"
          style={{
            filter: filter,
            width: "200px",
            height: "200px",
          }}
        />
      </div>
    </div>
  );
};

export default GyroHue;
