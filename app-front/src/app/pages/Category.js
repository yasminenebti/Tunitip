import React, { useEffect } from "react";
import { getCategories } from "../actions/category.actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Category({ categoryState, getCategories }) {
  useEffect(() => {
    getCategories();
  }, [getCategories]);
  return (
    <div>
      {categoryState.categories.length > 0 ? (
        <div className="flex justify-center items-center space-x-4 bg-yellow py-2 ">
          {categoryState.categories.map((cat) => {
            return (
              <Link
                to={`/search?category=${cat.name}`}
                key={cat.id}
                className="cursor-pointer border-2 rounded-xl px-4 py-1 border-none hover:shadow-md"
              >
                {cat.name}
              </Link>
            );
          })}
        </div>
      ) : (
        "hello"
      )}
    </div>
  );
}
Category.propTypes = {
  categoryState: PropTypes.object.isRequired,
  getCategories: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  categoryState: state.categoryState,
});

const mapDispatchToProps = {
  getCategories,
};
export default connect(mapStateToProps, mapDispatchToProps)(Category);
