import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
  return (
    <div>
      <p className="f3 gray">
        This Magic App will detect faces in your pictures
      </p>
      <div className="center">
        <div className="center form pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            onClick={onPictureSubmit}
            className="w-30 grow f4 link ph3 pv2 dib black bg-light-gray"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
