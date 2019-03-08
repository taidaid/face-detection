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
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const id = (users.length || 0) + 1;
    const entries = 0;
    const joined = new Date();
    const user = {
      id: id,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      entries: entries,
      joined: joined
    };

    localStorage.setItem("users", JSON.stringify([...(users || []), user]));

    this.props.loadUser(user);
    this.props.onRouteChange("home");
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
                <input
                  onClick={this.onSubmitRegister}
                  className="hover-white b pointer ph3 pv2 input-reset ba moon-gray hover-bg-black b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
          </main>
        </article>
      </div>
    );
  }
}

export default Register;
