import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import { useClickAway } from "react-use";
import PropTypes from "prop-types";
import { createTip } from "../actions/tip.actions";
import { updateTip } from "../actions/tip.actions";
import { getMyTips } from "../actions/tip.actions";

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
  description,
  beds,
  baths,
  category,
}) {
  useEffect(() => {
    getCategories();
  }, [getCategories]);
  const [tipData, setTipData] = useState({
    name: name ? name : "",
    place: place ? place : "",
    description: description ? description : "",
    image: "",
    price: price ? price : "",
    beds: beds ? beds : "",
    baths: baths ? baths : "",
    category: category ? category : "",
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
    formData.append("category", tipData.category);
    if (method === "post") {
      await createTip(formData);
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
        <div ref={ref} className="w-1/3 h-2/3 bg-yellow rounded-xl ">
          <button
            onClick={() => closeModal(false)}
            className="z-20 flex justify-end py-2 px-4 font-semibold hover:shadow-md"
          >
            X
          </button>
          <form onSubmit={(e) => onSubmitData(e)} className="mt-8">
            <div className="mx-auto p-5">
              <label className="text-md text-grayDark py-5" htmlFor="name">
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
              <label className="text-md text-grayDark py-5" htmlFor="place">
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
              <label
                className="text-md text-grayDark py-5"
                htmlFor="description"
              >
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
              <label className="text-md text-grayDark py-5" htmlFor="image">
                Image
              </label>
              <input
                onChange={(e) => handleFileChange(e)}
                className="text-md block px-3 py-2  rounded-lg w-full bg-yellow border border-silver  shadow-md focus:bg-white focus:border-light focus:outline-none "
                type="file"
                name="image"
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
                <label className="text-md text-grayDark py-5" htmlFor="beds">
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
                <label className="text-md text-grayDark py-5" htmlFor="baths">
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
                <label
                  className="text-md text-grayDark py-5"
                  htmlFor="category"
                >
                  Category
                </label>
                <select
                  name="category"
                  value={tipData.category}
                  onChange={(e) => handleChange(e)}
                  className="text-md  w-full    rounded-lg bg-yellow border border-silver  shadow-md focus:bg-white focus:border-light focus:outline-none "
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
            </div>

            {method === "post" ? (
              <button
                type="submit"
                className="mt-3 text-lg font-bold bg-primary w-full text-white rounded-lg px-4 py-3 block shadow-xl "
              >
                Create
              </button>
            ) : (
              <button
                type="submit"
                className="mt-3 text-lg font-bold bg-primary w-full text-white rounded-lg px-4 py-3 block shadow-xl"
              >
                Update
              </button>
            )}
          </form>
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
};
export default connect(mapStateToProps, mapDispatchToProps)(TipForm);
