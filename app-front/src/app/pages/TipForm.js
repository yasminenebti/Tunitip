import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { useClickAway } from "react-use";
import PropTypes from "prop-types";
import { createTip } from "../actions/tip.actions";

import { getCategories } from "../actions/category.actions";

function TipForm({ closeModal, createTip, getCategories }) {
  const [tipData, setTipData] = useState({
    name: "",
    place: "",
    description: "",
    image: "",
    price: "",
    beds: "",
    baths: "",
    category: "",
  });
  const ref = useRef(null);
  useClickAway(ref, () => {
    closeModal(false);
  });
  const onSubmitData = async (e) => {
    e.preventDefault();
    closeModal(false);
  };
  const handleChange = (e) => {
    setTipData({
      ...tipData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="fixed z-10 top-0 left-0 w-full h-full flex items-center justify-center bg-grayDark bg-opacity-60 overflow-y-auto ">
        <div ref={ref} className="w-1/3 h-2/3 bg-yellow rounded-xl ">
          <button
            onClick={() => closeModal(false)}
            className="z-20 flex justify-end py-2 px-4 font-semibold hover:shadow-md"
          >
            X
          </button>
          <form onSubmit={(e) => onSubmitData(e)} className="mt-8">
            <div className="mx-auto p-5">
              <label className="text-md text-grayDark py-5" htmlFor="email">
                Name
              </label>
              <input
                onChange={(e) => handleChange(e)}
                className="text-md block px-3 py-2  rounded-lg w-full bg-yellow border border-silver  shadow-md focus:bg-white focus:border-light focus:outline-none "
                type="text"
                name="name"
                required
                value={tipData.name}
              />
              <label className="text-md text-grayDark py-5" htmlFor="email">
                place
              </label>
              <input
                onChange={(e) => handleChange(e)}
                className="text-md block px-3 py-2  rounded-lg w-full bg-yellow border border-silver  shadow-md focus:bg-white focus:border-light focus:outline-none "
                type="text"
                name="place"
                required
                value={tipData.place}
              />
              <label className="text-md text-grayDark py-5" htmlFor="email">
                description
              </label>
              <textarea
                onChange={(e) => handleChange(e)}
                className="text-md block px-3 py-2  rounded-lg w-full bg-yellow border border-silver  shadow-md focus:bg-white focus:border-light focus:outline-none "
                type="text"
                name="description"
                required
                value={tipData.description}
              />
              <label className="text-md text-grayDark py-5" htmlFor="email">
                Image
              </label>
              <input
                onChange={(e) => handleChange(e)}
                className="text-md block px-3 py-2  rounded-lg w-full bg-yellow border border-silver  shadow-md focus:bg-white focus:border-light focus:outline-none "
                type="text"
                name="image"
                required
                value={tipData.image}
              />
              <div className="flex py-3">
                <label className="text-md text-grayDark py-5" htmlFor="price">
                  Price
                </label>
                <input
                  onChange={(e) => handleChange(e)}
                  className="text-md w-full   rounded-lg  bg-yellow border border-silver  shadow-md focus:bg-white focus:border-light focus:outline-none "
                  type="Number"
                  min={0}
                  name="price"
                  required
                  value={tipData.price}
                />
                <label className="text-md text-grayDark py-5" htmlFor="price">
                  beds
                </label>
                <input
                  onChange={(e) => handleChange(e)}
                  className="text-md w-full    rounded-lg  bg-yellow border border-silver  shadow-md focus:bg-white focus:border-light focus:outline-none "
                  type="Number"
                  min={0}
                  name="beds"
                  required
                  value={tipData.beds}
                />
                <label className="text-md text-grayDark py-5" htmlFor="price">
                  baths
                </label>
                <input
                  onChange={(e) => handleChange(e)}
                  className="text-md  w-full    rounded-lg bg-yellow border border-silver  shadow-md focus:bg-white focus:border-light focus:outline-none "
                  type="Number"
                  min={0}
                  name="baths"
                  required
                  value={tipData.baths}
                />
              </div>
              <div>
                <select
                  name="category"
                  value={tipData.category}
                  onChange={(e) => handleChange(e)}
                >
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

TipForm.propTypes = {
  categoryState: PropTypes.object.isRequired,
  createTip: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  categoryState: state.categoryState,
});

const mapDispatchToProps = {
  createTip,
  getCategories,
};
export default connect(mapStateToProps, mapDispatchToProps)(TipForm);
