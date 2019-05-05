import React, { Component } from "react";
import { connect } from "react-redux";
import { getPatient } from "../../../actions/actions";
import DocNav from "./DocNav";
import DocPatient from "./DocPatient";



class DocPatientView extends Component {
 

  componentDidMount() {
    
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

const mapStateToProps = ({  patients }) => {
  return {
   
    patients,
  };
};

export default connect(
  mapStateToProps,
  {  getPatient }
)(DocPatientView);
