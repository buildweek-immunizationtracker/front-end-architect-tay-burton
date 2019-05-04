import React from "react";
import AuthorizeButton from "./AuthorizeButton";

const ProviderCard = props => {
    // {let date = props.provider.createdAt}
  return (
    <div>
      <h4>
    <p>Provider: {props.provider.name} </p>
  {/* <p>Provider since: {(props.provider.createdAt)} </p> */}
    </h4>
    <AuthorizeButton providerId={props.provider.id}/>
    </div>
  )
};

export default ProviderCard;