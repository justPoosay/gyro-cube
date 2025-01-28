import { useState, useEffect } from "react";
import { useDeviceOrientation } from "../useDeviceOrientation";

const GyroHue = (): React.ReactElement | null => {
  const { orientation, requestAccess } = useDeviceOrientation();
  const [accessGranted, setAccessGranted] = useState(false);
  const [gradientAngle, setGradientAngle] = useState(0);
  const [backgroundPosition, setBackgroundPosition] = useState("50% 50%");

  const handleRequestAccess = async () => {
    const granted = await requestAccess();
    setAccessGranted(granted);
  };

  useEffect(() => {
    if (orientation) {
      const { alpha, beta, gamma } = orientation;

      // Kąt dla linear-gradient na podstawie orientacji
      const angle = alpha ? alpha % 360 : 0;

      // Efekt odbicia – dynamiczna pozycja tła zależna od przechylenia telefonu
      const posX = gamma ? 50 + gamma * 0.5 : 50;
      const posY = beta ? 50 + beta * 0.5 : 50;

      setGradientAngle(angle);
      setBackgroundPosition(`${posX}% ${posY}%`);
    }
  }, [orientation]);

  return (
    <div>
      {!accessGranted && (
        <button onClick={handleRequestAccess}>Zezwól na czujniki</button>
      )}

      <div>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "103px",
            height: "121px",
            background: `linear-gradient(${gradientAngle}deg, rgba(255,0,255,1), rgba(0,255,255,1), rgba(255,255,0,1))`,
            backgroundSize: "200% 200%",
            backgroundPosition: backgroundPosition, // Dynamiczna zmiana położenia gradientu
            clipPath: "url(#svgClip)",
            overflow: "hidden",
            transition: "background-position 0.1s ease-out, background 0.1s ease-out", // Płynne przejścia dla efektu odbicia
          }}
        >
          <svg width="0" height="0">
            <defs>
              <clipPath id="svgClip">
                <path
                  d="M 0 0 L 1.351562 96.421875 C 1.351562 96.421875 1.472656 105.101562 10.292969 110.867188 C 12.753906 112.476562 16.675781 113.75 22.695312 113.667969 C 24.527344 113.640625 35.027344 113.589844 40.316406 113.734375 C 44.175781 113.839844 50.601562 116.511719 51.054688 120.992188 L 51.960938 120.992188 C 52.347656 115.804688 58.777344 113.847656 62.699219 113.734375 C 67.960938 113.585938 78.484375 113.644531 80.316406 113.667969 C 86.335938 113.75 90.257812 112.476562 92.71875 110.867188 C 101.539062 105.101562 101.660156 96.421875 101.660156 96.421875 L 103.011719 0 Z M 0 0 "
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <img
        src="/godlo.svg"
        alt="Holographic Sticker"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          filter: "opacity(0.5) grayscale(1)",
          width: "103px",
          height: "121px",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default GyroHue;
