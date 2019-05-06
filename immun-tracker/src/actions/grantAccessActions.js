import axios from 'axios';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~getting list of providers

export const GETPROVIDERLIST_START = 'GETPROVIDERLIST_START'
export const GETPROVIDERLIST_SUCCESS = 'GETPROVIDERLIST_SUCCESS'
export const GETPROVIDERLIST_FAILURE = 'GETPROVIDERLIST_FAILURE'

export const fetchProviderList = () => dispatch => {
    dispatch({ type: GETPROVIDERLIST_START })
    axios
      //res.data.payload??
      .get("https://infinite-castle-77802.herokuapp.com/providers",  {
        headers: { Authorization: localStorage.getItem("token") }})
      
      .then(res => { 
        console.log(res.data); 
        dispatch({ 
          type: GETPROVIDERLIST_SUCCESS, 
          payload: res.data.providers 
        });
      })
      .catch(err => dispatch({ type: GETPROVIDERLIST_FAILURE, payload: err }));
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`giving consent to modify patient information

export const INITIATE_CONSENT= 'INITIATE_CONSENT'
export const CONSENT_ACKNOWLEDGED = 'CONSENT_ACKNOWLEDGED'
export const CONSENT_REJECTED = 'CONSENT_REJECTED'

export const giveProviderConsent = (patientId, providerId) => dispatch => {
    console.log(patientId) 
    console.log(providerId) 
  dispatch({ type: INITIATE_CONSENT })
    axios
      .post(`https://infinite-castle-77802.herokuapp.com/patients/${patientId}/consent`, {providerId:providerId} ,{
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => 
        dispatch({ type: CONSENT_ACKNOWLEDGED, payload: res.data.success.providerId 
         })) 
         
      .catch(err => dispatch({ type: CONSENT_REJECTED, payload: err }));
     
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~`removing authorization from a provider to modify patient information

export const INITIATE_REMOVE_CONSENT= 'INITIATE_REMOVE_CONSENT'
export const CONSENT_REMOVAL_ACKNOWLEDGED = 'CONSENT_REMOVAL_ACKNOWLEDGED'
export const CONSENT_REMOVAL_REJECTED = 'CONSENT_REMOVAL_REJECTED'

export const removeProviderConsent = (providerId) => dispatch => {
    dispatch({ type: INITIATE_REMOVE_CONSENT })
    axios
      //res.data.payload?
      .delete(`https://infinite-castle-77802.herokuapp.com/patients/${providerId}/consent`)
      .then(res => dispatch({ type: CONSENT_REMOVAL_ACKNOWLEDGED, payload: res.data.success.patientId }))
      .catch(err => dispatch({ type: CONSENT_REMOVAL_REJECTED, payload: err }));
}