import React from "react";

const Searchbar = () => {
  return (
    <div>
      <div className="m-8 p-8 flex justify-center gap-3 ">
        <input
          className="rounded-xl w-[500px] border-black "
          placeholder="Eneter city name"
        ></input>
        <button className=" text-2xl border-2 rounded-xl p-1 cursor-pointer border-black   ">
          Search{" "}
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
