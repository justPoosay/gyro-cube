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
              src="https://i.pinimg.com/736x/94/a8/d6/94a8d60c5f5dbed03a1f72c0c79680ff.jpg"
              width="250"
              height="250"
            />
          </div>
          <div className="gyro-cube-side gyro-cube-back">
            <img
              src="https://i.pinimg.com/736x/2e/f9/d1/2ef9d12fbb66abfaac9aeb6c3b49f69c.jpg"
              width="250"
              height="250"
            />
          </div>
          <div className="gyro-cube-side gyro-cube-left">
            <img
              src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848e2f48c91de9caf0ed84b982"
              width="250"
              height="250"
            />
          </div>
          <div className="gyro-cube-side gyro-cube-right">
            <img
              src="https://i.pinimg.com/736x/8a/7e/94/8a7e94add4189f3ab19735d11780b072.jpg"
              width="250"
              height="250"
            />
          </div>
          <div className="gyro-cube-side gyro-cube-top">
            <img
              src="https://i.pinimg.com/736x/c3/9a/c5/c39ac5ebf279969584e8e12b7622c556.jpg"
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
