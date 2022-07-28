import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteTip } from "../actions/tip.actions";
import { getMyTips } from "../actions/tip.actions";
import PropTypes from "prop-types";
import TipForm from "./TipForm";

function DisplayMyTips({
  name,
  image,
  deleteTip,
  tipId,
  getMyTips,
  place,
  price,
  description,
  beds,
  baths,
  category,
}) {
  const [isTipFormOpen, setIsTipFormOpen] = useState(false);
  const handleTipFormClose = (e) => {
    setIsTipFormOpen(e);
  };
  return (
    <div className="px-6 h-40 rounded-xl">
      <img
        className="object-cover rounded-xl h-full w-full cursor-pointer hover:shadow-xl"
        src={image}
        alt="hello"
      />
      <div className=" bg py-1 px-2 italic text-grayDark text-sm">{name}</div>
      <div className="flex space-x-2 py-2">
        <button
          onClick={(e) => {
            setIsTipFormOpen(true);
          }}
          className=" border text-sm font-bold   bg-yellow w-full text-grayDark rounded-lg  px-2 py-1 block shadow-xl "
        >
          update
        </button>
        {isTipFormOpen && (
          <TipForm
            method="put"
            closeModal={(e) => handleTipFormClose(e)}
            id={tipId}
            name={name}
            place={place}
            description={description}
            price={price}
            beds={beds}
            baths={baths}
            category={category}
          />
        )}
        <button
          onClick={(e) => {
            deleteTip(tipId);
            getMyTips();
          }}
          className=" text-sm font-bold  bg-primary w-full text-white rounded-lg  px-2 py-1 block shadow-xl"
        >
          delete
        </button>
      </div>
    </div>
  );
}
DisplayMyTips.propTypes = {
  deleteTip: PropTypes.func.isRequired,
  getMyTips: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  deleteTip,
  getMyTips,
};
export default connect(mapStateToProps, mapDispatchToProps)(DisplayMyTips);
