import React, { useEffect } from "react";
import { getTips } from "../actions/tip.actions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DisplayTips from "./DisplayTips";
import Footer from "./Footer";

const PageA = ({ getTips, tipState }) => {
  useEffect(() => {
    getTips(20);
  }, [getTips]);
  return (
    <>
      <div className=" ">
        {tipState.tips.length > 0 ? (
          <div className="grid grid-cols-4 p-5   ">
            {tipState.tips.map((tip) => {
              return (
                <DisplayTips
                  id={tip._id}
                  key={tip._id}
                  image={tip.image}
                  name={tip.name}
                  place={tip.place}
                  price={tip.price}
                />
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
      <Footer />
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
