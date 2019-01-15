import React from "react";
import "./SignIn.css";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: ""
    };
  }

  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;

    return (
      <div>
        <article className=" center ma0 br3 ba dark-gray b--black-10  w-100 ">
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
                    onChange={this.onEmailChange}
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
                    onChange={this.onPasswordChange}
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  onClick={this.onSubmitSignIn}
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
                <a
                  href="#0"
                  className="hover-white f6 pointer link dim black db"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
          </main>
        </article>
      </div>
    );
  }
}
export default SignIn;
