import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMyTips } from "../actions/tip.actions";
import DisplayMyTips from "./DisplayMyTips";
import PropTypes from "prop-types";

function MyTips({ tipState, getMyTips }) {
  useEffect(() => {
    getMyTips();
  }, [getMyTips]);
  return (
    <>
      {tipState.tips.length > 0 ? (
        <div className="grid grid-cols-5 gap-4 ">
          {tipState.tips.map((tip) => {
            console.log(tip.id);
            return (
              <DisplayMyTips
                key={tip.id}
                tipId={tip._id}
                image={tip.image}
                name={tip.name}
              />
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
MyTips.propTypes = {
  tipState: PropTypes.object.isRequired,
  getMyTips: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  tipState: state.tipState,
});

const mapDispatchToProps = {
  getMyTips,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyTips);
