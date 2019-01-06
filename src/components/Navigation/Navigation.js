import React from "react";
import "tachyons";
import "./Navigation.css";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className="center ">
        <p
          onClick={() => onRouteChange("signIn")}
          className="f3 link dim tr b--solid bw1 br2 gray underline pa3 pointer ml0"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav className="center ">
        <p
          onClick={() => onRouteChange("signIn")}
          className="f3 link dim tr b--solid bw1 br2 gray underline pa3 pointer ml3"
        >
          Sign In
        </p>

        <p
          onClick={() => onRouteChange("register")}
          className="f3 link dim tr b--solid bw1 br2 gray underline pa3 pointer ml3"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
