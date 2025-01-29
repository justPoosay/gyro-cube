import React, { useEffect, useState } from "react";
import { useDeviceOrientation } from "../useDeviceOrientation";
import "./GyroCube.css";

const GyroCube = (): React.ReactElement | null => {
  const { requestAccess, cssTransformInverse } = useDeviceOrientation();
  const [loadedImage, setLoadedImage] = useState("");

  useEffect(() => {
    requestAccess();
  }, [requestAccess]);

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
    <div className="gyro-cube-wrapper" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
      {!loadedImage ? (
        <div
          className="drop-area"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "10px",
            backgroundColor: "whitesmoke",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
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
        <div className="post--2021--water-line--gyro-cube" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
          <div className="gyro-cube-container">
            <div className="gyro-cube" style={cssTransformInverse}>
              {["front", "back", "left", "right", "top", "bottom"].map((side) => (
                <div key={side} className={`gyro-cube-side gyro-cube-${side}`}>
                  {loadedImage && (
                    <img
                      src={loadedImage}
                      width="200"
                      height="200"
                      alt={`Side ${side}`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GyroCube;
