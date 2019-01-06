import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, color }) => {
  return (
    <div>
      {color ? (
        <p style={{ color: color }}>{`${color} is the primary color`}</p>
      ) : (
        <p style={{ color: color }}>{`This is the primary color`}</p>
      )}

      <div className="center">
        <img alt={""} src={imageUrl} />
      </div>
    </div>
  );
};

export default FaceRecognition;
