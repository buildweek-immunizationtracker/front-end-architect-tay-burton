import React, { Component } from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import { Patient } from './DocWrapper';
import { connect } from "react-redux";
import { getImmunization } from "../../../actions/actions";

class DocPatient extends Component {

    componentDidMount() {
        
        this.props.getImmunization(this.props.patient.id);
      }

  render() {
    return (
      <div>
          <Patient>
        <Card body>
          <CardTitle>Patient Name: {this.props.patient.firstName} {this.props.patient.lastName}   </CardTitle>
          <CardText>Birthday: {this.props.patient.birthDate}</CardText>
          <CardText> ID: {this.props.patient.id}</CardText>
          
          <Button>Edit User Records</Button>
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
    { getImmunization  }
  )(DocPatient);
