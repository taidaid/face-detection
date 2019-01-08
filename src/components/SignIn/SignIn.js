import React from "react";
import "./SignIn.css";

const SignIn = ({ onRouteChange }) => {
  return (
    <div>
      <article className=" center ma0 br3 ba dark-gray b--black-10  w-100  center">
        <main className=" w-100 pa4 black-80">
          <div className="signIn w-100 pa2 shadow-5 hover-bg-black-10:focus hover-bg-black-10:hover measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="hover-white f2 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label
                  className="hover-white db fw6 lh-copy f6"
                  htmlFor="email-address"
                >
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label
                  className="hover-white db fw6 lh-copy f6"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={() => onRouteChange("home")}
                className="hover-white b pointer ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <a
                onClick={() => onRouteChange("register")}
                href="#0"
                className="hover-white f6 pointer link dim black db"
              >
                Register
              </a>
              <a href="#0" className="hover-white f6 pointer link dim black db">
                Forgot your password?
              </a>
            </div>
          </div>
        </main>
      </article>
    </div>
  );
};

export default SignIn;
