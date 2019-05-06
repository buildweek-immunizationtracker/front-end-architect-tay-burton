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
    console.log(props.patientId)
  return (
    <Card>
      <CardBody>
        <CardTitle>
          <h4>Provider: {props.provider.name} </h4>
        </CardTitle>
        <CardSubtitle>
          Provider since: {(props.provider.createdAt)}
        </CardSubtitle>
        <Button color ="primary">
          <AuthorizeButton providerId={props.provider.id}
          patientId={props.patientId}
          />
        </Button>
      </CardBody>
    </Card>
  )
};

export default ProviderCard;