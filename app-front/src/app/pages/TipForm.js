import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import { useClickAway } from "react-use";
import PropTypes from "prop-types";
import { createTip } from "../actions/tip.actions";
import { updateTip } from "../actions/tip.actions";
import { getMyTips } from "../actions/tip.actions";
import { getTips } from "../actions/tip.actions";

import { getCategories } from "../actions/category.actions";

function TipForm({
  closeModal,
  createTip,
  getCategories,
  categoryState,
  updateTip,
  method,
  id,
  name,
  place,
  price,
  rooms,
  description,
  beds,
  baths,
  category,
  getMyTips,
  getTips,
}) {
  useEffect(() => {
    getCategories();
    getTips();
    getMyTips();
  }, [getCategories, getTips, getMyTips]);
  const [tipData, setTipData] = useState({
    name: name ? name : "",
    place: place ? place : "",
    description: description ? description : "",
    image: "",
    price: price ? price : "",
    beds: beds ? beds : "",
    baths: baths ? baths : "",
    category: category ? category : "",
    rooms: rooms ? rooms : "",
  });
  const [tipDocument, setTipDocument] = useState(null);
  const ref = useRef(null);
  useClickAway(ref, () => {
    closeModal(false);
  });
  const onSubmitData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", tipData.name);
    formData.append("place", tipData.place);
    formData.append("description", tipData.description);
    formData.append("image", tipDocument);
    formData.append("price", tipData.price);
    formData.append("beds", tipData.beds);
    formData.append("baths", tipData.baths);
    formData.append("rooms", tipData.rooms);
    formData.append("category", tipData.category);
    if (method === "post") {
      await createTip(formData);
      await getTips();
    } else {
      console.log(formData);
      await updateTip(formData, id);
      await getMyTips();
    }
    closeModal(false);
  };
  const handleFileChange = (e) => {
    setTipDocument(e.target.files[0]);
    setTipData({ ...tipData, [e.target.name]: e.target.value });
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
        <div className=" sm:mx-auto sm:w-full sm:max-w-md">
          <div ref={ref} className="bg-yellow py-4 shadow rounded-lg sm:px-5">
            <button
              onClick={() => closeModal(false)}
              className="flex justify-end rounded-full border-light  font-semibold hover:shadow-md"
            >
              X
            </button>
            <form onSubmit={(e) => onSubmitData(e)} className="mb-0 ">
              <div className="mx-auto p-3">
                <div className="flex space-x-2 pb-3 justify-center items-center  ">
                  <label
                    className="block font-medium text-md text-grayDark py-2 "
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    onChange={(e) => handleChange(e)}
                    className="w-full border border-silver px-3 py-2 rounded-lg shadow-md focus:outline-none  focus:ring-2 focus:ring-blue"
                    type="text"
                    name="name"
                    required
                    value={tipData.name}
                  />
                  <label
                    className="block font-medium text-md text-grayDark py-2  "
                    htmlFor="place"
                  >
                    place
                  </label>
                  <input
                    onChange={(e) => handleChange(e)}
                    className="w-full border border-silver px-3 py-2 rounded-lg shadow-md focus:outline-none  focus:ring-2 focus:ring-blue "
                    type="text"
                    name="place"
                    required
                    value={tipData.place}
                  />
                </div>
                <label
                  className="block font-medium text-md text-grayDark py-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  onChange={(e) => handleChange(e)}
                  className="w-full border border-silver px-3 py-2 rounded-lg shadow-md focus:outline-none  focus:ring-2 focus:ring-blue "
                  type="text"
                  name="description"
                  required
                  value={tipData.description}
                />
                <div className="pt-4 pb-2">
                  <label
                    className="block font-medium text-md text-grayDark py-2 "
                    htmlFor="image"
                  >
                    Image
                  </label>
                </div>
                <input
                  onChange={(e) => handleFileChange(e)}
                  className="file:bg-yellow file:border file:border-primary file:px-4 file:py-1  file:rounded-lg file:cursor-pointer "
                  type="file"
                  name="image"
                  value={tipData.image}
                />

                <div className="flex pt-3 gap-3">
                  <label
                    className="block font-medium text-md text-grayDark py-2"
                    htmlFor="price"
                  >
                    Price
                  </label>
                  <input
                    onChange={(e) => handleChange(e)}
                    className="text-md  w-24  rounded-lg  bg-yellow border border-silver  shadow-md focus:bg-white focus:border-light focus:outline-none "
                    type="Number"
                    min={0}
                    name="price"
                    required
                    value={tipData.price}
                  />
                  <label
                    className="block font-medium text-md text-grayDark py-2"
                    htmlFor="rooms"
                  >
                    Rooms
                  </label>
                  <input
                    onChange={(e) => handleChange(e)}
                    className="text-md  w-24   rounded-lg  bg-yellow border border-silver  shadow-md focus:bg-white focus:border-light focus:outline-none "
                    type="Number"
                    min={0}
                    name="rooms"
                    required
                    value={tipData.rooms}
                  />
                </div>
                <div className="flex pt-3 gap-3 ">
                  <label
                    className="block font-medium text-md text-grayDark py-2 "
                    htmlFor="beds"
                  >
                    Beds
                  </label>
                  <input
                    onChange={(e) => handleChange(e)}
                    className="text-md  w-24    rounded-lg  bg-yellow border border-silver  shadow-md focus:bg-white focus:border-light focus:outline-none "
                    type="Number"
                    min={0}
                    name="beds"
                    required
                    value={tipData.beds}
                  />
                  <label
                    className="block font-medium text-md text-grayDark py-2 pr-3"
                    htmlFor="baths"
                  >
                    Baths
                  </label>
                  <input
                    onChange={(e) => handleChange(e)}
                    className="text-md  w-24     rounded-lg bg-yellow border border-silver  shadow-md focus:bg-white focus:border-light focus:outline-none "
                    type="Number"
                    min={0}
                    name="baths"
                    required
                    value={tipData.baths}
                  />
                </div>

                <div className="pt-4">
                  <label
                    className="block font-medium text-md text-grayDark py-2 "
                    htmlFor="category"
                  >
                    Category
                  </label>
                  <select
                    name="category"
                    value={tipData.category}
                    onChange={(e) => handleChange(e)}
                    className=" w-full border border-none px-4 py-2 rounded-lg shadow-md focus:outline-none  focus:ring-2 focus:ring-blue "
                  >
                    <option value={""}>--Select Category </option>

                    {categoryState.categories.map((cat) => {
                      return (
                        <option key={cat._id} value={cat._id}>
                          {cat.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {method === "post" ? (
                  <button
                    type="submit"
                    className="mt-5 text-lg font-bold bg-primary w-full text-white rounded-lg py-3  shadow-xl "
                  >
                    Create
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="mt-5 text-lg font-bold bg-primary w-full text-white rounded-lg py-3  shadow-xl"
                  >
                    Update
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

TipForm.propTypes = {
  categoryState: PropTypes.object.isRequired,
  createTip: PropTypes.func.isRequired,
  updateTip: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  getMyTips: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  categoryState: state.categoryState,
});

const mapDispatchToProps = {
  createTip,
  getCategories,
  updateTip,
  getMyTips,
  getTips,
};
export default connect(mapStateToProps, mapDispatchToProps)(TipForm);
