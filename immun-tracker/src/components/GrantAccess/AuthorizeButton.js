import React from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";


import { giveProviderConsent } from  '../../actions/grantAccessActions'


class AuthorizeButton extends React.Component {
  state = {
    authorizationGranted: false
  };


  handleAuthorize = e => {
    const id = (Object.values(this.props.patientId).toString())
    e.preventDefault();
    this.setState({ authorizationGranted: true });
    this.props.giveProviderConsent(id, this.props.providerId) 
    };

  render() {
    // console.log(`this is the patient${this.props.match.params}`)
    console.log(Object.values(this.props.patientId).toString())
    return (
      
        <div className="main">
        
          <div onClick={this.handleAuthorize}>
           Grant Authorization
          </div>
          
        </div>
     
    );
  }
}

const mapStateToProps = state => {
  return {
    givingAuthorization: state.givingAuthorization,
    // providerId: state.providerId not needed??
  };
};

export default connect(
  mapStateToProps,
    { giveProviderConsent }
)(AuthorizeButton);
