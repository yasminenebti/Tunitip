import React, { useState, useRef } from "react";
import logo from "../images/Tunilogo.png";
import { SearchIcon } from "@heroicons/react/solid";
import { UserIcon } from "@heroicons/react/solid";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link, useNavigate } from "react-router-dom";
import SignIn from "../auth/SignIn";
import Register from "../auth/Register";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/auth.actions";
import { useClickAway } from "react-use";
import TipForm from "./TipForm";

function Header({ authState, logout }) {
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDown, setIsDopDown] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isTipFormOpen, setIsTipFormOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  function handleClick() {
    navigate("/myTrips");
  }
  function searchClick() {
    navigate(`/search?q=${searchQuery}`);
  }
  function adminClick() {
    navigate("/admin");
  }

  const handleSignInClose = (e) => {
    setIsOpen(e);
  };
  const handleRegisterClose = (e) => {
    setIsRegisterOpen(e);
  };
  const handleTipFormClose = (e) => {
    setIsTipFormOpen(e);
  };
  const dropRef = useRef(null);
  useClickAway(dropRef, () => {
    setIsDopDown(false);
  });

  return (
    <div>
      <header className="sticky  bg-yellow grid grid-cols-3  py-1 pt-3  md:px-20 ">
        <Link to="/">
          <img alt="" src={logo} layout="fill" width="50px" className="pt-2" />
        </Link>

        <div className=" flex flex-grow items-center rounded-full border-2 border-yellow shadow-md ">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            className="outline-none flex-grow pl-5 bg-transparent text-sm text-text italic"
            type="text"
            placeholder="search here"
          />
          <SearchIcon
            onClick={searchClick}
            className="hidden h-9 bg-primary rounded-full text-yellow  cursor-pointer p-2 md:inline-flex md:mx-2 active:scale-90 transition duration-200"
          />
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
            <div ref={dropRef} className="relative ">
              <div className="flex items-center justify-center">
                <div className=" italic px-4 ">
                  Welcome, {authState.user.firstName}
                </div>

                <button
                  onClick={(e) => setIsDopDown(!isDropDown)}
                  className="flex px-3 items-center space-x-1 justify-end border-2 p-2 border-yellow shadow-md hover:shadow-xl rounded-full cursor-pointer text-primary active:scale-90 transition duration-200  "
                >
                  <UserIcon className="h-5 font-bold " />
                  <ChevronDownIcon className="h-5" />
                </button>
                {isDropDown && (
                  <div className="absolute w-full top-14 left-0 rounded-xl shadow-xl bg-yellow">
                    {authState.user.isHost && (
                      <>
                        <div
                          onClick={(e) => {
                            setIsTipFormOpen(true);
                          }}
                          className=" cursor-pointer text-center py-2   border-b-grayDark  "
                        >
                          Host your Trip
                        </div>
                        <div
                          onClick={handleClick}
                          className=" cursor-pointer text-center py-2   border-b-grayDark  "
                        >
                          My Trips
                        </div>
                      </>
                    )}
                    <div className=" cursor-pointer text-center py-2  ">
                      Help
                    </div>
                    <div
                      onClick={(e) => logout()}
                      className=" cursor-pointer text-center py-2"
                    >
                      Sign Out
                    </div>
                    {authState.user.isAdmin && (
                      <>
                        <div
                          onClick={adminClick}
                          className=" cursor-pointer text-center py-2   border-b-grayDark  "
                        >
                          Admin Dashboard
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
          {isRegisterOpen && (
            <Register closeModal={(e) => handleRegisterClose(e)} />
          )}
          {isTipFormOpen && (
            <TipForm method="post" closeModal={(e) => handleTipFormClose(e)} />
          )}
        </div>
      </header>
    </div>
  );
}
Header.propTypes = {
  authState: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  authState: state.authState,
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
