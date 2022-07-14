import React, { useState } from "react";
import logo from "../images/Tunilogo.png";
import { SearchIcon } from "@heroicons/react/solid";
import { UserIcon } from "@heroicons/react/solid";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import SignIn from "../auth/SignIn";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = (e) => {
    setIsOpen(e);
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
        <div className="flex items-center justify-end">
          <button
            onClick={(e) => {
              setIsOpen(true);
            }}
            className="flex items-center space-x-1 justify-end border-2 p-2 border-yellow shadow-md hover:shadow-xl rounded-full cursor-pointer text-primary active:scale-90 transition duration-200"
          >
            <UserIcon className="h-5 font-bold " />
            <ChevronDownIcon className="h-5" />
          </button>
          {isOpen && <SignIn closeModal={(e) => handleClose(e)} />}
        </div>
      </header>
    </>
  );
}

export default Header;
