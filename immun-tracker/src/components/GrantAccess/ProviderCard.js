import React from "react";

const ProviderCard = props => {
  return (
    <h4>
    <p>Provider: {props.provider.name} </p>
    <p>Provider since: {props.provider.createdAt} </p>
    
    </h4>
  )
};

export default ProviderCard;