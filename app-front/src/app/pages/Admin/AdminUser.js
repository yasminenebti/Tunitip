import React, { useEffect } from "react";
import { connect } from "react-redux";
import { allUsers } from "../../actions/auth.actions";

function AdminUser({ authState, allUsers }) {
  useEffect(() => {
    allUsers();
  }, [allUsers]);
  return (
    <>
      <div>AdminUser</div>
      <div className=" px-24 font-bold"></div>
      <div>{authState.users}</div>
    </>
  );
}

const mapStateToProps = (state) => ({
  authState: state.authState,
});

const mapDispatchToProps = {
  allUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminUser);
