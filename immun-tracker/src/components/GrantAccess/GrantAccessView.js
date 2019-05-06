import React from 'react'


import { connect } from 'react-redux'
import { fetchProviderList } from '../../actions/grantAccessActions'

import List from './List';

import {
  Jumbotron,
} from "reactstrap";


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
      <Jumbotron>
        Hello, {this.props.location.state.firstName}{' '}
        {this.props.location.state.lastName}
      </Jumbotron>
       List of providers:
        <List list={this.props.providerList} patientId={this.props.match.params} />
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
