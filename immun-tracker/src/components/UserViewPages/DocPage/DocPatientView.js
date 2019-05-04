import React, { Component } from "react";
import { connect } from "react-redux";
import { getData, getPatient } from "../../../actions/actions";
import DocNav from "./DocNav";
import DocPatient from "./DocPatient";



class DocPatientView extends Component {
 

  componentDidMount() {
    this.props.getData();
    this.props.getPatient();
  }


  render() {
      const {patients} = this.props;
    return (
      <div>
        <DocNav />
        <div>
          <h1>Patients</h1>
           {patients.map(patient =>(
             <DocPatient key={patient.id} patient={patient}/>
           ))}
          </div>
        </div>
    );
  }
}

const mapStateToProps = ({ user, fetchingData, patients }) => {
  return {
    user,
    patients,
    fetchingData
  };
};

export default connect(
  mapStateToProps,
  { getData, getPatient }
)(DocPatientView);
