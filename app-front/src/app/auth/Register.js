import React, { useRef, useState } from "react";
import { useClickAway } from "react-use";
import PropTypes from "prop-types";
import { register } from "../actions/auth.actions";
import { connect } from "react-redux";

function Register({ closeModal, register, authState }) {
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const ref = useRef(null);
  useClickAway(ref, () => {
    closeModal(false);
  });
  const onSubmitData = async (e) => {
    e.preventDefault();
    await register(formData);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-grayDark bg-opacity-20 ">
      <div ref={ref} className="w-1/4 h-3/4 bg-yellow rounded-xl  ">
        <button
          onClick={() => closeModal(false)}
          className=" flex justify-end pt-2  px-4 font-semibold hover:shadow-sm"
        >
          X
        </button>

        <form onSubmit={(e) => onSubmitData(e)} className="">
          <div className="flex">
            <div className="mx-auto p-5">
              <label className="text-md text-grayDark py-5" htmlFor="email">
                First Name
              </label>
              <input
                onChange={(e) => handleChange(e)}
                className="text-md block px-3 py-2  rounded-lg w-full 
            bg-yellow border border-silver  shadow-md focus:bg-white focus:border-light focus:outline-none "
                type="text"
                name="firstName"
                required
                value={formData.firstName}
              />
            </div>
            <div className="mx-auto max-w-lg p-5">
              <label className="text-md text-grayDark py-5" htmlFor="email">
                Last Name
              </label>
              <input
                onChange={(e) => handleChange(e)}
                className="text-md block px-3 py-2  rounded-lg w-full 
            bg-yellow border border-silver  shadow-md focus:bg-white focus:border-light focus:outline-none "
                type="text"
                name="lastName"
                required
                value={formData.lastName}
              />
            </div>
          </div>
          <div className="mx-auto p-5">
            <label className="text-md text-grayDark py-5" htmlFor="email">
              Phone Number
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="text-md block px-3 py-2  rounded-lg w-full 
            bg-yellow border border-silver  shadow-md focus:bg-white focus:border-light focus:outline-none "
              type="tel"
              name="phoneNumber"
              pattern="{2,3,4,6,9}{1} [0-9]{1} [0-9]{3} [0-9]{3}"
              placeholder="20 000 000"
              required
              value={formData.phoneNumber}
            />
          </div>
          <div className="mx-auto p-5">
            <label className="text-md text-grayDark py-5" htmlFor="email">
              Email
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="text-md block px-3 py-2  rounded-lg w-full 
            bg-yellow border border-silver  shadow-md focus:bg-white focus:border-light focus:outline-none "
              type="email"
              name="email"
              required
              value={formData.email}
            />
          </div>
          <div className="mx-auto p-5">
            <label className="text-md text-grayDark py-5" htmlFor="email">
              Password
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="text-md block px-3 py-2  rounded-lg w-full 
            bg-yellow border border-silver  shadow-md focus:bg-white focus:border-light focus:outline-none "
              type="password"
              name="password"
              required
              value={formData.password}
            />
          </div>
          <div className="py-5">
            
            {authState.isRegistered && closeModal(false)}
          </div>
          <div className="px-9 py-3">
            {!authState.loading ? (
              <>
                <button
                  
                  type="submit"
                  className="text-lg font-bold bg-primary w-full text-white rounded-md px-4 py-3 shadow-xl "
                >
                  Register
                </button>
              </>
            ) : (
              <>
                <button
                  
                  disabled={authState.loading}
                  type="submit"
                  className="text-lg font-bold bg-primary cursor-wait w-full text-white rounded-md px-4 py-3 shadow-xl "
                >
                  Register
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  authState: state.authState,
});

const mapDispatchToProps = {
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
