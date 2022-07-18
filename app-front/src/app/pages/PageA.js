import React, { useEffect } from "react";
import { getTips } from "../actions/tip.actions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DisplayTips from "./DisplayTips";

const PageA = ({ getTips, tipState }) => {
  useEffect(() => {
    getTips();
  }, [getTips]);
  return (
    <>
      <div>PageA</div>

      {tipState.tips.length > 0 ? (
        <div className="grid grid-cols-5 gap-4 ">
          {tipState.tips.map((tip) => {
            return (
              <DisplayTips
                key={tip.id}
                name={tip.name}
                description={tip.description}
              />
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

PageA.propTypes = {
  getTips: PropTypes.func.isRequired,
  tipState: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  tipState: state.tipState,
});

const mapDispatchToProps = {
  getTips,
};
export default connect(mapStateToProps, mapDispatchToProps)(PageA);
