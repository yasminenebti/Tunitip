import React, { useState } from "react";
import logo from "../images/Tunilogo.png";
import { SearchIcon } from "@heroicons/react/solid";
import { UserIcon } from "@heroicons/react/solid";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import SignIn from "../auth/SignIn";
import Register from "../auth/Register";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export function Dropdown() {
  return (
    <div className="absolute top-full min-w-full w-max bg-white shadow-md mt-1 rounded">
      <div className="py-1 px-3">
        <div className="px-4 py1 cursor-pointer">Account </div>
        <div className="px-4 py1 cursor-pointer">about</div>
        <div className="px-4 py1 cursor-pointer">tools</div>
      </div>
    </div>
  );
}

function Header({ authState }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleSignInClose = (e) => {
    setIsOpen(e);
  };
  const handleRegisterClose = (e) => {
    setIsRegisterOpen(e);
  };

  return (
    <>
      <header className="sticky  bg-yellow grid grid-cols-3  py-1 pt-3  md:px-20 ">
        <Link to="/">
          <img alt="" src={logo} layout="fill" width="50px" className="pt-2" />
        </Link>

        <div className=" flex flex-grow items-center rounded-full border-2 border-yellow shadow-md ">
          <input
            className="outline-none flex-grow pl-5 bg-transparent text-sm text-text italic"
            type="text"
            placeholder="search here"
          />
          <SearchIcon className="hidden h-9 bg-primary rounded-full text-yellow  cursor-pointer p-2 md:inline-flex md:mx-2 active:scale-90 transition duration-200" />
        </div>
        <div className="flex items-center justify-end space-x-1">
          {isOpen && <SignIn closeModal={(e) => handleSignInClose(e)} />}
          {!authState.isAuthenticated ? (
            <>
              <button
                onClick={(e) => {
                  setIsOpen(true);
                }}
                className="flex items-center  font-semibold space-x-1 justify-end border-2 p-2 border-primary shadow-md hover:shadow-xl rounded-full cursor-pointer text-primary active:scale-90 transition duration-200"
              >
                Login
              </button>
              <button
                onClick={(e) => {
                  setIsRegisterOpen(true);
                }}
                className="flex items-center font-semibold  space-x-1 justify-end border-2 p-2 border-primary shadow-md hover:shadow-xl rounded-full cursor-pointer text-yellow bg-primary active:scale-90 transition duration-200"
              >
                Register
              </button>
            </>
          ) : (
            <div className="flex items-center justify-center">
              <div className=" italic px-4">
                Welcome, {authState.user.firstName}
              </div>
              <button className="flex px-3 items-center space-x-1 justify-end border-2 p-2 border-yellow shadow-md hover:shadow-xl rounded-full cursor-pointer text-primary active:scale-90 transition duration-200">
                <UserIcon className="h-5 font-bold " />
                <ChevronDownIcon className="h-5" />
              </button>
            </div>
          )}
          {isRegisterOpen && (
            <Register closeModal={(e) => handleRegisterClose(e)} />
          )}
        </div>
      </header>
    </>
  );
}
Header.propTypes = {
  authState: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  authState: state.authState,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
