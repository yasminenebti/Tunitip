import React from "react";
import { connect } from "react-redux";

function AdminUser({ authState }) {
  return (
    <>
      <div>AdminUser</div>
      <div className=" px-24 font-bold">This is {authState?.count}</div>
    </>
  );
}

const mapStateToProps = (state) => ({
  authState: state.authState,
});

export default connect(mapStateToProps)(AdminUser);
