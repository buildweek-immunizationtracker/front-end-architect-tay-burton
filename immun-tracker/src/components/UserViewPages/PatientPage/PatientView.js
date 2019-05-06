import React, { Component } from "react";
import { connect } from "react-redux";
import { getPatient } from "../../../actions/actions";
import PatientNav from "./PatientNav";
import Patients from "./Patients"



class PatientView extends Component {
 

  componentDidMount() {
    
    this.props.getPatient();
  }


  render() {
      const {patients} = this.props;
    return (
      <div>
        <PatientNav />
        <div>
          <h1>Patients</h1>
           {patients.map(patient =>(
             <Patients key={patient.id} patient={patient}/>
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
)(PatientView);
