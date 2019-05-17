import {
    LOGIN_START,
    LOGIN_RESOLVED,
    LOGIN_ERROR,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
  
    FETCHING_PATIENT,
    FETCHING_PATIENT_SUCCESS,
    FETCHING_PATIENT_FAILURE,

    FETCHING_IMMUNIZATION,
    FETCHING_IMMUNIZATION_SUCCESS,
    FETCHING_IMMUNIZATION_FAILURE,

    POST_IMMUNIZATION,
    POST_IMMUNIZATION_SUCCESS,
    POST_IMMUNIZATION_FAILURE
  } from "../actions/actions";

// Registration Actions
import {
  ACCOUNTCREATE_START,
  ACCOUNTCREATE_SUCCESS,
  ACCOUNTCREATE_FAILURE,

  PATIENTACCOUNTCREATE_START,
  PATIENTACCOUNTCREATE_SUCCESS,
  PATIENTACCOUNTCREATE_FAILURE
} from "../actions/registrationActions";

// Granting Access to Providers
import{
  GETPROVIDERLIST_START,
  GETPROVIDERLIST_SUCCESS,
  GETPROVIDERLIST_FAILURE,
  INITIATE_CONSENT,
  CONSENT_ACKNOWLEDGED,
  CONSENT_REJECTED,
  INITIATE_REMOVE_CONSENT,
  CONSENT_REMOVAL_ACKNOWLEDGED,
  CONSENT_REMOVAL_REJECTED
} from '../actions/grantAccessActions'

const initialState = {
  // Common
  error: "",
  // From login
  isloggingIn: false,
  fetchingData: false,
  // From registration
  userListMedical: [],
  addingMedicalUser: false,
  userListPatient: [],
  addingPatient: false,

  // from granting access
  providerList:[],
  fetchingProviders: false,
  authorizedProviderList:[],
  givingAuthorization: false,
  removingAuthorization: false,
  
  //user data
  user:[],
  
  //patient 
  patients:[],
  fetchingPatientData: false,
  //FETCHING IMMUNIZATION
  immunization:[],
  fetchingImmunization:false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    /* --- Login Actions --- */
        case LOGIN_START: {
            return {
              ...state,
              isLoggingIn: true
            };
          }
          case LOGIN_RESOLVED: {
            return {
              ...state,
              isLoggingIn: false
            };
          }
          case LOGIN_ERROR: {
            return {
              ...state,
               error: action.payload
            }
          }
    /* --- Registration Actions --- */
    case ACCOUNTCREATE_START:
      return {
        ...state,
        addingMedicalUser: true
      };
    case ACCOUNTCREATE_SUCCESS:
      return {
        ...state,
        addingMedicalUser: false,
        userListMedical: [...action.payload]
      };
    case ACCOUNTCREATE_FAILURE:
      return {
        ...state,
        addingMedicalUser: false,
        error: action.payload
      };
//~~~~~~~~~~~~~~~~PATIENT ONBOARDING~~~~~~~~~~~~~~~~~~~`
      case PATIENTACCOUNTCREATE_START:
      return {
        ...state,
        addingPatient: true
      };
    case PATIENTACCOUNTCREATE_SUCCESS:
      return {
        ...state,
        addingPatient: false,
        userListPatient: [...action.payload]
      };
    case PATIENTACCOUNTCREATE_FAILURE:
      return {
        ...state,
        addingPatient: false,
        error: action.payload
      };

//~~~~~~~~~~~~~~~~Granting Access ~~~~~~~~~~~~~~~~~~~~~~~~~~
    //getting list of providers to give authorizaton to
    
    case GETPROVIDERLIST_START:
      return {
        ...state,
        fetchingProviders: true
      };
    case GETPROVIDERLIST_SUCCESS:
      return {
        ...state,
        fetchingProviders: false,
        providerList: [...action.payload] 
        //[...this.providerList, ...action.payload] 
        //why this no work doe
      };
    case GETPROVIDERLIST_FAILURE:
      return {
        ...state,
        fetchingProviders: false,
        error: action.payload
      };
    
    //giving consent tp modify info
      
    case INITIATE_CONSENT:
      return {
        ...state,
        givingAuthorization: true
      };
    case CONSENT_ACKNOWLEDGED:
      return {
        ...state,
        givingAuthorization: false,
        authorizedProviderList: [action.payload]
      };
    case CONSENT_REJECTED:
      return {
        ...state,
        givingAuthorization: false,
        error: action.payload
      };
    
      //removing consent tp modify info
    
    case INITIATE_REMOVE_CONSENT:
      return {
      ...state,
      removingAuthorization: true
    };
    case CONSENT_REMOVAL_ACKNOWLEDGED:
      return {
      ...state,
      removingAuthorization: false,
      authorizedProviderList: [ ...action.payload]
      //if authorizedproviderlist includes 
      //action.payload(a provider id) then 
      //remove from array???????????
    };
    case CONSENT_REMOVAL_REJECTED:
      return {
      ...state,
      removingAuthorization: false,
      error: action.payload
    };

      case FETCH_DATA_START:
      return {
        ...state,
        error: "",
        fetchingData: true
      };
      case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: "",
        fetchingData: false,
        user: action.payload
      }

  //Patient Data Fetch 
   case FETCHING_PATIENT: 
      return {
        ...state,
        error: "",
        fetchingPatientData: true
      };
      case FETCHING_PATIENT_SUCCESS:
        return {
          ...state,
        error: "",
        fetchingPatientData: false,
        patients: action.payload
        };
        case FETCHING_PATIENT_FAILURE:
        return {
          ...state,
          fetchingPatientData: false,
          error: action.payload
        };
        //FETCHING IMMUNIZATION
        case FETCHING_IMMUNIZATION: 
      return {
        ...state,
        error: "",
        fetchingImmunization: true
      };
      case FETCHING_IMMUNIZATION_SUCCESS:
        return {
          ...state,
        error: "",
        fetchingImmunization: false,
        immunization: action.payload
        };
        case FETCHING_IMMUNIZATION_FAILURE:
        return {
          ...state,
          fetchingImmunization: false,
          error: action.payload
        };
        // Post Immuniztion 
        case POST_IMMUNIZATION:
        return {
          ...state,
          error: "",
          fetchingImmunization: false,
        };
        case POST_IMMUNIZATION_SUCCESS:
        return {
          ...state,
        error: "",
        fetchingImmunization: false,
        immunization: action.payload
        };
        case POST_IMMUNIZATION_FAILURE:
        return {
          ...state,
          fetchingImmunization: false,
          error: action.payload
        };
    default:
      return state;
  }

};

export default userReducer;
