import React, { Component } from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Modal,
  ModalHeader,
  ModalBody,
  
} from "reactstrap";
import { Patient } from "./DocWrapper";
import { connect } from "react-redux";
import { getImmunization, postImmunization } from "../../../actions/actions";

class DocPatient extends Component {
  state = {
    immunization: [],
    modal: false,
    credentials: {
      immunizationId: "",
      appointmentDate: ""
    },
    submitted: false
  };

  componentDidMount() {
    this.props.getImmunization(this.props.patient.id);
  }

  componentDidUpdate(prevState) {
    if (this.state.immunization !== prevState.immunization) {
      this.setState({ immunization: this.props.immunization });
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleImmunization = () => {
    this.setState({ submitted: true });
    if(this.state.credentials.immunizationId && this.state.credentials.appointmentDate ){
    this.props
      .postImmunization(this.props.patient.id, this.state.credentials);
       
    }
  };

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
            <h3>Patient's Immunization History</h3>
            {this.state.immunization.map(immunization => (
              <div className=" imun">
                <div> Immunization Name: {immunization.immunization_name} </div>
                <div>Date of Immunization: {immunization.appointment_date}</div>
                <div>Provider ID: {immunization.provider_id}</div>
              </div>
            ))}
            <Button color="danger" onClick={this.toggle}>
              Add Immunization
            </Button>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggle}>Add Immunization</ModalHeader>
              <ModalBody>
                <form onSubmit={this.handleImmunization}>
                  <div>
                    {this.state.submitted &&
                      !this.state.credentials.immunizationId && (
                        <div className="help-block">Immunization Id is required</div>
                      )}
                    <input
                      type="text"
                      name="immunizationId"
                      value={this.state.credentials.immunizationId}
                      onChange={this.handleChange}
                      className="input"
                      placeholder="Immunization Id"
                    />
                  </div>
                  <div>
                    {this.state.submitted &&
                      !this.state.credentials.appointmentDate && (
                        <div className="help-block">Appointment Date is required</div>
                      )}
                    <input
                      type="text"
                      name="appointmentDate"
                      value={this.state.credentials.appointmentDate}
                      onChange={this.handleChange}
                      className="input"
                      placeholder="Appointment Date"
                    />
                  </div>
                  <button className="submit" disabled={!this.state.credentials.appointmentDate}>Add</button>
                </form>
              </ModalBody>
            </Modal>
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
  { getImmunization, postImmunization }
)(DocPatient);
