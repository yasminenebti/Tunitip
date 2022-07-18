import React, { useEffect } from "react";
import { getTips } from "../actions/tip.actions";
import DisplayTips from "./DisplayTips";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function PageA({ tipState, getTips }) {
  useEffect(() => {
    getTips();
  }, []);
  return (
    <div className=" p-4 m-20 grid grid-cols-4  gap-6">
      {tipState.tips.map((tip) => {
        return (
          <DisplayTips
            key={tip.id}
            image={tip.image}
            name={tip.name}
            place={tip.place}
          />
        );
      })}
    </div>
  );
}

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
