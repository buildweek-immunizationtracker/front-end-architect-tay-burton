import React from "react";
import { Link } from "react-router-dom";
// Components
import PatientNav from "../PatientPage/PatientNav";
import DatePicker from "react-datepicker";
// Styled Compnents
import {
  AddPatientDiv,
  AddPatientForm,
  AddPatientInput,
  AddPatientLabel,
  AddPatientFormGroup,
  ValidationDiv,
  ButtonDiv,
  StyledLink
} from "./styles";
import { Button } from "reactstrap";
// API Helper
import { postPatient } from "./apiCalls";

import "react-datepicker/dist/react-datepicker.css";

export class AddPatientView extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    birthDate: new Date(),
    blurred: {
      firstName: false,
      lastName: false
    },
    isSubmitting: false
  };

  changeDate = date => {
    this.setState({
      birthDate: date
    });
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitPatient = event => {
    // Suppress default submit behavior
    event.preventDefault();

    const { firstName, lastName, birthDate } = this.state;

    const newPatient = {
      firstName,
      lastName,
      birthDate
    };

    this.setState({ isSubmitting: true });
    postPatient(newPatient)
      .then(() => {
        console.log("success!");
        this.props.history.push("/patienthub");
        this.setState({ isSubmitting: false })
      })
      .catch(error => {
        console.error(error);
        this.setState({ isSubmitting: false })
      });
  };

  isFieldFilled = fieldName => {
    // Returns true if input has any value other than an empty string
    return Boolean(this.state[fieldName]);
  };

  showErrorMessage = fieldName => {
    // Returns true if user removed focus from input and the input is NOT filled
    return this.state.blurred[fieldName] && !this.isFieldFilled(fieldName);
  };

  isBirthDateValid = () => {
    // Returns true if birthdate is not in the future. Can remove once time travel
    // is confirmed.
    const today = new Date().getTime();
    const selectedDate = this.state.birthDate.getTime();
    // Date is valid if it's today or in the past (future dates are not OK)
    return selectedDate <= today;
  };

  disableSubmitButton = () => {
    // Returns true if any input is not filled in or date selected is invalid
    // Meant to go to 'disabled' attribute on the submit button
    return (
      !(
        this.isFieldFilled("firstName") &&
        this.isFieldFilled("lastName") &&
        this.isBirthDateValid()
      ) || this.state.isSubmitting
    );
  };

  setBlur = event => {
    // Sets in state if an element is blurred (i.e. user removes focus from
    // element)

    // Reference for below:
    //https://stackoverflow.com/a/44708693
    const elementName = event.target.name;

    const stateUpdater = prevState => ({
      ...prevState,
      blurred: {
        ...prevState.blurred,
        [elementName]: true
      }
    });

    this.setState(stateUpdater);
  };

  render() {
    const { firstName, lastName, birthDate } = this.state;

    return (
      <AddPatientDiv>
        <PatientNav />
        <AddPatientForm onSubmit={this.submitPatient}>
          <h2>Add a New Patient</h2>
          <AddPatientFormGroup>
            <AddPatientLabel htmlFor="firstName">First Name</AddPatientLabel>
            <AddPatientInput
              name="firstName"
              value={firstName}
              onChange={this.handleInputChange}
              onBlur={this.setBlur}
            />
            <ValidationDiv>
              {this.showErrorMessage("firstName")
                ? "First Name is required!"
                : null}
            </ValidationDiv>
          </AddPatientFormGroup>

          <AddPatientFormGroup>
            <AddPatientLabel htmlFor="lastName">Last Name</AddPatientLabel>
            <AddPatientInput
              name="lastName"
              value={lastName}
              onChange={this.handleInputChange}
              onBlur={this.setBlur}
            />
            <ValidationDiv>
              {this.showErrorMessage("lastName")
                ? "Last Name is required!"
                : null}
            </ValidationDiv>
          </AddPatientFormGroup>

          <AddPatientFormGroup>
            <AddPatientLabel htmlFor="birthDate">Birth Date</AddPatientLabel>
            <DatePicker
              name="birthDate"
              selected={birthDate} // this works like the 'value' in input
              onChange={this.changeDate} // accepts onChange function which
              // would update state
            />
            <ValidationDiv>
              {!this.isBirthDateValid() ? "Date invalid!" : null}
            </ValidationDiv>
          </AddPatientFormGroup>

          <ButtonDiv>
            <Button
              color="primary"
              disabled={this.disableSubmitButton()}
              type="submit"
            >
              {this.state.isSubmitting ? "Submitting" : "Submit"}
            </Button>
            <StyledLink to="/patienthub">Go Back</StyledLink>
          </ButtonDiv>
        </AddPatientForm>
      </AddPatientDiv>
    );
  }
}
