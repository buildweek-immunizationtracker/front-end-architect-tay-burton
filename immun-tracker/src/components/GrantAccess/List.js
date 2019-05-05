import React from "react";

import ProviderCard from "./ProviderCard";

const List = props => {
  return (
    <div>
        {/* {console.log(props.list)} */}
      {props.list.map(provider => {
        return <ProviderCard key={provider.id} 
        provider={provider} />;
      })}
    </div>
  );
};

export default List;