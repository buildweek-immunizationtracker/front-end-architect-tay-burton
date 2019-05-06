//React
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";


//Components
import Login from "./components/Login/Login";
import MedicalRegistrationView from './components/registration/MedicalRegistrationView';
import PatientRegistrationView from "./components/registration/PatientRegistrationView";

import GrantAccessView from "./components/GrantAccess/GrantAccessView"
import PatientContainer from "./components/UserViewPages/PatientPage/PatientContainer"
import AddPatient from './components/UserViewPages/AddPatient';
import UserPrivateRoute from "./components/UserPrivateRoute";
import DocHomepage from "./components/UserViewPages/DocPage/DocHompage";
import DocPatientView from "./components/UserViewPages/DocPage/DocPatientView";
import PatientView from "./components/UserViewPages/PatientPage/PatientView";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" exact render={props => <Redirect to="/login" {...props} />} /> 
          <Route path="/login" exact component={Login} />
          <Route path="/register-provider" exact component={MedicalRegistrationView} />
          <Route path = "/register-patient" exact component={PatientRegistrationView} />
          <UserPrivateRoute path="/addpatient" exact component={AddPatient} />
          <UserPrivateRoute path = "/grant-access" exact component={GrantAccessView} />
          <UserPrivateRoute path= "/patienthub" exact component={PatientContainer} />
          <UserPrivateRoute path= "/doctorhub" exact component={DocHomepage} />
          <UserPrivateRoute path= "/doctorhub/patients" exact component={DocPatientView} />
          <UserPrivateRoute path= "/user/patients" exact component={PatientView} />
        </div>
      </Router>
    );
  }
}

export default App