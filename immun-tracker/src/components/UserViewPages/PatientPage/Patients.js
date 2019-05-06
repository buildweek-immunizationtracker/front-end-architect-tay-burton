import React, { Component } from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,

} from "reactstrap";

import LinkToGrantAccessButton from '../../GrantAccess/LinkToGrantAccessButton'
import { Patient } from "./PNavbarWrapper";
import { connect } from "react-redux";
// import { getImmunization, postImmunization } from "../../../actions/actions";

class DocPatient extends Component {
  state = {
    
  };

//   componentDidMount() {
    
//   }

//   componentDidUpdate(prevState) {
    
//   }



//   handleChange = e => {
//     this.setState({
//       credentials: {
//         ...this.state.credentials,
//         [e.target.name]: e.target.value
//       }
//     });
//   };

 

  render() {
    return (
      <div>
        <Patient>
          <Card body>
            <CardTitle>
              Patient Name: {this.props.patient.firstName}{" "}
              {this.props.patient.lastName}{" "}
            </CardTitle>
            <CardText>Birthday: {this.props.patient.birthDate}</CardText>
            <CardText> ID: {this.props.patient.id}</CardText>
            <LinkToGrantAccessButton 
              patientId={this.props.patient.id} 
              firstName={this.props.patient.firstName}
              lastName={this.props.patient.lastName}>
            </LinkToGrantAccessButton>
          </Card>
        </Patient>
      </div>
    );
  }
}

const mapStateToProps = ({ immunization }) => {
  return {
    immunization
  };
};

export default connect(
  mapStateToProps,
//   { getImmunization, postImmunization }
)(DocPatient);
