import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTip } from "../actions/tip.actions";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

function TipInformation({ tipState, getTip }) {
  const { tipId } = useParams;
  console.log(tipId);
  useEffect(() => {
    getTip(tipId);
  }, [getTip, tipId]);
  console.log(tipId);
  return (
    <div>
      <div className="flex justify-center items-start">
        {tipState.tip ? <div className="">{tipState.tip.name}</div> : ""}
      </div>
      <div></div>
    </div>
  );
}

TipInformation.propTypes = {
  tipState: PropTypes.object.isRequired,
  getTip: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  tipState: state.tipState,
});

const mapDispatchToProps = {
  getTip,
};
export default connect(mapStateToProps, mapDispatchToProps)(TipInformation);
