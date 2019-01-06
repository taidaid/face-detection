/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, faceBoxes }) => {
  return (
    <div>
      <div className=" center">
        <div className="absolute mt2">
          <img id="image" alt={""} src={imageUrl} />

          {faceBoxes.map(box => {
            const fontSize = box.bottomRow - box.topRow;
            console.log(fontSize);
            return (
              <div
                className="boundingBox ma0"
                style={{
                  top: box.topRow,
                  right: box.rightCol,
                  bottom: box.bottomRow,
                  left: box.leftCol,
                  fontSize: `${fontSize / 10}vw`
                }}
              >
                😁
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FaceRecognition;
