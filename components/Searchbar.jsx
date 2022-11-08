import React from "react";

const Searchbar = () => {
  return (
    <div>
      <div className="m-8 p-8 flex justify-center gap-3 ">
        <input
          type="text"
          className="rounded-xl w-[500px] border-black border-2 bg-transparent"
          placeholder="Enter city name"
        ></input>
        <button className="text-2xl border-2 rounded-xl p-1 cursor-pointer border-black bg-sky-500 hover:bg-sky-700 " >
          Search
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
