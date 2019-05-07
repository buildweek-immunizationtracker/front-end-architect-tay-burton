import React from "react";
//import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import { PatientRegistrationWrapper } from "./PatientRegistrationWrapper";
import { createPatientAccount } from '../../actions/registrationActions'
import { Link } from "react-router-dom"
import { Redirect } from 'react-router-dom'

class PatientRegistrationView extends React.Component {
    state = {
      credentials: {
        fullName: "",
        username: "",
        email: "",
        password: "",

        //verification:"", ex. licensure, 
        //providerID:""
        //mvp or strethc??
      },
      accountSubmitted: false
    };
  
    handleInput = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      });
    };
  
    handleSubmit = e => {
      e.preventDefault();
      
      this.props.createPatientAccount(this.state.credentials)
      this.setState({ accountSubmitted:true })
          
    };
  
    
  
    render() {  
      if (this.state.accountSubmitted === true) {
      return <Redirect to='/login' />
    }
      return (
        <PatientRegistrationWrapper>
        <div className="container">
          <div className="header">
            <h1> New Patient Registration</h1>
          </div>

          <div>
           <form className="inputContainer" 
           onSubmit={this.handleSubmit}>
           
           <input
              className = "input"
              type = "text"
              onChange={this.handleInput}
              placeholder="Full Name"
              value={this.state.fullName}
              name="fullName"
            />
            <input
              className = "input"
              type = "text"
              onChange={this.handleInput}
              placeholder="Username"
              value={this.state.username}
              name="username"
            />
            <input
              className = "input"
              type = "text"
              onChange={this.handleInput}
              placeholder="Email Address"
              value={this.state.email}
              name="email"
            />
            <input
              className = "input"
              type = "password"
              onChange={this.handleInput}
              placeholder="Password"
              value={this.state.password}
              name="password"
            />
            <div  
              className="submit" onClick={this.handleSubmit} >
              Create Account
            </div>
            </form>
            
            </div>
            
            <div className = "alreadyRegistered">
              <p>Already Registered? </p>
              <a className="redirectLogin" href="/"> Login</a>
            </div>
            <div className = "alreadyRegistered">
              <p>Are you a medical provider? </p>
              <Link className="redirectLogin" to="/register-provider"> Create a provider account</Link>
            </div>
        </div>
        </PatientRegistrationWrapper>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      userListPatient:state.userListPatient,
      addingPatient: state.addingPatient,
      error:state.error
    };
  };
  
  export default connect(
    mapStateToProps,
   { createPatientAccount }
  )(PatientRegistrationView);