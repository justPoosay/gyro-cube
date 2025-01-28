import { useState, useEffect } from "react";
import { useDeviceOrientation } from "../useDeviceOrientation";

const GyroHue = (): React.ReactElement | null => {
  const { orientation, requestAccess } = useDeviceOrientation();
  const [accessGranted, setAccessGranted] = useState(false);

  const handleRequestAccess = async () => {
    const granted = await requestAccess();
    setAccessGranted(granted);
  };

  // Stan do przechowywania wartości transformacji
  const [transform, setTransform] = useState("");

  // Zmieniamy położenie gradientu w odpowiedzi na orientację urządzenia
  useEffect(() => {
    if (orientation) {
      const { beta, gamma } = orientation;

      // Przesuwamy gradient na podstawie orientacji
      const translateX = gamma ? gamma * 1.5 : 0; // Skala dla gamma
      const translateY = beta ? beta * 1.5 : 0; // Skala dla beta

      // Ustawiamy transformację dla gradientu
      setTransform(`translate(${translateX}px, ${translateY}px)`);
    }
  }, [orientation]);

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

      <div className="mt-5 relative w-64 h-64">
        <div
          className="relative w-full h-full rounded-lg overflow-hidden"
          style={{
            zIndex: 10,
            position: "absolute",
            top: 0,
            left: 0,
            width: "103px",
            height: "121px",
            background: "linear-gradient(45deg, rgba(255,0,255,0.6), rgba(0,255,255,0.6), rgba(255,255,0,0.6))",
            backgroundSize: "100% 100%",
            // Przemieszczamy gradient w odpowiedzi na orientację
            transform: transform,
            clipPath: "url(#svgClip)", // Używamy clip-path, aby przyciąć do kształtu SVG
            overflow: "hidden",
          }}
        >
          <img
            src="/godlo.svg"
            alt="Holographic Sticker"
            style={{
              filter: "opacity(0.5) grayscale(1)",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            //   transform: transform,
            }}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />

          <svg width="0" height="0">
            <defs>
              <clipPath id="svgClip">
                <path
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "rgb(86.274511%,7.843138%,23.529412%)",
                    fillOpacity: 1,
                  }}
                  d="M 0 0 L 1.351562 96.421875 C 1.351562 96.421875 1.472656 105.101562 10.292969 110.867188 C 12.753906 112.476562 16.675781 113.75 22.695312 113.667969 C 24.527344 113.640625 35.027344 113.589844 40.316406 113.734375 C 44.175781 113.839844 50.601562 116.511719 51.054688 120.992188 L 51.960938 120.992188 C 52.347656 115.804688 58.777344 113.847656 62.699219 113.734375 C 67.960938 113.585938 78.484375 113.644531 80.316406 113.667969 C 86.335938 113.75 90.257812 112.476562 92.71875 110.867188 C 101.539062 105.101562 101.660156 96.421875 101.660156 96.421875 L 103.011719 0 Z M 0 0 "
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default GyroHue;
