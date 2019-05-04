import React from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";


import { giveProviderConsent } from  '../../actions/grantAccessActions'


class AuthorizeButton extends React.Component {
  state = {
    authorizationGranted: false
  };


  handleAuthorize = e => {
    e.preventDefault();
    this.setState({ authorizationGranted: true });
    this.props.giveProviderConsent(this.props.providerId)
    };

  render() {
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
