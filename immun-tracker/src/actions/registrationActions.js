import axios from 'axios';

export const ACCOUNTCREATE_START = 'ACCOUNTCREATE_START'
export const ACCOUNTCREATE_SUCCESS = 'ACCOUNTCREATE_SUCCESS'
export const ACCOUNTCREATE_FAILURE = 'ACCOUNTCREATE_FAILURE'

export const PATIENTACCOUNTCREATE_START = 'PATIENTACCOUNTCREATE_START'
export const PATIENTACCOUNTCREATE_SUCCESS = 'PATIENTACCOUNTCREATE_SUCCESS'
export const PATIENTACCOUNTCREATE_FAILURE = 'PATIENTACCOUNTCREATE_FAILURE'

export const createProviderAccount = (credentials) => dispatch => {
    dispatch({ type: ACCOUNTCREATE_START })
    axios
      //update with correct url
      .post('https://infinite-castle-77802.herokuapp.com/register', credentials)
      .then(res => dispatch({ type: ACCOUNTCREATE_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: ACCOUNTCREATE_FAILURE, payload: err }));
}

export const createPatientAccount = (credentials) => dispatch => {
  dispatch({ type: PATIENTACCOUNTCREATE_START })
  axios
    // update with correct url
    .post('https://infinite-castle-77802.herokuapp.com/register', credentials)
    .then(res => dispatch({ type: PATIENTACCOUNTCREATE_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: PATIENTACCOUNTCREATE_FAILURE, payload: err }));
}