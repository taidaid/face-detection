import React from "react";
import "./Register.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onSubmitRegister = e => {
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    return (
      <div>
        <article className="center ma0 br3 ba moon-gray b--black-10 w-100">
          <main className="w-100 pa4 ">
            <form className="Register pa2 shadow-5 flex-column hover-bg-black-10:focus hover-bg-black-10:hover measure center">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f2 fw6 ph0 mh0 hover-white">Register</legend>
                <div className="mt3">
                  <label
                    className="db fw6 lh-copy f6 hover-white "
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    onChange={this.onNameChange}
                    className="pa2 input-reset ba bg-transparent hover-white hover-bg-black moon-gray w-100"
                    type="text"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="mv3">
                  <label
                    className="db fw6 lh-copy f6 hover-white"
                    htmlFor="email-address"
                  >
                    Email
                  </label>
                  <input
                    onChange={this.onEmailChange}
                    className="pa2 input-reset ba bg-transparent moon-gray hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                  />
                </div>
                <div className="mv3">
                  <label
                    className="db fw6 lh-copy f6 hover-white"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    onChange={this.onPasswordChange}
                    className="b pa2 input-reset ba bg-transparent moon-gray hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
              </fieldset>
              <div className="">
                <button
                  type="button"
                  onClick={this.onSubmitRegister}
                  className="b  ph3 pv2 moon-gray input-reset ba hover-bg-black hover-white b--black bg-transparent grow pointer f6 dib"
                >
                  Register
                </button>
              </div>
            </form>
          </main>
        </article>
      </div>
    );
  }
}

export default Register;
