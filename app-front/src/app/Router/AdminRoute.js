import React from "react";
import { connect } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function AdminRoute({ children, authState }) {
  const { pathname } = useLocation();
  console.log({ pathname });

  return authState.isAuthenticated ? (
    authState.user.isAdmin ? (
      children
    ) : (
      <Navigate to="/" />
    )
  ) : (
    <Navigate to="/" />
  );
}
const mapStateToProps = (state) => ({
  authState: state.authState,
});

export default connect(mapStateToProps)(AdminRoute);
