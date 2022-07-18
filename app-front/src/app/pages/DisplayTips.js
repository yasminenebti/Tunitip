import React from "react";

function DisplayTips({ name, description }) {
  return (
    <>
      <div className="bg-primary">hello {name}</div>
      <div className="bg-light">{description}</div>
    </>
  );
}

export default DisplayTips;
