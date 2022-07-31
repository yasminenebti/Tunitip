import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTips } from "../../actions/tip.actions";

function AdminTrips({ tipState, getTips }) {
  useEffect(() => {
    getTips();
  }, [getTips]);
  return (
    <>
      <div className="p-5">
        <table className="w-full h-ful ">
          <thead className="bg-light">
            <tr>
              <th className="p-3 font-normal    text-left">Name</th>
              <th className="p-3  font-normal  text-left">Price</th>
              <th className="p-3  font-normal  text-left">Host</th>
              <th className="p-3  font-normal  text-left">Host Number</th>
            </tr>
          </thead>
          {tipState.tips?.map((tip) => (
            <>
              <tbody>
                <tr className="bg-yellow">
                  <td className="p-3 text-normal">{tip.name}</td>
                  <td className="p-3 text-normal">{tip.price}</td>
                  <td className="p-3 text-normal">{tip.host.firstName}</td>
                  <td className="p-3 text-normal">{tip.host.phoneNumber}</td>
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
  tipState: state.tipState,
});

const mapDispatchToProps = {
  getTips,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminTrips);
