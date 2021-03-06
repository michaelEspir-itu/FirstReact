import React from "react";
import Navigation from "./Navigation";
import LoginButton from "./LoginButton";

export default class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="form">
          <div className="form-header">
            <h3>LOG IN</h3>
            <br />
          </div>
          <div className="form-body">
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Username"
            />
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
            <br />
            <LoginButton />
          </div>
        </div>
      </div>
    );
  }
}