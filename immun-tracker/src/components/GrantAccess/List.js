import React from "react";

import ProviderCard from "./ProviderCard";

const List = props => {
  return (
    <div>
        {console.log(props.patientId)}
      {props.list.map(provider => {
        return <ProviderCard key={provider.id} 
        provider={provider} patientId={props.patientId}/> ;
      })}
    </div>
  );
};

export default List;