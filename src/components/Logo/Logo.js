import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";

const Logo = () => {
  return (
    <div>
      <Tilt
        className="Tilt br2 shadow-2 center"
        options={{ max: 50 }}
        style={{ height: 40, width: 150 }}
      >
        <div className="Tilt-inner gray hover-white pa2">Know.more</div>
      </Tilt>
    </div>
  );
};

export default Logo;
