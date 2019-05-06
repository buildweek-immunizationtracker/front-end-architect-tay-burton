import React from 'react'


import { connect } from 'react-redux'
import { fetchProviderList } from '../../actions/grantAccessActions'

import List from './List';

import {
  Jumbotron,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

import PatientNav from '../../components/UserViewPages/PatientPage/PatientNav'


class GrantAccessView extends React.Component {
    // constructor() {
    //     super();
    // }

  componentDidMount() {
    // const { handle } = this.props.match.params
    // const { firstName } = this.props.location.state
    this.props.fetchProviderList();

  }

  render() {
    // if (this.props.fetchingProviders) {
    //   <h3>Loading our list of providers...</h3>
    // }
    console.log(this.props.match.params)
    return (
      <div>
      <PatientNav />
      <Jumbotron>
          <h1 className="display-2">
            Hello, {this.props.location.state.firstName}
            {' '}
            {this.props.location.state.lastName}
          </h1>
          <p className="lead">Below you can select from our providers and authorize them to modify your immunization records.</p>
        </Jumbotron>
        <div>
          <ListGroup>
          <h2>List of providers:</h2>
            <ListGroupItem>
              <List list={this.props.providerList} patientId={this.props.match.params} />
            </ListGroupItem>
          </ListGroup>
        </div>
      </div>
    );
  }
}
//state as argument?
const mapStateToProps = (state) => {
  return{
    providerList: state.providerList,
    error: state.error,
    fetchingProviders: state.fetchingProviders,
    
    // fetchingProviders
  } 
};


export default connect(
  mapStateToProps,
  { fetchProviderList }
)(GrantAccessView);
