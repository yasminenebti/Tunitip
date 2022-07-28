import React from "react";

function SearchTip({ image, place, price }) {
  return (
    <div className="p-5 h-full  max-h-96 group">
      <img
        alt=""
        className=" object-cover h-4/5 group-hover:shadow-lg rounded-md"
        src={image}
      />

      <div className="h-1/5 text-grayDark">
        <div>{place}</div>

        <div className="">{price}</div>
      </div>
    </div>
  );
}

export default SearchTip;
