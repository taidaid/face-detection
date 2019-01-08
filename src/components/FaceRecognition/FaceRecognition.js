/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, faceBoxes }) => {
  return (
    <div>
      <div className=" center">
        <div className="absolute mt2">
          <img id="image" alt={""} src={imageUrl} />

          {faceBoxes.map((box, i) => {
            const fontSize = box.bottomRow - box.topRow;
            console.log(
              "top row: " + box.topRow + "bottom row: " + box.bottomRow
            );
            return (
              <div
                key={i}
                className="boundingBox ma0"
                style={{
                  top: box.topRow,
                  right: box.rightCol,
                  bottom: box.bottomRow,
                  left: box.leftCol,
                  fontSize: `${document.getElementById("image").height /
                    fontSize}vw`
                }}
              >
                <div className="self-center">😁</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FaceRecognition;
