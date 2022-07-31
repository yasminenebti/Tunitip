import React, { useEffect } from "react";
import { connect } from "react-redux";
import { searchTip } from "../actions/tip.actions";
import { useQuery } from "../hooks";
import DisplayTips from "./DisplayTips";


function SearchCategory({ tipState, searchTip }) {
  const query = useQuery();
  useEffect(() => {
    searchTip(query.get("category"));
  }, [query.get("category")]);
  return (
    <>
      <div className="grid grid-cols-4 p-5">
        {tipState.tips?.map((tip) => {
          return (
            tip.category === query.get("category") && (
              <div>
                <DisplayTips
                  id={tip._id}
                  key={tip._id}
                  image={tip.image}
                  name={tip.name}
                  place={tip.place}
                  price={tip.price}
                />
              </div>
            )
          );
        })}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  tipState: state.tipState,
});

const mapDispatchToProps = {
  searchTip,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchCategory);
