import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useQuery } from "../hooks";
import DisplayTips from "./DisplayTips";
import { getTips } from "../actions/tip.actions";

function Search({ tipState, getTips }) {
  const query = useQuery();
  useEffect(() => {
    getTips();
  }, [getTips]);

  return (
    <div className="p-20">
      <div className="grid grid-cols-4 p-5">
        {tipState.tips?.map((tip) => {
          return (
            tip.name.includes(query.get("q")) && (
              <DisplayTips
                id={tip._id}
                key={tip._id}
                image={tip.image}
                name={tip.name}
                place={tip.place}
                price={tip.price}
              />
            )
          );
        })}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  tipState: state.tipState,
});

const mapDispatchToProps = { getTips };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
