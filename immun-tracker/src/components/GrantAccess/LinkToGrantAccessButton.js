import React from 'react'
import { Link } from 'react-router-dom'
import {
    Button
  } from "reactstrap";

function LinktoGrantAccessButton(props){
    console.log(props.firstName)
    console.log(props.lastName)
    console.log(props.patientId)
    return(
        <Link to={{
            pathname:`/grant-access/${props.patientId}`,
            state:{
                firstName: props.firstName,
                lastName: props.lastName,
                patientId: props.patientId
            }
        }}>
        <Button color='primary'>
            Grant Access to Immunization Records
        </Button>
        </Link>
    )
}



export default LinktoGrantAccessButton