import React from "react";

function DisplayTips({ name, key, image }) {
  return (
    <div className="px-6 h-40 rounded-xl">
      <img
        className="object-cover rounded-xl h-full w-full cursor-pointer hover:shadow-xl"
        src={image}
        alt="hello"
      />
      <div className="absolute bg py-1 px-2 italic text-grayDark text-sm">
        {name}
      </div>
    </div>
  );
}

export default DisplayTips;
