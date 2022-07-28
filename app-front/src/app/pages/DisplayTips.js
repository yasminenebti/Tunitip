import React from "react";
import { Link } from "react-router-dom";

function DisplayTips({ name, image, id }) {
  return (
    <Link to={`/tips/${id}`} className="px-6 h-40 rounded-xl">
      <img
        className="object-cover rounded-xl h-full w-full cursor-pointer hover:shadow-xl"
        src={image}
        alt="hello"
      />
      <div className=" bg py-1 px-2 italic text-grayDark text-sm">{name}</div>
    </Link>
  );
}

export default DisplayTips;
