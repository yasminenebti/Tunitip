import React from "react";

function Category() {
  return (
    <main className="flex justify-center items-center space-x-4 bg-yellow py-2">
      <div className="cursor-pointer  rounded-xl px-4 py-1 border-none hover:shadow-md">
        Home
      </div>
      <div className="cursor-pointer border-2 rounded-xl px-4 py-1 border-none hover:shadow-md ">
        Island
      </div>
      <div className="cursor-pointer border-2 rounded-xl px-4 py-1 border-none hover:shadow-md">
        Cabins
      </div>
      <div className=" cursor-pointer border-2 rounded-xl px-4 py-1 border-none hover:shadow-md">
        Camping
      </div>
    </main>
  );
}

export default Category;
//
