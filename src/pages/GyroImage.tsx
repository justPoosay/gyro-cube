import React, { useState } from "react";
import { useDeviceOrientation } from "../useDeviceOrientation";
import OrientationSwitcher from "../OrientationSwitcher";
import "./GyroCube.css";
import "./GyroImage.css";

const GyroCube = (): React.ReactElement | null => {
  const { requestAccess, revokeAccess, cssTransformInverse } =
    useDeviceOrientation();

  const [loadedImage, setLoadedImage] = useState("");
  const onToggle = (toggleState: boolean): void => {
    toggleState ? requestAccess() : revokeAccess();
  };

  const handleFileChange = (file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          setLoadedImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="gyro-cube-wrapper">
      <div className="orientation-switcher-container"></div>
      {!loadedImage ? (
        <div
          className="drop-area"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <button
            onClick={() => document.getElementById("fileInput")?.click()}
            className="upload-button"
          >
            Wybierz obraz
          </button>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={(e) =>
              handleFileChange(e.target.files ? e.target.files[0] : null)
            }
            style={{ display: "none" }}
          />
        </div>
      ) : (
        <div className="post--2021--water-line--gyro-cube">
          <OrientationSwitcher
            onToggle={onToggle}
            labelOff="Turn the Gyro-Cube ON"
            labelOn="Turn the Gyro-Cube OFF"
          />
          <div className="gyro-cube-container">
            <div className="gyro-cube" style={cssTransformInverse}>
              {["front", "back", "left", "right", "top", "bottom"].map(
                (side) => (
                  <div
                    key={side}
                    className={`gyro-cube-side gyro-cube-${side}`}
                  >
                    {loadedImage && (
                      <img
                        src={loadedImage}
                        width="200"
                        height="200"
                        alt={`Side ${side}`}
                      />
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GyroCube;
