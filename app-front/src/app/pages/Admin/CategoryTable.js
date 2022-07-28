import React from "react";
import { deleteCategory } from "../../actions/category.actions";
import { connect } from "react-redux";

function CategoryTable({ id, name, deleteCategory }) {
  return (
    <>
      <table className="w-full">
        <thead className="bg-light">
          <tr>
            <th className="p-3 font-semibold italic  text-left">CategoryId</th>
            <th className="p-3 font-semibold italic  text-left">
              CategoryName
            </th>
            <th className="p-3 font-semibold italic  text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-yellow">
            <td className="p-3 text-lg font-bold">{id}</td>
            <td className="p-3 text-lg ">{name}</td>
            <td className="p-3 text-lg">
              <button
                onClick={() => deleteCategory(id)}
                className="mt-3 text-lg font-bold bg-primary w-full text-white rounded-lg px-4 py-3 block shadow-xl "
              >
                Delete Category
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
const mapStateToProps = (state) => ({
  categoryState: state.categoryState,
});
const mapDispatchToProps = {
  deleteCategory,
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoryTable);
