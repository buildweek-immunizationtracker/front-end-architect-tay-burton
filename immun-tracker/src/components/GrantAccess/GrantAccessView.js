import React from 'react'


import { connect } from 'react-redux'
import { fetchProviderList } from '../../actions/grantAccessActions'

import List from './List';


class GrantAccessView extends React.Component {
    constructor() {
        super();
    }

  componentDidMount() {
    this.props.fetchProviderList();
  }

  render() {
    // if (this.props.fetchingProviders) {
    //   <h3>Loading our list of providers...</h3>
    // }
    return (
      <div>
        <List list={this.props.list} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    providerList: state.providerList,
    error: state.error,
    fetchingProviders: state.fetchingProviders,

  } 
};


export default connect(
  mapStateToProps,
  { fetchProviderList }
)(GrantAccessView);
