import axios from "axios";

// Globals
const host = "https://infinite-castle-77802.herokuapp.com";
const axiosConfig = {
    // Sets token in the header. Pass this as the third
    // argument in axios calls to authorize
    headers: {
        "Authorization": localStorage.getItem("token")
    }
};

export const postPatient = ({
  firstName, // string
  lastName, // string
  birthDate // Date object
}) => {
  const newPatient = { firstName, lastName, birthDate };

  return axios.post(`${host}/patients`, newPatient, axiosConfig);
};
