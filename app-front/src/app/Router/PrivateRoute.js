import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Navigate } from "react-router";
import { useLocation } from "react-router-dom";

const PrivateRoute = ({ children, authState }) => {
  const { pathname } = useLocation();
  console.log({ pathname });

  return authState.isAuthenticated ? (
    authState.user.isHost ? (
      children
    ) : (
      <Navigate to="/" />
    )
  ) : (
    <Navigate to="/" />
  );
};
PrivateRoute.propTypes = {
  authState: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  authState: state.authState,
});

export default connect(mapStateToProps)(PrivateRoute);
