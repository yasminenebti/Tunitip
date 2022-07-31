import React, { useRef, useState } from "react";
import { useClickAway } from "react-use";
import PropTypes from "prop-types";
import { login } from "../actions/auth.actions";
import { connect } from "react-redux";

function SignIn({ closeModal, login, authState }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const ref = useRef(null);
  useClickAway(ref, () => {
    closeModal(false);
  });
  const onSubmitData = async (e) => {
    e.preventDefault();
    await login(formData);
    closeModal(false);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-grayDark bg-opacity-60 ">
      <div ref={ref} className="w-1/4  h-2/3 bg-yellow rounded-xl ">
        <button
          onClick={() => closeModal(false)}
          className=" flex justify-end pt-2 px-4 font-semibold hover:shadow-md"
        >
          X
        </button>

        <form onSubmit={(e) => onSubmitData(e)} className="mt-9">
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
              value={formData.email}
            />
          </div>
          <div className="mx-auto max-w-lg p-5">
            <label className="text-md text-grayDark py-5" htmlFor="email">
              Password
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className="text-md block px-3 py-2  rounded-lg w-full 
                bg-yellow border border-silver  shadow-md focus:bg-white focus:border-light focus:outline-none "
              type="password"
              name="password"
              value={formData.password}
            />
          </div>
          <div className="flex justify-end px-3">
            <label className="block text-md text-grayDark italic  my-4">
              <div className="cursor-pointer  border-b border-gray hover:shadow-md">
                {/* <span>Forgot Password?</span> */}
              </div>
            </label>
          </div>
          <div className="px-9 py-3">
            {!authState.loading ? (
              <>
                <button
                  type="submit"
                  className="text-lg font-bold bg-primary w-full text-white rounded-md px-4 py-3 shadow-xl "
                >
                  Login
                </button>
              </>
            ) : (
              <>
                <button
                  disabled={authState.loading}
                  type="submit"
                  className="text-lg font-bold bg-primary cursor-wait w-full text-white rounded-md px-4 py-3 shadow-xl "
                >
                  Login
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
SignIn.propTypes = {
  login: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  authState: state.authState,
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
