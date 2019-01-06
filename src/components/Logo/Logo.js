import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2 center"
        options={{ max: 50 }}
        style={{ height: 40, width: 150 }}
      >
        <div className="Tilt-inner gray pa2">Know.more</div>
      </Tilt>
    </div>
  );
};

export default Logo;
