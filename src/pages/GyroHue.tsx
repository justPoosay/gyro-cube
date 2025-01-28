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
      <div className="mt-5 relative">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/021/879/437/small_2x/holographic-stickers-square-shape-hologram-labels-and-badge-empty-png.png"
          alt="Holographic Sticker"
          className="w-64 h-64 object-cover rounded-lg shadow-lg"
          style={{
            filter: filter,
            width: "200px",
            height: "200px",
          }}
        />
        <div
          className="absolute top-0 left-0 w-full h-full opacity-50 mix-blend-overlay animate-hologramEffect"
          style={{
            background: "linear-gradient(45deg, rgba(255,0,255,0.5), rgba(0,255,255,0.5), rgba(255,255,0,0.5))",
          }}
        ></div>
      </div>

      <style>
        {`
          @keyframes hologramEffect {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .animate-hologramEffect {
            animation: hologramEffect 3s infinite alternate;
          }
        `}
      </style>
    </div>
  );
};

export default GyroHue;
