import { useState, useEffect } from "react";
import { useDeviceOrientation } from "../useDeviceOrientation";
import "./GyroHue.css"; // Importujemy style

const GyroHue = (): React.ReactElement | null => {
  const { orientation, requestAccess } = useDeviceOrientation();
  const [accessGranted, setAccessGranted] = useState(false);

  const handleRequestAccess = async () => {
    const granted = await requestAccess();
    setAccessGranted(granted);
  };

  const [gradientStyle, setGradientStyle] = useState({});

  useEffect(() => {
    if (orientation) {
      const { alpha, beta, gamma } = orientation;

      if (alpha !== null && beta !== null && gamma !== null) {
        // Obliczenia dla efektu światła
        const hueRotate = alpha * 2; // Obrót odcienia
        const brightness = 1 + Math.sin(beta * (Math.PI / 180)) * 0.3; // Efekt odbicia
        const contrast = 1 + Math.sin(gamma * (Math.PI / 180)) * 0.2; // Zmiana kontrastu

        // Dynamiczne położenie gradientu
        const backgroundPositionX = `${50 + gamma * 0.5}%`;
        const backgroundPositionY = `${50 + beta * 0.5}%`;

        setGradientStyle({
          background: `linear-gradient(${alpha}deg, rgba(255,0,255,0.8), rgba(0,255,255,0.8), rgba(255,255,0,0.8))`,
          backgroundSize: "200% 200%",
          backgroundPosition: `${backgroundPositionX} ${backgroundPositionY}`,
          filter: `hue-rotate(${hueRotate}deg) brightness(${brightness}) contrast(${contrast})`,
        });
      }
    }
  }, [orientation]);

  return (
    <div className="gyro-hue-wrapper">
      {/* Przycisk, 20px nad obrazkiem */}
      <div className="gyro-hue-button-container">
        {!accessGranted && (
          <button onClick={handleRequestAccess}>Zezwól na czujniki</button>
        )}
      </div>

      {/* Obrazek, w centrum strony */}
      <div className="gyro-hue-image-container" style={gradientStyle}>
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

      {/* Wstawianie obrazka, w centrum */}
      <img
        src="/godlo.svg"
        alt="Holographic Sticker"
        className="gyro-hue-image"
      />

      {/* Dane z żyroskopu, 20px poniżej obrazka */}
      <div className="gyro-hue-data">
        <ul>
          <li>ɑ: {orientation && <code className="language-text">{orientation.alpha}</code>}</li>
          <li>β: {orientation && <code className="language-text">{orientation.beta}</code>}</li>
          <li>γ: {orientation && <code className="language-text">{orientation.gamma}</code>}</li>
        </ul>
      </div>
    </div>
  );
};

export default GyroHue;
