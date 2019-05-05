import React from "react";

//Redux
import { connect } from "react-redux";

//React Router
import { Link } from "react-router-dom";

// import Loader from "react-loader-spinner";
import { login } from  '../../actions/actions'

//Styled Component
import { LoginWrapper } from "./LoginWrapper";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLock } from "@fortawesome/free-solid-svg-icons";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
      
    },
    submitted: false
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = e => {
    e.preventDefault();
    this.setState({ submitted: true });
    if(this.state.credentials.username && this.state.credentials.password ){
    this.props
      .login(this.state.credentials)
      .then(() => this.props.history.push("/patienthub"));
    }
  };

  render() {
    return (
      <LoginWrapper>
        <div className="main">
          <p className="sign">
            {" "}
            <FontAwesomeIcon icon={faUserLock} />
          </p>
          <form onSubmit={this.handleLogin}>
            <div>
              {this.state.submitted && !this.state.credentials.username && (
                <div className="help-block">Username is required</div>
              )}
              <input
                type="text"
                name="username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
                className="input"
                placeholder="User Name"
              />
            </div>
            <div>
              {this.state.submitted && !this.state.credentials.password && (
                <div className="help-block">Password is required</div>
              )}
              <input
                type="password"
                name="password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
                className="input"
                placeholder="Password"
              />
            </div>
            <button className="submit">Log in</button>
          </form>
          <div className="forgot">
            <a className="helpLink" href="/">
              Forgot Password?
            </a>
            <Link className="helpLink" to="/register-patient">
              Sign Up
            </Link>
          </div>
        </div>
      </LoginWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggingIn: state.isLoggingIn,
    
  };
};

export default connect(
  mapStateToProps,
    { login }
)(Login);
