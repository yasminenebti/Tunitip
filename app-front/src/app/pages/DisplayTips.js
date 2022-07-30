import React from "react";
import { Link } from "react-router-dom";

function DisplayTips({ name, image, id, place, price }) {
  return (
    <Link
      to={`/tips/${id}`}
      className="px-6 rounded-xl py-4 cursor-pointer hover:scale-105  transition duration-300 ease-out"
    >
      <img
        className="object-cover rounded-xl h-60 w-60  hover:shadow-xl"
        src={image}
        alt="hello"
        layout="fill"
      />
      <div className="  py-1 px-2 font-semibold text-black text-sm">{name}</div>
      <div className="   px-2 italic text-grayDark text-sm">{place}</div>
      <div className="flex gap-1 px-2">
        <div className="text-black text-sm font-semibold">{price} TND</div>
        <div className="text-grayDark text-sm">night</div>
      </div>
    </Link>
  );
}

export default DisplayTips;
