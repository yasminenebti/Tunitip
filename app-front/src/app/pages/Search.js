import React from "react";
import { useQuery } from "../hooks";
import SearchTip from "./SearchTip";

function Search() {
  const query = useQuery();
  return (
    <>
      <div>{query.get("category")}</div>
      <div className="p-7 grid grid-cols-4 gap-4">
        <SearchTip
          price="120"
          host="yasmine"
          place="marsa , Tunisia"
          image="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
      </div>
    </>
  );
}

export default Search;
