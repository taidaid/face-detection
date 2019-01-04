import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, face }) => {
  return (
    <div>
      <div className="center">
        <img alt={""} src={imageUrl} />
      </div>
    </div>
  );
};

export default FaceRecognition;
