import React from "react";
import AuthorizeButton from "./AuthorizeButton";

import {
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const ProviderCard = props => {
    // {let date = props.provider.createdAt}
  return (
    <Card>
      <h4>
    <p>Provider: {props.provider.name} </p>
  <p>Provider since: {(props.provider.createdAt)} </p>
    </h4>
    
    <Button color ="primary">
      <AuthorizeButton providerId={props.provider.id}
      id={props.patientId} firstName={props.firstName}/>
    </Button>
    </Card>
  )
};

export default ProviderCard;