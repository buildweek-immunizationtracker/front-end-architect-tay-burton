import axios from "axios";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_RESOLVED = "LOGIN_RESOLVED";
export const LOGOUT = 'LOGOUT';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
  
    return axios
      .post("https://infinite-castle-77802.herokuapp.com/login", creds)
      
      .then(res => {
        localStorage.setItem("token", `Bearer ${res.data.token}`)
        dispatch({ type: LOGIN_RESOLVED });
      })
      .catch(err => {
        console.log("login err: ", err);
        if (err.response.status === 403) {
          localStorage.removeItem("token");
        }
        dispatch({ type: LOGIN_RESOLVED });
      });
  };



export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get("https://infinite-castle-77802.herokuapp.com/user", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
       console.log(res.data.user);
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: res.data.user
      });
    })
    .catch(err => {
      console.log(err.response);
      if (err.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
    });
};
 
export const FETCHING_PATIENT = "FETCHING_PATIENT";
export const FETCHING_PATIENT_SUCCESS = "FETCHING_PATIENT_SUCCESS";
export const FETCHING_PATIENT_FAILURE = "FETCHING_PATIENT_FAILURE";


export const getPatient = () => dispatch => {
    dispatch({ type: FETCHING_PATIENT });
    axios
      .get(`https://infinite-castle-77802.herokuapp.com/patients`, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then((res) => {
        console.log(res.data)
        dispatch({
          type: FETCHING_PATIENT_SUCCESS,
          payload: res.data.patients
        });
      })
      .catch(err => {
        dispatch({
          type: FETCHING_PATIENT_FAILURE,
          payload: err
        });
      });
  };


  export const FETCHING_IMMUNIZATION = "FETCHING_IMMUNIZATION";
  export const FETCHING_IMMUNIZATION_SUCCESS = "FETCHING_IMMUNIZATION_SUCCESS";
  export const FETCHING_IMMUNIZATION_FAILURE = "FETCHING_IMMUNIZATION_FAILURE";

  export const getImmunization = id => dispatch => {
    dispatch({ type: FETCHING_IMMUNIZATION });
    axios
      .get(`https://infinite-castle-77802.herokuapp.com/patients/${id}/immunizations`, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then((res) => {
        console.log(res.data)
        dispatch({
          type: FETCHING_IMMUNIZATION_SUCCESS,
          payload: res.data.history
        });
      })
      .catch(err => {
        dispatch({
          type: FETCHING_IMMUNIZATION_FAILURE,
          payload: err
        });
      });
  };

