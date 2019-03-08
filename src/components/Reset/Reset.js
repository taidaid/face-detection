import React from "react";

const Reset = () => {
  const resetPasswordSubmit = e => {
    e.preventDefault();
    alert("We sent a link to reset your password to your email.");
  };
  return (
    <div>
      <article className=" center ma0 br3 ba b--black-10  w-100 ">
        <main className=" w-100 pa4 moon-gray">
          <form
            className="signIn w-100 pa2 shadow-5 measure center"
            onSubmit={e => resetPasswordSubmit(e)}
          >
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="hover-white f2 fw6 ph0 mh0">
                Reset your password
              </legend>
              <div className="mt3">
                <label
                  className="hover-white db fw6 lh-copy f6"
                  htmlFor="email-address"
                >
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent moon-gray hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
            </fieldset>
            <div className="">
              <button
                type="button"
                onClick={resetPasswordSubmit}
                className="b  ph3 pv2 moon-gray input-reset ba hover-bg-black hover-white b--black bg-transparent grow pointer f6 dib"
              >
                Reset password
              </button>
            </div>
          </form>
        </main>
      </article>
    </div>
  );
};

export default Reset;
