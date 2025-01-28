import React from "react";
import { useDeviceOrientation } from "../useDeviceOrientation";
import OrientationSwitcher from "../OrientationSwitcher";
import "./GyroCube.css";

const GyroImage = (): React.ReactElement | null => {
  const { requestAccess, revokeAccess, cssTransformInverse } =
    useDeviceOrientation();

  const onToggle = (toggleState: boolean): void => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    toggleState ? requestAccess() : revokeAccess();
  };

  return (
    <div className="post--2021--water-line--gyro-cube">
      <OrientationSwitcher
        onToggle={onToggle}
        labelOff="Turn the Gyro-Cube ON"
        labelOn="Turn the Gyro-Cube OFF"
      />

      <div className="gyro-cube-container">
        <div className="gyro-cube" style={cssTransformInverse}>
          <div className="gyro-cube-side gyro-cube-front">
            <img
              src="https://us-tuna-sounds-images.voicemod.net/6b8bbd21-77dd-4eb9-b014-d93362ee44ae-1661652061871.jpg"
              width="250"
              height="250"
            />
          </div>
          <div className="gyro-cube-side gyro-cube-back">
            <img
              src="https://us-tuna-sounds-images.voicemod.net/6b8bbd21-77dd-4eb9-b014-d93362ee44ae-1661652061871.jpg"
              width="250"
              height="250"
            />
          </div>
          <div className="gyro-cube-side gyro-cube-left">
            <img
              src="https://us-tuna-sounds-images.voicemod.net/6b8bbd21-77dd-4eb9-b014-d93362ee44ae-1661652061871.jpg"
              width="250"
              height="250"
            />
          </div>
          <div className="gyro-cube-side gyro-cube-right">
            <img
              src="https://us-tuna-sounds-images.voicemod.net/6b8bbd21-77dd-4eb9-b014-d93362ee44ae-1661652061871.jpg"
              width="250"
              height="250"
            />
          </div>
          <div className="gyro-cube-side gyro-cube-top">
            <img
              src="https://us-tuna-sounds-images.voicemod.net/6b8bbd21-77dd-4eb9-b014-d93362ee44ae-1661652061871.jpg"
              width="250"
              height="250"
            />
          </div>
          <div className="gyro-cube-side gyro-cube-bottom">
            <img
              src="https://us-tuna-sounds-images.voicemod.net/6b8bbd21-77dd-4eb9-b014-d93362ee44ae-1661652061871.jpg"
              width="250"
              height="250"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GyroImage;
