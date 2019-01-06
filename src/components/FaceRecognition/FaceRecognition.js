/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div>
      <div className=" center">
        <div className="absolute mt2">
          <img id="image" alt={""} src={imageUrl} />
          {imageUrl ? (
            <div
              className="boundingBox ma0"
              style={{
                top: box.topRow,
                right: box.rightCol,
                bottom: box.bottomRow,
                left: box.leftCol
              }}
            >
              😁
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default FaceRecognition;
