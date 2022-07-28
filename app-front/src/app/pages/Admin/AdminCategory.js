import React, { useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../actions/category.actions";
import CategoryTable from "./CategoryTable";
import { createCategories } from "../../actions/category.actions";
import { deleteCategory } from "../../actions/category.actions";

function AdminCategory({ categoryState, createCategories }) {
  const [catData, setCatData] = useState({
    name: "",
  });

  const onSubmitData = async (e) => {
    e.preventDefault();
    await createCategories(catData);
  };
  const handleChange = (e) => {
    setCatData({
      ...catData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div>AdminCategory</div>
      <div className="p-7 flex items-center justify-center gap-24">
        <form onSubmit={(e) => onSubmitData(e)} className="mt-8">
          <label className="text-md text-grayDark py-5" htmlFor="email">
            Category Name
          </label>
          <input
            onChange={(e) => handleChange(e)}
            className="text-md block px-3 py-2  rounded-lg 
            bg-yellow border border-silver  shadow-md focus:bg-white focus:border-light focus:outline-none "
            type="text"
            name="name"
            value={catData.name}
          />

          <label className="text-md text-grayDark py-5" htmlFor="email">
            Category Id
          </label>

          <button
            type="submit"
            className="mt-3 text-lg font-bold bg-primary w-full text-white rounded-lg px-4 py-3 block shadow-xl "
          >
            Add Category
          </button>
        </form>

        <div className="bg-white rounded-md hover:bg-primary">
          Total Number of Categories :
          <div className=" px-24 font-bold">
            {categoryState.categories?.length}
          </div>
        </div>
      </div>

      <div>
        {categoryState.categories?.map((cat) => {
          return <CategoryTable key={cat._id} id={cat._id} name={cat.name} />;
        })}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  categoryState: state.categoryState,
});
const mapDispatchToProps = {
  getCategories,
  createCategories,
  deleteCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminCategory);
