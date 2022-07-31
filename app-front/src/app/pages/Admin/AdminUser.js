import React, { useEffect} from "react";
import { connect } from "react-redux";

import { userList } from "../../actions/auth.actions";

function AdminUser({ authState, userList }) {
  
  useEffect(() => {
    userList();
  }, [userList]);
  return (
    <>
      <div className="p-5">
        <table className="w-full h-ful ">
          <thead className="bg-light">
            <tr>
              <th className="p-3 font-normal    text-left">First Name</th>
              <th className="p-3  font-normal  text-left">Last Name</th>
              <th className="p-3  font-normal  text-left">Email</th>
              <th className="p-3  font-normal  text-left">Phone Number</th>
             
            </tr>
          </thead>
          {authState.users.map((user) => (
            <>
              <tbody>
                <tr className="bg-yellow">
                  <td className="p-3 text-normal">{user.firstName}</td>
                  <td className="p-3 text-normal ">{user.lastName}</td>
                  <td className="p-3 text-normal ">{user.email}</td>
                  <td className="p-3 text-normal ">{user.phoneNumber}</td>
                  
                 
                </tr>
              </tbody>
            </>
          ))}
        </table>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  authState: state.authState,
  tipState: state.tipState,
});

const mapDispatchToProps = {
  userList,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminUser);
