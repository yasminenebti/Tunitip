import React from "react";

function DisplayTips({ image, name, place }) {
  return (
    <div>
      <img
        src={image}
        alt=""
        className="object-cover rounded-xl h-full w-full"
      />
      <div className="bg-primary cursor-pointer">{name}</div>
      <div className="absolute  bg-light rounded-full py-1 ">{place}</div>
    </div>
  );
}

export default DisplayTips;
