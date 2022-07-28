import React, { useEffect } from "react";
import { useQuery } from "../hooks";
import SearchTip from "./SearchTip";
import { filterTip } from "../actions/tip.actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function Search({ filterTip, tipState }) {
  const query = useQuery();
  useEffect(() => {
    filterTip(query);
  }, [query.get("q"), query.get("category")]);

  return (
    <div className="p-20">
      <div className="p-7 grid grid-cols-4 gap-4">
        {tipState.tips.length > 0 ? (
          <>
            {tipState.tips.map((tip) => {
              return (
                <SearchTip
                  key={tip._id}
                  price={tip.price}
                  place={tip.place}
                  image={tip.image}
                />
              );
            })}
          </>
        ) : (
          "hello"
        )}
      </div>
    </div>
  );
}

Search.propTypes = {
  tipState: PropTypes.object.isRequired,
  filterTip: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  tipState: state.tipState,
});

const mapDispatchToProps = {
  filterTip,
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
